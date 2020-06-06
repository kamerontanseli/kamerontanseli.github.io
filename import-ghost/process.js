const fs = require("fs");
const path = require("path");
const https = require("https");
const cheerio = require("cheerio");
const TurndownService = require("turndown");
const turndownService = new TurndownService({
  headingStyle: 'atx'
});

const postsJSON = JSON.parse(
  fs.readFileSync(path.join(__dirname, "posts.json")).toString()
);
const posts = postsJSON.db[0].data.posts;

for (const post of posts) {
  const $ = cheerio.load(post.html);
  const images = $("img")
    .map(function() {
      return $(this).attr("src");
    })
    .get();

  for (const src of images.concat([post.feature_image])) {
    if (src.includes("/content/")) {
      const filename = src.split("/").slice(-1)[0];
      const file = fs.createWriteStream(
        path.join(__dirname, "../src/static/posts", filename)
      );
      https.get("https://kamerontanseli.ghost.io" + src, function(response) {
        response.pipe(file);
        console.log(path.join(__dirname, "../src/static/posts", filename));
      });
    }
  }

  fs.writeFileSync(
    path.join(__dirname, "../src/posts", `${post.slug}.md`),
    `
---
author: Kameron Tanseli
date: '${new Date(post.published_at).toISOString()}'
hero_image: ${post.feature_image.replace(
      /\/content\/images\/\d+\/\d+\//g,
      "../static/posts/"
    )}
title: "${post.title}"
---

${turndownService.turndown(
  post.html.replace(/\/content\/images\/\d+\/\d+\//g, "../static/posts/")
)}
    `.trim()
  );
}

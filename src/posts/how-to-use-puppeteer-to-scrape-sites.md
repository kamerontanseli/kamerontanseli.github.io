---
author: Kameron Tanseli
date: '2020-04-29T20:07:20.000Z'
hero_image: ../static/posts/5b2d227f688967b0997ea7d0a0a4080f.png
title: "Getting Started with Puppeteer"
byline: "In order to scrape a website in 2020 we need to make sure we're using something that can click, tap and scroll as websites have become a lot more dynamic since 1999."
---

Prerequisites

*   [Node.js](https://nodejs.org/en/) Installed
*   [A code editor](https://code.visualstudio.com/)

## Getting Started

In order to scrape a website in 2020 we need to make sure we're using something that can click, tap and scroll as websites have become a lot more dynamic since 1999.

Luckily [Puppeteer](https://pptr.dev/) is a Node API that allows us to control a [Google Chrome Browser](https://www.google.com/chrome/) using simple code commands.

To get started we need to install Puppeteer:

    npm i puppeteer --save
    

Then create a JS file called `index.js` and import Puppeteer like so:

    const puppeteer = require('puppeteer');
    

## Basic Example

Before we do any Puppeteering we need to create an [Async IIFE](https://anthonychu.ca/post/async-await-typescript-nodejs/):

    ;(async () => {
     // code goes here
    })();
    

This will allow us to write `await` calls which are needed as the puppeteer API is asynchronous. Now let's open and close a browser instance:

    ;(async () => {
      // Opens the browser
      const browser = await puppeteer.launch();
      // Opens a new tab
      const page = await browser.newPage();
        
      // closes the entire browser
      await browser.close();
    })();
    

Then after we've got our browser setup let's navigate the tab we opened to go to [HackerNews](https://news.ycombinator.com/):

    (async () => {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      // navigates the tab to load HN
      await page.goto('https://news.ycombinator.com/');
      await browser.close();
    })();
    

Great now that we have a program that can open HackerNews. Let's grab the top 10 headlines:

    (async () => {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.goto('https://news.ycombinator.com/');
      // queries the page and returns an Array of Elements
      const headlines = await page.$$eval(
       '.storylink', 
       // grab the top 10 and get the titles
       stories => stories.slice(0, 10).map(s => s.innerText)
      );
      // log to the console
      console.log(headlines.join('\n'))
      await browser.close();
    })();
    

Our console should now output a result like this:

    Using Reinforcement Learning in the Algorithmic Trading Problem
    Show HN: Insomnia Designer – Open-source collaborative editor for API design
    What other coronaviruses tell us about SARS-CoV-2
    Hacking Together an E-ink Dashboard
    Lyft lays off 17% of workforce, furloughs hundreds more
    Recovered virus patients retest positive due to 'dead' virus fragments: experts
    Why Segment Went Back to a Monolith
    Iron Ox is looking for a DevOps engineer to help scale automated indoor farming
    Good writing is a business advantage
    Building a WireGuard jail with FreeBSD's standard tools
    

## Clicking Elements

A more advanced example is clicking an element on the page. Luckily with Puppeteer its quite straight forward. Here's an example of clicking the upvote button on the front page of HN:

    (async () => {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      // navigates to HN
      await page.goto('https://news.ycombinator.com/');
      // clicks the first vote arrow on the page
      await page.click('.votearrow')
      await browser.close();
    })();
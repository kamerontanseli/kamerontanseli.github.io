---
author: Kameron Tanseli
date: '2020-05-02T21:16:44.000Z'
hero_image: https://images.unsplash.com/photo-1544726982-b414d58fabaa?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=2000&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ
title: "My Productivity Tech Stack"
---

When your product change rapidly in the face of new information. You have a greater chance of coming out on top.

With that I'd like to talk about a tech stack that has helped me build SAAS apps from start to finish.

## Node & Express

Starting off with the basics is crucial. I'm not going to build a SPA if its just me working on it. I need quick turn arounds and a low amount of JS errors so I can get a good night's rest.

I chose Express as its the most mature out of the other alternatives. I know if I encounter a problem that someone has solved it with Express.

Notable packages to use with Express include:

*   [Passport](http://www.passportjs.org) for Authentication
*   [Flash](https://www.npmjs.com/package/express-flash) for Notifications

## Handlebars

I chose Handlebars because its easy to learn and simple to use. Express has a great package which allows me to create flexible layouts using partial tags and overall I've never had any problems or limitations using it.

    {{#unless user.hasPremium}}
      <div class="notification is-info is-light">
        <div><strong>Get Access to GSheet2Mail Premium</strong></div>
        <p style="margin-bottom: 20px;">
          Get access to unlimited feeds and linked spreadsheets with GSheet2Mail Premium
        </p>
        <a href="/app/upgrade" class="button is-info">Get Premium</a>
      </div>
    {{/unless}}
    

## Mongoose

Changing data on the fly without having to do massive SQL migrations is a blessing and a curse (at times). For a single developer looking to launch something quick. Mongoose can be used to whip up a new app in minutes.

    const feedSchema = new Schema(
      {
        user: { type: Schema.Types.ObjectId, ref: "User" },
        title: String,
        description: String,
        spreadsheetId: String
      },
      { timestamps: true }
    );
    
    const Feed = mongoose.model("Feed", feedSchema);
    

## Bulma

Theres few CSS frameworks out there that have developer UX in mind like Bulma has. I love the way the docs are presented and the components fit great on the page without needing much in the way of JavaScript to support them (looking at you Bootstrap 3.0).

![](../static/posts/screenshot-www.oneprofile.info-2020.05.02-22_12_09.png)

One of the many beautiful Bulma websites out there

## Heroku

Controversial. But I just like an all in one service and I really hate AWS. So theres not much in the way of services that I know are going to be around forever like Heroku is.

Plus I can one click provision Mongo Databases and create pipelines like a staging environment etc without having to faff around in documentation.

## Conclusion

So thats the tech stack that helps me build bigger more complex apps. If you're curious I use Next for static sites because Next is just super awesome :)
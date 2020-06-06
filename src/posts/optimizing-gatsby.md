---
author: Kameron Tanseli
date: '2020-05-01T09:21:18.000Z'
hero_image: ../static/posts/34442516-fb1a1a3c-ecc2-11e7-8fe8-530435f22336.jpg
title: "Optimizing Gatsby"
---

I've been getting cuddly with [Gatsby](https://www.gatsbyjs.org/) over the last 5 months as my new role at [Tray.io](https://tray.io) requires me to oversee the development of their marketing site.

Normally Gatsby websites build pretty fast. But at Tray.io our website has over 500 hundred thousand pages. We've definitely stress tested Gatsby.

So here's a few tips that I learn't along the way...

## Keep your queries in your component

One issue that did arise when building out 500 hundred thousand generated pages was that we had unknowingly created 70 thousand [page queries](https://www.gatsbyjs.org/docs/recipes/querying-data/#querying-data-with-a-page-query) instead of 1 static query.

The reason this happened was that we had moved the graphql query outside of the component:

    const query = graphql`
     query {
       allBlogPosts {
         title
       }
     }
    `
    
    const SampleComponent = () => (
      <StaticQuery 
       query={query}
       render={data => {...}}
      />
    )
    

The reason why this happened was due to two things:

1.  We named our query `query` which is a [special name in Gatsby](https://www.gatsbyjs.org/docs/recipes/querying-data/#directions) when they compile the page files (Note: changing the name still had the same effect).
2.  The code which decompiles StaticQuery struggles with outside placed queries ( we're still unsure on this)

We saw an decrease in query times by switching to the hook version of `StaticQuery` :

    const { site } = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                title
              }
            }
          }
        `
      )
    

I think this worked because the [check for whether a hook is used is a lot simpler](https://github.com/gatsbyjs/gatsby/blob/dd344ac4ea292f8b29aa4c55cc08ebc0f19cd761/packages/gatsby/src/query/file-parser.js#L45) compared to the complexity of checking the StaticQuery AST. Less complexity less bugs I guess.

## Stop using all in your queries

If you're querying for a single blog post then instead of doing an `all` with a filter, you can filter on the singular object. No more checks for whether `edges` has results:

    // before
    query Test($slug: String) {
      post: allBlogPosts(limit: 1, filter: { slug: { eq: $slug } }) {
        edges {
          node {
            title
          }
        }
      }
    }
    
    // after
    query Test($slug: String) {
      post: blogPost(slug: { eq: $slug }) {
        title
      }
    }
    

## Limit the amount of data passed to createPage

You might be tempted like we were to pass down a huge query result to a `pageContext` during build time. But you'd be mistaken...

The `pageContext` is type checked during the build process as it's passed to a page query ([You can turn this off](https://www.gatsbyjs.org/docs/scaling-issues/#switch-off-type-inference-for-sitepagecontext) but I don't recommend it).

Instead pass down the slug of the page and use a `StaticQuery` to fetch a one time huge query result.
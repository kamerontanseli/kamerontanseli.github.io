---
author: Kameron Tanseli
date: '2019-12-24T13:56:26.370Z'
hero_image: ../static/js-cover.png
title: 'Writing reusable JavaScript (Revised)'
byline: "Don’t reinvent the wheel, just realign it. — Anthony J. D’Angelo"
---

> Don’t reinvent the wheel, just realign it. — Anthony J. D’Angelo

Note from the author:

_I wrote this article back in 2016 and a lot has changed since. Because of this shift I have decided to remove certain sections that are no longer considered best practises or are based on ES5 APIs. Enjoy :)_


## It is the small things that count

Small problems are usually overlooked by the developer, I myself have rushed and wrote sloppy functions as I had lack of care for the smaller problem.

An example of rushing:

```javascript
$("button").click(() => {
  const heading = $("h1").text();
  const capital = heading[0].toUpperCase() + heading.slice(1);
  $("h1").text(capital);
});
```

How can we improve this? Right away we can pull out the entire function so it is no longer an anonymous function which allows us to reuse this block of code:

```javascript
const capitalizeHeading = () => {
  const heading = $("h1").text();
  const capital = heading[0].toUpperCase() + heading.slice(1);
  $("h1").text(capital);
};

$("button").click(capitalizeHeading);
```

Lets make this even more useful and extract the capitalizing logic:

```javascript
const capitalize = (word = "") => word[0].toUpperCase() + word.slice(1);

const capitalizeHeading = () => {
  const heading = $("h1").text();
  $("h1").text(capitalize(heading));
};

$("button").click(capitalizeHeading);
```

Now we can reuse the capitalizing logic across our program.

Did you know that [jQuery constructs a new Object and queries the DOM every time you call `$(<selector>)`?](https://github.com/jquery/jquery/blob/master/src/core.js#L34). We should cache jQuery objects in order to speed up execution times:

```javascript
const capitalize = (word = "") => word[0].toUpperCase() + word.slice(1);

const capitalizeHeading = () => {
  const $h1 = $("h1"); // cache h1 in a variable
  $h1.text(capitalize($h1.text())); // reuse without creating
};

$("button").click(capitalizeHeading);
```

`capitalizeHeading()` is okay for this one use case but it would be much more useful if it accepted a parameter to indicate what elements to capitalize:

```javascript
const capitalize = (word = "") => word[0].toUpperCase() + word.slice(1);

const capitalizeElement = element => () =>
  element.text(capitalize(element.text()));

$("button").click(capitalizeElement($("h1")));
```

We can also wrap the execution in another function in order to create a partial. This is a function which has its arguments preloaded before execution, in this case we have made the element parameter a `$(“h1”)`.

Turning `capitalizeHeading` into `capitalizeElement(<element>)` allows us to reuse that function for any element we wish to capitalize:

```javascript
capitalizeElement($("h2"));
capitalizeElement($("div[data-title]"));
```

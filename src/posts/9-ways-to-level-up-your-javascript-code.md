---
author: Kameron Tanseli
date: '2019-12-24T13:56:26.370Z'
hero_image: ../static/js-cover.png
title: '9 ways to level up your JavaScript code'
---

I wrote this article back in 2016 and a lot has changed since. Because of this shift I have decided to remove certain sections that are no longer considered best practises or are based on ES5 APIs. Enjoy :)

## 1. Don’t use commas when declaring variables

The variables can now be easily moved around from line to line without having to worry about the commas.

```javascript
let a = 2,
  b = a + 2,
  c = b - 3;

let a = 2;
let b = a + 2;
let c = b - 3;
```

## 2. Move code into separate modules

Before:

```javascript
class Stock {
  checkItemIsInStock(item) {
    // logic
  }
}

class Basket {
  constructor() {
    this.stock = new Stock();
    this.items = [];
  }
  addToBasket(item) {
    if (this.stock.checkItemIsInStock(item)) {
      this.items.push(item);
    }
  }
}
```

After:

```javascript
import Stock from "./stock";
import Basket from "./basket";

const shoppingCart = new Basket(new Stock());
```

## 3. Utilize the Module pattern

The closure created by the [Immediately Invoked Function Expression (IIFE)](https://ultimatecourses.com/blog/mastering-the-module-pattern) allows privacy. E.g: The `privateMethod()` is only accessible by the inner `Basket` class:

```javascript
const Basket = (() => {
  // encapsulate a private function
  const privateMethod = () => true;

  class Basket {
    publicMethod() {
      privateMethod(); // use private methods
    }
  }

  return Basket;
})();
```

## 4. Comment your code

```javascript
/**
 * Creates a Point to be used in D3
 * @class Point
 * @example
 * new Point(2, 3);
 */
class Point {
  /**
   * @constructor
   * @param {number} x - The x value.
   * @param {number} y - The y value.
   * @returns {Point} new instance of Point
   */
  constructor(x, y) {
    // ...
  }
}
```

This allows developers to get a deeper understanding of what is happening in your code without having to figure it out from the code. If you use [JSDOC](http://usejsdoc.org/about-getting-started.html) the comments can be used to generate online documentation guides.

## 5. Learn design patterns

- [The Observer pattern](http://www.dofactory.com/javascript/observer-design-pattern) helps your modules communicate to each other through events thus providing loose coupling in your app.

- [The Mediator pattern](http://www.dofactory.com/javascript/mediator-design-pattern) takes control over a group of objects by encapsulating how these objects interact. E.g: a basket that handles items.

- [The Iterator pattern](http://www.dofactory.com/javascript/iterator-design-pattern) is the underlying pattern for ES2015 generators.

- [The Facade pattern](http://www.dofactory.com/javascript/facade-design-pattern) provides an simple interface which encapsulates the end user from complex functionality. E.g: Email module with simple methods such as start, stop and pause;

Not only are these solutions to commonly solved problems, they are a way of describing application structure to other developers fairly simply. E.g: _“The basket module is a mediator for all the store items, it communicates to the payment module via an observer”_.

## 6. Pass objects into functions with a large number of arguments

```javascript
// not so good
function colorWidget(
  element,
  colorValue,
  colorRange,
  colorFormat,
  opacity,
  onChange
) {}

colorWidget($("<div/>"), "#fff" /*...*/);

// way better
function colorWidget({
  element = $("<div/>"),
  colorValue = "#000",
  colorRange = [0, 255],
  colorFormat = "rgb",
  opacity = 0.8,
  onChange = () => {}
}) {
  // ...
}
colorWidget({
  element: $("<div/>")
});
```
1. Simple to add new options
2. The developer doesn’t have to worry about the order of the arguments
3. Simple to add default values

## 7. Don’t use type constructors unless specifically necessary

```javascript
// Before
const x1 = new Object();
const x2 = new String();
const x3 = new Number();
const x4 = new Boolean();
const x5 = new Array();
const x6 = new RegExp("()");
const x7 = new Function();

// After
const x1 = {};           
const x2 = "";           
const x3 = 0;            
const x4 = false;        
const x5 = [];           
const x6 = /()/;         
const x7 = function(){};
```

The creation through type constructors is significantly slower than primitives. Also because the end result of the constructor is an `Object` rather than a primitive value you get [nasty side effects](http://stackoverflow.com/questions/5750656/whats-the-point-of-new-stringx-in-javascript) like so:

```javascript
const a = new String("x");
a === "x"  //false
a == "x" //true

const b = "dog";
b.woof = true;
b.woof; // undefined

const c = new String("dog");
c.woof = true;
c.woof; // true
```

## 8. Make sure your context is right

```javascript
class Button {
  constructor () {
    this.count = 0;
  }
  click () {
    this.count += 1;
  }
  init () {
    $("button").click(this.click);
  }
}
```

From a glance this should work however when a user clicks the button we will get an error that count doesn’t exist. This is because the click function is executed in the context of the `$("button")` element instead of the `Button` object. We can fix this by binding the context to the function:

```javascript
class Button {
  constructor () {
    this.count = 0;
  }
  click () {
    this.count += 1;
  }
  init () {
    $("button").click(() => this.click());
    // or using bind
    $("button").click(this.click.bind(this));
  }
}
```

## 9. Apply

> The `apply()` method calls a function with a given this `value` and `arguments` provided as an array (or [an array-like object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections#Working_with_array-like_objects)). — MDN

Some useful instances of using apply:

```javascript
// emulating "super" in an constructor 
SomeConstructor.prototype.somemethod.apply(this, arguments);

// passing an array of promises to jQuery.when
$.when.apply($, [$.get(), $.get()]);

// finding the max number in an array
Math.max.apply(Math.max, [1,2,3,4,5]);
```

## Bonus Points

Contributed by: [Russley Shaw](https://medium.com/@russleyshaw)

## 10. Use let and const over var

`let` allows you to declare variables that are limited in scope to the block, statement, or expression on which it is used.

Lets look at a few use cases where this is useful over `var` statements:

```javascript
var elements = document.querySelectorAll('p');
for (var i = 0; i < elements.length; i++) {                                 
    // have to wrap in IIFE other i would be elements.length
    (function(count){  
       elements[count].addEventListener('click', function(){
           elements[count + 1].remove();
       });
     })(i);
}

// using let
let elements = document.querySelectorAll('p');
for (let i = 0; i < elements.length; i++) {
   elements[i].addEventListener('click', function(){
        elements[i + 1].remove();
   });
}
```

The reason why the top example would be `elements.length` is because `i` is referenced directly so on the next iteration `i` is incremented. When we wrap the code in an IIFE we reference `i` under the parameter `count` thus removing the direct reference.

`const` allows the declaration of variables that cannot be re referenced. This is useful for declaring constants (the keyword originates from it).

```javascript
const API_KEY = '2rh8ruberigub38rt4tu4t4';
const PI = 3.14;
```

However objects and arrays can still be accessed and changed. To stop this use `Object.freeze()`:

```javascript
const API_CONFIG = Object.freeze({
  'key': '8ry4iuggi4g38430t5485jmub',
  'endpoint': '/some/boring/api/path/'
});
API_CONFIG.key = null; // attempt to change
API_CONFIG.key; //= '8ry4iuggi4g38430t5485jmub'

const EVENS = Object.freeze([ 2, 4, 6, 8]);
EVENS[2] = 9;
EVENS[2]; //= 6
```

## 11. Avoid using “or” when referencing variables

The only reason to avoid doing this is when the variable is allowed to be `false` . Take a look at the example below:

```javascript
let msg = ''; //= should hide the button
let btnMsg = msg || 'Click Me';

btnMsg; //= 'Click Me'
```

The reason this happens is due to the conversion of the `"”` into a Boolean which returns false . As the `"”` is counted as `false` the `or` comparison returns the other side `'Click Me'`.

If you want to have shorthand if statements you can use the ternary operator:

```javascript
var msg = ''; //= should hide the button
var btnMsg = msg.length < 5 ? msg : 'Click Me';

btnMsg; //= ''
```
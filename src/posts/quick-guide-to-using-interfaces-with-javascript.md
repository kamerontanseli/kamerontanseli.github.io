---
author: Kameron Tanseli
date: '2019-12-24T13:56:26.370Z'
hero_image: ../static/js-cover.png
title: 'Quick Guide to using interfaces with JavaScript'
---

I wrote this article back in 2016 and a lot has changed since. Because of this shift I have decided to remove certain sections that are no longer considered best practises or are based on ES5 APIs. Enjoy :)

Interfaces are great for when you need to enforce some rules about how a developer builds a class. For example we have a Form class, this class is composed of lots of Fields/Inputs. Instead of writing logic to handle all different types of inputs we can define a common interface between them all.

Our Interface will contain a `render()` method to render out the input and a `value()` method to get the input’s value.

```javascript
const required = () => {
  throw new Error("Implement!");
};

class InputInterface {
  render = required;
  value = required;
}
```

We can apply the Interface to a Base Input class so that all of our derived classes have the Interface.

```javascript
class Input extends InputInterface {}
```

Now whenever you call `render()` you will get an Implementation Error. This forces the developer to override the Base class’s methods. Thus you have forced them to implement the interface.

```javascript
class Checkbox extends Input {
  constructor () {
    this.$el = $("<input/>", { type: "checkbox" }); 
  }
  render () {
    return this.$el;
  }
  value () {
    return this.$el.prop("checked");
  }
}
```
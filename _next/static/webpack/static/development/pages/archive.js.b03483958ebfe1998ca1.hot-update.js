webpackHotUpdate("static/development/pages/archive.js",{

/***/ "./posts/quick-guide-to-using-interfaces-with-javascript.md":
/*!******************************************************************!*\
  !*** ./posts/quick-guide-to-using-interfaces-with-javascript.md ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\nauthor: Kameron Tanseli\ndate: '2019-12-24T13:56:26.370Z'\nhero_image: ../static/js-cover.png\ntitle: 'Quick Guide to using interfaces with JavaScript'\nbyline: 'I wrote this article back in 2016 and a lot has changed since. Because of this shift I have decided to remove certain sections that are no longer considered best practises or are based on ES5 APIs. Enjoy :)'\n---\n\nI wrote this article back in 2016 and a lot has changed since. Because of this shift I have decided to remove certain sections that are no longer considered best practises or are based on ES5 APIs. Enjoy :)\n\nInterfaces are great for when you need to enforce some rules about how a developer builds a class. For example we have a Form class, this class is composed of lots of Fields/Inputs. Instead of writing logic to handle all different types of inputs we can define a common interface between them all.\n\nOur Interface will contain a `render()` method to render out the input and a `value()` method to get the input’s value.\n\n```javascript\nconst required = () => {\n  throw new Error(\"Implement!\");\n};\n\nclass InputInterface {\n  render = required;\n  value = required;\n}\n```\n\nWe can apply the Interface to a Base Input class so that all of our derived classes have the Interface.\n\n```javascript\nclass Input extends InputInterface {}\n```\n\nNow whenever you call `render()` you will get an Implementation Error. This forces the developer to override the Base class’s methods. Thus you have forced them to implement the interface.\n\n```javascript\nclass Checkbox extends Input {\n  constructor () {\n    this.$el = $(\"<input/>\", { type: \"checkbox\" }); \n  }\n  render () {\n    return this.$el;\n  }\n  value () {\n    return this.$el.prop(\"checked\");\n  }\n}\n```");

/***/ })

})
//# sourceMappingURL=archive.js.b03483958ebfe1998ca1.hot-update.js.map
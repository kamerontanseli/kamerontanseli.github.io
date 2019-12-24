webpackHotUpdate("static/development/pages/index.js",{

/***/ "./posts sync recursive \\.md$":
/*!**************************!*\
  !*** ./posts sync \.md$ ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./9-ways-to-level-up-your-javascript-code.md": "./posts/9-ways-to-level-up-your-javascript-code.md",
	"./quick-guide-to-using-interfaces-with-javascript.md": "./posts/quick-guide-to-using-interfaces-with-javascript.md",
	"./the-rules-of-reusable-components.md": "./posts/the-rules-of-reusable-components.md",
	"./utilise-render-props-to-separate-logic-from-presentation-in-react.md": "./posts/utilise-render-props-to-separate-logic-from-presentation-in-react.md",
	"./writing-reusable-javascript.md": "./posts/writing-reusable-javascript.md"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./posts sync recursive \\.md$";

/***/ }),

/***/ "./posts/writing-reusable-javascript.md":
/*!**********************************************!*\
  !*** ./posts/writing-reusable-javascript.md ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("# Writing reusable JavaScript (Revised)\n\n> Don’t reinvent the wheel, just realign it. — Anthony J. D’Angelo\n\nNote from the author:\n\n_I wrote this article back in 2016 and a lot has changed since. Because of this shift I have decided to remove certain sections that are no longer considered best practises or are based on ES5 APIs. Enjoy :)_\n\n\n## It is the small things that count\n\nSmall problems are usually overlooked by the developer, I myself have rushed and wrote sloppy functions as I had lack of care for the smaller problem.\n\nAn example of rushing:\n\n```javascript\n$(\"button\").click(() => {\n  const heading = $(\"h1\").text();\n  const capital = heading[0].toUpperCase() + heading.slice(1);\n  $(\"h1\").text(capital);\n});\n```\n\nHow can we improve this? Right away we can pull out the entire function so it is no longer an anonymous function which allows us to reuse this block of code:\n\n```javascript\nconst capitalizeHeading = () => {\n  const heading = $(\"h1\").text();\n  const capital = heading[0].toUpperCase() + heading.slice(1);\n  $(\"h1\").text(capital);\n};\n\n$(\"button\").click(capitalizeHeading);\n```\n\nLets make this even more useful and extract the capitalizing logic:\n\n```javascript\nconst capitalize = (word = \"\") => word[0].toUpperCase() + word.slice(1);\n\nconst capitalizeHeading = () => {\n  const heading = $(\"h1\").text();\n  $(\"h1\").text(capitalize(heading));\n};\n\n$(\"button\").click(capitalizeHeading);\n```\n\nNow we can reuse the capitalizing logic across our program.\n\nDid you know that [jQuery constructs a new Object and queries the DOM every time you call `$(<selector>)`?](https://github.com/jquery/jquery/blob/master/src/core.js#L34). We should cache jQuery objects in order to speed up execution times:\n\n```javascript\nconst capitalize = (word = \"\") => word[0].toUpperCase() + word.slice(1);\n\nconst capitalizeHeading = () => {\n  const $h1 = $(\"h1\"); // cache h1 in a variable\n  $h1.text(capitalize($h1.text())); // reuse without creating\n};\n\n$(\"button\").click(capitalizeHeading);\n```\n\n`capitalizeHeading()` is okay for this one use case but it would be much more useful if it accepted a parameter to indicate what elements to capitalize:\n\n```javascript\nconst capitalize = (word = \"\") => word[0].toUpperCase() + word.slice(1);\n\nconst capitalizeElement = element => () =>\n  element.text(capitalize(element.text()));\n\n$(\"button\").click(capitalizeElement($(\"h1\")));\n```\n\nWe can also wrap the execution in another function in order to create a partial. This is a function which has its arguments preloaded before execution, in this case we have made the element parameter a `$(“h1”)`.\n\nTurning `capitalizeHeading` into `capitalizeElement(<element>)` allows us to reuse that function for any element we wish to capitalize:\n\n```javascript\ncapitalizeElement($(\"h2\"));\ncapitalizeElement($(\"div[data-title]\"));\n```\n");

/***/ })

})
//# sourceMappingURL=index.js.02cc128e25c458c7cece.hot-update.js.map
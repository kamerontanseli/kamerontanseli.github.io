webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/BlogList.js":
/*!********************************!*\
  !*** ./components/BlogList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "../node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-markdown */ "../node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/kamerontanseli/Documents/kameron-blog/src/components/BlogList.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var BlogList = function BlogList(props) {
  function truncateSummary(content) {
    return content.slice(0, 200).trimEnd();
  }

  function reformatDate(fullDate) {
    var date = new Date(fullDate);
    return date.toDateString().slice(4);
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("ul", {
    className: "jsx-1848899881" + " " + "list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, props.allBlogs.map(function (post) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      key: post.slug,
      href: {
        pathname: "/blog/".concat(post.slug)
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-1848899881",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx("li", {
      className: "jsx-1848899881",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1848899881" + " " + "hero_image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx("img", {
      src: post.document.data.hero_image,
      alt: post.document.data.hero_image,
      className: "jsx-1848899881",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-1848899881" + " " + "blog__info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx("h2", {
      className: "jsx-1848899881",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, post.document.data.title), __jsx("h3", {
      className: "jsx-1848899881",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, " ", reformatDate(post.document.data.date)), __jsx("p", {
      className: "jsx-1848899881",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_3___default.a, {
      source: truncateSummary(post.document.content),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }))))));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1848899881",
    __self: this
  }, ".jsx-1848899881{margin-bottom:0;}a.jsx-1848899881:hover{opacity:1;}a.jsx-1848899881:hover li.jsx-1848899881 div.hero_image.jsx-1848899881 img.jsx-1848899881{opacity:0.8;-webkit-transition:opacity 0.3s ease;transition:opacity 0.3s ease;}a.jsx-1848899881:hover li.jsx-1848899881 .blog__info.jsx-1848899881 h2.jsx-1848899881,a.jsx-1848899881:hover li.jsx-1848899881 .blog__info.jsx-1848899881 h3.jsx-1848899881,a.jsx-1848899881:hover li.jsx-1848899881 .blog__info.jsx-1848899881 p.jsx-1848899881{-webkit-transform:translateX(10px);-ms-transform:translateX(10px);transform:translateX(10px);-webkit-transition:-webkit-transform 0.5s ease-out;-webkit-transition:transform 0.5s ease-out;transition:transform 0.5s ease-out;}.hero_image.jsx-1848899881{width:100%;height:33vh;overflow:hidden;background-color:#000;}.hero_image.jsx-1848899881 img.jsx-1848899881{object-fit:cover;object-position:50% 50%;opacity:1;-webkit-transition:opacity 0.3s ease;transition:opacity 0.3s ease;min-height:100%;}.blog__info.jsx-1848899881{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:1.5rem 1.25rem;-webkit-transform:translateX(0px);-ms-transform:translateX(0px);transform:translateX(0px);-webkit-transition:-webkit-transform 0.3s ease-in;-webkit-transition:transform 0.3s ease-in;transition:transform 0.3s ease-in;border-bottom:1px solid #ebebeb;}.blog__info.jsx-1848899881 h2.jsx-1848899881,.blog__info.jsx-1848899881 h3.jsx-1848899881,.blog__info.jsx-1848899881 p.jsx-1848899881{-webkit-transform:translateX(0px);-ms-transform:translateX(0px);transform:translateX(0px);-webkit-transition:-webkit-transform 0.5s ease-out;-webkit-transition:transform 0.5s ease-out;transition:transform 0.5s ease-out;}li.jsx-1848899881{opacity:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;min-height:38vh;margin-bottom:0;}h2.jsx-1848899881{margin-bottom:0.5rem;}h3.jsx-1848899881{margin-bottom:1rem;}p.jsx-1848899881{max-width:900px;}@media (min-width:768px){li.jsx-1848899881{min-height:250px;height:33.333vh;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.hero_image.jsx-1848899881{height:100%;}.hero_image.jsx-1848899881 img.jsx-1848899881{min-width:100%;height:100%;width:auto;min-height:0;}.blog__info.jsx-1848899881{min-width:70%;}}@media (min-width:1280px){.blog__info.jsx-1848899881{padding:3rem;}h3.jsx-1848899881{margin-bottom:1.2rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYW1lcm9udGFuc2VsaS9Eb2N1bWVudHMva2FtZXJvbi1ibG9nL3NyYy9jb21wb25lbnRzL0Jsb2dMaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDUyxBQUUyQixBQUVKLEFBR0UsQUFJZSxBQUloQixBQU1NLEFBT0osQUFTYSxBQUlWLEFBUUssQUFHRixBQUdILEFBSUcsQUFLTCxBQUdHLEFBTUQsQUFLRCxBQUdRLFVBNUV6QixDQVdjLENBUmlCLEFBeUQ3QixDQWNBLENBTEEsQ0FOYyxDQTFCRCxBQWNmLEFBNkJGLENBL0Q0QixBQXNDTixFQVBwQixFQUhBLEFBZ0NFLEVBakVnQixJQW9ESCxNQVJRLEtBU04sQ0FwRE8sRUFLWixVQUNtQixBQStDN0IsVUFwREYsYUFVd0IsSUFwQnhCLFlBNkJxQyxBQUtaLEdBL0JZLFNBa0RuQyxlQXJDZ0IsZ0JBQ2xCLG1CQUl5QixxQ0FjRCw4QkFMeEIsR0ExQkEsNkJBa0J5QixnQkFjUCxPQWJVLFNBY1YsZ0JBQ2xCLGlFQWRvQyw4SEFDRixnQ0FDbEMiLCJmaWxlIjoiL1VzZXJzL2thbWVyb250YW5zZWxpL0RvY3VtZW50cy9rYW1lcm9uLWJsb2cvc3JjL2NvbXBvbmVudHMvQmxvZ0xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIjtcblxuY29uc3QgQmxvZ0xpc3QgPSAocHJvcHMpID0+IHtcblxuICBmdW5jdGlvbiB0cnVuY2F0ZVN1bW1hcnkoY29udGVudCkge1xuICAgIHJldHVybiBjb250ZW50LnNsaWNlKDAsIDIwMCkudHJpbUVuZCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVmb3JtYXREYXRlKGZ1bGxEYXRlKSB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGZ1bGxEYXRlKVxuICAgIHJldHVybiBkYXRlLnRvRGF0ZVN0cmluZygpLnNsaWNlKDQpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3RcIj5cbiAgICAgICAge3Byb3BzLmFsbEJsb2dzLm1hcChwb3N0ID0+IChcbiAgICAgICAgICA8TGlua1xuICAgICAgICAgICAga2V5PXtwb3N0LnNsdWd9XG4gICAgICAgICAgICBocmVmPXt7IHBhdGhuYW1lOiBgL2Jsb2cvJHtwb3N0LnNsdWd9YCB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm9faW1hZ2VcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17cG9zdC5kb2N1bWVudC5kYXRhLmhlcm9faW1hZ2V9IGFsdD17cG9zdC5kb2N1bWVudC5kYXRhLmhlcm9faW1hZ2V9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2dfX2luZm9cIj5cbiAgICAgICAgICAgICAgICA8aDI+e3Bvc3QuZG9jdW1lbnQuZGF0YS50aXRsZX08L2gyPlxuICAgICAgICAgICAgICAgIDxoMz4ge3JlZm9ybWF0RGF0ZShwb3N0LmRvY3VtZW50LmRhdGEuZGF0ZSl9PC9oMz5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIDxSZWFjdE1hcmtkb3duIHNvdXJjZT17dHJ1bmNhdGVTdW1tYXJ5KHBvc3QuZG9jdW1lbnQuY29udGVudCl9IC8+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhOmhvdmVyIGxpIGRpdi5oZXJvX2ltYWdlIGltZyB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYTpob3ZlciBsaSAuYmxvZ19faW5mbyBoMiwgYTpob3ZlciBsaSAuYmxvZ19faW5mbyBoMywgYTpob3ZlciBsaSAuYmxvZ19faW5mbyBwIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2Utb3V0O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaGVyb19pbWFnZSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMzN2aDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaGVyb19pbWFnZSBpbWcge1xuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICBvYmplY3QtcG9zaXRpb246IDUwJSA1MCU7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYmxvZ19faW5mbyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZzogMS41cmVtIDEuMjVyZW07XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW47XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ViZWJlYjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJsb2dfX2luZm8gaDIsIC5ibG9nX19pbmZvIGgzLCAuYmxvZ19faW5mbyBwIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1vdXQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IGluaGVyaXQ7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgbWluLWhlaWdodDogMzh2aDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDMge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDkwMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgbWluLWhlaWdodDogMjUwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMzMuMzMzdmg7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaGVyb19pbWFnZSB7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5oZXJvX2ltYWdlIGltZyB7XG4gICAgICAgICAgICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgICAgbWluLWhlaWdodDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ibG9nX19pbmZvIHtcbiAgICAgICAgICAgICAgbWluLXdpZHRoOiA3MCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHtcbiAgICAgICAgICAgIC5ibG9nX19pbmZvIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogM3JlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS4ycmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2dMaXN0O1xuIl19 */\n/*@ sourceURL=/Users/kamerontanseli/Documents/kameron-blog/src/components/BlogList.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (BlogList);

/***/ }),

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

/***/ "./posts/9-ways-to-level-up-your-javascript-code.md":
/*!**********************************************************!*\
  !*** ./posts/9-ways-to-level-up-your-javascript-code.md ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\nauthor: Kameron Tanseli\ndate: '2019-12-24T13:56:26.370Z'\nhero_image: ../static/js-cover.png\ntitle: '9 ways to level up your JavaScript code'\n---\n\nI wrote this article back in 2016 and a lot has changed since. Because of this shift I have decided to remove certain sections that are no longer considered best practises or are based on ES5 APIs. Enjoy :)\n\n## 1. Don’t use commas when declaring variables\n\nThe variables can now be easily moved around from line to line without having to worry about the commas.\n\n```javascript\nlet a = 2,\n  b = a + 2,\n  c = b - 3;\n\nlet a = 2;\nlet b = a + 2;\nlet c = b - 3;\n```\n\n## 2. Move code into separate modules\n\nBefore:\n\n```javascript\nclass Stock {\n  checkItemIsInStock(item) {\n    // logic\n  }\n}\n\nclass Basket {\n  constructor() {\n    this.stock = new Stock();\n    this.items = [];\n  }\n  addToBasket(item) {\n    if (this.stock.checkItemIsInStock(item)) {\n      this.items.push(item);\n    }\n  }\n}\n```\n\nAfter:\n\n```javascript\nimport Stock from \"./stock\";\nimport Basket from \"./basket\";\n\nconst shoppingCart = new Basket(new Stock());\n```\n\n## 3. Utilize the Module pattern\n\nThe closure created by the [Immediately Invoked Function Expression (IIFE)](https://ultimatecourses.com/blog/mastering-the-module-pattern) allows privacy. E.g: The `privateMethod()` is only accessible by the inner `Basket` class:\n\n```javascript\nconst Basket = (() => {\n  // encapsulate a private function\n  const privateMethod = () => true;\n\n  class Basket {\n    publicMethod() {\n      privateMethod(); // use private methods\n    }\n  }\n\n  return Basket;\n})();\n```\n\n## 4. Comment your code\n\n```javascript\n/**\n * Creates a Point to be used in D3\n * @class Point\n * @example\n * new Point(2, 3);\n */\nclass Point {\n  /**\n   * @constructor\n   * @param {number} x - The x value.\n   * @param {number} y - The y value.\n   * @returns {Point} new instance of Point\n   */\n  constructor(x, y) {\n    // ...\n  }\n}\n```\n\nThis allows developers to get a deeper understanding of what is happening in your code without having to figure it out from the code. If you use [JSDOC](http://usejsdoc.org/about-getting-started.html) the comments can be used to generate online documentation guides.\n\n## 5. Learn design patterns\n\n- [The Observer pattern](http://www.dofactory.com/javascript/observer-design-pattern) helps your modules communicate to each other through events thus providing loose coupling in your app.\n\n- [The Mediator pattern](http://www.dofactory.com/javascript/mediator-design-pattern) takes control over a group of objects by encapsulating how these objects interact. E.g: a basket that handles items.\n\n- [The Iterator pattern](http://www.dofactory.com/javascript/iterator-design-pattern) is the underlying pattern for ES2015 generators.\n\n- [The Facade pattern](http://www.dofactory.com/javascript/facade-design-pattern) provides an simple interface which encapsulates the end user from complex functionality. E.g: Email module with simple methods such as start, stop and pause;\n\nNot only are these solutions to commonly solved problems, they are a way of describing application structure to other developers fairly simply. E.g: _“The basket module is a mediator for all the store items, it communicates to the payment module via an observer”_.\n\n## 6. Pass objects into functions with a large number of arguments\n\n```javascript\n// not so good\nfunction colorWidget(\n  element,\n  colorValue,\n  colorRange,\n  colorFormat,\n  opacity,\n  onChange\n) {}\n\ncolorWidget($(\"<div/>\"), \"#fff\" /*...*/);\n\n// way better\nfunction colorWidget({\n  element = $(\"<div/>\"),\n  colorValue = \"#000\",\n  colorRange = [0, 255],\n  colorFormat = \"rgb\",\n  opacity = 0.8,\n  onChange = () => {}\n}) {\n  // ...\n}\ncolorWidget({\n  element: $(\"<div/>\")\n});\n```\n1. Simple to add new options\n2. The developer doesn’t have to worry about the order of the arguments\n3. Simple to add default values\n\n## 7. Don’t use type constructors unless specifically necessary\n\n```javascript\n// Before\nconst x1 = new Object();\nconst x2 = new String();\nconst x3 = new Number();\nconst x4 = new Boolean();\nconst x5 = new Array();\nconst x6 = new RegExp(\"()\");\nconst x7 = new Function();\n\n// After\nconst x1 = {};           \nconst x2 = \"\";           \nconst x3 = 0;            \nconst x4 = false;        \nconst x5 = [];           \nconst x6 = /()/;         \nconst x7 = function(){};\n```\n\nThe creation through type constructors is significantly slower than primitives. Also because the end result of the constructor is an `Object` rather than a primitive value you get [nasty side effects](http://stackoverflow.com/questions/5750656/whats-the-point-of-new-stringx-in-javascript) like so:\n\n```javascript\nconst a = new String(\"x\");\na === \"x\"  //false\na == \"x\" //true\n\nconst b = \"dog\";\nb.woof = true;\nb.woof; // undefined\n\nconst c = new String(\"dog\");\nc.woof = true;\nc.woof; // true\n```\n\n## 8. Make sure your context is right\n\n```javascript\nclass Button {\n  constructor () {\n    this.count = 0;\n  }\n  click () {\n    this.count += 1;\n  }\n  init () {\n    $(\"button\").click(this.click);\n  }\n}\n```\n\nFrom a glance this should work however when a user clicks the button we will get an error that count doesn’t exist. This is because the click function is executed in the context of the `$(\"button\")` element instead of the `Button` object. We can fix this by binding the context to the function:\n\n```javascript\nclass Button {\n  constructor () {\n    this.count = 0;\n  }\n  click () {\n    this.count += 1;\n  }\n  init () {\n    $(\"button\").click(() => this.click());\n    // or using bind\n    $(\"button\").click(this.click.bind(this));\n  }\n}\n```\n\n## 9. Apply\n\n> The `apply()` method calls a function with a given this `value` and `arguments` provided as an array (or [an array-like object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections#Working_with_array-like_objects)). — MDN\n\nSome useful instances of using apply:\n\n```javascript\n// emulating \"super\" in an constructor \nSomeConstructor.prototype.somemethod.apply(this, arguments);\n\n// passing an array of promises to jQuery.when\n$.when.apply($, [$.get(), $.get()]);\n\n// finding the max number in an array\nMath.max.apply(Math.max, [1,2,3,4,5]);\n```\n\n## Bonus Points\n\nContributed by: [Russley Shaw](https://medium.com/@russleyshaw)\n\n## 10. Use let and const over var\n\n`let` allows you to declare variables that are limited in scope to the block, statement, or expression on which it is used.\n\nLets look at a few use cases where this is useful over `var` statements:\n\n```javascript\nvar elements = document.querySelectorAll('p');\nfor (var i = 0; i < elements.length; i++) {                                 \n    // have to wrap in IIFE other i would be elements.length\n    (function(count){  \n       elements[count].addEventListener('click', function(){\n           elements[count + 1].remove();\n       });\n     })(i);\n}\n\n// using let\nlet elements = document.querySelectorAll('p');\nfor (let i = 0; i < elements.length; i++) {\n   elements[i].addEventListener('click', function(){\n        elements[i + 1].remove();\n   });\n}\n```\n\nThe reason why the top example would be `elements.length` is because `i` is referenced directly so on the next iteration `i` is incremented. When we wrap the code in an IIFE we reference `i` under the parameter `count` thus removing the direct reference.\n\n`const` allows the declaration of variables that cannot be re referenced. This is useful for declaring constants (the keyword originates from it).\n\n```javascript\nconst API_KEY = '2rh8ruberigub38rt4tu4t4';\nconst PI = 3.14;\n```\n\nHowever objects and arrays can still be accessed and changed. To stop this use `Object.freeze()`:\n\n```javascript\nconst API_CONFIG = Object.freeze({\n  'key': '8ry4iuggi4g38430t5485jmub',\n  'endpoint': '/some/boring/api/path/'\n});\nAPI_CONFIG.key = null; // attempt to change\nAPI_CONFIG.key; //= '8ry4iuggi4g38430t5485jmub'\n\nconst EVENS = Object.freeze([ 2, 4, 6, 8]);\nEVENS[2] = 9;\nEVENS[2]; //= 6\n```\n\n## 11. Avoid using “or” when referencing variables\n\nThe only reason to avoid doing this is when the variable is allowed to be `false` . Take a look at the example below:\n\n```javascript\nlet msg = ''; //= should hide the button\nlet btnMsg = msg || 'Click Me';\n\nbtnMsg; //= 'Click Me'\n```\n\nThe reason this happens is due to the conversion of the `\"”` into a Boolean which returns false . As the `\"”` is counted as `false` the `or` comparison returns the other side `'Click Me'`.\n\nIf you want to have shorthand if statements you can use the ternary operator:\n\n```javascript\nvar msg = ''; //= should hide the button\nvar btnMsg = msg.length < 5 ? msg : 'Click Me';\n\nbtnMsg; //= ''\n```");

/***/ }),

/***/ "./posts/bali.md":
false,

/***/ "./posts/iceland.md":
false,

/***/ "./posts/joshua-tree.md":
false,

/***/ "./posts/mauritius.md":
false,

/***/ "./posts/quick-guide-to-using-interfaces-with-javascript.md":
/*!******************************************************************!*\
  !*** ./posts/quick-guide-to-using-interfaces-with-javascript.md ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\nauthor: Kameron Tanseli\ndate: '2019-12-24T13:56:26.370Z'\nhero_image: ../static/js-cover.png\ntitle: 'Quick Guide to using interfaces with JavaScript'\n---\n\nI wrote this article back in 2016 and a lot has changed since. Because of this shift I have decided to remove certain sections that are no longer considered best practises or are based on ES5 APIs. Enjoy :)\n\nInterfaces are great for when you need to enforce some rules about how a developer builds a class. For example we have a Form class, this class is composed of lots of Fields/Inputs. Instead of writing logic to handle all different types of inputs we can define a common interface between them all.\n\nOur Interface will contain a `render()` method to render out the input and a `value()` method to get the input’s value.\n\n```javascript\nconst required = () => {\n  throw new Error(\"Implement!\");\n};\n\nclass InputInterface {\n  render = required;\n  value = required;\n}\n```\n\nWe can apply the Interface to a Base Input class so that all of our derived classes have the Interface.\n\n```javascript\nclass Input extends InputInterface {}\n```\n\nNow whenever you call `render()` you will get an Implementation Error. This forces the developer to override the Base class’s methods. Thus you have forced them to implement the interface.\n\n```javascript\nclass Checkbox extends Input {\n  constructor () {\n    this.$el = $(\"<input/>\", { type: \"checkbox\" }); \n  }\n  render () {\n    return this.$el;\n  }\n  value () {\n    return this.$el.prop(\"checked\");\n  }\n}\n```");

/***/ }),

/***/ "./posts/the-rules-of-reusable-components.md":
/*!***************************************************!*\
  !*** ./posts/the-rules-of-reusable-components.md ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\nauthor: Kameron Tanseli\ndate: '2019-12-24T13:56:26.370Z'\nhero_image: ../static/js-cover.png\ntitle: 'The rules of reusable components'\n---\n\nI spend a lot of my time developing new reusable UI components.\n\nThis means during development I tend to extract UI components that are placed in a shared library or styleguide.\nThese components are reused throughout the entire project. Often having different styles or layouts when integrated into features.\n\nAlong the way I learnt a few rules that helped me save time and pain.\n\n## 1. Keep the layout fluid\n\nI can’t count the amount of times a component has had a fixed width and that has affected a responsive design. Meaning I have to go in and fiddle with the existing props that was set up in place for another feature somewhere in the site. Not good.\n\nBy keeping the component 100% width you pass the layout responsibility up to the parent component.\n\nFor example it’s a lot easier to use `CardOne` over `CardTwo`. As `CardOne` will respond to the parent's column changes when the screen size changes.\n\n```javascript\nconst CardOne = ({ title }) => (\n  <div style={{ \n    padding: \"20px 30px\", \n    background: \"white\" \n  }}>{title}</div>\n);\n\nconst CardTwo = ({ title }) => (\n  <div style={{ \n    width: 600, \n    padding: \"10px\",\n    background: \"white\" \n  }}>\n    {title}\n  </div>\n);\n\nconst App = () => (\n  <div className=\"row\">\n    <div className=\"col-md-6\">\n      <CardOne title=\"I'm Fluid\" />\n    </div>\n    <div className=\"col-md-6\">\n      <CardTwo title=\"I will break this layout\" />\n    </div>\n  </div>\n);\n```\n\n## 2. Allow extra props to be passed\n\nTurns out that your Button component needs a specific data attribute to work with the library you’re using for one of the specific features. Too bad that the `Button` component only allows `className`, `children` and `onClick`.\n\nHow can we fix this?\n\n[Modern ES6 JavaScript allows you to spread function parameters and objects.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) This can be used to feed props to components.\n\n```javascript\n// Before -> <button className=\"button\">Click me</button>\n\nconst Button = ({ children, className, onClick }) => (\n  <button \n    onClick={onClick} \n    className={`${styles.button} ${className || \"\"}`}>\n    {children}\n  </button>\n);\n\n// After -> <button className=\"button\" data-theme=\"dark\">Click me</button>\n\nconst Button = ({ className, ...props }) => (\n  <button \n    className={`${styles.button} ${className || \"\"}`} \n    {...props} />\n);\n\n// Example\n\nconst App = ({ onActivate }) => (\n  <SpecificFeature>\n    <Button data-theme=\"dark\" onClick={onActivate}>\n      Click me\n    </Button>\n  </SpecificFeature>\n);\n```\n\n## 3. Push logic upwards / Keep it dumb\n\nOne of the top things that prevents reusability is when stateful logic specific to a feature is implemented within a reusable component.\n\nImagine you have a `Dropdown` component. That you have used in your navigation when a link is clicked.\n\n```javascript\nconst DropdownItem = ({ className, ...props }) => (\n  <li className={`dropdown-item ${className || \"\"}`} {...props} />\n);\n\nclass Dropdown extends React.Component {\n  state = { toggled: false };\n  toggle = () => this.setState(state => ({ toggled: !state.toggled }));\n  render() {\n    return (\n      <div className=\"navbar-link\">\n        <span onClick={this.toggle}> {this.props.title} </span>\n        {this.state.toggled && (\n          <ul className=\"dropdown\"> {this.props.children} </ul>\n        )}\n      </div>\n    );\n  }\n}\n\nconst Navbar = () => (\n  <div className=\"navbar\">\n    <div className=\"navbar-brand\">Example</div>\n    <ul className=\"navbar-menu\">\n      <Dropdown title=\"My Account\">\n        <DropdownItem>One</DropdownItem>\n        <DropdownItem>Two</DropdownItem>\n      </Dropdown>\n    </ul>\n  </div>\n);\n```\n\nThe problem above is:\n\n1. `Dropdown` handles the logic for opening and closing the dropdown. Making it a lot harder to reuse `Dropdown` for more complicated scenarios (e.g: only open the dropdown when a request is successful).\n\n2. `Dropdown` has markup that relates to the `Navbar` component.\n\nIf we refactor the `Dropdown` component to push the logic up. We end up with a much more reusable `Dropdown` component.\n\n```javascript\nconst DropdownItem = ({ className, ...props }) => (\n  <li className={`dropdown-item ${className || \"\"}`} {...props} />\n);\n\nconst Dropdown = ({ className, ...props }) => (\n  <ul className={`dropdown ${className || \"\"}`} {...props} />\n);\n\nclass Navbar extends React.Component {\n  state = { showUserOptions: false };\n  \n  toggleOptions = () => {\n    this.setState(state => ({\n      showUserOptions: !state.showUserOptions\n    }));\n  }\n\n  render() {\n    return (\n      <div className=\"navbar\">\n        <div className=\"navbar-brand\">Example</div>\n        <ul className=\"navbar-menu\">\n          <div className=\"navbar-link\">\n            <span onClick={this.toggleOptions}>My Account</span>\n            {this.state.showUserOptions && (\n              <Dropdown>\n                <DropdownItem>One</DropdownItem>\n                <DropdownItem>Two</DropdownItem>\n              </Dropdown>\n            )}\n          </div>\n        </ul>\n      </div>\n    );\n  }\n}\n```\n\n## Summary\n* Keep the component layout fluid.\n* Allows extra props to be passed into the component.\n* Keep logic out of them as much as possible.");

/***/ }),

/***/ "./posts/utilise-render-props-to-separate-logic-from-presentation-in-react.md":
/*!************************************************************************************!*\
  !*** ./posts/utilise-render-props-to-separate-logic-from-presentation-in-react.md ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\nauthor: Kameron Tanseli\ndate: '2019-12-24T13:56:26.370Z'\nhero_image: ../static/js-cover.png\ntitle: 'Utilise render props to separate logic from presentation in React'\n---\n\nSeparating logic from your presentation has always been a best practise. It enforces the [single responsibility principle (SRP)](https://en.wikipedia.org/wiki/Single_responsibility_principle) and makes the code easier to test.\n\nReact however gets in trouble for letting developers mush the two concerns together with ease. Lets take an example from the [homepage](https://reactjs.org/) to explain:\n\n```javascript\nclass Timer extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { seconds: 0 };\n  }\n  tick() {\n    this.setState(prevState => ({ seconds: prevState.seconds + 1 }));\n  }\n  componentDidMount() {\n    this.interval = setInterval(() => this.tick(), 1000);\n  }\n  componentWillUnmount() {\n    clearInterval(this.interval);\n  }\n  render() {\n    return <div>Seconds: {this.state.seconds}</div>;\n  }\n}\n```\n\nAbove you can see the rather simple Timer class. You can also see the display logic for the class is coded right into the `render()` method.\n\nThe problem with having `<div>Seconds: {this.state.seconds}</div>` in the `Timer` class is that it’s not separating logic from presentation.\n\nLets separate the two concerns:\n\n```javascript\nconst SecondsActive = ({ seconds }) => <div>Seconds: {seconds}</div>;\n\nclass TimerContainer extends React.Component {\n  state = { seconds: 0 };\n  tick() {\n    this.setState(({ seconds }) => ({ seconds: seconds + 1 }));\n  }\n  componentDidMount() {\n    this.interval = setInterval(() => this.tick(), 1000);\n  }\n  componentWillUnmount() {\n    clearInterval(this.interval);\n  }\n  render() {\n    return this.props.view({ seconds: this.state.seconds });\n  }\n}\n\nReactDOM.render(\n  <TimerContainer view={SecondsActive} />,\n  document.getElementById(\"app\")\n);\n```\n\nWith a simple switch to rendering via a prop we have made the `Timer` class reusable across many presentational components and have made the presentational component super easy to test!");

/***/ }),

/***/ "./posts/writing-reusable-javascript.md":
/*!**********************************************!*\
  !*** ./posts/writing-reusable-javascript.md ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\nauthor: Kameron Tanseli\ndate: '2019-12-24T13:56:26.370Z'\nhero_image: ../static/js-cover.png\ntitle: 'Writing reusable JavaScript (Revised)'\n---\n\n> Don’t reinvent the wheel, just realign it. — Anthony J. D’Angelo\n\nNote from the author:\n\n_I wrote this article back in 2016 and a lot has changed since. Because of this shift I have decided to remove certain sections that are no longer considered best practises or are based on ES5 APIs. Enjoy :)_\n\n\n## It is the small things that count\n\nSmall problems are usually overlooked by the developer, I myself have rushed and wrote sloppy functions as I had lack of care for the smaller problem.\n\nAn example of rushing:\n\n```javascript\n$(\"button\").click(() => {\n  const heading = $(\"h1\").text();\n  const capital = heading[0].toUpperCase() + heading.slice(1);\n  $(\"h1\").text(capital);\n});\n```\n\nHow can we improve this? Right away we can pull out the entire function so it is no longer an anonymous function which allows us to reuse this block of code:\n\n```javascript\nconst capitalizeHeading = () => {\n  const heading = $(\"h1\").text();\n  const capital = heading[0].toUpperCase() + heading.slice(1);\n  $(\"h1\").text(capital);\n};\n\n$(\"button\").click(capitalizeHeading);\n```\n\nLets make this even more useful and extract the capitalizing logic:\n\n```javascript\nconst capitalize = (word = \"\") => word[0].toUpperCase() + word.slice(1);\n\nconst capitalizeHeading = () => {\n  const heading = $(\"h1\").text();\n  $(\"h1\").text(capitalize(heading));\n};\n\n$(\"button\").click(capitalizeHeading);\n```\n\nNow we can reuse the capitalizing logic across our program.\n\nDid you know that [jQuery constructs a new Object and queries the DOM every time you call `$(<selector>)`?](https://github.com/jquery/jquery/blob/master/src/core.js#L34). We should cache jQuery objects in order to speed up execution times:\n\n```javascript\nconst capitalize = (word = \"\") => word[0].toUpperCase() + word.slice(1);\n\nconst capitalizeHeading = () => {\n  const $h1 = $(\"h1\"); // cache h1 in a variable\n  $h1.text(capitalize($h1.text())); // reuse without creating\n};\n\n$(\"button\").click(capitalizeHeading);\n```\n\n`capitalizeHeading()` is okay for this one use case but it would be much more useful if it accepted a parameter to indicate what elements to capitalize:\n\n```javascript\nconst capitalize = (word = \"\") => word[0].toUpperCase() + word.slice(1);\n\nconst capitalizeElement = element => () =>\n  element.text(capitalize(element.text()));\n\n$(\"button\").click(capitalizeElement($(\"h1\")));\n```\n\nWe can also wrap the execution in another function in order to create a partial. This is a function which has its arguments preloaded before execution, in this case we have made the element parameter a `$(“h1”)`.\n\nTurning `capitalizeHeading` into `capitalizeElement(<element>)` allows us to reuse that function for any element we wish to capitalize:\n\n```javascript\ncapitalizeElement($(\"h2\"));\ncapitalizeElement($(\"div[data-title]\"));\n```\n");

/***/ })

})
//# sourceMappingURL=index.js.bd0845c91a0426ab2714.hot-update.js.map
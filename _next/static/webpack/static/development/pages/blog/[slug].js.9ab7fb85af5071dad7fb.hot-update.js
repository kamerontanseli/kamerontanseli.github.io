webpackHotUpdate("static/development/pages/blog/[slug].js",{

/***/ "./components/SEO.js":
/*!***************************!*\
  !*** ./components/SEO.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SEO; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "../node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/kamerontanseli/Documents/kameron-blog/src/components/SEO.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function SEO(_ref) {
  var slug = _ref.slug,
      post = _ref.post,
      content = _ref.content;
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("meta", {
    property: "og:title",
    content: post.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), __jsx("meta", {
    property: "og:site_name",
    content: "Kameron Tanseli",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), __jsx("meta", {
    property: "og:url",
    content: "https://kamerontanseli.github.io/blog/".concat(slug),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), __jsx("meta", {
    property: "og:description",
    content: content.slice(0, 200).trimEnd(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx("meta", {
    property: "og:type",
    content: "article",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), __jsx("meta", {
    property: "og:image",
    content: "https://kamerontanseli.github.io/".concat(post.hero_image.replace('../', '')),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }));
}

/***/ })

})
//# sourceMappingURL=[slug].js.9ab7fb85af5071dad7fb.hot-update.js.map
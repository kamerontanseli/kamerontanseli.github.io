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

  console.log(props.allBlogs.sort(function (a, b) {
    return new Date(a.date) - new Date(b.date);
  }));
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("ul", {
    className: "jsx-1848899881" + " " + "list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, props.allBlogs.sort(function (a, b) {
    return new Date(a.date) - new Date(b.date);
  }).map(function (post) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      key: post.slug,
      href: {
        pathname: "/blog/".concat(post.slug)
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-1848899881",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx("li", {
      className: "jsx-1848899881",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1848899881" + " " + "hero_image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx("img", {
      src: post.document.data.hero_image,
      alt: post.document.data.hero_image,
      className: "jsx-1848899881",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-1848899881" + " " + "blog__info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx("h2", {
      className: "jsx-1848899881",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, post.document.data.title), __jsx("h3", {
      className: "jsx-1848899881",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, " ", reformatDate(post.document.data.date)), __jsx("p", {
      className: "jsx-1848899881",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_3___default.a, {
      source: truncateSummary(post.document.content),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }))))));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1848899881",
    __self: this
  }, ".jsx-1848899881{margin-bottom:0;}a.jsx-1848899881:hover{opacity:1;}a.jsx-1848899881:hover li.jsx-1848899881 div.hero_image.jsx-1848899881 img.jsx-1848899881{opacity:0.8;-webkit-transition:opacity 0.3s ease;transition:opacity 0.3s ease;}a.jsx-1848899881:hover li.jsx-1848899881 .blog__info.jsx-1848899881 h2.jsx-1848899881,a.jsx-1848899881:hover li.jsx-1848899881 .blog__info.jsx-1848899881 h3.jsx-1848899881,a.jsx-1848899881:hover li.jsx-1848899881 .blog__info.jsx-1848899881 p.jsx-1848899881{-webkit-transform:translateX(10px);-ms-transform:translateX(10px);transform:translateX(10px);-webkit-transition:-webkit-transform 0.5s ease-out;-webkit-transition:transform 0.5s ease-out;transition:transform 0.5s ease-out;}.hero_image.jsx-1848899881{width:100%;height:33vh;overflow:hidden;background-color:#000;}.hero_image.jsx-1848899881 img.jsx-1848899881{object-fit:cover;object-position:50% 50%;opacity:1;-webkit-transition:opacity 0.3s ease;transition:opacity 0.3s ease;min-height:100%;}.blog__info.jsx-1848899881{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:1.5rem 1.25rem;-webkit-transform:translateX(0px);-ms-transform:translateX(0px);transform:translateX(0px);-webkit-transition:-webkit-transform 0.3s ease-in;-webkit-transition:transform 0.3s ease-in;transition:transform 0.3s ease-in;border-bottom:1px solid #ebebeb;}.blog__info.jsx-1848899881 h2.jsx-1848899881,.blog__info.jsx-1848899881 h3.jsx-1848899881,.blog__info.jsx-1848899881 p.jsx-1848899881{-webkit-transform:translateX(0px);-ms-transform:translateX(0px);transform:translateX(0px);-webkit-transition:-webkit-transform 0.5s ease-out;-webkit-transition:transform 0.5s ease-out;transition:transform 0.5s ease-out;}li.jsx-1848899881{opacity:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;min-height:38vh;margin-bottom:0;}h2.jsx-1848899881{margin-bottom:0.5rem;}h3.jsx-1848899881{margin-bottom:1rem;}p.jsx-1848899881{max-width:900px;}@media (min-width:768px){li.jsx-1848899881{min-height:250px;height:33.333vh;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.hero_image.jsx-1848899881{height:100%;}.hero_image.jsx-1848899881 img.jsx-1848899881{min-width:100%;height:100%;width:auto;min-height:0;}.blog__info.jsx-1848899881{min-width:70%;}}@media (min-width:1280px){.blog__info.jsx-1848899881{padding:3rem;}h3.jsx-1848899881{margin-bottom:1.2rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYW1lcm9udGFuc2VsaS9Eb2N1bWVudHMva2FtZXJvbi1ibG9nL3NyYy9jb21wb25lbnRzL0Jsb2dMaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZDUyxBQUUyQixBQUVKLEFBR0UsQUFJZSxBQUloQixBQU1NLEFBT0osQUFTYSxBQUlWLEFBUUssQUFHRixBQUdILEFBSUcsQUFLTCxBQUdHLEFBTUQsQUFLRCxBQUdRLFVBNUV6QixDQVdjLENBUmlCLEFBeUQ3QixDQWNBLENBTEEsQ0FOYyxDQTFCRCxBQWNmLEFBNkJGLENBL0Q0QixBQXNDTixFQVBwQixFQUhBLEFBZ0NFLEVBakVnQixJQW9ESCxNQVJRLEtBU04sQ0FwRE8sRUFLWixVQUNtQixBQStDN0IsVUFwREYsYUFVd0IsSUFwQnhCLFlBNkJxQyxBQUtaLEdBL0JZLFNBa0RuQyxlQXJDZ0IsZ0JBQ2xCLG1CQUl5QixxQ0FjRCw4QkFMeEIsR0ExQkEsNkJBa0J5QixnQkFjUCxPQWJVLFNBY1YsZ0JBQ2xCLGlFQWRvQyw4SEFDRixnQ0FDbEMiLCJmaWxlIjoiL1VzZXJzL2thbWVyb250YW5zZWxpL0RvY3VtZW50cy9rYW1lcm9uLWJsb2cvc3JjL2NvbXBvbmVudHMvQmxvZ0xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIjtcblxuY29uc3QgQmxvZ0xpc3QgPSAocHJvcHMpID0+IHtcblxuICBmdW5jdGlvbiB0cnVuY2F0ZVN1bW1hcnkoY29udGVudCkge1xuICAgIHJldHVybiBjb250ZW50LnNsaWNlKDAsIDIwMCkudHJpbUVuZCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVmb3JtYXREYXRlKGZ1bGxEYXRlKSB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGZ1bGxEYXRlKVxuICAgIHJldHVybiBkYXRlLnRvRGF0ZVN0cmluZygpLnNsaWNlKDQpO1xuICB9XG5cbiAgY29uc29sZS5sb2coXG4gICAgcHJvcHMuYWxsQmxvZ3Muc29ydCgoYSwgYikgPT4gbmV3IERhdGUoYS5kYXRlKSAtIG5ldyBEYXRlKGIuZGF0ZSkpXG4gICk7XG4gIFxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0XCI+XG4gICAgICAgIHtwcm9wcy5hbGxCbG9ncy5zb3J0KChhLCBiKSA9PiBuZXcgRGF0ZShhLmRhdGUpIC0gbmV3IERhdGUoYi5kYXRlKSkubWFwKHBvc3QgPT4gKFxuICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICBrZXk9e3Bvc3Quc2x1Z31cbiAgICAgICAgICAgIGhyZWY9e3sgcGF0aG5hbWU6IGAvYmxvZy8ke3Bvc3Quc2x1Z31gIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyb19pbWFnZVwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwb3N0LmRvY3VtZW50LmRhdGEuaGVyb19pbWFnZX0gYWx0PXtwb3N0LmRvY3VtZW50LmRhdGEuaGVyb19pbWFnZX0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZ19faW5mb1wiPlxuICAgICAgICAgICAgICAgIDxoMj57cG9zdC5kb2N1bWVudC5kYXRhLnRpdGxlfTwvaDI+XG4gICAgICAgICAgICAgICAgPGgzPiB7cmVmb3JtYXREYXRlKHBvc3QuZG9jdW1lbnQuZGF0YS5kYXRlKX08L2gzPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgPFJlYWN0TWFya2Rvd24gc291cmNlPXt0cnVuY2F0ZVN1bW1hcnkocG9zdC5kb2N1bWVudC5jb250ZW50KX0gLz5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGE6aG92ZXIgbGkgZGl2Lmhlcm9faW1hZ2UgaW1nIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhOmhvdmVyIGxpIC5ibG9nX19pbmZvIGgyLCBhOmhvdmVyIGxpIC5ibG9nX19pbmZvIGgzLCBhOmhvdmVyIGxpIC5ibG9nX19pbmZvIHAge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1vdXQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5oZXJvX2ltYWdlIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAzM3ZoO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5oZXJvX2ltYWdlIGltZyB7XG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgIG9iamVjdC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ibG9nX19pbmZvIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiAxLjVyZW0gMS4yNXJlbTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbjtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWJlYmViO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYmxvZ19faW5mbyBoMiwgLmJsb2dfX2luZm8gaDMsIC5ibG9nX19pbmZvIHAge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlLW91dDtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGkge1xuICAgICAgICAgICAgb3BhY2l0eTogaW5oZXJpdDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAzOHZoO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDIge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMyB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogOTAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAyNTBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzMy4zMzN2aDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5oZXJvX2ltYWdlIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmhlcm9faW1hZ2UgaW1nIHtcbiAgICAgICAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJsb2dfX2luZm8ge1xuICAgICAgICAgICAgICBtaW4td2lkdGg6IDcwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkge1xuICAgICAgICAgICAgLmJsb2dfX2luZm8ge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAzcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjJyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQmxvZ0xpc3Q7XG4iXX0= */\n/*@ sourceURL=/Users/kamerontanseli/Documents/kameron-blog/src/components/BlogList.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (BlogList);

/***/ })

})
//# sourceMappingURL=index.js.6f85ba26eaedd04cbcbb.hot-update.js.map
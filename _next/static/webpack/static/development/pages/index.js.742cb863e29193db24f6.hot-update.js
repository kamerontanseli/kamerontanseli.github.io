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

  console.log();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("ul", {
    className: "jsx-1093723212" + " " + "list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, props.allBlogs.sort(function (a, b) {
    return new Date(b.document.data.date) - new Date(a.document.data.date);
  }).map(function (post) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      key: post.slug,
      href: {
        pathname: "/blog/".concat(post.slug)
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-1093723212",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx("li", {
      className: "jsx-1093723212",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1093723212" + " " + "hero_image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx("img", {
      src: post.document.data.hero_image,
      alt: post.document.data.hero_image,
      className: "jsx-1093723212",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-1093723212" + " " + "blog__info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, __jsx("h2", {
      className: "jsx-1093723212",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, post.document.data.title), __jsx("h3", {
      className: "jsx-1093723212",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, " ", reformatDate(post.document.data.date)), __jsx("p", {
      className: "jsx-1093723212",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_3___default.a, {
      source: truncateSummary(post.document.content),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }))))));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1093723212",
    __self: this
  }, ".jsx-1093723212{margin-bottom:0;}a.jsx-1093723212:hover{opacity:1;}a.jsx-1093723212:hover li.jsx-1093723212 div.hero_image.jsx-1093723212 img.jsx-1093723212{opacity:0.8;-webkit-transition:opacity 0.3s ease;transition:opacity 0.3s ease;}a.jsx-1093723212:hover li.jsx-1093723212 .blog__info.jsx-1093723212 h2.jsx-1093723212,a.jsx-1093723212:hover li.jsx-1093723212 .blog__info.jsx-1093723212 h3.jsx-1093723212,a.jsx-1093723212:hover li.jsx-1093723212 .blog__info.jsx-1093723212 p.jsx-1093723212{-webkit-transform:translateX(10px);-ms-transform:translateX(10px);transform:translateX(10px);-webkit-transition:-webkit-transform 0.5s ease-out;-webkit-transition:transform 0.5s ease-out;transition:transform 0.5s ease-out;}.hero_image.jsx-1093723212{width:100%;height:33vh;overflow:hidden;background-color:#000;}.hero_image.jsx-1093723212 img.jsx-1093723212{object-fit:cover;object-position:50% 50%;opacity:1;-webkit-transition:opacity 0.3s ease;transition:opacity 0.3s ease;min-height:100%;}.blog__info.jsx-1093723212{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:1.5rem 1.25rem;-webkit-transform:translateX(0px);-ms-transform:translateX(0px);transform:translateX(0px);-webkit-transition:-webkit-transform 0.3s ease-in;-webkit-transition:transform 0.3s ease-in;transition:transform 0.3s ease-in;border-bottom:1px solid #ebebeb;}.blog__info.jsx-1093723212 h2.jsx-1093723212,.blog__info.jsx-1093723212 h3.jsx-1093723212,.blog__info.jsx-1093723212 p.jsx-1093723212{-webkit-transform:translateX(0px);-ms-transform:translateX(0px);transform:translateX(0px);-webkit-transition:-webkit-transform 0.5s ease-out;-webkit-transition:transform 0.5s ease-out;transition:transform 0.5s ease-out;}li.jsx-1093723212{opacity:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;min-height:38vh;margin-bottom:0;}h2.jsx-1093723212{margin-bottom:0.5rem;}h3.jsx-1093723212{margin-bottom:1rem;}p.jsx-1093723212{max-width:900px;}@media (min-width:768px){li.jsx-1093723212{min-height:250px;height:33.333vh;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.hero_image.jsx-1093723212{height:100%;}.hero_image.jsx-1093723212 img.jsx-1093723212{min-width:100%;height:100%;width:auto;min-height:0;}.blog__info.jsx-1093723212{min-width:70%;}}@media (min-width:1280px){.blog__info.jsx-1093723212{padding:3rem;}h3.jsx-1093723212{margin-bottom:1.2rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYW1lcm9udGFuc2VsaS9Eb2N1bWVudHMva2FtZXJvbi1ibG9nL3NyYy9jb21wb25lbnRzL0Jsb2dMaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9EUyxBQUUyQixBQUVKLEFBR0UsQUFNZSxBQUloQixBQU1NLEFBT0osQUFXYSxBQUlWLEFBUUssQUFHRixBQUdILEFBSUcsQUFLTCxBQUdHLEFBTUQsQUFLRCxBQUdRLFVBaEZ6QixDQWFjLENBVmlCLEFBNkQ3QixDQWNBLENBTEEsQ0FOYyxDQTFCRCxBQWNmLEFBNEJGLENBaEU0QixBQXdDTixFQVBwQixFQUhBLEFBZ0NFLEVBbkVnQixJQXNESCxNQVJRLEtBU04sQ0F0RE8sRUFLWixVQUNtQixBQWlEN0IsVUF0REYsYUFVd0IsSUF0QnhCLFlBaUNxQyxBQUtaLEdBakNZLFNBb0RuQyxlQXZDZ0IsZ0JBQ2xCLG1CQUl5QixxQ0FnQkQsOEJBTHhCLEdBNUJBLDZCQWtCeUIsZ0JBZ0JQLE9BZlUsU0FnQlYsZ0JBQ2xCLGlFQWhCb0MsOEhBQ0YsZ0NBQ2xDIiwiZmlsZSI6Ii9Vc2Vycy9rYW1lcm9udGFuc2VsaS9Eb2N1bWVudHMva2FtZXJvbi1ibG9nL3NyYy9jb21wb25lbnRzL0Jsb2dMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCI7XG5cbmNvbnN0IEJsb2dMaXN0ID0gKHByb3BzKSA9PiB7XG5cbiAgZnVuY3Rpb24gdHJ1bmNhdGVTdW1tYXJ5KGNvbnRlbnQpIHtcbiAgICByZXR1cm4gY29udGVudC5zbGljZSgwLCAyMDApLnRyaW1FbmQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlZm9ybWF0RGF0ZShmdWxsRGF0ZSkge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShmdWxsRGF0ZSlcbiAgICByZXR1cm4gZGF0ZS50b0RhdGVTdHJpbmcoKS5zbGljZSg0KTtcbiAgfVxuXG4gIGNvbnNvbGUubG9nKFxuICAgIFxuICApO1xuICBcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdFwiPlxuICAgICAgICB7cHJvcHMuYWxsQmxvZ3NcbiAgICAgICAgICAuc29ydChcbiAgICAgICAgICAgIChhLCBiKSA9PlxuICAgICAgICAgICAgICBuZXcgRGF0ZShiLmRvY3VtZW50LmRhdGEuZGF0ZSkgLSBuZXcgRGF0ZShhLmRvY3VtZW50LmRhdGEuZGF0ZSlcbiAgICAgICAgICApXG4gICAgICAgICAgLm1hcChwb3N0ID0+IChcbiAgICAgICAgICAgIDxMaW5rIGtleT17cG9zdC5zbHVnfSBocmVmPXt7IHBhdGhuYW1lOiBgL2Jsb2cvJHtwb3N0LnNsdWd9YCB9fT5cbiAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvX2ltYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Bvc3QuZG9jdW1lbnQuZGF0YS5oZXJvX2ltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgIGFsdD17cG9zdC5kb2N1bWVudC5kYXRhLmhlcm9faW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZ19faW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+e3Bvc3QuZG9jdW1lbnQuZGF0YS50aXRsZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICA8aDM+IHtyZWZvcm1hdERhdGUocG9zdC5kb2N1bWVudC5kYXRhLmRhdGUpfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdE1hcmtkb3duXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U9e3RydW5jYXRlU3VtbWFyeShwb3N0LmRvY3VtZW50LmNvbnRlbnQpfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhOmhvdmVyIGxpIGRpdi5oZXJvX2ltYWdlIGltZyB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYTpob3ZlciBsaSAuYmxvZ19faW5mbyBoMixcbiAgICAgICAgICBhOmhvdmVyIGxpIC5ibG9nX19pbmZvIGgzLFxuICAgICAgICAgIGE6aG92ZXIgbGkgLmJsb2dfX2luZm8gcCB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlLW91dDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmhlcm9faW1hZ2Uge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDMzdmg7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmhlcm9faW1hZ2UgaW1nIHtcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiA1MCUgNTAlO1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xuICAgICAgICAgICAgbWluLWhlaWdodDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJsb2dfX2luZm8ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEuNXJlbSAxLjI1cmVtO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYmViZWI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ibG9nX19pbmZvIGgyLFxuICAgICAgICAgIC5ibG9nX19pbmZvIGgzLFxuICAgICAgICAgIC5ibG9nX19pbmZvIHAge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlLW91dDtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGkge1xuICAgICAgICAgICAgb3BhY2l0eTogaW5oZXJpdDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAzOHZoO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDIge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMyB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogOTAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAyNTBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzMy4zMzN2aDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5oZXJvX2ltYWdlIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmhlcm9faW1hZ2UgaW1nIHtcbiAgICAgICAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJsb2dfX2luZm8ge1xuICAgICAgICAgICAgICBtaW4td2lkdGg6IDcwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkge1xuICAgICAgICAgICAgLmJsb2dfX2luZm8ge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAzcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjJyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2dMaXN0O1xuIl19 */\n/*@ sourceURL=/Users/kamerontanseli/Documents/kameron-blog/src/components/BlogList.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (BlogList);

/***/ })

})
//# sourceMappingURL=index.js.742cb863e29193db24f6.hot-update.js.map
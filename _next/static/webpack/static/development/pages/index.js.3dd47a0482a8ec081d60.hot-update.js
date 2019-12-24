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
    className: "jsx-1093723212" + " " + "list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
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
        lineNumber: 24
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-1093723212",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx("li", {
      className: "jsx-1093723212",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1093723212" + " " + "hero_image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx("img", {
      src: post.document.data.hero_image,
      alt: post.document.data.hero_image,
      className: "jsx-1093723212",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-1093723212" + " " + "blog__info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx("h2", {
      className: "jsx-1093723212",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, post.document.data.title), __jsx("h3", {
      className: "jsx-1093723212",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, " ", reformatDate(post.document.data.date)), __jsx("p", {
      className: "jsx-1093723212",
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
    id: "1093723212",
    __self: this
  }, ".jsx-1093723212{margin-bottom:0;}a.jsx-1093723212:hover{opacity:1;}a.jsx-1093723212:hover li.jsx-1093723212 div.hero_image.jsx-1093723212 img.jsx-1093723212{opacity:0.8;-webkit-transition:opacity 0.3s ease;transition:opacity 0.3s ease;}a.jsx-1093723212:hover li.jsx-1093723212 .blog__info.jsx-1093723212 h2.jsx-1093723212,a.jsx-1093723212:hover li.jsx-1093723212 .blog__info.jsx-1093723212 h3.jsx-1093723212,a.jsx-1093723212:hover li.jsx-1093723212 .blog__info.jsx-1093723212 p.jsx-1093723212{-webkit-transform:translateX(10px);-ms-transform:translateX(10px);transform:translateX(10px);-webkit-transition:-webkit-transform 0.5s ease-out;-webkit-transition:transform 0.5s ease-out;transition:transform 0.5s ease-out;}.hero_image.jsx-1093723212{width:100%;height:33vh;overflow:hidden;background-color:#000;}.hero_image.jsx-1093723212 img.jsx-1093723212{object-fit:cover;object-position:50% 50%;opacity:1;-webkit-transition:opacity 0.3s ease;transition:opacity 0.3s ease;min-height:100%;}.blog__info.jsx-1093723212{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:1.5rem 1.25rem;-webkit-transform:translateX(0px);-ms-transform:translateX(0px);transform:translateX(0px);-webkit-transition:-webkit-transform 0.3s ease-in;-webkit-transition:transform 0.3s ease-in;transition:transform 0.3s ease-in;border-bottom:1px solid #ebebeb;}.blog__info.jsx-1093723212 h2.jsx-1093723212,.blog__info.jsx-1093723212 h3.jsx-1093723212,.blog__info.jsx-1093723212 p.jsx-1093723212{-webkit-transform:translateX(0px);-ms-transform:translateX(0px);transform:translateX(0px);-webkit-transition:-webkit-transform 0.5s ease-out;-webkit-transition:transform 0.5s ease-out;transition:transform 0.5s ease-out;}li.jsx-1093723212{opacity:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;min-height:38vh;margin-bottom:0;}h2.jsx-1093723212{margin-bottom:0.5rem;}h3.jsx-1093723212{margin-bottom:1rem;}p.jsx-1093723212{max-width:900px;}@media (min-width:768px){li.jsx-1093723212{min-height:250px;height:33.333vh;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.hero_image.jsx-1093723212{height:100%;}.hero_image.jsx-1093723212 img.jsx-1093723212{min-width:100%;height:100%;width:auto;min-height:0;}.blog__info.jsx-1093723212{min-width:70%;}}@media (min-width:1280px){.blog__info.jsx-1093723212{padding:3rem;}h3.jsx-1093723212{margin-bottom:1.2rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYW1lcm9udGFuc2VsaS9Eb2N1bWVudHMva2FtZXJvbi1ibG9nL3NyYy9jb21wb25lbnRzL0Jsb2dMaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStDUyxBQUUyQixBQUVKLEFBR0UsQUFNZSxBQUloQixBQU1NLEFBT0osQUFXYSxBQUlWLEFBUUssQUFHRixBQUdILEFBSUcsQUFLTCxBQUdHLEFBTUQsQUFLRCxBQUdRLFVBaEZ6QixDQWFjLENBVmlCLEFBNkQ3QixDQWNBLENBTEEsQ0FOYyxDQTFCRCxBQWNmLEFBNEJGLENBaEU0QixBQXdDTixFQVBwQixFQUhBLEFBZ0NFLEVBbkVnQixJQXNESCxNQVJRLEtBU04sQ0F0RE8sRUFLWixVQUNtQixBQWlEN0IsVUF0REYsYUFVd0IsSUF0QnhCLFlBaUNxQyxBQUtaLEdBakNZLFNBb0RuQyxlQXZDZ0IsZ0JBQ2xCLG1CQUl5QixxQ0FnQkQsOEJBTHhCLEdBNUJBLDZCQWtCeUIsZ0JBZ0JQLE9BZlUsU0FnQlYsZ0JBQ2xCLGlFQWhCb0MsOEhBQ0YsZ0NBQ2xDIiwiZmlsZSI6Ii9Vc2Vycy9rYW1lcm9udGFuc2VsaS9Eb2N1bWVudHMva2FtZXJvbi1ibG9nL3NyYy9jb21wb25lbnRzL0Jsb2dMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCI7XG5cbmNvbnN0IEJsb2dMaXN0ID0gKHByb3BzKSA9PiB7XG5cbiAgZnVuY3Rpb24gdHJ1bmNhdGVTdW1tYXJ5KGNvbnRlbnQpIHtcbiAgICByZXR1cm4gY29udGVudC5zbGljZSgwLCAyMDApLnRyaW1FbmQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlZm9ybWF0RGF0ZShmdWxsRGF0ZSkge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShmdWxsRGF0ZSlcbiAgICByZXR1cm4gZGF0ZS50b0RhdGVTdHJpbmcoKS5zbGljZSg0KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0XCI+XG4gICAgICAgIHtwcm9wcy5hbGxCbG9nc1xuICAgICAgICAgIC5zb3J0KFxuICAgICAgICAgICAgKGEsIGIpID0+XG4gICAgICAgICAgICAgIG5ldyBEYXRlKGIuZG9jdW1lbnQuZGF0YS5kYXRlKSAtIG5ldyBEYXRlKGEuZG9jdW1lbnQuZGF0YS5kYXRlKVxuICAgICAgICAgIClcbiAgICAgICAgICAubWFwKHBvc3QgPT4gKFxuICAgICAgICAgICAgPExpbmsga2V5PXtwb3N0LnNsdWd9IGhyZWY9e3sgcGF0aG5hbWU6IGAvYmxvZy8ke3Bvc3Quc2x1Z31gIH19PlxuICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm9faW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgIHNyYz17cG9zdC5kb2N1bWVudC5kYXRhLmhlcm9faW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgYWx0PXtwb3N0LmRvY3VtZW50LmRhdGEuaGVyb19pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nX19pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj57cG9zdC5kb2N1bWVudC5kYXRhLnRpdGxlfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxoMz4ge3JlZm9ybWF0RGF0ZShwb3N0LmRvY3VtZW50LmRhdGEuZGF0ZSl9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgPFJlYWN0TWFya2Rvd25cbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZT17dHJ1bmNhdGVTdW1tYXJ5KHBvc3QuZG9jdW1lbnQuY29udGVudCl9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGE6aG92ZXIgbGkgZGl2Lmhlcm9faW1hZ2UgaW1nIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhOmhvdmVyIGxpIC5ibG9nX19pbmZvIGgyLFxuICAgICAgICAgIGE6aG92ZXIgbGkgLmJsb2dfX2luZm8gaDMsXG4gICAgICAgICAgYTpob3ZlciBsaSAuYmxvZ19faW5mbyBwIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2Utb3V0O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaGVyb19pbWFnZSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMzN2aDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaGVyb19pbWFnZSBpbWcge1xuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICBvYmplY3QtcG9zaXRpb246IDUwJSA1MCU7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYmxvZ19faW5mbyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZzogMS41cmVtIDEuMjVyZW07XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW47XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ViZWJlYjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJsb2dfX2luZm8gaDIsXG4gICAgICAgICAgLmJsb2dfX2luZm8gaDMsXG4gICAgICAgICAgLmJsb2dfX2luZm8gcCB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2Utb3V0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBsaSB7XG4gICAgICAgICAgICBvcGFjaXR5OiBpbmhlcml0O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDM4dmg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMiB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIHAge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA5MDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDI1MHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDMzLjMzM3ZoO1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmhlcm9faW1hZ2Uge1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaGVyb19pbWFnZSBpbWcge1xuICAgICAgICAgICAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYmxvZ19faW5mbyB7XG4gICAgICAgICAgICAgIG1pbi13aWR0aDogNzAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSB7XG4gICAgICAgICAgICAuYmxvZ19faW5mbyB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDNyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuMnJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQmxvZ0xpc3Q7XG4iXX0= */\n/*@ sourceURL=/Users/kamerontanseli/Documents/kameron-blog/src/components/BlogList.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (BlogList);

/***/ })

})
//# sourceMappingURL=index.js.3dd47a0482a8ec081d60.hot-update.js.map
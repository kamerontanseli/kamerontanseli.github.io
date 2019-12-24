webpackHotUpdate("static/development/pages/blog/[slug].js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "../node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _Meta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Meta */ "./components/Meta.js");
var _jsxFileName = "/Users/kamerontanseli/Documents/kameron-blog/src/components/Layout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Layout(props) {
  return __jsx("section", {
    style: {
      backgroundColor: "".concat(props.bgColor && props.bgColor),
      color: "".concat(props.pathname == "info" && 'white')
    },
    className: "jsx-2857272008" + " " + "layout ".concat(props.pathname == "info" && "info_page"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx(_Meta__WEBPACK_IMPORTED_MODULE_3__["default"], {
    siteTitle: props.siteTitle,
    description: props.siteDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), __jsx(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    siteTitle: props.siteTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-2857272008" + " " + "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, props.children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2857272008",
    __self: this
  }, ".layout.jsx-2857272008{overflow-x:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;min-height:100vh;}.layout.jsx-2857272008 .info_page.jsx-2857272008{color:#ebebeb;}.content.jsx-2857272008{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}@media (min-width:768px){.layout.jsx-2857272008{display:block;}.content.jsx-2857272008{-webkit-box-flex:none;-webkit-flex-grow:none;-ms-flex-positive:none;flex-grow:none;width:70vw;margin-left:30vw;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYW1lcm9udGFuc2VsaS9Eb2N1bWVudHMva2FtZXJvbi1ibG9nL3NyYy9jb21wb25lbnRzL0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQk8sQUFHNkIsQUFNSixBQUdGLEFBSUksQUFHQyxjQVRuQixBQU9FLElBYmEscURBU2YsWUFPZSxTQWZTLEVBZ0JILGlCQUNuQiwyREFoQmlCLGlCQUNuQiIsImZpbGUiOiIvVXNlcnMva2FtZXJvbnRhbnNlbGkvRG9jdW1lbnRzL2thbWVyb24tYmxvZy9zcmMvY29tcG9uZW50cy9MYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xuaW1wb3J0IE1ldGEgZnJvbSAnLi9NZXRhJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvblxuICAgIGNsYXNzTmFtZT17YGxheW91dCAke1xuICAgICAgcHJvcHMucGF0aG5hbWUgPT0gXCJpbmZvXCIgJiZcbiAgICAgIFwiaW5mb19wYWdlXCJ9YFxuICAgIH1cbiAgICBzdHlsZT17e1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBgJHtwcm9wcy5iZ0NvbG9yICYmIHByb3BzLmJnQ29sb3J9YCxcbiAgICAgIGNvbG9yOiBgJHtwcm9wcy5wYXRobmFtZSA9PSBcImluZm9cIiAmJiAnd2hpdGUnfWBcbiAgICB9fVxuICA+XG4gICAgPE1ldGFcbiAgICAgIHNpdGVUaXRsZT17cHJvcHMuc2l0ZVRpdGxlfVxuICAgICAgZGVzY3JpcHRpb249e3Byb3BzLnNpdGVEZXNjcmlwdGlvbn1cbiAgICAvPlxuICAgIDxIZWFkZXIgc2l0ZVRpdGxlPXtwcm9wcy5zaXRlVGl0bGV9IC8+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+e3Byb3BzLmNoaWxkcmVufTwvZGl2PlxuICAgIDxzdHlsZSBqc3g+XG4gICAgICB7YFxuICAgICAgICAubGF5b3V0IHtcbiAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICB9XG4gICAgICAgIC5sYXlvdXQgLmluZm9fcGFnZSB7XG4gICAgICAgICAgY29sb3I6ICNlYmViZWI7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAubGF5b3V0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IG5vbmU7XG4gICAgICAgICAgICB3aWR0aDogNzB2dztcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzMHZ3O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L3NlY3Rpb24+XG4gICk7XG59Il19 */\n/*@ sourceURL=/Users/kamerontanseli/Documents/kameron-blog/src/components/Layout.js */"));
}

/***/ })

})
//# sourceMappingURL=[slug].js.bc0fb460b5c66ed80cab.hot-update.js.map
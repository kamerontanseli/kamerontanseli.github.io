webpackHotUpdate("static/development/pages/blog/[slug].js",{

/***/ "./pages/blog/[slug].js":
/*!******************************!*\
  !*** ./pages/blog/[slug].js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BlogTemplate; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "../node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "../node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! gray-matter */ "../node_modules/gray-matter/index.js");
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-markdown */ "../node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");








var _jsxFileName = "/Users/kamerontanseli/Documents/kameron-blog/src/pages/blog/[slug].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_9__["createElement"];

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }





function BlogTemplate(props) {
  function reformatDate(fullDate) {
    var date = new Date(fullDate);
    return date.toDateString().slice(4);
  }

  var markdownBody = props.content;
  var frontmatter = props.data;
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_12__["default"], {
    siteTitle: props.siteTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("article", {
    className: "jsx-133894201" + " " + "blog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("figure", {
    className: "jsx-133894201" + " " + "blog__hero",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("img", {
    src: frontmatter.hero_image,
    alt: "blog_hero_".concat(frontmatter.title),
    className: "jsx-133894201",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-133894201" + " " + "blog__info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-133894201",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, frontmatter.title), __jsx("h3", {
    className: "jsx-133894201",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, reformatDate(frontmatter.date))), __jsx("div", {
    className: "jsx-133894201" + " " + "blog__body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_11___default.a, {
    source: markdownBody,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
    id: "133894201",
    __self: this
  }, ".blog.jsx-133894201 h1.jsx-133894201{margin-bottom:0.7rem;}.blog__hero.jsx-133894201{min-height:300px;height:60vh;width:100%;margin:0;overflow:hidden;}.blog__hero.jsx-133894201 img.jsx-133894201{margin-bottom:0;object-fit:cover;min-height:100%;min-width:100%;object-position:center;}.blog__info.jsx-133894201{padding:1.5rem 1.25rem;width:100%;max-width:768px;margin:0 auto;}.blog__info.jsx-133894201 h1.jsx-133894201{margin-bottom:0.66rem;}.blog__info.jsx-133894201 h3.jsx-133894201{margin-bottom:0;}.blog__body.jsx-133894201{width:100%;padding:0 1.25rem;margin:0 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.blog__body.jsx-133894201 a.jsx-133894201{padding-bottom:1.5rem;color:#2196f3;}.blog__body.jsx-133894201:last-child{margin-bottom:0;}.blog__body.jsx-133894201 h1.jsx-133894201 h2.jsx-133894201 h3.jsx-133894201 h4.jsx-133894201 h5.jsx-133894201 h6.jsx-133894201 p.jsx-133894201{font-weight:normal;}.blog__body.jsx-133894201 p.jsx-133894201{color:inherit;}.blog__body.jsx-133894201 ul.jsx-133894201{list-style:initial;}.blog__body.jsx-133894201 ul.jsx-133894201 ol.jsx-133894201{margin-left:1.25rem;margin-bottom:1.25rem;padding-left:1.45rem;}.blog__footer.jsx-133894201{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:1.5rem 1.25rem;width:100%;max-width:800px;margin:0 auto;}.blog__footer.jsx-133894201 h2.jsx-133894201{margin-bottom:0;}.blog__footer.jsx-133894201 a.jsx-133894201{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.blog__footer.jsx-133894201 a.jsx-133894201 svg.jsx-133894201{width:20px;}@media (min-width:768px){.blog.jsx-133894201{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.blog__body.jsx-133894201{max-width:800px;padding:0 2rem;}.blog__body.jsx-133894201 span.jsx-133894201{width:100%;margin:1.5rem auto;}.blog__body.jsx-133894201 ul.jsx-133894201 ol.jsx-133894201{margin-left:1.5rem;margin-bottom:1.5rem;}.blog__hero.jsx-133894201{min-height:600px;height:75vh;}.blog__info.jsx-133894201{text-align:center;padding:2rem 0;}.blog__info.jsx-133894201 h1.jsx-133894201{margin:0 auto 0.66rem auto;}.blog__footer.jsx-133894201{padding:2.25rem;}}@media (min-width:1440px){.blog__hero.jsx-133894201{height:70vh;}.blog__info.jsx-133894201{padding:3rem 0;}.blog__footer.jsx-133894201{padding:2rem 2rem 3rem 2rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYW1lcm9udGFuc2VsaS9Eb2N1bWVudHMva2FtZXJvbi1ibG9nL3NyYy9wYWdlcy9ibG9nL1tzbHVnXS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQ1MsQUFHa0MsQUFJSixBQU9ELEFBUU8sQUFNRCxBQUdOLEFBSUwsQUFRVyxBQUlOLEFBR0csQUFHTCxBQUdLLEFBR0MsQUFNUCxBQVNHLEFBR0gsQUFLRixBQUtJLEFBSUcsQUFJTCxBQUlRLEFBSUYsQUFJQyxBQUlTLEFBR1gsQUFNSixBQUdHLEFBR2EsV0ExRlosQUErQ3BCLEFBYXVCLENBeUJyQixFQW5FRixDQXNFRSxDQTdHaUIsQUFpQm5CLEFBZ0JBLEFBMkJBLEFBaUJtQixBQXVCakIsQ0EzR1ksQUFnR0UsQ0FJRyxDQXpEbkIsQUFNQSxBQTJDeUIsQ0F4Q0QsQ0F4RHhCLENBeUJBLEFBZWdCLENBckJILElBeUZYLENBZUEsQ0F0SFcsQUE0QkcsQUFvRWQsQ0FSQSxDQUpBLEVBN0VnQixBQTZGaEIsQ0FyRmdCLEVBcUJsQixJQW5DVyxBQTJGVCxFQXhDcUIsQ0F2QlIsTUEzQkcsQUFNRCxDQVFELGFBcUNoQixDQTVDeUIsQUFRekIsQ0FkQSxTQXNEZ0MsQUFZQSxBQVVOLGFBckUxQiw4QkFvQndCLG1DQWtEdEIscUNBdEJtQixBQVlBLE1BdkNJLHVGQTRCQSxBQVl6QixZQXZDQSxXQTRCYSxXQUNLLGdCQUNGLGNBQ2hCIiwiZmlsZSI6Ii9Vc2Vycy9rYW1lcm9udGFuc2VsaS9Eb2N1bWVudHMva2FtZXJvbi1ibG9nL3NyYy9wYWdlcy9ibG9nL1tzbHVnXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IG1hdHRlciBmcm9tIFwiZ3JheS1tYXR0ZXJcIjtcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nVGVtcGxhdGUocHJvcHMpIHtcbiAgZnVuY3Rpb24gcmVmb3JtYXREYXRlKGZ1bGxEYXRlKSB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGZ1bGxEYXRlKTtcbiAgICByZXR1cm4gZGF0ZS50b0RhdGVTdHJpbmcoKS5zbGljZSg0KTtcbiAgfVxuICBjb25zdCBtYXJrZG93bkJvZHkgPSBwcm9wcy5jb250ZW50O1xuICBjb25zdCBmcm9udG1hdHRlciA9IHByb3BzLmRhdGE7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IHNpdGVUaXRsZT17cHJvcHMuc2l0ZVRpdGxlfT5cbiAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cImJsb2dcIj5cbiAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJibG9nX19oZXJvXCI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPXtmcm9udG1hdHRlci5oZXJvX2ltYWdlfVxuICAgICAgICAgICAgYWx0PXtgYmxvZ19oZXJvXyR7ZnJvbnRtYXR0ZXIudGl0bGV9YH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nX19pbmZvXCI+XG4gICAgICAgICAgPGgxPntmcm9udG1hdHRlci50aXRsZX08L2gxPlxuICAgICAgICAgIDxoMz57cmVmb3JtYXREYXRlKGZyb250bWF0dGVyLmRhdGUpfTwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2dfX2JvZHlcIj5cbiAgICAgICAgICA8UmVhY3RNYXJrZG93biBzb3VyY2U9e21hcmtkb3duQm9keX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2FydGljbGU+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC5ibG9nIGgxIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuN3JlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYmxvZ19faGVybyB7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgICAgICAgICAgIGhlaWdodDogNjB2aDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJsb2dfX2hlcm8gaW1nIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYmxvZ19faW5mbyB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxLjVyZW0gMS4yNXJlbTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA3NjhweDtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYmxvZ19faW5mbyBoMSB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjY2cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYmxvZ19faW5mbyBoMyB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5ibG9nX19ib2R5IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZzogMCAxLjI1cmVtO1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYmxvZ19fYm9keSBhIHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XG4gICAgICAgICAgICBjb2xvcjogIzIxOTZmMztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJsb2dfX2JvZHk6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYmxvZ19fYm9keSBoMSBoMiBoMyBoNCBoNSBoNiBwIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ibG9nX19ib2R5IHAge1xuICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ibG9nX19ib2R5IHVsIHtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IGluaXRpYWw7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ibG9nX19ib2R5IHVsIG9sIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxLjI1cmVtO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMS40NXJlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYmxvZ19fZm9vdGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZzogMS41cmVtIDEuMjVyZW07XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJsb2dfX2Zvb3RlciBoMiB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYmxvZ19fZm9vdGVyIGEge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ibG9nX19mb290ZXIgYSBzdmcge1xuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICAuYmxvZyB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYmxvZ19fYm9keSB7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAgMnJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ibG9nX19ib2R5IHNwYW4ge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAxLjVyZW0gYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ibG9nX19ib2R5IHVsIG9sIHtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEuNXJlbTtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJsb2dfX2hlcm8ge1xuICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA2MDBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA3NXZoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJsb2dfX2luZm8ge1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDJyZW0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ibG9nX19pbmZvIGgxIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG8gMC42NnJlbSBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJsb2dfX2Zvb3RlciB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDIuMjVyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDE0NDBweCkge1xuICAgICAgICAgICAgLmJsb2dfX2hlcm8ge1xuICAgICAgICAgICAgICBoZWlnaHQ6IDcwdmg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYmxvZ19faW5mbyB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDNyZW0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ibG9nX19mb290ZXIge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAycmVtIDJyZW0gM3JlbSAycmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG5cbkJsb2dUZW1wbGF0ZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbihjdHgpIHtcbiAgY29uc3QgeyBzbHVnIH0gPSBjdHgucXVlcnk7XG4gIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBpbXBvcnQoYC4uLy4uL3Bvc3RzLyR7c2x1Z30ubWRgKTtcbiAgY29uc3QgY29uZmlnID0gYXdhaXQgaW1wb3J0KGAuLi8uLi9kYXRhL2NvbmZpZy5qc29uYCk7XG4gIGNvbnN0IGRhdGEgPSBtYXR0ZXIoY29udGVudC5kZWZhdWx0KTtcbiAgcmV0dXJuIHtcbiAgICBzaXRlVGl0bGU6IGNvbmZpZy50aXRsZSxcbiAgICAuLi5kYXRhXG4gIH07XG59O1xuIl19 */\n/*@ sourceURL=/Users/kamerontanseli/Documents/kameron-blog/src/pages/blog/[slug].js */"));
}

BlogTemplate.getInitialProps = function _callee(ctx) {
  var slug, content, config, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          slug = ctx.query.slug;
          _context.next = 3;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.awrap(__webpack_require__("./posts lazy recursive ^\\.\\/.*\\.md$")("./".concat(slug, ".md")));

        case 3:
          content = _context.sent;
          _context.next = 6;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.awrap(__webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! ../../data/config.json */ "./data/config.json", 3)));

        case 6:
          config = _context.sent;
          data = gray_matter__WEBPACK_IMPORTED_MODULE_10___default()(content["default"]);
          return _context.abrupt("return", _objectSpread({
            siteTitle: config.title
          }, data));

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
};

/***/ })

})
//# sourceMappingURL=[slug].js.0bfbe76d14601c5c91ce.hot-update.js.map
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
    className: "jsx-961926658" + " " + "blog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("figure", {
    className: "jsx-961926658" + " " + "blog__hero",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("img", {
    src: frontmatter.hero_image,
    alt: "blog_hero_".concat(frontmatter.title),
    className: "jsx-961926658",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-961926658" + " " + "blog__info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-961926658",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, frontmatter.title), __jsx("h3", {
    className: "jsx-961926658",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, reformatDate(frontmatter.date))), __jsx("div", {
    className: "jsx-961926658" + " " + "blog__body",
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
    id: "961926658",
    __self: this
  }, ".blog.jsx-961926658 h1.jsx-961926658{margin-bottom:.7rem;}.blog__hero.jsx-961926658{min-height:300px;height:60vh;width:100%;margin:0;overflow:hidden;}.blog__hero.jsx-961926658 img.jsx-961926658{margin-bottom:0;object-fit:cover;min-height:100%;min-width:100%;object-position:center;}.blog__info.jsx-961926658{padding:1.5rem 1.25rem;width:100%;max-width:768px;margin:0 auto;}.blog__info.jsx-961926658 h1.jsx-961926658{margin-bottom:0.66rem;}.blog__info.jsx-961926658 h3.jsx-961926658{margin-bottom:0;}.blog__body.jsx-961926658{width:100%;padding:0 1.25rem;margin:0 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.blog__body.jsx-961926658 a.jsx-961926658{padding-bottom:1.5rem;}.blog__body.jsx-961926658:last-child{margin-bottom:0;}.blog__body.jsx-961926658 h1.jsx-961926658 h2.jsx-961926658 h3.jsx-961926658 h4.jsx-961926658 h5.jsx-961926658 h6.jsx-961926658 p.jsx-961926658{font-weight:normal;}.blog__body.jsx-961926658 p.jsx-961926658{color:inherit;}.blog__body.jsx-961926658 ul.jsx-961926658{list-style:initial;}.blog__body.jsx-961926658 ul.jsx-961926658 ol.jsx-961926658{margin-left:1.25rem;margin-bottom:1.25rem;padding-left:1.45rem;}.blog__footer.jsx-961926658{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:1.5rem 1.25rem;width:100%;max-width:800px;margin:0 auto;}.blog__footer.jsx-961926658 h2.jsx-961926658{margin-bottom:0;}.blog__footer.jsx-961926658 a.jsx-961926658{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.blog__footer.jsx-961926658 a.jsx-961926658 svg.jsx-961926658{width:20px;}@media (min-width:768px){.blog.jsx-961926658{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.blog__body.jsx-961926658{max-width:800px;padding:0 2rem;}.blog__body.jsx-961926658 span.jsx-961926658{width:100%;margin:1.5rem auto;}.blog__body.jsx-961926658 ul.jsx-961926658 ol.jsx-961926658{margin-left:1.5rem;margin-bottom:1.5rem;}.blog__hero.jsx-961926658{min-height:600px;height:75vh;}.blog__info.jsx-961926658{text-align:center;padding:2rem 0;}.blog__info.jsx-961926658 h1.jsx-961926658{margin:0 auto 0.66rem auto;}.blog__footer.jsx-961926658{padding:2.25rem;}}@media (min-width:1440px){.blog__hero.jsx-961926658{height:70vh;}.blog__info.jsx-961926658{padding:3rem 0;}.blog__footer.jsx-961926658{padding:2rem 2rem 3rem 2rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYW1lcm9udGFuc2VsaS9Eb2N1bWVudHMva2FtZXJvbi1ibG9nL3NyYy9wYWdlcy9ibG9nL1tzbHVnXS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQ08sQUFHK0IsQUFJSCxBQU9ELEFBUU8sQUFNRCxBQUdOLEFBSUwsQUFRVyxBQUdOLEFBR0csQUFHTCxBQUdLLEFBR0MsQUFNUCxBQVNHLEFBR0gsQUFLRixBQUtJLEFBSUcsQUFJTCxBQUlRLEFBSUYsQUFJQyxBQUlTLEFBR1gsQUFNSixBQUdHLEFBR2EsV0F6RlosQUE4Q3BCLEFBYXVCLENBeUJyQixFQW5FRixDQXNFRSxDQTVHaUIsQUFpQm5CLEFBZUEsQUEyQkEsQUFpQm1CLEFBdUJqQixDQTFHWSxBQStGRSxDQUlHLENBekRuQixBQU1BLEFBMkN5QixDQS9GekIsQUF1RHdCLEVBOUJ4QixBQWVBLENBckJhLElBd0ZYLENBZUEsQ0FySFcsQUE0QkcsQUFtRWQsQ0FSQSxDQUpBLEVBNUVnQixBQTRGaEIsQ0FwRmdCLE1BZFAsQUEwRlQsRUF4Q3FCLENBdEJSLE1BM0JHLEFBTUQsQ0FRRCxhQW9DaEIsQ0EzQ3lCLEFBUXpCLENBZEEsU0FxRGdDLEFBWUEsQUFVTixhQXBFMUIsOEJBb0J3QixtQ0FpRHRCLHFDQXRCbUIsQUFZQSxNQXRDSSx1RkEyQkEsQUFZekIsWUF0Q0EsV0EyQmEsV0FDSyxnQkFDRixjQUNoQiIsImZpbGUiOiIvVXNlcnMva2FtZXJvbnRhbnNlbGkvRG9jdW1lbnRzL2thbWVyb24tYmxvZy9zcmMvcGFnZXMvYmxvZy9bc2x1Z10uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBtYXR0ZXIgZnJvbSBcImdyYXktbWF0dGVyXCI7XG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIjtcblxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZ1RlbXBsYXRlKHByb3BzKSB7XG4gIGZ1bmN0aW9uIHJlZm9ybWF0RGF0ZShmdWxsRGF0ZSkge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShmdWxsRGF0ZSlcbiAgICByZXR1cm4gZGF0ZS50b0RhdGVTdHJpbmcoKS5zbGljZSg0KTtcbiAgfVxuICBjb25zdCBtYXJrZG93bkJvZHkgPSBwcm9wcy5jb250ZW50XG4gIGNvbnN0IGZyb250bWF0dGVyID0gcHJvcHMuZGF0YVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dCBzaXRlVGl0bGU9e3Byb3BzLnNpdGVUaXRsZX0+XG4gICAgPGFydGljbGUgY2xhc3NOYW1lPVwiYmxvZ1wiPlxuICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cImJsb2dfX2hlcm9cIj5cbiAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPXtmcm9udG1hdHRlci5oZXJvX2ltYWdlfVxuICAgICAgICAgICAgYWx0PXtgYmxvZ19oZXJvXyR7ZnJvbnRtYXR0ZXIudGl0bGV9YH1cbiAgICAgICAgLz5cbiAgICAgICAgPC9maWd1cmU+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZ19faW5mb1wiPlxuICAgICAgICA8aDE+e2Zyb250bWF0dGVyLnRpdGxlfTwvaDE+XG4gICAgICAgIDxoMz57cmVmb3JtYXREYXRlKGZyb250bWF0dGVyLmRhdGUpfTwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2dfX2JvZHlcIj5cbiAgICAgICAgPFJlYWN0TWFya2Rvd24gc291cmNlPXttYXJrZG93bkJvZHl9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvYXJ0aWNsZT5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgLmJsb2cgaDEge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IC43cmVtO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuYmxvZ19faGVybyB7XG4gICAgICAgICAgbWluLWhlaWdodDogMzAwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA2MHZoO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG4gICAgICAgIC5ibG9nX19oZXJvIGltZyB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICAgICAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmJsb2dfX2luZm8ge1xuICAgICAgICAgIHBhZGRpbmc6IDEuNXJlbSAxLjI1cmVtO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1heC13aWR0aDogNzY4cHg7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgLmJsb2dfX2luZm8gaDEge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNjZyZW07XG4gICAgICAgIH1cbiAgICAgICAgLmJsb2dfX2luZm8gaDMge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5ibG9nX19ib2R5IHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBwYWRkaW5nOiAwIDEuMjVyZW07XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5ibG9nX19ib2R5IGEge1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgLmJsb2dfX2JvZHk6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgfVxuICAgICAgICAuYmxvZ19fYm9keSBoMSBoMiBoMyBoNCBoNSBoNiBwIHtcbiAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICB9XG4gICAgICAgIC5ibG9nX19ib2R5IHAge1xuICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICB9XG4gICAgICAgIC5ibG9nX19ib2R5IHVsIHtcbiAgICAgICAgICBsaXN0LXN0eWxlOiBpbml0aWFsO1xuICAgICAgICB9XG4gICAgICAgIC5ibG9nX19ib2R5IHVsIG9sIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMS4yNXJlbTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMS40NXJlbTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmJsb2dfX2Zvb3RlciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBwYWRkaW5nOiAxLjVyZW0gMS4yNXJlbTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIC5ibG9nX19mb290ZXIgaDIge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmJsb2dfX2Zvb3RlciBhIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5ibG9nX19mb290ZXIgYSBzdmcge1xuICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAuYmxvZyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJsb2dfX2JvZHkge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMnJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJsb2dfX2JvZHkgc3BhbiB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbjogMS41cmVtIGF1dG87XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ibG9nX19ib2R5IHVsIG9sIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxLjVyZW07XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ibG9nX19oZXJvIHtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDYwMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA3NXZoO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYmxvZ19faW5mbyB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiAycmVtIDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ibG9nX19pbmZvIGgxIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvIDAuNjZyZW0gYXV0bztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJsb2dfX2Zvb3RlciB7XG4gICAgICAgICAgICBwYWRkaW5nOiAyLjI1cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDE0NDBweCkge1xuICAgICAgICAgIC5ibG9nX19oZXJvIHtcbiAgICAgICAgICAgIGhlaWdodDogNzB2aDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJsb2dfX2luZm8ge1xuICAgICAgICAgICAgcGFkZGluZzogM3JlbSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYmxvZ19fZm9vdGVyIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDJyZW0gMnJlbSAzcmVtIDJyZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgXG4gICAgPC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgICApO1xuXG59XG5cbkJsb2dUZW1wbGF0ZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbihjdHgpIHtcbiAgY29uc3QgeyBzbHVnIH0gPSBjdHgucXVlcnlcbiAgY29uc3QgY29udGVudCA9IGF3YWl0IGltcG9ydChgLi4vLi4vcG9zdHMvJHtzbHVnfS5tZGApXG4gIGNvbnN0IGNvbmZpZyA9IGF3YWl0IGltcG9ydChgLi4vLi4vZGF0YS9jb25maWcuanNvbmApXG4gIGNvbnN0IGRhdGEgPSBtYXR0ZXIoY29udGVudC5kZWZhdWx0KTtcbiAgcmV0dXJuIHtcbiAgICBzaXRlVGl0bGU6IGNvbmZpZy50aXRsZSxcbiAgICAuLi5kYXRhXG4gIH1cbn0iXX0= */\n/*@ sourceURL=/Users/kamerontanseli/Documents/kameron-blog/src/pages/blog/[slug].js */"));
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
//# sourceMappingURL=[slug].js.0f5283f35a0acecd9361.hot-update.js.map
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/blog/[slug]": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/blog/[slug].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/new/Seo.js":
/*!*******************************!*\
  !*** ./components/new/Seo.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SEO; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/kameron/Desktop/kamerontanseli.github.io/src/components/new/Seo.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction SEO({\n  title,\n  description,\n  image\n}) {\n  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 5\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }\n  }, title), __jsx(\"meta\", {\n    name: \"twitter:title\",\n    content: title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }\n  }), description && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"meta\", {\n    name: \"description\",\n    content: description,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 11\n    }\n  }), __jsx(\"meta\", {\n    name: \"twitter:description\",\n    content: description,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 11\n    }\n  }), __jsx(\"meta\", {\n    property: \"og:description\",\n    content: description,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 11\n    }\n  })), __jsx(\"meta\", {\n    property: \"og:title\",\n    content: title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }), image && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"meta\", {\n    name: \"twitter:image\",\n    content: image.startsWith(\"/\") ? `https://kamrn.com${image}` : image,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 11\n    }\n  }), __jsx(\"meta\", {\n    property: \"og:image\",\n    content: image.startsWith(\"/\") ? `https://kamrn.com${image}` : image,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 11\n    }\n  })));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25ldy9TZW8uanM/MTMwZSJdLCJuYW1lcyI6WyJTRU8iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJzdGFydHNXaXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLEdBQVQsQ0FBYTtBQUFFQyxPQUFGO0FBQVNDLGFBQVQ7QUFBc0JDO0FBQXRCLENBQWIsRUFBNEM7QUFDekQsU0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVFGLEtBQVIsQ0FERixFQUVFO0FBQU0sUUFBSSxFQUFDLGVBQVg7QUFBMkIsV0FBTyxFQUFFQSxLQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHR0MsV0FBVyxJQUNWLG1FQUNFO0FBQU0sUUFBSSxFQUFDLGFBQVg7QUFBeUIsV0FBTyxFQUFFQSxXQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFNLFFBQUksRUFBQyxxQkFBWDtBQUFpQyxXQUFPLEVBQUVBLFdBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFO0FBQU0sWUFBUSxFQUFDLGdCQUFmO0FBQWdDLFdBQU8sRUFBRUEsV0FBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLENBSkosRUFVRTtBQUFNLFlBQVEsRUFBQyxVQUFmO0FBQTBCLFdBQU8sRUFBRUQsS0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZGLEVBV0dFLEtBQUssSUFDSixtRUFDRTtBQUNFLFFBQUksRUFBQyxlQURQO0FBRUUsV0FBTyxFQUNMQSxLQUFLLENBQUNDLFVBQU4sQ0FBaUIsR0FBakIsSUFBeUIsb0JBQW1CRCxLQUFNLEVBQWxELEdBQXNEQSxLQUgxRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFPRTtBQUNFLFlBQVEsRUFBQyxVQURYO0FBRUUsV0FBTyxFQUNMQSxLQUFLLENBQUNDLFVBQU4sQ0FBaUIsR0FBakIsSUFBeUIsb0JBQW1CRCxLQUFNLEVBQWxELEdBQXNEQSxLQUgxRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsQ0FaSixDQURGO0FBOEJEIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9uZXcvU2VvLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTRU8oeyB0aXRsZSwgZGVzY3JpcHRpb24sIGltYWdlIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cbiAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD17dGl0bGV9IC8+XG4gICAgICB7ZGVzY3JpcHRpb24gJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufT48L21ldGE+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXt0aXRsZX0gLz5cbiAgICAgIHtpbWFnZSAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgIG5hbWU9XCJ0d2l0dGVyOmltYWdlXCJcbiAgICAgICAgICAgIGNvbnRlbnQ9e1xuICAgICAgICAgICAgICBpbWFnZS5zdGFydHNXaXRoKFwiL1wiKSA/IGBodHRwczovL2thbXJuLmNvbSR7aW1hZ2V9YCA6IGltYWdlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgcHJvcGVydHk9XCJvZzppbWFnZVwiXG4gICAgICAgICAgICBjb250ZW50PXtcbiAgICAgICAgICAgICAgaW1hZ2Uuc3RhcnRzV2l0aChcIi9cIikgPyBgaHR0cHM6Ly9rYW1ybi5jb20ke2ltYWdlfWAgOiBpbWFnZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8L0hlYWQ+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/new/Seo.js\n");

/***/ }),

/***/ "./pages/blog/[slug].js":
/*!******************************!*\
  !*** ./pages/blog/[slug].js ***!
  \******************************/
/*! exports provided: default, getStaticProps, getStaticPaths */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticPaths\", function() { return getStaticPaths; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gray-matter */ \"gray-matter\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-mdx-remote/serialize */ \"next-mdx-remote/serialize\");\n/* harmony import */ var next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-mdx-remote */ \"next-mdx-remote\");\n/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_mdx_remote__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_new_Seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/new/Seo */ \"./components/new/Seo.js\");\nvar _jsxFileName = \"/Users/kameron/Desktop/kamerontanseli.github.io/src/pages/blog/[slug].js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\nconst Article = ({\n  post\n}) => {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_new_Seo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    title: `${post.data.title}`,\n    description: post.data.byline,\n    image: post.data.image,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }), __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }\n  }, __jsx(\"a\", {\n    href: \"/\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }\n  }, \"\\u2190 Back to all articles\")), __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }\n  }, post.data.title), __jsx(\"div\", {\n    className: \"article-content\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }\n  }, __jsx(next_mdx_remote__WEBPACK_IMPORTED_MODULE_3__[\"MDXRemote\"], _extends({}, post.content, {\n    components: {},\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  }))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Article);\nasync function getStaticProps({\n  params\n}) {\n  const file = await __webpack_require__(\"./posts lazy recursive ^\\\\.\\\\/.*\\\\.md$\")(`./${params.slug}.md`);\n  const {\n    data,\n    content\n  } = gray_matter__WEBPACK_IMPORTED_MODULE_1___default()(file.default);\n  const source = await Object(next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_2__[\"serialize\"])(content);\n  return {\n    props: {\n      post: {\n        data,\n        content: source\n      },\n      slug: params.slug\n    }\n  };\n}\nasync function getStaticPaths() {\n  const glob = __webpack_require__(/*! glob */ \"glob\");\n\n  const blogs = glob.sync(\"src/posts/**/*.md\");\n  const blogSlugs = blogs.map(file => file.split(\"/\")[2].replace(/ /g, \"-\").slice(0, -3).trim());\n  return {\n    paths: blogSlugs.map(slug => ({\n      params: {\n        slug\n      }\n    })),\n    fallback: false\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ibG9nL1tzbHVnXS5qcz8yOTM0Il0sIm5hbWVzIjpbIkFydGljbGUiLCJwb3N0IiwiZGF0YSIsInRpdGxlIiwiYnlsaW5lIiwiaW1hZ2UiLCJjb250ZW50IiwiZ2V0U3RhdGljUHJvcHMiLCJwYXJhbXMiLCJmaWxlIiwic2x1ZyIsIm1hdHRlciIsImRlZmF1bHQiLCJzb3VyY2UiLCJzZXJpYWxpemUiLCJwcm9wcyIsImdldFN0YXRpY1BhdGhzIiwiZ2xvYiIsInJlcXVpcmUiLCJibG9ncyIsInN5bmMiLCJibG9nU2x1Z3MiLCJtYXAiLCJzcGxpdCIsInJlcGxhY2UiLCJzbGljZSIsInRyaW0iLCJwYXRocyIsImZhbGxiYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxPQUFPLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBYztBQUM1QixTQUNFLG1FQUNFLE1BQUMsMkRBQUQ7QUFDRSxTQUFLLEVBQUcsR0FBRUEsSUFBSSxDQUFDQyxJQUFMLENBQVVDLEtBQU0sRUFENUI7QUFFRSxlQUFXLEVBQUVGLElBQUksQ0FBQ0MsSUFBTCxDQUFVRSxNQUZ6QjtBQUdFLFNBQUssRUFBRUgsSUFBSSxDQUFDQyxJQUFMLENBQVVHLEtBSG5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFFBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBREYsQ0FORixFQVNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS0osSUFBSSxDQUFDQyxJQUFMLENBQVVDLEtBQWYsQ0FURixFQVVFO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHlEQUFELGVBQWVGLElBQUksQ0FBQ0ssT0FBcEI7QUFBNkIsY0FBVSxFQUFFLEVBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERixDQVZGLENBREY7QUFnQkQsQ0FqQkQ7O0FBbUJlTixzRUFBZjtBQUVPLGVBQWVPLGNBQWYsQ0FBOEI7QUFBRUM7QUFBRixDQUE5QixFQUEwQztBQUMvQyxRQUFNQyxJQUFJLEdBQUcsTUFBTSw4REFBUSxLQUFjRCxNQUFNLENBQUNFLElBQUssS0FBbEMsQ0FBbkI7QUFDQSxRQUFNO0FBQUVSLFFBQUY7QUFBUUk7QUFBUixNQUFvQkssa0RBQU0sQ0FBQ0YsSUFBSSxDQUFDRyxPQUFOLENBQWhDO0FBQ0EsUUFBTUMsTUFBTSxHQUFHLE1BQU1DLDJFQUFTLENBQUNSLE9BQUQsQ0FBOUI7QUFFQSxTQUFPO0FBQ0xTLFNBQUssRUFBRTtBQUNMZCxVQUFJLEVBQUU7QUFBRUMsWUFBRjtBQUFRSSxlQUFPLEVBQUVPO0FBQWpCLE9BREQ7QUFFTEgsVUFBSSxFQUFFRixNQUFNLENBQUNFO0FBRlI7QUFERixHQUFQO0FBTUQ7QUFFTSxlQUFlTSxjQUFmLEdBQWdDO0FBQ3JDLFFBQU1DLElBQUksR0FBR0MsbUJBQU8sQ0FBQyxrQkFBRCxDQUFwQjs7QUFDQSxRQUFNQyxLQUFLLEdBQUdGLElBQUksQ0FBQ0csSUFBTCxDQUFVLG1CQUFWLENBQWQ7QUFFQSxRQUFNQyxTQUFTLEdBQUdGLEtBQUssQ0FBQ0csR0FBTixDQUFXYixJQUFELElBQzFCQSxJQUFJLENBQ0RjLEtBREgsQ0FDUyxHQURULEVBQ2MsQ0FEZCxFQUVHQyxPQUZILENBRVcsSUFGWCxFQUVpQixHQUZqQixFQUdHQyxLQUhILENBR1MsQ0FIVCxFQUdZLENBQUMsQ0FIYixFQUlHQyxJQUpILEVBRGdCLENBQWxCO0FBUUEsU0FBTztBQUNMQyxTQUFLLEVBQUVOLFNBQVMsQ0FBQ0MsR0FBVixDQUFlWixJQUFELEtBQVc7QUFBRUYsWUFBTSxFQUFFO0FBQUVFO0FBQUY7QUFBVixLQUFYLENBQWQsQ0FERjtBQUVMa0IsWUFBUSxFQUFFO0FBRkwsR0FBUDtBQUlEIiwiZmlsZSI6Ii4vcGFnZXMvYmxvZy9bc2x1Z10uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWF0dGVyIGZyb20gXCJncmF5LW1hdHRlclwiO1xuaW1wb3J0IHsgc2VyaWFsaXplIH0gZnJvbSBcIm5leHQtbWR4LXJlbW90ZS9zZXJpYWxpemVcIjtcbmltcG9ydCB7IE1EWFJlbW90ZSB9IGZyb20gXCJuZXh0LW1keC1yZW1vdGVcIjtcbmltcG9ydCBTRU8gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbmV3L1Nlb1wiO1xuXG5jb25zdCBBcnRpY2xlID0gKHsgcG9zdCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTRU9cbiAgICAgICAgdGl0bGU9e2Ake3Bvc3QuZGF0YS50aXRsZX1gfVxuICAgICAgICBkZXNjcmlwdGlvbj17cG9zdC5kYXRhLmJ5bGluZX1cbiAgICAgICAgaW1hZ2U9e3Bvc3QuZGF0YS5pbWFnZX1cbiAgICAgIC8+XG4gICAgICA8cD5cbiAgICAgICAgPGEgaHJlZj1cIi9cIj4mbGFycjsgQmFjayB0byBhbGwgYXJ0aWNsZXM8L2E+XG4gICAgICA8L3A+XG4gICAgICA8aDE+e3Bvc3QuZGF0YS50aXRsZX08L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlLWNvbnRlbnRcIj5cbiAgICAgICAgPE1EWFJlbW90ZSB7Li4ucG9zdC5jb250ZW50fSBjb21wb25lbnRzPXt7fX0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcbiAgY29uc3QgZmlsZSA9IGF3YWl0IGltcG9ydChgLi4vLi4vcG9zdHMvJHtwYXJhbXMuc2x1Z30ubWRgKTtcbiAgY29uc3QgeyBkYXRhLCBjb250ZW50IH0gPSBtYXR0ZXIoZmlsZS5kZWZhdWx0KTtcbiAgY29uc3Qgc291cmNlID0gYXdhaXQgc2VyaWFsaXplKGNvbnRlbnQpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3Q6IHsgZGF0YSwgY29udGVudDogc291cmNlIH0sXG4gICAgICBzbHVnOiBwYXJhbXMuc2x1ZyxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IGdsb2IgPSByZXF1aXJlKFwiZ2xvYlwiKTtcbiAgY29uc3QgYmxvZ3MgPSBnbG9iLnN5bmMoXCJzcmMvcG9zdHMvKiovKi5tZFwiKTtcblxuICBjb25zdCBibG9nU2x1Z3MgPSBibG9ncy5tYXAoKGZpbGUpID0+XG4gICAgZmlsZVxuICAgICAgLnNwbGl0KFwiL1wiKVsyXVxuICAgICAgLnJlcGxhY2UoLyAvZywgXCItXCIpXG4gICAgICAuc2xpY2UoMCwgLTMpXG4gICAgICAudHJpbSgpXG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRoczogYmxvZ1NsdWdzLm1hcCgoc2x1ZykgPT4gKHsgcGFyYW1zOiB7IHNsdWcgfSB9KSksXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/blog/[slug].js\n");

/***/ }),

/***/ "./posts lazy recursive ^\\.\\/.*\\.md$":
/*!**************************************************!*\
  !*** ./posts lazy ^\.\/.*\.md$ namespace object ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./stats-for-pms-pt-1.md\": [\n\t\t\"./posts/stats-for-pms-pt-1.md\",\n\t\t0\n\t]\n};\nfunction webpackAsyncContext(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\treturn Promise.resolve().then(function() {\n\t\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\t\te.code = 'MODULE_NOT_FOUND';\n\t\t\tthrow e;\n\t\t});\n\t}\n\n\tvar ids = map[req], id = ids[0];\n\treturn __webpack_require__.e(ids[1]).then(function() {\n\t\treturn __webpack_require__(id);\n\t});\n}\nwebpackAsyncContext.keys = function webpackAsyncContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackAsyncContext.id = \"./posts lazy recursive ^\\\\.\\\\/.*\\\\.md$\";\nmodule.exports = webpackAsyncContext;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wb3N0cyBsYXp5IF5cXC5cXC8uKlxcLm1kJCBuYW1lc3BhY2Ugb2JqZWN0Pzg1YmMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9wb3N0cyBsYXp5IHJlY3Vyc2l2ZSBeXFwuXFwvLipcXC5tZCQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vc3RhdHMtZm9yLXBtcy1wdC0xLm1kXCI6IFtcblx0XHRcIi4vcG9zdHMvc3RhdHMtZm9yLXBtcy1wdC0xLm1kXCIsXG5cdFx0MFxuXHRdXG59O1xuZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dChyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcblx0XHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHRcdHRocm93IGU7XG5cdFx0fSk7XG5cdH1cblxuXHR2YXIgaWRzID0gbWFwW3JlcV0sIGlkID0gaWRzWzBdO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5lKGlkc1sxXSkudGhlbihmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG5cdH0pO1xufVxud2VicGFja0FzeW5jQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tBc3luY0NvbnRleHQuaWQgPSBcIi4vcG9zdHMgbGF6eSByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKlxcXFwubWQkXCI7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tBc3luY0NvbnRleHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./posts lazy recursive ^\\.\\/.*\\.md$\n");

/***/ }),

/***/ "glob":
/*!***********************!*\
  !*** external "glob" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"glob\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJnbG9iXCI/ODYzMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJnbG9iLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ2xvYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///glob\n");

/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"gray-matter\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmF5LW1hdHRlclwiP2Y4YmMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZ3JheS1tYXR0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmF5LW1hdHRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///gray-matter\n");

/***/ }),

/***/ "next-mdx-remote":
/*!**********************************!*\
  !*** external "next-mdx-remote" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-mdx-remote\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LW1keC1yZW1vdGVcIj9mNzViIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtbWR4LXJlbW90ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtbWR4LXJlbW90ZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-mdx-remote\n");

/***/ }),

/***/ "next-mdx-remote/serialize":
/*!********************************************!*\
  !*** external "next-mdx-remote/serialize" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-mdx-remote/serialize\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LW1keC1yZW1vdGUvc2VyaWFsaXplXCI/MDI1MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJuZXh0LW1keC1yZW1vdGUvc2VyaWFsaXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1tZHgtcmVtb3RlL3NlcmlhbGl6ZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-mdx-remote/serialize\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });
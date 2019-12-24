webpackHotUpdate("static/development/pages/blog/[slug].js",{

/***/ "./posts lazy recursive ^\\.\\/.*\\.md$":
/*!**************************************************!*\
  !*** ./posts lazy ^\.\/.*\.md$ namespace object ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./bali.md": [
		"./posts/bali.md",
		7
	],
	"./iceland.md": [
		"./posts/iceland.md",
		8
	],
	"./joshua-tree.md": [
		"./posts/joshua-tree.md",
		9
	],
	"./mauritius.md": [
		"./posts/mauritius.md",
		10
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./posts lazy recursive ^\\.\\/.*\\.md$";
module.exports = webpackAsyncContext;

/***/ })

})
//# sourceMappingURL=[slug].js.38fd91fd47183cbb617e.hot-update.js.map
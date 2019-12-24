webpackHotUpdate("static/development/pages/index.js",{

/***/ "./posts sync recursive \\.md$":
/*!**************************!*\
  !*** ./posts sync \.md$ ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./9-ways-to-level-up-your-javascript-code.md": "./posts/9-ways-to-level-up-your-javascript-code.md",
	"./quick-guide-to-using-interfaces-with-javascript.md": "./posts/quick-guide-to-using-interfaces-with-javascript.md",
	"./the-rules-of-reusable-components.md": "./posts/the-rules-of-reusable-components.md"
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

/***/ "./posts/the-rules-of-reusable-components.md":
/*!***************************************************!*\
  !*** ./posts/the-rules-of-reusable-components.md ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("# The rules of reusable components\n\nI spend a lot of my time developing new reusable UI components.\n\nThis means during development I tend to extract UI components that are placed in a shared library or styleguide.\nThese components are reused throughout the entire project. Often having different styles or layouts when integrated into features.\n\nAlong the way I learnt a few rules that helped me save time and pain.\n\n## 1. Keep the layout fluid\n\nI can’t count the amount of times a component has had a fixed width and that has affected a responsive design. Meaning I have to go in and fiddle with the existing props that was set up in place for another feature somewhere in the site. Not good.\n\nBy keeping the component 100% width you pass the layout responsibility up to the parent component.\n\nFor example it’s a lot easier to use `CardOne` over `CardTwo`. As `CardOne` will respond to the parent's column changes when the screen size changes.\n\n```javascript\nconst CardOne = ({ title }) => (\n  <div style={{ \n    padding: \"20px 30px\", \n    background: \"white\" \n  }}>{title}</div>\n);\n\nconst CardTwo = ({ title }) => (\n  <div style={{ \n    width: 600, \n    padding: \"10px\",\n    background: \"white\" \n  }}>\n    {title}\n  </div>\n);\n\nconst App = () => (\n  <div className=\"row\">\n    <div className=\"col-md-6\">\n      <CardOne title=\"I'm Fluid\" />\n    </div>\n    <div className=\"col-md-6\">\n      <CardTwo title=\"I will break this layout\" />\n    </div>\n  </div>\n);\n```\n\n## 2. Allow extra props to be passed\n\nTurns out that your Button component needs a specific data attribute to work with the library you’re using for one of the specific features. Too bad that the `Button` component only allows `className`, `children` and `onClick`.\n\nHow can we fix this?\n\n[Modern ES6 JavaScript allows you to spread function parameters and objects.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) This can be used to feed props to components.\n\n```javascript\n// Before -> <button className=\"button\">Click me</button>\n\nconst Button = ({ children, className, onClick }) => (\n  <button \n    onClick={onClick} \n    className={`${styles.button} ${className || \"\"}`}>\n    {children}\n  </button>\n);\n\n// After -> <button className=\"button\" data-theme=\"dark\">Click me</button>\n\nconst Button = ({ className, ...props }) => (\n  <button \n    className={`${styles.button} ${className || \"\"}`} \n    {...props} />\n);\n\n// Example\n\nconst App = ({ onActivate }) => (\n  <SpecificFeature>\n    <Button data-theme=\"dark\" onClick={onActivate}>\n      Click me\n    </Button>\n  </SpecificFeature>\n);\n```\n\n## 3. Push logic upwards / Keep it dumb\n\nOne of the top things that prevents reusability is when stateful logic specific to a feature is implemented within a reusable component.\n\nImagine you have a `Dropdown` component. That you have used in your navigation when a link is clicked.\n\n```javascript\nconst DropdownItem = ({ className, ...props }) => (\n  <li className={`dropdown-item ${className || \"\"}`} {...props} />\n);\n\nclass Dropdown extends React.Component {\n  state = { toggled: false };\n  toggle = () => this.setState(state => ({ toggled: !state.toggled }));\n  render() {\n    return (\n      <div className=\"navbar-link\">\n        <span onClick={this.toggle}> {this.props.title} </span>\n        {this.state.toggled && (\n          <ul className=\"dropdown\"> {this.props.children} </ul>\n        )}\n      </div>\n    );\n  }\n}\n\nconst Navbar = () => (\n  <div className=\"navbar\">\n    <div className=\"navbar-brand\">Example</div>\n    <ul className=\"navbar-menu\">\n      <Dropdown title=\"My Account\">\n        <DropdownItem>One</DropdownItem>\n        <DropdownItem>Two</DropdownItem>\n      </Dropdown>\n    </ul>\n  </div>\n);\n```\n\nThe problem above is:\n\n1. `Dropdown` handles the logic for opening and closing the dropdown. Making it a lot harder to reuse `Dropdown` for more complicated scenarios (e.g: only open the dropdown when a request is successful).\n\n2. `Dropdown` has markup that relates to the `Navbar` component.\n\nIf we refactor the `Dropdown` component to push the logic up. We end up with a much more reusable `Dropdown` component.\n\n```javascript\nconst DropdownItem = ({ className, ...props }) => (\n  <li className={`dropdown-item ${className || \"\"}`} {...props} />\n);\n\nconst Dropdown = ({ className, ...props }) => (\n  <ul className={`dropdown ${className || \"\"}`} {...props} />\n);\n\nclass Navbar extends React.Component {\n  state = { showUserOptions: false };\n  \n  toggleOptions = () => {\n    this.setState(state => ({\n      showUserOptions: !state.showUserOptions\n    }));\n  }\n\n  render() {\n    return (\n      <div className=\"navbar\">\n        <div className=\"navbar-brand\">Example</div>\n        <ul className=\"navbar-menu\">\n          <div className=\"navbar-link\">\n            <span onClick={this.toggleOptions}>My Account</span>\n            {this.state.showUserOptions && (\n              <Dropdown>\n                <DropdownItem>One</DropdownItem>\n                <DropdownItem>Two</DropdownItem>\n              </Dropdown>\n            )}\n          </div>\n        </ul>\n      </div>\n    );\n  }\n}\n```\n\n## Summary\n* Keep the component layout fluid.\n* Allows extra props to be passed into the component.\n* Keep logic out of them as much as possible.");

/***/ })

})
//# sourceMappingURL=index.js.736eb02eaf8b1520337a.hot-update.js.map
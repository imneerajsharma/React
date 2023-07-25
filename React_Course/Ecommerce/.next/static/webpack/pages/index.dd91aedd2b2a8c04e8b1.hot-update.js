/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/ProductFeed.js":
/*!***************************************!*\
  !*** ./src/components/ProductFeed.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Product */ \"./src/components/Product.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/neerajsharma/Neeraj_Learning/React/React_Course/Ecommerce/src/components/ProductFeed.js\";\n\n\n\nfunction ProductFeed(_ref) {\n  var _this = this;\n\n  var products = _ref.products;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4\",\n    children: products.map(function (_ref2) {\n      var id = _ref2.id,\n          title = _ref2.title,\n          price = _ref2.price,\n          description = _ref2.description,\n          category = _ref2.category,\n          image = _ref2.image;\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product__WEBPACK_IMPORTED_MODULE_2__.default, {\n        id: id,\n        title: title,\n        price: price,\n        description: description,\n        category: category,\n        image: image\n      }, id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 9\n      }, _this) // <p key={product.id}>{product.title}</p>\n      // <p>{product.title}</p> // this will give an error because \n      //  The error \"Unhandled Runtime Error: TypeError: Cannot read properties of \n      //     undefined (reading 'map')\" occurs because the products prop is not being passed \n      //     correctly to the ProductFeed component when it is being used.\n      //  The error suggests that the products prop is undefined, meaning that it is not provided\n      //  or is not yet available when the ProductFeed component tries to access it using the map method.\n      //  To resolve this error, you need to ensure that the products prop is passed correctly\n      //  to the ProductFeed component when it is used in the index.js file. You can do this by \n      //  making sure that the products prop is available and contains valid data before rendering \n      //  the ProductFeed component.\n      ;\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, this);\n}\n\n_c = ProductFeed;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductFeed);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductFeed\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdEZlZWQuanM/MDU1YiJdLCJuYW1lcyI6WyJQcm9kdWN0RmVlZCIsInByb2R1Y3RzIiwibWFwIiwiaWQiLCJ0aXRsZSIsInByaWNlIiwiZGVzY3JpcHRpb24iLCJjYXRlZ29yeSIsImltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLFdBQVQsT0FBaUM7QUFBQTs7QUFBQSxNQUFYQyxRQUFXLFFBQVhBLFFBQVc7QUFDL0Isc0JBQ0U7QUFBSyxhQUFTLEVBQUMsdUVBQWY7QUFBQSxjQUVHQSxRQUFRLENBQUNDLEdBQVQsQ0FBYTtBQUFBLFVBQUVDLEVBQUYsU0FBRUEsRUFBRjtBQUFBLFVBQUtDLEtBQUwsU0FBS0EsS0FBTDtBQUFBLFVBQVdDLEtBQVgsU0FBV0EsS0FBWDtBQUFBLFVBQWlCQyxXQUFqQixTQUFpQkEsV0FBakI7QUFBQSxVQUE2QkMsUUFBN0IsU0FBNkJBLFFBQTdCO0FBQUEsVUFBc0NDLEtBQXRDLFNBQXNDQSxLQUF0QztBQUFBLDBCQUNaLDhEQUFDLDZDQUFEO0FBRUksVUFBRSxFQUFFTCxFQUZSO0FBR0ksYUFBSyxFQUFFQyxLQUhYO0FBSUksYUFBSyxFQUFFQyxLQUpYO0FBS0ksbUJBQVcsRUFBRUMsV0FMakI7QUFNSSxnQkFBUSxFQUFFQyxRQU5kO0FBT0ksYUFBSyxFQUFFQztBQVBYLFNBQ1NMLEVBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURZLENBY1o7QUFDQTtBQUVSO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQTNCb0I7QUFBQSxLQUFiO0FBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBbUNEOztLQXBDUUgsVztBQXNDVCwrREFBZUEsV0FBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1Byb2R1Y3RGZWVkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb2R1Y3QgZnJvbSAnLi9Qcm9kdWN0J1xuXG5mdW5jdGlvbiBQcm9kdWN0RmVlZCh7cHJvZHVjdHN9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1mbG93LXJvdy1kZW5zZSBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyB4bDpncmlkLWNvbHMtNCc+XG4gICAgICBcbiAgICAgIHtwcm9kdWN0cy5tYXAoKHtpZCx0aXRsZSxwcmljZSxkZXNjcmlwdGlvbixjYXRlZ29yeSxpbWFnZX0pPT4oXG4gICAgICAgIDxQcm9kdWN0XG4gICAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICAgICAgcHJpY2U9e3ByaWNlfVxuICAgICAgICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgY2F0ZWdvcnk9e2NhdGVnb3J5fVxuICAgICAgICAgICAgaW1hZ2U9e2ltYWdlfVxuICAgICAgICBcbiAgICAgICAgLz5cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgLy8gPHAga2V5PXtwcm9kdWN0LmlkfT57cHJvZHVjdC50aXRsZX08L3A+XG4gICAgICAgIC8vIDxwPntwcm9kdWN0LnRpdGxlfTwvcD4gLy8gdGhpcyB3aWxsIGdpdmUgYW4gZXJyb3IgYmVjYXVzZSBcblxuLy8gIFRoZSBlcnJvciBcIlVuaGFuZGxlZCBSdW50aW1lIEVycm9yOiBUeXBlRXJyb3I6IENhbm5vdCByZWFkIHByb3BlcnRpZXMgb2YgXG4vLyAgICAgdW5kZWZpbmVkIChyZWFkaW5nICdtYXAnKVwiIG9jY3VycyBiZWNhdXNlIHRoZSBwcm9kdWN0cyBwcm9wIGlzIG5vdCBiZWluZyBwYXNzZWQgXG4vLyAgICAgY29ycmVjdGx5IHRvIHRoZSBQcm9kdWN0RmVlZCBjb21wb25lbnQgd2hlbiBpdCBpcyBiZWluZyB1c2VkLlxuXG4vLyAgVGhlIGVycm9yIHN1Z2dlc3RzIHRoYXQgdGhlIHByb2R1Y3RzIHByb3AgaXMgdW5kZWZpbmVkLCBtZWFuaW5nIHRoYXQgaXQgaXMgbm90IHByb3ZpZGVkXG4vLyAgb3IgaXMgbm90IHlldCBhdmFpbGFibGUgd2hlbiB0aGUgUHJvZHVjdEZlZWQgY29tcG9uZW50IHRyaWVzIHRvIGFjY2VzcyBpdCB1c2luZyB0aGUgbWFwIG1ldGhvZC5cblxuLy8gIFRvIHJlc29sdmUgdGhpcyBlcnJvciwgeW91IG5lZWQgdG8gZW5zdXJlIHRoYXQgdGhlIHByb2R1Y3RzIHByb3AgaXMgcGFzc2VkIGNvcnJlY3RseVxuLy8gIHRvIHRoZSBQcm9kdWN0RmVlZCBjb21wb25lbnQgd2hlbiBpdCBpcyB1c2VkIGluIHRoZSBpbmRleC5qcyBmaWxlLiBZb3UgY2FuIGRvIHRoaXMgYnkgXG4vLyAgbWFraW5nIHN1cmUgdGhhdCB0aGUgcHJvZHVjdHMgcHJvcCBpcyBhdmFpbGFibGUgYW5kIGNvbnRhaW5zIHZhbGlkIGRhdGEgYmVmb3JlIHJlbmRlcmluZyBcbi8vICB0aGUgUHJvZHVjdEZlZWQgY29tcG9uZW50LlxuICAgICAgXG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0RmVlZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ProductFeed.js\n");

/***/ })

});
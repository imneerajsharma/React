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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Product */ \"./src/components/Product.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/neerajsharma/Neeraj_Learning/React/React_Course/Ecommerce/src/components/ProductFeed.js\";\n\n\n\nfunction ProductFeed(_ref) {\n  var _this = this;\n\n  var products = _ref.products;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid\",\n    children: products.map(function (_ref2) {\n      var id = _ref2.id,\n          title = _ref2.title,\n          price = _ref2.price,\n          description = _ref2.description,\n          category = _ref2.category,\n          image = _ref2.image;\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product__WEBPACK_IMPORTED_MODULE_2__.default, {\n        id: id,\n        title: title,\n        price: price,\n        description: description,\n        category: category,\n        image: image\n      }, id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 9\n      }, _this) // <p key={product.id}>{product.title}</p>\n      // <p>{product.title}</p> // this will give an error because \n      //  The error \"Unhandled Runtime Error: TypeError: Cannot read properties of \n      //     undefined (reading 'map')\" occurs because the products prop is not being passed \n      //     correctly to the ProductFeed component when it is being used.\n      //  The error suggests that the products prop is undefined, meaning that it is not provided\n      //  or is not yet available when the ProductFeed component tries to access it using the map method.\n      //  To resolve this error, you need to ensure that the products prop is passed correctly\n      //  to the ProductFeed component when it is used in the index.js file. You can do this by \n      //  making sure that the products prop is available and contains valid data before rendering \n      //  the ProductFeed component.\n      ;\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, this);\n}\n\n_c = ProductFeed;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductFeed);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductFeed\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdEZlZWQuanM/MDU1YiJdLCJuYW1lcyI6WyJQcm9kdWN0RmVlZCIsInByb2R1Y3RzIiwibWFwIiwiaWQiLCJ0aXRsZSIsInByaWNlIiwiZGVzY3JpcHRpb24iLCJjYXRlZ29yeSIsImltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLFdBQVQsT0FBaUM7QUFBQTs7QUFBQSxNQUFYQyxRQUFXLFFBQVhBLFFBQVc7QUFDL0Isc0JBQ0U7QUFBSyxhQUFTLEVBQUMsZ0VBQWY7QUFBQSxjQUVHQSxRQUFRLENBQUNDLEdBQVQsQ0FBYTtBQUFBLFVBQUVDLEVBQUYsU0FBRUEsRUFBRjtBQUFBLFVBQUtDLEtBQUwsU0FBS0EsS0FBTDtBQUFBLFVBQVdDLEtBQVgsU0FBV0EsS0FBWDtBQUFBLFVBQWlCQyxXQUFqQixTQUFpQkEsV0FBakI7QUFBQSxVQUE2QkMsUUFBN0IsU0FBNkJBLFFBQTdCO0FBQUEsVUFBc0NDLEtBQXRDLFNBQXNDQSxLQUF0QztBQUFBLDBCQUNaLDhEQUFDLDZDQUFEO0FBRUksVUFBRSxFQUFFTCxFQUZSO0FBR0ksYUFBSyxFQUFFQyxLQUhYO0FBSUksYUFBSyxFQUFFQyxLQUpYO0FBS0ksbUJBQVcsRUFBRUMsV0FMakI7QUFNSSxnQkFBUSxFQUFFQyxRQU5kO0FBT0ksYUFBSyxFQUFFQztBQVBYLFNBQ1NMLEVBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURZLENBY1o7QUFDQTtBQUVSO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQTNCb0I7QUFBQSxLQUFiO0FBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBbUNEOztLQXBDUUgsVztBQXNDVCwrREFBZUEsV0FBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1Byb2R1Y3RGZWVkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb2R1Y3QgZnJvbSAnLi9Qcm9kdWN0J1xuXG5mdW5jdGlvbiBQcm9kdWN0RmVlZCh7cHJvZHVjdHN9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1mbG93LXJvdy1kZW5zZSBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyB4bDpncmlkJz5cbiAgICAgIFxuICAgICAge3Byb2R1Y3RzLm1hcCgoe2lkLHRpdGxlLHByaWNlLGRlc2NyaXB0aW9uLGNhdGVnb3J5LGltYWdlfSk9PihcbiAgICAgICAgPFByb2R1Y3RcbiAgICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgICBwcmljZT17cHJpY2V9XG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XG4gICAgICAgICAgICBjYXRlZ29yeT17Y2F0ZWdvcnl9XG4gICAgICAgICAgICBpbWFnZT17aW1hZ2V9XG4gICAgICAgIFxuICAgICAgICAvPlxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICAvLyA8cCBrZXk9e3Byb2R1Y3QuaWR9Pntwcm9kdWN0LnRpdGxlfTwvcD5cbiAgICAgICAgLy8gPHA+e3Byb2R1Y3QudGl0bGV9PC9wPiAvLyB0aGlzIHdpbGwgZ2l2ZSBhbiBlcnJvciBiZWNhdXNlIFxuXG4vLyAgVGhlIGVycm9yIFwiVW5oYW5kbGVkIFJ1bnRpbWUgRXJyb3I6IFR5cGVFcnJvcjogQ2Fubm90IHJlYWQgcHJvcGVydGllcyBvZiBcbi8vICAgICB1bmRlZmluZWQgKHJlYWRpbmcgJ21hcCcpXCIgb2NjdXJzIGJlY2F1c2UgdGhlIHByb2R1Y3RzIHByb3AgaXMgbm90IGJlaW5nIHBhc3NlZCBcbi8vICAgICBjb3JyZWN0bHkgdG8gdGhlIFByb2R1Y3RGZWVkIGNvbXBvbmVudCB3aGVuIGl0IGlzIGJlaW5nIHVzZWQuXG5cbi8vICBUaGUgZXJyb3Igc3VnZ2VzdHMgdGhhdCB0aGUgcHJvZHVjdHMgcHJvcCBpcyB1bmRlZmluZWQsIG1lYW5pbmcgdGhhdCBpdCBpcyBub3QgcHJvdmlkZWRcbi8vICBvciBpcyBub3QgeWV0IGF2YWlsYWJsZSB3aGVuIHRoZSBQcm9kdWN0RmVlZCBjb21wb25lbnQgdHJpZXMgdG8gYWNjZXNzIGl0IHVzaW5nIHRoZSBtYXAgbWV0aG9kLlxuXG4vLyAgVG8gcmVzb2x2ZSB0aGlzIGVycm9yLCB5b3UgbmVlZCB0byBlbnN1cmUgdGhhdCB0aGUgcHJvZHVjdHMgcHJvcCBpcyBwYXNzZWQgY29ycmVjdGx5XG4vLyAgdG8gdGhlIFByb2R1Y3RGZWVkIGNvbXBvbmVudCB3aGVuIGl0IGlzIHVzZWQgaW4gdGhlIGluZGV4LmpzIGZpbGUuIFlvdSBjYW4gZG8gdGhpcyBieSBcbi8vICBtYWtpbmcgc3VyZSB0aGF0IHRoZSBwcm9kdWN0cyBwcm9wIGlzIGF2YWlsYWJsZSBhbmQgY29udGFpbnMgdmFsaWQgZGF0YSBiZWZvcmUgcmVuZGVyaW5nIFxuLy8gIHRoZSBQcm9kdWN0RmVlZCBjb21wb25lbnQuXG4gICAgICBcbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RGZWVkXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ProductFeed.js\n");

/***/ })

});
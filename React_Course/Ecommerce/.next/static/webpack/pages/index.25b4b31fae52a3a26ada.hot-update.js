/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Product.js":
/*!***********************************!*\
  !*** ./src/components/Product.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-currency-formatter */ \"./node_modules/react-currency-formatter/dist/react-currency-formatter.umd.js\");\n/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_currency_formatter__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/neerajsharma/Neeraj_Learning/React/React_Course/Ecommerce/src/components/Product.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nvar MAX_RATING = 5;\nvar MIN_RATING = 1;\n\nfunction Product(_ref) {\n  _s();\n\n  var _this = this;\n\n  var id = _ref.id,\n      title = _ref.title,\n      price = _ref.price,\n      description = _ref.description,\n      category = _ref.category,\n      image = _ref.image;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING),\n      rating = _useState[0];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Math.random() < 0.5),\n      hasPrime = _useState2[0];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"relative flex flex-col m-5 bg-white z-30 p-10\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      className: \"absolute top -2\",\n      children: category\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n      src: image,\n      height: 200,\n      width: 200,\n      objectFit: \"contains\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n      children: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"flex\",\n      children: Array(rating).fill().map(function (_, i) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__.StarIcon, {\n          className: \"h-5\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_currency_formatter__WEBPACK_IMPORTED_MODULE_3___default()), {\n        quantity: price * 64,\n        currency: \"INR\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, this), hasPrime && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        src: \"./prime.png\",\n        alt: \"\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 13\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"Free Next-day Delivery \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      children: \"Add to Basket\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Product, \"iAFI4jNUmIsuo72nUPAkXMwMyHY=\");\n\n_c = Product;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Product);\n\nvar _c;\n\n$RefreshReg$(_c, \"Product\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdC5qcz9iZTI2Il0sIm5hbWVzIjpbIk1BWF9SQVRJTkciLCJNSU5fUkFUSU5HIiwiUHJvZHVjdCIsImlkIiwidGl0bGUiLCJwcmljZSIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcnkiLCJpbWFnZSIsInVzZVN0YXRlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicmF0aW5nIiwiaGFzUHJpbWUiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJfIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsVUFBVSxHQUFFLENBQWxCO0FBQ0EsSUFBTUMsVUFBVSxHQUFFLENBQWxCOztBQUVBLFNBQVNDLE9BQVQsT0FBOEQ7QUFBQTs7QUFBQTs7QUFBQSxNQUE1Q0MsRUFBNEMsUUFBNUNBLEVBQTRDO0FBQUEsTUFBekNDLEtBQXlDLFFBQXpDQSxLQUF5QztBQUFBLE1BQW5DQyxLQUFtQyxRQUFuQ0EsS0FBbUM7QUFBQSxNQUE3QkMsV0FBNkIsUUFBN0JBLFdBQTZCO0FBQUEsTUFBakJDLFFBQWlCLFFBQWpCQSxRQUFpQjtBQUFBLE1BQVJDLEtBQVEsUUFBUkEsS0FBUTs7QUFBQSxrQkFDNUNDLCtDQUFRLENBQ2xCQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLE1BQWlCWixVQUFVLEdBQUdDLFVBQWIsR0FBMEIsQ0FBM0MsQ0FBWCxJQUE0REEsVUFEMUMsQ0FEb0M7QUFBQSxNQUNwRFksTUFEb0Q7O0FBQUEsbUJBS3hDSiwrQ0FBUSxDQUFDQyxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsR0FBakIsQ0FMZ0M7QUFBQSxNQUtuREUsUUFMbUQ7O0FBTTVELHNCQUNFO0FBQUssYUFBUyxFQUFDLCtDQUFmO0FBQUEsNEJBQ0U7QUFBRyxlQUFTLEVBQUMsaUJBQWI7QUFBQSxnQkFBZ0NQO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLDhEQUFDLG1EQUFEO0FBQU8sU0FBRyxFQUFFQyxLQUFaO0FBQW1CLFlBQU0sRUFBRSxHQUEzQjtBQUFnQyxXQUFLLEVBQUUsR0FBdkM7QUFBNEMsZUFBUyxFQUFDO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFO0FBQUEsZ0JBQUtKO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLGVBSUU7QUFBSyxlQUFTLEVBQUMsTUFBZjtBQUFBLGdCQUNHVyxLQUFLLENBQUNGLE1BQUQsQ0FBTCxDQUNBRyxJQURBLEdBRUFDLEdBRkEsQ0FFSSxVQUFDQyxDQUFELEVBQUdDLENBQUg7QUFBQSw0QkFDRCw4REFBQyw0REFBRDtBQUFVLG1CQUFTLEVBQUM7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEQztBQUFBLE9BRko7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsZUFhRTtBQUFBLGdCQUFJYjtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFiRixlQWVFO0FBQUEsNkJBQ00sOERBQUMsaUVBQUQ7QUFBVSxnQkFBUSxFQUFFRCxLQUFLLEdBQUcsRUFBNUI7QUFBaUMsZ0JBQVEsRUFBQztBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRE47QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWZGLEVBbUJHUyxRQUFRLGlCQUNQO0FBQUEsOEJBQ0k7QUFBSyxXQUFHLEVBQUMsYUFBVDtBQUF1QixXQUFHLEVBQUM7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFwQkosZUEwQkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUExQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE4QkQ7O0dBcENRWixPOztLQUFBQSxPO0FBc0NULCtEQUFlQSxPQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQge1N0YXJJY29ufSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9zb2xpZFwiO1xuaW1wb3J0IEN1cnJlbmN5IGZyb20gJ3JlYWN0LWN1cnJlbmN5LWZvcm1hdHRlcic7XG5cblxuY29uc3QgTUFYX1JBVElORyA9NTtcbmNvbnN0IE1JTl9SQVRJTkcgPTE7XG5cbmZ1bmN0aW9uIFByb2R1Y3Qoe2lkLHRpdGxlLHByaWNlLGRlc2NyaXB0aW9uLGNhdGVnb3J5LGltYWdlfSkge1xuICAgIGNvbnN0W3JhdGluZ109dXNlU3RhdGUoXG4gICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChNQVhfUkFUSU5HIC0gTUlOX1JBVElORyArIDEpKSArIE1JTl9SQVRJTkdcbiAgICApO1xuXG4gICAgY29uc3QgW2hhc1ByaW1lXSA9dXNlU3RhdGUoTWF0aC5yYW5kb20oKSA8IDAuNSlcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0ncmVsYXRpdmUgZmxleCBmbGV4LWNvbCBtLTUgYmctd2hpdGUgei0zMCBwLTEwJz5cbiAgICAgIDxwIGNsYXNzTmFtZT0nYWJzb2x1dGUgdG9wIC0yJz57Y2F0ZWdvcnl9PC9wPlxuICAgICAgPEltYWdlIHNyYz17aW1hZ2V9IGhlaWdodD17MjAwfSB3aWR0aD17MjAwfSBvYmplY3RGaXQ9XCJjb250YWluc1wiIC8+XG4gICAgICA8aDQ+e3RpdGxlfTwvaDQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCc+XG4gICAgICAgIHtBcnJheShyYXRpbmcpXG4gICAgICAgIC5maWxsKClcbiAgICAgICAgLm1hcCgoXyxpKSA9PiAoXG4gICAgICAgICAgICA8U3Rhckljb24gY2xhc3NOYW1lPSdoLTUnLz5cbiAgICAgICAgKSl9ICAgICAgICBcbiAgICAgIFxuICAgICAgPC9kaXY+XG4gICAgXG4gICAgICA8cD57ZGVzY3JpcHRpb259PC9wPlxuXG4gICAgICA8ZGl2PlxuICAgICAgICAgICAgPEN1cnJlbmN5IHF1YW50aXR5PXtwcmljZSAqIDY0IH0gY3VycmVuY3k9J0lOUicgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgICB7aGFzUHJpbWUgJiYgKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGltZyBzcmM9XCIuL3ByaW1lLnBuZ1wiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICA8aDE+RnJlZSBOZXh0LWRheSBEZWxpdmVyeSA8L2gxPlxuICAgICAgICA8L2Rpdj4gICAgICAgIFxuICAgICAgKX0gICAgIFxuXG4gICAgICAgIDxidXR0b24+QWRkIHRvIEJhc2tldDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Product.js\n");

/***/ })

});
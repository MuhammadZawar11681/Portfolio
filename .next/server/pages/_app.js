/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./lib/firebase/config.js":
/*!********************************!*\
  !*** ./lib/firebase/config.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst firebaseConfig = {\n    apiKey: \"AIzaSyCLn3LvbZgc8aTRsQT3WhvKZElBUMw4xr4\",\n    authDomain: \"my-portfolio-24262.firebaseapp.com\",\n    projectId: \"my-portfolio-24262\",\n    storageBucket: \"my-portfolio-24262.appspot.com\",\n    messagingSenderId: \"755738656248\",\n    appId: \"1:755738656248:web:7996c0472ba26dad9c2a0d\",\n    measurementId: \"G-V48K7MP1G3\"\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (firebaseConfig);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZmlyZWJhc2UvY29uZmlnLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxpQkFBaUI7SUFDckJDLFFBQVE7SUFDUkMsWUFBWTtJQUNaQyxXQUFXO0lBQ1hDLGVBQWU7SUFDZkMsbUJBQW1CO0lBQ25CQyxPQUFPO0lBQ1BDLGVBQWU7QUFDakI7QUFFQSxpRUFBZVAsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtcG9ydGZvbGlvLy4vbGliL2ZpcmViYXNlL2NvbmZpZy5qcz81ZmEwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICBhcGlLZXk6IFwiQUl6YVN5Q0xuM0x2YlpnYzhhVFJzUVQzV2h2S1pFbEJVTXc0eHI0XCIsXG4gIGF1dGhEb21haW46IFwibXktcG9ydGZvbGlvLTI0MjYyLmZpcmViYXNlYXBwLmNvbVwiLFxuICBwcm9qZWN0SWQ6IFwibXktcG9ydGZvbGlvLTI0MjYyXCIsXG4gIHN0b3JhZ2VCdWNrZXQ6IFwibXktcG9ydGZvbGlvLTI0MjYyLmFwcHNwb3QuY29tXCIsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjc1NTczODY1NjI0OFwiLFxuICBhcHBJZDogXCIxOjc1NTczODY1NjI0ODp3ZWI6Nzk5NmMwNDcyYmEyNmRhZDljMmEwZFwiLFxuICBtZWFzdXJlbWVudElkOiBcIkctVjQ4SzdNUDFHM1wiLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZmlyZWJhc2VDb25maWc7XG4iXSwibmFtZXMiOlsiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/firebase/config.js\n");

/***/ }),

/***/ "./lib/firebase/index.js":
/*!*******************************!*\
  !*** ./lib/firebase/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   analytics: () => (/* binding */ analytics),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/analytics */ \"firebase/analytics\");\n/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_analytics__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ \"./lib/firebase/config.js\");\n\n\n\nif (!(firebase_app__WEBPACK_IMPORTED_MODULE_1___default().apps).length) {\n    firebase_app__WEBPACK_IMPORTED_MODULE_1___default().initializeApp(_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n}\nconst { analytics } = (firebase_app__WEBPACK_IMPORTED_MODULE_1___default());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((firebase_app__WEBPACK_IMPORTED_MODULE_1___default()));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZmlyZWJhc2UvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE0QjtBQUNRO0FBQ0U7QUFFdEMsSUFBSSxDQUFDQSwwREFBYSxDQUFDRyxNQUFNLEVBQUU7SUFDekJILGlFQUFzQixDQUFDQywrQ0FBY0E7QUFDdkM7QUFFTyxNQUFNLEVBQUVJLFNBQVMsRUFBRSxHQUFHTCxxREFBUUEsQ0FBQztBQUV0QyxpRUFBZUEscURBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXBvcnRmb2xpby8uL2xpYi9maXJlYmFzZS9pbmRleC5qcz9jZTBhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnZmlyZWJhc2UvYW5hbHl0aWNzJztcbmltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9hcHAnO1xuaW1wb3J0IGZpcmViYXNlQ29uZmlnIGZyb20gJy4vY29uZmlnJztcblxuaWYgKCFmaXJlYmFzZS5hcHBzLmxlbmd0aCkge1xuICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcbn1cblxuZXhwb3J0IGNvbnN0IHsgYW5hbHl0aWNzIH0gPSBmaXJlYmFzZTtcblxuZXhwb3J0IGRlZmF1bHQgZmlyZWJhc2U7Il0sIm5hbWVzIjpbImZpcmViYXNlIiwiZmlyZWJhc2VDb25maWciLCJhcHBzIiwibGVuZ3RoIiwiaW5pdGlhbGl6ZUFwcCIsImFuYWx5dGljcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/firebase/index.js\n");

/***/ }),

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/firebase */ \"./lib/firebase/index.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst MyApp = ({ Component, pageProps })=>{\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (false) {}\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"D:\\\\Bytewise Fellowship Batch 03\\\\Tasks\\\\Task 13 Portfolio\\\\Portfolio-Next-JS-Tailwindcss-main\\\\Portfolio-Next-JS-Tailwindcss-main\\\\pages\\\\_app.jsx\",\n        lineNumber: 12,\n        columnNumber: 10\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBa0M7QUFDVTtBQUNiO0FBRS9CLE1BQU1FLFFBQVEsQ0FBQyxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNyQ0osZ0RBQVNBLENBQUM7UUFDUixJQUFJSyxLQUF5QixFQUFjLEVBRTFDO0lBQ0gsR0FBRyxFQUFFO0lBRUwscUJBQU8sOERBQUNGO1FBQVcsR0FBR0MsU0FBUzs7Ozs7O0FBQ2pDO0FBRUEsaUVBQWVGLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXBvcnRmb2xpby8uL3BhZ2VzL19hcHAuanN4PzRjYjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgYW5hbHl0aWNzIH0gZnJvbSAnLi4vbGliL2ZpcmViYXNlJztcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcblxuY29uc3QgTXlBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGFuYWx5dGljcygpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHJldHVybiA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwiYW5hbHl0aWNzIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.jsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "firebase/analytics":
/*!*************************************!*\
  !*** external "firebase/analytics" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("firebase/analytics");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("firebase/app");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.jsx"));
module.exports = __webpack_exports__;

})();
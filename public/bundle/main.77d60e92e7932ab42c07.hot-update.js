"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatecss_modules"]("main",{

/***/ "./src/components/card/Video.js":
/*!**************************************!*\
  !*** ./src/components/card/Video.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var hyperscript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hyperscript */ \"./node_modules/hyperscript/index.js\");\n/* harmony import */ var hyperscript__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hyperscript__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var hyperscript_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hyperscript-helpers */ \"./node_modules/hyperscript-helpers/dist/index.js\");\n/* harmony import */ var hyperscript_helpers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hyperscript_helpers__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/components/card/style.css\");\n/* harmony import */ var _assets_bob_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/bob.jpeg */ \"./src/assets/bob.jpeg\");\n/* harmony import */ var _assets_bob2_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/bob2.jpg */ \"./src/assets/bob2.jpg\");\n/* harmony import */ var _assets_like_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/like.png */ \"./src/assets/like.png\");\n/* harmony import */ var _assets_dislike_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/dislike.png */ \"./src/assets/dislike.png\");\n/* harmony import */ var _assets_message_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/message.png */ \"./src/assets/message.png\");\n\n\n\n\n\n\n\n\n\nvar _helper = hyperscript_helpers__WEBPACK_IMPORTED_MODULE_1___default()((hyperscript__WEBPACK_IMPORTED_MODULE_0___default())),\n    section = _helper.section,\n    img = _helper.img,\n    h3 = _helper.h3,\n    p = _helper.p,\n    div = _helper.div;\n\nvar bob1 = img({\n  src: _assets_bob_jpeg__WEBPACK_IMPORTED_MODULE_3__,\n  width: 300,\n  height: 150\n});\nvar comment = img({\n  src: _assets_message_png__WEBPACK_IMPORTED_MODULE_7__\n});\nvar like = img({\n  src: _assets_like_png__WEBPACK_IMPORTED_MODULE_5__\n});\nvar dislike = img({\n  src: _assets_dislike_png__WEBPACK_IMPORTED_MODULE_6__\n});\nvar name = h3(\"Luiza Maria\");\nvar avatar = img({\n  src: _assets_bob2_jpg__WEBPACK_IMPORTED_MODULE_4__,\n  className: _style_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].cardAvatar\n});\nvar wrapIcons = div({\n  className: _style_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].containerIcons\n}, [like, dislike, comment]);\nvar containerProfile = div({\n  className: _style_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].containerProfileFooter\n}, [avatar, name]);\nvar topFooter = div({\n  className: _style_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].headerFooter\n}, [containerProfile, wrapIcons]);\nvar description = p(\"Eu gostei muito dessa foto,eu dei like, aonde consigo dar mais likes?Eu gostei muito dessa foto,eu dei like, aonde consigo dar mais likes?Eu gostei muito dessa foto,eu dei like, aonde consigo dar mais likes?\");\nvar footer = div({\n  className: _style_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].cardFooter\n}, [topFooter, description]); //card e uma classe global\n//vantagem que consigo reaproveitar o css\n//se olhar no inspetor estou com essa classe com nomes normais\n\nvar Video = section({\n  className: _style_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].card\n}, [bob1, footer]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Video);\n\n//# sourceURL=webpack://css-modules/./src/components/card/Video.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d8f1da9eff69340d327d")
/******/ })();
/******/ 
/******/ }
);
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll.js */ \"./src/modules/scroll.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_numDown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/numDown */ \"./src/modules/numDown.js\");\n/* harmony import */ var _modules_fullListModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/fullListModal */ \"./src/modules/fullListModal.js\");\n/* harmony import */ var _modules_accordeon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/accordeon */ \"./src/modules/accordeon.js\");\n/* harmony import */ var _modules_success__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/success */ \"./src/modules/success.js\");\n/* harmony import */ var _modules_validation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/validation */ \"./src/modules/validation.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_scroll_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_numDown__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_fullListModal__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n;(0,_modules_accordeon__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n;(0,_modules_success__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\r\n;(0,_modules_validation__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()\n\n//# sourceURL=webpack://js-insane/./src/index.js?");

/***/ }),

/***/ "./src/modules/accordeon.js":
/*!**********************************!*\
  !*** ./src/modules/accordeon.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst accordeon = () => {\r\n  const accordionElem = document.querySelector('.accordion')\r\n\tconst titleBlockElem = document.querySelectorAll('.title_block')\r\n\r\n\tconst showAccordion = elem => {\r\n\t\telem.classList.toggle('msg-active')\r\n\t}\r\n\r\n\tconst noShowAccordion = () => {\r\n\t\ttitleBlockElem.forEach(item => {\r\n\t\t\titem.classList.remove('msg-active')\r\n\t\t})\r\n\t}\r\n\r\n\taccordionElem.addEventListener('click', event => {\r\n\t\tconst target = event.target\r\n\t\tif (target.matches('.title_block')) {\r\n\t\t\tnoShowAccordion()\r\n\t\t\tshowAccordion(target)\r\n\t\t}\r\n\t})\r\n  }\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordeon);\n\n//# sourceURL=webpack://js-insane/./src/modules/accordeon.js?");

/***/ }),

/***/ "./src/modules/fullListModal.js":
/*!**************************************!*\
  !*** ./src/modules/fullListModal.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst fullListModal = () => {\r\n    const modal = document.querySelector('.popup-repair-types')\r\n    const menuModal = document.querySelector('.popup-dialog-menu')\r\n\r\n    document.addEventListener('click', (e) => {\r\n        if (e.target.closest('.no-overflow')) {\r\n            modal.style.visibility = 'visible'\r\n            menuModal.style.marginRight = 0\r\n        }\r\n        if (e.target.closest('.link-list-repair')) {\r\n            modal.style.visibility = 'visible'\r\n        }\r\n    })\r\n\r\n    document.addEventListener('click', (e) => {\r\n        if (e.target.closest('.close') || e.target.classList.contains('popup-repair-types')) {\r\n            modal.style.visibility = 'hidden'\r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fullListModal);\n\n//# sourceURL=webpack://js-insane/./src/modules/fullListModal.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n    let menu = document.querySelector('.menu')\r\n    let menuModal = document.querySelector('.popup-dialog-menu')\r\n\r\n    menu.addEventListener('click', () => {\r\n        menuModal.style.marginRight = 645 + 'px'\r\n    })\r\n    document.addEventListener('click', (e) => {\r\n        if (e.target.closest('.close-menu') || e.target.classList.contains('.popup-menu > .row')){\r\n            menuModal.style.marginRight = 0\r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu); \n\n//# sourceURL=webpack://js-insane/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/numDown.js":
/*!********************************!*\
  !*** ./src/modules/numDown.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst numDown = () => {\r\n    const arrowDown = document.querySelector('.header-contacts__arrow')\r\n    const secPhone = document.querySelector('.header-contacts__phone-number-accord a')\r\n    let count = 0\r\n    \r\n    arrowDown.addEventListener('click', () => {\r\n        if (count == 0) {\r\n            count = 1\r\n            secPhone.style.opacity = 1\r\n            secPhone.style.marginTop = 20 + 'px'\r\n            arrowDown.style.transform = `rotate(180deg)`\r\n        } else if (count == 1) {\r\n            count = 0\r\n            secPhone.style.opacity = 0\r\n            secPhone.style.marginTop = 0\r\n            arrowDown.style.transform = `rotate(0deg)`\r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (numDown);\n\n//# sourceURL=webpack://js-insane/./src/modules/numDown.js?");

/***/ }),

/***/ "./src/modules/scroll.js":
/*!*******************************!*\
  !*** ./src/modules/scroll.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scroll = () => {\r\n    \r\n    const smoothLinks = document.querySelectorAll('a[href^=\"#\"]')\r\n    \r\n    for (let smoothLink of smoothLinks) {\r\n    \r\n        smoothLink.addEventListener('click', function (e) {\r\n        e.preventDefault();\r\n        const id = smoothLink.getAttribute('href')\r\n\r\n        document.querySelector(id).scrollIntoView({\r\n            behavior: 'smooth',\r\n            block: 'start'\r\n        })\r\n    })\r\n}\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\n\n//# sourceURL=webpack://js-insane/./src/modules/scroll.js?");

/***/ }),

/***/ "./src/modules/success.js":
/*!********************************!*\
  !*** ./src/modules/success.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst success = () => {\r\n    const itemActive = document.querySelectorAll('.formula-item')\r\n\r\n    itemActive.forEach(function (item) {\r\n        item.addEventListener('mouseover', function() {\r\n            this.classList.add('active-item')\r\n        })\r\n        item.addEventListener(\"mouseout\",function() {\r\n            this.classList.remove('active-item')\r\n        })\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (success);\n\n//# sourceURL=webpack://js-insane/./src/modules/success.js?");

/***/ }),

/***/ "./src/modules/validation.js":
/*!***********************************!*\
  !*** ./src/modules/validation.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validation = () => {\r\n    const inputItems = document.querySelectorAll('input[name=\"name\"]')\r\n    inputItems.forEach(input => {\r\n        input.addEventListener('input', event => {\r\n            const target = event.target\r\n            target.value = target.value.replace(/[^а-яё\\s]+/gi, '')\r\n        })\r\n    })\r\n\r\n    window.addEventListener(\"DOMContentLoaded\", function() {\r\n        [].forEach.call( document.querySelectorAll('input[name=phone]'), function(input) {\r\n        var keyCode;\r\n        function mask(event) {\r\n            event.keyCode && (keyCode = event.keyCode);\r\n            var pos = this.selectionStart;\r\n            if (pos < 3) event.preventDefault()\r\n            var matrix = \"+7 (___)-___-__-__\",\r\n                i = 0,\r\n                def = matrix.replace(/\\D/g, \"\"),\r\n                val = this.value.replace(/\\D/g, \"\"),\r\n                new_value = matrix.replace(/[_\\d]/g, function(a) {\r\n                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a\r\n                });\r\n            i = new_value.indexOf(\"_\")\r\n            if (i != -1) {\r\n                i < 5 && (i = 3);\r\n                new_value = new_value.slice(0, i)\r\n            }\r\n            var reg = matrix.substr(0, this.value.length).replace(/_+/g,\r\n                function(a) {\r\n                    return \"\\\\d{1,\" + a.length + \"}\"\r\n                }).replace(/[+()]/g, \"\\\\$&\")\r\n            reg = new RegExp(\"^\" + reg + \"$\")\r\n            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value\r\n            if (event.type == \"blur\" && this.value.length < 5)  this.value = \"\"\r\n        }\r\n    \r\n        input.addEventListener(\"input\", mask, false)\r\n        input.addEventListener(\"focus\", mask, false)\r\n        input.addEventListener(\"blur\", mask, false)\r\n        input.addEventListener(\"keydown\", mask, false)\r\n    \r\n      })\r\n    })\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validation); \n\n//# sourceURL=webpack://js-insane/./src/modules/validation.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll.js */ \"./src/modules/scroll.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_numDown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/numDown */ \"./src/modules/numDown.js\");\n/* harmony import */ var _modules_fullListModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/fullListModal */ \"./src/modules/fullListModal.js\");\n/* harmony import */ var _modules_sliderRepair__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/sliderRepair */ \"./src/modules/sliderRepair.js\");\n/* harmony import */ var _modules_accordeon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/accordeon */ \"./src/modules/accordeon.js\");\n/* harmony import */ var _modules_success__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/success */ \"./src/modules/success.js\");\n/* harmony import */ var _modules_validation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/validation */ \"./src/modules/validation.js\");\n/* harmony import */ var _modules_reviewsSlider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/reviewsSlider */ \"./src/modules/reviewsSlider.js\");\n/* harmony import */ var _modules_transparensy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/transparensy */ \"./src/modules/transparensy.js\");\n/* harmony import */ var _modules_consultation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/consultation */ \"./src/modules/consultation.js\");\n/* harmony import */ var _modules_privacy__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/privacy */ \"./src/modules/privacy.js\");\n/* harmony import */ var _modules_popupThanks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/popupThanks */ \"./src/modules/popupThanks.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_scroll_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_numDown__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_fullListModal__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n;(0,_modules_sliderRepair__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n;(0,_modules_accordeon__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\r\n;(0,_modules_success__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()\r\n;(0,_modules_validation__WEBPACK_IMPORTED_MODULE_7__[\"default\"])()\r\n;(0,_modules_reviewsSlider__WEBPACK_IMPORTED_MODULE_8__[\"default\"])()\r\n;(0,_modules_transparensy__WEBPACK_IMPORTED_MODULE_9__[\"default\"])()\r\n;(0,_modules_consultation__WEBPACK_IMPORTED_MODULE_10__[\"default\"])()\r\n;(0,_modules_privacy__WEBPACK_IMPORTED_MODULE_11__[\"default\"])()\r\n;(0,_modules_popupThanks__WEBPACK_IMPORTED_MODULE_12__[\"default\"])()\r\n;(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_13__[\"default\"])()\n\n//# sourceURL=webpack://js-insane/./src/index.js?");

/***/ }),

/***/ "./src/modules/accordeon.js":
/*!**********************************!*\
  !*** ./src/modules/accordeon.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst accordeon = () => {\r\n  const accordionElem = document.querySelector('.accordion')\r\n\tconst titleBlockElem = document.querySelectorAll('.title_block')\r\n\r\n\tconst showAccordion = elem => {\r\n\t\telem.classList.toggle('msg-active')\r\n\t}\r\n\r\n\tconst noShowAccordion = () => {\r\n\t\ttitleBlockElem.forEach(item => {\r\n\t\t\titem.classList.remove('msg-active')\r\n\t\t})\r\n\t}\r\n\r\n\taccordionElem.addEventListener('click', event => {\r\n\t\tconst target = event.target\r\n\t\tif (target.matches('.title_block')) {\r\n\t\t\tnoShowAccordion()\r\n\t\t\tshowAccordion(target)\r\n\t\t}\r\n\t})\r\n  }\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordeon);\n\n//# sourceURL=webpack://js-insane/./src/modules/accordeon.js?");

/***/ }),

/***/ "./src/modules/consultation.js":
/*!*************************************!*\
  !*** ./src/modules/consultation.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst consultation = () => {\r\n    const popupConsultation = document.querySelector('.popup-consultation');\r\n  \r\n    document.body.addEventListener('click', (event) => {\r\n      let target = event.target;\r\n      if (target.closest('.button_wide')) {\r\n        popupConsultation.style.visibility = 'visible';\r\n      }\r\n  \r\n    });\r\n    popupConsultation.addEventListener('click', (event) => {\r\n      let target = event.target;\r\n      if (target.closest('.close-consultation') || !target.closest('.feedback-wrap')) {\r\n        popupConsultation.style.visibility = '';\r\n      }\r\n    });\r\n  };\r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (consultation);\n\n//# sourceURL=webpack://js-insane/./src/modules/consultation.js?");

/***/ }),

/***/ "./src/modules/fullListModal.js":
/*!**************************************!*\
  !*** ./src/modules/fullListModal.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst fullListModal = () => {\r\n    const modal = document.querySelector('.popup-repair-types')\r\n    const menuModal = document.querySelector('.popup-dialog-menu')\r\n\r\n    document.addEventListener('click', (e) => {\r\n        if (e.target.closest('.no-overflow')) {\r\n            modal.style.visibility = 'visible'\r\n            menuModal.style.marginRight = 0\r\n        }\r\n        if (e.target.closest('.link-list-repair')) {\r\n            modal.style.visibility = 'visible'\r\n        }\r\n    })\r\n    \r\n    document.addEventListener('click', (e) => {\r\n        if (e.target.closest('.close') || e.target.classList.contains('popup-repair-types')) {\r\n            modal.style.visibility = 'hidden'\r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fullListModal);\n\n//# sourceURL=webpack://js-insane/./src/modules/fullListModal.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n    const menuOpen = document.querySelector('.menu')\r\n    const menuModal = document.querySelector('.popup-dialog-menu')\r\n\r\n    menuOpen.addEventListener('click', () => {\r\n        menuModal.style.marginRight = 645 + 'px'\r\n    })\r\n\r\n    document.addEventListener('click', (e) => {\r\n        if (e.target.closest('.close-menu')) {\r\n            menuModal.style.marginRight = 0\r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu); \n\n//# sourceURL=webpack://js-insane/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/numDown.js":
/*!********************************!*\
  !*** ./src/modules/numDown.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst numDown = () => {\r\n    const arrowDown = document.querySelector('.header-contacts__arrow')\r\n    const secPhone = document.querySelector('.header-contacts__phone-number-accord a')\r\n    let count = 0\r\n    \r\n    arrowDown.addEventListener('click', () => {\r\n        if (count == 0) {\r\n            count = 1\r\n            secPhone.style.opacity = 1\r\n            secPhone.style.marginTop = 20 + 'px'\r\n            arrowDown.style.transform = `rotate(180deg)`\r\n        } else if (count == 1) {\r\n            count = 0\r\n            secPhone.style.opacity = 0\r\n            secPhone.style.marginTop = 0\r\n            arrowDown.style.transform = `rotate(0deg)`\r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (numDown);\n\n//# sourceURL=webpack://js-insane/./src/modules/numDown.js?");

/***/ }),

/***/ "./src/modules/popupThanks.js":
/*!************************************!*\
  !*** ./src/modules/popupThanks.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst popupThank = () => {\r\n\tconst popupThank = document.querySelector('.popup-thank')\r\n\r\n\tpopupThank.style.visibility = 'visible'\r\n\tsetTimeout(() => {\r\n\t\tpopupThank.style.visibility = ''\r\n\t}, 3000);\r\n\r\n\tdocument.body.addEventListener('click', event => {\r\n\t\tif (event.target.closest('.close.close-thank') || !event.target.closest('.feedback-wrap')) {\r\n\t\t\tpopupThank.style.visibility = ''\r\n\t\t}\r\n\t})\r\n\r\n\tdocument.body.addEventListener('keydown', event => {\r\n\t\tif (event.key === 'Escape') {\r\n\t\t\tpopupThank.style.visibility = ''\r\n\t\t}\r\n\t})\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popupThank);\n\n//# sourceURL=webpack://js-insane/./src/modules/popupThanks.js?");

/***/ }),

/***/ "./src/modules/privacy.js":
/*!********************************!*\
  !*** ./src/modules/privacy.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst privacy = () => {\r\n    const linkPrivacy = document.querySelectorAll('.link-privacy')\r\n    const popupPrivacy = document.querySelector('.popup.popup-privacy')\r\n\r\n    const openPrivacy = () =>{\r\n    popupPrivacy.style.visibility = 'visible'\r\n    }\r\n    const closePrivacy = () =>{\r\n    popupPrivacy.style.visibility = 'hidden'\r\n    }\r\n\r\n    linkPrivacy.forEach(e => {\r\n    e.addEventListener('click', openPrivacy)\r\n    });\r\n\r\n    popupPrivacy.addEventListener('click', (e)=>{\r\n    if (e.target.closest('.close.mobile-hide') || !e.target.closest('.popup-dialog.popup-dialog-privacy')) {\r\n        closePrivacy()\r\n    }\r\n    })\r\n\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (privacy);\n\n//# sourceURL=webpack://js-insane/./src/modules/privacy.js?");

/***/ }),

/***/ "./src/modules/reviewsSlider.js":
/*!**************************************!*\
  !*** ./src/modules/reviewsSlider.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst reviewsSlider = () => {\r\n\r\n    const reviewsSliderSlide = document.querySelectorAll('.reviews-slider__slide')\r\n    let slideIndex = 0\r\n  \r\n    document.body.addEventListener('click', (event) => {\r\n      let target = event.target\r\n      if (target.closest('#reviews-arrow_right')) {\r\n        slideIndex++\r\n      }\r\n      if (target.closest('#reviews-arrow_left')) {\r\n        slideIndex--\r\n      }\r\n      if (slideIndex < 0) {\r\n        slideIndex = (reviewsSliderSlide.length - 1)\r\n      }\r\n      if (slideIndex > (reviewsSliderSlide.length - 1) ) {\r\n        slideIndex = 0\r\n      }\r\n  \r\n      reviewsSliderSlide.forEach((item, index) => {\r\n        if (index === slideIndex) {\r\n          item.style.display = ''\r\n        } else {\r\n          item.style.display = 'none'\r\n        }\r\n      })\r\n    })\r\n\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reviewsSlider);\n\n//# sourceURL=webpack://js-insane/./src/modules/reviewsSlider.js?");

/***/ }),

/***/ "./src/modules/scroll.js":
/*!*******************************!*\
  !*** ./src/modules/scroll.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scroll = () => {\r\n    \r\n    const smoothLinks = document.querySelectorAll('a[href^=\"#\"]')\r\n    \r\n    for (let smoothLink of smoothLinks) {\r\n    \r\n        smoothLink.addEventListener('click', function (e) {\r\n        e.preventDefault();\r\n        const id = smoothLink.getAttribute('href')\r\n\r\n        document.querySelector(id).scrollIntoView({\r\n            behavior: 'smooth',\r\n            block: 'start'\r\n        })\r\n    })\r\n}\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\n\n//# sourceURL=webpack://js-insane/./src/modules/scroll.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sendForm = ({\r\n    errorMessage,\r\n    successMesage,\r\n    successPopup,\r\n    formsSelector,\r\n    validator,\r\n  }) => {\r\n  \r\n    const forms = [...document.querySelectorAll(formsSelector)]\r\n    const statusMessage = document.createElement('div')\r\n  \r\n    // стилизуем окошко анимации отправки формы\r\n    const setStyle = () => {\r\n      const statusMessageStyle = document.createElement('style')\r\n      statusMessageStyle.textContent = `\r\n    .loading-wrap::parent {\r\n      position: relative;\r\n    }\r\n    .loading-wrap {\r\n      position: absolute;\r\n      top: 50%;\r\n      left: 50%;\r\n      transform: translate(-50%, -50%);\r\n      background: white;\r\n      border-radius: 25%;\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n      width: 250px;\r\n      height: 250px;\r\n      color: black;\r\n      padding: 20px;\r\n      box-shadow: 0 0 50px 1px gray;\r\n    }\r\n    .sk-wave {\r\n      width: 6em;\r\n      height: 4em;\r\n      margin: auto;\r\n      text-align: center;\r\n      font-size: 1em;\r\n    }\r\n    .sk-wave .sk-rect {\r\n      background-color: #ffb015;\r\n      height: 100%;\r\n      width: 0.5em;\r\n      display: inline-block;\r\n      animation: sk-wave-stretch-delay 1.2s infinite ease-in-out;\r\n    }\r\n    .sk-wave .sk-rect-1 {\r\n      animation-delay: -1.2s;\r\n    }\r\n    .sk-wave .sk-rect-2 {\r\n      animation-delay: -1.1s;\r\n    }\r\n    .sk-wave .sk-rect-3 {\r\n      animation-delay: -1s;\r\n    }\r\n    .sk-wave .sk-rect-4 {\r\n      animation-delay: -0.9s;\r\n    }\r\n    .sk-wave .sk-rect-5 {\r\n      animation-delay: -0.8s;\r\n    }\r\n    @keyframes sk-wave-stretch-delay {\r\n      0%,\r\n      40%,\r\n      100% {\r\n        transform: scaleY(0.4);\r\n      }\r\n      20% {\r\n        transform: scaleY(1);\r\n      }\r\n    }\r\n    `\r\n      document.head.append(statusMessageStyle)\r\n    }\r\n  \r\n    // отправка данных на сервер\r\n    const postData = body => fetch('./server.php', {\r\n      method: 'POST',\r\n      headers: {\r\n        'Content-Type': 'application/json;charset=utf-8'\r\n      },\r\n      body: JSON.stringify(body),\r\n    })\r\n  \r\n    const formPostAction = (event, form) => {\r\n      event.preventDefault()\r\n  \r\n      const elementsForm = [...form.elements].filter(item => item.tagName.toLowerCase() !== 'button' && item.type !== 'submit')\r\n      const submitBtn = [...form.elements].filter(currentValue => {\r\n        if (currentValue.type === 'submit' || currentValue.tagName.toLowerCase() === 'button') {\r\n          return true\r\n        }\r\n      })[0]\r\n  \r\n      const formData = new Map();\r\n      elementsForm.forEach(item => {\r\n        if (item.type !== 'checkbox') {\r\n          formData.set(item.name, item.value);\r\n        }\r\n      })\r\n      const body = {};\r\n      formData.forEach((val, key) => {\r\n        body[key] = val\r\n      })\r\n  \r\n      // submitBtn.setAttribute('disabled', '');\r\n      elementsForm.forEach(item => {\r\n        if (item.type === 'text') {\r\n          item.value = ''\r\n        } else if (item.type === 'checkbox') {\r\n          item.checked = false\r\n        }\r\n      })\r\n  \r\n      statusMessage.classList.add('loading-wrap')\r\n      statusMessage.innerHTML = `\r\n        <div class=\"sk-wave\">\r\n          <div class='sk-rect sk-rect-2'></div> \r\n          <div class='sk-rect sk-rect-3'></div> \r\n          <div class='sk-rect sk-rect-4'></div> \r\n          <div class='sk-rect sk-rect-1'></div> \r\n          <div class='sk-rect sk-rect-5'></div>\r\n        </div>\r\n        `\r\n      form.insertAdjacentElement('beforeend', statusMessage)\r\n  \r\n      postData(body).then(request => {\r\n        if (request.status === 200) {\r\n          if (successMesage) {\r\n            statusMessage.textContent = successMesage;\r\n            setTimeout(() => {\r\n              statusMessage.remove()\r\n            }, 3000)\r\n          } else if (successPopup) {\r\n            statusMessage.remove()\r\n            successPopup()\r\n          }\r\n        } else {\r\n          throw new Error(`Exception status ${request.status}`)\r\n        }\r\n      }).catch(error => {\r\n        statusMessage.textContent = errorMessage;\r\n        console.error(error);\r\n      })\r\n    }\r\n  \r\n    // вешаем валидатор и отпарвку на каждую форму\r\n    forms.forEach(form => {\r\n      if (validator) {\r\n        validator(form)\r\n      }\r\n      form.addEventListener('submit', event => {\r\n        formPostAction(event, form)\r\n      })\r\n    })\r\n  \r\n    setStyle()\r\n  }\r\n  \r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://js-insane/./src/modules/sendForm.js?");

/***/ }),

/***/ "./src/modules/sliderRepair.js":
/*!*************************************!*\
  !*** ./src/modules/sliderRepair.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sliderRepair = () => {\r\n    const navList = document.querySelector('.nav-list-repair')\r\n    const repairNavs = document.querySelectorAll('.repair-types-nav__item')\r\n    const slideCount = document.querySelector('.slider-counter-content__current')\r\n    const slideTotal = document.querySelector('.slider-counter-content__total')\r\n    const repairSlides1 = document.querySelector('.types-repair1')\r\n    const repairSlides2 = document.querySelector('.types-repair2')\r\n    const repairSlides3 = document.querySelector('.types-repair3')\r\n    const repairSlides4 = document.querySelector('.types-repair4')\r\n    const repairSlides5 = document.querySelector('.types-repair5')\r\n    let numSlides = repairSlides1\r\n    let count = 1\r\n    let indexSlaid = 0\r\n    slideTotal.textContent = numSlides.querySelectorAll('.repair-types-slider__slide').length\r\n\r\n    repairNavs.forEach((btn, key) => {\r\n        btn.addEventListener('click', (e) => {\r\n            e.preventDefault()\r\n            const elem = navList.querySelector('.active')\r\n            elem.classList.remove('active')\r\n            e.target.classList.add('active')\r\n            slideOff()\r\n            if (key == 0) {numSlides = repairSlides1} else if (key == 1) {numSlides = repairSlides2} else if (key == 2) {numSlides = repairSlides3} else if (key == 3) {numSlides = repairSlides4} else if (key == 4) {numSlides = repairSlides5}\r\n            slideTotal.textContent = numSlides.querySelectorAll('.repair-types-slider__slide').length\r\n            slideOn()\r\n            slideCount.textContent = 1\r\n            count = 1\r\n        })\r\n    })\r\n\r\n    const slideOff = () => {\r\n        numSlides.style.display = 'none'\r\n        numSlides.style.transform = 'translateY(0px)'\r\n    }\r\n\r\n    const slideOn = () => {\r\n        numSlides.style.display = 'block'\r\n    }\r\n\r\n    document.addEventListener('click', (e) => {\r\n        if (e.target.closest('#repair-types-arrow_right')) {\r\n            count++\r\n            indexSlaid += -547\r\n            if (count > slideTotal.textContent) {\r\n                count = 5\r\n                return\r\n            }\r\n            slideCount.textContent = count\r\n            numSlides.style.transform = `translateY(${indexSlaid + 'px'})`\r\n            numSlides.style.display = 'block'\r\n        }\r\n\r\n        if (e.target.closest('#repair-types-arrow_left')) {\r\n            count--\r\n            indexSlaid += 547\r\n            if (count < 1) {\r\n                count = 1\r\n                return\r\n            }\r\n            slideCount.textContent = count\r\n            numSlides.style.transform = `translateY(${indexSlaid + 'px'})`\r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderRepair);\n\n//# sourceURL=webpack://js-insane/./src/modules/sliderRepair.js?");

/***/ }),

/***/ "./src/modules/success.js":
/*!********************************!*\
  !*** ./src/modules/success.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst success = () => {\r\n\r\n  const success = document.getElementById('formula')\r\n   const elem = []\r\n \r\n \r\n \r\n   success.addEventListener('mouseover', (e) =>{\r\n     if (window.innerWidth < 1024) { \r\n      return\r\n     }\r\n     if (e.target.closest('.formula-item__icon')) {\r\n       const item = e.target.closest('.formula-item')\r\n       item.style.zIndex = '1'\r\n \r\n       item.classList.add('active-item')\r\n \r\n       elem[0] = item\r\n \r\n       const successItem = item.querySelector('.formula-item-popup')\r\n \r\n       opensuccess(successItem, item)\r\n     }\r\n   })\r\n \r\n   success.addEventListener('mouseout', (e) =>{\r\n     if (window.innerWidth < 1024) { \r\n      return\r\n     }\r\n \r\n     if (elem[0]) {\r\n \r\n       const item = elem[0]\r\n       item.style.zIndex = 0\r\n       item.classList.remove('active-item')\r\n       const itemIcon = e.target.closest('.formula-item__icon')\r\n \r\n       if (!itemIcon) {\r\n         return\r\n       }\r\n \r\n       const successItem  = itemIcon.querySelector('.formula-item-popup')\r\n       closesuccess(successItem)\r\n     }\r\n   })\r\n \r\n   const opensuccess = (successItem, item) =>{\r\n \r\n     let y = successItem.getBoundingClientRect().y\r\n \r\n     let indent = +item.getBoundingClientRect().height\r\n \r\n     window.addEventListener('scroll', function() {\r\n     });\r\n     if (y < 0) {\r\n \r\n       successItem.style.cssText = `\r\n       bottom: 0px;\r\n       top: ${indent*1.1}px;\r\n       `\r\n       successItem.classList.add('flipTo')\r\n     }\r\n   }\r\n \r\n   const closesuccess = (successItem) =>{\r\n     successItem.style.cssText = `\r\n       bottom: 90px;`\r\n       successItem.classList.remove('flipTo')\r\n   }\r\n \r\n }\r\n \r\n /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (success);\n\n//# sourceURL=webpack://js-insane/./src/modules/success.js?");

/***/ }),

/***/ "./src/modules/transparensy.js":
/*!*************************************!*\
  !*** ./src/modules/transparensy.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst transparency = () => {\r\n    const transparency = document.getElementById('transparency'),\r\n  popupTransparency = document.querySelector('.popup-transparency'),\r\n  transparencyItemImg = document.querySelectorAll('.transparency-item__img'),\r\n  popupTransparencySliderSlide = document.querySelectorAll('.popup-transparency-slider__slide'),\r\n  sliderCounterContentCurrent = popupTransparency.querySelector('.slider-counter-content__current'),\r\n  sliderCounterContentTCotal = popupTransparency.querySelector('.slider-counter-content__total'),\r\n  transparencyItem = transparency.querySelectorAll('.transparency-item'),\r\n  leftArrow = document.getElementById('transparency-arrow_left'),\r\n  rightArrow = document.getElementById('transparency-arrow_right');\r\n  let slideIndex = 0;\r\n  \r\n  const hideTransparencyItem = (a) => {\r\n    for (let i = 0; i < transparencyItem.length; i++) {\r\n      transparencyItem[i].style.display = 'none';\r\n    }\r\n    transparencyItem[a].style.display = '';\r\n  };\r\n\r\n  sliderCounterContentTCotal.textContent = popupTransparencySliderSlide.length;\r\n  transparency.addEventListener('click', (event) => {\r\n    let slideIndex = 0;\r\n    let target = event.target;\r\n    for (let i = 0; i < transparencyItemImg.length; i++) {\r\n      if (target === transparencyItemImg[i]) {\r\n        slideIndex = i;\r\n      }\r\n    }\r\n    \r\n    for (let i = 0; i < popupTransparencySliderSlide.length; i++) {\r\n      if (i === slideIndex) {\r\n        popupTransparencySliderSlide[slideIndex].style.display = '';\r\n      } else {\r\n        popupTransparencySliderSlide[i].style.display = 'none';\r\n      }\r\n    }\r\n\r\n    if (target.closest('.transparency-item__img')) {\r\n      popupTransparency.style.visibility = 'visible';\r\n    }\r\n    sliderCounterContentCurrent.textContent = slideIndex + 1;\r\n    popupTransparency.addEventListener('click', (e) => {\r\n      let target = e.target;\r\n\r\n      if (target.closest('#transparency_right')) {\r\n        slideIndex++;\r\n      }\r\n\r\n      if (target.closest('#transparency_left')) {\r\n        slideIndex--;\r\n      }\r\n      if (slideIndex < 0) {\r\n        slideIndex = (popupTransparencySliderSlide.length - 1);\r\n      }\r\n      if (slideIndex > (popupTransparencySliderSlide.length - 1) ) {\r\n        slideIndex = 0;\r\n      }\r\n      for (let i = 0; i < popupTransparencySliderSlide.length; i++) {\r\n        if (i === slideIndex) {\r\n          popupTransparencySliderSlide[slideIndex].style.display = '';\r\n        } else {\r\n          popupTransparencySliderSlide[i].style.display = 'none';\r\n        }\r\n      }\r\n\r\n      if (target.closest('.close') || !target.closest('#transparency_right') && !target.closest('#transparency_left') && !target.closest('.popup-dialog-transparency')) {\r\n        popupTransparency.style.visibility = '';\r\n      }\r\n      sliderCounterContentCurrent.textContent = slideIndex + 1;\r\n    });\r\n  });\r\n\r\n  window.addEventListener('resize', () => {\r\n\r\n    if (document.documentElement.offsetWidth > 1090) {\r\n      transparencyItem.forEach(item => {\r\n        item.style.display = '';\r\n      });\r\n    } else {\r\n      slideIndex = 0;\r\n      hideTransparencyItem(slideIndex);\r\n    }\r\n  });\r\n\r\n  leftArrow.addEventListener('click', () => {\r\n    slideIndex--;\r\n    if (slideIndex < 0) {\r\n      slideIndex = 0;\r\n    }\r\n    hideTransparencyItem(slideIndex);\r\n  });\r\n  rightArrow.addEventListener('click', () => {\r\n    slideIndex++;\r\n    if (slideIndex > 2) {\r\n      slideIndex = 2;\r\n    }\r\n    hideTransparencyItem(slideIndex);\r\n  });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (transparency);\n\n//# sourceURL=webpack://js-insane/./src/modules/transparensy.js?");

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
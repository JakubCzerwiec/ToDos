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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n    background-color: grey;\\n}\\n\\n.hidden {\\n    display: none;\\n}\\n\\n.singleProject, .projectTasks {\\n    margin: 1em;;\\n    border: 1px solid black;\\n}\\n\\n.taskDone {\\n    text-decoration: line-through;\\n}\\n\\n.green {\\n    background-color: green;\\n}\\n\\n.red {\\n    background-color: red;\\n}\\n\\n.taskDeleteBtn {\\n   transform: translateX(200%);\\n}\\n\\n.show {\\n    transform: translateX(0%);\\n}\\n\\n.greeeeen {\\n    background-color: greenyellow;\\n}\\n\\n.yellllow {\\n    background-color: khaki;\\n}\\n\\n.reed {\\n    background-color: lightcoral;\\n}\\n\\n.opposite {\\n    transform: rotate(180deg);\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todos/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todos/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todos/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todos/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todos/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todos/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todos/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todos/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todos/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/editProject.js":
/*!****************************!*\
  !*** ./src/editProject.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"editProject\": () => (/* binding */ editProject)\n/* harmony export */ });\n/* harmony import */ var _projectInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectInput */ \"./src/projectInput.js\");\n/* harmony import */ var _projectOnScreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectOnScreen */ \"./src/projectOnScreen.js\");\n/* harmony import */ var _listeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listeners */ \"./src/listeners.js\");\n/* harmony import */ var _storageFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storageFunctions */ \"./src/storageFunctions.js\");\n\n\n\n\n\nlet editProject = () => {\n    let projectEditBtnS = document.querySelectorAll('.projectEditBtn');\n  //  const projectsDiv = document.querySelector('.projectsDiv');\n\n    projectEditBtnS.forEach((button, index) => {\n        button.addEventListener('click', () => {\n            // wywo??a inputa a po sabmicie inputa wstrzeli dane z imputa do projektu na tym samym indeksie co guzik\n            let editProjectForm = document.createElement('div');\n            editProjectForm.innerHTML = `\n            <form id=\"editProjectForm\" class=\"editProjectForm\">\n                <label for=\"projectEditTitle\">Title for new Project</label>\n                <input id=\"projectEditTitle\" type=\"text\" placeholder=\"Insert title\" value=\"${_projectInput__WEBPACK_IMPORTED_MODULE_0__.projects[index].title}\">\n\n                <label for=\"projectEditDate\">Date</label>\n                <input id=\"projectEditDate\" type=\"date\" placeholder=\"Insert date\" value=\"${_projectInput__WEBPACK_IMPORTED_MODULE_0__.projects[index].date}\">\n\n                <label for=\"projectEditPriority\">Priority</label>\n                <select name=\"projectEditPriority\" id=\"projectEditPriority\">\n                    <option disabled selected value>Choose priority</option>\n                    <option value=\"low\">Low</option>\n                    <option value=\"medium\">Medium</option>\n                    <option value=\"high\">High</option>\n                </select>\n\n                <label for=\"projectEditDescription\">Title for new Project</label>\n                <input id=\"projectEditDescription\" type=\"text-area\" placeholder=\"Type some description\" value=\"${_projectInput__WEBPACK_IMPORTED_MODULE_0__.projects[index].description}\">\n\n                <button class=\"projectEditSubmitBtn\">Submit edit</button>\n\n            </form>`;\n\n            content.append(editProjectForm);\n\n            editProjectForm.addEventListener('submit', (e) => {\n                e.preventDefault();\n\n                _projectInput__WEBPACK_IMPORTED_MODULE_0__.projects[index] = {\n                    title: projectEditTitle.value,\n                    date: projectEditDate.value,\n                    priority: projectEditPriority.value,\n                    description: projectEditDescription.value,\n                    tasks: _projectInput__WEBPACK_IMPORTED_MODULE_0__.projects[index].tasks,\n                    id: _projectInput__WEBPACK_IMPORTED_MODULE_0__.projects[index].id,\n                 /*   deleteProject: () => {\n                        let indexNum = projects.findIndex(project => {\n                            return project.id == idN\n                        })\n                        projects.splice(indexNum, 1); \n                        render(); \n                    } */\n                    \n                }\n\n                projectForm.reset();\n                console.log(_projectInput__WEBPACK_IMPORTED_MODULE_0__.projects);\n                (0,_storageFunctions__WEBPACK_IMPORTED_MODULE_3__.setData)();\n                (0,_projectOnScreen__WEBPACK_IMPORTED_MODULE_1__.projectsRender)();\n        \n                content.removeChild(editProjectForm);\n            })\n        })\n    })\n}\n\n\n\n//# sourceURL=webpack://todos/./src/editProject.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _projectInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectInput */ \"./src/projectInput.js\");\n/* harmony import */ var _projectOnScreen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectOnScreen */ \"./src/projectOnScreen.js\");\n/* harmony import */ var _storageFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storageFunctions */ \"./src/storageFunctions.js\");\n/* harmony import */ var _taskInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./taskInput */ \"./src/taskInput.js\");\n\n\n\n\n\n\n\n\n\n\nwindow['projects'] = _projectInput__WEBPACK_IMPORTED_MODULE_1__.projects;\n\n //restore ();\n\n (0,_projectOnScreen__WEBPACK_IMPORTED_MODULE_2__.projectsRender)();\n\n(0,_projectInput__WEBPACK_IMPORTED_MODULE_1__.projectInput) ();\n\n\n// Event listener for new Project\nconst newProjectBtn = document.querySelector('.newProjectBtn');\nnewProjectBtn.addEventListener('click', () => {\n    const projectForm = document.getElementById('projectForm');\n    projectForm.classList.toggle('hidden');\n})\n\n\n\n//# sourceURL=webpack://todos/./src/index.js?");

/***/ }),

/***/ "./src/listeners.js":
/*!**************************!*\
  !*** ./src/listeners.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"taskDoneListener\": () => (/* binding */ taskDoneListener),\n/* harmony export */   \"priorityColorChange\": () => (/* binding */ priorityColorChange)\n/* harmony export */ });\n/* harmony import */ var _projectInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectInput */ \"./src/projectInput.js\");\n/* harmony import */ var _projectOnScreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectOnScreen */ \"./src/projectOnScreen.js\");\n/* harmony import */ var _storageFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storageFunctions */ \"./src/storageFunctions.js\");\n\n\n\n\n\nlet taskDoneListener = () => {\n    \n    let taskDoneBtn = document.querySelectorAll('.taskDoneBtn');\n    let taskDeleteBtns = document.querySelectorAll('.taskDeleteBtn');\n  \n    taskDoneBtn.forEach((element, index) => {\n        element.addEventListener('change', () => {\n            taskDoneBtn[index].parentElement.classList.toggle('green');\n            taskDeleteBtns[index].classList.toggle('show');\n\n            let btnId = element.id;\n\n            _projectInput__WEBPACK_IMPORTED_MODULE_0__.projects.forEach(project => {\n                let taskInd = project.tasks.findIndex(0.06);\n                console.log(taskInd)\n            })\n\n    //         projects.forEach(project => {\n    //             let thisTask = project.tasks.filter((task) => {\n    //                  return task.id == btnId;\n    //              })\n\n\n    // // Do splice wstawi?? indexOf tego tasku i zast??pi?? go nowym jako trzeci argument             \n    //             //  project.tasks.splice(0, project.tasks.length);\n    //             //  deleted.forEach(el => {\n    //             //      project.tasks.push(el)\n    //             thisTask[0].status = true;\n    //             console.log(thisTask[0])\n    //          })\n            \n\n                \n            \n        })\n    }) \n\n\n  /*  taskDoneBtn.forEach((element, index) => {\n        element.addEventListener('change', () => {\n            element.parentElement.classList.toggle('green');\n            taskDeleteBtns[index].classList.toggle('red'); \n// Something must change in the object value to be able to save in local storage\n\n        })  \n        setData();  \n\n    }) */\n}\n\n\nlet priorityColorChange = () => {\n    let allProjects = document.querySelectorAll('.singleProject');\n\n    allProjects.forEach((element, index) => {\n        if (_projectInput__WEBPACK_IMPORTED_MODULE_0__.projects[index].priority === 'low') \n            element.classList.add('greeeeen')\n        else if (_projectInput__WEBPACK_IMPORTED_MODULE_0__.projects[index].priority === 'medium')\n            element.classList.add('yellllow')\n        else if (_projectInput__WEBPACK_IMPORTED_MODULE_0__.projects[index].priority === 'high')\n            element.classList.add('reed'); \n            (0,_storageFunctions__WEBPACK_IMPORTED_MODULE_2__.setData)();\n    })\n}\n\n\n\n\n//# sourceURL=webpack://todos/./src/listeners.js?");

/***/ }),

/***/ "./src/projectInput.js":
/*!*****************************!*\
  !*** ./src/projectInput.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectInput\": () => (/* binding */ projectInput),\n/* harmony export */   \"projects\": () => (/* binding */ projects)\n/* harmony export */ });\n/* harmony import */ var _projectOnScreen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectOnScreen */ \"./src/projectOnScreen.js\");\n/* harmony import */ var _listeners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listeners */ \"./src/listeners.js\");\n/* harmony import */ var _storageFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storageFunctions */ \"./src/storageFunctions.js\");\n\n\n\n\n// Examples\nlet projects = [\n        {\n            title: 'One',\n            date: '2021-09-23',\n            priority: 'low',\n            description: 'alle',\n            tasks: [\n                {\n                    title: 'one',\n                    id: 0.09,\n                    status: false,\n                    }, \n                {\n                    title: 'two',\n                    id: 0.06,\n                    status: false,\n                }, \n                {\n                    title: 'three',\n                    id: 0.07,\n                    status: true,\n                }\n            ],\n            id: 0.234\n        },\n        {\n            title: 'Two',\n            date: '2021-05-05',\n            priority: 'medium',\n            description: 'alle',\n            tasks: [\n                {\n                    title: 'one',\n                    id: 0.095,\n                    status: false,\n                    }, \n                {\n                    title: 'two',\n                    id: 0.065,\n                    status: false,\n                }, \n                {\n                    title: 'three',\n                    id: 0.075,\n                    status: false,\n                }\n            ],\n            id: 0.2345\n        }\n    ]; \n\n// Injecting data into projects array\nlet projectInput = () => {\n  \n    const projectForm = document.getElementById('projectForm');\n    const projectTitleInput = document.getElementById('projectInputTitle');\n    const projectInputDate = document.getElementById('projectInputDate');\n    const projectPriority = document.getElementById('projectPriority')\n    const projectInputDescription = document.getElementById('projectInputDescription');\n\n    projectForm.addEventListener('submit', (e) => {\n        (e).preventDefault()\n        let idN = Math.random()\n        let project = {\n            title: projectTitleInput.value,\n            date: projectInputDate.value,\n            priority: projectPriority.value,\n            description: projectInputDescription.value,\n            tasks: [],\n            id: idN,\n         /*   deleteProject: () => {\n                console.log(projects)\n                let indexNum = projects.findIndex(project => {\n                    return project.id == idN\n                })\n                projects.splice(indexNum, 1);\n               // render(); \n            } */\n        }\n        projects.push(project);\n        projectForm.reset();\n        console.log(projects);\n\n        projectForm.classList.toggle('hidden');\n        (0,_listeners__WEBPACK_IMPORTED_MODULE_1__.priorityColorChange)()\n\n        ;(0,_storageFunctions__WEBPACK_IMPORTED_MODULE_2__.setData)();\n        (0,_projectOnScreen__WEBPACK_IMPORTED_MODULE_0__.projectsRender)();\n    })\n\n}\n\n\n\n\n\n\n\n//# sourceURL=webpack://todos/./src/projectInput.js?");

/***/ }),

/***/ "./src/projectOnScreen.js":
/*!********************************!*\
  !*** ./src/projectOnScreen.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectsRender\": () => (/* binding */ projectsRender)\n/* harmony export */ });\n/* harmony import */ var _projectInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectInput */ \"./src/projectInput.js\");\n/* harmony import */ var _taskInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskInput */ \"./src/taskInput.js\");\n/* harmony import */ var _editProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editProject */ \"./src/editProject.js\");\n/* harmony import */ var _listeners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listeners */ \"./src/listeners.js\");\n/* harmony import */ var _storageFunctions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storageFunctions */ \"./src/storageFunctions.js\");\n\n\n\n\n\n\n\n// import {sortByDate} from './sort';\n\n\n\nlet projectsRender = () => {\n   (0,_storageFunctions__WEBPACK_IMPORTED_MODULE_4__.restore)()\n    const projectsDiv = document.querySelector('.projectsDiv');\n    \n    \n    // Listener to delete project\n    let deleteProjectListener = () => {\n        let deleteButtons = document.querySelectorAll('.projectDeleteBtn');\n        deleteButtons.forEach((element) => {\n            element.addEventListener('click', () => {\n                let deleted = _projectInput__WEBPACK_IMPORTED_MODULE_0__.projects.filter((pro) => {\n                    return pro.id != element.id;\n                })\n                \n                _projectInput__WEBPACK_IMPORTED_MODULE_0__.projects.splice(0, _projectInput__WEBPACK_IMPORTED_MODULE_0__.projects.length);\n                \n                    deleted.forEach(el => {\n                        _projectInput__WEBPACK_IMPORTED_MODULE_0__.projects.push(el)\n                    })\n              \n                console.log(_projectInput__WEBPACK_IMPORTED_MODULE_0__.projects);\n                (0,_storageFunctions__WEBPACK_IMPORTED_MODULE_4__.setData)();\n                render();\n                })\n        });\n    }\n\n\n    // Listener to delete task\n   let deleteTaskListener = () => {\n        let taskDeleteBtn = document.querySelectorAll('.taskDeleteBtn');\n        taskDeleteBtn.forEach(element => {\n            element.addEventListener('click', () => {\n                _projectInput__WEBPACK_IMPORTED_MODULE_0__.projects.forEach(project => {\n                   let deleted = project.tasks.filter((task) => {\n                        return task.id != element.id;\n                    })\n                    project.tasks.splice(0, project.tasks.length);\n                    deleted.forEach(el => {\n                        project.tasks.push(el)\n                    })\n                })\n                console.log(_projectInput__WEBPACK_IMPORTED_MODULE_0__.projects);\n                (0,_storageFunctions__WEBPACK_IMPORTED_MODULE_4__.setData)();\n                render(); \n            })\n        })\n\n    } \n\n\n    let sortByDate = () => {\n        const sortDate = document.querySelector('.sortDate');\n    \n        sortDate.addEventListener('click', () => {\n\n            if (sortDate.classList.contains('opposite')) {\n                let sorted = _projectInput__WEBPACK_IMPORTED_MODULE_0__.projects.sort((a, b) => \n                (a.date < b.date) ? 1 : -1)\n                sortDate.classList.toggle('opposite');\n                console.log(sorted)\n        \n                _projectInput__WEBPACK_IMPORTED_MODULE_0__.projects.splice(0, _projectInput__WEBPACK_IMPORTED_MODULE_0__.projects.length, ...sorted);\n            }\n\n            else {\n                let sorted = _projectInput__WEBPACK_IMPORTED_MODULE_0__.projects.sort((a, b) => \n                (a.date > b.date) ? 1 : -1)\n                sortDate.classList.toggle('opposite');\n                console.log(sorted)\n        \n                _projectInput__WEBPACK_IMPORTED_MODULE_0__.projects.splice(0, _projectInput__WEBPACK_IMPORTED_MODULE_0__.projects.length, ...sorted);\n            }\n            (0,_storageFunctions__WEBPACK_IMPORTED_MODULE_4__.setData)()\n          //  render()\n            \n        })\n       // render()\n    } \n\n    \n    // Render everything on screen\n    let render = () => {\n        projectsDiv.innerHTML = '';\n       // restore()\n        if (_projectInput__WEBPACK_IMPORTED_MODULE_0__.projects == []) return\n        else {\n                _projectInput__WEBPACK_IMPORTED_MODULE_0__.projects.forEach((project) => {\n                    \n\n                    let singleProject = document.createElement('div');\n                    singleProject.className = 'singleProject';\n\n                    \n                        let projectDeleteBtn = document.createElement('div');\n                        projectDeleteBtn.innerText = 'X';\n                        projectDeleteBtn.className = 'projectDeleteBtn';\n                        projectDeleteBtn.id = project.id;\n\n                        let projectEditBtn = document.createElement('div');\n                        projectEditBtn.innerText = 'Edit';\n                        projectEditBtn.className = 'projectEditBtn';\n                        projectEditBtn.id = project.id;\n    \n                        let projectTitle = document.createElement('div');\n                        projectTitle.className = 'projectTitle';\n                        projectTitle.innerText = project.title;\n        \n                        let projectDate = document.createElement('div');\n                        projectDate.className = 'projectDate';\n                        projectDate.innerText = project.date;\n\n                        let projectPriority = document.createElement('div');\n                        projectPriority.className = 'projectPriority';\n                        projectPriority.innerHTML = project.priority;\n        \n                        let projectDescription = document.createElement('div');\n                        projectDescription.className = 'projectDescription'\n                        projectDescription.innerText = project.description;\n\n                        let projectTask = document.createElement('div');\n                        projectTask.className = 'projectTasks';\n\n                        let addTaskBtn = document.createElement('div');\n                        addTaskBtn.className = 'addTaskBtn';\n                        addTaskBtn.innerText = '+';\n\n\n                        project.tasks.forEach(task => {\n                            let taskDiv = document.createElement('div');\n                            taskDiv.className = 'taskDiv';\n                            taskDiv.innerText = task.title;\n                            \n                            let taskDeleteBtn = document.createElement('div');\n                            taskDeleteBtn.innerText = 'XX';\n                            taskDeleteBtn.className = 'taskDeleteBtn';\n                            taskDeleteBtn.id = task.id;\n\n                            let taskDoneBtn = document.createElement('input');\n                            taskDoneBtn.type = 'checkbox';\n                            taskDoneBtn.className = 'taskDoneBtn';\n                            taskDoneBtn.id = task.id;\n                            \n                            taskDiv.append(taskDoneBtn, taskDeleteBtn);\n                            \n\n                            projectTask.append(taskDiv);\n                            if (task.status === true) taskDoneBtn.parentElement.classList.add('green');\n\n                        })\n\n\n    \n                    singleProject.append(projectDeleteBtn, projectEditBtn, projectTitle, projectDate, projectPriority, projectDescription, projectTask, addTaskBtn);\n                    projectsDiv.append(singleProject);\n                    (0,_listeners__WEBPACK_IMPORTED_MODULE_3__.priorityColorChange)()\n\n\n                })}\n\n            deleteProjectListener();\n            deleteTaskListener();\n            (0,_editProject__WEBPACK_IMPORTED_MODULE_2__.editProject)();\n            (0,_listeners__WEBPACK_IMPORTED_MODULE_3__.taskDoneListener)();\n            sortByDate();\n            \n\n    }\n\n    \n    render();\n    \n    (0,_taskInput__WEBPACK_IMPORTED_MODULE_1__.tasktInput)();\n\n\n}\n\n\n\n\n//# sourceURL=webpack://todos/./src/projectOnScreen.js?");

/***/ }),

/***/ "./src/storageFunctions.js":
/*!*********************************!*\
  !*** ./src/storageFunctions.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setData\": () => (/* binding */ setData),\n/* harmony export */   \"restore\": () => (/* binding */ restore)\n/* harmony export */ });\n/* harmony import */ var _projectInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectInput */ \"./src/projectInput.js\");\n/* harmony import */ var _projectOnScreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectOnScreen */ \"./src/projectOnScreen.js\");\n\n\n\nlet setData = () => {\n    window.localStorage.setItem(`projects`, JSON.stringify(_projectInput__WEBPACK_IMPORTED_MODULE_0__.projects));\n}\n\n// Add local straoges key!!!!!!!!!!!!!!!!\n\n\n\nlet restore = () => {\n    if (localStorage.length == 0) return\n\n    else \n        {\n            let data = JSON.parse(window.localStorage.getItem(`projects`));\n            _projectInput__WEBPACK_IMPORTED_MODULE_0__.projects.splice(0, _projectInput__WEBPACK_IMPORTED_MODULE_0__.projects.length);\n            data.forEach(el => {\n                _projectInput__WEBPACK_IMPORTED_MODULE_0__.projects.push(el)\n            })\n        }\n\n}\n\n\n\n\n\n\n// export {projects}\n\n//# sourceURL=webpack://todos/./src/storageFunctions.js?");

/***/ }),

/***/ "./src/taskInput.js":
/*!**************************!*\
  !*** ./src/taskInput.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"tasktInput\": () => (/* binding */ tasktInput)\n/* harmony export */ });\n/* harmony import */ var _projectOnScreen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectOnScreen */ \"./src/projectOnScreen.js\");\n/* harmony import */ var _storageFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storageFunctions */ \"./src/storageFunctions.js\");\n\n\n\nlet tasktInput = () => {\n\n    let addTaskBtn = document.querySelectorAll('.addTaskBtn');\n\n    addTaskBtn.forEach((element, index) => {\n        element.addEventListener('click', () => {\n            let projectsDiv = document.querySelector('.projectsDiv');\n            let taskInput = document.createElement('div');\n            taskInput.innerHTML = `      \n                <form id=\"tasksForm\" class=\"form_task\">\n                    <label for=\"taskInputTitle\">Title for new Task</label>\n                    <input id=\"taskInputTitle\" type=\"text\" placeholder=\"Insert title\">\n            \n                    <label for=\"taskInputDate\">Date</label>\n                    <input id=\"taskInputDate\" type=\"date\">\n                    <button class=\"taskSubmitBtn\">Create</button>\n        \n                </form>`;\n        projectsDiv.append(taskInput)\n\n            const taskTitleInput = document.getElementById('taskInputTitle');\n            const taskInputDate = document.getElementById('taskInputDate');\n\n        \n           taskInput.addEventListener('submit', (e) => {\n                \n                let task = {\n                    title: taskTitleInput.value,\n                    date: taskInputDate.value,\n                    status: false,\n        \n                    id: Math.random()\n                }\n                e.preventDefault()\n                projects[index].tasks.push(task);\n                projectsDiv.removeChild(taskInput);\n                console.log(projects)\n                ;(0,_storageFunctions__WEBPACK_IMPORTED_MODULE_1__.setData)();\n                (0,_projectOnScreen__WEBPACK_IMPORTED_MODULE_0__.projectsRender)();\n            }) \n\n        })\n        \n    })\n  \n\n}\n\n\n\n\n//# sourceURL=webpack://todos/./src/taskInput.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
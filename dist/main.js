/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html, body {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nbutton {\n  background: #99ddee;\n  -webkit-border-radius: 15;\n  -moz-border-radius: 15;\n  border-radius: 5px;\n  width: 8rem;\n  color: black;\n  font-size: 16px;\n  padding: 5px 10px 5px 10px; \n  text-decoration: none;\n  margin: 0 0 1rem 0;\n  height: 3rem;\n}\n\ncanvas{\n  border: 1px solid grey;\n  border-radius: 10px;\n}\n\n.controls {\n  width: 900px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.center {\n  width: 10rem;\n}\n\n.top-msg {\n  text-align: center;\n}\n\nselect {\n  width: 3rem;\n  height: 1.5rem;\n  text-align: center;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,yCAAyC;AAC3C;;AAEA;EACE,mBAAmB;EACnB,yBAAyB;EACzB,sBAAsB;EACtB,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,eAAe;EACf,0BAA0B;EAC1B,qBAAqB;EACrB,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,cAAc;EACd,kBAAkB;AACpB","sourcesContent":["html, body {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nbutton {\n  background: #99ddee;\n  -webkit-border-radius: 15;\n  -moz-border-radius: 15;\n  border-radius: 5px;\n  width: 8rem;\n  color: black;\n  font-size: 16px;\n  padding: 5px 10px 5px 10px; \n  text-decoration: none;\n  margin: 0 0 1rem 0;\n  height: 3rem;\n}\n\ncanvas{\n  border: 1px solid grey;\n  border-radius: 10px;\n}\n\n.controls {\n  width: 900px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.center {\n  width: 10rem;\n}\n\n.top-msg {\n  text-align: center;\n}\n\nselect {\n  width: 3rem;\n  height: 1.5rem;\n  text-align: center;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Chain.js":
/*!**********************!*\
  !*** ./src/Chain.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Link */ "./src/Link.js");


class Chain {
  constructor(p, length, dx, dt) {
    this.p = p;
    this.length = length;
    this.linkSize = dx;
    this.links = [];
    this.dt = dt;

    for (let i = 0; i < this.length / this.linkSize; i += 1) {
      this.links.push(new _Link__WEBPACK_IMPORTED_MODULE_0__["default"](
        p,
        i * this.linkSize + this.linkSize / 2,
        dx
      ));
    }
  }

  display(end, dragging) {
    const p = this.p;
    for (let i = 0; i < this.links.length - 1; i += 1) {
      if (i === 0) {
        if (dragging) {
          p.fill(250, 0, 0);
        } else { p.fill(200, 0, 0); }
        p.noStroke();
        p.circle(
          this.links[0].x + this.links[0].linkSize,
          this.links[0].y + p.height / 2,
          this.links[0].linkSize * 3
        );
      } else {
        this.links[i].display();
      }
    }

    if (end === 'fixed') {
      p.fill(0, 0, 240);
    } else if (end === 'free') {
      p.fill(0, 200, 0);
    } else if (end === 'mirror') {
      p.fill(200, 0, 0);
    }

    p.circle(
      this.links[this.links.length - 1].x,
      this.links[this.links.length - 1].y + p.height / 2,
      2 * this.linkSize
    );
  }

  move(end, dragging) {
    const p = this.p;
    for (let i = 1; i < this.links.length - 1; i += 1) {
      this.links[i].fy = ((this.dt / this.linkSize) ** 2)
      * (this.links[i - 1].y - 2 * this.links[i].y + this.links[i + 1].y)
        + 2 * this.links[i].y
        - this.links[i].py;
    }
    if (end === 'free') {
      this.links[this.links.length - 1].fy = -(this.links[this.links.length - 1].y
            - this.links[this.links.length - 2].y)
        + 2 * this.links[this.links.length - 1].y
        - this.links[this.links.length - 1].py;
    } else if (end === 'fixed') {
      this.links[this.links.length - 1].fy = 0;
    } else if (end === 'mirror' && p.mouseIsPressed) {
      this.links[this.links.length - 1].fy = this.links[0].fy;
    } else if (end === 'mirror' && !p.mouseIsPressed) {
      this.links[this.links.length - 1].fy = this.links[this.links.length - 2].y;
      this.links[this.links.length - 1].y = this.links[this.links.length - 1].fy;
    } else if (end === 'antimirror' && p.mouseIsPressed) {
      this.links[this.links.length - 1].fy = -this.links[0].fy;
    } else if (end === 'antimirror' && !p.mouseIsPressed) {
      this.links[this.links.length - 1].fy = this.links[this.links.length - 2].y;
      this.links[this.links.length - 1].y = this.links[this.links.length - 1].fy;
    }

    if (!dragging) {
      this.links[0].fy = this.links[1].y;
      this.links[0].y = this.links[0].fy;
    }
    for (let i = 1; i < this.links.length; i += 1) {
      this.links[i].py = this.links[i].y;
      this.links[i].y = this.links[i].fy;
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Chain);


/***/ }),

/***/ "./src/Link.js":
/*!*********************!*\
  !*** ./src/Link.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Link {
  constructor(p, x, linkSize) {
    this.p = p;
    this.x = x;
    this.y = 0;
    this.py = 0;
    this.fy = 0;
    this.linkSize = linkSize;
  }

  display() {
    const p = this.p;
    p.fill(0);
    p.noStroke();
    p.circle(this.x, this.y + p.height / 2, this.linkSize);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Link);


/***/ }),

/***/ "./src/Pen.js":
/*!********************!*\
  !*** ./src/Pen.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cowbell_wav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cowbell.wav */ "./src/cowbell.wav");


class Pen {
  constructor(p, x, y, c) {
    this.p = p;
    this.x = x;
    this.y = y;
    this.r = 10;
    this.color = this.p.color(c);
    this.hit = false;
    this.effect = new Audio(_cowbell_wav__WEBPACK_IMPORTED_MODULE_0__);
    this.effect.load();
  }

  display() {
    const p = this.p;
    p.fill(this.color);
    p.noStroke();
    if (this.hit) {
      if (this.y > p.height / 2) {
        p.rect(this.x, this.y, this.r, this.r * 5);
      } else if (this.y < p.height / 2) {
        p.rect(this.x, this.y - this.r * 5, this.r, this.r * 5);
      }
    } else {
      p.circle(this.x, this.y, this.r);
    }
  }

  hitCheck(chain) {
    const p = this.p;
    if (

      ((this.x > chain.links[Math.floor(this.x / chain.linkSize)].x - chain.linkSize)
      && (this.x < chain.links[Math.floor(this.x / chain.linkSize)].x + chain.linkSize)

      && (((this.y > chain.links[Math.floor(this.x / chain.linkSize)].y - chain.linkSize
          + p.height / 2)
      && (this.y < p.height / 2))

      || ((this.y < chain.links[Math.floor(this.x / chain.linkSize)].y + chain.linkSize
          + p.height / 2
      && (this.y > p.height / 2)))))
      && this.hit === false

    ) {
      this.hit = true;
      this.effect.play();
    }
    return false;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pen);


/***/ }),

/***/ "./src/sketch.js":
/*!***********************!*\
  !*** ./src/sketch.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Chain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Chain */ "./src/Chain.js");
/* harmony import */ var _Pen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pen */ "./src/Pen.js");



const sketch = (p) => {
  // Chain constructor(p, length, dx, r)
  const width = 900;
  const dt = 5;
  const dx = 5;
  const chain = new _Chain__WEBPACK_IMPORTED_MODULE_0__["default"](p, width, dx, dt);
  let dragging = false;
  let end = 'fixed';
  let level = 0;
  let mySound;
  const pens = [];

  const levelSet = () => {
    switch (level) {
      case '1':
        pens.length = 0;
        for (let i = 0; i < 2; i += 1) {
          pens.push(
            new _Pen__WEBPACK_IMPORTED_MODULE_1__["default"](p, 0, 250, p.color(100 + 250 * i, 100 * i, 200 - 200 * i))
          );
        }

        pens[0].x = p.width - 20;
        pens[0].y = 40;
        pens[1].x = p.width / 2;
        pens[1].y = p.height / 4;
        return pens;

      case '2':
        pens.length = 0;
        for (let i = 0; i < 3; i += 1) {
          pens.push(new _Pen__WEBPACK_IMPORTED_MODULE_1__["default"](p, 0, 250, p.color(0)));
        }

        pens[0].x = p.width - 100;
        pens[0].y = (3.5 * p.height) / 5;
        pens[0].color = p.color(100, 0, 200);
        pens[1].x = p.width - 30;
        pens[1].y = (1.5 * p.height) / 5;
        pens[1].color = p.color(250, 100, 0);
        pens[2].x = p.width - 100;
        pens[2].y = (1.5 * p.height) / 5;
        pens[2].color = p.color(100, 0, 200);

        return pens;
      case '3':
        pens.length = 0;
        for (let i = 0; i < 5; i += 1) {
          pens.push(new _Pen__WEBPACK_IMPORTED_MODULE_1__["default"](p, 0, 250, p.color(0)));
        }

        pens[0].x = p.width / 2;
        pens[0].y = (3.5 * p.height) / 5;
        pens[0].color = p.color(100, 0, 200);
        pens[1].x = p.width / 2 - 120;
        pens[1].y = (3.5 * p.height) / 5;
        pens[1].color = p.color(250, 100, 0);
        pens[2].x = p.width / 2 + 120;
        pens[2].y = (3.5 * p.height) / 5;
        pens[2].color = p.color(250, 100, 0);
        pens[3].x = p.width - 10;
        pens[3].y = (3 * p.height) / 5;
        pens[3].color = p.color(250, 100, 0);
        pens[4].x = p.width - 10;
        pens[4].y = (2 * p.height) / 5;
        pens[4].color = p.color(250, 100, 0);

        return pens;
      case '4':
        pens.length = 0;
        for (let i = 0; i < 6; i += 1) {
          pens.push(new _Pen__WEBPACK_IMPORTED_MODULE_1__["default"](p, 0, 250, p.color(0)));
        }

        pens[0].x = p.width / 2 + 80;
        pens[0].y = (3.5 * p.height) / 5;
        pens[0].color = p.color(100, 0, 200);
        pens[1].x = p.width / 2;
        pens[1].y = (3.5 * p.height) / 5;
        pens[1].color = p.color(250, 100, 0);
        pens[2].x = p.width / 2;
        pens[2].y = (1.5 * p.height) / 5;
        pens[2].color = p.color(250, 100, 0);
        pens[3].x = p.width / 2 - 80;
        pens[3].y = (1.5 * p.height) / 5;
        pens[3].color = p.color(100, 0, 200);
        pens[4].x = p.width / 2 - 80;
        pens[4].y = (3.5 * p.height) / 5;
        pens[4].color = p.color(100, 0, 200);
        pens[5].x = p.width / 2 + 80;
        pens[5].y = (1.5 * p.height) / 5;
        pens[5].color = p.color(100, 0, 200);
        return pens;
      case '5':
        pens.length = 0;
        for (let i = 0; i < 6; i += 1) {
          pens.push(new _Pen__WEBPACK_IMPORTED_MODULE_1__["default"](p, 0, 250, p.color(0)));
        }
        pens[0].x = 3 * (p.width / 4);
        pens[0].y = (1 * p.height) / 5;
        pens[0].color = p.color(100, 0, 200);

        pens[1].x = 1 * (p.width / 4);
        pens[1].y = (4 * p.height) / 5;
        pens[1].color = p.color(100, 0, 200);

        pens[2].x = 1 * (p.width / 4);
        pens[2].y = (1 * p.height) / 5;
        pens[2].color = p.color(100, 0, 200);

        pens[3].x = 3 * (p.width / 4);
        pens[3].y = (4 * p.height) / 5;
        pens[3].color = p.color(100, 0, 200);

        pens[4].x = 6;
        pens[4].y = (2 * p.height) / 6;
        pens[4].color = p.color(250, 100, 0);

        pens[5].x = 6;
        pens[5].y = (4 * p.height) / 6;
        pens[5].color = p.color(250, 100, 0);

        return pens;
      default:
        return pens;
    }
  };

  const reset = () => {
    chain.links.forEach((val, i, arr) => {
      arr[i].y = 0;
      arr[i].py = 0;
      arr[i].fy = 0;
    });
    if (pens.length) {
      pens.forEach((pen)=>{
        pen.hit = false;
      });
    }
  };

  p.setup = () => {
    p.createCanvas(width, 300);
    p.textAlign(p.CENTER);

    // Event Listeners
    document.querySelectorAll('input[name="right_end"]').forEach((option) => {
      option.addEventListener('change', (event) => {
        end = event.target.value;
      });
    });

    document.querySelector('#resetButton').addEventListener('click', reset);

    document.querySelectorAll('select[name="level"]').forEach((option) => {
      option.addEventListener('change', (e) => {
        level = e.target.value;
        levelSet();
        reset();
      });
    });
  };

  p.draw = () => {
    p.background(230);
    p.fill(0);
    p.stroke(110);
    p.line(0, p.height / 2, p.width, p.height / 2);
    p.line(0, p.height / 3, p.width, p.height / 3);
    p.line(0, (2 * p.height) / 3, p.width, (2 * p.height) / 3);
    p.line(0, p.height / 6, p.width, p.height / 6);
    p.line(0, (5 * p.height) / 6, p.width, (5 * p.height) / 6);

    if (dragging) {
      chain.links[0].fy = p.mouseY - p.height / 2;
    }
    chain.links[0].py = chain.links[0].y;
    chain.links[0].y = chain.links[0].fy;
    chain.move(end, dragging);

    p.noStroke();

    if (pens.length) {
      pens.forEach((pen) => {
        if (pen.hitCheck(chain)) {
          mySound.play();
        }
        pen.display();
      });
    }
    chain.display(end, dragging);
  };

  p.mousePressed = () => {
    if (
      p.dist(
        chain.links[0].x,
        chain.links[0].y + p.height / 2,
        p.mouseX,
        p.mouseY
      )
      < (3 * chain.linkSize) / 2
    ) {
      dragging = true;
    }
  };
  p.mouseReleased = () => {
    dragging = false;
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sketch);


/***/ }),

/***/ "./src/cowbell.wav":
/*!*************************!*\
  !*** ./src/cowbell.wav ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f9d4d783b9cd432daf06.wav";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _sketch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sketch */ "./src/sketch.js");


// import p5 from './p5/p5.min.js';
// import { loadSound } from 'p5/lib/addons/p5.sound';
const p5 = window.p5;
const containerElement = document.getElementById('p5container');

// eslint-disable-next-line
const app = new p5(_sketch__WEBPACK_IMPORTED_MODULE_1__["default"], containerElement);
// app.loadSound = loadSound.bind(app);

})();

/******/ })()
;
//# sourceMappingURL=main.js.map
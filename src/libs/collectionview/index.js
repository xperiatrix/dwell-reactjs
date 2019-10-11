/* eslint-disable */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Position; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return Size; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return Ranges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Insets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return Spacing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Direction; });
var Position = /** @class */ (function () {
    function Position(x, y) {
        this.x = x;
        this.y = y;
    }
    Position.prototype.map = function (f) {
        var newX = f(this.x);
        var newY = f(this.y);
        return new Position(newX, newY);
    };
    Position.prototype.equals = function (other) {
        return (other.x == this.x
            && other.y == this.y);
    };
    Position.prototype.get = function (direction) {
        return direction === Direction.HORIZONTAL
            ? this.x
            : this.y;
    };
    Position.prototype.toString = function () {
        return "Position(x=" + this.x + ", y=" + this.y + ")";
    };
    Position.in = function (direction, first, second) {
        return direction === Direction.HORIZONTAL
            ? new Position(first, second)
            : new Position(second, first);
    };
    return Position;
}());

var Line = /** @class */ (function () {
    function Line(start, end) {
        this.start = start;
        this.end = end;
    }
    Line.prototype.toString = function () {
        return "Line(start=" + this.start + ", end=" + this.end + ")";
    };
    return Line;
}());

var Size = /** @class */ (function () {
    function Size(width, height) {
        this.width = width;
        this.height = height;
    }
    Size.prototype.get = function (direction) {
        return direction === Direction.HORIZONTAL
            ? this.width
            : this.height;
    };
    Size.prototype.toString = function () {
        return "Size(width=" + this.width + ", height=" + this.height + ")";
    };
    Size.in = function (direction, first, second) {
        return direction === Direction.HORIZONTAL
            ? new Size(first, second)
            : new Size(second, first);
    };
    return Size;
}());

var Range = /** @class */ (function () {
    function Range(start, end) {
        this.start = start;
        this.end = end;
    }
    Range.prototype.toString = function () {
        return "Range(start=" + this.start + ", end=" + this.end + ")";
    };
    return Range;
}());

var Ranges = /** @class */ (function () {
    function Ranges(horizontal, vertical) {
        this.horizontal = horizontal;
        this.vertical = vertical;
    }
    Ranges.prototype.get = function (direction) {
        return direction === Direction.HORIZONTAL
            ? this.horizontal
            : this.vertical;
    };
    Ranges.prototype.toString = function () {
        return "Ranges(horizontal=" + this.horizontal + ", vertical=" + this.vertical + ")";
    };
    return Ranges;
}());

var Insets = /** @class */ (function () {
    function Insets(top, bottom, left, right) {
        this.top = top;
        this.bottom = bottom;
        this.left = left;
        this.right = right;
    }
    Insets.prototype.getStart = function (direction) {
        return direction === Direction.HORIZONTAL
            ? this.left
            : this.top;
    };
    Insets.prototype.getEnd = function (direction) {
        return direction === Direction.HORIZONTAL
            ? this.right
            : this.bottom;
    };
    Insets.prototype.toString = function () {
        return "Insets(top=" + this.top + ", bottom=" + this.bottom + ", left=" + this.left + ", right=" + this.right + ")";
    };
    return Insets;
}());

var Spacing = /** @class */ (function () {
    function Spacing(horizontal, vertical) {
        this.horizontal = horizontal;
        this.vertical = vertical;
    }
    Spacing.prototype.get = function (direction) {
        return direction === Direction.HORIZONTAL
            ? this.horizontal
            : this.vertical;
    };
    Spacing.prototype.toString = function () {
        return "Spacing(horizontal=" + this.horizontal + ", vertical=" + this.vertical + ")";
    };
    return Spacing;
}());

var Direction = /** @class */ (function () {
    function Direction() {
    }
    Object.defineProperty(Direction.prototype, "other", {
        get: function () {
            return this === Direction.HORIZONTAL
                ? Direction.VERTICAL
                : Direction.HORIZONTAL;
        },
        enumerable: true,
        configurable: true
    });
    Direction.prototype.toString = function () {
        return this === Direction.HORIZONTAL
            ? 'Direction.HORIZONTAL'
            : 'Direction.VERTICAL';
    };
    Direction.HORIZONTAL = new Direction();
    Direction.VERTICAL = new Direction();
    return Direction;
}());



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (immutable) */ __webpack_exports__["f"] = unique;
/* harmony export (immutable) */ __webpack_exports__["e"] = sort;
/* harmony export (immutable) */ __webpack_exports__["b"] = coalesce;
/* harmony export (immutable) */ __webpack_exports__["a"] = assert;
/* harmony export (immutable) */ __webpack_exports__["d"] = range;
/* harmony export (immutable) */ __webpack_exports__["c"] = intersect;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__types__ = __webpack_require__(0);

function unique(items) {
    var seen = new Map();
    return items.filter(function (item) {
        if (seen.has(item)) {
            return false;
        }
        seen.set(item, true);
        return true;
    });
}
function sort(indices) {
    return indices.sort(function (a, b) { return a < b ? -1 : 1; });
}
function coalesce(value, defaultValue) {
    if (value === null || value === undefined) {
        return defaultValue;
    }
    return value;
}
function assert(f) {
    if (process.env.NODE_ENV !== 'production') {
        if (!f()) {
            throw new Error("");
        }
    }
}
function range(min, max) {
    return Array.from(Array(max - min), function (_, index) { return min + index; });
}
function intersect(line1, line2) {
    var _a = line1.start, x1 = _a.x, y1 = _a.y, _b = line1.end, x2 = _b.x, y2 = _b.y;
    var _c = line2.start, x3 = _c.x, y3 = _c.y, _d = line2.end, x4 = _d.x, y4 = _d.y;
    var denominator = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);
    // parallel?
    if (Math.abs(denominator) <= Number.EPSILON) {
        return;
    }
    var ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denominator;
    var ub = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / denominator;
    if (ua < 0 || ua > 1 || ub < 0 || ub > 1) {
        return;
    }
    return new __WEBPACK_IMPORTED_MODULE_0__types__["d" /* Position */](x1 + ua * (x2 - x1), y1 + ua * (y2 - y1));
}

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(12)))

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/* harmony default export */ __webpack_exports__["a"] = (isObject);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__ = __webpack_require__(17);


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__["a" /* default */] || freeSelf || Function('return this')();

/* harmony default export */ __webpack_exports__["a"] = (root);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root_js__ = __webpack_require__(3);


/** Built-in value references. */
var Symbol = __WEBPACK_IMPORTED_MODULE_0__root_js__["a" /* default */].Symbol;

/* harmony default export */ __webpack_exports__["a"] = (Symbol);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__collection_view__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid_layout__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_layout__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__types__ = __webpack_require__(0);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionView", function() { return __WEBPACK_IMPORTED_MODULE_0__collection_view__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "GridLayout", function() { return __WEBPACK_IMPORTED_MODULE_1__grid_layout__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ListLayout", function() { return __WEBPACK_IMPORTED_MODULE_2__list_layout__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Range", function() { return __WEBPACK_IMPORTED_MODULE_3__types__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Size", function() { return __WEBPACK_IMPORTED_MODULE_3__types__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return __WEBPACK_IMPORTED_MODULE_3__types__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Insets", function() { return __WEBPACK_IMPORTED_MODULE_3__types__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Spacing", function() { return __WEBPACK_IMPORTED_MODULE_3__types__["h"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Direction", function() { return __WEBPACK_IMPORTED_MODULE_3__types__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Line", function() { return __WEBPACK_IMPORTED_MODULE_3__types__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Ranges", function() { return __WEBPACK_IMPORTED_MODULE_3__types__["f"]; });







/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_css__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_bezier_easing__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_bezier_easing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_bezier_easing__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_es_throttle__ = __webpack_require__(14);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var TRANSITION_END_EVENT = 'transitionend';
var InvalidArgumentError = /** @class */ (function (_super) {
    __extends(InvalidArgumentError, _super);
    function InvalidArgumentError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return InvalidArgumentError;
}(Error));
var Operation = /** @class */ (function () {
    function Operation() {
    }
    return Operation;
}());
var CollectionView = /** @class */ (function () {
    function CollectionView(content, layout, delegate, parameters) {
        var _this = this;
        if (parameters === void 0) { parameters = {}; }
        this._wantsResize = false;
        this._resizing = false;
        this._updating = false;
        this._installed = true;
        this._contentSize = new __WEBPACK_IMPORTED_MODULE_1__types__["g" /* Size */](0, 0);
        this._containerSize = new __WEBPACK_IMPORTED_MODULE_1__types__["g" /* Size */](0, 0);
        this._scrollPosition = new __WEBPACK_IMPORTED_MODULE_1__types__["d" /* Position */](0, 0);
        this._count = 0;
        this._elements = new Map();
        this._positions = new WeakMap();
        this._visibleIndices = [];
        this.content = content;
        content.classList.add(__WEBPACK_IMPORTED_MODULE_0__style_css___default.a.content);
        this._layout = layout;
        this.delegate = delegate;
        var container = content.parentElement;
        if (container === null) {
            throw new InvalidArgumentError('Content element should be contained in a container element');
        }
        this._container = container;
        this._container.classList.add(__WEBPACK_IMPORTED_MODULE_0__style_css___default.a.container);
        this.animationDuration = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* coalesce */])(parameters.animationDuration, CollectionView.DEFAULT_ANIMATION_DURATION);
        this.repositioningClassName = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* coalesce */])(parameters.repositioningClassName, CollectionView.DEFAULT_REPOSITIONING_CLASS_NAME);
        this.appearingClassName = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* coalesce */])(parameters.appearingClassName, CollectionView.DEFAULT_APPEARING_CLASS_NAME);
        this.disappearingClassName = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* coalesce */])(parameters.disappearingClassName, CollectionView.DEFAULT_DISAPPEARING_CLASS_NAME);
        var thresholds = parameters.thresholds || {};
        this.thresholds = {
            left: Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* coalesce */])(thresholds.left, CollectionView.DEFAULT_THRESHOLD),
            top: Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* coalesce */])(thresholds.top, CollectionView.DEFAULT_THRESHOLD),
            right: Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* coalesce */])(thresholds.right, CollectionView.DEFAULT_THRESHOLD),
            bottom: Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* coalesce */])(thresholds.bottom, CollectionView.DEFAULT_THRESHOLD)
        };
        this.positionImprovementOffset = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* coalesce */])(parameters.positionImprovementOffset, CollectionView.DEFAULT_POSITION_IMPROVEMENT_OFFSET);
        this.updateContainerSize(this._layout);
        this.updateCount();
        this.updateContentSize(this._layout);
        this.onScroll = this.onScroll.bind(this);
        this._onResize = Object(__WEBPACK_IMPORTED_MODULE_4_lodash_es_throttle__["a" /* default */])(function () { return _this.resize(); }, Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* coalesce */])(parameters.resizeThrottleDuration, CollectionView.DEFAULT_RESIZE_THROTTLE), { leading: false });
        this._container.addEventListener('scroll', this.onScroll, false);
        window.addEventListener('resize', this._onResize, false);
        // DEBUG: keep scroll position
        // let savedPos = localStorage['pos']
        // if (savedPos)
        //   this.scrollTo(JSON.parse(savedPos))
        // window.addEventListener("beforeunload", () => {
        //   localStorage['pos'] = JSON.stringify(this.scrollPosition)
        // })
        this.updateCurrentIndices();
    }
    Object.defineProperty(CollectionView.prototype, "scrollPosition", {
        get: function () {
            return this._scrollPosition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CollectionView.prototype, "layout", {
        get: function () {
            return this._layout;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CollectionView.prototype, "contentSize", {
        get: function () {
            return this._contentSize;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CollectionView.prototype, "containerSize", {
        get: function () {
            return this._containerSize;
        },
        enumerable: true,
        configurable: true
    });
    CollectionView.prototype.uninstall = function (elementHandler) {
        var _this = this;
        this._installed = false;
        this.content.classList.remove(__WEBPACK_IMPORTED_MODULE_0__style_css___default.a.content);
        this.content.removeAttribute('style');
        this._container.classList.remove(__WEBPACK_IMPORTED_MODULE_0__style_css___default.a.container);
        this._container.removeEventListener('scroll', this.onScroll, false);
        window.removeEventListener('resize', this._onResize, false);
        if (elementHandler) {
            this._elements.forEach(function (element) {
                return elementHandler(element);
            });
        }
        this._elements.forEach(function (element) { return _this.removeFromParent(element); });
    };
    Object.defineProperty(CollectionView.prototype, "currentContainerSize", {
        get: function () {
            return new __WEBPACK_IMPORTED_MODULE_1__types__["g" /* Size */](this._container.clientWidth, this._container.clientHeight);
        },
        enumerable: true,
        configurable: true
    });
    CollectionView.prototype.updateContainerSize = function (layout) {
        this._containerSize = this.currentContainerSize;
        if (layout.updateContainerSize) {
            layout.updateContainerSize(this._containerSize);
        }
    };
    CollectionView.prototype.updateCount = function () {
        this._count = this.delegate.getCount();
    };
    CollectionView.prototype.updateContentSize = function (layout) {
        var containerSize = this.currentContainerSize;
        this._contentSize = layout.getContentSize(this._count, containerSize);
        var _a = this._contentSize, width = _a.width, height = _a.height;
        this.content.style.minWidth = width + "px";
        this.content.style.minHeight = height + "px";
    };
    Object.defineProperty(CollectionView.prototype, "currentScrollPosition", {
        get: function () {
            return new __WEBPACK_IMPORTED_MODULE_1__types__["d" /* Position */](this._container.scrollLeft, this._container.scrollTop);
        },
        enumerable: true,
        configurable: true
    });
    CollectionView.prototype.onScroll = function () {
        var _this = this;
        this._scrollPosition = this.currentScrollPosition;
        if (this._updating) {
            return;
        }
        this._updating = true;
        requestAnimationFrame(function () {
            _this.updateCurrentIndices();
            if (_this.delegate.onScroll) {
                _this.delegate.onScroll(_this);
            }
            _this._updating = false;
        });
    };
    CollectionView.prototype.getAxisRange = function (position, range, startThreshold, endThreshold) {
        var offset = Math.max(0, position - startThreshold);
        var fullRange = startThreshold + range + endThreshold;
        var endOffset = offset + fullRange;
        return new __WEBPACK_IMPORTED_MODULE_1__types__["e" /* Range */](offset, endOffset);
    };
    CollectionView.prototype.getXRange = function (_a) {
        var x = _a.x;
        var width = this._containerSize.width;
        var _b = this.thresholds, left = _b.left, right = _b.right;
        return this.getAxisRange(x, width, left, right);
    };
    CollectionView.prototype.getYRange = function (_a) {
        var y = _a.y;
        var height = this._containerSize.height;
        var _b = this.thresholds, top = _b.top, bottom = _b.bottom;
        return this.getAxisRange(y, height, top, bottom);
    };
    CollectionView.prototype.getIndices = function (layout, position, containerSize) {
        var xRange = this.getXRange(position);
        var yRange = this.getYRange(position);
        return layout.getIndices(new __WEBPACK_IMPORTED_MODULE_1__types__["f" /* Ranges */](xRange, yRange), this._count, containerSize);
    };
    Object.defineProperty(CollectionView.prototype, "currentIndices", {
        get: function () {
            return this.getIndices(this._layout, this._scrollPosition, this._containerSize);
        },
        enumerable: true,
        configurable: true
    });
    CollectionView.prototype.updateCurrentIndices = function () {
        this.updateIndices(this.currentIndices);
    };
    // update elements when viewport changes (e.g. when scrolling)
    CollectionView.prototype.updateIndices = function (newIndices) {
        var _this = this;
        // determine old elements. save invalid elements so they can be reused
        var invalidElements = [];
        this._elements.forEach(function (element, index) {
            Object(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* assert */])(function () { return index >= 0; });
            if (newIndices.indexOf(index) >= 0) {
                return;
            }
            _this._elements.delete(index);
            _this._positions.delete(element);
            if (_this.delegate.invalidateElement) {
                _this.delegate.invalidateElement(element, index);
            }
            invalidElements.push(element);
        });
        // add missing elements
        var currentIndices = this._visibleIndices;
        newIndices.filter(function (index) { return currentIndices.indexOf(index) < 0; })
            .forEach(function (index) {
            // reuse one of the invalid/old elements, or create a new element
            var element = invalidElements.pop()
                || _this.createAndAddElement();
            _this.configureElement(_this._layout, element, index);
            _this.getAndApplyElementPosition(_this._layout, element, index);
            element.classList.remove(_this.repositioningClassName);
            Object(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* assert */])(function () { return index >= 0; });
            _this._elements.set(index, element);
        });
        this._visibleIndices = newIndices;
        // actually remove old elements, which weren't reused
        invalidElements.forEach(function (element) {
            if (element == null) {
                return;
            }
            _this.removeFromParent(element);
        });
    };
    CollectionView.prototype.configureElement = function (layout, element, index) {
        this.delegate.configureElement(element, index);
        layout.configureElement(element, index);
    };
    CollectionView.prototype.getElementPosition = function (layout, index) {
        var position = layout.getElementPosition(index);
        return position.map(Math.round);
    };
    CollectionView.prototype.applyElementPosition = function (element, position, index) {
        var x = position.x, y = position.y;
        element.style.zIndex = "" + (index + 1);
        element.style.transform = "translate3d(" + x + "px, " + y + "px, 0)";
        this._positions.set(element, position);
    };
    CollectionView.prototype.getAndApplyElementPosition = function (layout, element, index) {
        var position = this.getElementPosition(layout, index);
        this.applyElementPosition(element, position, index);
    };
    CollectionView.prototype.createAndAddElement = function () {
        var element = document.createElement('div');
        element.classList.add(__WEBPACK_IMPORTED_MODULE_0__style_css___default.a.element);
        this.content.appendChild(element);
        return element;
    };
    // TODO: assumes sizes are constant
    CollectionView.prototype.repositionVisibleElements = function (layout, improvePositions) {
        var _this = this;
        this._elements.forEach(function (element, index) {
            Object(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* assert */])(function () { return index >= 0; });
            var finalPosition = _this.getElementPosition(layout, index);
            var currentPosition = _this._positions.get(element);
            if (!currentPosition) {
                throw Error("missing position for element: " + element);
            }
            if (finalPosition.equals(currentPosition)) {
                return;
            }
            var size = new __WEBPACK_IMPORTED_MODULE_1__types__["g" /* Size */](element.offsetWidth, element.offsetHeight);
            var improvedPositions = improvePositions
                ? _this.getImprovedPositions(currentPosition, finalPosition, size)
                : undefined;
            if (improvedPositions !== undefined) {
                var improvedStartPosition = improvedPositions[0];
                if (improvedStartPosition !== undefined) {
                    _this.applyElementPosition(element, improvedStartPosition, index);
                    element.getBoundingClientRect();
                }
            }
            var improvedEndPosition;
            if (improvedPositions !== undefined) {
                improvedEndPosition = improvedPositions[1];
            }
            var onTransitionEnd = function () {
                element.removeEventListener(TRANSITION_END_EVENT, onTransitionEnd, false);
                element.classList.remove(_this.repositioningClassName);
                if (improvedEndPosition !== undefined) {
                    _this.applyElementPosition(element, finalPosition, index);
                }
            };
            element.addEventListener(TRANSITION_END_EVENT, onTransitionEnd, false);
            element.classList.add(_this.repositioningClassName);
            var temporaryEndPosition = improvedEndPosition !== undefined
                ? improvedEndPosition
                : finalPosition;
            _this.applyElementPosition(element, temporaryEndPosition, index);
        });
    };
    CollectionView.prototype.getImprovedPositions = function (currentPosition, newPosition, size) {
        var width = size.width, height = size.height;
        var currentIsVisible = this.isVisible(currentPosition, size);
        var newIsVisible = this.isVisible(newPosition, size);
        var movingIn = !currentIsVisible && newIsVisible;
        var movingOut = currentIsVisible && !newIsVisible;
        if (!movingIn && !movingOut) {
            return;
        }
        var _a = this._containerSize, containerWidth = _a.width, containerHeight = _a.height;
        var _b = this._scrollPosition, minX = _b.x, minY = _b.y;
        var maxY = minY + containerHeight;
        var maxX = minX + containerWidth;
        var transitionLine = new __WEBPACK_IMPORTED_MODULE_1__types__["c" /* Line */](currentPosition, newPosition);
        var offset = this.positionImprovementOffset;
        // NOTE: offsetting lines to take element size into account + some padding
        // check bottom
        var adjustedBottomLine = new __WEBPACK_IMPORTED_MODULE_1__types__["c" /* Line */](new __WEBPACK_IMPORTED_MODULE_1__types__["d" /* Position */](minX, maxY + offset), new __WEBPACK_IMPORTED_MODULE_1__types__["d" /* Position */](maxX, maxY + offset));
        var bottomIntersectionPoint = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["c" /* intersect */])(transitionLine, adjustedBottomLine);
        if (bottomIntersectionPoint) {
            return movingIn
                ? [bottomIntersectionPoint, undefined]
                : [undefined, bottomIntersectionPoint];
        }
        // check top
        var adjustedTopLine = new __WEBPACK_IMPORTED_MODULE_1__types__["c" /* Line */](new __WEBPACK_IMPORTED_MODULE_1__types__["d" /* Position */](minX, minY - height - offset), new __WEBPACK_IMPORTED_MODULE_1__types__["d" /* Position */](maxX, minY - height - offset));
        var topIntersectionPoint = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["c" /* intersect */])(transitionLine, adjustedTopLine);
        if (topIntersectionPoint) {
            return movingIn
                ? [topIntersectionPoint, undefined]
                : [undefined, topIntersectionPoint];
        }
        // check left
        var adjustedLeftLine = new __WEBPACK_IMPORTED_MODULE_1__types__["c" /* Line */](new __WEBPACK_IMPORTED_MODULE_1__types__["d" /* Position */](minX - width - offset, minY), new __WEBPACK_IMPORTED_MODULE_1__types__["d" /* Position */](minX - width - offset, maxY));
        var leftIntersectionPoint = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["c" /* intersect */])(transitionLine, adjustedLeftLine);
        if (leftIntersectionPoint) {
            return movingIn
                ? [leftIntersectionPoint, undefined]
                : [undefined, leftIntersectionPoint];
        }
        // check right
        var adjustedRightLine = new __WEBPACK_IMPORTED_MODULE_1__types__["c" /* Line */](new __WEBPACK_IMPORTED_MODULE_1__types__["d" /* Position */](maxX + offset, minY), new __WEBPACK_IMPORTED_MODULE_1__types__["d" /* Position */](maxX + offset, maxY));
        var rightIntersectionPoint = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["c" /* intersect */])(transitionLine, adjustedRightLine);
        if (rightIntersectionPoint) {
            return movingIn
                ? [rightIntersectionPoint, undefined]
                : [undefined, rightIntersectionPoint];
        }
        return;
    };
    CollectionView.prototype.isVisible = function (_a, _b) {
        var minX = _a.x, minY = _a.y;
        var width = _b.width, height = _b.height;
        var _c = this._containerSize, containerWidth = _c.width, containerHeight = _c.height;
        var _d = this._scrollPosition, containerMinX = _d.x, containerMinY = _d.y;
        var containerMaxX = containerMinX + containerWidth;
        var containerMaxY = containerMinY + containerHeight;
        var maxX = minX + width;
        var maxY = minY + height;
        return (minX < containerMaxX
            && maxX > containerMinX
            && maxY > containerMinY
            && minY < containerMaxY);
    };
    CollectionView.prototype.resize = function () {
        var _this = this;
        if (this._resizing) {
            this._wantsResize = true;
            return;
        }
        this._resizing = true;
        this.updateLayout(this._layout)
            .then(function () {
            _this._resizing = false;
            if (_this._wantsResize) {
                _this._wantsResize = false;
                _this.resize();
            }
        });
    };
    CollectionView.prototype.updateLayout = function (newLayout, animated) {
        var _this = this;
        if (animated === void 0) { animated = true; }
        return new Promise(function (resolve, reject) {
            var operation = _this.startOperation();
            _this._container.removeEventListener('scroll', _this.onScroll, false);
            // update with elements that will be visible after resize
            var newContainerSize = _this.currentContainerSize;
            var newPosition = newLayout.convertPositionInSize(_this._scrollPosition, newContainerSize, _this._layout);
            // newPosition might not be the final scroll position:
            // when at the bottom and the content is becoming smaller, the view is scrolled up
            var finalContentSize = newLayout.getContentSize(_this._count, newContainerSize);
            var finalPosition = new __WEBPACK_IMPORTED_MODULE_1__types__["d" /* Position */](newPosition.x - Math.abs(Math.min(0, finalContentSize.width - (newPosition.x + newContainerSize.width))), newPosition.y - Math.abs(Math.min(0, finalContentSize.height - (newPosition.y + newContainerSize.height))));
            var finalIndices = _this.getIndices(newLayout, finalPosition, newContainerSize);
            var combinedIndices = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["f" /* unique */])(_this._visibleIndices.concat(finalIndices));
            var count = combinedIndices.length;
            if (count) {
                var min = combinedIndices.reduce(function (min, value) { return Math.min(min, value); });
                var max = combinedIndices.reduce(function (max, value) { return Math.max(max, value); });
                _this.updateIndices(Object(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* range */])(min, max + 1));
            }
            // temporarily shift position of visible elements and scroll
            // to future position, so elements appear to "stay"
            var diffX = Math.round(newPosition.x - _this._scrollPosition.x);
            var diffY = Math.round(newPosition.y - _this._scrollPosition.y);
            if (diffX || diffY) {
                _this._elements.forEach(function (element) {
                    element.style.transform += " translate3d(" + diffX + "px, " + diffY + "px, 0)";
                });
            }
            _this.updateContentSize(newLayout);
            _this.scrollTo(newPosition);
            _this._scrollPosition = finalPosition;
            _this.updateContainerSize(newLayout);
            // reposition (NOTE: delay important)
            _this.delayForOperation(operation, reject, function () {
                _this.repositionVisibleElements(newLayout, false);
                _this._elements.forEach(function (element, index) {
                    Object(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* assert */])(function () { return index >= 0; });
                    newLayout.configureElement(element, index);
                });
                _this._layout = newLayout;
                _this.delayForOperation(operation, reject, function () {
                    _this.updateCurrentIndices();
                    if (_this._installed) {
                        _this._container.addEventListener('scroll', _this.onScroll, false);
                    }
                    resolve();
                }, animated ? _this.animationDuration : 0);
            }, 0);
        });
    };
    CollectionView.prototype.scrollTo = function (_a, animated) {
        var _this = this;
        var toX = _a.x, toY = _a.y;
        if (animated === void 0) { animated = false; }
        if (animated) {
            var start_1 = Date.now();
            var _b = this.currentScrollPosition, fromX_1 = _b.x, fromY_1 = _b.y;
            var easing_1 = CollectionView.EASING;
            var scroll_1 = function () {
                var now = Date.now();
                var progress = Math.min(1, (now - start_1) / _this.animationDuration);
                var easedProgress = easing_1(progress);
                var targetX = fromX_1 + easedProgress * (toX - fromX_1);
                var targetY = fromY_1 + easedProgress * (toY - fromY_1);
                _this.scrollTo(new __WEBPACK_IMPORTED_MODULE_1__types__["d" /* Position */](targetX, targetY), false);
                if (progress < 1) {
                    requestAnimationFrame(scroll_1);
                }
            };
            requestAnimationFrame(scroll_1);
        }
        else {
            this._container.scrollLeft = toX;
            this._container.scrollTop = toY;
        }
    };
    CollectionView.prototype.removeFromParent = function (element) {
        var parent = element.parentElement;
        if (!parent) {
            return;
        }
        parent.removeChild(element);
    };
    CollectionView.prototype.changeIndices = function (removedIndices, addedIndices, movedIndexMap, animated) {
        var _this = this;
        if (animated === void 0) { animated = true; }
        return new Promise(function (resolve, reject) {
            var operation = _this.startOperation();
            var promises = [];
            // handle legacy Object
            if (!(movedIndexMap instanceof Map)) {
                var movedIndexObject_1 = movedIndexMap;
                var pairs = Object.keys(movedIndexObject_1)
                    .map(function (key) {
                    return [Number(key), Number(movedIndexObject_1[key])];
                });
                movedIndexMap = new Map(pairs);
            }
            _this._container.removeEventListener('scroll', _this.onScroll, false);
            // prepare moved mapping
            var oldMovedIndices = Array.from(movedIndexMap.keys());
            var reverseMovedIndexMap = new Map();
            oldMovedIndices.forEach(function (oldIndex) {
                // TODO: assert
                var newIndex = movedIndexMap.get(oldIndex);
                reverseMovedIndexMap.set(newIndex, oldIndex);
            });
            var newMovedIndices = Array.from(reverseMovedIndexMap.keys());
            // update count
            _this.updateCount();
            var countDifference = addedIndices.length - removedIndices.length;
            // TODO: assert countDifference == this.count - oldCount
            if (countDifference > 0) {
                _this.updateContentSize(_this._layout);
            }
            // scroll if current position will be out of bounds
            var _a = _this._layout.getContentSize(_this._count, _this._containerSize), newContentWidth = _a.width, newContentHeight = _a.height;
            var _b = _this._containerSize, containerWidth = _b.width, containerHeight = _b.height;
            var _c = _this._scrollPosition, scrollX = _c.x, scrollY = _c.y;
            var right = scrollX + containerWidth;
            var adjustX = right > newContentWidth;
            var bottom = scrollY + containerHeight;
            var adjustY = bottom > newContentHeight;
            if (adjustX || adjustY) {
                _this._scrollPosition =
                    new __WEBPACK_IMPORTED_MODULE_1__types__["d" /* Position */](adjustX
                        ? Math.max(0, scrollX - (right - newContentWidth))
                        : scrollX, adjustY
                        ? Math.max(0, scrollY - (bottom - newContentHeight))
                        : scrollY);
                _this.scrollTo(_this._scrollPosition, true);
            }
            // disappear and remove elements
            removedIndices.forEach(function (index) {
                Object(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* assert */])(function () { return index >= 0; });
                var element = _this._elements.get(index);
                if (!element) {
                    return;
                }
                element.classList.add(_this.disappearingClassName);
                element.style.zIndex = '0';
                promises.push(new Promise(function (resolve) {
                    // NOTE: notify delegate about invalidation after element was removed
                    // (animation finished), not immediately when stopping to keep track of it
                    // NOTE: no need to check for current operation!
                    setTimeout(function () {
                        _this.removeFromParent(element);
                        if (_this.delegate.invalidateElement) {
                            _this.delegate.invalidateElement(element, index);
                        }
                        resolve();
                    }, _this.animationDuration);
                }));
                _this._elements.delete(index);
                _this._positions.delete(element);
            });
            // reorder visible elements
            var removedOrMovedIndices = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["e" /* sort */])(removedIndices.concat(oldMovedIndices));
            var addedOrMovedIndices = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["e" /* sort */])(addedIndices.concat(newMovedIndices));
            var removedOrMovedReorderOffset = 0;
            var newElements = new Map();
            var indices = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["e" /* sort */])(Array.from(_this._elements.keys()));
            indices.forEach(function (index) {
                var element = _this._elements.get(index);
                Object(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* assert */])(function () { return index >= 0; });
                var newIndex;
                var movedIndex = movedIndexMap.get(index);
                if (movedIndex !== undefined) {
                    newIndex = movedIndex;
                }
                else {
                    while (removedOrMovedReorderOffset < removedOrMovedIndices.length
                        && removedOrMovedIndices[removedOrMovedReorderOffset] <= index) {
                        removedOrMovedReorderOffset += 1;
                    }
                    var addedOrMovedReorderOffset = 0;
                    while (addedOrMovedReorderOffset < addedOrMovedIndices.length
                        && (addedOrMovedIndices[addedOrMovedReorderOffset]
                            <= index - removedOrMovedReorderOffset + addedOrMovedReorderOffset)) {
                        addedOrMovedReorderOffset += 1;
                    }
                    newIndex = index - removedOrMovedReorderOffset + addedOrMovedReorderOffset;
                }
                Object(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* assert */])(function () { return newIndex >= 0; });
                newElements.set(newIndex, element);
            });
            _this._elements = newElements;
            // load visible elements
            var finalIndices = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["e" /* sort */])(_this.currentIndices);
            var removedOrMovedLoadOffset = 0;
            var addedOrMovedLoadOffset = 0;
            finalIndices.forEach(function (index) {
                var oldIndex;
                var reverseMovedIndex = reverseMovedIndexMap.get(index);
                if (reverseMovedIndex !== undefined) {
                    oldIndex = reverseMovedIndex;
                }
                else {
                    while (addedOrMovedLoadOffset < addedOrMovedIndices.length
                        && addedOrMovedIndices[addedOrMovedLoadOffset] <= index) {
                        addedOrMovedLoadOffset += 1;
                    }
                    while (removedOrMovedLoadOffset < removedOrMovedIndices.length
                        && (removedOrMovedIndices[removedOrMovedLoadOffset]
                            <= index - addedOrMovedLoadOffset + removedOrMovedLoadOffset)) {
                        removedOrMovedLoadOffset += 1;
                    }
                    oldIndex = index - addedOrMovedLoadOffset + removedOrMovedLoadOffset;
                }
                Object(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* assert */])(function () { return index >= 0; });
                var existingElement = _this._elements.get(index);
                if (existingElement) {
                    return;
                }
                var element = _this.createAndAddElement();
                var isNew = addedIndices.indexOf(index) >= 0;
                _this.configureElement(_this._layout, element, index);
                _this.getAndApplyElementPosition(_this._layout, element, isNew ? index : oldIndex);
                if (isNew) {
                    element.classList.add(_this.appearingClassName);
                    // TODO: trigger restyle in a more proper way
                    // tslint:disable-next-line:no-unused-expression
                    window.getComputedStyle(element).opacity;
                    element.classList.remove(_this.appearingClassName);
                }
                else {
                    // NOTE: important, forces a relayout
                    element.getBoundingClientRect();
                }
                _this._elements.set(index, element);
            });
            _this._visibleIndices = finalIndices;
            // reposition
            promises.push(new Promise(function (resolve, reject) {
                // NOTE: delay important
                _this.delayForOperation(operation, reject, function () {
                    _this.repositionVisibleElements(_this._layout, true);
                    if (_this._installed) {
                        _this._container.addEventListener('scroll', _this.onScroll, false);
                    }
                    _this.delayForOperation(operation, reject, function () {
                        if (countDifference < 0) {
                            _this.updateContentSize(_this._layout);
                        }
                        _this.updateCurrentIndices();
                        resolve();
                    }, animated ? _this.animationDuration : 0);
                }, 0);
            }));
            Promise.all(promises)
                .then(function () { return resolve(); }, reject);
        });
    };
    CollectionView.prototype.startOperation = function () {
        var operation = new Operation();
        this._currentOperation = operation;
        return operation;
    };
    CollectionView.prototype.checkCurrentOperation = function (operation, reject) {
        if (this._currentOperation === operation) {
            return true;
        }
        reject();
        return false;
    };
    CollectionView.prototype.delayForOperation = function (operation, reject, func, duration) {
        var _this = this;
        setTimeout(function () {
            if (!_this.checkCurrentOperation(operation, reject)) {
                return;
            }
            func();
        }, duration);
    };
    CollectionView.EASING = __WEBPACK_IMPORTED_MODULE_3_bezier_easing__(0.25, 0.1, 0.25, 1.0);
    CollectionView.DEFAULT_THRESHOLD = 3000;
    CollectionView.DEFAULT_REPOSITIONING_CLASS_NAME = 'repositioning';
    CollectionView.DEFAULT_APPEARING_CLASS_NAME = 'appearing';
    CollectionView.DEFAULT_DISAPPEARING_CLASS_NAME = 'disappearing';
    CollectionView.DEFAULT_ANIMATION_DURATION = 400;
    CollectionView.DEFAULT_RESIZE_THROTTLE = 1000;
    CollectionView.DEFAULT_POSITION_IMPROVEMENT_OFFSET = 100;
    return CollectionView;
}());
/* harmony default export */ __webpack_exports__["a"] = (CollectionView);


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(8);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(10)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--1-1!./style.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--1-1!./style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, ".wbUj_oHMpBitHI_JMg7Yo {\n    overflow: scroll;\n    -webkit-overflow-scrolling: touch;\n}\n\n._11wNc97h0GEOyKrpmt-cyQ {\n    min-height: 100%;\n    position: relative;\n    transform: translate3d(0, 0, 0);\n}\n\n._27p2BGBGtjsj4-bKv8FdAQ {\n    display: block;\n    position: absolute;\n    opacity: 1;\n    transition-duration: 400ms;\n    transition-property: width, height, opacity;\n}\n\n.repositioning {\n    transition-property: width, height, opacity, transform;\n}\n\n.appearing,\n.disappearing {\n    opacity: 0;\n}\n", ""]);

// exports
exports.locals = {
	"container": "wbUj_oHMpBitHI_JMg7Yo",
	"content": "_11wNc97h0GEOyKrpmt-cyQ",
	"element": "_27p2BGBGtjsj4-bKv8FdAQ"
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(11);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 11 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 13 */
/***/ (function(module, exports) {

/**
 * https://github.com/gre/bezier-easing
 * BezierEasing - use bezier curve for transition easing function
 * by Gaëtan Renaudeau 2014 - 2015 – MIT License
 */

// These values are established by empiricism with tests (tradeoff: performance VS precision)
var NEWTON_ITERATIONS = 4;
var NEWTON_MIN_SLOPE = 0.001;
var SUBDIVISION_PRECISION = 0.0000001;
var SUBDIVISION_MAX_ITERATIONS = 10;

var kSplineTableSize = 11;
var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

var float32ArraySupported = typeof Float32Array === 'function';

function A (aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1; }
function B (aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1; }
function C (aA1)      { return 3.0 * aA1; }

// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
function calcBezier (aT, aA1, aA2) { return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT; }

// Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
function getSlope (aT, aA1, aA2) { return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1); }

function binarySubdivide (aX, aA, aB, mX1, mX2) {
  var currentX, currentT, i = 0;
  do {
    currentT = aA + (aB - aA) / 2.0;
    currentX = calcBezier(currentT, mX1, mX2) - aX;
    if (currentX > 0.0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
  return currentT;
}

function newtonRaphsonIterate (aX, aGuessT, mX1, mX2) {
 for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
   var currentSlope = getSlope(aGuessT, mX1, mX2);
   if (currentSlope === 0.0) {
     return aGuessT;
   }
   var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
   aGuessT -= currentX / currentSlope;
 }
 return aGuessT;
}

module.exports = function bezier (mX1, mY1, mX2, mY2) {
  if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
    throw new Error('bezier x values must be in [0, 1] range');
  }

  // Precompute samples table
  var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
  if (mX1 !== mY1 || mX2 !== mY2) {
    for (var i = 0; i < kSplineTableSize; ++i) {
      sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
    }
  }

  function getTForX (aX) {
    var intervalStart = 0.0;
    var currentSample = 1;
    var lastSample = kSplineTableSize - 1;

    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += kSampleStepSize;
    }
    --currentSample;

    // Interpolate to provide an initial guess for t
    var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    var guessForT = intervalStart + dist * kSampleStepSize;

    var initialSlope = getSlope(guessForT, mX1, mX2);
    if (initialSlope >= NEWTON_MIN_SLOPE) {
      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
    } else if (initialSlope === 0.0) {
      return guessForT;
    } else {
      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    }
  }

  return function BezierEasing (x) {
    if (mX1 === mY1 && mX2 === mY2) {
      return x; // linear
    }
    // Because JavaScript number are imprecise, we should guarantee the extremes are right.
    if (x === 0) {
      return 0;
    }
    if (x === 1) {
      return 1;
    }
    return calcBezier(getTForX(x), mY1, mY2);
  };
};


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__debounce_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isObject_js__ = __webpack_require__(2);



/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (Object(__WEBPACK_IMPORTED_MODULE_1__isObject_js__["a" /* default */])(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return Object(__WEBPACK_IMPORTED_MODULE_0__debounce_js__["a" /* default */])(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/* harmony default export */ __webpack_exports__["a"] = (throttle);


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isObject_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__now_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toNumber_js__ = __webpack_require__(19);




/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = Object(__WEBPACK_IMPORTED_MODULE_2__toNumber_js__["a" /* default */])(wait) || 0;
  if (Object(__WEBPACK_IMPORTED_MODULE_0__isObject_js__["a" /* default */])(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(Object(__WEBPACK_IMPORTED_MODULE_2__toNumber_js__["a" /* default */])(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = Object(__WEBPACK_IMPORTED_MODULE_1__now_js__["a" /* default */])();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(Object(__WEBPACK_IMPORTED_MODULE_1__now_js__["a" /* default */])());
  }

  function debounced() {
    var time = Object(__WEBPACK_IMPORTED_MODULE_1__now_js__["a" /* default */])(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/* harmony default export */ __webpack_exports__["a"] = (debounce);


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root_js__ = __webpack_require__(3);


/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return __WEBPACK_IMPORTED_MODULE_0__root_js__["a" /* default */].Date.now();
};

/* harmony default export */ __webpack_exports__["a"] = (now);


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ __webpack_exports__["a"] = (freeGlobal);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(18)))

/***/ }),
/* 18 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isObject_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isSymbol_js__ = __webpack_require__(20);



/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (Object(__WEBPACK_IMPORTED_MODULE_1__isSymbol_js__["a" /* default */])(value)) {
    return NAN;
  }
  if (Object(__WEBPACK_IMPORTED_MODULE_0__isObject_js__["a" /* default */])(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = Object(__WEBPACK_IMPORTED_MODULE_0__isObject_js__["a" /* default */])(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

/* harmony default export */ __webpack_exports__["a"] = (toNumber);


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isObjectLike_js__ = __webpack_require__(24);



/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (Object(__WEBPACK_IMPORTED_MODULE_1__isObjectLike_js__["a" /* default */])(value) && Object(__WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__["a" /* default */])(value) == symbolTag);
}

/* harmony default export */ __webpack_exports__["a"] = (isSymbol);


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getRawTag_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objectToString_js__ = __webpack_require__(23);




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? Object(__WEBPACK_IMPORTED_MODULE_1__getRawTag_js__["a" /* default */])(value)
    : Object(__WEBPACK_IMPORTED_MODULE_2__objectToString_js__["a" /* default */])(value);
}

/* harmony default export */ __webpack_exports__["a"] = (baseGetTag);


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(4);


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["a"] = (getRawTag);


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/* harmony default export */ __webpack_exports__["a"] = (objectToString);


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ __webpack_exports__["a"] = (isObjectLike);


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__types__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(1);


var GridLayout = /** @class */ (function () {
    function GridLayout(_a) {
        var _b = _a === void 0 ? {} : _a, direction = _b.direction, insets = _b.insets, spacing = _b.spacing, itemSize = _b.itemSize;
        this._otherItemCount = 0;
        this._otherContainerSizeConstraint = 0;
        this.direction = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* coalesce */])(direction, GridLayout.DEFAULT_DIRECTION);
        this._otherDirection = this.direction.other;
        this.insets = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* coalesce */])(insets, GridLayout.DEFAULT_INSETS);
        this.spacing = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* coalesce */])(spacing, GridLayout.DEFAULT_SPACING);
        this.itemSize = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* coalesce */])(itemSize, GridLayout.DEFAULT_ITEM_SIZE);
    }
    GridLayout.prototype.getOtherItemCount = function (containerSize) {
        var otherDirection = this._otherDirection;
        var otherStartInset = this.insets.getStart(otherDirection);
        var otherEndInset = this.insets.getEnd(otherDirection);
        var otherContainerSize = containerSize.get(otherDirection);
        var otherAvailableSpace = otherContainerSize - otherStartInset - otherEndInset;
        var otherSpacing = this.spacing.get(otherDirection);
        var otherItemSize = this.itemSize.get(otherDirection);
        return Math.floor((otherAvailableSpace + otherSpacing) / (otherItemSize + otherSpacing));
    };
    GridLayout.prototype.configureElement = function (element, index) {
        var _a = this.itemSize, width = _a.width, height = _a.height;
        element.style.width = width + "px";
        element.style.height = height + "px";
    };
    GridLayout.prototype.updateContainerSize = function (containerSize) {
        this._otherContainerSizeConstraint = containerSize.get(this._otherDirection);
        this._otherItemCount = this.getOtherItemCount(containerSize);
    };
    GridLayout.prototype.getIndices = function (ranges, count, containerSize) {
        var thisRange = ranges.get(this.direction);
        var startInset = this.insets.getStart(this.direction);
        var start = thisRange.start - startInset;
        var end = thisRange.end - startInset;
        var otherItemCount = this.getOtherItemCount(containerSize);
        var spacing = this.spacing.get(this.direction);
        var itemSize = this.itemSize.get(this.direction);
        var itemAndSpacing = itemSize + spacing;
        var startIndex = Math.max(0, Math.floor(start / itemAndSpacing) * otherItemCount);
        var endIndex = Math.min(Math.ceil(end / itemAndSpacing) * otherItemCount, count);
        return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["d" /* range */])(startIndex, endIndex);
    };
    GridLayout.prototype.getElementPosition = function (index) {
        var sectionIndex = Math.floor(index / this._otherItemCount);
        var itemIndex = index % this._otherItemCount;
        var otherDirection = this._otherDirection;
        var spacing = this.spacing.get(this.direction);
        var otherSpacing = this.spacing.get(otherDirection);
        var startInset = this.insets.getStart(this.direction);
        var otherStartInset = this.insets.getStart(otherDirection);
        var otherEndInset = this.insets.getEnd(otherDirection);
        var itemSize = this.itemSize.get(this.direction);
        var itemSizeAndSpacing = itemSize + spacing;
        var otherItemSize = this.itemSize.get(otherDirection);
        var otherItemSizeAndSpacing = otherItemSize + otherSpacing;
        var otherAvailableSpace = this._otherContainerSizeConstraint - otherStartInset - otherEndInset;
        var diff = otherAvailableSpace + otherSpacing - this._otherItemCount * otherItemSizeAndSpacing;
        return __WEBPACK_IMPORTED_MODULE_0__types__["d" /* Position */].in(this.direction, startInset + sectionIndex * itemSizeAndSpacing, otherStartInset + itemIndex * otherItemSizeAndSpacing + Math.max(0, diff / 2));
    };
    GridLayout.prototype.getContentSize = function (count, containerSize) {
        var otherItemCount = this.getOtherItemCount(containerSize);
        var otherSize = containerSize.get(this._otherDirection);
        var sectionCount = Math.ceil(count / otherItemCount);
        var startInset = this.insets.getStart(this.direction);
        var endInset = this.insets.getEnd(this.direction);
        var spacing = this.spacing.get(this.direction);
        var itemSizeAndSpacing = this.itemSize.get(this.direction) + spacing;
        var size = startInset + sectionCount * itemSizeAndSpacing + endInset;
        return __WEBPACK_IMPORTED_MODULE_0__types__["g" /* Size */].in(this.direction, size, otherSize);
    };
    GridLayout.prototype.convertPositionInSize = function (position, newContainerSize, oldLayout) {
        var oldGridLayout = oldLayout instanceof GridLayout
            ? oldLayout
            : this;
        var oldDirection = oldGridLayout.direction;
        var oldPosition = position.get(oldDirection);
        var oldSpacing = oldGridLayout.spacing.get(oldDirection);
        var oldItemSizeAndSpacing = oldGridLayout.itemSize.get(oldDirection) + oldSpacing;
        var oldSectionIndex = Math.floor(oldPosition / oldItemSizeAndSpacing);
        var oldItemIndex = oldSectionIndex * oldGridLayout._otherItemCount;
        var oldItemOffset = oldPosition % oldItemSizeAndSpacing;
        var newItemCount = this.getOtherItemCount(newContainerSize);
        var newSectionIndex = Math.floor(oldItemIndex / newItemCount);
        var newDirection = this.direction;
        var newSpacing = this.spacing.get(newDirection);
        var newItemSizeAndSpacing = this.itemSize.get(newDirection) + newSpacing;
        var newPosition = newSectionIndex * newItemSizeAndSpacing + oldItemOffset;
        return __WEBPACK_IMPORTED_MODULE_0__types__["d" /* Position */].in(this.direction, newPosition, 0);
    };
    GridLayout.DEFAULT_DIRECTION = __WEBPACK_IMPORTED_MODULE_0__types__["a" /* Direction */].VERTICAL;
    GridLayout.DEFAULT_INSETS = new __WEBPACK_IMPORTED_MODULE_0__types__["b" /* Insets */](10, 10, 10, 10);
    GridLayout.DEFAULT_SPACING = new __WEBPACK_IMPORTED_MODULE_0__types__["h" /* Spacing */](20, 20);
    GridLayout.DEFAULT_ITEM_SIZE = new __WEBPACK_IMPORTED_MODULE_0__types__["g" /* Size */](200, 200);
    return GridLayout;
}());
/* harmony default export */ __webpack_exports__["a"] = (GridLayout);


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__types__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(1);


var ListLayout = /** @class */ (function () {
    function ListLayout(rowHeight) {
        if (rowHeight === void 0) { rowHeight = ListLayout.DEFAULT_ROW_HEIGHT; }
        this.rowHeight = rowHeight;
    }
    ListLayout.prototype.configureElement = function (element, index) {
        element.style.height = this.rowHeight + "px";
    };
    ListLayout.prototype.getIndices = function (ranges, count, containerSize) {
        var _a = ranges.vertical, offset = _a.start, endOffset = _a.end;
        var startIndex = Math.max(0, Math.floor(offset / this.rowHeight));
        var endIndex = Math.min(Math.ceil(endOffset / this.rowHeight), count);
        return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["d" /* range */])(startIndex, endIndex);
    };
    ListLayout.prototype.getElementPosition = function (index) {
        return new __WEBPACK_IMPORTED_MODULE_0__types__["d" /* Position */](0, index * this.rowHeight);
    };
    ListLayout.prototype.getContentSize = function (count, containerSize) {
        var containerWidth = containerSize.width;
        return new __WEBPACK_IMPORTED_MODULE_0__types__["g" /* Size */](containerWidth, count * this.rowHeight);
    };
    ListLayout.prototype.convertPositionInSize = function (_a, newContainerSize, oldLayout) {
        var x = _a.x, y = _a.y;
        var oldListLayout = oldLayout instanceof ListLayout
            ? oldLayout
            : this;
        var oldRowIndex = Math.floor(y / oldListLayout.rowHeight);
        var oldRowOffset = y % oldListLayout.rowHeight;
        var newY = oldRowIndex * this.rowHeight + oldRowOffset;
        return new __WEBPACK_IMPORTED_MODULE_0__types__["d" /* Position */](x, newY);
    };
    ListLayout.DEFAULT_ROW_HEIGHT = 200;
    return ListLayout;
}());
/* harmony default export */ __webpack_exports__["a"] = (ListLayout);


/***/ })
/******/ ]);
});
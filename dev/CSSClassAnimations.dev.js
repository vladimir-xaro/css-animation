(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("$", [], factory);
	else if(typeof exports === 'object')
		exports["$"] = factory();
	else
		root["$"] = factory();
})(self, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/index.scss":
/*!*****************************!*
  !*** ./src/scss/index.scss ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/@xaro/event-emitter/src/EventEmitter.ts":
/*!**************************************************************!*
  !*** ./node_modules/@xaro/event-emitter/src/EventEmitter.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var __values = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var EventEmitter = /** @class */ (function () {
    /**
     * Create Emitter
     */
    function EventEmitter(on) {
        if (on === void 0) { on = {}; }
        /**
         * Event list
         */
        this.events = {};
        for (var key in on) {
            if (on[key]) {
                this.subscribe(key, on[key]);
            }
        }
    }
    /**
     * Creates a key for the event and subscribes the passed callback to it.
     */
    EventEmitter.prototype.subscribe = function (key, cb) {
        var e_1, _a;
        var _this = this;
        if (!this.has(key)) {
            this.events[key] = [];
        }
        var removes = [];
        if (Array.isArray(cb)) {
            try {
                for (var cb_1 = __values(cb), cb_1_1 = cb_1.next(); !cb_1_1.done; cb_1_1 = cb_1.next()) {
                    var _cb = cb_1_1.value;
                    removes.push.apply(removes, __spread(this.subscribe(key, _cb)));
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (cb_1_1 && !cb_1_1.done && (_a = cb_1.return)) _a.call(cb_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        else {
            this.events[key].push(cb);
            removes.push(function () { return _this.removeListener(key, cb); });
        }
        return removes;
    };
    /**
     * Unsubscribes all callback functions from the event and removes the event
     * key.
     */
    EventEmitter.prototype.unsubscribe = function () {
        var e_2, _a;
        var keys = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            keys[_i] = arguments[_i];
        }
        try {
            for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
                var key = keys_1_1.value;
                if (this.events[key]) {
                    delete this.events[key];
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    /**
     * Removes a specific event key callback function.
     */
    EventEmitter.prototype.removeListener = function (key, cb) {
        // if (typeof this.events[key] === 'object') {
        if (Array.isArray(this.events[key])) {
            var idx = this.events[key].indexOf(cb);
            if (idx > -1) {
                this.events[key].splice(idx, 1);
            }
        }
    };
    /**
     * Calls the callback function only once, and then removes it.
     */
    EventEmitter.prototype.once = function (key, cb) {
        var remove = this.subscribe(key, function () {
            var e_3, _a;
            remove[0]();
            if (Array.isArray(cb)) {
                try {
                    for (var cb_2 = __values(cb), cb_2_1 = cb_2.next(); !cb_2_1.done; cb_2_1 = cb_2.next()) {
                        var _cb = cb_2_1.value;
                        _cb();
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (cb_2_1 && !cb_2_1.done && (_a = cb_2.return)) _a.call(cb_2);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
            }
            else {
                cb();
            }
        });
    };
    /**
     * Checks for an event by key.
     * (Doesn't check for callback functions)
     */
    EventEmitter.prototype.has = function (key) {
        return !!this.events[key];
    };
    /**
     * Returns the number of callback functions for the event key or "false" if
     * there is no key
     */
    EventEmitter.prototype.listenerCount = function (key) {
        if (!this.events.hasOwnProperty(key)) {
            return false;
        }
        return this.events[key].length;
    };
    /**
     * Calls all callback functions on events using the event key.
     */
    EventEmitter.prototype.emit = function (key) {
        var e_4, _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var event = this.events[key];
        if (event) {
            try {
                for (var event_1 = __values(event), event_1_1 = event_1.next(); !event_1_1.done; event_1_1 = event_1.next()) {
                    var cb = event_1_1.value;
                    cb.apply(void 0, __spread(args));
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (event_1_1 && !event_1_1.done && (_a = event_1.return)) _a.call(event_1);
                }
                finally { if (e_4) throw e_4.error; }
            }
        }
    };
    /**
     * Just like "emit" calls all callback functions. However, the callback must
     * return a boolean value, which determines whether or not the next callback
     * will execute.
     * As a result, it returns the result of the last executed callback function.
     */
    EventEmitter.prototype.validateEmit = function (key) {
        var e_5, _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var event = this.events[key];
        if (!event) {
            return false;
        }
        try {
            for (var event_2 = __values(event), event_2_1 = event_2.next(); !event_2_1.done; event_2_1 = event_2.next()) {
                var cb = event_2_1.value;
                if (!cb.apply(void 0, __spread(args))) {
                    return false;
                }
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (event_2_1 && !event_2_1.done && (_a = event_2.return)) _a.call(event_2);
            }
            finally { if (e_5) throw e_5.error; }
        }
        return true;
    };
    /**
     * Just like "emit" calls all callbacks, but unlike "emit" it passes the
     * result of the previous callback to the next one as an argument.
     * As aresult, it will return the result of the last callback.
     */
    EventEmitter.prototype.seriesEmit = function (key) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var event = this.events[key];
        if (!event) {
            return;
        }
        var params;
        for (var i = 0; i < event.length; i++) {
            if (i === 0) {
                params = event[i].apply(event, __spread(args));
            }
            else {
                params = event[i](params);
            }
        }
        return params;
    };
    return EventEmitter;
}());
/* harmony default export */ __webpack_exports__["default"] = (EventEmitter);


/***/ }),

/***/ "./node_modules/@xaro/event-emitter/src/index.ts":
/*!*******************************************************!*
  !*** ./node_modules/@xaro/event-emitter/src/index.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EventEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventEmitter */ "./node_modules/@xaro/event-emitter/src/EventEmitter.ts");

/* harmony default export */ __webpack_exports__["default"] = (_EventEmitter__WEBPACK_IMPORTED_MODULE_0__.default);


/***/ }),

/***/ "./node_modules/@xaro/micro-dom/src/MicroDOM.ts":
/*!******************************************************!*
  !*** ./node_modules/@xaro/micro-dom/src/MicroDOM.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./node_modules/@xaro/micro-dom/src/helpers.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __values = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};

var MicroDOM = /** @class */ (function (_super) {
    __extends(MicroDOM, _super);
    function MicroDOM() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return _super.apply(this, __spread(args)) || this;
    }
    MicroDOM.prototype.get = function () {
        var e_1, _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var newInstance = new MicroDOM();
        if (this.length) {
            try {
                for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var el = _c.value;
                    newInstance.push.apply(newInstance, __spread(_helpers__WEBPACK_IMPORTED_MODULE_0__.getEls.apply(void 0, __spread([el], args))));
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        else {
            newInstance.push.apply(newInstance, __spread(_helpers__WEBPACK_IMPORTED_MODULE_0__.getEls.apply(void 0, __spread([document], args))));
        }
        return newInstance;
    };
    MicroDOM.prototype.create = function () {
        var e_2, _a;
        var entities = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            entities[_i] = arguments[_i];
        }
        var newInstance = new MicroDOM();
        try {
            for (var entities_1 = __values(entities), entities_1_1 = entities_1.next(); !entities_1_1.done; entities_1_1 = entities_1.next()) {
                var entity = entities_1_1.value;
                if (typeof entity === 'string') {
                    newInstance.push(document.createElement(entity));
                }
                else if (entity instanceof Object) {
                    var el = document.createElement(entity.tagName || 'div');
                    if (entity.content) {
                        if (Array.isArray(entity.content)) {
                            _helpers__WEBPACK_IMPORTED_MODULE_0__.recursiveAppend.apply(void 0, __spread([el], entity.content));
                        }
                        else {
                            (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.recursiveAppend)(el, entity.content);
                        }
                    }
                    newInstance.push(el);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (entities_1_1 && !entities_1_1.done && (_a = entities_1.return)) _a.call(entities_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return newInstance;
    };
    MicroDOM.prototype.empty = function () {
        var e_3, _a;
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var el = _c.value;
                el.innerHTML = '';
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return this;
    };
    MicroDOM.prototype.text = function (text) {
        var e_4, _a;
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var el = _c.value;
                el.textContent = text || '';
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return this;
    };
    MicroDOM.prototype.append = function () {
        var e_5, _a;
        var append = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            append[_i] = arguments[_i];
        }
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var el = _c.value;
                _helpers__WEBPACK_IMPORTED_MODULE_0__.recursiveAppend.apply(void 0, __spread([el], append));
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_5) throw e_5.error; }
        }
        return this;
    };
    MicroDOM.prototype.addClass = function () {
        var e_6, _a, _b;
        var classes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            classes[_i] = arguments[_i];
        }
        try {
            for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
                var el = _d.value;
                (_b = el.classList).add.apply(_b, __spread(classes));
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_6) throw e_6.error; }
        }
        return this;
    };
    MicroDOM.prototype.removeClass = function () {
        var e_7, _a, _b;
        var classes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            classes[_i] = arguments[_i];
        }
        try {
            for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
                var el = _d.value;
                (_b = el.classList).remove.apply(_b, __spread(classes));
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_7) throw e_7.error; }
        }
        return this;
    };
    MicroDOM.prototype.toggleClass = function (classname) {
        var e_8, _a;
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var el = _c.value;
                el.classList.toggle(classname);
            }
        }
        catch (e_8_1) { e_8 = { error: e_8_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_8) throw e_8.error; }
        }
        return this;
    };
    MicroDOM.prototype.hasClass = function (classname, reqtForAll) {
        var e_9, _a, e_10, _b;
        if (reqtForAll === void 0) { reqtForAll = false; }
        if (reqtForAll) { // The presence of a class for each element of the set
            var number = 0;
            try {
                for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var el = _d.value;
                    if (el.classList.contains(classname)) {
                        number++;
                    }
                }
            }
            catch (e_9_1) { e_9 = { error: e_9_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_9) throw e_9.error; }
            }
            return number === this.length;
        }
        else { // the presence of a class for at least one element of the set
            try {
                for (var _e = __values(this), _f = _e.next(); !_f.done; _f = _e.next()) {
                    var el = _f.value;
                    if (el.classList.contains(classname)) {
                        return true;
                    }
                }
            }
            catch (e_10_1) { e_10 = { error: e_10_1 }; }
            finally {
                try {
                    if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                }
                finally { if (e_10) throw e_10.error; }
            }
            return false;
        }
    };
    MicroDOM.prototype.addEventListener = function (type, listener, options) {
        var e_11, _a;
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var el = _c.value;
                el.addEventListener(type, listener, options);
            }
        }
        catch (e_11_1) { e_11 = { error: e_11_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_11) throw e_11.error; }
        }
        return this;
    };
    MicroDOM.prototype.removeEventListener = function (type, listener, options) {
        var e_12, _a;
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var el = _c.value;
                el.removeEventListener(type, listener, options);
            }
        }
        catch (e_12_1) { e_12 = { error: e_12_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_12) throw e_12.error; }
        }
        return this;
    };
    MicroDOM.prototype.css = function (obj) {
        var e_13, _a;
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var el = _c.value;
                for (var key in obj) {
                    el.style[key] = obj[key];
                }
            }
        }
        catch (e_13_1) { e_13 = { error: e_13_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_13) throw e_13.error; }
        }
        return this;
    };
    MicroDOM.prototype.attr = function (obj) {
        var e_14, _a;
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var el = _c.value;
                for (var key in obj) {
                    el.setAttribute(key, obj[key]);
                }
            }
        }
        catch (e_14_1) { e_14 = { error: e_14_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_14) throw e_14.error; }
        }
        return this;
    };
    MicroDOM.prototype.nextTick = function () {
        var _this = this;
        var cbs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            cbs[_i] = arguments[_i];
        }
        var arr = cbs;
        var current = cbs.shift();
        current && setTimeout(function () {
            current();
            if (arr.length) {
                _this.nextTick.apply(_this, __spread(arr));
            }
        }, 0);
        return this;
    };
    return MicroDOM;
}(Array));
/* harmony default export */ __webpack_exports__["default"] = (MicroDOM);


/***/ }),

/***/ "./node_modules/@xaro/micro-dom/src/entry.ts":
/*!***************************************************!*
  !*** ./node_modules/@xaro/micro-dom/src/entry.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _; }
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./node_modules/@xaro/micro-dom/src/helpers.ts");
/* harmony import */ var _MicroDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MicroDOM */ "./node_modules/@xaro/micro-dom/src/MicroDOM.ts");
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};


function _() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (args instanceof _MicroDOM__WEBPACK_IMPORTED_MODULE_1__.default) {
        return args;
    }
    return new (_MicroDOM__WEBPACK_IMPORTED_MODULE_1__.default.bind.apply(_MicroDOM__WEBPACK_IMPORTED_MODULE_1__.default, __spread([void 0], _helpers__WEBPACK_IMPORTED_MODULE_0__.getEls.apply(void 0, __spread([document], args)))))();
}


/***/ }),

/***/ "./node_modules/@xaro/micro-dom/src/helpers.ts":
/*!*****************************************************!*
  !*** ./node_modules/@xaro/micro-dom/src/helpers.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getEls": function() { return /* binding */ getEls; },
/* harmony export */   "recursiveAppend": function() { return /* binding */ recursiveAppend; }
/* harmony export */ });
var __values = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
function getEls(target) {
    var e_1, _a;
    var els = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        els[_i - 1] = arguments[_i];
    }
    var arr = [];
    try {
        for (var els_1 = __values(els), els_1_1 = els_1.next(); !els_1_1.done; els_1_1 = els_1.next()) {
            var el = els_1_1.value;
            if (typeof el === 'string') {
                var nodes = target.querySelectorAll(el);
                arr.push.apply(arr, __spread(nodes));
            }
            else if (el instanceof Element) {
                arr.push(el);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (els_1_1 && !els_1_1.done && (_a = els_1.return)) _a.call(els_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return arr;
}
function recursiveAppend(el) {
    var e_2, _a;
    var content = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        content[_i - 1] = arguments[_i];
    }
    try {
        for (var content_1 = __values(content), content_1_1 = content_1.next(); !content_1_1.done; content_1_1 = content_1.next()) {
            var entity = content_1_1.value;
            if (Array.isArray(entity)) {
                recursiveAppend.apply(void 0, __spread([el], entity));
            }
            else {
                el.append(entity);
            }
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (content_1_1 && !content_1_1.done && (_a = content_1.return)) _a.call(content_1);
        }
        finally { if (e_2) throw e_2.error; }
    }
}


/***/ }),

/***/ "./node_modules/@xaro/micro-dom/src/index.ts":
/*!***************************************************!*
  !*** ./node_modules/@xaro/micro-dom/src/index.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MicroDOM": function() { return /* reexport safe */ _MicroDOM__WEBPACK_IMPORTED_MODULE_1__.default; }
/* harmony export */ });
/* harmony import */ var _entry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entry */ "./node_modules/@xaro/micro-dom/src/entry.ts");
/* harmony import */ var _MicroDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MicroDOM */ "./node_modules/@xaro/micro-dom/src/MicroDOM.ts");

/* harmony default export */ __webpack_exports__["default"] = (_entry__WEBPACK_IMPORTED_MODULE_0__.default);
// ===




/***/ }),

/***/ "./src/CSSClassAnimations.ts":
/*!***********************************!*
  !*** ./src/CSSClassAnimations.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _xaro_event_emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @xaro/event-emitter */ "./node_modules/@xaro/event-emitter/src/index.ts");
/* harmony import */ var _xaro_micro_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @xaro/micro-dom */ "./node_modules/@xaro/micro-dom/src/index.ts");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variables */ "./src/variables.ts");
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __values = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};



var CSSClassAnimations = /** @class */ (function () {
    function CSSClassAnimations(config) {
        var e_1, _a, e_2, _b;
        this.emitter = new _xaro_event_emitter__WEBPACK_IMPORTED_MODULE_0__.default(config.on);
        if (Array.isArray(config.el)) {
            this.els = _xaro_micro_dom__WEBPACK_IMPORTED_MODULE_1__.default.apply(void 0, __spread(config.el));
        }
        else {
            this.els = (0,_xaro_micro_dom__WEBPACK_IMPORTED_MODULE_1__.default)(config.el);
        }
        if (config.allow) {
            this.allow = (Array.isArray(config.allow) ? config.allow : [config.allow]).filter(function (value) { return _variables__WEBPACK_IMPORTED_MODULE_2__.events.includes(value); });
        }
        else if (config.disallow) {
            this.allow = (Array.isArray(config.disallow) ? config.disallow : [config.disallow]).filter(function (value) { return _variables__WEBPACK_IMPORTED_MODULE_2__.events.includes(value); });
        }
        else {
            this.allow = _variables__WEBPACK_IMPORTED_MODULE_2__.events;
        }
        for (var key in _variables__WEBPACK_IMPORTED_MODULE_2__.eventsListeners) {
            this[_variables__WEBPACK_IMPORTED_MODULE_2__.eventsListeners[key]] = this[_variables__WEBPACK_IMPORTED_MODULE_2__.eventsListeners[key]].bind(this);
        }
        try {
            for (var _c = __values(this.els), _d = _c.next(); !_d.done; _d = _c.next()) {
                var el = _d.value;
                try {
                    for (var _e = (e_2 = void 0, __values(this.allow)), _f = _e.next(); !_f.done; _f = _e.next()) {
                        var event_1 = _f.value;
                        el.addEventListener(event_1, this[_variables__WEBPACK_IMPORTED_MODULE_2__.eventsListeners[event_1]]);
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    CSSClassAnimations.prototype.__mutationStartListener = function (event) {
        this.emitter.emit('start', this, event);
    };
    CSSClassAnimations.prototype.__mutationCancelListener = function (event) {
        this.emitter.emit('cancel', this, event);
    };
    CSSClassAnimations.prototype.__mutationEndListener = function (event) {
        this.emitter.emit('end', this, event);
    };
    CSSClassAnimations.prototype.__mutationIterationListener = function (event) {
        this.emitter.emit('iteration', this, event);
    };
    CSSClassAnimations.prototype.__mutationRunListener = function (event) {
        this.emitter.emit('run', this, event);
    };
    CSSClassAnimations.prototype.addEvent = function (domEventKey) {
        var e_3, _a;
        if (!this.allow.includes(domEventKey)) {
            return;
        }
        try {
            for (var _b = __values(this.els), _c = _b.next(); !_c.done; _c = _b.next()) {
                var el = _c.value;
                el.addEventListener(domEventKey, this[_variables__WEBPACK_IMPORTED_MODULE_2__.eventsListeners[domEventKey]]);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
    };
    CSSClassAnimations.prototype.removeEvent = function (domEventKey) {
        var e_4, _a;
        if (!this.allow.includes(domEventKey)) {
            return;
        }
        try {
            for (var _b = __values(this.els), _c = _b.next(); !_c.done; _c = _b.next()) {
                var el = _c.value;
                el.removeEventListener(domEventKey, this[_variables__WEBPACK_IMPORTED_MODULE_2__.eventsListeners[domEventKey]]);
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
    };
    CSSClassAnimations.prototype.on = function (eventKey, cb) {
        this.emitter.subscribe(eventKey, cb);
    };
    return CSSClassAnimations;
}());
/* harmony default export */ __webpack_exports__["default"] = (CSSClassAnimations);


/***/ }),

/***/ "./src/index.dev.ts":
/*!**************************!*
  !*** ./src/index.dev.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/index.scss */ "./src/scss/index.scss");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ */ "./src/index.ts");
var __values = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var _a, _b;


var animation = new ___WEBPACK_IMPORTED_MODULE_1__.default({
    el: '.el',
    // allow: [
    //   'transitionend',
    //   'animationiteration'
    // ],
    allow: 'transitionend',
    // disallow: [
    //   'animationiteration',
    //   'transitionend'
    // ],
    on: {
        start: function (event) {
            console.log('[start]', event);
        },
        cancel: function (event) {
            console.log('[cancel]', event);
        },
        end: function (event) {
            console.log('[end]', event);
        },
        iteration: function (event) {
            console.log('[iteration]', event);
        },
        run: function (event) {
            console.log('[run]', event);
        },
    }
});
window.animation = animation;
(_a = document.querySelector('.toggle--animation')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var e_1, _a;
    var classname = 'el--animation-fade-out';
    try {
        for (var _b = __values(animation.els), _c = _b.next(); !_c.done; _c = _b.next()) {
            var el = _c.value;
            el.classList[el.classList.contains(classname) ? 'remove' : 'add'](classname);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
});
(_b = document.querySelector('.toggle--transition')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    var e_2, _a;
    var classname = 'el--transition-fade-out';
    try {
        for (var _b = __values(animation.els), _c = _b.next(); !_c.done; _c = _b.next()) {
            var el = _c.value;
            el.classList[el.classList.contains(classname) ? 'remove' : 'add'](classname);
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_2) throw e_2.error; }
    }
});


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CSSClassAnimations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CSSClassAnimations */ "./src/CSSClassAnimations.ts");

/* harmony default export */ __webpack_exports__["default"] = (_CSSClassAnimations__WEBPACK_IMPORTED_MODULE_0__.default);


/***/ }),

/***/ "./src/variables.ts":
/*!**************************!*
  !*** ./src/variables.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "eventsListeners": function() { return /* binding */ eventsListeners; },
/* harmony export */   "events": function() { return /* binding */ events; }
/* harmony export */ });
var eventsListeners = {
    animationstart: '__mutationStartListener',
    animationcancel: '__mutationCancelListener',
    animationend: '__mutationEndListener',
    animationiteration: '__mutationIterationListener',
    transitionstart: '__mutationStartListener',
    transitioncancel: '__mutationCancelListener',
    transitionend: '__mutationEndListener',
    transitionrun: '__mutationRunListener'
};
var events = Object.keys(eventsListeners);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/index.dev.ts");
/******/ })()
.default;
});
//# sourceMappingURL=CSSClassAnimations.dev.js.map
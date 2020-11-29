(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["CSSClassAnimations"] = factory();
	else
		root["CSSClassAnimations"] = factory();
})(this, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 864:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ src_0; }
});

;// CONCATENATED MODULE: ./node_modules/@xaro/event-emitter/src/EventEmitter.ts
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
/* harmony default export */ var src_EventEmitter = (EventEmitter);

;// CONCATENATED MODULE: ./node_modules/@xaro/event-emitter/src/index.ts

/* harmony default export */ var src = (src_EventEmitter);

;// CONCATENATED MODULE: ./node_modules/@xaro/micro-dom/src/helpers.ts
var helpers_values = (undefined && undefined.__values) || function(o) {
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
var helpers_read = (undefined && undefined.__read) || function (o, n) {
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
var helpers_spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(helpers_read(arguments[i]));
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
        for (var els_1 = helpers_values(els), els_1_1 = els_1.next(); !els_1_1.done; els_1_1 = els_1.next()) {
            var el = els_1_1.value;
            if (typeof el === 'string') {
                var nodes = target.querySelectorAll(el);
                arr.push.apply(arr, helpers_spread(nodes));
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
        for (var content_1 = helpers_values(content), content_1_1 = content_1.next(); !content_1_1.done; content_1_1 = content_1.next()) {
            var entity = content_1_1.value;
            if (Array.isArray(entity)) {
                recursiveAppend.apply(void 0, helpers_spread([el], entity));
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

;// CONCATENATED MODULE: ./node_modules/@xaro/micro-dom/src/MicroDOM.ts
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
var MicroDOM_read = (undefined && undefined.__read) || function (o, n) {
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
var MicroDOM_spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(MicroDOM_read(arguments[i]));
    return ar;
};
var MicroDOM_values = (undefined && undefined.__values) || function(o) {
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
        return _super.apply(this, MicroDOM_spread(args)) || this;
    }
    MicroDOM.prototype.get = function () {
        var e_1, _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var newInstance = new MicroDOM;
        if (this.length) {
            try {
                for (var _b = MicroDOM_values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var el = _c.value;
                    newInstance.push.apply(newInstance, MicroDOM_spread(getEls.apply(void 0, MicroDOM_spread([el], args))));
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
            newInstance.push.apply(newInstance, MicroDOM_spread(getEls.apply(void 0, MicroDOM_spread([document], args))));
        }
        return newInstance;
    };
    MicroDOM.prototype.create = function () {
        var e_2, _a;
        var entities = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            entities[_i] = arguments[_i];
        }
        var newInstance = new MicroDOM;
        try {
            for (var entities_1 = MicroDOM_values(entities), entities_1_1 = entities_1.next(); !entities_1_1.done; entities_1_1 = entities_1.next()) {
                var entity = entities_1_1.value;
                if (typeof entity === 'string') {
                    newInstance.push(document.createElement(entity));
                }
                else if (entity instanceof Object) {
                    var el = document.createElement(entity.tagName || 'div');
                    if (entity.content) {
                        if (Array.isArray(entity.content)) {
                            recursiveAppend.apply(void 0, MicroDOM_spread([el], entity.content));
                        }
                        else {
                            recursiveAppend(el, entity.content);
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
            for (var _b = MicroDOM_values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
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
    MicroDOM.prototype.append = function () {
        var e_4, _a;
        var append = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            append[_i] = arguments[_i];
        }
        try {
            for (var _b = MicroDOM_values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var el = _c.value;
                recursiveAppend.apply(void 0, MicroDOM_spread([el], append));
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
    MicroDOM.prototype.addClass = function () {
        var e_5, _a, _b;
        var classes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            classes[_i] = arguments[_i];
        }
        try {
            for (var _c = MicroDOM_values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
                var el = _d.value;
                (_b = el.classList).add.apply(_b, MicroDOM_spread(classes));
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_5) throw e_5.error; }
        }
        return this;
    };
    MicroDOM.prototype.removeClass = function () {
        var e_6, _a, _b;
        var classes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            classes[_i] = arguments[_i];
        }
        try {
            for (var _c = MicroDOM_values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
                var el = _d.value;
                (_b = el.classList).remove.apply(_b, MicroDOM_spread(classes));
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
    MicroDOM.prototype.toggleClass = function (classname) {
        var e_7, _a;
        try {
            for (var _b = MicroDOM_values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var el = _c.value;
                el.classList.toggle(classname);
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_7) throw e_7.error; }
        }
        return this;
    };
    MicroDOM.prototype.css = function (obj) {
        var e_8, _a;
        try {
            for (var _b = MicroDOM_values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var el = _c.value;
                for (var key in obj) {
                    el.style[key] = obj[key];
                }
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
    MicroDOM.prototype.attr = function (obj) {
        var e_9, _a;
        try {
            for (var _b = MicroDOM_values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var el = _c.value;
                for (var key in obj) {
                    el.setAttribute(key, obj[key]);
                }
            }
        }
        catch (e_9_1) { e_9 = { error: e_9_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_9) throw e_9.error; }
        }
        return this;
    };
    return MicroDOM;
}(Array));
/* harmony default export */ var src_MicroDOM = (MicroDOM);

;// CONCATENATED MODULE: ./node_modules/@xaro/micro-dom/src/entry.ts
var entry_read = (undefined && undefined.__read) || function (o, n) {
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
var entry_spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(entry_read(arguments[i]));
    return ar;
};


function _() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (args instanceof src_MicroDOM) {
        return args;
    }
    return new (src_MicroDOM.bind.apply(src_MicroDOM, entry_spread([void 0], getEls.apply(void 0, entry_spread([document], args)))))();
}

;// CONCATENATED MODULE: ./node_modules/@xaro/micro-dom/src/index.ts

/* harmony default export */ var micro_dom_src = (_);

;// CONCATENATED MODULE: ./src/variables.ts
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

;// CONCATENATED MODULE: ./src/CSSClassAnimations.ts
var CSSClassAnimations_read = (undefined && undefined.__read) || function (o, n) {
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
var CSSClassAnimations_spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(CSSClassAnimations_read(arguments[i]));
    return ar;
};
var CSSClassAnimations_values = (undefined && undefined.__values) || function(o) {
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
        this.emitter = new src(config.on);
        if (Array.isArray(config.el)) {
            this.els = micro_dom_src.apply(void 0, CSSClassAnimations_spread(config.el));
        }
        else {
            this.els = micro_dom_src(config.el);
        }
        if (config.allow) {
            this.allow = (Array.isArray(config.allow) ? config.allow : [config.allow]).filter(function (value) { return events.includes(value); });
        }
        else if (config.disallow) {
            this.allow = (Array.isArray(config.disallow) ? config.disallow : [config.disallow]).filter(function (value) { return events.includes(value); });
        }
        else {
            this.allow = events;
        }
        for (var key in eventsListeners) {
            this[eventsListeners[key]] = this[eventsListeners[key]].bind(this);
        }
        try {
            for (var _c = CSSClassAnimations_values(this.els), _d = _c.next(); !_d.done; _d = _c.next()) {
                var el = _d.value;
                try {
                    for (var _e = (e_2 = void 0, CSSClassAnimations_values(this.allow)), _f = _e.next(); !_f.done; _f = _e.next()) {
                        var event_1 = _f.value;
                        el.addEventListener(event_1, this[eventsListeners[event_1]]);
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
            for (var _b = CSSClassAnimations_values(this.els), _c = _b.next(); !_c.done; _c = _b.next()) {
                var el = _c.value;
                el.addEventListener(domEventKey, this[eventsListeners[domEventKey]]);
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
            for (var _b = CSSClassAnimations_values(this.els), _c = _b.next(); !_c.done; _c = _b.next()) {
                var el = _c.value;
                el.removeEventListener(domEventKey, this[eventsListeners[domEventKey]]);
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
    CSSClassAnimations.prototype.addClass = function () {
        var e_5, _a, _b;
        var classes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            classes[_i] = arguments[_i];
        }
        try {
            for (var _c = CSSClassAnimations_values(this.els), _d = _c.next(); !_d.done; _d = _c.next()) {
                var el = _d.value;
                (_b = el.classList).add.apply(_b, CSSClassAnimations_spread(classes));
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_5) throw e_5.error; }
        }
        return this.els;
    };
    CSSClassAnimations.prototype.removeClass = function () {
        var e_6, _a, _b;
        var classes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            classes[_i] = arguments[_i];
        }
        try {
            for (var _c = CSSClassAnimations_values(this.els), _d = _c.next(); !_d.done; _d = _c.next()) {
                var el = _d.value;
                (_b = el.classList).remove.apply(_b, CSSClassAnimations_spread(classes));
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_6) throw e_6.error; }
        }
        return this.els;
    };
    CSSClassAnimations.prototype.on = function (eventKey, cb) {
        this.emitter.subscribe(eventKey, cb);
    };
    return CSSClassAnimations;
}());
/* harmony default export */ var src_CSSClassAnimations = (CSSClassAnimations);

;// CONCATENATED MODULE: ./src/index.ts

/* harmony default export */ var src_0 = (src_CSSClassAnimations);


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
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(864);
/******/ })()
.default;
});
//# sourceMappingURL=CSSClassAnimations.js.map
var CSSClassAnimations = function() {
    "use strict";
    function t(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    function e(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(t, r.key, r);
        }
    }
    function n(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
    }
    function r(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t;
    }
    function i(t) {
        return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t);
        })(t);
    }
    function o(t, e) {
        return (o = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t;
        })(t, e);
    }
    function a() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), 
            !0;
        } catch (t) {
            return !1;
        }
    }
    function u(t, e, n) {
        return (u = a() ? Reflect.construct : function(t, e, n) {
            var r = [ null ];
            r.push.apply(r, e);
            var i = new (Function.bind.apply(t, r));
            return n && o(i, n.prototype), i;
        }).apply(null, arguments);
    }
    function s(t) {
        var e = "function" == typeof Map ? new Map : void 0;
        return (s = function(t) {
            if (null === t || (n = t, -1 === Function.toString.call(n).indexOf("[native code]"))) return t;
            var n;
            if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, r);
            }
            function r() {
                return u(t, arguments, i(this).constructor);
            }
            return r.prototype = Object.create(t.prototype, {
                constructor: {
                    value: r,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), o(r, t);
        })(t);
    }
    function c(t, e) {
        return !e || "object" != typeof e && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t;
        }(t) : e;
    }
    function l(t) {
        return function(t) {
            if (Array.isArray(t)) return h(t);
        }(t) || function(t) {
            if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t);
        }(t) || f(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
    }
    function f(t, e) {
        if (t) {
            if ("string" == typeof t) return h(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? h(t, e) : void 0;
        }
    }
    function h(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
    }
    function v(t, e) {
        var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (!n) {
            if (Array.isArray(t) || (n = f(t)) || e && t && "number" == typeof t.length) {
                n && (t = n);
                var r = 0, i = function() {};
                return {
                    s: i,
                    n: function() {
                        return r >= t.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: t[r++]
                        };
                    },
                    e: function(t) {
                        throw t;
                    },
                    f: i
                };
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var o, a = !0, u = !1;
        return {
            s: function() {
                n = n.call(t);
            },
            n: function() {
                var t = n.next();
                return a = t.done, t;
            },
            e: function(t) {
                u = !0, o = t;
            },
            f: function() {
                try {
                    a || null == n.return || n.return();
                } finally {
                    if (u) throw o;
                }
            }
        };
    }
    var y =  function() {
        /**
     * Event list
     */
        /**
     * Create Emitter
     */
        function e() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            for (var i in t(this, e), r(this, "events", {}), n) n[i] && this.subscribe(i, n[i]);
        }
        /**
     * Creates a key for the event and subscribes the passed callback to it.
     */        return n(e, [ {
            key: "subscribe",
            value: function(t, e) {
                var n = this;
                this.has(t) || (this.events[t] = []);
                var r = [];
                if (Array.isArray(e)) {
                    var i, o = v(e);
                    try {
                        for (o.s(); !(i = o.n()).done; ) {
                            var a = i.value;
                            r.push.apply(r, l(this.subscribe(t, a)));
                        }
                    } catch (t) {
                        o.e(t);
                    } finally {
                        o.f();
                    }
                } else this.events[t].push(e), r.push((function() {
                    return n.removeListener(t, e);
                }));
                return r;
            }
            /**
       * Unsubscribes all callback functions from the event and removes the event
       * key.
       */        }, {
            key: "unsubscribe",
            value: function() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                for (var r = 0, i = e; r < i.length; r++) {
                    var o = i[r];
                    this.events[o] && delete this.events[o];
                }
            }
            /**
       * Removes a specific event key callback function.
       */        }, {
            key: "removeListener",
            value: function(t, e) {
                // if (typeof this.events[key] === 'object') {
                if (Array.isArray(this.events[t])) {
                    var n = this.events[t].indexOf(e);
                    n > -1 && this.events[t].splice(n, 1);
                }
            }
            /**
       * Calls the callback function only once, and then removes it.
       */        }, {
            key: "once",
            value: function(t, e) {
                var n = this.subscribe(t, (function() {
                    n[0](), Array.isArray(e) ? e.forEach((function(t) {
                        return t();
                    })) : e();
                }));
            }
            /**
       * Checks for an event by key.
       * (Doesn't check for callback functions)
       */        }, {
            key: "has",
            value: function(t) {
                return !!this.events[t];
            }
            /**
       * Returns the number of callback functions for the event key or "false" if
       * there is no key
       */        }, {
            key: "listenerCount",
            value: function(t) {
                return !!this.events.hasOwnProperty(t) && this.events[t].length;
            }
            /**
       * Calls all callback functions on events using the event key.
       */        }, {
            key: "emit",
            value: function(t) {
                for (var e = this.events[t], n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                if (e) {
                    var o, a = v(e);
                    try {
                        for (a.s(); !(o = a.n()).done; ) {
                            var u = o.value;
                            u.apply(void 0, r);
                        }
                    } catch (t) {
                        a.e(t);
                    } finally {
                        a.f();
                    }
                }
            }
            /**
       * Just like "emit" calls all callback functions. However, the callback must
       * return a boolean value, which determines whether or not the next callback
       * will execute.
       * As a result, it returns the result of the last executed callback function.
       */        }, {
            key: "validateEmit",
            value: function(t) {
                var e = this.events[t];
                if (!e) return !1;
                for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                var o, a = v(e);
                try {
                    for (a.s(); !(o = a.n()).done; ) {
                        var u = o.value;
                        if (!u.apply(void 0, r)) return !1;
                    }
                } catch (t) {
                    a.e(t);
                } finally {
                    a.f();
                }
                return !0;
            }
            /**
       * Just like "emit" calls all callbacks, but unlike "emit" it passes the
       * result of the previous callback to the next one as an argument.
       * As aresult, it will return the result of the last callback.
       */        }, {
            key: "seriesEmit",
            value: function(t) {
                var e = this.events[t];
                if (e) {
                    for (var n, r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) i[o - 1] = arguments[o];
                    for (var a = 0; a < e.length; a++) n = 0 === a ? e[a].apply(e, i) : e[a](n);
                    return n;
                }
            }
        } ]), e;
    }();
    function p(t) {
        for (var e = [], n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
        for (var o = 0, a = r; o < a.length; o++) {
            var u = a[o];
            if ("string" == typeof u) {
                var s = t.querySelectorAll(u);
                e.push.apply(e, l(s));
            } else u instanceof Element && e.push(u);
        }
        return e;
    }
    function d(t) {
        for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
        for (var i = 0, o = n; i < o.length; i++) {
            var a = o[i];
            Array.isArray(a) ? d.apply(void 0, [ t ].concat(l(a))) : t.append(a);
        }
    }
    function m() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        var r = e, i = e.shift();
        return i && setTimeout((function() {
            i(), r.length && m.apply(void 0, r);
        }), 0), this;
    }
    var b =  function(e) {
        !function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && o(t, e);
        }(f, e);
        var r, u, s = (r = f, u = a(), function() {
            var t, e = i(r);
            if (u) {
                var n = i(this).constructor;
                t = Reflect.construct(e, arguments, n);
            } else t = e.apply(this, arguments);
            return c(this, t);
        });
        function f() {
            t(this, f);
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return s.call.apply(s, [ this ].concat(n));
        }
        /**
     * Returns a new instance containing the elements with the passed selectors and elements (or from the document if the current instance is empty)
     */        return n(f, [ {
            key: "get",
            value: function() {
                for (var t = new f, e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                if (this.length) {
                    var i, o = v(this);
                    try {
                        for (o.s(); !(i = o.n()).done; ) {
                            var a = i.value;
                            t.push.apply(t, l(p.apply(void 0, [ a ].concat(n))));
                        }
                    } catch (t) {
                        o.e(t);
                    } finally {
                        o.f();
                    }
                } else t.push.apply(t, l(p.apply(void 0, [ document ].concat(n))));
                return t;
            }
            /**
       * Returns a new instance with new created elements according to the passed parameters
       */        }, {
            key: "create",
            value: function() {
                for (var t = new f, e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                for (var i = 0, o = n; i < o.length; i++) {
                    var a = o[i];
                    if ("string" == typeof a) t.push(document.createElement(a)); else if (a instanceof Object) {
                        var u = document.createElement(a.tagName || "div");
                        a.content && (Array.isArray(a.content) ? d.apply(void 0, [ u ].concat(l(a.content))) : d(u, a.content)), 
                        t.push(u);
                    }
                }
                return t;
            }
            /**
       * Clears the contents of each element in the set and returns the instance itself
       */        }, {
            key: "empty",
            value: function() {
                return this.forEach((function(t) {
                    return t.innerHTML = "";
                })), this
                /**
       * Sets the textContent property for each collection item and returns an instance
       */;
            }
        }, {
            key: "text",
            value: function(t) {
                return this.forEach((function(e) {
                    return e.textContent = t || "";
                })), this
                /**
       * Inserts a set of Node objects or DOMString objects after the last child of each array element
       */;
            }
        }, {
            key: "append",
            value: function() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                return this.forEach((function(t) {
                    return d.apply(void 0, [ t ].concat(e));
                })), this
                /**
       * Adds a class or classes to all array elements
       */;
            }
        }, {
            key: "addClass",
            value: function() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                return this.forEach((function(t) {
                    var n;
                    return (n = t.classList).add.apply(n, e);
                })), this
                /**
       * Removes a class or classes from all array elements
       */;
            }
        }, {
            key: "removeClass",
            value: function() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                return this.forEach((function(t) {
                    var n;
                    return (n = t.classList).remove.apply(n, e);
                })), this
                /**
       * Adds or removes a class for each element of the array, depending on its presence
       */;
            }
        }, {
            key: "toggleClass",
            value: function(t) {
                return this.forEach((function(e) {
                    return e.classList.toggle(t);
                })), this
                /**
       * Determine if any of the agreed members are assigned to this class. Or, if you pass "true" as the second argument, then each element (default: reqtForAll = false)
       */;
            }
        }, {
            key: "hasClass",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (e) {
                    // The presence of a class for each element of the set
                    var n = 0;
                    return this.forEach((function(e) {
                        e.classList.contains(t) && n++;
                    })), n === this.length;
                }
 // the presence of a class for at least one element of the set
                                var r, i = v(this);
                try {
                    for (i.s(); !(r = i.n()).done; ) {
                        var o = r.value;
                        if (o.classList.contains(t)) return !0;
                    }
                } catch (t) {
                    i.e(t);
                } finally {
                    i.f();
                }
                return !1;
            }
            /**
       * Calls the "addEventListener" method for each set item
       */        }, {
            key: "addEventListener",
            value: function(t, e, n) {
                return this.forEach((function(r) {
                    return r.addEventListener(t, e, n);
                })), this
                /**
       * Calls the "removeEventListener" method for each set item
       */;
            }
        }, {
            key: "removeEventListener",
            value: function(t, e, n) {
                return this.forEach((function(r) {
                    return r.removeEventListener(t, e, n);
                })), this
                /**
       * Calls dispatchEvent with an event of the specified type for each item in the set
       */;
            }
        }, {
            key: "fireEvent",
            value: function(t) {
                return this.forEach((function(e) {
                    return e.dispatchEvent(new Event(t));
                })), this
                /**
       * Sets the style attribute property passed in the object by key
       */;
            }
        }, {
            key: "css",
            value: function(t) {
                return this.forEach((function(e) {
                    return Object.keys(t).forEach((function(n) {
                        return e.style[n] = t[n];
                    }));
                })), this
                /**
       * Sets the attribute property passed in the object by key
       */;
            }
        }, {
            key: "attr",
            value: function(t) {
                return this.forEach((function(e) {
                    return Object.keys(t).forEach((function(n) {
                        return e.setAttribute(n, t[n]);
                    }));
                })), this
                /**
       * Recursively calls each passed function in a new setTimeout(() => {}, 0)
       */;
            }
        }, {
            key: "nextTick",
            value: function() {
                return m.apply(void 0, arguments), this;
            }
        } ]), f;
    }( s(Array));
    function g() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        return e instanceof b ? e : u(b, l(p.apply(void 0, [ document ].concat(e))));
    }
    const w = {
        animationstart: "__mutationStartListener",
        animationcancel: "__mutationCancelListener",
        animationend: "__mutationEndListener",
        animationiteration: "__mutationIterationListener",
        transitionstart: "__mutationStartListener",
        transitioncancel: "__mutationCancelListener",
        transitionend: "__mutationEndListener",
        transitionrun: "__mutationRunListener"
    }, E = Object.keys(w);
    return class {
        els;
        emitter;
        allow;
        pending=!1;
        constructor(t) {
            this.emitter = new y(t.on), this.els = Array.isArray(t.el) ? g(...t.el) : g(t.el);
            const e = t.allow, n = t.disallow;
            e && e.length > 0 ? this.allow = (Array.isArray(e) ? e : [ e ]).filter((t => E.includes(t.toLowerCase()))) : n && n.length > 0 ? this.allow = (Array.isArray(n) ? n : [ n ]).filter((t => E.includes(t.toLowerCase()))) : this.allow = E, 
            // if (config.allow) {
            //   this.allow = (Array.isArray(config.allow) ? config.allow : [ config.allow ]).filter(value => events.includes(value));
            // } else if (config.disallow && config.disallow.length > 0) {
            //   this.allow = (Array.isArray(config.disallow) ? config.disallow : [ config.disallow ]).filter(value => events.includes(value));
            // } else {
            //   this.allow = events;
            // }
            Object.keys(w).forEach((t => this[w[t]] = this[w[t]].bind(this))), this.els.forEach((t => this.allow.forEach((e => t.addEventListener(e, this[w[e]])))));
        }
        __mutationStartListener(t) {
            this.pending = !0, this.emitter.emit("start", t);
        }
        __mutationCancelListener(t) {
            this.emitter.emit("cancel", t), this.pending = !1;
        }
        __mutationEndListener(t) {
            this.emitter.emit("end", t), this.pending = !1;
        }
        __mutationIterationListener(t) {
            this.emitter.emit("iteration", t);
        }
        __mutationRunListener(t) {
            this.pending = !0, this.emitter.emit("run", t);
        }
        addEvent(t) {
            E.includes(t) && (this.allow.push(t), this.els.forEach((e => e.addEventListener(t, this[w[t]]))));
        }
        removeEvent(t) {
            E.includes(t) && this.allow.includes(t) && (this.allow.splice(this.allow.indexOf(t)), 
            this.els.forEach((e => e.removeEventListener(t, this[w[t]]))));
        }
        on(t, e) {
            this.emitter.subscribe(t, e);
        }
    };
}();
//# sourceMappingURL=css-class-animations.js.map

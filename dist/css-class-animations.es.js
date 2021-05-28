import t from "@xaro/event-emitter";

import i from "@xaro/micro-dom";

const e = {
    animationstart: "__mutationStartListener",
    animationcancel: "__mutationCancelListener",
    animationend: "__mutationEndListener",
    animationiteration: "__mutationIterationListener",
    transitionstart: "__mutationStartListener",
    transitioncancel: "__mutationCancelListener",
    transitionend: "__mutationEndListener",
    transitionrun: "__mutationRunListener"
}, n = Object.keys(e);

export default class {
    els;
    emitter;
    allow;
    pending=!1;
    constructor(s) {
        this.emitter = new t(s.on), this.els = Array.isArray(s.el) ? i(...s.el) : i(s.el);
        const r = s.allow, a = s.disallow;
        r && r.length > 0 ? this.allow = (Array.isArray(r) ? r : [ r ]).filter((t => n.includes(t.toLowerCase()))) : a && a.length > 0 ? this.allow = (Array.isArray(a) ? a : [ a ]).filter((t => n.includes(t.toLowerCase()))) : this.allow = n, 
        // if (config.allow) {
        //   this.allow = (Array.isArray(config.allow) ? config.allow : [ config.allow ]).filter(value => events.includes(value));
        // } else if (config.disallow && config.disallow.length > 0) {
        //   this.allow = (Array.isArray(config.disallow) ? config.disallow : [ config.disallow ]).filter(value => events.includes(value));
        // } else {
        //   this.allow = events;
        // }
        Object.keys(e).forEach((t => this[e[t]] = this[e[t]].bind(this))), this.els.forEach((t => this.allow.forEach((i => t.addEventListener(i, this[e[i]])))));
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
        n.includes(t) && (this.allow.push(t), this.els.forEach((i => i.addEventListener(t, this[e[t]]))));
    }
    removeEvent(t) {
        n.includes(t) && this.allow.includes(t) && (this.allow.splice(this.allow.indexOf(t)), 
        this.els.forEach((i => i.removeEventListener(t, this[e[t]]))));
    }
    on(t, i) {
        this.emitter.subscribe(t, i);
    }
}
//# sourceMappingURL=css-class-animations.es.js.map

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
    constructor(a) {
        this.emitter = new t(a.on), this.els = Array.isArray(a.el) ? i(...a.el) : i(a.el), 
        a.allow ? this.allow = (Array.isArray(a.allow) ? a.allow : [ a.allow ]).filter((t => n.includes(t))) : a.disallow ? this.allow = (Array.isArray(a.disallow) ? a.disallow : [ a.disallow ]).filter((t => n.includes(t))) : this.allow = n, 
        Object.keys(e).forEach((t => this[e[t]] = this[e[t]].bind(this))), this.els.forEach((t => this.allow.forEach((i => t.addEventListener(i, this[e[i]])))));
    }
    __mutationStartListener(t) {
        this.emitter.emit("start", t);
    }
    __mutationCancelListener(t) {
        this.emitter.emit("cancel", t);
    }
    __mutationEndListener(t) {
        this.emitter.emit("end", t);
    }
    __mutationIterationListener(t) {
        this.emitter.emit("iteration", t);
    }
    __mutationRunListener(t) {
        this.emitter.emit("run", t);
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

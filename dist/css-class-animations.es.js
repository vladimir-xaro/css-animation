import EventEmitter from "@xaro/event-emitter";

import _ from "@xaro/micro-dom";

const eventsListeners = {
    animationstart: "__mutationStartListener",
    animationcancel: "__mutationCancelListener",
    animationend: "__mutationEndListener",
    animationiteration: "__mutationIterationListener",
    transitionstart: "__mutationStartListener",
    transitioncancel: "__mutationCancelListener",
    transitionend: "__mutationEndListener",
    transitionrun: "__mutationRunListener"
}, events = Object.keys(eventsListeners);

export default class {
    els;
    emitter;
    allow;
    pending=!1;
    constructor(config) {
        this.emitter = new EventEmitter(config.on), this.els = Array.isArray(config.el) ? _(...config.el) : _(config.el);
        const allow = config.allow, disallow = config.disallow;
        allow && allow.length > 0 ? this.allow = (Array.isArray(allow) ? allow : [ allow ]).filter((value => events.includes(value.toLowerCase()))) : disallow && disallow.length > 0 ? this.allow = (Array.isArray(disallow) ? disallow : [ disallow ]).filter((value => events.includes(value.toLowerCase()))) : this.allow = events, 
        // if (config.allow) {
        //   this.allow = (Array.isArray(config.allow) ? config.allow : [ config.allow ]).filter(value => events.includes(value));
        // } else if (config.disallow && config.disallow.length > 0) {
        //   this.allow = (Array.isArray(config.disallow) ? config.disallow : [ config.disallow ]).filter(value => events.includes(value));
        // } else {
        //   this.allow = events;
        // }
        Object.keys(eventsListeners).forEach((key => this[eventsListeners[key]] = this[eventsListeners[key]].bind(this))), 
        this.els.forEach((el => this.allow.forEach((event => el.addEventListener(event, this[eventsListeners[event]])))));
    }
    __mutationStartListener(event) {
        this.pending = !0, this.emitter.emit("start", event);
    }
    __mutationCancelListener(event) {
        this.emitter.emit("cancel", event), this.pending = !1;
    }
    __mutationEndListener(event) {
        this.emitter.emit("end", event), this.pending = !1;
    }
    __mutationIterationListener(event) {
        this.emitter.emit("iteration", event);
    }
    __mutationRunListener(event) {
        this.pending = !0, this.emitter.emit("run", event);
    }
    addEvent(domEventKey) {
        events.includes(domEventKey) && (this.allow.push(domEventKey), this.els.forEach((el => el.addEventListener(domEventKey, this[eventsListeners[domEventKey]]))));
    }
    removeEvent(domEventKey) {
        events.includes(domEventKey) && this.allow.includes(domEventKey) && (this.allow.splice(this.allow.indexOf(domEventKey)), 
        this.els.forEach((el => el.removeEventListener(domEventKey, this[eventsListeners[domEventKey]]))));
    }
    on(eventKey, cb) {
        this.emitter.subscribe(eventKey, cb);
    }
}
//# sourceMappingURL=css-class-animations.es.js.map

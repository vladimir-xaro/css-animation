import { I_CSSClassAnimations, I_CSSClassAnimationsConstructorConfig, T_DOMEventsKeys, T_EmitterEventsKeys } from "./types";
import EventEmitter, { I_EventEmitter } from "@xaro/event-emitter";
import _, { I_MicroDOM } from "@xaro/micro-dom";
import { events, eventsListeners } from "./variables";

export default class CSSClassAnimations implements I_CSSClassAnimations {
  els:      I_MicroDOM;
  emitter:  I_EventEmitter;
  allow:    string[];

  constructor(config: I_CSSClassAnimationsConstructorConfig) {
    this.emitter = new EventEmitter(config.on);

    if (Array.isArray(config.el)) {
      this.els = _(...config.el);
    } else {
      this.els = _(config.el);
    }

    if (config.allow) {
      this.allow = (Array.isArray(config.allow) ? config.allow : [ config.allow ]).filter(value => events.includes(value));
    } else if (config.disallow) {
      this.allow = (Array.isArray(config.disallow) ? config.disallow : [ config.disallow ]).filter(value => events.includes(value));
    } else {
      this.allow = events;
    }

    for (const key in eventsListeners) {
      this[eventsListeners[key]] = this[eventsListeners[key]].bind(this);
    }

    for (const el of this.els) {
      for (const event of this.allow) {
        el.addEventListener(event, this[eventsListeners[event]]);
      }
    }
  }

  protected __mutationStartListener(event: AnimationEvent | TransitionEvent) {
    this.emitter.emit('start', event);
  }

  protected __mutationCancelListener(event: AnimationEvent | TransitionEvent) {
    this.emitter.emit('cancel', event);
  }

  protected __mutationEndListener(event: AnimationEvent | TransitionEvent) {
    this.emitter.emit('end', event);
  }

  protected __mutationIterationListener(event: AnimationEvent | TransitionEvent) {
    this.emitter.emit('iteration', event);
  }

  protected __mutationRunListener(event: AnimationEvent | TransitionEvent) {
    this.emitter.emit('run', event);
  }

  addEvent(domEventKey: T_DOMEventsKeys) {
    if (! this.allow.includes(domEventKey)) {
      return;
    }

    for (const el of this.els) {
      el.addEventListener(domEventKey, this[eventsListeners[domEventKey]]);
    }
  }

  removeEvent(domEventKey: T_DOMEventsKeys) {
    if (! this.allow.includes(domEventKey)) {
      return;
    }

    for (const el of this.els) {
      el.removeEventListener(domEventKey, this[eventsListeners[domEventKey]]);
    }
  }

  on(eventKey: T_EmitterEventsKeys, cb: Function | Function[]) {
    this.emitter.subscribe(eventKey, cb);
  }
}
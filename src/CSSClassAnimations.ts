import { I_CSSClassAnimations as I_CSSClassAnimations, I_CSSClassAnimationsConstructorConfig, T_DOMEventsKeys, T_EmitterEventsKeys } from "./types";
import EventEmitter, { I_EventEmitter, T_Func } from "@xaro/event-emitter";
import { events, eventsListeners } from "./variables";
import { addTo } from "./helpers";

export default class CSSClassAnimations implements I_CSSClassAnimations {
  els:      Element[] = [];
  emitter:  I_EventEmitter;
  allow:    string[];

  constructor(config: I_CSSClassAnimationsConstructorConfig) {
    this.emitter = new EventEmitter(config.on);
    
    if (Array.isArray(config.el)) {
      for (const val of config.el) {
        addTo(this.els, val);
      }
    } else {
      addTo(this.els, config.el);
    }

    if (config.allow) {
      this.allow = config.allow.filter(value => events.includes(value));
    } else if (config.disallow) {
      this.allow = events.filter(value => !config.disallow!.includes(value as T_DOMEventsKeys));
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
    this.emitter.emit('start', this, event);
  }

  protected __mutationCancelListener(event: AnimationEvent | TransitionEvent) {
    this.emitter.emit('cancel', this, event);
  }

  protected __mutationEndListener(event: AnimationEvent | TransitionEvent) {
    this.emitter.emit('end', this, event);
  }

  protected __mutationIterationListener(event: AnimationEvent | TransitionEvent) {
    this.emitter.emit('iteration', this, event);
  }

  protected __mutationRunListener(event: AnimationEvent | TransitionEvent) {
    this.emitter.emit('run', this, event);
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

  addClass(...classes: string[]): Element[] {
    for (const el of this.els) {
      el.classList.add(...classes);
    }

    return this.els;
  }

  removeClass(...classes: string[]): Element[] {
    for (const el of this.els) {
      el.classList.remove(...classes);
    }

    return this.els;
  }

  css(obj: object): Element[] {
    for (const el of this.els) {
      for (const key in obj) {
        (el as HTMLElement).style[key] = obj[key];
      }
    }
    return this.els;
  }

  on(eventKey: T_EmitterEventsKeys, cb: T_Func | T_Func[]) {
    this.emitter.subscribe(eventKey, cb);
  }
}
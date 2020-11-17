import { I_EventEmitter, T_Func } from "@xaro/event-emitter";

export interface I_CSSClassAnimations {
  els:      Element[];
  emitter:  I_EventEmitter;

  addEvent(domEventKey: T_DOMEventsKeys): void;
  removeEvent(domEventKey: T_DOMEventsKeys): void;
  addClass(...classes: string[]): Element[];
  removeClass(...classes: string[]): Element[];
  css(obj: object): Element[];
  on(eventKey: T_EmitterEventsKeys, cb: T_Func | T_Func[]): void;
}

export interface I_CSSClassAnimationsConstructorConfig {
  el: Element | Element[] | string | string[];
  allow?:     T_DOMEventsKeys[];
  disallow?:  T_DOMEventsKeys[];
  on?: {
    start?:     (els: Element[], event: AnimationEvent | TransitionEvent) => void | ((els: Element[], event: AnimationEvent | TransitionEvent) => void)[];
    cancel?:    (els: Element[], event: AnimationEvent | TransitionEvent) => void | ((els: Element[], event: AnimationEvent | TransitionEvent) => void)[];
    end?:       (els: Element[], event: AnimationEvent | TransitionEvent) => void | ((els: Element[], event: AnimationEvent | TransitionEvent) => void)[];
    iteration?: (els: Element[], event: AnimationEvent) => void | ((els: Element[], event: AnimationEvent) => void)[];
    run?:       (els: Element[], event: TransitionEvent) => void | ((els: Element[], event: TransitionEvent) => void)[];
  }
}

export type T_DOMEventsKeys =
  'animationstart'      |
  'animationcancel'     |
  'animationend'        |
  'animationiteration'  |
  'transitionstart'     |
  'transitioncancel'    |
  'transitionend'       |
  'transitionrun';

export type T_EmitterEventsKeys =
  'start'     |
  'cancel'    |
  'end'       |
  'iteration' |
  'run';
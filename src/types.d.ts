import { I_EventEmitter, T_Func } from "@xaro/event-emitter";

export interface I_CSSClassAnimations {
  els:      Element[];
  emitter:  I_EventEmitter;

  add(domEventKey: T_DOMEventsKeys): void;
  remove(domEventKey: T_DOMEventsKeys): void;
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
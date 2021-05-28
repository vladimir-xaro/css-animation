import { I_EventEmitter } from "@xaro/event-emitter";
import { I_MicroDOM } from "@xaro/micro-dom";

export interface I_CSSClassAnimations {
  els:      I_MicroDOM;
  emitter:  I_EventEmitter;
  allow:    T_DOMEventsKeys[];
  pending:  boolean;

  addEvent(domEventKey: T_DOMEventsKeys): void;
  removeEvent(domEventKey: T_DOMEventsKeys): void;
  on(eventKey: T_EmitterEventsKeys, cb: Function | Function[]): void;
}

export interface I_CSSClassAnimationsConstructorConfig {
  el:         string | Element | Array<string | Element>;
  allow?:     T_DOMEventsKeys | T_DOMEventsKeys[];
  disallow?:  T_DOMEventsKeys | T_DOMEventsKeys[];
  on?: {
    start?:     ((event: AnimationEvent | TransitionEvent) => void) | ((event: AnimationEvent | TransitionEvent) => void)[];
    cancel?:    ((event: AnimationEvent | TransitionEvent) => void) | ((event: AnimationEvent | TransitionEvent) => void)[];
    end?:       ((event: AnimationEvent | TransitionEvent) => void) | ((event: AnimationEvent | TransitionEvent) => void)[];
    iteration?: ((event: AnimationEvent) => void) | ((event: AnimationEvent) => void)[];
    run?:       ((event: TransitionEvent) => void) | ((event: TransitionEvent) => void)[];
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
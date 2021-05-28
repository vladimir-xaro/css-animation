import EventEmitter from "@xaro/event-emitter";
import { MicroDOM } from "@xaro/micro-dom";

export default class CSSClassAnimations {
  els:      MicroDOM;
  emitter:  EventEmitter;
  allow:    DOMEventsKeys[];
  pending:  boolean;

  constructor(config?: CSSClassAnimationsConstructorConfig);
  addEvent(domEventKey: DOMEventsKeys): void;
  removeEvent(domEventKey: DOMEventsKeys): void;
  on(eventKey: EmitterEventsKeys, cb: Function | Function[]): void;
}

export interface CSSClassAnimationsConstructorConfig {
  el:         string | Element | Array<string | Element>;
  allow?:     DOMEventsKeys | DOMEventsKeys[];
  disallow?:  DOMEventsKeys | DOMEventsKeys[];
  on?: {
    start?:     ((event: AnimationEvent | TransitionEvent) => void) | ((event: AnimationEvent | TransitionEvent) => void)[];
    cancel?:    ((event: AnimationEvent | TransitionEvent) => void) | ((event: AnimationEvent | TransitionEvent) => void)[];
    end?:       ((event: AnimationEvent | TransitionEvent) => void) | ((event: AnimationEvent | TransitionEvent) => void)[];
    iteration?: ((event: AnimationEvent) => void) | ((event: AnimationEvent) => void)[];
    run?:       ((event: TransitionEvent) => void) | ((event: TransitionEvent) => void)[];
  }
}

export type DOMEventsKeys =
  'animationstart'      |
  'animationcancel'     |
  'animationend'        |
  'animationiteration'  |
  'transitionstart'     |
  'transitioncancel'    |
  'transitionend'       |
  'transitionrun';

export type EmitterEventsKeys =
  'start'     |
  'cancel'    |
  'end'       |
  'iteration' |
  'run';
# @xaro/css-class-animations

Micro lib for css animations with events

## Install

```sh
$ npm install @xaro/css-class-animations
```

## Usage

```ts
const animation = new CSSClassAnimationss({
  el: '.el', // string | string[] | Element | Element[]
  on: {
    start: (els: Element[], event: AnimationEvent | TransitionEvent) => {
      console.log('[start]', event);
    },
    cancel: (els: Element[], event: AnimationEvent | TransitionEvent) => {
      console.log('[cancel]', event);
    },
    end: (els: Element[], event: AnimationEvent | TransitionEvent) => {
      console.log('[end]', event);
    },
    iteration: (els: Element[], event: AnimationEvent) => {
      console.log('[iteration]', event);
    },
    run: (els: Element[], event: TransitionEvent) => {
      console.log('[run]', event);
    }
  }
});
```
*Now information about the event will be displayed in the console when it occurs.*

## Why is this needed?

This is mainly needed to control the animations and transitions of appearance and disappearance of elements, if you are NOT using Vue, React and etc.

For example: opening a modal window with animation using only css classes.

```ts
// modal.ts

class Modal {
  container: Element;
  animation: CSSClassAnimations;
  // ...

  constructor(/* ... */) {
    this.animation = new CSSClassAnimations({
      el: this.container
    });
    // ...

    this.animation.on('end', () => {
      this.container.style.display = 'none';
    });
  }
  
  close() {
    this.container.classList.add('class with hide animation/transition');
  }
}
```

> Now, when calling the "close" method, a class with some disappearance animation will be added, and after the animation is complete, the value of container's display attribute will be assigned "none".

## Advanced usage

*When an object is initialized, without the "allow" and "disallow" properties, all animation and transition events are set ups on the passed elements.*

*If there are many objects, this can load the client's device.*

*Therefore, it is recommended to indicate only those events that you will listen to.*

```ts
const animation = new CSSClassAnimations({
  el: '.el'
  allow: [
    'animationend'
  ]
});
```
> *It is recommended to specify one of the following parameters:*
> - **allow**:    Adds only the specified event keys
> - **disallow**: Adds all handlers except the specified ones

## Methods
- **add(domEventKey: T_DOMEventsKeys): void**
Adds listener to elements
***
- **remove(domEventKey: T_DOMEventsKeys): void**
Remove listener from elements (calls removeEventListener, but callbacks remain in the object)
***
- **on(eventKey: T_EmitterEventsKeys, cb: T_Func | T_Func[]): void**
Adds callback functions to an event by its key
  > *The first parameter does not need to specify the DOM event key, but the CSSClassAnimations event key (* **start**, **cancel**, **end**, **iteration**, **run** *)*

- The library uses [@xaro/event-emitter](https://www.npmjs.com/package/@xaro/event-emitter) and you can use all its features through the **emitter** property of the CSSClassAnimations object instance
  ```ts
  const animation = new CSSClassAnimations({
    el: '.el'
  });
  animation.emitter.subscribe('start', (els: Element[], event: AnimationEvent | TransitionEvent) => {
    console.log('[start]', els, event);
  });
  animation.emitter.emit('start', /* ... */);
  ```


## Interfaces & Types

*types.d.ts*
```ts
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
```

## License
[MIT](LICENSE)
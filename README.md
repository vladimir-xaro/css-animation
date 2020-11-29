# @xaro/css-class-animations

Micro lib for css animations with events

## Install

```sh
$ npm install @xaro/css-class-animations
```

## Usage

```ts
const animation = new CSSClassAnimations({
  el: '.el', // string | string[] | Element | Element[]
  on: {
    start: (event: AnimationEvent | TransitionEvent) => {
      console.log('[start]', event);
    },
    cancel: (event: AnimationEvent | TransitionEvent) => {
      console.log('[cancel]', event);
    },
    end: (event: AnimationEvent | TransitionEvent) => {
      console.log('[end]', event);
    },
    iteration: (event: AnimationEvent) => {
      console.log('[iteration]', event);
    },
    run: (event: TransitionEvent) => {
      console.log('[run]', event);
    }
  }
});
```
*Now information about the event will be displayed in the console when it occurs.*

***
**ATTENTION**
Сallback function will be called for each element when the event occurs
***

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
- **addEvent(domEventKey: T_DOMEventsKeys): void**
Adds listener to the elements
***
- **removeEvent(domEventKey: T_DOMEventsKeys): void**
Remove listener from elements (calls removeEventListener, but callbacks remain in the object)
***
- **addClass(...classes: string[]): Element[]**
Adds classes to the elements and returns array of this elements
***
- **removeClass(...classes: string[]): Element[]**
Removes classes from the elements and returns array of this elements
***
- **on(eventKey: T_EmitterEventsKeys, cb: T_Func | T_Func[]): void**
Adds callback functions to an event by its key
  > *The first parameter does not need to specify the DOM event key, but the CSSClassAnimations event key (* **start**, **cancel**, **end**, **iteration**, **run** *)*

***

- The library uses [@xaro/event-emitter](https://www.npmjs.com/package/@xaro/event-emitter) and you can use all its features through the **emitter** property of the CSSClassAnimations object instance
  ```ts
  const animation = new CSSClassAnimations({
    el: '.el'
  });
  animation.emitter.subscribe('start', (event: AnimationEvent | TransitionEvent) => {
    console.log('[start]', event);
  });
  animation.emitter.emit('start', /* ... */);
  ```


## Interfaces & Types

*types.d.ts*
```ts
import { I_EventEmitter, T_Func } from "@xaro/event-emitter";
import { I_MicroDOM } from "@xaro/micro-dom";

export interface I_CSSClassAnimations {
  els:      I_MicroDOM;
  emitter:  I_EventEmitter;

  addEvent(domEventKey: T_DOMEventsKeys): void;
  removeEvent(domEventKey: T_DOMEventsKeys): void;
  addClass(...classes: string[]): Element[];
  removeClass(...classes: string[]): Element[];
  on(eventKey: T_EmitterEventsKeys, cb: T_Func | T_Func[]): void;
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
```

## License
[MIT](LICENSE)
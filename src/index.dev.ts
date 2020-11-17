import "./scss/index.scss"

import CSSClassAnimations from "./";

const animation = new CSSClassAnimations({
  el: '.el',
  allow: [
    'transitionend',
    'animationiteration'
  ],
  // disallow: [
  //   'animationiteration',
  //   'transitionend'
  // ],
  on: {
    start: (els: Element[], event: AnimationEvent | TransitionEvent) => {
      console.log('[start]', event)
    },
    cancel: (els: Element[], event: AnimationEvent | TransitionEvent) => {
      console.log('[cancel]', event)
    },
    end: (els: Element[], event: AnimationEvent | TransitionEvent) => {
      console.log('[end]', event)
    },
    iteration: (els: Element[], event: AnimationEvent) => {
      console.log('[iteration]', event)
    },
    run: (els: Element[], event: TransitionEvent) => {
      console.log('[run]', event)
    },
  }
});

(window as any).animation = animation;

document.querySelector('.toggle--animation')?.addEventListener('click', () => {
  const classname = 'el--animation-fade-out';
  for (const el of animation.els) {
    el.classList[el.classList.contains(classname) ? 'remove' : 'add'](classname);
  }
});
document.querySelector('.toggle--transition')?.addEventListener('click', () => {
  const classname = 'el--transition-fade-out';
  for (const el of animation.els) {
    el.classList[el.classList.contains(classname) ? 'remove' : 'add'](classname);
  }
});
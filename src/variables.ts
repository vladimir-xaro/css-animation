export const eventsListeners = {
  animationstart:     '__mutationStartListener',
  animationcancel:    '__mutationCancelListener',
  animationend:       '__mutationEndListener',
  animationiteration: '__mutationIterationListener',
  transitionstart:    '__mutationStartListener',
  transitioncancel:   '__mutationCancelListener',
  transitionend:      '__mutationEndListener',
  transitionrun:      '__mutationRunListener'
};

export const events = Object.keys(eventsListeners);
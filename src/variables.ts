import { T_DOMEventsKeys } from "./types";

export const eventsListeners: { [key: string]: string } = {
  animationstart:     '__mutationStartListener',
  animationcancel:    '__mutationCancelListener',
  animationend:       '__mutationEndListener',
  animationiteration: '__mutationIterationListener',
  transitionstart:    '__mutationStartListener',
  transitioncancel:   '__mutationCancelListener',
  transitionend:      '__mutationEndListener',
  transitionrun:      '__mutationRunListener'
};

export const events: T_DOMEventsKeys[] = Object.keys(eventsListeners) as T_DOMEventsKeys[];
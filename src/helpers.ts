export function addTo(origin: Element[], value: Element | Element[] | string | string[]) {
  if (typeof value === 'string') {
    origin.push(...document.querySelectorAll(value));
  } else if (value instanceof Element) {
    origin.push(value);
  }
}
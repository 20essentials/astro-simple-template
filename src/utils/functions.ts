export const $ = <T extends Element = HTMLElement>(el: string) =>
  document.querySelector<T>(el);
export const $$ = <T extends Element = HTMLElement>(el: string) =>
  document.querySelectorAll<T>(el);

export function baseUrl(path: string) {
  return new URL(path.replace(/^\/+/, ''), import.meta.env.SITE).toString();
}

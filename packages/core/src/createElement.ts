import { Props } from "./type";

export function h<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  props: Props<K>,
): HTMLElementTagNameMap[K];
export default function h(tag: any, props: Record<string, any>) {
  const children = props.children;

  if (typeof tag === "function") {
    if (tag.IS_JSX_CLASS) {
      const clazz = new tag(props);
      if (props && props.ref) {
        props.ref.current = clazz;
      }
      const result = clazz.render();
      clazz.onDomCreated();
      return result;
    }
    const result = tag(props);
    return result;
  }

  const element = document.createElement(tag) as Element;
  if (props) {
    if (props.ref) {
      props.ref.current = element;
    }
    Object.entries(props).forEach(([key, value]) => {
      if (key === "children" || key === "ref") {
        return;
      }

      // Add Event Listener
      if (key.startsWith("on") && typeof value === "function") {
        element.addEventListener(
          key.substring(2).toLowerCase(),
          value as EventListenerOrEventListenerObject,
        );
        return;
      }

      if (key === "className") {
        element.setAttribute("class", value);
        return;
      }

      if (key === "htmlFor") {
        element.setAttribute("for", value);
        return;
      }
      if (typeof value == "string") {
        element.setAttribute(key, value.toString());
      }
      return;
    });
  }

  if (children) {
    if (Array.isArray(children)) {
      children.forEach((child) => {
        if (child) element.append(child);
      });
    } else {
      element.append(children);
    }
  }

  return element;
}

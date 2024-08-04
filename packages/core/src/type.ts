export type JSXNode =
  | (Node | string)[]
  | Node
  | boolean
  | number
  | bigint
  | string
  | null
  | undefined;

// export interface Ref<K extends keyof HTMLElementTagNameMap> {
//   current: HTMLElementTagNameMap[K] | any;
// }

export interface Ref<T> {
  current: T;
}

export interface Props<K extends keyof HTMLElementTagNameMap> {
  // 要实现的话可以参考react的
  // https://github.com/facebook/react/blob/main/packages/react-dom-bindings/src/client/CSSPropertyOperations.js
  //   style?: CSS.Properties;
  ref: Ref<K>;
  children: JSXNode | JSXNode[];
}

import { JSX } from "./jsx-runtime";

export abstract class ClassComponent {
  static readonly IS_JSX_CLASS = true;

  protected abstract render(): JSX.Element;

  protected onDomCreated(): void {}
}

type useRef<T> = () => { current: T };

export function useRef<T>() {
  return { current: undefined } as { current: T };
}

export const Fragment = (props: any) => props.children;

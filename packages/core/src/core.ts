export abstract class ClassComponent {
  static readonly IS_JSX_CLASS = true;

  abstract render(): string;

  onDomCreated(): void {}
}

export const Fragment = (props: any) => props.children;

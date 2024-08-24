import { ClassComponent, useRef } from "@hxj0x/thin-jsx";
import { JSX } from "@hxj0x/thin-jsx/jsx-runtime";

interface LinkProps extends Omit<JSX.AnchorHTMLAttributes<any>, "type"> {
  children?: JSX.Element;
  danger?: boolean;
}

export class Link extends ClassComponent {
  private aDom = useRef<HTMLAnchorElement>();

  constructor(private props: LinkProps) {
    super();
  }

  override onDomCreated(): void {
    const link = this.aDom.current;
    if (this.props.danger) {
      link.classList.add(
        "no-underline",
        "border-0",
        "text-red-500",
        "decoration-red-400",
        "decoration-2",
        "underline-offset-4",
        "hover:text-red-400",
        "hover:underline",
        "bg-transparent",
      );
    } else {
      link.classList.add(
        "no-underline",
        "border-0",
        "text-blue-500",
        "decoration-blue-400",
        "decoration-2",
        "underline-offset-4",
        "hover:text-blue-400",
        "hover:underline",
        "bg-transparent",
      );
    }
  }
  override render() {
    return (
      <a
        ref={this.aDom}
        {...this.props}
        data-loading="false"
        data-pressed="false"
        className="inline-flex h-8 shrink-0 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-md text-center text-sm transition-all disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-65"
      >
        {this.props.children}
      </a>
    );
  }
}

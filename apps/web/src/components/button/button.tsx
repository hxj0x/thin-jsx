import { ClassComponent, useRef } from "@hxj0x/thin-jsx";
import { JSX } from "@hxj0x/thin-jsx/jsx-runtime";
import reloadSvg from "../../asset/reload.svg";

interface ButtonProps extends Omit<JSX.ButtonHTMLAttributes<any>, "type"> {
  type?: "button" | "submit" | "reset";
  children?: JSX.Element;
  variant?: "primary" | "link" | "text" | "default";
  block?: boolean;
  danger?: boolean;
  loading?: boolean;
}

export class Button extends ClassComponent {
  private btnDom = useRef<HTMLButtonElement>();
  private loadingDom = useRef<HTMLImageElement>();

  constructor(private props: ButtonProps) {
    super();
    console.log(props);
  }

  override onDomCreated(): void {
    const btn = this.btnDom.current;
    btn.addEventListener("pointerdown", (e) => {
      btn.setAttribute("data-pressed", "true");
    });
    btn.addEventListener("pointerup", (e) => {
      btn.setAttribute("data-pressed", "false");
    });

    if (this.props.loading) {
      this.btnDom.current.setAttribute("data-loading", "true");
      this.loadingDom.current.setAttribute("data-loading", "true");
    }

    if (!this.props.type) {
      this.props.type = "button";
    }

    if (this.props.block) {
      btn.classList.add("w-full");
    }

    if (this.props.variant === "primary") {
      if (this.props.danger) {
        btn.classList.add(
          "border-0",
          "text-white",
          "bg-red-500",
          "hover:bg-red-500/80",
          "data-[pressed=true]:bg-red-700",
        );
      } else {
        btn.classList.add(
          "border-0",
          "text-white",
          "bg-blue-600",
          "hover:bg-blue-500",
          "data-[pressed=true]:bg-blue-700",
        );
      }
    } else if (this.props.variant === "default" || !this.props.variant) {
      if (this.props.danger) {
        btn.classList.add(
          "text-red-500",
          "border",
          "border-solid",
          "border-red-300",
          "bg-white",
          "hover:bg-red-100/60",
          "data-[pressed=true]:bg-red-100",
        );
      } else {
        btn.classList.add(
          "text-black",
          "border",
          "border-solid",
          "border-neutral-300",
          "bg-white",
          "hover:bg-neutral-100",
          "data-[pressed=true]:bg-neutral-200",
        );
      }
    } else if (this.props.variant === "text") {
      if (this.props.danger) {
        btn.classList.add(
          "border-0",
          "text-red-500",
          "bg-transparent",
          "hover:bg-red-100/60",
          "data-[pressed=true]:bg-red-100",
        );
      } else {
        btn.classList.add("border-0", "bg-transparent", "hover:bg-neutral-200", "data-[pressed=true]:bg-neutral-300");
      }
    } else if (this.props.variant === "link") {
      if (this.props.danger) {
        btn.classList.add(
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
        btn.classList.add(
          "border-0",
          "decoration-blue-400",
          "decoration-2",
          "underline-offset-4",
          "hover:text-blue-400",
          "hover:underline",
          "bg-transparent",
        );
      }
    }
  }

  override render(): JSX.Element {
    return (
      <button
        ref={this.btnDom}
        {...this.props}
        type="button"
        data-loading="false"
        data-pressed="false"
        className="inline-flex h-8 shrink-0 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-md px-4 py-1 text-center text-sm transition-all disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-65"
      >
        <img
          ref={this.loadingDom}
          src={reloadSvg}
          alt="加载中"
          data-loading="false"
          className="h-4 w-4 data-[loading=false]:sr-only data-[loading=true]:animate-spin"
        />
        {this.props.children}
      </button>
    );
  }
}

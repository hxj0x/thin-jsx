import { ClassComponent, useRef } from "@hxj0x/thin-jsx";
import { JSX } from "@hxj0x/thin-jsx/jsx-runtime";
import { Button } from "../components/button";
import { LinkExample } from "./LinkExample";

export class ButtonExample extends ClassComponent {
  override render(): JSX.Element {
    return (
      <div>
        <div className="flex w-full shrink-0 justify-center gap-2">
          <Button variant="primary">主按钮</Button>
          <Button variant="default">默认按钮</Button>
          <Button>默认按钮</Button>
          <Button variant="text">文本按钮</Button>
          <Button variant="link">超链接按钮</Button>
          <LinkExample />
        </div>
        <hr />
        <div className="flex w-full shrink-0 justify-center gap-2">
          <Button variant="default" block>
            适应父元素宽度
          </Button>
        </div>
        <hr />
        <div className="flex w-full shrink-0 justify-center gap-2">
          <Button variant="primary" danger>
            主按钮
          </Button>
          <Button variant="default" danger>
            默认按钮
          </Button>
          <Button danger>默认按钮</Button>
          <Button variant="text" danger>
            文本按钮
          </Button>
          <Button variant="link" danger>
            超链接按钮
          </Button>
        </div>
        <hr />
        <div className="flex w-full shrink-0 justify-center gap-2">
          <Button variant="primary" disabled>
            主按钮
          </Button>
          <Button variant="default" disabled>
            默认按钮
          </Button>
          <Button disabled>默认按钮</Button>
          <Button variant="text" disabled>
            文本按钮
          </Button>
          <Button variant="link" disabled>
            超链接按钮
          </Button>
        </div>
        <hr />
        <div className="flex w-full shrink-0 justify-center gap-2">
          <Button variant="primary" loading disabled>
            加载中
          </Button>
        </div>
        <hr />
      </div>
    );
  }
}

class ButtonExample2 extends ClassComponent {
  private dom = useRef<HTMLButtonElement>();

  override onDomCreated(): void {
    const el = this.dom.current;
    el.addEventListener("pointerdown", (e) => {
      el.setAttribute("data-pressed", "true");
    });
    el.addEventListener("pointerup", (e) => {
      el.setAttribute("data-pressed", "false");
    });
  }

  override render(): JSX.Element {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-8">
        <div className="flex w-full shrink-0 justify-center gap-2">
          <button
            data-pressed="false"
            ref={this.dom}
            type="button"
            /* hover:bg-blue-600/80 data-[pressed=true]:bg-yellow-500 */
            className="inline-flex h-8 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-md border-0 bg-blue-600 px-4 py-1 text-center text-sm text-white transition-all hover:bg-blue-500 data-[pressed=true]:bg-blue-700"
          >
            主按钮
          </button>
          <button
            type="button"
            className="inline-flex h-8 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-md border border-solid border-slate-300 bg-white px-4 py-1 text-center text-sm text-black"
          >
            默认按钮
          </button>
          <button
            type="button"
            className="inline-flex h-8 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-md border-0 bg-white px-4 py-1 text-center text-sm transition-all hover:bg-gray-200/80"
          >
            文本按钮
          </button>
          <a
            type="button"
            className="inline-flex h-8 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-md border-0 bg-white px-4 py-1 text-center text-sm decoration-blue-400 decoration-2 underline-offset-4 transition-all hover:text-blue-400 hover:underline"
          >
            超链接按钮
          </a>
        </div>
        <div className="flex w-full shrink-0 justify-center gap-2">
          <button
            type="button"
            className="inline-flex h-8 w-full shrink-0 cursor-pointer items-center justify-center gap-2 rounded-md border border-solid border-slate-300 bg-white px-4 py-1 text-center text-sm text-black data-[pressed=true]:bg-slate-200"
          >
            适应父元素宽度
          </button>
        </div>
      </div>
    );
  }
}

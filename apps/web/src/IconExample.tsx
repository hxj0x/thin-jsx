import { ClassComponent, useRef } from "@hxj0x/thin-jsx";
import { JSX } from "@hxj0x/thin-jsx/jsx-runtime";

export class IconExample extends ClassComponent {
  constructor() {
    super();
  }

  private readonly dom = useRef<HTMLDivElement>();

  protected onDomCreated(): void {}

  override render(): JSX.Element {
    return (
      <div>
        <>
          {/* <img src={reloadSvg} alt="加载" className="animate-spin" /> */}
          <div ref={this.dom}>hello</div>
        </>
      </div>
    );
  }
}

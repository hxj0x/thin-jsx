import { ClassComponent, useRef } from "@hxj0x/thin-jsx";
import { JSX } from "@hxj0x/thin-jsx/jsx-runtime";
import reloadSvg from "./asset/reload.svg";

export class IconExample extends ClassComponent {
  private readonly dom = useRef<HTMLDivElement>();

  protected onDomCreated(): void {
    console.log(reloadSvg);
  }

  override render(): JSX.Element {
    return (
      <div>
        <>
          <img src={reloadSvg} alt="加载" />
          <div ref={this.dom}>hello</div>
        </>
      </div>
    );
  }
}

import { ClassComponent, useRef } from "@hxj0x/thin-jsx";
import { JSX } from "@hxj0x/thin-jsx/jsx-runtime";
import edit from "../asset/edit.svg";
import menu from "../asset/menu.svg";
import reload from "../asset/reload.svg";
import setting from "../asset/setting.svg";

export class IconExample extends ClassComponent {
  constructor() {
    super();
  }

  private readonly dom = useRef<HTMLDivElement>();

  override onDomCreated(): void {}

  override render(): JSX.Element {
    return (
      <div>
        <div className="flex w-full min-w-64 shrink-0 justify-center gap-8">
          <img src={reload} alt="加载" className="h-8 w-8 animate-spin" />
          <img src={edit} alt="编辑" className="h-8 w-8" />
          <img src={menu} alt="菜单" className="h-8 w-8" />
          <img src={setting} alt="设置" className="h-8 w-8" />
        </div>
        <hr />
      </div>
    );
  }
}

import { ClassComponent } from "@hxj0x/thin-jsx";
import { JSX } from "@hxj0x/thin-jsx/jsx-runtime";
import { Link } from "../components/link/link";

export class NotFoundExample extends ClassComponent {
  override render(): JSX.Element {
    return (
      <div>
        <h1>请选择左边侧边栏进行导航</h1>
        <small>
          （由于github page限制，只能直接访问<Link>https://hxj0x.github.io/thin-jsx/</Link>）
        </small>
      </div>
    );
  }
}

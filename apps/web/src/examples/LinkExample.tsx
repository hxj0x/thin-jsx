import { ClassComponent } from "@hxj0x/thin-jsx";
import { JSX } from "@hxj0x/thin-jsx/jsx-runtime";
import { Link } from "../components/link/link";

export class LinkExample extends ClassComponent {
  override render(): JSX.Element {
    return (
      <div>
        <div className="flex w-full min-w-64 shrink-0 justify-center gap-8">
          <Link href="#">回到首页</Link>
          <Link href="https://www.baidu.com/" target="_blank" danger>
            跳转到百度
          </Link>
        </div>
        <hr />
      </div>
    );
  }
}

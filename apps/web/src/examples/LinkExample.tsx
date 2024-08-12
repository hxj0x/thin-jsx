import { ClassComponent } from "@hxj0x/thin-jsx";
import { JSX } from "@hxj0x/thin-jsx/jsx-runtime";
import { Link } from "../components/a/link";

export class LinkExample extends ClassComponent {
  override render(): JSX.Element {
    return (
      <div>
        <Link href="https://www.baidu.com">百度</Link>
        <Link href="https://www.baidu.com" danger>
          百度
        </Link>
      </div>
    );
  }
}

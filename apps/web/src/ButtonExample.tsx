import { ClassComponent } from "@hxj0x/thin-jsx";
import { JSX } from "@hxj0x/thin-jsx/jsx-runtime";

export class ButtonExample extends ClassComponent {
  override render(): JSX.Element {
    return (
      <div>
        <button type="button" className="inline-flex">
          按钮
        </button>
        <ButtonExample2 />
      </div>
    );
  }
}

class ButtonExample2 extends ClassComponent {
  override render(): JSX.Element {
    return (
      <div>
        <button type="button" className="inline-flex">
          按钮2
        </button>
      </div>
    );
  }
}

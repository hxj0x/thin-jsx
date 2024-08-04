import { ClassComponent, useRef } from "@hxj0x/thin-jsx";

export class HelloClass extends ClassComponent {
  private readonly dom = useRef<HTMLDivElement>();
  override onDomCreated(): void {
    console.log(this.dom.current);
    const form = document.createElement("form") as HTMLFormElement;
    form.addEventListener("submit", (ev) => {
      ev.preventDefault();
    });
  }

  public hi() {
    console.log("hi");
  }

  override render() {
    return (
      <div ref={this.dom}>
        <h1>HelloClass</h1>
      </div>
    );
  }
}

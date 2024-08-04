import { ClassComponent } from "@hxj0x/thin-jsx";

export class HelloClass extends ClassComponent {
  private readonly dom = {};
  override onDomCreated(): void {
    console.log(this.dom);
  }

  override render() {
    return (
      <div ref={this.dom}>
        <h1>HelloClass</h1>
      </div>
    );
  }
}

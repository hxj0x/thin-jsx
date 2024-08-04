import { ClassComponent, useRef } from "@hxj0x/thin-jsx";
import { HelloClass } from "./HelloClass";
import { HelloFC } from "./HelloFC";

const app = document.getElementById("app")!;

class App extends ClassComponent {
  private readonly dom = useRef<InstanceType<typeof HelloClass>>();
  override onDomCreated(): void {
    console.log(this.dom.current.hi());
  }

  override render() {
    return (
      <main>
        <HelloFC />
        <HelloClass ref={this.dom} />
      </main>
    );
  }
}
app.append((<App />) as Element);

import "normalize.css";
import { IconExample } from "./IconExample";
import "./index.css";

const app = document.getElementById("app")!;

var svg: SVGSVGElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");

// class App extends ClassComponent {
//   private readonly dom = useRef<InstanceType<typeof HelloClass>>();
//   override onDomCreated(): void {
//     console.log(this.dom.current.hi());
//   }

//   override render() {
//     return (
//       <>
//         <HelloFC />
//         <HelloClass ref={this.dom} />
//       </>
//     );
//   }
// }
const a = (<IconExample />) as Element;
console.log(a);
app.append(a);

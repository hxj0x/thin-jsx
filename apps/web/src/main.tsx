import { ButtonExample } from "./ButtonExample";
import "./index.css";

const app = document.getElementById("app")!;

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
app.append((<ButtonExample />) as Element);

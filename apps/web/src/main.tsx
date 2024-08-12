import { ClassComponent, Ref, useRef } from "@hxj0x/thin-jsx";
import "normalize.css";
import { Link } from "./components/a/link";
import { ButtonExample } from "./examples/ButtonExample";
import { IconExample } from "./examples/IconExample";
import { LinkExample } from "./examples/LinkExample";
import { NotFoundExample } from "./examples/NotFoundExample";
import "./index.css";
import { Router } from "./router";

const baseUrl = import.meta.env.BASE_URL;
const routerTable = [
  { path: baseUrl + "/buttons", title: "buttons", component: ButtonExample },
  { path: baseUrl + "/links", title: "links", component: LinkExample },
  { path: baseUrl + "/icons", title: "icons", component: IconExample },
  { path: "*", title: "404", component: NotFoundExample },
];

const dom: Ref<HTMLDivElement> = useRef<HTMLDivElement>();
const router = new Router(dom, routerTable);
router.init();

class App extends ClassComponent {
  override onDomCreated(): void {
    router.doRoute(location.pathname);
  }

  override render() {
    return (
      <div className="flex h-full w-full">
        <nav className="flex h-full flex-col gap-2 border-0 border-r border-solid border-gray-200 p-4">
          {routerTable.map(({ path, title }) => {
            return (
              <Link
                onClick={() => {
                  router.doRoute(path);
                }}
              >
                {title}
              </Link>
            );
          })}
        </nav>
        <div ref={dom} className="flex flex-1 items-center justify-center"></div>
      </div>
    );
  }
}
document.getElementById("root")!.append((<App />) as Element);

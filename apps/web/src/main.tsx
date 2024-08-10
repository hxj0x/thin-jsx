import { ClassComponent, useRef } from "@hxj0x/thin-jsx";
import "normalize.css";
import { ButtonExample } from "./ButtonExample";
import { IconExample } from "./IconExample";
import "./index.css";

const dom = useRef<HTMLDivElement>();
const baseUrl = import.meta.env.BASE_URL;
const routerTable = new Map<string, typeof ClassComponent>();
routerTable.set(baseUrl + "/icons", IconExample);
routerTable.set(baseUrl + "/buttons", ButtonExample);
window.addEventListener("popstate", (e) => {
  e.preventDefault();
  doRoute(e.state);
});

function initRoute() {
  if (location.pathname === baseUrl) {
    history.replaceState(baseUrl + "/icon", "", baseUrl + "/icon");
    doRoute(baseUrl + "/icon");
  } else {
    doRoute(location.pathname);
  }
}

function doRoute(toPath) {
  console.log("🚀 ~ doRoute ~ toPath:", toPath);
  const Comp = routerTable.get(toPath);
  if (Comp) {
    dom.current.replaceChildren((<Comp />) as Element);
  } else {
    const a = <h1>404 NOT Found</h1>;
    dom.current.replaceChildren(a as Element);
  }
}

class App extends ClassComponent {
  override onDomCreated(): void {
    initRoute();
  }

  override render() {
    return (
      <div>
        <div ref={dom}></div>
        <button
          type="button"
          onClick={() => {
            history.pushState(baseUrl + "/icons", "", baseUrl + "/icons");
            doRoute(baseUrl + "/icons");
          }}
        >
          icons
        </button>
        <button
          type="button"
          onClick={() => {
            history.pushState(baseUrl + "/buttons", "", baseUrl + "/buttons");
            doRoute(baseUrl + "/buttons");
          }}
        >
          buttons
        </button>
        <button
          type="button"
          onClick={() => {
            history.pushState(baseUrl + "/404", "", baseUrl + "/404");
            doRoute(baseUrl + "/404");
          }}
        >
          404
        </button>
      </div>
    );
  }
}
document.getElementById("app")!.append((<App />) as Element);

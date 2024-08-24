import { ClassComponent, Ref } from "@hxj0x/thin-jsx";

export class Router {
  private readonly routerTable = new Map<string, typeof ClassComponent>();
  private readonly dom: Ref<Element>;

  constructor(dom: Ref<Element>, routers: Array<{ path: string; title: string; component: typeof ClassComponent }>) {
    this.dom = dom;
    routers.forEach((router) => {
      this.routerTable.set(router.path, router.component);
    });
  }

  public init() {
    window.addEventListener("popstate", (e) => {
      console.log(e.state);
      e.preventDefault();
      this.doRoute(e.state);
    });
  }

  public doRoute(toPath: string) {
    const Comp = this.routerTable.get(toPath);
    if (Comp) {
      history.pushState(toPath, "", toPath);
      this.dom.current.replaceChildren((<Comp />) as Element);
    } else {
      const FallbackComp = this.routerTable.get("*");
      if (FallbackComp) {
        history.pushState(toPath, "", toPath);
        this.dom.current.replaceChildren((<FallbackComp />) as Element);
      }
    }
  }
}

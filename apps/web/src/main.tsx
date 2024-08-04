import { HelloClass } from "./HelloClass";
import { HelloFC } from "./HelloFC";

const app = document.getElementById("app")!;

app.appendChild(
  (() => {
    return (
      <main>
        <HelloFC />
        <HelloClass />
      </main>
    );
  })()
);

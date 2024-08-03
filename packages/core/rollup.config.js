import { defineConfig } from "rollup";
import esbuild from "rollup-plugin-esbuild";

const config = defineConfig([
  {
    input: ["./src/index.ts"],
    plugins: [esbuild.default()],
    output: [
      {
        dir: "dist/umd",
        name: "index",
        format: "umd",
      },
      {
        dir: "dist/esm",
        name: "index",
        format: "esm",
      },
    ],
  },
]);

export default config;

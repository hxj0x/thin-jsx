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
        sourcemap: true,
      },
      {
        dir: "dist/esm",
        name: "index",
        format: "esm",
        sourcemap: true,
      },
    ],
  },
]);

export default config;

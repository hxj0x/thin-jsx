import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/thin-jsx",
  plugins: [dts({ entryRoot: "./src/components" })],
  resolve: {},
  build: {
    lib: {
      entry: path.resolve(__dirname, "./src/components"),
      name: "thin-jsx-ui",
      fileName: "thin-jsx-ui",
    },
  },
});

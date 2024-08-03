# script

```shell
pnpm -r --filter=./packages/core prepack
pnpm -r --filter=./apps/web dev
pnpm -r publish --access public

pnpm add rollup rollup-plugin-esbuild esbuild --filter packages/core
#  根工作区安装依赖
pnpm add --workspace-root
# 指定某个模块安装依赖
pnpm -F .\packages\core\  add rimraf rollup rollup-plugin-esbuild esbuild
``` 
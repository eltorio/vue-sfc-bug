# vue-sfc-bug

This template should help get you started developing with Vue 3 in Vite.

# to reproduct
```bash
npm init vue@latest  # with typescript router pinia -no test (name is vue-sfc-bug
cd vue-sfc-bug
npm i
```
edit main.ts
```ts
const useImage = (url: string) => {
    return new URL(`/src/${url}`, import.meta.url).href;
  };
```

edit tsconfig.json
```json
{
    compilerOptions": {
    "module": "esnext",
    }
}
```
run
```bash
npm run dev
```
and see error
```bash
12:04:38 PM [vite] Internal server error: At least one <template> or <script> is required in a single file component.
  Plugin: vite:vue
  File: /Users/name/Development/vue-sfc-bug/src/views/HomeView.vue
      at Object.parse (/Users/name/Development/vue-sfc-bug/node_modules/@vue/compiler-sfc/dist/compiler-sfc.cjs.js:5225:21)
      at createDescriptor (/Users/name/Development/vue-sfc-bug/node_modules/@vitejs/plugin-vue/dist/index.cjs:65:43)
      at transformMain (/Users/name/Development/vue-sfc-bug/node_modules/@vitejs/plugin-vue/dist/index.cjs:2216:34)
      at TransformContext.transform (/Users/name/Development/vue-sfc-bug/node_modules/@vitejs/plugin-vue/dist/index.cjs:2705:16)
      at Object.transform (file:///Users/name/Development/vue-sfc-bug/node_modules/vite/dist/node/chunks/dep-51c4f80a.js:40224:44)
```

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
# vue-sfc-bug with vue 3.2.44

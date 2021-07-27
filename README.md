This repository demonstrates two bugs in TypescriptToLua's resolve mechanism (https://github.com/TypeScriptToLua/TypeScriptToLua/blob/213b204c7702bae70c3eb71172e8c7cabb73eff0/src/transpilation/resolve.ts). Both of them are shown in file src/subfolder/submodule.ts:

1. It ignores `baseUrl` parameter in tsconfig.json
2. It rewrites `a.require("test")` while it shouldn't

To run this demonstration:

- To try to compile to lua:
```
npm install
npm run build_lua
```
- To compile to javascript and run it:
```
npm install
npm run build_js
npm run run_js
```
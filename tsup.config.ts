import { defineConfig } from "tsup";

export default defineConfig((options) => {
  return {
    entry: ["src/index.ts"],
    format: ['cjs','esm','iife'],
    // lib 库就直接设置成 false
    splitting: false,
    dts: true,
    sourcemap: true,
    clean: true,
    minify: !options.watch,
  };
});

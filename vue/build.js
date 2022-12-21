const path = require("path");
const { defineConfig, build } = require("vite");
const vue = require("@vitejs/plugin-vue");

const entryDir = path.resolve(__dirname, "../src/lib");
const outDir = path.resolve(__dirname, "../dist");

// vite配置
const baseConfig = defineConfig({
  configFile: false,
  publicDir: false,
  plugins: [vue()],
});

// rollup配置
const rollupOptions = {
  external: ["vue", "vue-loader"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};

// 全量构建
const buildAll = async () => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        rollupOptions,
        lib: {
          entry: path.resolve(entryDir, "index.js"), // 主入口js
          name: "monetUI", // 名称
          fileName: "monetui", // 文件名
          formats: ["es", "umd"],
        },
        outDir,
      },
    })
  );
};

const buildLib = async () => {
  await buildAll();
};

buildLib();

import { defineConfig, type UserConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import ElementPlus from "unplugin-element-plus/vite";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import { viteStaticCopy } from "vite-plugin-static-copy";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig(() => {
  const configurations: UserConfig = {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    plugins: [
      vue(),
      ElementPlus({
        useSource: true,
      }),
      tailwindcss(),
      viteStaticCopy({
        targets: [
          {
            src: "src/assets/styles/element-plus",
            dest: "element-plus-theming",
          },
        ],
      }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
          additionalData: `@use "@/assets/styles/element-plus/index.scss" as *;`,
        },
      },
    },
    build: {
      lib: {
        entry: path.resolve(__dirname, "src/index.ts"),
        name: "BayorUI",
        fileName: (format) => `bayor-ui.${format}.js`,
        formats: ["es", "umd"],
      },
      rollupOptions: {
        external: ["vue", "element-plus"],
        output: {
          globals: {
            vue: "Vue",
            "element-plus": "ElementPlus",
          },
        },
      },
    },
  };

  return configurations;
});

import { defineConfig, type UserConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import ElementPlus from "unplugin-element-plus/vite";

// https://vite.dev/config/
export default defineConfig(() => {
  const configurations: UserConfig = {
    resolve: {
      alias: {
        "@": "/src",
      },
    },
    plugins: [
      vue(),
      ElementPlus({
        useSource: true,
      }),
      tailwindcss(),
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
        entry: "src/index.ts",
        name: "BayorUI",
        fileName: (format) => `bayor-ui.${format}.js`,
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

import { defineConfig, type UserConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import ElementPlus from "unplugin-element-plus/vite";

// https://vite.dev/config/
export default defineConfig(() => {
  const configurations: UserConfig = {
    plugins: [
      vue(),
      ElementPlus({
        useSource: true,
      }),
      tailwindcss(),
    ],
  };

  return configurations;
});

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { resolve } from "path";
import Unocss from "unocss/vite";
import { presetUno, presetAttributify, presetIcons } from "unocss";

import Icons from "unplugin-icons/vite";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Icons({ compiler: "vue3", autoInstall: true }),
    Unocss({ presets: [presetUno(), presetAttributify(), presetIcons()] }),
  ],
  base: "./", // 打包路径
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"), // 设置别名
    },
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
});

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vite.dev/config/
export default defineConfig({
  base: "/moodiefoodie/",
  plugins: [vue(), reactRefresh()],
  publicPath: process.env.NODE_ENV === "production" ? "/moodiefoodie/" : "/",
});

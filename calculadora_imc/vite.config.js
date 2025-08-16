import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://github.com/leandrodiascarvalho/imc_react/tree/main/calculadora_imc",
});

/// <reference types="vitest" />

import { fileURLToPath, URL } from "url"
import { defineConfig } from "vite"

import Vue from "@vitejs/plugin-vue"

export default defineConfig({
  test: {
    globals: true
  },
  plugins: [Vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  }
})

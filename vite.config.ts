/// <reference types="vitest" />

// Configure Vitest (https://vitest.dev/config/)

import { defineConfig } from 'vite'

export default defineConfig({
	build: {
		lib: {
			entry: 'src/index.ts',
			name: "server",
			fileName: "index",
			formats: ["cjs"]
		}
	},
	
	test: {
    /* for example, use global to avoid globals imports (describe, test, expect): */
    // globals: true,
  },
})
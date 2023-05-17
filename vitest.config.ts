/// <reference types="vitest" />
/// <reference types="Vite/client" />

import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        globals: true,
        environment: 'jsdom'
    },
})
import { fileURLToPath, URL } from 'node:url';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), dts({
		insertTypesEntry: true,
	})],
	build: {
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			name: 'VueFarsify',
			formats: ['es', 'cjs', 'umd'],
			fileName: format => `vue-farsify.${format}.js`,
		},
		rollupOptions: {
			// make sure to externalize deps that shouldn't be bundled
			// into your library
			external: ['vue'],
			output: {
				// Provide global variables to use in the UMD build
				// for externalized deps
				globals: {
					vue: 'Vue',
				},
			},
		},
	},
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
	server: {
		port: 8080,
		host: '0.0.0.0',
	},
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import indexify from "vite-plugin-indexify";
// import Unfonts from "unplugin-fonts/vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		// Unfonts({
		// 	custom: {
		// 		display: "swap",
		// 		families: {
		// 			Ac437: {
		// 				src: "./src/assets/fonts/Ac437_IBM_EGA_8x8.ttf",
		// 			},
		// 			ToshibaSat: {
		// 				src: "./src/assets/fonts/PxPlus_ToshibaSat_9x16.ttf",
		// 			},
		// 		},
		// 	},
		// }),
		indexify([
			{
				directory: "posts",
				include: /.*\.(md|markdown)$/,
				includeSubdirs: false,
				indexFileName: "index.json",
			},
			{
				directory: "mainpages",
				include: /.*\.(md|markdown)$/,
				includeSubdirs: false,
				indexFileName: "index.json",
			},
		]),
	],
	build: {
		rollupOptions: {
			output: {
				assetFileNames: "assets/[name].[ext]",
				chunkFileNames: "assets/js/chunks/[name].js",
				entryFileNames: "assets/js/bundles/[name].js",
			},
		},
	},
});

// @ts-check
import { join } from 'path';
import { skeleton } from '@skeletonlabs/tw-plugin';
/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve(
			'@skeletonlabs/skeleton'),
			'../**/*.{html,js,svelte,ts}'
		)
	],
	theme: {
		extend: {
			fontFamily: {
				'rubik': ['Rubik', 'sans-serif']
			},
		},
	},
	plugins: [
		skeleton({
			themes: {
				// Register each theme within this array:
				preset: [ "skeleton", "modern", "crimson", 'wintry' ] 
			}
		})
	]
}
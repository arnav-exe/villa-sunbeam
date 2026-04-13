import { join } from 'path'

import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin'

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {
			colors: {
				cream: '#F9F4EC',
				terracotta: '#B8692E',
				gold: {
					DEFAULT: '#C9973A',
					light: '#D4A853',
				},
				villa: {
					dark: '#1C1409',
					mid: '#5A4A32',
					warm: '#3A2C18',
					sand: '#E0D0B8',
				},
			},
			fontFamily: {
				display: ['"Cormorant Garamond"', 'serif'],
				label: ['Jost', 'sans-serif'],
			},
			backgroundImage: {
				'hero-bg': "url('src/lib/images/hero-bg.jpg')"
			},
		},
	},
	plugins: [
		forms,
		typography,
		skeleton({
			themes: {
				preset: [{ name: 'wintry', enhancements: true }],
			},
		}),
	],
};

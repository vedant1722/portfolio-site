import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://vedant.day',
	integrations: [
		starlight({
			title: 'Vedant',
			// layout: 'splash',
			social: {
				github: 'https://github.com/vedant1722',
				linkedin: 'https://www.linkedin.com/in/vedant-codes',
				"x.com": 'https://x.com/theproductguy_'
			},
			// sidebar: [
				
			// ],
		}),
	],
});

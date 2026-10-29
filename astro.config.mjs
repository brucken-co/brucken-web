import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: 'https://brucken.com.br',
    integrations: [sitemap()],
});

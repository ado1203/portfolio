/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'media',
    theme: {
        extend: {
            colors: {
                'primary-color': '#8BD49C',
            }
        },
    },
    plugins: [],
}

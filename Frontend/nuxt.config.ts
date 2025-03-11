export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},

    devServer: {
        port: 5172,
        host: '0.0.0.0'
    },
    css: ["~/assets/css/tailwind.css"],
    tailwindcss: {
        cssPath: ["~/assets/css/tailwind.css", {injectPosition: 'last'}]
    },
    app: {
        head: {
            title: "Test Case"
        }
    },

    modules: [
        "@nuxtjs/tailwindcss",
        "@pinia/nuxt",
        "nuxt-auth-utils",
        "@vee-validate/nuxt",
    ],


})
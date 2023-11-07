function getBaseUrl() {
  return "https://task.cayan.co/api";
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  target: "static",
  generate: {
    fallback: true,
  },

  head: {
    titleTemplate: "Products App",
    title: "Products App",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap",
      },
      {
        rel: "stylesheet",
        type: "materialdesignicons",
        href: "https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css",
      },
    ],
  },
  pageTransition: {
    name: "fade",
    mode: "out-in",
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/scss/main.scss"],

  modules: ["@nuxtjs/tailwindcss"],

  buildModules: ["@nuxtjs/axios"],

  axios: {
    baseURL: "https://task.cayan.co/api",
    proxyHeaders: false,
    credentials: false,
  },
};

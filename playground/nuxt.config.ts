export default defineNuxtConfig({
  modules: ['@roshan-labs/http-module'],
  http: {
    baseURL: 'https://api.github.com/',
  },
})

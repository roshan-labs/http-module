import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  ssr: false,
  modules: ['@roshan-labs/http-module'],
  http: {
    baseURL: 'https://api.github.com/',
  },
})

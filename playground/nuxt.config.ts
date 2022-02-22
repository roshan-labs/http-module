import { defineNuxtConfig } from 'nuxt3'

import MyModule from '..'

export default defineNuxtConfig({
  modules: [MyModule],
  publicRuntimeConfig: {
    http: {
      baseURL: 'https://api.github.com/',
    },
  },
})

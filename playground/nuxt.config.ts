import { defineNuxtConfig } from 'nuxt/config'

import NuxtModule from '..'

export default defineNuxtConfig({
  modules: [NuxtModule],
  http: {
    baseURL: 'https://api.github.com/',
  },
})

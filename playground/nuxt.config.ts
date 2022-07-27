import { defineNuxtConfig } from 'nuxt'

import HttpModule from '..'

export default defineNuxtConfig({
  modules: [HttpModule],
  http: {
    baseURL: 'https://api.github.com/',
  },
})

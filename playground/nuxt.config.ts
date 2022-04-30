import { defineNuxtConfig } from 'nuxt'

import HttpModule from '..'

export default defineNuxtConfig({
  ssr: false,
  modules: [HttpModule],
})

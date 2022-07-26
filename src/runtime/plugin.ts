import { defineNuxtPlugin, useRuntimeConfig } from 'nuxt/app'

import { createInstance } from './http'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const http = createInstance(config.public.http)

  return {
    provide: { http },
  }
})

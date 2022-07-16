import { defineNuxtPlugin, useRuntimeConfig } from '#app'

import type { Instance } from './types'
import { createInstance } from './http'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const http = createInstance(config.public.http)

  return {
    provide: { http },
  }
})

interface PluginInjection {
  $http: Instance
}

declare module '#app' {
  interface NuxtApp extends PluginInjection {}
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties extends PluginInjection {}
}

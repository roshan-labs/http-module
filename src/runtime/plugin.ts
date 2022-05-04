import { defineNuxtPlugin, useRuntimeConfig } from '#app'

import { createInstance } from './http'
import { Instance } from './types'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const http = createInstance(config.public.http)

  return {
    provide: { http },
  }
})

declare module '#app' {
  interface NuxtApp {
    $http: Instance
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $http: Instance
  }
}

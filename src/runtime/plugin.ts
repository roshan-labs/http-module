import { defineNuxtPlugin, useRuntimeConfig } from '#imports'

import { createInstance } from './http'
import { Instance } from './types'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  const http = createInstance(config.public.http)

  nuxtApp.provide('http', http)
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

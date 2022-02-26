import { defineNuxtPlugin } from '#app'

import { createInstance } from './http'
import { Instance } from './types'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  const http = createInstance({
    ...config.http,
  })

  nuxtApp.provide('http', http)
})

declare module '#app' {
  interface NuxtApp {
    $http: Instance
  }
}

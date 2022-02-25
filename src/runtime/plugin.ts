import { defineNuxtPlugin } from '#app'

import { createInstance } from './http'

export default defineNuxtPlugin((nuxtApp) => {
  // const config = useRuntimeConfig()
  const http = createInstance()

  nuxtApp.provide('http', http)
})

declare module '#app' {
  interface NuxtApp {
    $http: string
  }
}

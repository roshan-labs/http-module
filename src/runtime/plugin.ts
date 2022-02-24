import { defineNuxtPlugin } from '#app'

import { http } from './http'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('http', http)
})

declare module '#app' {
  interface NuxtApp {
    $http: typeof http
  }
}

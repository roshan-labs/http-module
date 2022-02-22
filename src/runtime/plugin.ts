import { defineNuxtPlugin } from '#app'

import { http } from './composables'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      http,
    },
  }
})

// declare module '#app' {
//   interface NuxtApp {
//     $http: typeof http
//   }
// }

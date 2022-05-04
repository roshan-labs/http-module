import { to } from 'await-to-js'
import { defineNuxtPlugin, useRuntimeConfig } from '#app'

type FetchOptions = Parameters<typeof $fetch>[1]

class Http {
  public options: FetchOptions

  constructor(options: FetchOptions) {
    this.options = options
  }

  public request<R>(url: string, options: FetchOptions = {}) {
    return to<R>(
      $fetch(url, {
        ...this.options,
        ...options,
      })
    )
  }

  public useRequest<R>(url: string, options: FetchOptions = {}) {
    return useFetch<R>(url, {
      ...this.options,
      ...options,
    })
  }
}

interface Instance extends Http {
  create(options?: FetchOptions): Instance
}

function createInstance(options: FetchOptions = {}): Instance {
  const context = new Http(options)
  const instance: Instance = Object.assign(context, {
    create(instanceOptions: FetchOptions = {}) {
      return createInstance({
        ...options,
        ...instanceOptions,
      })
    },
  })

  return instance
}

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

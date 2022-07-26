import { to } from 'await-to-js'
import { useFetch } from 'nuxt/app'

import { FetchOptions, Instance } from './types'

export class Http {
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

  public useRequest: typeof useFetch = (url, options = {}) => {
    return useFetch(url, {
      ...this.options,
      ...options,
    })
  }
}

export function createInstance(options: FetchOptions = {}) {
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

import { to } from 'await-to-js'
import { useFetch } from '#imports'

import { FetchOptions, Instance } from './types'

type Result = ReturnType<typeof useFetch>

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

  public useRequest<R>(url: string, options: FetchOptions = {}): Result {
    return useFetch<R>(url, {
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

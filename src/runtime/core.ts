import { to } from 'await-to-js'

import { FetchOptions } from './types'

export class Http {
  public options: FetchOptions

  constructor(options: FetchOptions) {
    this.options = options
  }

  // fetchOptions(params?: SearchParams, method: string = 'GET') {
  //   const options = {
  //     ...this.options,
  //   }

  //   options.method = method

  //   if (params) {
  //     if (['POST', 'PUT', 'PATCH'].includes(method)) {
  //       options.body = params
  //     } else {
  //       options.params = params
  //     }
  //   }

  //   return options
  // }

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

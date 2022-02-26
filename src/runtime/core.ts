import { FetchOptions, SearchParams } from './types'

/**
 * 根据 Nuxt $fetch 封装请求类
 */
export class Http {
  options: FetchOptions

  constructor(options: FetchOptions) {
    this.options = options
  }

  private fetchOptions(params?: SearchParams, method: string = 'GET') {
    const options = {
      ...this.options,
    }

    options.method = method

    if (params) {
      if (['POST', 'PUT', 'PATCH'].includes(method)) {
        options.body = params
      } else {
        options.params = params
      }
    }

    return options
  }

  public request(url: string, options: FetchOptions = {}) {
    return $fetch(url, {
      ...this.options,
      ...options,
    })
  }

  public async get(url: string, params?: SearchParams) {
    try {
      return await $fetch(url, this.fetchOptions(params))
    } catch (error) {
      return error
    }
  }

  public async post(url: string, params?: SearchParams) {
    try {
      return await $fetch(url, this.fetchOptions(params, 'POST'))
    } catch (error) {
      return error
    }
  }

  public async put(url: string, params?: SearchParams) {
    try {
      return await $fetch(url, this.fetchOptions(params, 'PUT'))
    } catch (error) {
      return error
    }
  }

  public async delete(url: string, params?: SearchParams) {
    try {
      return await $fetch(url, this.fetchOptions(params, 'DELETE'))
    } catch (error) {
      return error
    }
  }
}

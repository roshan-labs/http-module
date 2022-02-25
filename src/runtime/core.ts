import { FetchOptions } from './types'

/**
 * 根据 Nuxt $fetch 封装请求类
 */
export class Http {
  options: FetchOptions

  constructor(options: FetchOptions) {
    this.options = options
  }

  public request(url: string, options: FetchOptions = {}) {
    return $fetch(url, {
      ...this.options,
      ...options,
    })
  }
}

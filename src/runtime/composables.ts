import type { FetchOptions } from 'ohmyfetch'

import { useRuntimeConfig } from '#app'
import { Http } from './http'

let http: Http | null = null

export function useHttp(options: FetchOptions = {}) {
  if (!http) {
    const config = useRuntimeConfig()

    http = new Http({
      ...config.public.http,
      ...options,
    })
  }

  return http
}

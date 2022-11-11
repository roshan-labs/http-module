import type { FetchOptions } from 'ohmyfetch'

import { Http } from './http'
import { useRuntimeConfig } from '#imports'

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

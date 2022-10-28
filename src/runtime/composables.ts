import type { FetchOptions } from 'ohmyfetch'
import { defu } from 'defu'
import { useRuntimeConfig } from 'nuxt/app'

import { Http } from './http'

let http: Http | null = null

export function useHttp(options: FetchOptions = {}) {
  if (!http) {
    const config = useRuntimeConfig()

    http = new Http(defu(options, config.public.http))
  }

  return http
}

import type { FetchOptions } from 'ohmyfetch'
import { defu } from 'defu'

import { Http } from './http'
import { useRuntimeConfig } from '#imports'

let http: Http | null = null

export function useHttp(options: FetchOptions = {}) {
  if (!http) {
    const config = useRuntimeConfig()

    http = new Http(defu(options, config.public.http))
  }

  return http
}

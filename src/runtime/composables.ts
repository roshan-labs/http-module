import { useRuntimeConfig } from '#app'

import { Http } from './http'

let http: Http | null = null

export function useHttp() {
  if (!http) {
    const config = useRuntimeConfig()

    http = new Http(config.public.http)
  }

  return http
}

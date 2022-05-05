import type { FetchOptions } from 'ohmyfetch'

import { Http } from './http'

export { FetchOptions }

export interface Instance extends Http {
  create(options?: FetchOptions): Instance
}

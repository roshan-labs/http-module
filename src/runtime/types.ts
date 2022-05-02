import { Http } from './core'

export type FetchOptions = Parameters<typeof $fetch>[1]
export type SearchParams = FetchOptions['params']

export interface Instance extends Http {
  create(options?: FetchOptions): Instance
}

import { Http } from './core'

export type FetchOptions = Parameters<typeof $fetch>[1]

export interface Instance extends Http {
  (): Http['request']
  create(options: FetchOptions): Instance
}

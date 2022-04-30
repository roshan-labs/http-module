import { Http } from './core'

export interface ModuleOptions {
  baseURL: string
}

export type FetchOptions = Parameters<typeof $fetch>[1]
export type SearchParams = FetchOptions['params']

export interface Instance extends Http {
  create(options?: FetchOptions): Instance
}

declare module '@nuxt/schema' {
  interface RuntimeConfig {
    public: {
      http?: ModuleOptions
    }
  }
}

import { Http } from './core'
import { FetchOptions, Instance } from './types'

export function createInstance(options: FetchOptions = {}) {
  const context = new Http(options)
  const instance: Instance = Object.assign(context, {
    create(instanceOptions: FetchOptions = {}) {
      return createInstance({
        ...options,
        ...instanceOptions,
      })
    },
  })

  return instance
}

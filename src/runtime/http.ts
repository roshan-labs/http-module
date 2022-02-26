import { Http } from './core'
import { FetchOptions, Instance } from './types'

/**
 * 创建 Http 实例
 * @param options Http 配置
 */
export function createInstance(options: FetchOptions = {}) {
  const context = new Http(options)
  // 代理 Http 实例 request 方法
  let instance: Instance = Http.prototype.request.bind(context)

  // 把 context 实例方法代理到 instance
  instance = Object.assign(instance, Http.prototype, context)

  instance.create = (instanceOptions = {}) => {
    return createInstance({
      ...options,
      ...instanceOptions,
    })
  }

  return instance
}

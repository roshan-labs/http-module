import type { FetchOptions } from 'ohmyfetch'
import type { UseFetchOptions } from 'nuxt/app'
import { to } from 'await-to-js'
import { defu } from 'defu'
import { useFetch } from '#imports'

type Params = Record<string, any>

export class Http {
  /** $fetch 配置参数 */
  public options: FetchOptions

  constructor(options: FetchOptions = {}) {
    this.options = options
  }

  /**
   * 基于当前实例 options 创建一个新实例
   * @param options $fetch 配置参数
   * @returns 返回一个基于当前实例选项新建的 http
   */
  public create(options: FetchOptions = {}): Http {
    return new Http(defu(options, this.options))
  }

  /**
   * http 请求
   * @param url 请求地址
   * @param options useFetch 配置参数
   * @returns Promise 结构请求结果
   */
  public request<R = any>(url: string, options: FetchOptions = {}) {
    return to<R>($fetch(url, defu(options, this.options)))
  }

  /**
   * 组合式 http 请求
   * @param url 请求地址
   * @param options useFetch 配置参数
   * @returns 响应式请求结果
   */
  public useRequest<R = any>(url: string, options: UseFetchOptions<R> = {}) {
    return useFetch(url, defu(options, this.options))
  }

  /**
   * get 请求
   * @param url 请求地址
   * @param params 请求参数
   * @param options $fetch 配置参数
   * @returns Promise 结构 get 请求结果
   */
  public get<R = any>(url: string, params: Params = {}, options: FetchOptions = {}) {
    return this.request<R>(url, defu({ method: 'GET', params }, options, this.options))
  }

  /**
   * 组合式 get 请求
   * @param url 请求地址
   * @param params 请求参数
   * @param options useFetch 配置参数
   * @returns 响应式请求结果
   */
  public useGet<R = any>(url: string, params: Params = {}, options: UseFetchOptions<R> = {}) {
    return this.useRequest<R>(url, defu({ method: 'GET', params }, options, this.options))
  }

  /**
   * post 请求
   * @param url 请求地址
   * @param params 请求参数
   * @param options $fetch 配置参数
   * @returns Promise 结构 post 请求结果
   */
  public post<R = any>(url: string, params: Params = {}, options: FetchOptions = {}) {
    return this.request<R>(url, defu({ method: 'POST', body: params }, options, this.options))
  }

  /**
   * 组合式 post 请求
   * @param url 请求地址
   * @param params 请求参数
   * @param options useFetch 配置参数
   * @returns 响应式请求结果
   */
  public usePost<R = any>(url: string, params: Params = {}, options: UseFetchOptions<R> = {}) {
    return this.useRequest<R>(url, defu({ method: 'POST', body: params }, options, this.options))
  }

  /**
   * put 请求
   * @param url 请求地址
   * @param params 请求参数
   * @param options $fetch 配置参数
   * @returns Promise 结构 put 请求结果
   */
  public put<R = any>(url: string, params: Params = {}, options: FetchOptions = {}) {
    return this.request<R>(url, defu({ method: 'PUT', body: params }, options, this.options))
  }

  /**
   * delete 请求
   * @param url 请求地址
   * @param params 请求参数
   * @param options $fetch 配置参数
   * @returns Promise 结构 delete 请求结果
   */
  public delete<R = any>(url: string, params: Params = {}, options: FetchOptions = {}) {
    return this.request<R>(url, defu({ method: 'DELETE', body: params }, options, this.options))
  }
}

import type { FetchOptions } from 'ofetch'
import 'nuxt/app'

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
    return new Http({
      ...this.options,
      ...options,
    })
  }

  /**
   * 发送一个自定义请求
   * @param url 请求地址
   * @param options ofetch options
   */
  public request<R = any>(url: string, options: FetchOptions = {}) {
    return $fetch<R>(url, {
      ...this.options,
      ...options,
    })
  }

  /**
   * 发送 get 请求
   * @param url 请求地址
   * @param params 请求参数
   * @param options ofetch options
   */
  public get<R = any>(url: string, params: Params = {}, options: FetchOptions = {}) {
    return this.request<R>(url, {
      ...this.options,
      ...options,
      method: 'get',
      params,
    })
  }

  /**
   * 发送 post 请求
   * @param url 请求地址
   * @param params 请求参数
   * @param options ofetch options
   */
  public post<R = any>(url: string, params: Params = {}, options: FetchOptions = {}) {
    return this.request<R>(url, {
      ...this.options,
      ...options,
      method: 'post',
      body: params,
    })
  }

  /**
   * 发送 put 请求
   * @param url 请求地址
   * @param params 请求参数
   * @param options ofetch options
   */
  public put<R = any>(url: string, params: Params = {}, options: FetchOptions = {}) {
    return this.request<R>(url, {
      ...this.options,
      ...options,
      method: 'put',
      body: params,
    })
  }

  /**
   * 发送 delete 请求
   * @param url 请求地址
   * @param params 请求参数
   * @param options ofetch options
   */
  public delete<R = any>(url: string, params: Params = {}, options: FetchOptions = {}) {
    return this.request<R>(url, {
      ...this.options,
      ...options,
      method: 'delete',
      body: params,
    })
  }
}

import type { Ref } from 'vue'
import type { FetchOptions } from 'ohmyfetch'
import { defu } from 'defu'
import { isRef } from 'vue'

export type Params = Record<string, any>

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

  public request<R = any>(url: string, options: FetchOptions = {}) {
    return $fetch<R>(url, defu(options, this.options))
  }

  public get<R = any>(
    url: string | Ref<string>,
    params: Params | Ref<Params> = {},
    options: FetchOptions = {}
  ) {
    const _url = isRef(url) ? url.value : url
    const _params = isRef(params) ? params.value : params

    return this.request<R>(_url, defu({ method: 'GET', params: _params }, options, this.options))
  }

  public post<R = any>(
    url: string | Ref<string>,
    params: Params | Ref<Params> = {},
    options: FetchOptions = {}
  ) {
    const _url = isRef(url) ? url.value : url
    const _params = isRef(params) ? params.value : params

    return this.request<R>(_url, defu({ method: 'POST', body: _params }, options, this.options))
  }

  public put<R = any>(
    url: string | Ref<string>,
    params: Params | Ref<Params> = {},
    options: FetchOptions = {}
  ) {
    const _url = isRef(url) ? url.value : url
    const _params = isRef(params) ? params.value : params

    return this.request<R>(_url, defu({ method: 'PUT', body: _params }, options, this.options))
  }

  public delete<R = any>(
    url: string | Ref<string>,
    params: Params | Ref<Params> = {},
    options: FetchOptions = {}
  ) {
    const _url = isRef(url) ? url.value : url
    const _params = isRef(params) ? params.value : params

    return this.request<R>(_url, defu({ method: 'DELETE', body: _params }, options, this.options))
  }
}

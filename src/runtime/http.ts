import type { Ref } from 'vue'
import type { FetchOptions } from 'ofetch'
import { isRef } from 'vue'
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

  public request<R = any>(url: string, options: FetchOptions = {}) {
    return $fetch<R>(url, {
      ...this.options,
      ...options,
    })
  }

  public get<R = any>(
    url: string | Ref<string>,
    params: Params | Ref<Params> = {},
    options: FetchOptions = {}
  ) {
    const _url = isRef(url) ? url.value : url
    const _params = isRef<Params>(params) ? params.value : params

    return this.request<R>(_url, {
      ...this.options,
      ...options,
      method: 'get',
      params: _params,
    })
  }

  public post<R = any>(
    url: string | Ref<string>,
    params: Params | Ref<Params> = {},
    options: FetchOptions = {}
  ) {
    const _url = isRef(url) ? url.value : url
    const _params = isRef<Params>(params) ? params.value : params

    return this.request<R>(_url, {
      ...this.options,
      ...options,
      method: 'post',
      body: _params,
    })
  }

  public put<R = any>(
    url: string | Ref<string>,
    params: Params | Ref<Params> = {},
    options: FetchOptions = {}
  ) {
    const _url = isRef(url) ? url.value : url
    const _params = isRef<Params>(params) ? params.value : params

    return this.request<R>(_url, {
      ...this.options,
      ...options,
      method: 'put',
      body: _params,
    })
  }

  public delete<R = any>(
    url: string | Ref<string>,
    params: Params | Ref<Params> = {},
    options: FetchOptions = {}
  ) {
    const _url = isRef(url) ? url.value : url
    const _params = isRef<Params>(params) ? params.value : params

    return this.request<R>(_url, {
      ...this.options,
      ...options,
      method: 'delete',
      body: _params,
    })
  }
}

type FetchParams = Parameters<typeof $fetch>

export const http = (request: FetchParams[0], options: FetchParams[1] = {}) => {
  const $config = useRuntimeConfig()

  return $fetch(request, {
    baseURL: $config.http.baseURL,
    ...options,
  })
}

http.create = (config: FetchParams[1]) => {
  // 基于 config 返回类似 http 的新请求实例
  return (request: FetchParams[0], options: FetchParams[1] = {}) => {
    return $fetch(request, {
      ...config,
      ...options,
    })
  }
}

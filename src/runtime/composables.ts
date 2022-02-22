type FetchParams = Parameters<typeof $fetch>

export function http(request: FetchParams[0], options: FetchParams[1] = {}) {
  const $config = useRuntimeConfig()

  return $fetch(request, {
    baseURL: $config.http.baseURL,
    ...options,
  })
}

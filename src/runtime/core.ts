type FetchOptions = Parameters<typeof $fetch>[1]

export class Http {
  options: FetchOptions

  constructor(options: FetchOptions) {
    this.options = options
  }

  public request(url: string, options?: FetchOptions) {
    return $fetch(url, {
      ...this.options,
      ...options,
    })
  }
}

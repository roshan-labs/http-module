import { addImports, createResolver, defineNuxtModule } from '@nuxt/kit'

import { name, version } from '../package.json'

export interface ModuleOptions {
  baseURL: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'http',
  },
  defaults: {
    baseURL: '/',
  },
  setup(options, nuxt) {
    nuxt.options.runtimeConfig.public.http = options = {
      ...nuxt.options.runtimeConfig.public.http,
      ...options,
    }

    const { resolve } = createResolver(import.meta.url)

    nuxt.options.build.transpile.push(resolve('./runtime'))

    addImports({ name: 'useHttp', as: 'useHttp', from: resolve('./runtime/composables') })
  },
})

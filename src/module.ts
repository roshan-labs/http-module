import { addPlugin, createResolver, defineNuxtModule } from '@nuxt/kit'
import { defu } from 'defu'

import { name, version } from '../package.json'
import { ModuleOptions } from './runtime/types'

export { ModuleOptions }

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
    nuxt.options.runtimeConfig.public.http = options = defu(
      nuxt.options.runtimeConfig.public.http,
      { baseURL: options.baseURL }
    )

    const { resolve } = createResolver(import.meta.url)

    addPlugin(resolve('./runtime/plugin'))
  },
})

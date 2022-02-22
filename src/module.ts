import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { addPlugin, defineNuxtModule } from '@nuxt/kit'
import defu from 'defu'

import pkg from '../package.json'

export interface ModuleOptions {
  baseURL: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: pkg.name,
    version: pkg.version,
    configKey: 'http',
  },
  defaults: {
    baseURL: '/',
  },
  setup(options, nuxt) {
    nuxt.options.publicRuntimeConfig.http = options = defu(
      nuxt.options.publicRuntimeConfig.http,
      { baseURL: options.baseURL }
    )

    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
    nuxt.options.build.transpile.push(runtimeDir)

    addPlugin(resolve(runtimeDir, 'plugin'))
  },
})

declare module '@nuxt/schema' {
  interface PublicRuntimeConfig {
    http: {
      baseURL: string
    }
  }
}

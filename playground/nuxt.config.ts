import Module from '..'

export default defineNuxtConfig({
  ssr: false,
  modules: [Module],
  http: {
    baseURL: 'https://api.github.com/',
  },
})

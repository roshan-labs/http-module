import Module from '..'

export default defineNuxtConfig({
  modules: [Module],
  http: {
    baseURL: 'https://api.github.com/',
  },
})

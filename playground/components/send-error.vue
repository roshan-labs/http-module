<template>
  <button @click="sendError">error</button>
</template>

<script lang="ts" setup>
import { useHttp, createError, useAsyncData, watchEffect } from '#imports'

const { error } = useAsyncData(() => useHttp().request('https://google.com/404'))

watchEffect(() => {
  if (error.value) {
    console.log('错误')
  }
})

const sendError = () => {
  throw createError('error')
}
</script>

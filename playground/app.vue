<template>
  <NuxtErrorBoundary @error="onError">
    <div>
      <div>http module test</div>
      <h3>Github</h3>
      {{ params }}
      <div>
        <button @click="changeParams">Change Params</button>
        <button @click="execute()">Refresh</button>
      </div>
      <div v-if="!pending">{{ data }}</div>
    </div>
  </NuxtErrorBoundary>
</template>

<script lang="ts" setup>
import { useHttp, ref, useAsyncData } from '#imports'

const params = ref({
  username: 'gaoxiang',
})

const { data, pending, execute } = useAsyncData(() => useHttp().request('http://google.com/404'))

const changeParams = () => {
  params.value = { username: 'gx' }
  execute()
}

const onError = () => {
  console.log('error')
}
</script>

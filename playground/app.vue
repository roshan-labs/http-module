<template>
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
</template>

<script lang="ts" setup>
import { useHttp, ref, useAsyncData } from '#imports'

const params = ref({
  username: 'gaoxiang',
})

const { data, pending, execute } = useAsyncData(() =>
  useHttp().get('/users/gxmari007', params.value)
)

const changeParams = () => {
  params.value = { username: 'gx' }
  execute()
}
</script>

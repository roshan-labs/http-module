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
import { useHttp, ref } from '#imports'

const params = ref({
  username: 'gaoxiang',
})
const { data, pending, execute } = useHttp().useGet<{
  avatar_url: string
  login: string
}>('/users/gxmari007', params)

const changeParams = () => {
  params.value = { username: 'gx' }
  execute()
}
</script>

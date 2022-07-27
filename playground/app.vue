<template>
  <div>
    <div>http module test</div>
    <h3>Sino Data</h3>
    <div>{{ data }}</div>
    <h3>Github</h3>
    <div v-if="!error">{{ result }}</div>
  </div>
</template>

<script lang="ts" setup>
const http = useHttp()

const [error, result] = await http.get<{ avatar_url: string; name: string }>('/users/gxmari007')
const { data } = http.useGet(
  'https://cloudtest.tmqyt.com/new_api/sino-social/PGCContentRecommendation/getContentRecommendation',
  { flag: 1 },
  { baseURL: '' }
)
</script>

<template>
  <div>{{ data }}</div>
</template>

<script lang="ts" setup>
const { $http } = useNuxtApp()

const { data } = $http.useRequest(
  'https://ecs17.tmqyt.com/new_dev_api/sino-archives/report/event/list'
)
</script>

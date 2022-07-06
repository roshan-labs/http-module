<template>
  <div>{{ data }}</div>
</template>

<script lang="ts" setup>
const { $http } = useNuxtApp()

const { data } = $http.useRequest('https://api.github.com/users/gxmari007')
</script>

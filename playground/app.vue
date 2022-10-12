<template>
  <div>
    <div>http module test</div>
    <h3>Github</h3>
    <div v-if="!error">{{ data }}</div>
  </div>
</template>

<script lang="ts" setup>
import { useHttp } from '#imports'

const http = useHttp()

const { data, error } = http.useGet<{ avatar_url: string; login: string }>('/users/gxmari007')
</script>

<script setup lang="ts">
  import { getHomeInfo } from "@/service/home";

  const { data } = await getHomeInfo()
</script>

<template>
  <div class="layout">
    <app-header />
    <navbar :navBars="data?.data.navbars"></navbar>
    <slot />
    <app-footer />
  </div>
</template>

<style scoped>

</style>

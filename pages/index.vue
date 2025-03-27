<script setup lang="ts">
  import { useHomeStore } from "@/store/home";

  const homeStore = useHomeStore();
  const { banners } = storeToRefs(homeStore)
</script>

<template>
  <div class="home">
    <div class="wrapper content">
      <swiper :banners="banners" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .home {
    background-color: $bgGrayColor;
  }
</style>

<script setup lang="ts">
  import { useHomeStore } from "@/store/home";

  const homeStore = useHomeStore();
  const { banners, categorys } = storeToRefs(homeStore)
</script>

<template>
  <div class="home">
    <div class="wrapper content">
      <swiper :banners="banners" />
      <tab-category :categorys="categorys" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .home {
    background-color: $bgGrayColor;
  }
</style>

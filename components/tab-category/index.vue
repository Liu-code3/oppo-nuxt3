<script setup lang="ts">
  import type { ICategory  } from "@/store/home";

  withDefaults(defineProps<{
    categorys: ICategory[]
  }>(), {
    categorys: () => []
  })
</script>

<template>
  <div class="tab-category">
    <template  v-for="item of categorys" :key="item.id">
      <!-- 为了seo优化，就不做编程式导航了 -->
      <NuxtLink class="category-item" :to="item.url" target="_blank">
        <img class="pic-str" :src="item.picStr" alt="OPPO" />
        <div class="title">{{ item.title }}</div>
      </NuxtLink>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.tab-category {
  margin-top: 40px; /* color: red; */
  /* @include border(); */
  @include normalFlex();
  align-items: center;
  .category-item {
    height: 100%;
    cursor: pointer;
    .pic-str {
      width: 80px;
      height: 80px;
    }

    .title {
      margin-top: 16px;
      font-size: 16px;
      text-align: center;
      height: 24px;
      max-width: 120px;
    }
  }
}
</style>

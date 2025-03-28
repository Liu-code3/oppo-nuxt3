<script setup lang="ts">
  import type { ICategory } from "@/store/home";

  withDefaults(defineProps<{
    category: ICategory
  }>(), {
    category: () => ({})
  })
</script>

<template>
  <div class="section-category">
    <section-title :title="category.title || ''" />
    <grid-view
        :product-details="category.productDetailss"
        :category-url="category.url"
    ></grid-view>
  </div>
</template>

<script setup lang="ts">
  withDefaults(defineProps<{
    title: string
  }>(), {
    title: ''
  })
</script>

<template>
  <div class="section-title">
    {{ title }}
  </div>
</template>

<style scoped>
.section-title {
  padding-top: 60px;
  margin-bottom: 24px;
  font-size: 24px;
  font-weight: 500;

  /* @include border(); */
}
</style>

<script setup lang="ts">
  import { ElCarousel, ElCarouselItem } from "element-plus";
  import type { IBanner } from "@/store/home";

  withDefaults(defineProps<{
    banners: IBanner[]
  }>(),{
    banners: () => []
  })

  const currentIndex = ref(0)
  const handleChange = (index: number) => {
    currentIndex.value = index;
  }
</script>

<template>
  <div class="swiper">
    <el-carousel
      trigger="click"
      height="480px"
      indicator-position="none"
      @change="handleChange"
    >
      <el-carousel-item
        v-for="item of banners"
        :key="item.id"
      >
        <img class="pic-str" :src="item.picStr" alt="OPPO" />
      </el-carousel-item>
    </el-carousel>

    <!-- 指示器 -->
    <ul class="dots">
      <li
        v-for="(item, index) of banners"
        :key="item.id"
        :class="['dot',  currentIndex === index ? 'active' : '']"
      ></li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  .swiper {
    padding-top: 36px;
    position: relative;
    .pic-str {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }

    .dots {
      height: 40px;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      text-align: center;

      .dot {
        display: inline-block;
        width: 10px;
        height: 10px;
        box-sizing: border-box;
        border-radius: 10px;
        margin-right: 10px;
        background-color: #fff;
        opacity: 0.8;
      }

      .active {
        background-color: transparent;
        border: 2px solid  #fff;
        width: 12px;
        height: 12px;
        position: relative;
        top: 1px;
      }
    }
  }
</style>

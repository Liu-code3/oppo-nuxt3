<script setup lang="ts">
  import type { INavBar } from "@/store/home";

  withDefaults(
      defineProps<{
        navBars: Partial<INavBar>[]
        }>(),
      {
        navBars: () => []
        }
  )

  const currentTabName = ref("OPPO专区");

  const getPathName = computed(() => {
    return (item: Partial<INavBar>) => {
      const paths: Record<string, string> = {
        "OPPO专区": "/",
        "OnePlus专区": "/one-plus",
        "智能硬件": "/intelligent",
        "服务": "/oppo-service",
      };
      return paths[item.title!] || "/"
    }
  })


  const handleLinkClick = (item: Partial<INavBar>) => {
    currentTabName.value = item.title || "";
  }
</script>

<template>
  <div class="navbar">
    <div class="wrapper content">
      <NuxtLink to="/" class="content-left">
        <img src="~/assets/images/logo.png" class="logo" alt="oppo" />
        <h1  class="title">OPPO官网</h1>
      </NuxtLink>
      <ul class="content-center">
        <template v-if="navBars.length">
          <template v-for="item of navBars" :key="item.id">
            <li :class="currentTabName === item.title ? 'active' : ''">
              <NuxtLink
                  class="link"
                  :to="getPathName(item)"
                  @click="handleLinkClick(item)"
              >{{ item.title }}</NuxtLink>
            </li>
          </template>
        </template>
      </ul>

      <Search class="content-right"></Search>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.navbar {
  height: $navBarHeight;
  z-index: 99;
  border-bottom-color: rgba(0, 0, 0, 0.06);
  border-bottom-style: solid;
  border-bottom-width: 1px;

  /* 吸顶 */
  @include elementSticky(36px);
  background-color: white;

  .content {
    height: 100%;
    /* @include border(); */
    @include normalFlex();
    justify-content: flex-start;
    align-items: center;

    .content-left {
      display: inline-block;
      width: $logoWidth;
      height: $logoHeight;
      .logo {
        height: 100%;
      }
      .title {
        text-indent: -1000px;
        height: 0;
        margin: 0;
      }
    }

    .content-center {
      @include normalFlex();
      width: 530px;
      margin-left: 60px;

      .link {
        font-size: 14px;
        color: #000;
        opacity: 0.55;
      }
      .link:hover {
        opacity: 1;
      }
      .active .link {
        opacity: 1;
      }
    }

    .content-right {
      margin-left: 50px;
    }
  }
}
</style>

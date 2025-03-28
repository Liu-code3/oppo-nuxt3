// https://nuxt.com/docs/api/configuration/nuxt-config

import ElementPlus from "unplugin-element-plus/vite";
export default defineNuxtConfig({
  features: undefined,
  dev: false,
  $development: undefined, $env: undefined, $meta: undefined, $production: undefined, $test: undefined,
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    'normalize.css',
    '@/assets/css/global.scss',
    '@/assets/cus-font/iconfont.css'
  ], // reset.css
  build: {
    // 该文件需要进行Babel转义
    transpile: ["element-plus/es"]
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/css/variables.scss" as *;'
        }
      }
    },
    // 实现自动导入样式
    plugins: [
        ElementPlus({
          useSource: true, // 启用源文件导入，以便按需导入样式
          }
        )
    ]
  },
  modules: [
      [
          "@pinia/nuxt",
        {
          autoImports: [
              // 自动引入 `defineStore()`
              'defineStore', // import { defineStore } from 'pinia'
              'storeToRefs',
              // 自动引入 `defineStore()` 并重命名为 `definePiniaStore()`
              ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia]
          ]
        },
      ]
  ],
  app: {
    head: {
      title: "OPPO手机商城",
      meta: [
        {
          name: "description",
          content: "OPPO专区，官方正品，最新最全的OPPO手机产品以及配件在线抢购！",
        },
        {
          name: "keywords",
          content: "OPPO商城，OPPO专区, OPPO手机，OPPO配件，OPPO, OPPO官网商城",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1"
        }
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      ],
      noscript: [
          { innerHTML: 'JavaScript is required.' }
      ]
    }
  }
})

<script setup>
const allPackages = ref([
  {
    id: 1,
    name: 'vite',
    url: 'https://vitejs.dev/'
  },
  {
    id: 2,
    name: 'vue',
    url: 'https://v3.vuejs.org/'
  },
  {
    id: 3,
    name: 'pinia',
    url: 'https://pinia.vuejs.org/'
  },
  {
    id: 4,
    name: 'nprogress',
    url: 'https://github.com/rstacruz/nprogress'
  },
  {
    id: 5,
    name: 'vue-router',
    url: 'https://router.vuejs.org/'
  },
  {
    id: 6,
    name: 'daisyui',
    url: 'https://daisyui.com/'
  },
  {
    id: 7,
    name: 'unplugin-auto-import',
    url: 'https://github.com/antfu/unplugin-auto-import'
  },
  {
    id: 8,
    name: 'v-shared-element',
    url: 'https://github.com/antfu/v-shared-element'
  },
  {
    id: 9,
    name: 'vite-plugin-pwa',
    url: 'https://github.com/antfu/vite-plugin-pwa'
  },
  {
    id: 10,
    name: 'vite-plugin-vue-layouts',
    url: 'https://github.com/antfu/vite-plugin-vue-layouts'
  },
  {
    id: 11,
    name: 'vite-ssg',
    url: 'https://github.com/antfu/vite-ssg'
  },
  {
    id: 12,
    name: 'vite-ssg-sitemap',
    url: 'https://github.com/antfu/vite-ssg-sitemap'
  },
  {
    id: 13,
    name: 'vite-plugin-vue-devtools',
    url: 'https://github.com/antfu/vite-plugin-vue-devtools'
  }
])
</script>
<template>
  <HeroBg />
  <div class="flex flex-col justify-center items-center w-full h-screen">
    <h1
      class="text-7xl sm:text-9xl md:text-[10rem] font-bold text-gray-800 dark:text-white static z-50"
    >
      Vue SSG
    </h1>
    <div class="static z-50 flex justify-center items-center gap-1 max-w-2xl flex-wrap">
      <button
        v-for="item in allPackages"
        :key="item.id"
        class="bg-gray-800 hover:bg-gray-700 text-white py-1 px-2 rounded-xl"
      >
        <a :href="item.url" target="_blank">{{ item.name }}</a>
      </button>
    </div>
    <div class="static z-50 mt-10">
      <router-link
        to="/shared-elemets"
        class="bg-zinc-800 hover:bg-zinc-900 text-white p-3 rounded-xl"
      >
        See Shared Elements
      </router-link>
    </div>
  </div>
</template>
<style scoped></style>

<script setup></script>
<template>
  <HeroBg />
  <div class="flex flex-col justify-center items-center w-full h-screen">
    <!-- 404 -->
    <h1
      class="text-7xl sm:text-9xl md:text-[10rem] font-bold text-gray-800 dark:text-white static z-50"
    >
      404
    </h1>
    <p class="static z-50">Page not found</p>
  </div>
</template>
<style scoped></style>
<route lang="yaml">
name: 404
meta:
  title: 404
  layout: 404
</route>

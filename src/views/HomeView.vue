<script setup lang="ts">
import ResumeMenu from "../components/ResumeMenu.vue";
</script>

<template>
  <main class="flex flex-col justify-cente mx-auto max-w-6xl px-4 sm:px-6 w-full">
    <div class="mt-12 md:mt-24">
      <h1 class="font-bold text-5xl md:leading-normal sm:text-6xl">Hey, I'm
        <span class="before:block before:absolute before:-inset-2">
          <span class="font-bold text-blue-600 underline decoration-yellow-300">Igor</span>
        </span>.
        I'm a developer!
      </h1>
      <h1 class="font-font-bold text-1xl mt-4 md:mt-0 sm:text-3xl">
        (<span class="font-semibold">Android</span> &&
        <span class="font-semibold">Angular</span> &&
        <span class="font-semibold">dotNET</span>) && rightPlace();
      </h1>
      <div class="flex-1"></div>
    </div>
    <div class="space-y-6 md:space-y space-x-4 mt-4">
      <ResumeMenu></ResumeMenu>
      <a href="mailto:igor.mytyuk@gmail.com" target="_top" class="py-3 px-6 md:px-12 font-semibold rounded-md border bg-white border-blue-500 text-blue-600"
        type="button">
        Contact Me
      </a>
    </div>
  </main>
</template>

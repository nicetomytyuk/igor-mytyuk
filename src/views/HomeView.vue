<script setup lang="ts">
import { ArrowDownTrayIcon } from '@heroicons/vue/20/solid';
import { CodeBracketIcon } from '@heroicons/vue/20/solid';
import { PaintBrushIcon } from '@heroicons/vue/24/outline';
import { PaperAirplaneIcon } from '@heroicons/vue/24/outline';
import { DevicePhoneMobileIcon } from '@heroicons/vue/20/solid';

function mailto() {
  window.location.href = "mailto:connect@igormytyuk.dev";
}
</script>

<template>
  <main class="max-w-7xl mt-12 md:mt-24 px-4 sm:px-6 w-full mx-auto text-neutral-900">
    <div class="flex flex-col bg-white/20 backdrop-blur-sm shadow-sm p-6 rounded justify-cente">
      <h2 class="font-bold text-5xl md:leading-normal sm:text-6xl">Hey, I'm
        <span class="before:block before:absolute before:-inset-2">
          <span class="font-bold">Igor</span>
        </span>.
      </h2>
      <h1 class="font-font-bold text-1xl mt-4 md:mt-0 sm:text-3xl">
        I am a software developer with a passion for building web applications.
      </h1>
      <div class="flex-1"></div>
      <div class="space-y-6 md:space-y space-x-4">
        <a href="./static/Igor Mytyuk - Resume.pdf" target="_blank"
          class="py-3 px-6 md:px-12 inline-flex items-center rounded-md bg-black font-medium text-white shadow-sm"
          type="button">
          Resume
          <ArrowDownTrayIcon class="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </a>
        <button @click="mailto"
          class="py-3 px-6 md:px-12 inline-flex items-center rounded-md border bg-white font-medium border-black-500 text-black-600"
          type="button">
          Contact Me
          <PaperAirplaneIcon class="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </button>
      </div>


      <div class="flex flex-col md:flex-row md:space-x-4 md:space-y space-y-4 space-x mt-8">
        <div class="flex-1">
          <CodeBracketIcon class="mr-2 h-8 w-8 mb-2" aria-hidden="true" />
          <h2 class="text-xl font-bold">Full Stack</h2>
          <p class="w-3/4">Full stack developer with a focus on Front-end development.</p>
        </div>
        <div class="flex-1">
          <PaintBrushIcon class="mr-2 h-8 w-8 mb-2" aria-hidden="true" />
          <h2 class="text-xl font-bold">UI/UX</h2>
          <p class="w-3/4">I'm just in love in creating fancy user interfaces.</p>
        </div>
        <div class="flex-1">
          <DevicePhoneMobileIcon class="mr-2 h-8 w-8 mb-2" aria-hidden="true" />
          <h2 class="text-xl font-bold">Mobile</h2>
          <p class="w-3/4">Yes, I develop even mobile applications, but for now only Android apps.</p>
        </div>
      </div>
    </div>

  </main>
</template>

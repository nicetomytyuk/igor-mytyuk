<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{ error: NuxtError }>()

useSeoMeta({ title: 'Page not found | Ihor Mytyuk', robots: 'noindex' })
</script>

<template>
  <main class="lost">
    <div class="wrap">
      <p class="eyebrow">404</p>
      <h1 class="lost__title">This page does not exist.</h1>
      <p class="lost__text">It was probably refactored away. The portfolio itself still builds fine.</p>
      <a class="btn" href="/">Back to the homepage</a>
    </div>
  </main>
</template>

<style scoped>
.lost {
  display: grid;
  min-height: 100svh;
  align-items: center;
}

.lost__title {
  margin-block: 0.75rem 1rem;
  font-size: var(--step-4);
  line-height: 1.05;
  letter-spacing: -0.035em;
  color: var(--navy);
}

.lost__text {
  margin-bottom: 2rem;
  color: var(--muted);
}
</style>

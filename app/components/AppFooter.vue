<script setup lang="ts">
import { site } from '~/data/profile'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="wrap footer__row">
      <p>© {{ year }} {{ site.name }}</p>
      <p>Built with Nuxt. Zero tracking, zero cookies, one resume.</p>
      <a href="#top" aria-label="Back to top"><AppIcon name="up" /></a>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding-block: 1.5rem;
  background: var(--navy);
  border-top: 1px solid rgb(255 255 255 / 0.14);
  font-size: var(--step--1);
  color: #a9b6cc;
}

.footer__row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem 1.5rem;
}

.footer a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  border: 1px solid rgb(255 255 255 / 0.28);
  border-radius: 50%;
  color: #fff;
  transition: background-color 0.15s, color 0.15s;
}

.footer a:hover {
  background: #fff;
  color: var(--navy);
}

.footer :focus-visible {
  outline-color: #fff;
}
</style>

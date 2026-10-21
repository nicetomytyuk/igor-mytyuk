<script setup lang="ts">
defineProps<{ id: string; index: string; label: string; title: string; alt?: boolean }>()
</script>

<template>
  <section :id="id" class="section" :class="{ 'section--alt': alt }" :aria-labelledby="`${id}-title`">
    <div class="wrap section__grid">
      <header class="section__head">
        <p class="eyebrow"><span aria-hidden="true">{{ index }} / </span>{{ label }}</p>
        <h2 :id="`${id}-title`" class="section__title">{{ title }}</h2>
      </header>
      <div class="section__body">
        <slot />
      </div>
    </div>
  </section>
</template>

<style scoped>
.section__head {
  display: grid;
  gap: 0.75rem;
  align-content: start;
}

@media (min-width: 62rem) {
  .section__head {
    position: sticky;
    top: calc(var(--header-h) + 1.5rem);
    align-self: start;
  }
}
</style>

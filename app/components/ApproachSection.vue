<script setup lang="ts">
import { approach } from '~/data/profile'
</script>

<template>
  <SectionBlock id="approach" index="05" label="Approach" title="How I like to work.">
    <ul class="principles">
      <li v-for="item in approach" :key="item.title" class="principle">
        <h3 class="principle__title">{{ item.title }}</h3>
        <p>{{ item.text }}</p>
      </li>
    </ul>
  </SectionBlock>
</template>

<style scoped>
.principles {
  display: grid;
  gap: 2.25rem 3rem;
}

@media (min-width: 40rem) {
  .principles {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.principle {
  padding-top: 1rem;
  border-top: 2px solid var(--blue);
}

.principle__title {
  margin-bottom: 0.5rem;
  font-size: var(--step-1);
  letter-spacing: -0.015em;
  font-weight: 600;
  color: var(--navy);
}

.principle p {
  color: var(--muted);
}
</style>

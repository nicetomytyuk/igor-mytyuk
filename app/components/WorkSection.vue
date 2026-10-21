<script setup lang="ts">
import { work } from '~/data/profile'
</script>

<template>
  <SectionBlock id="work" index="03" label="Selected work" title="Areas I have worked in, without the confidential parts.">
    <ol class="work">
      <li v-for="(area, i) in work" :key="area.title" class="work__item">
        <span class="work__num" aria-hidden="true">{{ String(i + 1).padStart(2, '0') }}</span>
        <div>
          <h3 class="work__title">{{ area.title }}</h3>
          <p class="work__text">{{ area.description }}</p>
          <p class="work__stack">{{ area.stack }}</p>
        </div>
      </li>
    </ol>
    <p class="work__note">
      Customer systems and internal code stay private, so there are no screenshots here. Happy to talk through the details in a conversation.
    </p>
  </SectionBlock>
</template>

<style scoped>
.work {
  border-top: 1px solid var(--navy);
}

.work__item {
  display: grid;
  grid-template-columns: 2.25rem minmax(0, 1fr);
  gap: 0.5rem;
  padding-block: 1.75rem;
  border-bottom: 1px solid var(--rule);
}

@media (min-width: 40rem) {
  .work__item {
    grid-template-columns: 4rem minmax(0, 1fr);
  }
}

.work__num {
  font-family: var(--font-mono);
  font-size: var(--step--1);
  line-height: 2.2;
  color: var(--blue-text);
}

.work__title {
  font-size: var(--step-1);
  line-height: 1.3;
  letter-spacing: -0.015em;
  font-weight: 600;
  color: var(--navy);
}

.work__text {
  max-width: var(--measure);
  margin-top: 0.6rem;
}

.work__stack {
  margin-top: 0.9rem;
  font-family: var(--font-mono);
  font-size: var(--step--1);
  color: var(--muted);
}

.work__note {
  max-width: var(--measure);
  margin-top: 1.5rem;
  font-size: var(--step--1);
  color: var(--muted);
}
</style>

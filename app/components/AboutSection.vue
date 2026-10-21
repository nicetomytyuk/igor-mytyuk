<script setup lang="ts">
import { about, metrics } from '~/data/profile'
</script>

<template>
  <SectionBlock id="about" index="01" label="About" title="Hands-on engineer, now also reviewing everyone else’s code.">
    <div class="prose">
      <p v-for="paragraph in about" :key="paragraph">{{ paragraph }}</p>
    </div>

    <dl class="metrics">
      <div v-for="metric in metrics" :key="metric.label" class="metric">
        <dt>
          <span class="metric__value">{{ metric.value }}</span>
          <span class="metric__label">{{ metric.label }}</span>
        </dt>
        <dd>{{ metric.context }}</dd>
      </div>
    </dl>
  </SectionBlock>
</template>

<style scoped>
.metrics {
  display: grid;
  gap: 0;
  margin-top: 3.5rem;
  border-top: 1px solid var(--navy);
}

@media (min-width: 40rem) {
  .metrics {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 2.5rem;
  }
}

.metric {
  padding-block: 1.5rem;
  border-bottom: 1px solid var(--rule);
}

.metric dt {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.25rem 0.75rem;
}

.metric__value {
  font-size: clamp(2.4rem, 2rem + 2vw, 3.4rem);
  line-height: 1;
  letter-spacing: -0.04em;
  font-weight: 600;
  color: var(--blue-text);
  font-variant-numeric: tabular-nums;
}

.metric__label {
  font-weight: 500;
  color: var(--navy);
}

.metric dd {
  margin-top: 0.5rem;
  max-width: 40ch;
  font-size: var(--step--1);
  line-height: 1.55;
  color: var(--muted);
}
</style>

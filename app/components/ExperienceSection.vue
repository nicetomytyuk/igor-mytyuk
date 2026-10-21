<script setup lang="ts">
import { experience } from '~/data/profile'
</script>

<template>
  <SectionBlock id="experience" index="02" label="Experience" title="From writing the features to helping teams ship them." alt>
    <div class="companies">
      <section v-for="company in experience" :key="company.name" class="company">
        <h3 class="company__name">
          {{ company.name }}
          <span v-if="company.location" class="company__place">{{ company.location }}</span>
        </h3>

        <article v-for="role in company.roles" :key="role.title + role.period" class="role">
          <header class="role__head">
            <h4 class="role__title">{{ role.title }}</h4>
            <p class="role__period">{{ role.period }}</p>
          </header>
          <p class="role__summary">{{ role.summary }}</p>
          <ul class="role__list">
            <li v-for="item in role.highlights" :key="item">{{ item }}</li>
          </ul>
        </article>
      </section>
    </div>
  </SectionBlock>
</template>

<style scoped>
.companies {
  display: grid;
  gap: clamp(3rem, 6vw, 4.5rem);
}

.company__name {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.25rem 1rem;
  padding-bottom: 0.9rem;
  border-bottom: 1px solid var(--navy);
  font-size: var(--step-1);
  letter-spacing: -0.01em;
  font-weight: 600;
  color: var(--navy);
}

.company__place {
  font-family: var(--font-mono);
  font-size: var(--step--1);
  font-weight: 400;
  color: var(--muted);
}

.role {
  padding-block: 1.75rem;
  border-bottom: 1px solid var(--rule);
}

.role__head {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.25rem 1.5rem;
}

.role__title {
  margin: 0;
  font-size: var(--step-0);
  font-weight: 600;
  color: var(--ink);
}

.role__period {
  font-family: var(--font-mono);
  font-size: var(--step--1);
  color: var(--muted);
}

.role__summary {
  max-width: var(--measure);
  margin-top: 0.75rem;
  color: var(--ink);
}

.role__list {
  display: grid;
  gap: 0.6rem;
  max-width: var(--measure);
  margin-top: 1rem;
  font-size: 0.95em;
  color: var(--muted);
}

.role__list li {
  position: relative;
  padding-left: 1.25rem;
}

.role__list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.8em;
  width: 0.5rem;
  height: 1px;
  background: var(--blue);
}
</style>

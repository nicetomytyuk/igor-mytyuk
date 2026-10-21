<script setup lang="ts">
import { education, languages, skills } from '~/data/profile'
</script>

<template>
  <SectionBlock id="expertise" index="04" label="Expertise" title="What I use every day, and what I have used before." alt>
    <p class="legend">
      <span class="legend__key legend__key--primary">Daily tools</span>
      <span class="legend__key">Used in earlier projects</span>
    </p>

    <dl class="skills">
      <div v-for="group in skills" :key="group.name" class="skills__row">
        <dt>{{ group.name }}</dt>
        <dd>
          <ul class="chips">
            <li v-for="item in group.primary" :key="item" class="chip chip--primary">{{ item }}</li>
            <li v-for="item in group.also" :key="item" class="chip">{{ item }}</li>
          </ul>
        </dd>
      </div>
    </dl>

    <div class="background">
      <section aria-labelledby="education-title">
        <h3 id="education-title" class="background__title">Education</h3>
        <p class="background__main">{{ education.school }}</p>
        <p class="background__sub">{{ education.program }}</p>
        <p class="background__sub">{{ education.period }}, {{ education.place }}</p>
      </section>
      <section aria-labelledby="languages-title">
        <h3 id="languages-title" class="background__title">Languages</h3>
        <ul class="langs">
          <li v-for="lang in languages" :key="lang.name">
            <span>{{ lang.name }}</span>
            <span class="langs__level">{{ lang.level }}</span>
          </li>
        </ul>
      </section>
    </div>
  </SectionBlock>
</template>

<style scoped>
.legend {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.5rem;
  margin-bottom: 1.25rem;
  font-size: var(--step--1);
  color: var(--muted);
}

.legend__key::before {
  content: '';
  display: inline-block;
  width: 0.7rem;
  height: 0.7rem;
  margin-right: 0.5rem;
  border: 1px solid var(--muted);
  border-radius: 50%;
  vertical-align: -0.05em;
}

.legend__key--primary::before {
  background: var(--navy);
  border-color: var(--navy);
}

.skills {
  border-top: 1px solid var(--navy);
}

.skills__row {
  display: grid;
  gap: 0.75rem;
  padding-block: 1.25rem;
  border-bottom: 1px solid var(--rule);
}

@media (min-width: 40rem) {
  .skills__row {
    grid-template-columns: 9rem minmax(0, 1fr);
    gap: 1.5rem;
  }
}

.skills dt {
  font-weight: 600;
  color: var(--navy);
}

.skills dd {
  margin: 0;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.chip {
  padding: 0.25rem 0.75rem;
  border: 1px solid var(--muted);
  border-radius: 999px;
  font-size: var(--step--1);
  color: var(--muted);
}

.chip--primary {
  background: var(--navy);
  border-color: var(--navy);
  color: #fff;
}

.background {
  display: grid;
  gap: 2.5rem;
  margin-top: 3.5rem;
}

@media (min-width: 40rem) {
  .background {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 3rem;
  }
}

.background__title {
  margin-bottom: 0.75rem;
  font-family: var(--font-mono);
  font-size: var(--step--1);
  font-weight: 400;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--muted);
}

.background__main {
  font-weight: 600;
  color: var(--navy);
}

.background__sub {
  font-size: var(--step--1);
  color: var(--muted);
}

.langs {
  display: grid;
  gap: 0.15rem;
}

.langs li {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding-block: 0.3rem;
  border-bottom: 1px solid var(--rule);
}

.langs__level {
  color: var(--muted);
}
</style>

<script setup lang="ts">
import { hero, site } from '~/data/profile'
</script>

<template>
  <section id="top" class="hero" aria-labelledby="hero-title">
    <HeroGrid />
    <div class="wrap">
      <p class="eyebrow hero__role">{{ site.jobTitle }}</p>
      <h1 id="hero-title" class="hero__title">
        <span class="visually-hidden">{{ site.name }}: </span>{{ hero.headline }}
      </h1>
      <p class="hero__intro">{{ hero.intro }}</p>

      <div class="hero__actions">
        <a class="btn" href="#experience">
          View experience
          <AppIcon name="arrow" />
        </a>
        <a class="btn btn--ghost" :href="site.resume" download>
          Download resume
          <AppIcon name="download" />
        </a>
      </div>

      <ul class="hero__links" aria-label="Contact and profiles">
        <li>
          <a :href="site.github" rel="me noopener" target="_blank">
            <AppIcon name="github" />GitHub<span class="visually-hidden"> (opens in a new tab)</span>
          </a>
        </li>
        <li>
          <a :href="site.linkedin" rel="me noopener" target="_blank">
            <AppIcon name="linkedin" />LinkedIn<span class="visually-hidden"> (opens in a new tab)</span>
          </a>
        </li>
        <li>
          <a :href="`mailto:${site.email}`"><AppIcon name="mail" />{{ site.email }}</a>
        </li>
      </ul>

      <p class="hero__place">{{ site.locality }}, {{ site.country }}</p>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  isolation: isolate;
  padding-block: clamp(2.5rem, 8vw, 6.5rem) clamp(3rem, 8vw, 6rem);
}

.hero > .wrap {
  position: relative;
  z-index: 1;
}

.hero__role {
  margin-bottom: 1.25rem;
}

.hero__title {
  max-width: 15ch;
  font-size: var(--step-4);
  line-height: 1.04;
  letter-spacing: -0.035em;
  font-weight: 600;
  color: var(--navy);
  text-wrap: balance;
}

.hero__intro {
  max-width: 54ch;
  margin-top: 1.75rem;
  font-size: var(--step-1);
  line-height: 1.55;
  color: var(--muted);
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 2.25rem;
}

.hero__actions .btn {
  flex: 1 1 14rem;
}

@media (min-width: 40rem) {
  .hero__actions .btn {
    flex: 0 0 auto;
  }
}

.hero__links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem 1.75rem;
  margin-top: 2rem;
}

.hero__links a {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  min-height: 2.75rem;
  color: var(--ink);
}

.hero__place {
  margin-top: 0.5rem;
  font-family: var(--font-mono);
  font-size: var(--step--1);
  color: var(--muted);
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
  border: 0;
}
</style>

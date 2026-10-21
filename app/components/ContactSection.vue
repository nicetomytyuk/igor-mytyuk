<script setup lang="ts">
import { site } from '~/data/profile'
</script>

<template>
  <section id="contact" class="contact" aria-labelledby="contact-title">
    <div class="wrap">
      <p class="eyebrow contact__eyebrow"><span aria-hidden="true">06 / </span>Contact</p>
      <h2 id="contact-title" class="contact__title">Have a team to grow or a hard problem to untangle?</h2>
      <p class="contact__text">
        Email is the quickest way to reach me. I read everything, and I answer the interesting questions first.
      </p>

      <a class="contact__mail" :href="`mailto:${site.email}`">{{ site.email }}</a>

      <ul class="contact__links">
        <li>
          <a :href="site.linkedin" rel="me noopener" target="_blank">
            <AppIcon name="linkedin" />LinkedIn<span class="sr"> (opens in a new tab)</span>
          </a>
        </li>
        <li>
          <a :href="site.github" rel="me noopener" target="_blank">
            <AppIcon name="github" />GitHub<span class="sr"> (opens in a new tab)</span>
          </a>
        </li>
        <li>
          <a :href="site.resume" download><AppIcon name="download" />Resume (PDF)</a>
        </li>
      </ul>

      <p class="contact__meta">{{ site.locality }}, {{ site.country }}</p>
    </div>
  </section>
</template>

<style scoped>
.contact {
  padding-block: var(--space-section);
  background: var(--navy);
  color: #fff;
}

.contact__eyebrow {
  color: #a9b6cc;
}

.contact__title {
  max-width: 20ch;
  margin-top: 0.75rem;
  font-size: clamp(2rem, 1.4rem + 3vw, 3.6rem);
  line-height: 1.08;
  letter-spacing: -0.03em;
  font-weight: 600;
  text-wrap: balance;
}

.contact__text {
  max-width: 48ch;
  margin-top: 1.25rem;
  color: #c8d2e3;
}

.contact__mail {
  display: inline-block;
  margin-top: 2rem;
  padding-block: 0.4rem;
  font-size: clamp(1.15rem, 0.9rem + 1.6vw, 2rem);
  font-weight: 500;
  letter-spacing: -0.01em;
  color: #fff;
  text-decoration-color: var(--blue);
  text-decoration-thickness: 2px;
  text-underline-offset: 0.3em;
  word-break: break-all;
}

.contact__mail:hover {
  text-decoration-color: #fff;
}

.contact__links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem 1.75rem;
  margin-top: 1.5rem;
}

.contact__links a {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  min-height: 2.75rem;
  color: #fff;
}

.contact__meta {
  margin-top: 1.5rem;
  font-family: var(--font-mono);
  font-size: var(--step--1);
  color: #a9b6cc;
}

.contact :focus-visible {
  outline-color: #fff;
}

.sr {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}
</style>

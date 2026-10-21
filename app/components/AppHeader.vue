<script setup lang="ts">
import { navigation, site } from '~/data/profile'

const open = ref(false)
const active = ref('')
const toggle = ref<HTMLButtonElement | null>(null)
const header = ref<HTMLElement | null>(null)

// After a nav click the clicked item is highlighted right away and scroll-driven
// updates pause until the smooth scroll ends. Otherwise the highlight only
// changes once the target nears the trigger line, which for Contact is the very end.
let target = ''
let release = () => {}
let fallback: ReturnType<typeof setTimeout> | undefined

function onNavClick(href: string) {
  close()
  target = href
  active.value = href
  clearTimeout(fallback)
  fallback = setTimeout(release, 1500)
}

function close(returnFocus = false) {
  open.value = false
  if (returnFocus) toggle.value?.focus()
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape' && open.value) close(true)
}

function onPointerDown(event: PointerEvent) {
  if (open.value && !header.value?.contains(event.target as Node)) close()
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
  document.addEventListener('pointerdown', onPointerDown)

  // Every page section takes part, so a section without a nav item (Expertise,
  // Approach) clears the highlight instead of leaving the previous one stuck.
  const sections = Array.from(document.querySelectorAll<HTMLElement>('main > section[id]'))
  const navTargets = new Set(navigation.map((item) => item.href))
  let frame = 0

  function updateActive() {
    frame = 0
    if (target) return
    const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2
    const line = window.innerHeight * 0.35
    let current = atBottom ? sections.at(-1) : undefined
    if (!current) {
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= line) current = section
      }
    }
    const href = current ? `#${current.id}` : ''
    active.value = navTargets.has(href) ? href : ''
  }

  function onScroll() {
    if (!frame) frame = requestAnimationFrame(updateActive)
  }

  release = () => {
    clearTimeout(fallback)
    if (!target) return
    target = ''
    updateActive()
  }

  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll, { passive: true })
  window.addEventListener('scrollend', release)
  window.addEventListener('wheel', release, { passive: true })
  window.addEventListener('touchmove', release, { passive: true })
  updateActive()

  onBeforeUnmount(() => {
    clearTimeout(fallback)
    window.removeEventListener('scrollend', release)
    window.removeEventListener('wheel', release)
    window.removeEventListener('touchmove', release)
    window.removeEventListener('keydown', onKeydown)
    document.removeEventListener('pointerdown', onPointerDown)
    window.removeEventListener('scroll', onScroll)
    window.removeEventListener('resize', onScroll)
    cancelAnimationFrame(frame)
  })
})
</script>

<template>
  <header ref="header" class="site-header">
    <div class="wrap site-header__bar">
      <a class="site-header__brand" href="#top" @click="close()">Ihor Mytyuk</a>

      <button
        ref="toggle"
        class="site-header__toggle"
        type="button"
        :aria-expanded="open"
        aria-controls="site-nav"
        @click="open = !open"
      >
        <AppIcon :name="open ? 'close' : 'menu'" />
        <span>{{ open ? 'Close' : 'Menu' }}</span>
      </button>

      <nav id="site-nav" class="site-nav" :class="{ 'is-open': open }" aria-label="Primary">
        <ul>
          <li v-for="item in navigation" :key="item.href">
            <a
              :href="item.href"
              :aria-current="active === item.href ? 'location' : undefined"
              @click="onNavClick(item.href)"
              >{{ item.label }}</a
            >
          </li>
          <li class="site-nav__resume">
            <a :href="site.resume" download @click="close()">
              Resume
              <AppIcon name="download" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  background: var(--bg);
  border-bottom: 1px solid var(--rule);
}

@media (min-width: 48rem) {
  .site-header {
    position: sticky;
    top: 0;
    z-index: 50;
    background: rgb(250 251 252 / 0.94);
    backdrop-filter: blur(8px);
  }
}

.site-header__bar {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: var(--header-h);
}

.site-header__brand {
  display: inline-flex;
  align-items: center;
  min-height: 2.75rem;
  color: var(--navy);
  font-weight: 600;
  letter-spacing: -0.01em;
  text-decoration: none;
}

.site-header__toggle {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  min-height: 2.75rem;
  padding: 0 0.75rem;
  border: 1px solid var(--rule);
  border-radius: 4px;
  background: transparent;
  color: var(--navy);
  font: inherit;
  font-size: var(--step--1);
  cursor: pointer;
}

.site-nav {
  display: none;
  position: absolute;
  inset: 100% var(--gutter) auto;
  z-index: 60;
  padding: 0.5rem 1.25rem;
  background: var(--bg);
  border: 1px solid var(--rule);
  box-shadow: 0 12px 28px -18px rgb(20 34 56 / 0.35);
}

.site-nav.is-open {
  display: block;
}

.site-nav ul {
  display: grid;
}

.site-nav li + li {
  border-top: 1px solid var(--rule);
}

.site-nav a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 3rem;
  color: var(--ink);
  text-decoration: none;
}

.site-nav a[aria-current='location'] {
  color: var(--blue-text);
}

.site-nav__resume a {
  color: var(--blue-text);
  font-weight: 600;
}

@media (min-width: 48rem) {
  .site-header__toggle {
    display: none;
  }

  .site-nav {
    display: block;
    position: static;
    padding: 0;
    border: 0;
    background: none;
    box-shadow: none;
  }

  .site-nav ul {
    display: flex;
    align-items: center;
    gap: 1.75rem;
  }

  .site-nav li + li {
    border: 0;
  }

  .site-nav a {
    position: relative;
    min-height: 2.75rem;
    gap: 0.4rem;
    font-size: var(--step--1);
  }

  .site-nav a::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0.55rem;
    height: 2px;
    background: var(--blue);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.2s;
  }

  .site-nav a:hover::after,
  .site-nav a[aria-current='location']::after {
    transform: scaleX(1);
  }
}
</style>

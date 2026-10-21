<script setup lang="ts">
// Floating "liquid glass" back-to-top button, using @wxperia/liquid-glass-vue
// (MIT) with the settings from its demo. The library touches `window` while
// setting up and is ~70 kB, so it is client-only and loaded the first time the
// button is needed.
import type { GlassMode } from '@wxperia/liquid-glass-vue'

// The enum is only needed as a type here; importing its value would pull the library into the main bundle.
const mode = 'standard' as GlassMode

const LiquidGlass = defineAsyncComponent(() =>
  import('@wxperia/liquid-glass-vue').then((m) => m.LiquidGlass)
)

const visible = ref(false)
const needed = ref(false)
const overDark = ref(false)
let frame = 0

function update() {
  frame = 0
  visible.value = window.scrollY > window.innerHeight * 0.8
  if (visible.value) needed.value = true
  // The contact section is navy, so the label flips to white while the button is over it.
  const contact = document.getElementById('contact')
  overDark.value = !!contact && contact.getBoundingClientRect().top < window.innerHeight - 36
}

function onScroll() {
  if (!frame) frame = requestAnimationFrame(update)
}

function toTop() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
  history.replaceState(null, '', location.pathname + location.search)
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  update()
  onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll)
    cancelAnimationFrame(frame)
  })
})
</script>

<template>
  <ClientOnly>
    <div v-if="needed" v-show="visible" class="to-top" :class="{ 'to-top--dark': overDark }">
      <LiquidGlass
        :displacement-scale="64"
        :blur-amount="0.1"
        :saturation="130"
        :aberration-intensity="2"
        :elasticity="0.35"
        :corner-radius="100"
        :over-light="true"
        :mode="mode"
        padding="8px 16px"
        :on-click="toTop"
        :style="{ position: 'fixed', top: 'calc(100% - 2.25rem)', left: 'calc(100% - 4.125rem)' }"
      >
        <button class="to-top__button" type="button" aria-label="Back to top">
          Top
          <AppIcon name="up" />
        </button>
      </LiquidGlass>
    </div>
  </ClientOnly>
</template>

<style>
/* The library is written for Tailwind and ships no CSS. These are the few utilities it relies on. */
.to-top {
  position: relative;
  z-index: 40;
}

.to-top .relative {
  position: relative;
}
.to-top .cursor-pointer {
  cursor: pointer;
}
.to-top .pointer-events-none {
  pointer-events: none;
}
.to-top .bg-black {
  background-color: #000;
}
.to-top .opacity-0 {
  opacity: 0;
}
.to-top .opacity-20 {
  opacity: 0.2;
}
.to-top .opacity-100 {
  opacity: 1;
}
.to-top .mix-blend-overlay {
  mix-blend-mode: overlay;
}
.to-top .text-white {
  color: #fff;
}
.to-top .transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;
}
.to-top .duration-150 {
  transition-duration: 0.15s;
}
.to-top .ease-in-out {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.to-top__button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  width: 4.25rem;
  height: 1.5rem;
  padding: 0;
  border: 0;
  background: none;
  color: var(--navy);
  font: 500 1.125rem/1 var(--font-sans);
  cursor: pointer;
  transition: color 0.2s;
}

.to-top--dark .to-top__button {
  color: #fff;
}

.to-top__button:focus-visible {
  outline-color: var(--blue);
}

.to-top--dark .to-top__button:focus-visible {
  outline-color: #fff;
}

.to-top__button .icon {
  width: 1.25rem;
  height: 1.25rem;
  stroke-width: 2;
}
</style>

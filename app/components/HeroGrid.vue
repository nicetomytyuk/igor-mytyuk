<script setup lang="ts">
// A quiet dot grid behind the hero, echoing the favicon. A soft blue wave drifts
// across it and, with a mouse, dots near the cursor swell. Plain canvas 2D: a few
// hundred dots, started just after hydration, paused when off screen or hidden,
// and drawn once without motion for people who prefer reduced motion.
const canvas = ref<HTMLCanvasElement | null>(null)

const GAP = 32
const RADIUS = 2.3
const REACH = 150

onMounted(() => {
  const el = canvas.value
  const ctx = el?.getContext('2d')
  const host = el?.closest('section')
  if (!el || !ctx || !host) return

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)')

  let w = 0
  let h = 0
  let frame = 0
  let onScreen = true
  let started = false
  // Eased pointer state so the swell follows the cursor smoothly
  let px = 0
  let py = 0
  let target = 0
  let strength = 0

  function resize() {
    const box = el!.getBoundingClientRect()
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    w = box.width
    h = box.height
    el!.width = Math.round(w * dpr)
    el!.height = Math.round(h * dpr)
    ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
    if (reduce.matches) draw(5000)
  }

  function draw(t: number) {
    ctx!.clearRect(0, 0, w, h)
    // An even lattice that simply continues past the canvas on every side. Dots near the
    // borders are cut off by the edge, so the grid reads as part of a larger field and
    // keeps its natural spacing. The start offset centres the pattern.
    const sx = (w % GAP) / 2 - GAP
    const sy = (h % GAP) / 2 - GAP
    const phase = t * 0.0006

    for (let y = sy; y <= h + GAP; y += GAP) {
      for (let x = sx; x <= w + GAP; x += GAP) {
        // Diagonal wave, sharpened so only a band of dots lights up at a time
        const wave = Math.max(0, Math.sin((x + y) * 0.011 - phase)) ** 5
        let swell = 0
        if (strength > 0.01) {
          const d = Math.hypot(x - px, y - py)
          if (d < REACH) swell = (1 - d / REACH) ** 2 * strength
        }
        const lit = Math.max(wave * 0.8, swell)
        const radius = RADIUS + wave * 1.6 + swell * 3.4

        ctx!.beginPath()
        ctx!.arc(x, y, radius, 0, Math.PI * 2)
        ctx!.fillStyle = 'rgba(20, 34, 56, 0.14)'
        ctx!.fill()
        if (lit > 0.02) {
          ctx!.beginPath()
          ctx!.arc(x, y, radius, 0, Math.PI * 2)
          ctx!.fillStyle = `rgba(52, 106, 244, ${Math.min(0.85, lit)})`
          ctx!.fill()
        }
      }
    }
  }

  function tick(t: number) {
    strength += (target - strength) * 0.1
    draw(t)
    frame = requestAnimationFrame(tick)
  }

  function play() {
    if (frame || reduce.matches || !onScreen || document.hidden) return
    frame = requestAnimationFrame(tick)
  }

  function pause() {
    cancelAnimationFrame(frame)
    frame = 0
  }

  function onMove(event: PointerEvent) {
    if (!fine.matches || reduce.matches) return
    const box = el!.getBoundingClientRect()
    px = event.clientX - box.left
    py = event.clientY - box.top
    target = 1
  }

  function onLeave() {
    target = 0
  }

  function onVisibility() {
    if (document.hidden) pause()
    else play()
  }

  const observer = new IntersectionObserver((entries) => {
    const entry = entries[0]
    if (!entry) return
    onScreen = entry.isIntersecting
    if (onScreen) play()
    else pause()
  })
  const resizer = new ResizeObserver(resize)

  function start() {
    if (started) return
    started = true
    resize()
    draw(reduce.matches ? 5000 : 0)
    observer.observe(el!)
    resizer.observe(el!)
    host!.addEventListener('pointermove', onMove, { passive: true })
    host!.addEventListener('pointerleave', onLeave)
    document.addEventListener('visibilitychange', onVisibility)
    reduce.addEventListener('change', () => (reduce.matches ? (pause(), draw(5000)) : play()))
    play()
  }

  // Keep the first paint and input handling free: begin shortly after hydration
  const startTimer = window.setTimeout(start, 200)

  onBeforeUnmount(() => {
    clearTimeout(startTimer)
    pause()
    observer.disconnect()
    resizer.disconnect()
    host.removeEventListener('pointermove', onMove)
    host.removeEventListener('pointerleave', onLeave)
    document.removeEventListener('visibilitychange', onVisibility)
  })
})
</script>

<template>
  <div class="hero-grid" aria-hidden="true">
    <canvas ref="canvas" class="hero-grid__canvas"></canvas>
  </div>
</template>

<style scoped>
/* The canvas covers the whole hero. The dot lattice continues past its edges, so dots at
   the borders are simply cut off and the spacing stays natural everywhere. */
.hero-grid {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  /* Small screens: a faint texture that fades out toward the text */
  opacity: 0.55;
  -webkit-mask-image: radial-gradient(ellipse 90% 70% at 100% 0%, #000 0%, transparent 75%);
  mask-image: radial-gradient(ellipse 90% 70% at 100% 0%, #000 0%, transparent 75%);
}

.hero-grid__canvas {
  display: block;
  width: 100%;
  height: 100%;
}

/* Wide screens: fill the empty right side, fading only toward the headline */
@media (min-width: 62rem) {
  .hero-grid {
    left: 52%;
    opacity: 1;
    -webkit-mask-image: linear-gradient(to right, transparent 0%, #000 45%);
    mask-image: linear-gradient(to right, transparent 0%, #000 45%);
  }
}

/* Narrow desktops: the text takes most of the width, so the grid is a slimmer strip */
@media (min-width: 62rem) and (max-width: 79.99rem) {
  .hero-grid {
    left: 70%;
    -webkit-mask-image: linear-gradient(to right, transparent 0%, #000 60%);
    mask-image: linear-gradient(to right, transparent 0%, #000 60%);
  }
}
</style>

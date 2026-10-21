export default defineNuxtConfig({
  compatibilityDate: '2026-10-01',
  devtools: { enabled: false },
  modules: ['@nuxt/fonts'],
  css: ['~/assets/css/main.css'],
  fonts: {
    families: [
      // Preload the Latin files used above the fold so the text does not reflow when they arrive
      { name: 'Geist', provider: 'google', weights: [400, 500, 600, 700], preload: true, subsets: ['latin'] },
      { name: 'Geist Mono', provider: 'google', weights: [400, 500], preload: true, subsets: ['latin'] }
    ]
  },
  features: { inlineStyles: true },
  nitro: { prerender: { routes: ['/', '/404.html'], crawlLinks: false } },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1'
    }
  }
})

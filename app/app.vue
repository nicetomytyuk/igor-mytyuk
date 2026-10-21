<script setup lang="ts">
import { site } from '~/data/profile'

const ogImage = `${site.url}/og-image.png`

useSeoMeta({
  title: site.title,
  description: site.description,
  ogType: 'profile',
  ogUrl: site.url,
  ogTitle: site.title,
  ogDescription: site.description,
  ogSiteName: site.name,
  ogLocale: 'en_US',
  ogImage,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: 'Ihor Mytyuk, Technical Lead and Full-Stack Software Engineer',
  twitterCard: 'summary_large_image',
  twitterTitle: site.title,
  twitterDescription: site.description,
  twitterImage: ogImage,
  themeColor: '#fafbfc'
})

const graph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${site.url}/#website`,
      url: `${site.url}/`,
      name: site.name,
      description: site.description,
      inLanguage: 'en',
      publisher: { '@id': `${site.url}/#person` }
    },
    {
      '@type': 'ProfilePage',
      '@id': `${site.url}/#profilepage`,
      url: `${site.url}/`,
      name: site.title,
      inLanguage: 'en',
      isPartOf: { '@id': `${site.url}/#website` },
      mainEntity: { '@id': `${site.url}/#person` }
    },
    {
      '@type': 'Person',
      '@id': `${site.url}/#person`,
      name: site.name,
      alternateName: site.alternateName,
      url: `${site.url}/`,
      image: ogImage,
      email: `mailto:${site.email}`,
      jobTitle: site.jobTitle,
      description: site.description,
      address: {
        '@type': 'PostalAddress',
        addressLocality: site.locality,
        addressCountry: 'IT'
      },
      worksFor: { '@type': 'Organization', name: 'E80 Group S.P.A.' },
      alumniOf: { '@type': 'EducationalOrganization', name: 'Istituto Superiore Silvio D’Arzo' },
      knowsLanguage: ['en', 'it', 'uk', 'ru'],
      knowsAbout: [
        'Angular',
        'TypeScript',
        '.NET',
        'C#',
        'SQL Server',
        'Software architecture',
        'Performance optimization',
        'Developer productivity',
        'CI/CD'
      ],
      sameAs: [site.github, site.linkedin]
    }
  ]
}

useHead({
  link: [
    { rel: 'canonical', href: `${site.url}/` },
    { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
    { rel: 'icon', href: '/favicon.ico', sizes: '32x32' },
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }
  ],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(graph) }]
})
</script>

<template>
  <div>
    <a class="skip-link" href="#main">Skip to content</a>
    <AppHeader />
    <main id="main">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <WorkSection />
      <ExpertiseSection />
      <ApproachSection />
      <ContactSection />
    </main>
    <AppFooter />
  </div>
</template>

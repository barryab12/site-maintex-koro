'use client'

import Script from 'next/script'

export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.maintex.fr/#organization",
        "name": "MAINTEX",
        "url": "https://www.maintex.fr",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.maintex.fr/logo.png"
        },
        "description": "MAINTEX est la solution GMAO n°1 en France et en Afrique pour optimiser votre maintenance industrielle.",
        "foundingDate": "2009",
        "founder": {
          "@type": "Organization",
          "name": "BBC & Partners"
        },
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "FR",
          "addressLocality": "Maisons-Alfort"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer support",
          "email": "contact@maintex.fr",
          "telephone": "+33187666702",
          "availableLanguage": ["French", "English"]
        },
        "sameAs": [
          "https://www.linkedin.com/company/bbc-partners",
          "https://twitter.com/maintex_gmao"
        ]
      },
      {
        "@type": "SoftwareApplication",
        "name": "MAINTEX",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web, iOS, Android",
        "description": "Logiciel GMAO pour la gestion de maintenance assistée par ordinateur",
        "offers": {
          "@type": "Offer",
          "price": "490",
          "priceCurrency": "EUR",
          "priceValidUntil": "2025-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "ratingCount": "350"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://www.maintex.fr/#website",
        "url": "https://www.maintex.fr",
        "name": "MAINTEX - GMAO",
        "publisher": {
          "@id": "https://www.maintex.fr/#organization"
        }
      }
    ]
  }

  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  )
}

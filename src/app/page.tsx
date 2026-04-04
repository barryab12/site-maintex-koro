import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export default function HomePage() {
  return (
    <main style={{ minHeight: '100vh', background: 'white', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <SiteHeader />

      {/* Hero Section */}
      <section style={{
        position: 'relative',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '70px',
        paddingBottom: '60px',
        background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
        overflow: 'hidden'
      }}>
        {/* Subtle Background Pattern */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle at 1px 1px, #e2e8f0 1px, transparent 0)',
          backgroundSize: '40px 40px',
          opacity: 0.5
        }} />

        <div style={{ position: 'relative', zIndex: 10, maxWidth: '1240px', margin: '0 auto', padding: '0 40px', width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
            <div>
              {/* Badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                borderRadius: '9999px',
                background: '#f0f4ff',
                border: '1px solid #e0e7ff',
                color: '#0A0A8A',
                marginBottom: '32px'
              }}>
                <span style={{ fontSize: '17px', fontWeight: 600, letterSpacing: '0.02em' }}>Réinventons la maintenance</span>
              </div>

              {/* Headline */}
              <h1 style={{
                fontSize: '3.25rem',
                fontWeight: 900,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                color: '#1e293b',
                marginBottom: '24px'
              }}>
                Réduisez vos temps d&apos;arrêt grâce à des <span style={{ color: '#0A0A8A' }}>diagnostics fiables.</span>
              </h1>

              {/* Subheadline */}
              <p style={{
                fontSize: '1.125rem',
                color: '#64748b',
                fontWeight: 400,
                marginBottom: '16px',
                maxWidth: '520px',
                lineHeight: 1.7
              }}>
                Maintex est la GMAO conçue pour aider vos techniciens à identifier rapidement la cause des pannes et appliquer la bonne action corrective dès la première intervention.
              </p>

              {/* Highlight text */}
              <p style={{
                fontSize: '1rem',
                color: '#0A0A8A',
                fontWeight: 600,
                marginBottom: '28px',
                maxWidth: '500px',
                lineHeight: 1.5
              }}>
                Une GMAO qui améliore la maintenance, pas seulement sa gestion.
              </p>

              {/* Key Metrics */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '32px' }}>
                {[
                  { label: 'Diagnostic rapide', color: '#16a34a' },
                  { label: 'Actions correctives', color: '#0A0A8A' },
                  { label: 'Première intervention', color: '#0891b2' },
                ].map((item, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 16px',
                    background: 'white',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
                  }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: item.color }} />
                    <span style={{ fontSize: '14px', fontWeight: 500, color: '#374151' }}>{item.label}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '48px' }}>
                <Link href="/contact" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '16px 32px',
                  fontSize: '16px',
                  fontWeight: 500,
                  color: 'white',
                  background: '#0A0A8A',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 6px -1px rgba(10, 10, 138, 0.2)'
                }}>
                  Demander une démo
                </Link>
                <Link href="/clients" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '16px 32px',
                  fontSize: '16px',
                  fontWeight: 500,
                  color: '#374151',
                  border: '1px solid #d1d5db',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  background: 'white'
                }}>
                  Voir un cas client
                </Link>
              </div>

              {/* Stats */}
              <div style={{
                display: 'flex',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                overflow: 'hidden',
                background: 'white',
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
              }}>
                {[
                  { value: '350+', label: 'Clients' },
                  { value: '25', label: 'Pays' },
                  { value: '-30%', label: 'Arrêts' },
                  { value: '🇫🇷🇦🇫', label: 'Support' },
                ].map((stat, i) => (
                  <div key={i} style={{
                    padding: '16px 24px',
                    textAlign: 'center',
                    borderRight: i < 3 ? '1px solid #e2e8f0' : 'none'
                  }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0A0A8A' }}>{stat.value}</div>
                    <div style={{ fontSize: '10px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '4px' }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Image */}
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
                border: '1px solid #e2e8f0'
              }}>
                <img
                  src="/images/happy-technician.png"
                  alt="Technicien MAINTEX sur le terrain"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section style={{ padding: '48px 40px', background: 'white', borderBottom: '1px solid #f1f5f9' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <p style={{ textAlign: 'center', fontSize: '14px', color: '#94a3b8', marginBottom: '32px' }}>
            Plus de 350 entreprises en France et en Afrique nous font confiance
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '32px', opacity: 0.5 }}>
            {['Industrie', 'Énergie', 'Santé', 'Transport', 'Agro', 'Facility'].map((sector, i) => (
              <div key={i} style={{
                width: '100px',
                height: '32px',
                background: '#e2e8f0',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#94a3b8' }}>{sector}</span>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', fontSize: '12px', color: '#94a3b8', marginTop: '24px' }}>
            Logos clients disponibles sur demande après signature NDA
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: '96px 40px', background: '#f8fafc' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#0A0A8A', fontWeight: 600, marginBottom: '16px' }}>
              Plateforme complète
            </div>
            <h2 style={{ fontSize: '3rem', fontWeight: 800, color: '#1e293b', letterSpacing: '-0.02em', marginBottom: '16px' }}>
              Des fonctionnalités pensées<br />
              <span style={{ color: '#0A0A8A' }}>
                pour le terrain.
              </span>
            </h2>
            <p style={{ fontSize: '1.125rem', color: '#64748b', fontWeight: 400, maxWidth: '500px', margin: '0 auto' }}>
              Chaque module a été conçu avec et pour des équipes de maintenance.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            {[
              { number: '01', title: 'Ordres de travail intelligents', desc: 'Créez, assignez et suivez chaque intervention en temps réel.', color: '#3b82f6' },
              { number: '02', title: 'Maintenance préventive', desc: 'Planifiez vos révisions par fréquence calendaire ou compteur.', color: '#22c55e' },
              { number: '03', title: 'Fonctions Vitales', desc: 'Surveillez la disponibilité de vos fonctions critiques en temps réel.', color: '#f43f5e', highlight: true },
              { number: '04', title: 'Projets & Budgets', desc: 'Pilotez vos projets et suivez vos budgets avec alertes automatiques.', color: '#f59e0b', highlight: true },
              { number: '05', title: 'Gestion pièces & inventaire', desc: 'Stock en temps réel, seuils d\'alerte, consommation par équipement.', color: '#8b5cf6' },
              { number: '06', title: 'Application mobile', desc: 'L\'appli Maintex fonctionne partout, même sans connexion.', color: '#14b8a6' },
              { number: '07', title: 'Tableaux de bord & analytics', desc: 'Visualisez en temps réel les performances de votre maintenance.', color: '#6366f1' },
              { number: '08', title: 'Intégrations ERP & API', desc: 'Connectez Maintex à votre écosystème existant.', color: '#64748b' }
            ].map((feature, index) => (
              <div
                key={index}
                style={{
                  borderRadius: '16px',
                  padding: '24px',
                  background: feature.highlight ? '#0A0A8A' : 'white',
                  border: feature.highlight ? 'none' : '1px solid #e2e8f0',
                  color: feature.highlight ? 'white' : 'inherit',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
                }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: feature.highlight ? 'rgba(255,255,255,0.1)' : '#f1f5f9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px'
                }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '6px', background: feature.highlight ? 'rgba(255,255,255,0.2)' : feature.color, opacity: feature.highlight ? 1 : 0.8 }} />
                </div>
                {feature.highlight && (
                  <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#93c5fd', fontWeight: 600, marginBottom: '4px' }}>
                    Nouveau module
                  </div>
                )}
                <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginBottom: '4px', color: feature.highlight ? '#93c5fd' : '#0A0A8A' }}>
                  {feature.number} — Cœur du produit
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '8px', color: feature.highlight ? 'white' : '#1e293b' }}>{feature.title}</h3>
                <p style={{ fontSize: '12px', lineHeight: 1.5, marginBottom: '12px', color: feature.highlight ? 'rgba(255,255,255,0.8)' : '#64748b' }}>{feature.desc}</p>
                <Link href="/fonctionnalites" style={{ fontSize: '12px', fontWeight: 500, color: feature.highlight ? '#93c5fd' : '#0A0A8A', textDecoration: 'none' }}>
                  En savoir plus →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '96px 40px', background: 'white' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#0A0A8A', fontWeight: 600, marginBottom: '16px' }}>
              Ils témoignent
            </div>
            <h2 style={{ fontSize: '3rem', fontWeight: 800, color: '#1e293b', letterSpacing: '-0.02em' }}>
              Résultats concrets, clients satisfaits
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {[
              {
                quote: "Depuis MAINTEX, notre First Time Fix Rate est passé de 65% à 89%. Les techniciens ont toutes les infos dès le premier déplacement.",
                author: "Marc D.",
                role: "Responsable Maintenance",
                company: "Groupe industriel (France)",
                result: "+24% First Time Fix Rate"
              },
              {
                quote: "Nous avons réduit nos temps d'arrêt de 42% en 6 mois. Le module de maintenance prédictive est un game-changer.",
                author: "Fatou D.",
                role: "Directrice Technique",
                company: "Agroalimentaire (Burkina Faso)",
                result: "-42% temps d'arrêt"
              },
              {
                quote: "Le diagnostic IA nous fait gagner 3 heures par intervention en moyenne. L'investissement est rentabilisé en 4 mois.",
                author: "Jean-Pierre M.",
                role: "Chef de Service Maintenance",
                company: "Énergie (Côte d'Ivoire)",
                result: "ROI en 4 mois"
              }
            ].map((testimonial, i) => (
              <div key={i} style={{ background: '#f8fafc', borderRadius: '16px', padding: '24px', border: '1px solid #e2e8f0' }}>
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ display: 'flex', gap: '4px', marginBottom: '12px' }}>
                    {[1,2,3,4,5].map((star) => (
                      <svg key={star} style={{ width: '16px', height: '16px', fill: '#facc15' }} viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                  <p style={{ fontSize: '14px', color: '#374151', lineHeight: 1.6, fontStyle: 'italic' }}>"{testimonial.quote}"</p>
                </div>
                <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '16px' }}>
                  <div style={{ fontWeight: 600, color: '#1e293b' }}>{testimonial.author}</div>
                  <div style={{ fontSize: '14px', color: '#64748b' }}>{testimonial.role}</div>
                  <div style={{ fontSize: '14px', fontWeight: 500, color: '#0A0A8A' }}>{testimonial.company}</div>
                </div>
                <div style={{ marginTop: '16px', padding: '12px', background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '8px' }}>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: '#15803d' }}>{testimonial.result}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <Link href="/clients" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#0A0A8A', fontWeight: 500, textDecoration: 'none' }}>
              Voir toutes nos études de cas →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '80px 40px', background: '#f8fafc', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '1240px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 800, color: '#1e293b', letterSpacing: '-0.02em', marginBottom: '24px' }}>
            Prêt à transformer votre maintenance ?
          </h2>
          <p style={{ fontSize: '1.125rem', color: '#64748b', fontWeight: 400, maxWidth: '500px', margin: '0 auto 40px' }}>
            Rejoignez les 350+ entreprises en France et en Afrique qui ont choisi MAINTEX.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
            <Link href="/contact" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '16px 32px',
              fontSize: '16px',
              fontWeight: 500,
              color: 'white',
              background: '#0A0A8A',
              borderRadius: '8px',
              textDecoration: 'none',
              boxShadow: '0 4px 6px -1px rgba(10, 10, 138, 0.2)'
            }}>
              Demander une démo gratuite →
            </Link>
            <Link href="/tarifs" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '16px 32px',
              fontSize: '16px',
              fontWeight: 500,
              color: '#374151',
              border: '1px solid #d1d5db',
              borderRadius: '8px',
              textDecoration: 'none',
              background: 'white'
            }}>
              Voir les tarifs
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}

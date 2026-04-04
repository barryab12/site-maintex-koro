'use client'

import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import Link from 'next/link'
import { CheckCircle2, Factory, Building, Zap, Building2, Wheat, Truck } from 'lucide-react'

export default function ClientsPage() {
  const clients = [
    'Veolia', 'Elior Group', 'Ramsay Santé', 'Engie FM',
    'Groupe Rocher', 'Sanofi', 'Urssaf', 'CHU Grenoble',
    'Biscuiterie Val de Loire', 'Régie Eau Occitanie', 'Clinique Saint-Exupéry', 'Transdev'
  ]

  const stats = [
    { value: '350+', label: 'clients actifs', sub: 'Dans 8 secteurs', color: 'text-[#0A0A8A]' },
    { value: '–34%', label: 'coûts maintenance', sub: 'Moyenne clients', color: 'text-green-600' },
    { value: '+41%', label: 'interventions préventives', sub: 'Toutes industries', color: 'text-amber-600' },
    { value: '98%', label: 'satisfaction terrain', sub: 'Enquête 2024', color: 'text-[#0A0A8A]' }
  ]

  const testimonials = [
    {
      tag: 'Industrie',
      icon: Factory,
      quote: "Avant Maintex, on perdait 2h par jour à chercher des bons papier. Maintenant tout est dans l'appli, même sans réseau.",
      author: 'Marc Rénard',
      role: 'Resp. Maintenance — Biscuiterie du Val de Loire',
      initials: 'MR'
    },
    {
      tag: 'Santé',
      icon: Building,
      quote: "La traçabilité réglementaire est entièrement automatique. On passe les audits HAS sans stress. Mise en place en une semaine.",
      author: 'Sophie Lefebvre',
      role: 'Ingénieur biomédical — Clinique Saint-Exupéry',
      initials: 'SL'
    },
    {
      tag: 'Énergie',
      icon: Zap,
      quote: "On gère 14 sites avec 8 techniciens. Maintex a divisé par 2 nos pannes imprévues en 6 mois.",
      author: 'Jean-Paul Camus',
      role: 'Directeur technique — Régie Eau Occitanie',
      initials: 'JPC'
    },
    {
      tag: 'Facility Management',
      icon: Building2,
      quote: "Le portail client nous permet de recevoir les demandes directement et de suivre les SLA en temps réel. Nos clients adorent.",
      author: 'Nathalie Dubois',
      role: 'Directrice FM — Engie Services',
      initials: 'ND'
    },
    {
      tag: 'Agroalimentaire',
      icon: Wheat,
      quote: "La conformité HACCP est garantie. Nous passons nos audits IFS et BRC sans préparation particulière.",
      author: 'Pierre Martin',
      role: 'Responsable QHSE — Biscuiterie du Val de Loire',
      initials: 'PM'
    },
    {
      tag: 'Transport',
      icon: Truck,
      quote: "Le carnet d'entretien numérique a remplacé nos centaines de classeurs. Tout est traçable et accessible instantanément.",
      author: 'Ahmed Benali',
      role: 'Chef de flotte — Transdev',
      initials: 'AB'
    }
  ]

  const caseStudies = [
    {
      title: 'Biscuiterie du Val de Loire',
      sector: 'Industrie & Agroalimentaire',
      challenge: 'Gérer la maintenance de 3 lignes de production avec une équipe de 5 techniciens.',
      results: ['–38% temps d\'arrêt', '+45% taux préventif', 'ROI en 4 mois'],
      image: '/images/factory-industry.png'
    },
    {
      title: 'Clinique Saint-Exupéry',
      sector: 'Santé & Biomédical',
      challenge: 'Assurer la conformité HAS de 2000 dispositifs médicaux.',
      results: ['100% audits réussis', '–60% temps administratif', 'Traçabilité totale'],
      image: '/images/healthcare-biomedical.png'
    },
    {
      title: 'Régie Eau Occitanie',
      sector: 'Énergie & Utilities',
      challenge: 'Superviser 14 sites de production d\'eau potable avec 8 techniciens.',
      results: ['–50% pannes imprévues', '99.9% disponibilité', 'Conformité CRE'],
      image: '/images/energy-utilities.png'
    }
  ]

  return (
    <main className="min-h-screen bg-white font-sans">
      <SiteHeader />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center pt-[70px] pb-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#e2e8f0_1px,transparent_0)] bg-[size:40px_40px] opacity-50" />

        <div className="relative z-10 max-w-[1240px] mx-auto px-6 lg:px-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A0A8A]/10 border border-[#0A0A8A]/20 text-[#0A0A8A] mb-6">
            <CheckCircle2 className="w-4 h-4" />
            <span className="text-xs font-medium">Nos clients</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.06] tracking-tight mb-6 max-w-3xl mx-auto">
            Ils ont transformé<br />
            <span className="text-[#0A0A8A]">
              leur maintenance.
            </span>
          </h1>
          <p className="text-lg text-gray-600 font-normal max-w-xl mx-auto">
            Plus de 350 entreprises font confiance à MAINTEX pour optimiser leurs opérations de maintenance.
          </p>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-10">
            <div className="text-[11px] uppercase tracking-wider text-[#0A0A8A] font-semibold mb-2">
              Ils nous font confiance
            </div>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-px bg-gray-200 rounded-2xl overflow-hidden border border-gray-200">
            {clients.map((client, i) => (
              <div key={i} className="bg-white p-6 text-center text-sm font-bold text-gray-300 tracking-wider">
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {stats.map((stat, i) => (
              <div key={i} className="text-center p-8 rounded-2xl bg-gray-50 border border-gray-200">
                <div className={`text-5xl font-black tracking-tight mb-2 ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-gray-600">{stat.label}</div>
                <div className="text-xs text-gray-500 mt-1">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <div className="text-[11px] uppercase tracking-wider text-[#0A0A8A] font-semibold mb-4">
              Témoignages
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              Ce que disent nos clients
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl p-8 relative overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="h-1 bg-[#0A0A8A] -mx-8 -mt-8 mb-6" />
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded text-[11px] text-gray-600 font-medium mb-4">
                  <div className="w-4 h-4 rounded bg-[#0A0A8A]/10 flex items-center justify-center">
                    <t.icon className="w-2.5 h-2.5 text-[#0A0A8A]" />
                  </div>
                  {t.tag}
                </div>
                <div className="text-yellow-500 text-sm mb-3">★★★★★</div>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">{t.quote}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0A0A8A] flex items-center justify-center text-white text-xs font-bold">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">{t.author}</div>
                    <div className="text-xs text-gray-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <div className="text-[11px] uppercase tracking-wider text-[#0A0A8A] font-semibold mb-4">
              Études de cas
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              Résultats concrets
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study, i) => (
              <div key={i} className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="h-48 overflow-hidden">
                  <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="text-[11px] uppercase tracking-wider text-[#0A0A8A] font-semibold mb-2">
                    {study.sector}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{study.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{study.challenge}</p>
                  <div className="flex flex-wrap gap-2">
                    {study.results.map((r, j) => (
                      <span key={j} className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                        <CheckCircle2 className="w-3 h-3" />
                        {r}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-20 bg-[#0A0A8A] relative overflow-hidden">
        <div className="relative z-10 max-w-[1240px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-6">
            Rejoignez nos clients
          </h2>
          <p className="text-lg text-white/70 font-normal max-w-xl mx-auto mb-10">
            Découvrez comment MAINTEX peut transformer votre maintenance.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-[#0A0A8A] bg-white rounded-lg hover:bg-white/90 transition-all no-underline">
            Demander une démo →
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}

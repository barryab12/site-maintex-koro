'use client'

import Image from 'next/image'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import Link from 'next/link'
import { CheckCircle2, Factory, Building, Zap, Building2, Wheat, Truck, ArrowRight, Star, TrendingUp, TrendingDown, Users, Globe, Target, Clock, Award, ChevronRight } from 'lucide-react'

export default function ClientsPage() {
  const clients = [
    'Veolia', 'Elior Group', 'Ramsay Santé', 'Engie FM',
    'Groupe Rocher', 'Sanofi', 'Urssaf', 'CHU Grenoble',
    'Biscuiterie Val de Loire', 'Régie Eau Occitanie', 'Clinique Saint-Exupéry', 'Transdev'
  ]

  const stats = [
    { value: '350+', label: 'clients actifs', sub: 'Dans 8 secteurs', icon: Users, color: '#1E3A8A' },
    { value: '–34%', label: 'coûts maintenance', sub: 'Moyenne clients', icon: TrendingDown, color: '#059669' },
    { value: '+41%', label: 'interventions préventives', sub: 'Toutes industries', icon: TrendingUp, color: '#F97316' },
    { value: '98%', label: 'satisfaction terrain', sub: 'Enquête 2024', icon: Award, color: '#1E3A8A' }
  ]

  const testimonials = [
    {
      tag: 'Industrie',
      icon: Factory,
      quote: "Avant Maintex, on perdait 2h par jour à chercher des bons papier. Maintenant tout est dans l'appli, même sans réseau.",
      author: 'Marc Rénard',
      role: 'Resp. Maintenance — Biscuiterie du Val de Loire',
      initials: 'MR',
      result: '-2h/jour'
    },
    {
      tag: 'Santé',
      icon: Building,
      quote: "La traçabilité réglementaire est entièrement automatique. On passe les audits HAS sans stress. Mise en place en une semaine.",
      author: 'Sophie Lefebvre',
      role: 'Ingénieur biomédical — Clinique Saint-Exupéry',
      initials: 'SL',
      result: '100% HAS'
    },
    {
      tag: 'Énergie',
      icon: Zap,
      quote: "On gère 14 sites avec 8 techniciens. Maintex a divisé par 2 nos pannes imprévues en 6 mois.",
      author: 'Jean-Paul Camus',
      role: 'Directeur technique — Régie Eau Occitanie',
      initials: 'JPC',
      result: '-50% pannes'
    },
    {
      tag: 'Facility Management',
      icon: Building2,
      quote: "Le portail client nous permet de recevoir les demandes directement et de suivre les SLA en temps réel. Nos clients adorent.",
      author: 'Nathalie Dubois',
      role: 'Directrice FM — Engie Services',
      initials: 'ND',
      result: '+35% SLA'
    },
    {
      tag: 'Agroalimentaire',
      icon: Wheat,
      quote: "La conformité HACCP est garantie. Nous passons nos audits IFS et BRC sans préparation particulière.",
      author: 'Pierre Martin',
      role: 'Responsable QHSE — Biscuiterie du Val de Loire',
      initials: 'PM',
      result: 'HACCP OK'
    },
    {
      tag: 'Transport',
      icon: Truck,
      quote: "Le carnet d'entretien numérique a remplacé nos centaines de classeurs. Tout est traçable et accessible instantanément.",
      author: 'Ahmed Benali',
      role: 'Chef de flotte — Transdev',
      initials: 'AB',
      result: 'Digital 100%'
    }
  ]

  const caseStudies = [
    {
      title: 'Biscuiterie du Val de Loire',
      sector: 'Industrie & Agroalimentaire',
      challenge: 'Gérer la maintenance de 3 lignes de production avec une équipe de 5 techniciens.',
      results: ['–38% temps d\'arrêt', '+45% taux préventif', 'ROI en 4 mois'],
      image: '/images/production-line.png',
      stats: [
        { value: '-38%', label: 'Arrêts' },
        { value: '+45%', label: 'Préventif' }
      ]
    },
    {
      title: 'Clinique Saint-Exupéry',
      sector: 'Santé & Biomédical',
      challenge: 'Assurer la conformité HAS de 2000 dispositifs médicaux.',
      results: ['100% audits réussis', '–60% temps administratif', 'Traçabilité totale'],
      image: '/images/hospital-medical.png',
      stats: [
        { value: '100%', label: 'HAS' },
        { value: '-60%', label: 'Admin' }
      ]
    },
    {
      title: 'Régie Eau Occitanie',
      sector: 'Énergie & Utilities',
      challenge: 'Superviser 14 sites de production d\'eau potable avec 8 techniciens.',
      results: ['–50% pannes imprévues', '99.9% disponibilité', 'Conformité CRE'],
      image: '/images/water-treatment.png',
      stats: [
        { value: '99.9%', label: 'Dispo.' },
        { value: '-50%', label: 'Pannes' }
      ]
    }
  ]

  return (
    <main className="min-h-screen bg-[#FAFAF9] font-sans">
      <SiteHeader />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center pt-[70px] pb-16 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A]/5 via-white to-[#F97316]/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#e2e8f0_1px,transparent_0)] bg-[size:40px_40px] opacity-50" />
        
        {/* Decorative blobs */}
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-[#F97316]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#1E3A8A]/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-[1240px] mx-auto px-6 lg:px-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F97316]/10 border border-[#F97316]/20 text-[#1E3A8A] mb-6">
                <CheckCircle2 className="w-4 h-4 text-[#F97316]" />
                <span className="text-sm font-semibold">15+ Modules satisfaits</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0C0A09] leading-tight tracking-tight mb-6">
                Ils ont transformé<br />
                <span className="text-[#1E3A8A]">leur maintenance.</span>
              </h1>
              
              <p className="text-lg text-[#44403C] max-w-xl mb-8 leading-relaxed">
                Plus de 350 entreprises en France et en Afrique font confiance à MAINTEX pour optimiser leurs opérations de maintenance.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#F97316] text-white font-semibold rounded-xl hover:bg-[#EA580C] transition-all shadow-lg shadow-[#F97316]/25 no-underline"
                >
                  Demander une démo
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <Link 
                  href="#case-studies" 
                  className="inline-flex items-center gap-2 px-6 py-3.5 border-2 border-[#1E3A8A]/20 text-[#1E3A8A] font-semibold rounded-xl hover:border-[#1E3A8A] transition-all no-underline"
                >
                  Voir les études de cas
                </Link>
              </div>
            </div>

            {/* Hero Photo with Floating Stats */}
            <div className="hidden lg:block relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/business-partnership.png"
                  alt="Partenaires clients MAINTEX"
                  width={550}
                  height={350}
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-3 left-4 flex items-center gap-2 px-4 py-2.5 bg-[#059669] text-white rounded-full shadow-lg">
                <CheckCircle2 className="w-4 h-4" />
                <span className="text-sm font-semibold">98% Satisfaction</span>
              </div>
              
              <div className="absolute top-16 right-4 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Users className="w-4 h-4 text-[#F97316]" />
                  <span className="text-xs text-gray-500">Clients</span>
                </div>
                <div className="text-2xl font-bold text-[#0C0A09]">350+</div>
              </div>
              
              <div className="absolute bottom-4 left-4 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Globe className="w-4 h-4 text-[#1E3A8A]" />
                  <span className="text-xs text-gray-500">Pays</span>
                </div>
                <div className="text-2xl font-bold text-[#0C0A09]">15</div>
              </div>
              
              <div className="absolute bottom-4 right-4 bg-[#1E3A8A] text-white rounded-xl p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <TrendingDown className="w-4 h-4" />
                  <span className="text-sm font-semibold">-34% coûts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-12 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-8">
            <span className="text-sm font-semibold text-[#64748b] uppercase tracking-wider">
              Ils nous font confiance
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {clients.map((client, i) => (
              <div key={i} className="px-6 py-3 bg-[#FAFAF9] rounded-lg text-sm font-semibold text-[#64748b]">
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats with Photos */}
      <section className="py-20 bg-[#FAFAF9]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#F97316]/30 transition-all">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${stat.color}15` }}>
                  <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
                </div>
                <div className="text-3xl font-bold mb-1" style={{ color: stat.color }}>{stat.value}</div>
                <div className="text-sm font-medium text-[#0C0A09]">{stat.label}</div>
                <div className="text-xs text-[#64748b] mt-1">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials with Photos */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F97316]/10 border border-[#F97316]/20 text-[#1E3A8A] mb-6">
              <Star className="w-4 h-4 text-[#F97316] fill-[#F97316]" />
              <span className="text-sm font-semibold">Témoignages clients</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0C0A09] tracking-tight">
              Ce que disent nos clients
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-[#F97316]/30 transition-all relative overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-[#1E3A8A] to-[#F97316] -mx-6 -mt-6 mb-4" />
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAFAF9] rounded-lg text-xs text-[#64748b] font-medium">
                    <t.icon className="w-3 h-3 text-[#F97316]" />
                    {t.tag}
                  </div>
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="w-3 h-3 text-[#F97316] fill-[#F97316]" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-[#44403C] leading-relaxed mb-6 italic">"{t.quote}"</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#1E3A8A] flex items-center justify-center text-white text-xs font-bold">
                      {t.initials}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#0C0A09]">{t.author}</div>
                      <div className="text-xs text-[#64748b]">{t.role}</div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-[#059669]/10 rounded-lg">
                  <span className="text-xs font-bold text-[#059669]">{t.result}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies with Photos */}
      <section id="case-studies" className="py-20 bg-[#FAFAF9]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E3A8A]/10 border border-[#1E3A8A]/20 text-[#1E3A8A] mb-6">
              <Target className="w-4 h-4" />
              <span className="text-sm font-semibold">Études de cas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0C0A09] tracking-tight">
              Résultats concrets
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  
                  {/* Floating Stats on Image */}
                  {study.stats && study.stats.map((stat, j) => (
                    <div 
                      key={j}
                      className={`absolute bottom-4 ${j === 0 ? 'left-4' : 'right-4'} bg-white rounded-lg px-3 py-2 shadow-lg`}
                    >
                      <div className="text-lg font-bold text-[#059669]">{stat.value}</div>
                      <div className="text-xs text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div className="p-6">
                  <div className="text-xs font-semibold text-[#F97316] uppercase tracking-wider mb-2">
                    {study.sector}
                  </div>
                  <h3 className="text-lg font-bold text-[#0C0A09] mb-3">{study.title}</h3>
                  <p className="text-sm text-[#64748b] mb-4">{study.challenge}</p>
                  <div className="flex flex-wrap gap-2">
                    {study.results.map((r, j) => (
                      <span key={j} className="inline-flex items-center gap-1 px-3 py-1 bg-[#059669]/10 text-[#059669] text-xs font-semibold rounded-full">
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
      <section className="py-20 bg-gradient-to-br from-[#1E3A8A] to-[#1E3A8A]/95 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(249,115,22,0.15),transparent_50%)]" />
        <div className="relative z-10 max-w-[1240px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Rejoignez nos clients
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-10">
            Découvrez comment MAINTEX peut transformer votre maintenance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-[#F97316] bg-white rounded-xl hover:bg-gray-100 transition-all shadow-lg no-underline">
              Demander une démo gratuite <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/calculateur-roi" className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all no-underline">
              Calculer mon ROI
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}

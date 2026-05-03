'use client'

import { useState } from 'react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import Link from 'next/link'
import { 
  ShoppingCart, Brain, Activity, Target, Shield, Clock, 
  TrendingDown, Users, Award, Quote, Zap, Database,
  CheckCircle2, BarChart3, BookOpen, FileCheck, ChevronRight, Server, HeadphonesIcon,
  AlertTriangle, Store, Refrigerator
} from 'lucide-react'
import { TabNavigation, TabPanel } from '@/components/tab-navigation'
import { TabletMockup, MobileMockup, GMAODashboardMockup, EquipmentDetailMockup, TaskManagementMockup } from '@/components/device-mockups'

export default function RetailPage() {
  const [activeTab, setActiveTab] = useState('enjeux')

  const contentTabs = [
    { id: 'enjeux', label: 'Enjeux', icon: <AlertTriangle className="w-4 h-4" /> },
    { id: 'solutions', label: 'Solutions', icon: <Target className="w-4 h-4" /> },
    { id: 'resultats', label: 'Résultats', icon: <Award className="w-4 h-4" /> },
  ]

  const enjeux = [
    {
      icon: Store,
      title: "Expérience client et ventes",
      description: "Dans le retail, un équipement en panne impacte directement l'expérience client et les ventes. Une caisse bloquée, un rayon fermé : le chiffre d'affaires en pâtit.",
      points: [
        "Impact sur les ventes",
        "Expérience client dégradée",
        "Image de marque",
        "Perte de clients"
      ]
    },
    {
      icon: Refrigerator,
      title: "Équipements sensibles : froid et alimentaire",
      description: "Les rayons frais et surgelés nécessitent une maintenance rigoureuse. Une défaillance peut entraîner des pertes de marchandises importantes.",
      points: [
        "Meubles frigorifiques",
        "Chambres froides",
        "Pertes de produits",
        "Risques sanitaires"
      ]
    },
    {
      icon: Target,
      title: "Réseau de magasins dispersé",
      description: "Les enseignes gèrent des dizaines voire des centaines de points de vente, chacun avec ses propres équipements à maintenir.",
      points: [
        "Magasins multiples",
        "Équipements variés",
        "Coordination complexe",
        "Déplacements fréquents"
      ]
    }
  ]

  const solutions = [
    {
      icon: Brain,
      title: "Diagnostic IA pour équipements de magasin",
      description: "Maintex utilise l'intelligence artificielle pour analyser les historiques de vos équipements et proposer des diagnostics précis.",
      benefits: [
        "Identification des causes racines",
        "Anticipation des pannes",
        "Capitalisation du savoir-faire",
        "Aide aux techniciens"
      ]
    },
    {
      icon: Activity,
      title: "Suivi des fonctions vitales du magasin",
      description: "Surveillez les fonctions critiques : caisses, rayons frais, éclairage, climatisation.",
      benefits: [
        "Vision par fonction",
        "Priorisation automatique",
        "Alertes intelligentes",
        "Disponibilité consolidée"
      ]
    },
    {
      icon: Database,
      title: "Gestion multi-magasins centralisée",
      description: "Pilotez la maintenance de tous vos magasins depuis une plateforme unique.",
      benefits: [
        "Vue par magasin",
        "Historique complet",
        "Comparaison inter-sites",
        "Rapports automatisés"
      ]
    },
    {
      icon: Target,
      title: "First Time Fix pour interventions rapides",
      description: "Équipez vos techniciens de toutes les informations pour résoudre les pannes dès le premier passage.",
      benefits: [
        "Diagnostic assisté",
        "Historique accessible",
        "Réduction des retours",
        "Magasin opérationnel"
      ]
    },
    {
      icon: Clock,
      title: "Maintenance préventive planifiée",
      description: "Planifiez vos opérations de maintenance selon les heures d'ouverture et les périodes creuses.",
      benefits: [
        "Interventions hors affluence",
        "Planification optimisée",
        "Respect des horaires",
        "Impact minimal"
      ]
    },
    {
      icon: BarChart3,
      title: "Indicateurs pour le retail",
      description: "Pilotez votre maintenance avec des indicateurs adaptés aux exigences du commerce de détail.",
      benefits: [
        "Impact sur les ventes",
        "Disponibilité équipements",
        "Coût par magasin",
        "Performance globale"
      ]
    }
  ]

  const testimonials = [
    {
      quote: "Maintex nous a permis de réduire nos pannes de caisses de 50%. Nos temps d'attente client ont considérablement diminué.",
      author: "Marie Dupont",
      role: "Directrice Technique",
      company: "Enseigne Grande Distribution",
      stat: "–50%",
      statLabel: "pannes caisses"
    },
    {
      quote: "La surveillance de nos meubles frigorifiques nous a permis d'anticiper les pannes. Plus de pertes de produits.",
      author: "Pierre Martin",
      role: "Responsable Maintenance",
      company: "Supermarché",
      stat: "0€",
      statLabel: "pertes produits"
    },
    {
      quote: "Gérer 120 magasins avec Maintex nous a fait gagner 40% de temps sur la coordination des interventions.",
      author: "Sophie Bernard",
      role: "Directrice Maintenance",
      company: "Réseau de Magasins",
      stat: "–40%",
      statLabel: "temps coordination"
    }
  ]

  const stats = [
    { value: '–50%', label: 'Pannes caisses' },
    { value: '0€', label: 'Pertes produits' },
    { value: '+95%', label: 'Disponibilité' },
    { value: '–40%', label: 'Temps coordination' },
  ]

  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A] via-[#1E3A8A] to-[#1E3A8A]/90" />
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#F97316]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#F97316]/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-[1240px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#F97316]/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
                  <ShoppingCart className="w-8 h-8 text-[#F97316]" />
                </div>
                <div>
                  <span className="text-white/80 font-medium text-sm uppercase tracking-wider">Retail & Distribution</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl">
                Maintenez vos magasins opérationnels
              </h1>

              <p className="text-lg text-white/80 max-w-xl mb-8">
                Dans le retail, un équipement en panne coûte des ventes. Maintex optimise votre maintenance pour des magasins toujours opérationnels.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/contact" 
                  className="px-8 py-4 bg-[#F97316] text-white rounded-xl font-semibold hover:bg-[#EA580C] transition-all no-underline shadow-lg shadow-[#F97316]/25"
                >
                  Demander une démonstration <ChevronRight className="w-4 h-4 inline" />
                </Link>
                <Link 
                  href="/calculateur-roi" 
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-xl font-semibold hover:bg-white/20 transition-all no-underline"
                >
                  Calculer votre ROI
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-3xl font-bold text-[#F97316] mb-1">{stat.value}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bandeau */}
      <section className="py-6 bg-[#1E3A8A] border-t border-white/10">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-12 text-white/90 text-sm">
            <div className="flex items-center gap-2">
              <Server className="w-4 h-4 text-[#F97316]" />
              Hébergement France
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#F97316]" />
              RGPD conforme
            </div>
            <div className="flex items-center gap-2">
              <HeadphonesIcon className="w-4 h-4 text-[#F97316]" />
              Support francophone
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#F97316]" />
              Déploiement 14 jours
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-[#FAFAF9] border-b border-gray-200 sticky top-[68px] z-30">
        <div className="max-w-[1240px] mx-auto px-6">
          <TabNavigation 
            tabs={contentTabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-16 bg-[#FAFAF9]">
        <div className="max-w-[1240px] mx-auto px-6">
          {/* Enjeux Tab */}
          <TabPanel isActive={activeTab === 'enjeux'}>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                {enjeux.map((enjeu, i) => (
                  <div 
                    key={i} 
                    className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl hover:border-[#F97316] transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#F97316]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <enjeu.icon className="w-6 h-6 text-[#F97316]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#0C0A09] mb-2 leading-snug">
                          {enjeu.title}
                        </h3>
                        <p className="text-[#44403C] text-sm mb-4 leading-relaxed">
                          {enjeu.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {enjeu.points.map((point, j) => (
                            <span key={j} className="flex items-center gap-1.5 px-2 py-1 bg-gray-50 rounded text-xs text-[#64748b]">
                              <div className="w-1 h-1 bg-[#F97316] rounded-full" />
                              {point}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="lg:sticky lg:top-36 flex justify-center">
                <TabletMockup className="w-full max-w-[340px]">
                  <GMAODashboardMockup />
                </TabletMockup>
              </div>
            </div>
          </TabPanel>

          {/* Solutions Tab */}
          <TabPanel isActive={activeTab === 'solutions'}>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                {solutions.map((solution, i) => (
                  <div 
                    key={i} 
                    className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl hover:border-[#1E3A8A] transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#1E3A8A]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <solution.icon className="w-6 h-6 text-[#1E3A8A]" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg font-bold text-[#0C0A09] mb-2">
                          {solution.title}
                        </h3>
                        <p className="text-[#44403C] text-sm mb-4 leading-relaxed">
                          {solution.description}
                        </p>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {solution.benefits.map((benefit, j) => (
                            <div key={j} className="flex items-start gap-2 text-xs text-[#44403C]">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] flex-shrink-0 mt-0.5" />
                              <span>{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="lg:sticky lg:top-36 flex flex-col gap-4 items-center">
                <TabletMockup className="w-full max-w-[300px]">
                  <EquipmentDetailMockup />
                </TabletMockup>
                <MobileMockup className="w-[150px]">
                  <TaskManagementMockup />
                </MobileMockup>
              </div>
            </div>
          </TabPanel>

          {/* Résultats Tab */}
          <TabPanel isActive={activeTab === 'resultats'}>
            <div className="grid lg:grid-cols-3 gap-6 mb-12">
              {testimonials.map((testimonial, i) => (
                <div 
                  key={i} 
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl border border-gray-200 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <Quote className="w-8 h-8 text-[#F97316]/30" />
                    <div className="text-right">
                      <div className="text-2xl font-bold text-[#1E3A8A]">{testimonial.stat}</div>
                      <div className="text-xs text-[#64748b]">{testimonial.statLabel}</div>
                    </div>
                  </div>
                  <p className="text-[#44403C] text-sm leading-relaxed mb-6">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div className="border-t border-gray-100 pt-4">
                    <div className="font-semibold text-[#0C0A09]">
                      {testimonial.author}
                    </div>
                    <div className="text-[#64748b] text-sm">
                      {testimonial.role}
                    </div>
                    <div className="text-[#F97316] text-sm font-medium">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Comparison */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-[#0C0A09] mb-6 text-center">
                Dans le retail, la maintenance protège vos ventes
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 rounded-xl p-6 border border-red-100">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingDown className="w-6 h-6 text-red-500" />
                    <span className="font-semibold text-red-700">Sans maintenance structurée</span>
                  </div>
                  <ul className="space-y-2 text-red-700/80 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full" />
                      Équipements souvent en panne
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full" />
                      Ventes perdues
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full" />
                      Clients mécontents
                    </li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                    <span className="font-semibold text-green-700">Avec Maintex</span>
                  </div>
                  <ul className="space-y-2 text-green-700/80 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                      Magasins opérationnels
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                      Ventes maximisées
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                      Clients satisfaits
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </TabPanel>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#1E3A8A] to-[#1E3A8A]/90 relative overflow-hidden">
        <div className="absolute top-10 right-20 w-64 h-64 bg-[#F97316]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-[#F97316]/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-[1240px] mx-auto text-center">
          <div className="w-16 h-16 bg-[#F97316]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Zap className="w-8 h-8 text-[#F97316]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Découvrez Maintex pour vos magasins
          </h2>
          <p className="text-xl text-white/90 mb-4 max-w-3xl mx-auto">
            Hypermarchés, supermarchés, magasins spécialisés : Maintex s&apos;adapte à tous vos points de vente.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-[#F97316] text-white rounded-xl font-semibold hover:bg-[#EA580C] transition-all no-underline shadow-lg shadow-[#F97316]/25"
            >
              Demander une démonstration <ChevronRight className="w-4 h-4 inline" />
            </Link>
            <Link 
              href="/calculateur-roi" 
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-xl font-semibold hover:bg-white/20 transition-all no-underline"
            >
              Calculer votre ROI
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}

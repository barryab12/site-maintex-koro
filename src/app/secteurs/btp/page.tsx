'use client'

import { useState } from 'react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import Link from 'next/link'
import { 
  HardHat, Brain, Activity, Target, Shield, Clock, 
  TrendingDown, Users, Award, Quote, Zap, Database,
  CheckCircle2, BarChart3, BookOpen, FileCheck, ChevronRight, Server, HeadphonesIcon,
  AlertTriangle, Building2, Crane
} from 'lucide-react'
import { TabNavigation, TabPanel } from '@/components/tab-navigation'
import { TabletMockup, MobileMockup, GMAODashboardMockup, EquipmentDetailMockup, TaskManagementMockup } from '@/components/device-mockups'

export default function BTPPage() {
  const [activeTab, setActiveTab] = useState('enjeux')

  const contentTabs = [
    { id: 'enjeux', label: 'Enjeux', icon: <AlertTriangle className="w-4 h-4" /> },
    { id: 'solutions', label: 'Solutions', icon: <Target className="w-4 h-4" /> },
    { id: 'resultats', label: 'Résultats', icon: <Award className="w-4 h-4" /> },
  ]

  const enjeux = [
    {
      icon: Shield,
      title: "Sécurité sur les chantiers",
      description: "Le BTP est l'un des secteurs les plus exposés aux risques professionnels. La défaillance d'un équipement peut avoir des conséquences graves.",
      points: [
        "Engins de chantier dangereux",
        "Travaux en hauteur",
        "Équipements de levage",
        "Environnements complexes"
      ]
    },
    {
      icon: TrendingDown,
      title: "Impact des immobilisations sur les délais",
      description: "Un engin en panne sur un chantier peut retarder l'ensemble du projet et engendrer des pénalités de retard.",
      points: [
        "Retards de chantier",
        "Pénalités contractuelles",
        "Réorganisation nécessaire",
        "Surcoûts importants"
      ]
    },
    {
      icon: Building2,
      title: "Parc d'engins dispersé",
      description: "Les entreprises du BTP gèrent des parcs d'engins répartis sur plusieurs chantiers géographiquement dispersés.",
      points: [
        "Chantiers multiples",
        "Engins mobiles",
        "Transferts fréquents",
        "Gestion complexe"
      ]
    }
  ]

  const solutions = [
    {
      icon: Brain,
      title: "Diagnostic IA pour engins de chantier",
      description: "Maintex utilise l'intelligence artificielle pour analyser les historiques de vos engins et proposer des diagnostics précis.",
      benefits: [
        "Identification des causes racines",
        "Anticipation des pannes",
        "Capitalisation du savoir-faire",
        "Aide aux mécaniciens terrain"
      ]
    },
    {
      icon: Activity,
      title: "Suivi des engins par chantier",
      description: "Visualisez en temps réel la disponibilité de vos engins par chantier et optimisez leur allocation.",
      benefits: [
        "Vision par chantier",
        "Allocation optimisée",
        "Transferts planifiés",
        "Disponibilité consolidée"
      ]
    },
    {
      icon: Database,
      title: "Gestion du parc d'engins",
      description: "Centralisez toutes les informations de vos engins : historique, maintenance, localisation, documentation.",
      benefits: [
        "Historique complet",
        "Documentation centralisée",
        "Suivi des heures",
        "Géolocalisation"
      ]
    },
    {
      icon: Target,
      title: "First Time Fix pour interventions terrain",
      description: "Équipez vos mécaniciens de toutes les informations nécessaires pour résoudre les pannes sur le chantier.",
      benefits: [
        "Diagnostic assisté",
        "Historique accessible",
        "Pièces pré-positionnées",
        "Réduction des déplacements"
      ]
    },
    {
      icon: Clock,
      title: "Maintenance préventive par heures",
      description: "Planifiez vos opérations de maintenance en fonction des heures de fonctionnement de chaque engin.",
      benefits: [
        "Planification par heures",
        "Alertes d'échéance",
        "Optimisation des révisions",
        "Allongement durée de vie"
      ]
    },
    {
      icon: BarChart3,
      title: "Indicateurs pour le BTP",
      description: "Pilotez votre maintenance avec des indicateurs adaptés aux contraintes des chantiers.",
      benefits: [
        "Disponibilité par engin",
        "Coût par chantier",
        "MTBF/MTTR",
        "Performance parc"
      ]
    }
  ]

  const testimonials = [
    {
      quote: "Maintex nous a permis de réduire nos immobilisations d'engins de 35%. Nos chantiers respectent mieux leurs délais.",
      author: "Michel Dupont",
      role: "Directeur Parc",
      company: "Entreprise BTP",
      stat: "–35%",
      statLabel: "immobilisations"
    },
    {
      quote: "La géolocalisation des engins et le suivi des heures nous a fait gagner un temps précieux dans la gestion de notre parc.",
      author: "Sophie Martin",
      role: "Responsable Maintenance",
      company: "Constructeur",
      stat: "–40%",
      statLabel: "temps gestion"
    },
    {
      quote: "Nos mécaniciens itinérants ont accès à tout l'historique des engins sur leur mobile. Plus besoin de paperasse.",
      author: "Pierre Bernard",
      role: "Chef Mécanicien",
      company: "Groupe BTP",
      stat: "0",
      statLabel: "papier terrain"
    }
  ]

  const stats = [
    { value: '–35%', label: 'Immobilisations' },
    { value: '+80%', label: 'First Time Fix' },
    { value: '–40%', label: 'Temps gestion' },
    { value: '0', label: 'Papier terrain' },
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
                  <HardHat className="w-8 h-8 text-[#F97316]" />
                </div>
                <div>
                  <span className="text-white/80 font-medium text-sm uppercase tracking-wider">BTP & Construction</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl">
                Optimisez la disponibilité de votre parc d'engins
              </h1>

              <p className="text-lg text-white/80 max-w-xl mb-8">
                Dans le BTP, un engin en panne retarde tout le chantier. Maintex vous aide à maintenir votre parc opérationnel et à respecter vos délais.
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
                Dans le BTP, la maintenance impacte directement vos délais
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
                      Engins fréquemment en panne
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full" />
                      Retards de chantier
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full" />
                      Surcoûts importants
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
                      Engins disponibles
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                      Chantiers dans les délais
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                      Maîtrise des coûts
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
            Découvrez Maintex pour votre parc d'engins
          </h2>
          <p className="text-xl text-white/90 mb-4 max-w-3xl mx-auto">
            Pelle, bulldozer, grue, nacelle : Maintex s&apos;adapte à tous vos engins de chantier.
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

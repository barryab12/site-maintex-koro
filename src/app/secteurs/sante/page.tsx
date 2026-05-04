'use client'

import { useState } from 'react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import Link from 'next/link'
import { 
  HeartPulse, Brain, Activity, Target, Shield, Clock, 
  TrendingDown, Users, Award, Quote, Zap, Database,
  CheckCircle2, BarChart3, BookOpen, FileCheck, ChevronRight, Server, HeadphonesIcon,
  AlertTriangle, Stethoscope, Syringe
} from 'lucide-react'
import { TabNavigation, TabPanel } from '@/components/tab-navigation'
import { SectorHeroVisual, SectorEnjeuxVisual, SectorSolutionsVisual, getSectorConfig } from '@/components/sector-visuals'

export default function SantePage() {
  const [activeTab, setActiveTab] = useState('enjeux')
  const config = getSectorConfig('sante')

  const contentTabs = [
    { id: 'enjeux', label: 'Enjeux', icon: <AlertTriangle className="w-4 h-4" /> },
    { id: 'solutions', label: 'Solutions', icon: <Target className="w-4 h-4" /> },
    { id: 'resultats', label: 'Résultats', icon: <Award className="w-4 h-4" /> },
  ]

  const enjeux = [
    {
      icon: HeartPulse,
      title: "Sécurité des patients : priorité absolue",
      description: "Dans le secteur de la santé, la défaillance d'un équipement médical peut avoir des conséquences directes sur la vie des patients.",
      points: [
        "Équipements de soins critiques",
        "Disponibilité 24/7",
        "Risques pour les patients",
        "Responsabilité médicale"
      ]
    },
    {
      icon: Stethoscope,
      title: "Parc d'équipements médicaux complexe",
      description: "Les établissements de santé gèrent un parc d'équipements variés et complexes : IRM, scanners, blocs opératoires, laboratoires.",
      points: [
        "Équipements haute technologie",
        "Maintenance spécialisée",
        "Réglementations strictes",
        "Compétences techniques"
      ]
    },
    {
      icon: FileCheck,
      title: "Conformité réglementaire stricte",
      description: "Le secteur de la santé est soumis à des réglementations strictes : certifications, contrôles qualité, traçabilité des équipements.",
      points: [
        "Certifications HAS",
        "Contrôles périodiques",
        "Traçabilité obligatoire",
        "Documentation exhaustive"
      ]
    }
  ]

  const solutions = [
    {
      icon: Brain,
      title: "Diagnostic IA pour équipements médicaux",
      description: "Maintex utilise l'intelligence artificielle pour analyser les historiques de vos équipements et proposer des diagnostics précis.",
      benefits: [
        "Identification des causes racines",
        "Anticipation des pannes",
        "Capitalisation du savoir-faire",
        "Aide aux biomédicaux"
      ]
    },
    {
      icon: Activity,
      title: "Suivi des fonctions vitales",
      description: "Surveillez les fonctions critiques de votre établissement : blocs opératoires, imagerie, urgences, réanimation.",
      benefits: [
        "Vision par service",
        "Priorisation automatique",
        "Alertes intelligentes",
        "Disponibilité consolidée"
      ]
    },
    {
      icon: Database,
      title: "Traçabilité complète pour conformité",
      description: "Maintex garantit une traçabilité exhaustive de toutes les interventions, conforme aux exigences réglementaires.",
      benefits: [
        "Historique complet",
        "Rapports d'audit automatisés",
        "Documentation centralisée",
        "Préparation certifications"
      ]
    },
    {
      icon: Target,
      title: "First Time Fix pour interventions critiques",
      description: "Équipez vos équipes biomédicales de toutes les informations pour résoudre les pannes rapidement.",
      benefits: [
        "Diagnostic assisté",
        "Historique accessible",
        "Procédures détaillées",
        "Intervention rapide"
      ]
    },
    {
      icon: Clock,
      title: "Maintenance préventive réglementaire",
      description: "Planifiez vos opérations de maintenance selon les cycles réglementaires et les recommandations fabricants.",
      benefits: [
        "Calendrier réglementaire",
        "Alertes d'échéance",
        "Conformité assurée",
        "Documentation automatique"
      ]
    },
    {
      icon: BarChart3,
      title: "Indicateurs pour la santé",
      description: "Pilotez votre maintenance avec des indicateurs adaptés aux exigences des établissements de santé.",
      benefits: [
        "Disponibilité par service",
        "Conformité réglementaire",
        "MTBF/MTTR critiques",
        "Performance biomédicale"
      ]
    }
  ]

  const testimonials = [
    {
      quote: "Maintex nous a permis de réduire nos pannes d'équipements critiques de 40%. La disponibilité de nos IRM est passée à 99.5%.",
      author: "Dr. Jean-Marc Leroy",
      role: "Directeur Technique",
      company: "CHU",
      stat: "99.5%",
      statLabel: "disponibilité IRM"
    },
    {
      quote: "La traçabilité complète des interventions nous a été essentielle pour nos certifications HAS. Zéro non-conformité.",
      author: "Sophie Martin",
      role: "Responsable Qualité",
      company: "Clinique Privée",
      stat: "100%",
      statLabel: "conformité HAS"
    },
    {
      quote: "Nos biomédicaux ont accès à l'historique de chaque équipement sur leur mobile. L'efficacité des interventions a bondi.",
      author: "Pierre Durand",
      role: "Chef Biomédical",
      company: "Centre Hospitalier",
      stat: "+35%",
      statLabel: "efficacité interventions"
    }
  ]

  const stats = [
    { value: '99.5%', label: 'Disponibilité équipements' },
    { value: '100%', label: 'Conformité' },
    { value: '–40%', label: 'Pannes critiques' },
    { value: '+35%', label: 'Efficacité interventions' },
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
                  <HeartPulse className="w-8 h-8 text-[#F97316]" />
                </div>
                <div>
                  <span className="text-white/80 font-medium text-sm uppercase tracking-wider">Santé & Médical</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl">
                Garantissez la disponibilité de vos équipements médicaux
              </h1>

              <p className="text-lg text-white/80 max-w-xl mb-8">
                Dans la santé, chaque équipement doit fonctionner parfaitement. Maintex optimise votre maintenance biomédicale pour la sécurité des patients.
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
            <div className="hidden lg:block">
              <SectorHeroVisual 
                imageSrc="/images/sector-healthcare.jpg"
                imageAlt="Santé et équipements médicaux"
                stats={config.heroStats}
                badge={{ text: 'Santé', icon: <HeartPulse className="w-4 h-4" /> }}
              />
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
              Hébergement sécurisé
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
              Déploiement auto assisté
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
                <SectorEnjeuxVisual
                  imageSrc="/images/sector-healthcare-enjeux.jpg"
                  imageAlt="Défis de la maintenance biomédicale"
                  problems={config.enjeuxProblems}
                />
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
              
              <div className="lg:sticky lg:top-36 flex justify-center">
                <SectorSolutionsVisual
                  imageSrc="/images/sector-healthcare-solutions.jpg"
                  imageAlt="Solutions Maintex pour la santé"
                  benefits={config.solutionsBenefits}
                />
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
                Dans la santé, la maintenance protège les patients
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
                      Équipements en panne
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full" />
                      Risques pour les patients
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full" />
                      Non-conformités
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
                      Équipements disponibles
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                      Sécurité patients garantie
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                      Conformité totale
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
            Découvrez Maintex pour votre établissement de santé
          </h2>
          <p className="text-xl text-white/90 mb-4 max-w-3xl mx-auto">
            Hôpitaux, cliniques, centres d&apos;imagerie : Maintex s&apos;adapte à tous les établissements de santé.
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

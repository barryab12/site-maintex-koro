'use client'

import { useState } from 'react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import Link from 'next/link'
import { 
  Wheat, Brain, Activity, Target, Shield, Clock, 
  TrendingDown, Users, Award, Quote, Zap, Database,
  CheckCircle2, BarChart3, FileCheck, ChevronRight, Server, HeadphonesIcon,
  AlertTriangle, Thermometer, Wrench
} from 'lucide-react'
import { TabNavigation, TabPanel } from '@/components/tab-navigation'
import { SectorHeroVisual, SectorEnjeuxVisual, SectorSolutionsVisual, getSectorConfig } from '@/components/sector-visuals'

export default function AgroalimentairePage() {
  const [activeTab, setActiveTab] = useState('enjeux')
  const config = getSectorConfig('agroalimentaire')

  const contentTabs = [
    { id: 'enjeux', label: 'Enjeux', icon: <AlertTriangle className="w-4 h-4" /> },
    { id: 'solutions', label: 'Solutions', icon: <Target className="w-4 h-4" /> },
    { id: 'resultats', label: 'Résultats', icon: <Award className="w-4 h-4" /> },
  ]

  const enjeux = [
    {
      icon: Shield,
      title: "Conformité HACCP obligatoire",
      description: "L'industrie agroalimentaire doit respecter des normes sanitaires strictes. La moindre non-conformité peut entraîner des rappels coûteux.",
      points: [
        "Traçabilité complète obligatoire",
        "Audits IFS/BRC réguliers",
        "Documentation exhaustive",
        "Contrôles sanitaires stricts"
      ]
    },
    {
      icon: Clock,
      title: "Continuité de production",
      description: "Les lignes de production alimentaire fonctionnent souvent en continu. Les arrêts imprévus impactent directement la rentabilité.",
      points: [
        "Perturbation des flux",
        "Pertes de produits",
        "Non-respect des délais",
        "Surcharge des équipes"
      ]
    },
    {
      icon: Thermometer,
      title: "Contrôle des températures",
      description: "La chaîne du froid est critique dans l'agroalimentaire. Une défaillance peut compromettre la sécurité des produits.",
      points: [
        "Monitoring température 24/7",
        "Alertes automatiques",
        "Traçabilité des écarts",
        "Actions correctives rapides"
      ]
    }
  ]

  const solutions = [
    {
      icon: Brain,
      title: "Maintenance prédictive intelligente",
      description: "Anticipez les pannes de vos équipements critiques avant qu'elles n'impactent votre production.",
      benefits: [
        "Détection précoce des anomalies",
        "Planification optimisée",
        "Réduction des arrêts",
        "Économies sur les réparations"
      ]
    },
    {
      icon: Database,
      title: "Traçabilité HACCP complète",
      description: "Maintex garantit une traçabilité exhaustive de toutes les interventions pour vos audits.",
      benefits: [
        "Historique complet",
        "Rapports automatisés",
        "Conformité IFS/BRC",
        "Documentation centralisée"
      ]
    },
    {
      icon: Activity,
      title: "Monitoring température en temps réel",
      description: "Surveillez vos équipements frigorifiques et recevez des alertes instantanées en cas d'écart.",
      benefits: [
        "Alertes temps réel",
        "Historique température",
        "Conformité garantie",
        "Actions préventives"
      ]
    },
    {
      icon: Target,
      title: "First Time Fix optimisé",
      description: "Équipez vos techniciens de toutes les informations nécessaires pour résoudre les pannes dès le premier passage.",
      benefits: [
        "Diagnostic assisté",
        "Procédures accessibles",
        "Historique disponible",
        "Intervention efficace"
      ]
    },
    {
      icon: BarChart3,
      title: "Indicateurs OEE (TRS)",
      description: "Pilotez votre production avec des indicateurs adaptés à l'industrie agroalimentaire.",
      benefits: [
        "Disponibilité lignes",
        "Performance temps réel",
        "Qualité produits",
        "Optimisation continue"
      ]
    },
    {
      icon: Wrench,
      title: "Gestion des nettoyages et sanitations",
      description: "Planifiez et suivez les opérations de nettoyage et sanitation de vos équipements.",
      benefits: [
        "Planning automatisé",
        "Traçabilité complète",
        "Checklists numériques",
        "Conformité garantie"
      ]
    }
  ]

  const testimonials = [
    {
      quote: "Grâce à MAINTEX, nous avons réussi tous nos audits IFS et BRC sans non-conformité sur la partie maintenance depuis 2 ans.",
      author: "Marie Dupont",
      role: "Responsable Qualité",
      company: "Industrie Laitière",
      stat: "100%",
      statLabel: "conformité audits"
    },
    {
      quote: "La maintenance prédictive nous a permis de réduire de 50% nos arrêts de ligne imprévus.",
      author: "Jean-Pierre Martin",
      role: "Directeur Production",
      company: "Agro Industries",
      stat: "-50%",
      statLabel: "arrêts imprévus"
    },
    {
      quote: "Le monitoring température en temps réel nous évite des pertes de produits considérables.",
      author: "Sophie Bernard",
      role: "Responsable Maintenance",
      company: "Produits Frais SA",
      stat: "0",
      statLabel: "perte produit"
    }
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
                  <Wheat className="w-8 h-8 text-[#F97316]" />
                </div>
                <div>
                  <span className="text-white/80 font-medium text-sm uppercase tracking-wider">Agroalimentaire</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl">
                Garantissez la conformité et la productivité de vos lignes
              </h1>

              <p className="text-lg text-white/80 max-w-xl mb-8">
                Dans l&apos;agroalimentaire, la maintenance est un enjeu de sécurité sanitaire. Maintex vous accompagne dans cette démarche exigeante.
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

            {/* Hero Visual with Stats */}
            <div className="hidden lg:block">
              <SectorHeroVisual
                imageSrc="/images/sector-food.jpg"
                imageAlt="Industrie agroalimentaire"
                stats={config.heroStats}
                badge={{ text: 'Agroalimentaire', icon: <Wheat className="w-4 h-4" /> }}
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
                <SectorEnjeuxVisual
                  imageSrc="/images/sector-food-enjeux.jpg"
                  imageAlt="Défis du secteur agroalimentaire"
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
                  imageSrc="/images/sector-food-solutions.jpg"
                  imageAlt="Solutions Maintex pour l'agroalimentaire"
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
                Dans l&apos;agroalimentaire, la conformité est un enjeu critique
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
                      Risques sanitaires accrus
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full" />
                      Non-conformités audits
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full" />
                      Rappels produits coûteux
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
                      Conformité HACCP garantie
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                      Audits IFS/BRC réussis
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                      Production optimisée
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
            Découvrez Maintex pour l&apos;agroalimentaire
          </h2>
          <p className="text-xl text-white/90 mb-4 max-w-3xl mx-auto">
            Lignes de production, chambres froides, équipements de process : Maintex s&apos;adapte à tous vos équipements.
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

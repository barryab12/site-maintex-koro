'use client'

import { useState } from 'react'
import Image from 'next/image'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import Link from 'next/link'
import { 
  Factory, Brain, Activity, Target, Shield, Clock, 
  TrendingDown, Users, Award, Quote, Zap, Database,
  CheckCircle2, BarChart3, FileCheck, ChevronRight, Server, HeadphonesIcon,
  AlertTriangle, ArrowUpRight, Gauge
} from 'lucide-react'
import { TabNavigation, TabPanel } from '@/components/tab-navigation'
import { SectorHeroVisual, SectorEnjeuxVisual, SectorSolutionsVisual, getSectorConfig } from '@/components/sector-visuals'

export default function IndustriePage() {
  const [activeTab, setActiveTab] = useState('enjeux')
  const config = getSectorConfig('industrie')

  const contentTabs = [
    { id: 'enjeux', label: 'Enjeux', icon: <AlertTriangle className="w-4 h-4" /> },
    { id: 'solutions', label: 'Solutions', icon: <Target className="w-4 h-4" /> },
    { id: 'resultats', label: 'Résultats', icon: <Award className="w-4 h-4" /> },
  ]

  const enjeux = [
    {
      icon: TrendingDown,
      title: "L'arrêt de ligne : le coût le plus visible, mais pas le seul",
      description: "Dans tous les secteurs industriels — agroalimentaire, manufacture, chimie, énergie — l'arrêt non planifié est l'ennemi numéro un de la rentabilité.",
      points: [
        "Interventions répétées sur les mêmes équipements",
        "Surstockage de pièces par précaution",
        "Heures supplémentaires non planifiées",
        "Usure prématurée d'équipements mal diagnostiqués"
      ]
    },
    {
      icon: Shield,
      title: "La sécurité des opérateurs : une responsabilité qui engage l'entreprise",
      description: "Dans un environnement industriel, un équipement défaillant n'est pas seulement un problème de production — c'est un risque pour les opérateurs.",
      points: [
        "Machines tournantes et installations sous pression",
        "Équipements électriques haute tension",
        "Lignes de process avec mouvements automatisés",
        "Risques chimiques et thermiques"
      ]
    },
    {
      icon: FileCheck,
      title: "La conformité réglementaire : HACCP, ISO, et au-delà",
      description: "L'industrie est l'un des secteurs les plus encadrés en matière de maintenance. En agroalimentaire, les exigences HACCP imposent une traçabilité rigoureuse.",
      points: [
        "Normes GMP pour la chimie et pharmacie",
        "Référentiels ISO exigeant des historiques complets",
        "Non-conformités lors des audits",
        "Risques sur les certifications et marchés"
      ]
    }
  ]

  const solutions = [
    {
      icon: Brain,
      title: "L'IA au service du diagnostic terrain",
      description: "Maintex intègre l'intelligence artificielle directement dans le flux de travail du technicien.",
      benefits: [
        "Analyse de l'historique des défaillances similaires",
        "Identification des causes probables",
        "Procédures de remise en fonctionnement adaptées",
        "Enrichissement continu de la base de connaissances"
      ]
    },
    {
      icon: Activity,
      title: "Du suivi équipement au suivi des fonctions vitales",
      description: "Maintex introduit une logique différente : le suivi des fonctions vitales.",
      benefits: [
        "Vision de la disponibilité réelle",
        "Priorisation par criticité fonctionnelle",
        "Alertes immédiates si fonction compromise",
        "Pilotage par la production, pas par l'équipement"
      ]
    },
    {
      icon: Database,
      title: "Un historique complet, accessible en temps réel",
      description: "Maintex centralise l'intégralité des données de maintenance pour chaque machine.",
      benefits: [
        "Pannes et interventions historisées",
        "Pièces remplacées tracées",
        "Observations opérateurs conservées",
        "Accès mobile en atelier"
      ]
    },
    {
      icon: Target,
      title: "Un First Time Fix systématique",
      description: "Dans l'industrie, le retour sur site a un coût double : temps technicien et temps de production perdu.",
      benefits: [
        "Identification de la cause racine",
        "Bonne pièce prévue à l'avance",
        "Séquence de remise en fonctionnement optimisée",
        "Taux de First Time Fix durablement amélioré"
      ]
    },
    {
      icon: Clock,
      title: "Une maintenance préventive pilotée par les données",
      description: "La maintenance préventive traditionnelle repose sur des fréquences théoriques.",
      benefits: [
        "Détection des signaux faibles",
        "Anticipation des remplacements",
        "Maintenance prédictive par accumulation de données",
        "Sans investissement en capteurs supplémentaires"
      ]
    },
    {
      icon: BarChart3,
      title: "Des indicateurs opérationnels pour une supervision active",
      description: "Maintex ne réserve pas les indicateurs aux directions.",
      benefits: [
        "Taux de disponibilité par fonction vitale",
        "Délai moyen de remise en fonctionnement",
        "Backlog de préventif en retard",
        "Interventions récurrentes par équipement"
      ]
    }
  ]

  const testimonials = [
    {
      quote: "Depuis le déploiement de Maintex, nos arrêts non planifiés ont diminué de 35%. L'aide au diagnostic par IA permet à nos techniciens d'intervenir plus efficacement dès le premier passage.",
      author: "Jean Dupont",
      role: "Directeur Maintenance",
      company: "Client Agroalimentaire",
      stat: "–35%",
      statLabel: "arrêts non planifiés"
    },
    {
      quote: "Le suivi des fonctions vitales a transformé notre approche de la maintenance. Nous ne réagissons plus aux pannes, nous les anticipons.",
      author: "Marie Lambert",
      role: "Responsable HSE",
      company: "Client Industrie Chimique",
      stat: "+2j",
      statLabel: "gagnés par mois"
    },
    {
      quote: "La base de connaissances Maintex a permis de préserver le savoir-faire de nos techniciens seniors. Nos nouveaux arrivants sont opérationnels 2 fois plus vite.",
      author: "Philippe Renard",
      role: "Directeur Industriel",
      company: "Client Manufacturier",
      stat: "2x",
      statLabel: "montée en compétence"
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
                  <Factory className="w-8 h-8 text-[#F97316]" />
                </div>
                <div>
                  <span className="text-white/80 font-medium text-sm uppercase tracking-wider">Secteur Industrie</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl">
                Stoppez les arrêts non planifiés avant qu&apos;ils stoppent votre production
              </h1>

              <p className="text-lg text-white/80 max-w-xl mb-8">
                Dans l&apos;industrie, une ligne qui s&apos;arrête coûte de la cadence, des commandes retardées, des pénalités. Maintex change cette équation avec l&apos;IA et le suivi des fonctions vitales.
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

            {/* Hero Visual with Image */}
            <div className="hidden lg:block">
              <SectorHeroVisual
                imageSrc="/images/sector-industry.jpg"
                imageAlt="Industrie - Ligne de production"
                stats={config.heroStats}
                badge={{ text: 'Industrie', icon: <Factory className="w-4 h-4" /> }}
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
              
              {/* Enjeux Visual */}
              <div className="lg:sticky lg:top-36 flex justify-center">
                <SectorEnjeuxVisual
                  imageSrc="/images/sector-industry-enjeux.jpg"
                  imageAlt="Défis de l'industrie"
                  problems={config.enjeuxProblems}
                  className="w-full max-w-[480px]"
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
              
              {/* Solutions Visual */}
              <div className="lg:sticky lg:top-36 flex justify-center">
                <SectorSolutionsVisual
                  imageSrc="/images/sector-industry-solutions.jpg"
                  imageAlt="Solutions Maintex pour l'industrie"
                  benefits={config.solutionsBenefits}
                  className="w-full max-w-[480px]"
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
                Dans l&apos;industrie, la maintenance est un avantage compétitif — ou un handicap
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 rounded-xl p-6 border border-red-100">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingDown className="w-6 h-6 text-red-500" />
                    <span className="font-semibold text-red-700">Une usine qui subit ses pannes perd</span>
                  </div>
                  <ul className="space-y-2 text-red-700/80 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full" />
                      Productivité en berne
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full" />
                      Conformité mise à mal
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full" />
                      Sécurité compromise
                    </li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                    <span className="font-semibold text-green-700">Une usine avec une maintenance structurée gagne</span>
                  </div>
                  <ul className="space-y-2 text-green-700/80 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                      Productivité optimisée
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                      Conformité assurée
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                      Sécurité renforcée
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
            Voyez Maintex en action dans votre environnement industriel
          </h2>
          <p className="text-xl text-white/90 mb-4 max-w-3xl mx-auto">
            Agroalimentaire, manufacture, chimie, énergie : découvrez comment Maintex s&apos;adapte à vos équipements.
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

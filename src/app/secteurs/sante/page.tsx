'use client'

import { useState } from 'react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import Link from 'next/link'
import { 
  HeartPulse, 
  Shield, 
  Clock, 
  TrendingDown, 
  Quote, 
  Award,
  AlertTriangle,
  FileCheck,
  Activity,
  Database,
  Bot,
  History,
  Brain,
  ClipboardCheck,
  BarChart3,
  UserCheck,
  Stethoscope,
  Zap,
  Server,
  HeadphonesIcon,
  ChevronRight,
  CheckCircle2,
  Target
} from 'lucide-react'
import { TabNavigation, TabPanel } from '@/components/tab-navigation'
import { TabletMockup, MobileMockup, GMAODashboardMockup, EquipmentDetailMockup } from '@/components/device-mockups'

export default function SantePage() {
  const [activeTab, setActiveTab] = useState('enjeux')

  const contentTabs = [
    { id: 'enjeux', label: 'Enjeux', icon: <AlertTriangle className="w-4 h-4" /> },
    { id: 'solutions', label: 'Solutions', icon: <Target className="w-4 h-4" /> },
    { id: 'resultats', label: 'Résultats', icon: <Award className="w-4 h-4" /> },
  ]

  const benefits = [
    { icon: Shield, title: 'Sécurité patient garantie', desc: 'Maintenance prédictive pour éviter les pannes sur les équipements critiques' },
    { icon: FileCheck, title: 'Conformité réglementaire', desc: 'Traçabilité automatique pour les certifications HAS et les contrôles' },
    { icon: Clock, title: 'Continuité des soins', desc: 'Disponibilité maximale des équipements biomédicaux et techniques' },
  ]

  const enjeux = [
    {
      icon: AlertTriangle,
      title: 'Trois familles d\'équipements, une même exigence : zéro défaillance',
      desc: 'Les établissements de santé gèrent simultanément des équipements de natures très différentes, avec des niveaux de criticité élevés sur chacun d\'eux.',
      points: [
        'Équipements biomédicaux — IRM, scanners, respirateurs',
        'Équipements techniques — climatisation, ventilation, fluides',
        'Équipements hôteliers — cuisine, blanchisserie'
      ]
    },
    {
      icon: Activity,
      title: 'La continuité des soins n\'admet aucun compromis',
      desc: 'Dans un hôpital, une clinique ou un EHPAD, il n\'existe pas de notion de « maintenance acceptable sous 48h ». Chaque heure d\'indisponibilité peut avoir des conséquences directes.',
      points: [
        'Report d\'intervention',
        'Réorganisation des équipes soignantes',
        'Risque direct pour le patient'
      ]
    },
    {
      icon: FileCheck,
      title: 'La traçabilité : une obligation réglementaire',
      desc: 'Les établissements de santé sont soumis à des obligations strictes en matière de traçabilité des interventions — certification HAS, gestion des matériovigilances.',
      points: [
        'Certification HAS obligatoire',
        'Exigences des organismes de contrôle',
        'Risques sur les accréditations'
      ]
    },
    {
      icon: Shield,
      title: 'La sécurité patient commence par la fiabilité des équipements',
      desc: 'Un équipement mal entretenu, une panne récurrente non analysée — dans le secteur de la santé, ces situations engagent la responsabilité de l\'établissement.',
      points: [
        'Responsabilité engagée',
        'Sécurité des personnes prises en charge',
        'Risques juridiques et médiatiques'
      ]
    }
  ]

  const solutions = [
    {
      icon: History,
      title: 'Un historique complet pour chaque équipement',
      desc: 'Maintex centralise l\'intégralité des données de maintenance pour chaque équipement — biomédical, technique ou hôtelier.',
      benefits: [
        'Pannes et interventions historisées',
        'Accès mobile en temps réel',
        'Contexte complet pour chaque intervention'
      ]
    },
    {
      icon: Database,
      title: 'Un diagnostic fiable pour des interventions au premier passage',
      desc: 'En milieu de santé, revenir sur site n\'est pas qu\'une perte de temps — c\'est parfois impossible sans réorganiser des zones stériles.',
      benefits: [
        'First Time Fix systématique',
        'Historique des pannes similaires',
        'Solutions déjà appliquées accessibles'
      ]
    },
    {
      icon: ClipboardCheck,
      title: 'Une traçabilité automatique et complète',
      desc: 'Chaque intervention est enregistrée en temps réel, sans ressaisie ni perte d\'information.',
      benefits: [
        'Conformité réglementaire automatique',
        'Sans surcharge administrative',
        'Prêt pour les inspections HAS'
      ]
    },
    {
      icon: Brain,
      title: 'Une base de connaissances partagée',
      desc: 'Les diagnostics passés, les causes identifiées et les solutions validées sont structurés et accessibles à toute l\'équipe.',
      benefits: [
        'Compétence collective',
        'Savoir-faire documenté',
        'Montée en compétence accélérée'
      ]
    }
  ]

  const impacts = [
    { indicator: 'Continuité des soins', impact: 'Renforcée par une réduction des temps d\'indisponibilité' },
    { indicator: 'Sécurité patient', impact: 'Améliorée par une maintenance plus fiable et préventive' },
    { indicator: 'Conformité réglementaire', impact: 'Garantie par une traçabilité automatique et complète' },
    { indicator: 'Interventions répétées', impact: 'Réduites grâce au diagnostic orienté données' },
    { indicator: 'Reporting direction', impact: 'Fiable, exhaustif, exploitable sans ressaisie' },
    { indicator: 'Montée en compétence', impact: 'Accélérée par la capitalisation du savoir technique' },
  ]

  const testimonials = [
    {
      quote: "La maintenance prédictive de Maintex nous a permis d'anticiper une panne sur notre scanner IRM avant qu'elle ne se produise. L'intervention planifiée a évité une immobilisation de 48h.",
      author: "Dr. Catherine Bernard",
      role: "Directrice Technique",
      company: "Centre Hospitalier",
      stat: "48h",
      statLabel: "d'immobilisation évitées"
    },
    {
      quote: "La traçabilité des contrôles réglementaires sur nos équipements biomédicaux est devenue automatique. Nous sommes toujours prêts pour les inspections HAS.",
      author: "Philippe Martin",
      role: "Responsable Biomédical",
      company: "Clinique Privée",
      stat: "100%",
      statLabel: "conformité HAS"
    },
    {
      quote: "Le suivi des fonctions vitales nous permet de visualiser en temps réel la disponibilité de nos équipements critiques.",
      author: "Nathalie Leroux",
      role: "Directrice des Services Techniques",
      company: "CHU",
      stat: "24/7",
      statLabel: "disponibilité"
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />
      
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-[#1E3A8A] via-[#1E3A8A] to-[#1E3A8A]/90 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#F97316]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#F97316]/10 rounded-full blur-3xl" />
        
        <div className="max-w-6xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#F97316]/20 rounded-2xl flex items-center justify-center border border-white/30">
                  <HeartPulse className="w-8 h-8 text-[#F97316]" />
                </div>
                <div>
                  <span className="text-white/80 font-medium text-sm">Secteur</span>
                  <h1 className="text-2xl font-bold text-white">Santé & Biomédical</h1>
                </div>
              </div>
              
              <p className="text-2xl md:text-3xl font-bold text-white mb-6 max-w-4xl">
                <span className="text-[#F97316]">Zéro tolérance à la panne, traçabilité totale, sécurité patient garantie</span>
              </p>

              <p className="text-lg text-white/80 max-w-xl mb-8">
                Dans un établissement de santé, une panne n&apos;est jamais anodine. Maintex assure la continuité des soins avec une maintenance prédictive et une traçabilité automatique.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="px-6 py-3 bg-[#F97316] text-white rounded-lg font-semibold hover:bg-[#EA580C] transition-all shadow-lg shadow-[#F97316]/25 no-underline">
                  Demander une démo <ChevronRight className="w-4 h-4 inline" />
                </Link>
                <Link href="/calculateur-roi" className="px-6 py-3 bg-white/10 border border-white/30 text-white rounded-lg font-semibold hover:bg-white/20 transition-all no-underline">
                  Calculer mon ROI
                </Link>
              </div>
            </div>

            {/* Benefits Cards */}
            <div className="hidden lg:grid gap-4">
              {benefits.map((benefit, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                  <div className="flex items-center gap-3">
                    <benefit.icon className="w-8 h-8 text-[#F97316]" />
                    <div>
                      <h3 className="font-semibold text-white">{benefit.title}</h3>
                      <p className="text-sm text-white/70">{benefit.desc}</p>
                    </div>
                  </div>
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
                    className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl hover:border-pink-300 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <enjeu.icon className="w-6 h-6 text-pink-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#0C0A09] mb-2">
                          {enjeu.title}
                        </h3>
                        <p className="text-[#44403C] text-sm mb-4 leading-relaxed">
                          {enjeu.desc}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {enjeu.points.map((point, j) => (
                            <span key={j} className="flex items-center gap-1.5 px-2 py-1 bg-pink-50 rounded text-xs text-pink-700">
                              <div className="w-1 h-1 bg-pink-500 rounded-full" />
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
                  <EquipmentDetailMockup />
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
                    className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl hover:border-pink-300 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <solution.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg font-bold text-[#0C0A09] mb-2">
                          {solution.title}
                        </h3>
                        <p className="text-[#44403C] text-sm mb-4 leading-relaxed">
                          {solution.desc}
                        </p>
                        <div className="space-y-2">
                          {solution.benefits.map((benefit, j) => (
                            <div key={j} className="flex items-center gap-2 text-sm text-[#44403C]">
                              <CheckCircle2 className="w-4 h-4 text-pink-500 flex-shrink-0" />
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
                  <GMAODashboardMockup />
                </TabletMockup>
              </div>
            </div>
          </TabPanel>

          {/* Résultats Tab */}
          <TabPanel isActive={activeTab === 'resultats'}>
            {/* Impact Table */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
              <div className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-4">
                <h3 className="font-semibold text-lg">Les résultats concrets pour les établissements de santé</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-6 py-4 text-left font-semibold text-[#0C0A09]">Indicateur</th>
                      <th className="px-6 py-4 text-left font-semibold text-[#0C0A09]">Impact avec Maintex</th>
                    </tr>
                  </thead>
                  <tbody>
                    {impacts.map((item, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-6 py-4 font-medium text-[#0C0A09]">{item.indicator}</td>
                        <td className="px-6 py-4 text-[#44403C]">{item.impact}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Testimonials */}
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full flex items-center justify-center">
                      <Quote className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-pink-600">{testimonial.stat}</div>
                      <div className="text-xs text-[#64748b]">{testimonial.statLabel}</div>
                    </div>
                  </div>
                  <p className="text-[#44403C] mb-6 text-sm leading-relaxed">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div className="border-t border-gray-100 pt-4">
                    <div className="font-semibold text-[#0C0A09]">{testimonial.author}</div>
                    <div className="text-sm text-[#64748b]">{testimonial.role}</div>
                    <div className="text-sm text-pink-600 font-medium">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
        </div>
      </section>

      {/* Why Maintex */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-8 rounded-2xl border border-pink-100">
            <h2 className="text-2xl font-bold text-[#0C0A09] mb-4 text-center">
              Pourquoi Maintex n&apos;est pas une GMAO comme les autres dans le secteur santé
            </h2>
            <p className="text-[#44403C] mb-4 text-center">
              La plupart des GMAO proposent un module santé. Maintex est pensé pour les réalités du terrain en milieu de soin.
            </p>
            <p className="text-[#44403C] mb-6">
              C&apos;est une solution conçue d&apos;abord pour les techniciens biomédicaux et les ingénieurs hospitaliers qui interviennent sous contrainte, dans des environnements sensibles, avec des délais qui ne souffrent d&apos;aucun à-peu-près.
            </p>
            <div className="bg-white rounded-xl p-6 border border-pink-200">
              <h3 className="font-semibold text-[#0C0A09] mb-3 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-pink-500" />
                Un reporting direction qui engage la stratégie de maintenance
              </h3>
              <p className="text-[#44403C] text-sm mb-4">
                Taux de disponibilité par équipement, coût réel par intervention, récurrence des pannes, performance des équipes, suivi des contrôles réglementaires.
              </p>
              <p className="text-pink-600 font-semibold text-sm">
                Un bon outil terrain produit automatiquement un bon reporting direction. C&apos;est la logique Maintex.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#1E3A8A] to-[#1E3A8A]/90 relative overflow-hidden">
        <div className="absolute top-10 right-20 w-64 h-64 bg-[#F97316]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-[#F97316]/10 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="w-16 h-16 bg-[#F97316]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <HeartPulse className="w-8 h-8 text-[#F97316]" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Découvrez Maintex adapté à votre établissement de santé
          </h2>
          <p className="text-white/80 mb-6">
            Hôpital, clinique, EHPAD : voyez comment Maintex s&apos;adapte à vos équipements, vos contraintes réglementaires et vos équipes terrain.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#F97316] text-white rounded-lg font-semibold hover:bg-[#EA580C] transition-all shadow-lg shadow-[#F97316]/25 no-underline">
              Demandez une démonstration <ChevronRight className="w-4 h-4" />
            </Link>
            <Link href="/calculateur-roi" className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/30 text-white rounded-lg font-semibold hover:bg-white/20 transition-all no-underline">
              Calculer mon ROI
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}

'use client'

import { useState } from 'react'
import Image from 'next/image'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import Link from 'next/link'
import { 
  CheckCircle2, TrendingUp, AlertTriangle, Activity, Gauge, PieChart, DollarSign, FolderKanban, BarChart3, ClipboardList, RefreshCw, Heart, Wallet, Package, Smartphone, Link2, Brain, Cpu, Calendar, Settings, Users, FileText, ShieldCheck, ArrowRight, Zap, Shield, Server, ChevronRight, Clock, Target, ArrowUpRight, TrendingDown
} from 'lucide-react'
import { TabNavigation, TabPanel } from '@/components/tab-navigation'
import { MiniLineChartInline } from '@/components/photo-data-visual'

export default function FonctionnalitesPage() {
  const [activeTab, setActiveTab] = useState('core')

  const featureTabs = [
    { id: 'core', label: 'Cœur du produit', icon: <ClipboardList className="w-4 h-4" /> },
    { id: 'planning', label: 'Planification', icon: <Calendar className="w-4 h-4" /> },
    { id: 'assets', label: 'Équipements', icon: <Settings className="w-4 h-4" /> },
    { id: 'ai', label: 'IA & Analytics', icon: <Brain className="w-4 h-4" /> },
    { id: 'mobile', label: 'Mobile', icon: <Smartphone className="w-4 h-4" /> },
    { id: 'integrations', label: 'Intégrations', icon: <Link2 className="w-4 h-4" /> },
  ]

  const coreFeatures = [
    {
      id: 'ot',
      title: 'Ordres de travail intelligents',
      description: 'Créez, assignez et suivez chaque intervention en temps réel depuis le terrain.',
      features: [
        'Création en 30 secondes par QR code ou saisie manuelle',
        'Check-lists configurables par type d\'équipement',
        'Photos, vidéos et documents attachés depuis mobile',
        'Signature électronique et validation numérique',
      ],
      icon: ClipboardList,
      image: '/images/maintenance-work.png',
      stats: [
        { value: '-30%', label: 'Temps de création', type: 'success' },
        { value: '156', label: 'OT/mois', type: 'default' }
      ]
    },
    {
      id: 'preventif',
      title: 'Maintenance préventive',
      description: 'Planifiez vos révisions récurrentes par fréquence calendaire, compteur horaire ou déclencheur métrique.',
      features: [
        'Planification par fréquence, compteur ou condition',
        'Génération automatique des ordres à l\'échéance',
        'Alertes configurables avant date limite',
        'Vue calendrier hebdo/mensuel par équipement',
      ],
      icon: RefreshCw,
      image: '/images/machine-room.png',
      stats: [
        { value: '76%', label: 'Taux préventif', type: 'accent' },
        { value: '+15%', label: 'Productivité', type: 'success' }
      ]
    },
    {
      id: 'demandes',
      title: 'Portail demandeurs',
      description: 'Un portail simple pour que vos collaborateurs soumettent leurs demandes d\'intervention.',
      features: [
        'Portail web accessible à tous',
        'Formulaire de demande simplifié',
        'Qualification automatique par catégorie',
        'Suivi en temps réel pour le demandeur',
      ],
      icon: Cpu,
      image: '/images/team-engineers.png',
      stats: [
        { value: '-45%', label: 'Délai traitement', type: 'success' },
        { value: '98%', label: 'Satisfaction', type: 'default' }
      ]
    }
  ]

  const planningFeatures = [
    {
      id: 'planification',
      title: 'Planification & calendrier intelligent',
      description: 'Optimisez l\'organisation de vos équipes avec un calendrier drag & drop intelligent.',
      features: [
        'Vue calendrier jour/semaine/mois',
        'Drag & drop pour réorganiser',
        'Gestion des disponibilités et compétences',
        'Synchro avec Outlook et Google Calendar',
      ],
      icon: Calendar,
      image: '/images/team-engineers.png',
      stats: [
        { value: '+25%', label: 'Efficacité', type: 'success' }
      ]
    }
  ]

  const assetFeatures = [
    {
      id: 'equipements',
      title: 'Gestion des équipements',
      description: 'Cartographiez votre parc, structurez vos nomenclatures, suivez la vie de chaque actif.',
      features: [
        'Arborescence équipements et nomenclature',
        'Historique de maintenance par équipement',
        'Documents attachés (manuels, schémas)',
        'QR code pour accès rapide terrain',
      ],
      icon: Settings,
      image: '/images/warehouse.png',
      stats: [
        { value: '100%', label: 'Traçabilité', type: 'success' }
      ]
    },
    {
      id: 'vitaux',
      title: 'Fonctions Vitales',
      description: 'Surveillez la disponibilité de vos fonctions critiques et priorisez les interventions.',
      features: [
        'Identification des fonctions critiques',
        'Suivi de disponibilité en temps réel',
        'États : Disponible, Dégradée, Critique',
        'Priorisation par criticité fonctionnelle',
      ],
      icon: Heart,
      image: '/images/machine-room.png',
      stats: [
        { value: '99.2%', label: 'Disponibilité', type: 'success' }
      ],
      highlight: true
    },
    {
      id: 'stocks',
      title: 'Gestion pièces & inventaire',
      description: 'Stock en temps réel, seuils d\'alerte, liens fournisseurs.',
      features: [
        'Gestion multi-entrepôts et multi-sites',
        'Seuils d\'alerte et réapprovisionnement',
        'Historique consommation par machine',
        'Catalogue fournisseurs intégré',
      ],
      icon: Package,
      image: '/images/warehouse.png',
      stats: [
        { value: '-20%', label: 'Stock dormant', type: 'success' }
      ]
    }
  ]

  const aiFeatures = [
    {
      id: 'predictive',
      title: 'Maintenance prédictive (IA/IoT)',
      description: 'Anticipez les pannes avant qu\'elles ne surviennent grâce à l\'intelligence artificielle.',
      features: [
        'Connexion boîtiers IoT M-Predictor',
        'Analyse prédictive par machine learning',
        'Détection d\'anomalies en temps réel',
        'Recommandations d\'intervention automatiques',
      ],
      icon: Brain,
      image: '/images/ai-predictive.png',
      stats: [
        { value: '-42%', label: 'Pannes imprévues', type: 'success' }
      ],
      highlight: true
    },
    {
      id: 'budget',
      title: 'Projets & Budgets',
      description: 'Pilotez vos projets d\'investissement et suivez vos budgets en temps réel.',
      features: [
        'Budgets par projet, division, centre de frais',
        'Suivi temps réel : En cours, Réalisé, Solde',
        'Alertes automatiques à 80% et dépassement',
        'Rapports et exports pour pilotage financier',
      ],
      icon: Wallet,
      image: '/images/team-engineers.png',
      stats: [
        { value: '4 mois', label: 'ROI moyen', type: 'accent' }
      ],
      highlight: true
    },
    {
      id: 'dashboard',
      title: 'Tableaux de bord & analytics',
      description: 'Visualisez en temps réel les performances de votre maintenance.',
      features: [
        'MTTR, MTBF, taux de pannes, taux préventif',
        'Tableaux de bord par site, par équipe',
        'Exports PDF automatiques',
        'Intégration Power BI, Tableau via API',
      ],
      icon: BarChart3,
      image: '/images/dashboard-hero.png',
      stats: [
        { value: '15+', label: 'KPIs suivis', type: 'default' }
      ]
    }
  ]

  const mobileFeatures = [
    {
      id: 'mobile',
      title: 'Application mobile iOS & Android',
      description: 'L\'appli Maintex fonctionne partout, même sans connexion.',
      features: [
        'Mode hors-ligne complet — sync automatique',
        'Scan QR code des équipements en 1 seconde',
        'Prise de photos et vidéos intégrée',
        'Notifications push configurables',
      ],
      icon: Smartphone,
      image: '/images/mobile-maintenance-app.png',
      stats: [
        { value: '24/7', label: 'Disponibilité', type: 'success' },
        { value: '100%', label: 'Hors-ligne', type: 'accent' }
      ]
    }
  ]

  const integrationFeatures = [
    {
      id: 'documents',
      title: 'Gestion documentaire',
      description: 'Centralisez tous vos documents techniques : manuels, procédures, certificats.',
      features: [
        'Stockage centralisé et organisé',
        'Versioning et historique des modifications',
        'Recherche full-text performante',
        'Contrôle d\'accès par rôle',
      ],
      icon: FileText,
      image: '/images/document-management.png',
      stats: [
        { value: '-60%', label: 'Temps recherche', type: 'success' }
      ]
    },
    {
      id: 'conformite',
      title: 'Conformité & traçabilité',
      description: 'Garantissez la conformité réglementaire et tracez toutes vos opérations.',
      features: [
        'Gestion des contrôles réglementaires',
        'Plans de vérification automatisés',
        'Rapports d\'audit prêts à l\'emploi',
        'Alertes échéances réglementaires',
      ],
      icon: ShieldCheck,
      image: '/images/compliance-audit.png',
      stats: [
        { value: '100%', label: 'Conformité', type: 'success' }
      ]
    },
    {
      id: 'integrations',
      title: 'Intégrations ERP & API',
      description: 'Connectez Maintex à votre écosystème existant.',
      features: [
        'Connecteurs natifs SAP, Sage, Divalto, Odoo',
        'API REST complète et documentée',
        'Webhooks temps réel pour événements métier',
        'SSO SAML 2.0 / Azure AD / Okta',
      ],
      icon: Link2,
      image: '/images/api-documentation.png',
      stats: [
        { value: '10+', label: 'Connecteurs', type: 'default' }
      ]
    }
  ]

  const performanceData = [85, 88, 92, 95, 97, 98, 96, 99, 98, 99, 99, 99]

  const renderFeatureCard = (feature: any) => (
    <div 
      key={feature.id} 
      className={`bg-white rounded-2xl border ${feature.highlight ? 'border-[#F97316] shadow-lg shadow-[#F97316]/10' : 'border-gray-200'} p-6 lg:p-8 hover:shadow-xl transition-all duration-300`}
    >
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Left - Content */}
        <div>
          <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${feature.highlight ? 'bg-[#F97316]/10' : 'bg-[#1E3A8A]/10'}`}>
            <feature.icon className={`w-7 h-7 ${feature.highlight ? 'text-[#F97316]' : 'text-[#1E3A8A]'}`} />
          </div>
          {feature.highlight && (
            <div className="inline-flex items-center gap-1 px-3 py-1 bg-[#F97316] text-white text-xs font-bold rounded-full mb-3">
              Nouveau
            </div>
          )}
          <h3 className="text-xl font-bold text-[#0C0A09] mb-3">{feature.title}</h3>
          <p className="text-[#44403C] mb-6 leading-relaxed">{feature.description}</p>
          <ul className="space-y-3 mb-6">
            {feature.features.map((f: string, i: number) => (
              <li key={i} className="flex items-start gap-3 text-sm text-[#44403C]">
                <CheckCircle2 className="w-4 h-4 text-[#059669] flex-shrink-0 mt-0.5" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <div className="flex gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#F97316] text-white text-sm font-semibold rounded-xl hover:bg-[#EA580C] transition-all shadow-lg shadow-[#F97316]/25 no-underline"
            >
              Demander une démo <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
        
        {/* Right - Photo with Stats */}
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={feature.image}
              alt={feature.title}
              width={450}
              height={300}
              className="object-cover w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          </div>
          
          {/* Floating Stats Cards */}
          {feature.stats && feature.stats.map((stat: any, index: number) => (
            <div 
              key={index}
              className={`absolute ${index === 0 ? '-top-3 -right-3' : 'bottom-4 left-4'} bg-white rounded-xl p-3 shadow-lg`}
            >
              <div className={`text-xl font-bold ${stat.type === 'success' ? 'text-[#059669]' : stat.type === 'accent' ? 'text-[#F97316]' : 'text-[#0C0A09]'}`}>
                {stat.value}
              </div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <main className="min-h-screen bg-[#FAFAF9] font-sans">
      <SiteHeader />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center pt-[70px] pb-16 bg-gradient-to-br from-[#1E3A8A]/5 via-white to-[#F97316]/5 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#e2e8f0_1px,transparent_0)] bg-[size:40px_40px] opacity-50" />

        <div className="relative z-10 max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F97316]/10 border border-[#F97316]/20 text-[#1E3A8A] mb-6">
                <Zap className="w-4 h-4 text-[#F97316]" />
                <span className="text-xs font-semibold">15 modules disponibles</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0C0A09] leading-tight tracking-tight mb-6">
                Des fonctionnalités pensées<br />
                <span className="text-[#1E3A8A]">pour le terrain.</span>
              </h1>
              <p className="text-lg text-[#44403C] max-w-xl mb-8">
                Chaque module a été conçu avec et pour des équipes de maintenance. Pas de complexité inutile.
              </p>
              <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#F97316] text-white font-semibold rounded-xl hover:bg-[#EA580C] transition-all shadow-lg shadow-[#F97316]/25 no-underline"
                >
                  Voir une démo <ChevronRight className="w-4 h-4" />
                </Link>
                <Link 
                  href="/tarifs" 
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#1E3A8A]/20 text-[#1E3A8A] font-semibold rounded-xl hover:border-[#1E3A8A] transition-all no-underline"
                >
                  Voir les tarifs
                </Link>
              </div>
            </div>
            
            {/* Hero Photo with Floating Data */}
            <div className="hidden lg:block relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero-technician.png"
                  alt="Technicien avec tablette MAINTEX"
                  width={400}
                  height={500}
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-3 -left-3 flex items-center gap-2 px-4 py-2.5 bg-[#F97316] text-white rounded-full shadow-lg">
                <Zap className="w-4 h-4" />
                <span className="text-sm font-semibold">GMAO Mobile</span>
              </div>
              
              <div className="absolute top-16 -right-4 bg-white rounded-xl p-4 shadow-lg w-36">
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp className="w-4 h-4 text-[#059669]" />
                  <span className="text-xs text-gray-500">Disponibilité</span>
                </div>
                <div className="text-2xl font-bold text-[#0C0A09]">98.5%</div>
              </div>
              
              <div className="absolute bottom-20 -left-4 bg-white rounded-xl p-4 shadow-lg w-36">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="w-4 h-4 text-[#F97316]" />
                  <span className="text-xs text-gray-500">MTTR</span>
                </div>
                <div className="text-2xl font-bold text-[#0C0A09]">2.4h</div>
              </div>
              
              <div className="absolute bottom-4 right-4 bg-[#1E3A8A] text-white rounded-xl p-3 shadow-lg">
                <div className="text-lg font-bold">15</div>
                <div className="text-xs text-white/80">Modules</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bandeau */}
      <section className="py-6 bg-[#1E3A8A]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
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
              <Activity className="w-4 h-4 text-[#F97316]" />
              Mode hors-ligne
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#F97316]" />
              Déploiement 14 jours
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-[68px] z-30">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
          <TabNavigation 
            tabs={featureTabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-12 bg-[#FAFAF9]">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
          <TabPanel isActive={activeTab === 'core'}>
            <div className="space-y-6">
              {coreFeatures.map(renderFeatureCard)}
            </div>
          </TabPanel>

          <TabPanel isActive={activeTab === 'planning'}>
            <div className="space-y-6">
              {planningFeatures.map(renderFeatureCard)}
            </div>
          </TabPanel>

          <TabPanel isActive={activeTab === 'assets'}>
            <div className="space-y-6">
              {assetFeatures.map(renderFeatureCard)}
            </div>
          </TabPanel>

          <TabPanel isActive={activeTab === 'ai'}>
            <div className="space-y-6">
              {aiFeatures.map(renderFeatureCard)}
            </div>
          </TabPanel>

          <TabPanel isActive={activeTab === 'mobile'}>
            <div className="space-y-6">
              {mobileFeatures.map((feature) => (
                <div key={feature.id} className="bg-white rounded-2xl border border-gray-200 p-6 lg:p-8 hover:shadow-xl transition-all duration-300">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="w-14 h-14 rounded-xl bg-[#1E3A8A]/10 flex items-center justify-center mb-4">
                        <feature.icon className="w-7 h-7 text-[#1E3A8A]" />
                      </div>
                      <h3 className="text-xl font-bold text-[#0C0A09] mb-3">{feature.title}</h3>
                      <p className="text-[#44403C] mb-6 leading-relaxed">{feature.description}</p>
                      <ul className="space-y-3 mb-6">
                        {feature.features.map((f: string, i: number) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-[#44403C]">
                            <CheckCircle2 className="w-4 h-4 text-[#059669] flex-shrink-0 mt-0.5" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex gap-3">
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#F97316] text-white text-sm font-semibold rounded-xl hover:bg-[#EA580C] transition-all shadow-lg shadow-[#F97316]/25 no-underline"
                        >
                          Demander une démo <ChevronRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="relative rounded-2xl overflow-hidden shadow-lg mx-auto w-48">
                        <Image
                          src={feature.image}
                          alt={feature.title}
                          width={300}
                          height={500}
                          className="object-cover"
                        />
                      </div>
                      {feature.stats && feature.stats.map((stat: any, index: number) => (
                        <div 
                          key={index}
                          className={`absolute ${index === 0 ? '-top-3 -right-8' : 'bottom-8 -left-8'} bg-white rounded-xl p-3 shadow-lg`}
                        >
                          <div className={`text-xl font-bold ${stat.type === 'success' ? 'text-[#059669]' : stat.type === 'accent' ? 'text-[#F97316]' : 'text-[#0C0A09]'}`}>
                            {stat.value}
                          </div>
                          <div className="text-xs text-gray-500">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>

          <TabPanel isActive={activeTab === 'integrations'}>
            <div className="space-y-6">
              {integrationFeatures.map(renderFeatureCard)}
            </div>
          </TabPanel>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-20 bg-gradient-to-br from-[#1E3A8A] to-[#1E3A8A]/90 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(249,115,22,0.15),transparent_50%)]" />
        <div className="relative z-10 max-w-[1240px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Voir MAINTEX en action
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-10">
            Demandez une démonstration personnalisée et découvrez comment MAINTEX peut transformer votre maintenance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-[#1E3A8A] bg-white rounded-xl hover:bg-gray-100 transition-all shadow-lg no-underline">
              Demander une démo gratuite <ChevronRight className="w-4 h-4" />
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

'use client'

import { useState } from 'react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import Link from 'next/link'
import { 
  CheckCircle2, TrendingUp, AlertTriangle, Activity, Gauge, PieChart, DollarSign, FolderKanban, BarChart3, ClipboardList, RefreshCw, Heart, Wallet, Package, Smartphone, Link2, Brain, Cpu, Calendar, Settings, Users, FileText, ShieldCheck, ArrowRight, Zap, Shield, Server, ChevronRight
} from 'lucide-react'
import { TabNavigation, TabPanel } from '@/components/tab-navigation'
import { TabletMockup, MobileMockup, GMAODashboardMockup, EquipmentDetailMockup, TaskManagementMockup, PricingDashboardMockup, MobileTaskListMockup } from '@/components/device-mockups'

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
      mockup: <TaskManagementMockup />
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
      mockup: <GMAODashboardMockup />
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
      mockup: <GMAODashboardMockup />
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
      mockup: <GMAODashboardMockup />
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
      mockup: <EquipmentDetailMockup />
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
      mockup: <EquipmentDetailMockup />,
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
      mockup: <GMAODashboardMockup />
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
      mockup: <EquipmentDetailMockup />,
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
      mockup: <PricingDashboardMockup />
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
      mockup: <GMAODashboardMockup />
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
      mockup: <MobileTaskListMockup />
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
      mockup: <GMAODashboardMockup />
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
      mockup: <GMAODashboardMockup />
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
      mockup: <GMAODashboardMockup />
    }
  ]

  const renderFeatureCard = (feature: any) => (
    <div 
      key={feature.id} 
      className={`bg-white rounded-2xl border ${feature.highlight ? 'border-[#F97316] shadow-lg shadow-[#F97316]/10' : 'border-gray-200'} p-6 hover:shadow-xl transition-all duration-300`}
    >
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${feature.highlight ? 'bg-[#F97316]/10' : 'bg-[#1E3A8A]/10'}`}>
            <feature.icon className={`w-7 h-7 ${feature.highlight ? 'text-[#F97316]' : 'text-[#1E3A8A]'}`} />
          </div>
          <h3 className="text-xl font-bold text-[#0C0A09] mb-3">{feature.title}</h3>
          <p className="text-[#44403C] mb-6 leading-relaxed">{feature.description}</p>
          <ul className="space-y-3">
            {feature.features.map((f: string, i: number) => (
              <li key={i} className="flex items-start gap-3 text-sm text-[#44403C]">
                <CheckCircle2 className="w-4 h-4 text-[#059669] flex-shrink-0 mt-0.5" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <div className="flex gap-3 mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#F97316] text-white text-sm font-semibold rounded-xl hover:bg-[#EA580C] transition-all shadow-lg shadow-[#F97316]/25 no-underline"
            >
              Demander une démo <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <TabletMockup className="w-full max-w-[320px]">
            {feature.mockup}
          </TabletMockup>
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
            <div className="hidden lg:flex justify-center gap-4">
              <TabletMockup className="w-[280px]">
                <GMAODashboardMockup />
              </TabletMockup>
              <MobileMockup className="w-[140px] mt-12">
                <MobileTaskListMockup />
              </MobileMockup>
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
                <div key={feature.id} className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl transition-all duration-300">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="w-14 h-14 rounded-xl bg-[#1E3A8A]/10 flex items-center justify-center mb-4">
                        <feature.icon className="w-7 h-7 text-[#1E3A8A]" />
                      </div>
                      <h3 className="text-xl font-bold text-[#0C0A09] mb-3">{feature.title}</h3>
                      <p className="text-[#44403C] mb-6 leading-relaxed">{feature.description}</p>
                      <ul className="space-y-3">
                        {feature.features.map((f: string, i: number) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-[#44403C]">
                            <CheckCircle2 className="w-4 h-4 text-[#059669] flex-shrink-0 mt-0.5" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex gap-3 mt-6">
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#F97316] text-white text-sm font-semibold rounded-xl hover:bg-[#EA580C] transition-all shadow-lg shadow-[#F97316]/25 no-underline"
                        >
                          Demander une démo <ChevronRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                    <div className="flex justify-center gap-4">
                      <MobileMockup className="w-[180px]">
                        {feature.mockup}
                      </MobileMockup>
                      <MobileMockup className="w-[180px] mt-8">
                        <GMAODashboardMockup />
                      </MobileMockup>
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

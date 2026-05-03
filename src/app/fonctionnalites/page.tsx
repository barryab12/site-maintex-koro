'use client'

import { useState } from 'react'
import Image from 'next/image'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import Link from 'next/link'
import { 
  CheckCircle2, TrendingUp, Activity, Gauge, BarChart3, ClipboardList, RefreshCw, Heart, Wallet, Package, Smartphone, Link2, Brain, Cpu, Calendar, Settings, Users, FileText, ShieldCheck, ArrowRight, Zap, Shield, Server, ChevronRight, Clock, Target, Warehouse, ShoppingCart, DollarSign, FolderKanban
} from 'lucide-react'
import { TabNavigation, TabPanel } from '@/components/tab-navigation'
import { MiniLineChartInline } from '@/components/photo-data-visual'

export default function FonctionnalitesPage() {
  const [activeTab, setActiveTab] = useState('maintenance')

  const featureTabs = [
    { id: 'maintenance', label: 'Gestion Maintenance', icon: <ClipboardList className="w-4 h-4" /> },
    { id: 'actifs', label: 'Actifs & Opérations', icon: <Settings className="w-4 h-4" /> },
    { id: 'outils', label: 'Outils & Plateforme', icon: <BarChart3 className="w-4 h-4" /> },
  ]

  // GESTION DE LA MAINTENANCE
  const maintenanceFeatures = [
    {
      id: 'ot',
      title: 'Ordres de travail',
      subtitle: 'Créer, assigner et suivre chaque intervention',
      description: 'Gérez l\'ensemble de vos interventions avec un système complet de création, assignation et suivi en temps réel.',
      features: [
        'Création rapide par QR code ou saisie manuelle',
        'Assignation automatique selon compétences et disponibilité',
        'Suivi en temps réel de l\'avancement',
        'Photos, vidéos et documents attachés',
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
      subtitle: 'Planifiez automatiquement vos opérations',
      description: 'Planifiez vos révisions récurrentes par fréquence calendaire, compteur horaire ou déclencheur métrique.',
      features: [
        'Planification par fréquence, compteur ou condition',
        'Génération automatique des ordres à l\'échéance',
        'Alertes configurables avant date limite',
        'Vue calendrier hebdo/mensuel par équipement',
        'Gammes de maintenance pré-définies',
      ],
      icon: RefreshCw,
      image: '/images/machine-room.png',
      stats: [
        { value: '76%', label: 'Taux préventif', type: 'accent' },
        { value: '+15%', label: 'Productivité', type: 'success' }
      ]
    },
    {
      id: 'predictif',
      title: 'Maintenance prédictive',
      subtitle: 'Anticipez les pannes et réduisez les arrêts',
      description: 'Anticipez les pannes avant qu\'elles ne surviennent grâce à l\'intelligence artificielle et à l\'analyse prédictive.',
      features: [
        'Connexion boîtiers IoT M-Predictor',
        'Analyse prédictive par machine learning',
        'Détection d\'anomalies en temps réel',
        'Recommandations d\'intervention automatiques',
        'Alertes préventives sur signaux faibles',
      ],
      icon: Brain,
      image: '/images/ai-predictive.png',
      stats: [
        { value: '-42%', label: 'Pannes imprévues', type: 'success' },
        { value: '99.2%', label: 'Disponibilité', type: 'default' }
      ],
      highlight: true
    },
    {
      id: 'demandes',
      title: 'Demandes d\'intervention',
      subtitle: 'Centralisez les demandes via un portail dédié',
      description: 'Un portail simple pour que vos collaborateurs soumettent leurs demandes d\'intervention.',
      features: [
        'Portail web accessible à tous',
        'Formulaire de demande simplifié',
        'Qualification automatique par catégorie',
        'Suivi en temps réel pour le demandeur',
        'Notifications et alertes intégrées',
      ],
      icon: Cpu,
      image: '/images/team-engineers.png',
      stats: [
        { value: '-45%', label: 'Délai traitement', type: 'success' },
        { value: '98%', label: 'Satisfaction', type: 'default' }
      ]
    },
    {
      id: 'planification',
      title: 'Planification intelligente',
      subtitle: 'Optimisez vos calendriers d\'intervention',
      description: 'Optimisez l\'organisation de vos équipes avec un calendrier intelligent et des suggestions automatiques.',
      features: [
        'Vue calendrier jour/semaine/mois',
        'Drag & drop pour réorganiser',
        'Gestion des disponibilités et compétences',
        'Suggestions d\'optimisation IA',
        'Synchro avec Outlook et Google Calendar',
      ],
      icon: Calendar,
      image: '/images/team-technicians.png',
      stats: [
        { value: '+25%', label: 'Efficacité', type: 'success' },
        { value: '4h', label: 'Gains/sem.', type: 'accent' }
      ]
    }
  ]

  // GESTION DES ACTIFS & OPÉRATIONS
  const actifsFeatures = [
    {
      id: 'equipements',
      title: 'Gestion des équipements',
      subtitle: 'Suivez votre parc et son cycle de vie',
      description: 'Cartographiez votre parc, structurez vos nomenclatures, suivez la vie de chaque actif.',
      features: [
        'Arborescence équipements et nomenclature',
        'Historique de maintenance par équipement',
        'Documents attachés (manuels, schémas)',
        'QR code pour accès rapide terrain',
        'Suivi du cycle de vie complet',
      ],
      icon: Settings,
      image: '/images/warehouse.png',
      stats: [
        { value: '100%', label: 'Traçabilité', type: 'success' },
        { value: '850+', label: 'Équipements', type: 'default' }
      ]
    },
    {
      id: 'vitaux',
      title: 'Fonctions vitales',
      subtitle: 'Surveillez les équipements critiques',
      description: 'Surveillez la disponibilité de vos fonctions critiques et priorisez les interventions.',
      features: [
        'Identification des fonctions critiques',
        'Suivi de disponibilité en temps réel',
        'États : Disponible, Dégradée, Critique',
        'Priorisation par criticité fonctionnelle',
        'Alertes automatiques sur seuils',
      ],
      icon: Heart,
      image: '/images/machine-room.png',
      stats: [
        { value: '99.2%', label: 'Disponibilité', type: 'success' }
      ],
      highlight: true
    },
    {
      id: 'ressources',
      title: 'Gestion des ressources',
      subtitle: 'Affectez techniciens et équipes efficacement',
      description: 'Affectez vos techniciens et équipes de manière optimale selon les compétences et la charge de travail.',
      features: [
        'Matrice de compétences par technicien',
        'Gestion des équipes et planning',
        'Vue de la charge de travail',
        'Affectation optimale automatique',
        'Suivi des certifications et formations',
      ],
      icon: Users,
      image: '/images/team-engineers.png',
      stats: [
        { value: '+20%', label: 'Productivité', type: 'success' },
        { value: '12', label: 'Techniciens', type: 'default' }
      ]
    },
    {
      id: 'stocks',
      title: 'Stocks & inventaire',
      subtitle: 'Suivez vos pièces en temps réel',
      description: 'Stock en temps réel, seuils d\'alerte, liens fournisseurs pour optimiser vos approvisionnements.',
      features: [
        'Gestion multi-entrepôts et multi-sites',
        'Seuils d\'alerte et réapprovisionnement',
        'Historique consommation par machine',
        'Catalogue fournisseurs intégré',
        'Inventaire en temps réel',
      ],
      icon: Package,
      image: '/images/warehouse.png',
      stats: [
        { value: '-20%', label: 'Stock dormant', type: 'success' },
        { value: '2,400', label: 'Références', type: 'default' }
      ]
    },
    {
      id: 'achats',
      title: 'Achats & fournisseurs',
      subtitle: 'Gérez vos approvisionnements et commandes',
      description: 'Gérez vos achats de pièces, suivez vos commandes et évaluez vos fournisseurs.',
      features: [
        'Gestion des demandes d\'achat',
        'Suivi des commandes fournisseurs',
        'Évaluation performance fournisseurs',
        'Historique des prix et délais',
        'Intégration comptabilité',
      ],
      icon: ShoppingCart,
      image: '/images/warehouse.png',
      stats: [
        { value: '-15%', label: 'Coûts achat', type: 'success' }
      ]
    }
  ]

  // OUTILS, ANALYSE & PLATEFORME
  const outilsFeatures = [
    {
      id: 'dashboard',
      title: 'Tableaux de bord & KPI',
      subtitle: 'Visualisez vos performances en temps réel',
      description: 'Visualisez en temps réel les performances de votre maintenance avec des KPIs personnalisables.',
      features: [
        'MTTR, MTBF, taux de pannes, taux préventif',
        'Tableaux de bord par site, par équipe',
        'Exports PDF automatiques',
        'Intégration Power BI, Tableau via API',
        'Alertes sur écarts de performance',
      ],
      icon: BarChart3,
      image: '/images/dashboard-hero.png',
      stats: [
        { value: '15+', label: 'KPIs suivis', type: 'default' },
        { value: '24/7', label: 'Monitoring', type: 'success' }
      ]
    },
    {
      id: 'budget',
      title: 'Projets & budgets',
      subtitle: 'Suivez vos investissements et coûts',
      description: 'Pilotez vos projets d\'investissement et suivez vos budgets en temps réel.',
      features: [
        'Budgets par projet, division, centre de frais',
        'Suivi temps réel : En cours, Réalisé, Solde',
        'Alertes automatiques à 80% et dépassement',
        'Rapports et exports pour pilotage financier',
        'Analyse des écarts budgétaires',
      ],
      icon: Wallet,
      image: '/images/team-engineers.png',
      stats: [
        { value: '4 mois', label: 'ROI moyen', type: 'accent' }
      ],
      highlight: true
    },
    {
      id: 'mobile',
      title: 'Application mobile',
      subtitle: 'Intervenez partout, même hors ligne',
      description: 'L\'appli Maintex fonctionne partout, même sans connexion internet.',
      features: [
        'Mode hors-ligne complet — sync automatique',
        'Scan QR code des équipements en 1 seconde',
        'Prise de photos et vidéos intégrée',
        'Notifications push configurables',
        'Interface intuitive pour le terrain',
      ],
      icon: Smartphone,
      image: '/images/mobile-maintenance-app.png',
      stats: [
        { value: '24/7', label: 'Disponibilité', type: 'success' },
        { value: '100%', label: 'Hors-ligne', type: 'accent' }
      ]
    },
    {
      id: 'integrations',
      title: 'Intégrations ERP & API',
      subtitle: 'Connectez Maintex à votre SI',
      description: 'Connectez Maintex à votre écosystème existant via nos connecteurs natifs et API REST.',
      features: [
        'Connecteurs natifs SAP, Sage, Divalto, Odoo',
        'API REST complète et documentée',
        'Webhooks temps réel pour événements métier',
        'SSO SAML 2.0 / Azure AD / Okta',
        'Intégration SCADA et automates',
      ],
      icon: Link2,
      image: '/images/api-documentation.png',
      stats: [
        { value: '10+', label: 'Connecteurs', type: 'default' }
      ]
    },
    {
      id: 'documents',
      title: 'Documents & conformité',
      subtitle: 'Assurez traçabilité, audits et conformité',
      description: 'Centralisez vos documents techniques et garantissez la conformité réglementaire de vos opérations.',
      features: [
        'Stockage centralisé et organisé',
        'Versioning et historique des modifications',
        'Gestion des contrôles réglementaires',
        'Rapports d\'audit prêts à l\'emploi',
        'Alertes échéances réglementaires',
      ],
      icon: FileText,
      image: '/images/document-management.png',
      stats: [
        { value: '100%', label: 'Conformité', type: 'success' },
        { value: '-60%', label: 'Temps recherche', type: 'success' }
      ]
    }
  ]

  const performanceData = [85, 88, 92, 95, 97, 98, 96, 99, 98, 99, 99, 99]

  const renderFeatureCard = (feature: any) => (
    <div 
      key={feature.id} 
      id={feature.id}
      className={`bg-white rounded-2xl border ${feature.highlight ? 'border-[#F97316] shadow-lg shadow-[#F97316]/10' : 'border-gray-200'} p-6 lg:p-8 hover:shadow-xl transition-all duration-300 scroll-mt-40`}
    >
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Left - Content */}
        <div>
          <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${feature.highlight ? 'bg-[#F97316]/10' : 'bg-[#1E3A8A]/10'}`}>
            <feature.icon className={`w-7 h-7 ${feature.highlight ? 'text-[#F97316]' : 'text-[#1E3A8A]'}`} />
          </div>
          {feature.highlight && (
            <div className="inline-flex items-center gap-1 px-3 py-1 bg-[#F97316] text-white text-xs font-bold rounded-full mb-3">
              <Zap className="w-3 h-3" />
              Populaire
            </div>
          )}
          <h3 className="text-xl font-bold text-[#0C0A09] mb-1">{feature.title}</h3>
          <p className="text-sm text-[#F97316] font-medium mb-3">{feature.subtitle}</p>
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
                Chaque module a été conçu avec et pour des équipes de maintenance. Pas de complexité inutile — que de l'efficacité.
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
          <TabPanel isActive={activeTab === 'maintenance'}>
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1E3A8A]/10 rounded-full mb-4">
                <ClipboardList className="w-4 h-4 text-[#1E3A8A]" />
                <span className="text-sm font-semibold text-[#1E3A8A]">Gestion de la maintenance</span>
              </div>
              <h2 className="text-2xl font-bold text-[#0C0A09] mb-2">Gérez vos interventions et opérations terrain</h2>
              <p className="text-[#64748b]">Pilotez l'ensemble de vos opérations de maintenance depuis une interface unique.</p>
            </div>
            <div className="space-y-6">
              {maintenanceFeatures.map(renderFeatureCard)}
            </div>
          </TabPanel>

          <TabPanel isActive={activeTab === 'actifs'}>
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1E3A8A]/10 rounded-full mb-4">
                <Settings className="w-4 h-4 text-[#1E3A8A]" />
                <span className="text-sm font-semibold text-[#1E3A8A]">Gestion des actifs & opérations</span>
              </div>
              <h2 className="text-2xl font-bold text-[#0C0A09] mb-2">Maîtrisez vos équipements, ressources et approvisionnements</h2>
              <p className="text-[#64748b]">Optimisez la gestion de votre parc, vos ressources et vos stocks.</p>
            </div>
            <div className="space-y-6">
              {actifsFeatures.map(renderFeatureCard)}
            </div>
          </TabPanel>

          <TabPanel isActive={activeTab === 'outils'}>
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1E3A8A]/10 rounded-full mb-4">
                <BarChart3 className="w-4 h-4 text-[#1E3A8A]" />
                <span className="text-sm font-semibold text-[#1E3A8A]">Outils, analyse & plateforme</span>
              </div>
              <h2 className="text-2xl font-bold text-[#0C0A09] mb-2">Pilotez, analysez et connectez votre maintenance</h2>
              <p className="text-[#64748b]">Des outils puissants pour piloter vos performances et connecter votre SI.</p>
            </div>
            <div className="space-y-6">
              {outilsFeatures.map(renderFeatureCard)}
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

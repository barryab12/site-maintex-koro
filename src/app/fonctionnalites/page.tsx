'use client'

import { useState } from 'react'
import Image from 'next/image'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import Link from 'next/link'
import { 
  CheckCircle2, TrendingUp, Activity, Gauge, BarChart3, ClipboardList, RefreshCw, Heart, Wallet, Package, Smartphone, Link2, Brain, Cpu, Calendar, Settings, Users, FileText, ShieldCheck, ArrowRight, Zap, Shield, Server, ChevronRight, Clock, Target, Warehouse, ShoppingCart, DollarSign, FolderKanban, ArrowUpRight, TrendingDown, Wrench
} from 'lucide-react'
import { TabNavigation, TabPanel } from '@/components/tab-navigation'
import { MiniLineChartInline } from '@/components/photo-data-visual'
import { ZeroBadge, KpiCard, maintenanceKPIs } from '@/components/kpi-visual'

// Mini Bar Chart Component
function MiniBarChartInline({ data, color = '#F97316', height = 40, className = '' }: { data: number[], color?: string, height?: number, className?: string }) {
  const max = Math.max(...data)
  const barWidth = 100 / data.length
  
  return (
    <div className={`flex items-end gap-1 ${className}`} style={{ height }}>
      {data.map((value, index) => (
        <div
          key={index}
          className="rounded-t transition-all duration-300"
          style={{
            width: `${barWidth - 2}%`,
            height: `${(value / max) * 100}%`,
            backgroundColor: color,
            opacity: 0.6 + (value / max) * 0.4
          }}
        />
      ))}
    </div>
  )
}

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
      image: '/images/maintenance-work.jpg',
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
      image: '/images/machine-room.jpg',
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
      image: '/images/ai-predictive.jpg',
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
      image: '/images/team-engineers.jpg',
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
      image: '/images/team-technicians.jpg',
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
      image: '/images/warehouse.jpg',
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
      image: '/images/vital-functions.jpg',
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
      image: '/images/resource-management.jpg',
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
      image: '/images/inventory-stock.jpg',
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
      image: '/images/purchasing-suppliers.jpg',
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
      image: '/images/dashboard-hero.jpg',
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
      image: '/images/budget-projects.jpg',
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
      image: '/images/mobile-maintenance-app.jpg',
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
      image: '/images/api-documentation.jpg',
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
      image: '/images/document-management.jpg',
      stats: [
        { value: '100%', label: 'Conformité', type: 'success' },
        { value: '-60%', label: 'Temps recherche', type: 'success' }
      ]
    }
  ]

  const performanceData = [85, 88, 92, 95, 97, 98, 96, 99, 98, 99, 99, 99]

  // KPI data for features with relevant chart labels
  const featureKpiData: Record<string, { 
    chartData: number[], 
    barData: number[], 
    kpis: { name: string, value: string, trend?: string }[],
    chartLabel: string,
    chartType: 'line' | 'bar'
  }> = {
    'ot': {
      chartData: [45, 62, 78, 95, 110, 125, 118, 132, 145, 138, 152, 156],
      barData: [12, 8, 5, 3, 2],
      kpis: [{ name: 'OT/mois', value: '156' }, { name: 'Délai moyen', value: '2.1j', trend: '-30%' }],
      chartLabel: 'OT clôturés/mois',
      chartType: 'line'
    },
    'preventif': {
      chartData: [55, 58, 62, 68, 72, 75, 78, 82, 85, 88, 90, 92],
      barData: [25, 18, 12, 8, 5],
      kpis: [{ name: 'Taux préventif', value: '76%' }, { name: 'Planifiées', value: '+45%' }],
      chartLabel: 'Taux préventif (%)',
      chartType: 'line'
    },
    'predictif': {
      chartData: [98, 98.5, 99, 99.2, 99.5, 99.6, 99.7, 99.8, 99.9, 99.9, 99.9, 99.9],
      barData: [35, 22, 12, 6, 2],
      kpis: [{ name: 'Disponibilité', value: '99.9%' }, { name: 'Pannes évitées', value: '42%' }],
      chartLabel: 'Disponibilité (%)',
      chartType: 'line'
    },
    'demandes': {
      chartData: [72, 78, 85, 88, 92, 94, 95, 96, 97, 98, 98, 99],
      barData: [45, 32, 18, 8, 4],
      kpis: [{ name: 'Satisfaction', value: '98%' }, { name: 'Délai traitement', value: '-45%' }],
      chartLabel: 'Satisfaction (%)',
      chartType: 'line'
    },
    'planification': {
      chartData: [65, 72, 78, 82, 85, 88, 90, 92, 94, 95, 96, 97],
      barData: [20, 15, 10, 5, 3],
      kpis: [{ name: 'Efficacité', value: '+25%' }, { name: 'Conflits', value: '-80%' }],
      chartLabel: 'Taux occupation (%)',
      chartType: 'line'
    },
    'equipements': {
      chartData: [850, 860, 870, 880, 890, 900, 910, 920, 930, 940, 950, 960],
      barData: [100, 80, 60, 40, 20],
      kpis: [{ name: 'Équipements', value: '850+' }, { name: 'Traçabilité', value: '100%' }],
      chartLabel: 'Parc équipements',
      chartType: 'line'
    },
    'vitaux': {
      chartData: [95, 96, 97, 98, 98.5, 99, 99.2, 99.5, 99.6, 99.7, 99.8, 99.9],
      barData: [5, 3, 1, 0, 0],
      kpis: [{ name: 'Disponibilité', value: '99.2%' }, { name: 'Critiques', value: '0 panne' }],
      chartLabel: 'Disponibilité (%)',
      chartType: 'line'
    },
    'ressources': {
      chartData: [75, 78, 82, 85, 88, 90, 91, 92, 93, 94, 95, 96],
      barData: [30, 25, 20, 15, 10],
      kpis: [{ name: 'Productivité', value: '+20%' }, { name: 'Techniciens', value: '12' }],
      chartLabel: 'Productivité (%)',
      chartType: 'line'
    },
    'stocks': {
      chartData: [2400, 2350, 2300, 2250, 2200, 2150, 2100, 2050, 2000, 1950, 1900, 1850],
      barData: [40, 30, 20, 10, 5],
      kpis: [{ name: 'Références', value: '2,400' }, { name: 'Stock dormant', value: '-20%' }],
      chartLabel: 'Stock optimisé',
      chartType: 'line'
    },
    'achats': {
      chartData: [85, 87, 89, 90, 91, 92, 93, 94, 95, 95, 96, 96],
      barData: [25, 20, 15, 10, 5],
      kpis: [{ name: 'Coûts achat', value: '-15%' }, { name: 'Délai', value: '-25%' }],
      chartLabel: 'Performance fournisseurs',
      chartType: 'line'
    },
    'dashboard': {
      chartData: [15, 18, 22, 28, 35, 42, 48, 55, 62, 68, 75, 82],
      barData: [50, 40, 30, 20, 15],
      kpis: [{ name: 'KPIs suivis', value: '15+' }, { name: 'Monitoring', value: '24/7' }],
      chartLabel: 'Tableaux de bord actifs',
      chartType: 'line'
    },
    'budget': {
      chartData: [80, 82, 85, 87, 90, 92, 94, 96, 98, 99, 100, 100],
      barData: [20, 15, 10, 5, 2],
      kpis: [{ name: 'ROI moyen', value: '4 mois' }, { name: 'Écarts', value: '-60%' }],
      chartLabel: 'Budget consommé (%)',
      chartType: 'line'
    },
    'mobile': {
      chartData: [92, 94, 95, 96, 97, 98, 98, 99, 99, 99, 99, 99],
      barData: [85, 90, 94, 97, 99],
      kpis: [{ name: 'Hors-ligne', value: '100%' }, { name: 'Adoption', value: '98%' }],
      chartLabel: 'Taux d\'adoption (%)',
      chartType: 'line'
    },
    'integrations': {
      chartData: [5, 6, 7, 8, 9, 10, 10, 11, 11, 12, 12, 13],
      barData: [95, 92, 88, 85, 82],
      kpis: [{ name: 'Connecteurs', value: '10+' }, { name: 'API uptime', value: '99.9%' }],
      chartLabel: 'Intégrations actives',
      chartType: 'line'
    },
    'documents': {
      chartData: [60, 65, 70, 75, 80, 85, 88, 90, 92, 94, 96, 98],
      barData: [40, 30, 20, 10, 5],
      kpis: [{ name: 'Conformité', value: '100%' }, { name: 'Recherche', value: '-60%' }],
      chartLabel: 'Documents numérisés',
      chartType: 'line'
    }
  }

  const renderFeatureCard = (feature: any) => {
    const kpiData = featureKpiData[feature.id] || { chartData: performanceData, barData: [50, 40, 30, 20, 10], kpis: feature.stats || [], chartLabel: 'Performance', chartType: 'line' }
    
    return (
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
          
          {/* Right - Photo with KPIs and Graphs */}
          <div className="relative py-6 px-4">
            <div className="relative rounded-2xl overflow-hidden shadow-lg w-full h-[260px]">
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Top Right - Line Chart Card */}
            <div className="absolute top-2 right-0 bg-white rounded-xl p-3 shadow-xl w-44 z-10 border border-gray-100">
              <div className="text-xs text-gray-500 mb-1 font-medium">{kpiData.chartLabel}</div>
              <MiniLineChartInline data={kpiData.chartData} color={feature.highlight ? '#F97316' : '#1E3A8A'} height={30} />
            </div>
            
            {/* Bottom Left - KPI Card with Bar Chart */}
            <div className="absolute bottom-0 left-6 bg-white rounded-xl p-3 shadow-xl w-48 z-10 border border-gray-100">
              {kpiData.kpis[0] && (
                <div className="flex items-center gap-3 mb-2">
                  <div>
                    <div className="text-lg font-bold text-[#0C0A09]">{kpiData.kpis[0].value}</div>
                    <div className="text-xs text-gray-500">{kpiData.kpis[0].name}</div>
                  </div>
                  {kpiData.kpis[0].trend && (
                    <div className="text-xs font-semibold text-[#059669] bg-[#059669]/10 px-2 py-1 rounded-full">
                      {kpiData.kpis[0].trend}
                    </div>
                  )}
                </div>
              )}
              <MiniBarChartInline data={kpiData.barData} color={feature.highlight ? '#F97316' : '#059669'} height={25} />
            </div>
            
            {/* Top Left - Badge */}
            <div className={`absolute top-6 left-6 px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg z-10 ${feature.highlight ? 'bg-[#F97316] text-white' : 'bg-[#1E3A8A] text-white'}`}>
              {feature.stats && feature.stats[0]?.value}
            </div>
            
            {/* Right Middle - Additional KPI */}
            {kpiData.kpis[1] && (
              <div className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-lg p-3 shadow-xl z-10 border border-gray-100">
                <div className={`text-sm font-bold ${kpiData.kpis[1].trend?.includes('-') ? 'text-[#059669]' : 'text-[#0C0A09]'}`}>
                  {kpiData.kpis[1].value}
                </div>
                <div className="text-[10px] text-gray-500">{kpiData.kpis[1].name}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-[#FAFAF9] font-sans">
      <SiteHeader />

      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center pt-[70px] pb-16 bg-gradient-to-br from-[#1E3A8A]/5 via-white to-[#F97316]/5 overflow-hidden">
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
            
            {/* Hero Photo with Floating KPIs and Graphs */}
            <div className="hidden lg:block relative py-6">
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-visible shadow-2xl w-full h-[480px]">
                <Image
                  src="/images/hero-fonctionnalites.jpg"
                  alt="Technicien maintenance avec tablette devant machine industrielle"
                  fill
                  className="object-cover object-center rounded-3xl"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-3xl" />
              </div>
              
              {/* Top Left - OEE Badge - overlapping */}
              <div className="absolute -top-3 left-6 bg-white rounded-xl p-3 shadow-xl w-32 z-10 border border-gray-100">
                <div className="flex items-center gap-2 mb-1">
                  <Target className="w-4 h-4 text-[#7C3AED]" />
                  <span className="text-xs text-gray-500">OEE</span>
                </div>
                <div className="text-2xl font-bold text-[#0C0A09]">92%</div>
                <span className="text-xs text-[#059669] font-semibold">World-class</span>
              </div>
              
              {/* Top Right - Disponibilité with Chart - overlapping */}
              <div className="absolute -top-3 right-6 bg-white rounded-xl p-4 shadow-xl w-44 z-10 border border-gray-100">
                <div className="flex items-center gap-2 mb-1">
                  <Gauge className="w-4 h-4 text-[#059669]" />
                  <span className="text-xs text-gray-500">Disponibilité</span>
                </div>
                <div className="text-2xl font-bold text-[#0C0A09]">98.5%</div>
                <div className="flex items-center gap-1 mt-1">
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#059669]" />
                  <span className="text-xs font-semibold text-[#059669]">+2.3%</span>
                </div>
                <MiniLineChartInline data={[92, 94, 91, 96, 98, 97, 99, 98, 99, 98, 99, 98]} color="#059669" height={25} />
              </div>
              
              {/* Middle Left - MTTR Card - overlapping */}
              <div className="absolute left-0 top-[32%] -translate-x-3 bg-white rounded-xl p-4 shadow-xl w-38 z-10 border border-gray-100">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="w-4 h-4 text-[#F97316]" />
                  <span className="text-xs text-gray-500">MTTR</span>
                </div>
                <div className="text-2xl font-bold text-[#0C0A09]">2.4h</div>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingDown className="w-3.5 h-3.5 text-[#059669]" />
                  <span className="text-xs font-semibold text-[#059669]">-18%</span>
                </div>
              </div>
              
              {/* Middle Right - Bar Chart - overlapping */}
              <div className="absolute right-0 top-[38%] translate-x-3 bg-white rounded-xl p-3 shadow-xl w-38 z-10 border border-gray-100">
                <div className="text-xs text-gray-500 mb-2 font-medium">Interventions/mois</div>
                <div className="text-lg font-bold text-[#0C0A09] mb-2">156</div>
                <MiniBarChartInline data={[45, 62, 78, 95, 110, 125, 118, 132, 145, 138, 152, 156]} color="#1E3A8A" height={35} />
              </div>
              
              {/* Bottom Left - MTBF - overlapping */}
              <div className="absolute bottom-10 -left-2 bg-[#1E3A8A] text-white rounded-xl p-4 shadow-xl z-10">
                <div className="flex items-center gap-2 mb-1">
                  <Activity className="w-4 h-4 text-[#F97316]" />
                  <span className="text-xs text-white/80">MTBF</span>
                </div>
                <div className="text-2xl font-bold">720h</div>
                <div className="text-xs text-[#F97316]">+15%</div>
              </div>
              
              {/* Bottom Right - FTFR - overlapping */}
              <div className="absolute -bottom-2 right-6 bg-white rounded-xl p-3 shadow-xl z-10 border border-gray-100">
                <div className="flex items-center gap-2 mb-1">
                  <Wrench className="w-4 h-4 text-[#F97316]" />
                  <span className="text-xs text-gray-500">First Time Fix</span>
                </div>
                <div className="text-lg font-bold text-[#0C0A09]">89%</div>
              </div>
              
              {/* Bottom Center - Zero Badges - overlapping */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                <ZeroBadge text="Zéro panne" icon={Zap} color="#059669" size="sm" />
                <ZeroBadge text="Zéro arrêt" icon={Shield} color="#DC2626" size="sm" />
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

'use client'

import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import Link from 'next/link'
import { CheckCircle2, TrendingUp, AlertTriangle, Activity, Gauge, PieChart, DollarSign, FolderKanban, BarChart3, ClipboardList, RefreshCw, Heart, Wallet, Package, Smartphone, Link2, Brain, Cpu, Calendar, Settings, Users, FileText, ShieldCheck } from 'lucide-react'

export default function FonctionnalitesPage() {
  const features = [
    {
      id: 'ot',
      number: '01',
      title: 'Ordres de travail intelligents',
      shortTitle: 'Ordres de travail',
      description: 'Créez, assignez et suivez chaque intervention en temps réel depuis le terrain.',
      longDescription: 'Les ordres de travail sont au cœur de MAINTEX. Créez-les en 30 secondes depuis n\'importe quel appareil, assignez-les aux bons techniciens, et suivez leur progression en temps réel.',
      features: [
        'Création en 30 secondes par QR code ou saisie manuelle',
        'Check-lists configurables par type d\'équipement',
        'Photos, vidéos et documents attachés depuis mobile',
        'Signature électronique et validation numérique',
        'Historique complet par machine et par technicien',
        'Workflow de validation configurable'
      ],
      image: '/images/gmao-dashboard.png',
      icon: ClipboardList,
      iconColor: 'from-blue-500 to-cyan-500',
      dark: false
    },
    {
      id: 'preventif',
      number: '02',
      title: 'Maintenance préventive & calendrier',
      shortTitle: 'Préventif',
      description: 'Planifiez vos révisions récurrentes par fréquence calendaire, compteur horaire ou déclencheur métrique.',
      longDescription: 'Passez du réactif au proactif. MAINTEX génère automatiquement vos ordres de travail préventifs selon vos règles de planification.',
      features: [
        'Planification par fréquence, compteur ou condition',
        'Génération automatique des ordres à l\'échéance',
        'Alertes configurables avant date limite',
        'Vue calendrier hebdo/mensuel par équipement',
        'Intégration avec le stock pour les pièces nécessaires',
        'Escalade automatique en cas de retard'
      ],
      image: '/images/industrial-maintenance.png',
      icon: RefreshCw,
      iconColor: 'from-green-500 to-emerald-500',
      dark: true
    },
    {
      id: 'predictive',
      number: '03',
      title: 'Maintenance prédictive (IA/IoT)',
      shortTitle: 'Prédictive IA',
      description: 'Anticipez les pannes avant qu\'elles ne surviennent grâce à l\'intelligence artificielle et aux données IoT.',
      longDescription: 'Connectez vos équipements et laissez l\'IA détecter les anomalies avant qu\'elles ne causent des pannes. Réduisez vos temps d\'arrêt imprévus de façon drastique.',
      features: [
        'Connexion boîtiers IoT M-Predictor',
        'Analyse prédictive par machine learning',
        'Détection d\'anomalies en temps réel',
        'Alertes intelligentes avec estimation de risque',
        'Recommandations d\'intervention automatiques',
        'Historique des dérives et apprentissage continu'
      ],
      image: '/images/predictive-maintenance.png',
      icon: Brain,
      iconColor: 'from-purple-500 to-pink-500',
      dark: false,
      highlight: true
    },
    {
      id: 'demandes',
      number: '04',
      title: 'Portail demandeurs',
      shortTitle: 'Portail demandeurs',
      description: 'Un portail simple pour que vos collaborateurs soumettent leurs demandes d\'intervention.',
      longDescription: 'Donnez à tous vos collaborateurs un accès simple pour signaler les problèmes. Les demandes sont automatiquement qualifiées et transmises aux bonnes équipes.',
      features: [
        'Portail web accessible à tous',
        'Formulaire de demande simplifié',
        'Qualification automatique par catégorie',
        'Workflow de validation configurable',
        'Suivi en temps réel pour le demandeur',
        'Notifications par email et push'
      ],
      image: '/images/request-portal.png',
      icon: Cpu,
      iconColor: 'from-amber-500 to-orange-500',
      dark: true
    },
    {
      id: 'planification',
      number: '05',
      title: 'Planification & calendrier intelligent',
      shortTitle: 'Planification',
      description: 'Optimisez l\'organisation de vos équipes avec un calendrier drag & drop intelligent.',
      longDescription: 'Visualisez et organisez toutes vos interventions sur un calendrier intuitif. Optimisez les trajets et équilibrez les charges de travail.',
      features: [
        'Vue calendrier jour/semaine/mois',
        'Drag & drop pour réorganiser',
        'Gestion des disponibilités et compétences',
        'Optimisation des trajets terrain',
        'Alertes de surcharge et conflits',
        'Synchro avec Outlook et Google Calendar'
      ],
      image: '/images/planning-calendar.png',
      icon: Calendar,
      iconColor: 'from-teal-500 to-cyan-500',
      dark: false
    },
    {
      id: 'equipements',
      number: '06',
      title: 'Gestion des équipements',
      shortTitle: 'Équipements',
      description: 'Cartographiez votre parc, structurez vos nomenclatures, suivez la vie de chaque actif.',
      longDescription: 'Centralisez toutes les informations de vos équipements : caractéristiques techniques, historique de maintenance, documents attachés, et pièces de rechange associées.',
      features: [
        'Arborescence équipements et nomenclature',
        'Fiche technique complète et personnalisable',
        'Historique de maintenance par équipement',
        'Gestion des compteurs et relevés',
        'Documents attachés (manuels, schémas)',
        'QR code pour accès rapide terrain'
      ],
      image: '/images/equipment-management.png',
      icon: Settings,
      iconColor: 'from-slate-500 to-gray-600',
      dark: true
    },
    {
      id: 'vitaux',
      number: '07',
      title: 'Suivi des Fonctions Vitales',
      shortTitle: 'Fonctions vitales',
      description: 'Surveillez la disponibilité de vos fonctions critiques et priorisez les interventions selon leur impact opérationnel.',
      longDescription: 'Identifiez et suivez les fonctions essentielles de votre système (compression d\'air, pompage, refroidissement...) et visualisez leur disponibilité en temps réel.',
      features: [
        'Identification des fonctions critiques du système',
        'Suivi de disponibilité en temps réel',
        'États : Disponible, Dégradée, Critique, Indisponible',
        'Indicateurs KPI : disponibilité, taux de dégradation, MTTR',
        'Alertes automatiques sur seuils critiques',
        'Priorisation des interventions par criticité fonctionnelle'
      ],
      image: '/images/energy-utilities.png',
      icon: Heart,
      iconColor: 'from-rose-500 to-pink-500',
      dark: false,
      highlight: true
    },
    {
      id: 'stocks',
      number: '08',
      title: 'Gestion pièces & inventaire',
      shortTitle: 'Stocks & Pièces',
      description: 'Stock en temps réel, seuils d\'alerte, liens fournisseurs, consommation par équipement et par OT.',
      longDescription: 'Ne manquez plus jamais une pièce critique. MAINTEX suit vos stocks en temps réel et alerte automatiquement quand les seuils sont atteints.',
      features: [
        'Gestion multi-entrepôts et multi-sites',
        'Seuils d\'alerte et réapprovisionnement automatique',
        'Lien direct avec les ordres de travail',
        'Historique consommation par machine',
        'Export compatible ERP (SAP, Sage, Divalto)',
        'Catalogue fournisseurs intégré'
      ],
      image: '/images/team-technicians.png',
      icon: Package,
      iconColor: 'from-violet-500 to-purple-500',
      dark: true
    },
    {
      id: 'fournisseurs',
      number: '09',
      title: 'Gestion des fournisseurs',
      shortTitle: 'Fournisseurs',
      description: 'Centralisez vos contrats, suivez les performances et gérez vos achats de maintenance.',
      longDescription: 'Gérez votre écosystème fournisseurs : contrats de maintenance, performances, délais de livraison, et historique des interventions externes.',
      features: [
        'Fichier fournisseurs complet',
        'Gestion des contrats de maintenance',
        'Suivi des performances et SLA',
        'Historique des commandes et livraisons',
        'Évaluation et notation fournisseurs',
        'Alertes renouvellement contrats'
      ],
      image: '/images/supplier-management.png',
      icon: Users,
      iconColor: 'from-indigo-500 to-blue-500',
      dark: false
    },
    {
      id: 'budget',
      number: '10',
      title: 'Gestion de Projets & Budgets',
      shortTitle: 'Projets & Budgets',
      description: 'Pilotez vos projets d\'investissement et suivez vos budgets en temps réel avec alertes automatiques.',
      longDescription: 'Gérez vos enveloppes budgétaires par type de coût, suivez les dépenses engagées et réalisées, et contrôlez les dépassements par différents axes d\'analyse.',
      features: [
        'Budgets par projet, division, centre de frais, équipement',
        'Suivi temps réel : En cours, Réalisé, Solde',
        'Alertes automatiques à 80% et dépassement',
        'Budget global bloquant avec contrôle configurable',
        'Suivi mensuel par catégorie de coûts',
        'Rapports et exports pour pilotage financier'
      ],
      image: '/images/gmao-dashboard.png',
      icon: Wallet,
      iconColor: 'from-amber-500 to-orange-500',
      dark: true,
      highlight: true
    },
    {
      id: 'documents',
      number: '11',
      title: 'Gestion documentaire',
      shortTitle: 'Documents',
      description: 'Centralisez tous vos documents techniques : manuels, procédures, certificats, plans.',
      longDescription: 'Tous vos documents accessibles en un clic, liés aux équipements, aux interventions ou aux procédures. Plus jamais de document perdu ou obsolète.',
      features: [
        'Stockage centralisé et organisé',
        'Versioning et historique des modifications',
        'Association aux équipements et interventions',
        'Recherche full-text performante',
        'Contrôle d\'accès par rôle',
        'Notification des documents expirés'
      ],
      image: '/images/document-management.png',
      icon: FileText,
      iconColor: 'from-orange-500 to-red-500',
      dark: false
    },
    {
      id: 'conformite',
      number: '12',
      title: 'Conformité & traçabilité',
      shortTitle: 'Conformité',
      description: 'Garantissez la conformité réglementaire et tracez toutes vos opérations pour les audits.',
      longDescription: 'MAINTEX vous aide à respecter vos obligations réglementaires : contrôles périodiques, certifications, audits. Toutes les preuves sont archivées et accessibles.',
      features: [
        'Gestion des contrôles réglementaires',
        'Plans de vérification automatisés',
        'Traçabilité complète des interventions',
        'Rapports d\'audit prêts à l\'emploi',
        'Gestion des certifications et habilitations',
        'Alertes échéances réglementaires'
      ],
      image: '/images/compliance-audit.png',
      icon: ShieldCheck,
      iconColor: 'from-green-500 to-lime-500',
      dark: true
    },
    {
      id: 'mobile',
      number: '13',
      title: 'Application mobile iOS & Android',
      shortTitle: 'Mobile',
      description: 'L\'appli Maintex fonctionne partout, même sans connexion. Conçue pour le technicien en déplacement.',
      longDescription: 'Vos techniciens ont accès à toutes les informations nécessaires, où qu\'ils soient. L\'application mobile fonctionne même hors ligne.',
      features: [
        'Mode hors-ligne complet — sync automatique',
        'Scan QR code des équipements en 1 seconde',
        'Prise de photos et vidéos intégrée',
        'Signature numérique et accusé de réception',
        'Géolocalisation des interventions',
        'Notifications push configurables'
      ],
      image: '/images/mobile-maintenance.png',
      icon: Smartphone,
      iconColor: 'from-teal-500 to-cyan-500',
      dark: false
    },
    {
      id: 'dashboard',
      number: '14',
      title: 'Tableaux de bord & analytics',
      shortTitle: 'Dashboards',
      description: 'Visualisez en temps réel les performances de votre maintenance. Décisions basées sur les données.',
      longDescription: 'Prenez des décisions éclairées grâce à des indicateurs clés calculés automatiquement et présentés dans des tableaux de bord intuitifs.',
      features: [
        'MTTR, MTBF, taux de pannes, taux préventif',
        'Tableaux de bord par site, par équipement, par équipe',
        'Exports PDF automatiques aux responsables',
        'Alertes performance (dérive MTTR)',
        'Intégration Power BI, Tableau via API',
        'Rapports personnalisables'
      ],
      image: '/images/gmao-dashboard.png',
      icon: BarChart3,
      iconColor: 'from-indigo-500 to-blue-500',
      dark: true
    },
    {
      id: 'integrations',
      number: '15',
      title: 'Intégrations ERP & API',
      shortTitle: 'Intégrations',
      description: 'Connectez Maintex à votre écosystème existant. API REST documentée et connecteurs natifs.',
      longDescription: 'MAINTEX s\'intègre parfaitement à votre système d\'information existant, évitant les saisies doubles et assurant la cohérence des données.',
      features: [
        'Connecteurs natifs SAP, Sage, Divalto, Odoo',
        'API REST complète et documentée',
        'Webhooks temps réel pour événements métier',
        'Import/export CSV planifiés',
        'SSO SAML 2.0 / Azure AD / Okta',
        'Support technique dédié pour les intégrations'
      ],
      image: '/images/gmao-dashboard.png',
      icon: Link2,
      iconColor: 'from-slate-500 to-gray-600',
      dark: false
    }
  ]

  return (
    <main className="min-h-screen bg-white font-sans">
      <SiteHeader />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center pt-[70px] pb-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#e2e8f0_1px,transparent_0)] bg-[size:40px_40px] opacity-50" />

        <div className="relative z-10 max-w-[1240px] mx-auto px-6 lg:px-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A0A8A]/10 border border-[#0A0A8A]/20 text-[#0A0A8A] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0A0A8A]" />
            <span className="text-xs font-medium">15 modules disponibles</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.06] tracking-tight mb-6 max-w-3xl mx-auto">
            Des fonctionnalités pensées<br />
            <span className="text-[#0A0A8A]">
              pour le terrain.
            </span>
          </h1>
          <p className="text-lg text-gray-500 font-normal max-w-xl mx-auto">
            Chaque module a été conçu avec et pour des équipes de maintenance. Pas de complexité inutile.
          </p>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 bg-[#F4F6FD] border-b border-[rgba(26,29,181,0.1)]">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap justify-center gap-3">
            {features.map((f) => (
              <Link
                key={f.id}
                href={`#${f.id}`}
                className={`flex items-center gap-2 px-4 py-2 border rounded-lg text-sm transition-all no-underline ${
                  f.highlight
                    ? 'bg-[#0A0A8A] text-white border-[#0A0A8A] hover:bg-[#0A0A8A]/90'
                    : 'bg-white border-gray-200 text-gray-600 hover:border-[#0A0A8A] hover:text-[#0A0A8A]'
                }`}
              >
                <div className={`w-6 h-6 rounded flex items-center justify-center ${f.highlight ? 'bg-white/20' : 'bg-gray-100'}`}>
                  <f.icon className={`w-3.5 h-3.5 ${f.highlight ? 'text-white' : 'text-[#0A0A8A]'}`} />
                </div>
                {f.shortTitle || f.title.split(' ')[0]}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Highlight Section - Fonctions Vitales */}
      <section id="vitaux" className="py-24 bg-gray-50 relative overflow-hidden">
        
        <div className="relative z-10 max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A0A8A]/10 border border-[#0A0A8A]/20 text-[#0A0A8A] mb-6 text-sm">
                <Activity className="w-4 h-4" />
                Nouveau module
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-6">
                Suivi des Fonctions Vitales
              </h2>
              <p className="text-lg text-gray-600 font-normal mb-8 leading-relaxed">
                Surveillez la disponibilité de vos fonctions critiques et priorisez les interventions selon leur impact opérationnel. Une approche centrée sur les fonctions, pas seulement sur les équipements.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="text-gray-800 font-medium">Disponible</span>
                  </div>
                  <p className="text-sm text-gray-500">Fonction assurée nominalement</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <span className="text-gray-800 font-medium">Dégradée</span>
                  </div>
                  <p className="text-sm text-gray-500">Redondance réduite</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 rounded-full bg-orange-500" />
                    <span className="text-gray-800 font-medium">Critique</span>
                  </div>
                  <p className="text-sm text-gray-500">Risque imminent d'indisponibilité</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <span className="text-gray-800 font-medium">Indisponible</span>
                  </div>
                  <p className="text-sm text-gray-500">Fonction non assurée</p>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-4">Exemples de fonctions vitales :</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {['Compression d\'air', 'Pompage d\'eau', 'Refroidissement', 'Injection', 'Alimentation énergétique', 'Sécurité incendie'].map((func) => (
                  <span key={func} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-600">
                    {func}
                  </span>
                ))}
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A0A8A] text-white rounded-lg font-medium hover:bg-[#0A0A8A]/90 transition-all no-underline"
              >
                Découvrir ce module →
              </Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
              <h4 className="text-gray-800 font-semibold mb-4 flex items-center gap-2">
                <PieChart className="w-5 h-5 text-[#0A0A8A]" />
                Indicateurs de Performance (KPI)
              </h4>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Disponibilité de la fonction</span>
                    <span className="text-green-600 font-bold">98%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{width: '98%'}}></div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Taux de dégradation</span>
                    <span className="text-yellow-600 font-bold">5</span>
                  </div>
                  <p className="text-xs text-gray-400">Situations de dégradation ce mois</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Temps d'indisponibilité</span>
                    <span className="text-[#0A0A8A] font-bold">2h 30min</span>
                  </div>
                  <p className="text-xs text-gray-400">Durée totale ce mois</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Respect des objectifs</span>
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <p className="text-xs text-gray-400">Objectif 95% - Réel 98%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlight Section - Budget */}
      <section id="budget" className="py-24 bg-[#F4F6FD] relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-2xl shadow-xl border border-[rgba(26,29,181,0.1)] p-6">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="font-semibold text-[#0D1160]">Tableau de bord Budget</h4>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    Solde positif
                  </span>
                </div>
                
                {/* KPI Cards */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-blue-50 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <DollarSign className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-blue-600">Budget Total</span>
                    </div>
                    <p className="text-2xl font-bold text-[#0D1160]">4 200 000 €</p>
                  </div>
                  <div className="bg-orange-50 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-4 h-4 text-orange-600" />
                      <span className="text-sm text-orange-600">Engagé</span>
                    </div>
                    <p className="text-2xl font-bold text-[#0D1160]">2 850 000 €</p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-green-600">Réalisé</span>
                    </div>
                    <p className="text-2xl font-bold text-[#0D1160]">1 950 000 €</p>
                  </div>
                  <div className="bg-emerald-50 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Gauge className="w-4 h-4 text-emerald-600" />
                      <span className="text-sm text-emerald-600">Solde</span>
                    </div>
                    <p className="text-2xl font-bold text-green-600">+1 350 000 €</p>
                  </div>
                </div>

                {/* Alerts */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                    <div>
                      <p className="text-sm font-medium text-red-700">Budget dépassé</p>
                      <p className="text-xs text-red-600">Projet P2025-0042</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-orange-50 border border-orange-200 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-orange-500" />
                    <div>
                      <p className="text-sm font-medium text-orange-700">Seuil 80% atteint</p>
                      <p className="text-xs text-orange-600">2 projets à surveiller</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2B30D4]/10 border border-[#2B30D4]/20 text-[#2B30D4] mb-6 text-sm">
                <FolderKanban className="w-4 h-4" />
                Module complet
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D1160] tracking-tight mb-6">
                Gestion de Projets & Budgets
              </h2>
              <p className="text-lg text-[#7A85A8] font-light mb-8 leading-relaxed">
                Pilotez vos projets d\'investissement et suivez vos budgets en temps réel. Contrôlez les dépassements par différents axes : centre de frais, division, équipement, imputation.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  'Budgets par projet, division, centre de frais, équipement',
                  'Budgets couple (Imputation/CF, Imputation/CA...)',
                  'Suivi temps réel : En cours, Réalisé, Solde',
                  'Alertes automatiques à 80% et dépassement',
                  'Budget global bloquant avec contrôle configurable',
                  'Suivi mensuel par catégorie de coûts'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#3B4470]">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#2B30D4] text-white rounded-lg font-medium hover:bg-[#1A1DB5] transition-all no-underline"
              >
                Demander une démo →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Other Feature Sections */}
      {features.filter(f => !f.highlight).map((feature, index) => (
        <section
          key={feature.id}
          id={feature.id}
          className={`py-24 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="text-[11px] uppercase tracking-wider font-semibold mb-4 text-[#0A0A8A]">
                  {feature.number} — Cœur du produit
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6 text-gray-900">
                  {feature.title}
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {feature.longDescription}
                </p>

                <ul className="space-y-4 mb-8">
                  {feature.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#0A0A8A]" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all no-underline bg-[#0A0A8A] text-white hover:bg-[#0A0A8A]/90"
                >
                  Demander une démo →
                </Link>
              </div>

              <div className={`rounded-2xl overflow-hidden border border-gray-200 shadow-lg ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Band */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="relative z-10 max-w-[1240px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-6">
            Voir MAINTEX en action
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto mb-10">
            Demandez une démonstration personnalisée et découvrez comment MAINTEX peut transformer votre maintenance.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-white bg-[#0A0A8A] rounded-lg hover:bg-[#0A0A8A]/90 transition-all no-underline">
            Demander une démo gratuite →
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}

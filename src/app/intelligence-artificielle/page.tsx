'use client'

import { useState } from 'react'
import Image from 'next/image'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PartnerCarousel } from '@/components/partner-carousel'
import Link from 'next/link'
import { 
  Brain, Zap, MessageSquare, Search, FileText, Wrench, UserCheck, 
  ClipboardList, FileSearch, Activity, Gauge, TrendingUp, 
  BarChart3, AlertTriangle, Package, Users, Camera, Smartphone,
  Settings, Shield, CheckCircle2, ArrowRight, ChevronRight,
  Target, DollarSign, Star
} from 'lucide-react'
import { MiniLineChart, MiniBarChart, DataCard, VignetteBadge } from '@/components/multi-image-layout'

export default function IntelligenceArtificiellePage() {
  const [activeCategory, setActiveCategory] = useState('all')

  const stats = [
    { value: '65%', label: `des équipes maintenance prévoient d'adopter l'IA d'ici fin 2026`, icon: TrendingUp },
    { value: '3-5×', label: `plus cher : le coût d'une panne corrective vs préventive`, icon: DollarSign },
    { value: '12 Mds $', label: 'marché IA maintenance en 2026 (+33%/an)', icon: BarChart3 },
    { value: '18', label: 'fonctionnalités IA disponibles dans Maintex', icon: Brain },
  ]

  const pillars = [
    { icon: Shield, title: 'Souveraineté', description: 'Données 100% privées, hébergement on-premise possible, conformité RGPD', color: '#1E3A8A' },
    { icon: Brain, title: 'Multi-moteur IA', description: 'LLM contextuel + algorithmes statistiques purs (rapides, gratuits, reproductibles)', color: '#F97316' },
    { icon: UserCheck, title: 'Human-in-the-Loop', description: `L'IA propose, l'humain décide (workflow de validation systématique)`, color: '#059669' },
    { icon: Zap, title: 'Intégration native', description: `Pas un module séparé : l'IA est dans chaque écran de la GMAO`, color: '#7C3AED' },
  ]

  const categories = [
    { id: 'all', label: 'Toutes', icon: Sparkles },
    { id: 'productivite', label: 'Productivité', icon: Zap },
    { id: 'diagnostic', label: 'Diagnostic', icon: Wrench },
    { id: 'pilotage', label: 'Pilotage', icon: BarChart3 },
    { id: 'predictif', label: 'Prédictif', icon: Activity },
    { id: 'mobile', label: 'Mobile', icon: Smartphone },
    { id: 'admin', label: 'Administration', icon: Settings },
  ]

  const functionalities = [
    // Productivité au quotidien
    { id: 1, category: 'productivite', icon: MessageSquare, title: 'Chatbot IA — Assistant GMAO', description: 'Posez vos questions en français, obtenez la réponse en secondes', problem: 'Les techniciens perdent un temps précieux à chercher des informations dispersées dans la GMAO, les documents papier et les fichiers Excel.', solution: 'Notre chatbot IA comprend le langage naturel et répond instantanément à toutes vos questions sur les équipements, les interventions, les stocks et les procédures.', benefits: ['Réponse en moins de 3 secondes vs 15 minutes de recherche', 'Disponible 24/7 pour les équipes terrain', 'Apprentissage continu de votre contexte métier'], differentiator: 'Seul chatbot GMAO formé sur les données de maintenance industrielle' },
    { id: 2, category: 'productivite', icon: Search, title: 'Recherche en Langage Naturel', description: 'Plus besoin de connaître les menus, demandez en français', problem: 'Les interfaces GMAO complexes ralentissent les techniciens et génèrent des erreurs de saisie.', solution: `Exprimez vos besoins en langage naturel : "Montre-moi les BT ouverts sur la ligne 3" ou "Quand est le prochain contrôle de l'onduleur ?".`, benefits: ['Zero formation requise pour les tâches courantes', 'Réduction de 60% des erreurs de navigation', 'Adoption facilitée pour les nouveaux utilisateurs'], differentiator: 'Moteur sémantique propriétaire adapté au vocabulaire maintenance' },
    { id: 3, category: 'productivite', icon: FileText, title: 'Amélioration Texte & Traduction', description: 'Documentation professionnelle, FR → EN / ES / PT', problem: `Les descriptions d'intervention sont souvent incomplètes, mal orthographiées, et les procédures ne sont pas traduites pour les équipes multilingues.`, solution: `L'IA corrige, enrichit et structure automatiquement vos textes. Traduction instantanée en anglais, espagnol et portugais.`, benefits: ['Rapports professionnels sans effort', 'Capitalisation du savoir dans toutes les langues', 'Conformité documentation améliorée'], differentiator: 'Traduction spécialisée vocabulaire technique maintenance' },
    
    // Diagnostic & Résolution
    { id: 4, category: 'diagnostic', icon: Wrench, title: 'Diagnostic Intelligent', description: 'Causes probables + remèdes, en secondes vs heures', problem: `Le diagnostic de panne repose souvent sur l'expérience individuelle des techniciens seniors, qui n'est pas capitalisée.`, solution: `L'IA analyse les symptômes, l'historique et propose les causes probables avec leurs remèdes en quelques secondes.`, benefits: ['Diagnostic 5× plus rapide en moyenne', 'Capitalisation du savoir des experts', 'Montée en compétence accélérée des juniors'], differentiator: `Basé sur l'analyse de millions d'interventions similaires` },
    { id: 5, category: 'diagnostic', icon: UserCheck, title: 'Suggestion Technicien IA', description: 'Affectation optimale (disponibilité, compétences, charge, succès)', problem: `L'affectation des interventions est souvent arbitraire, sans tenir compte des compétences, de la charge ou des historiques de succès.`, solution: `L'IA recommande le meilleur technicien pour chaque intervention en tenant compte de tous les paramètres.`, benefits: ['Taux de First Time Fix amélioré de 25%', 'Charge de travail équilibrée', 'Compétences optimalement utilisées'], differentiator: 'Algorithme multi-critères avec apprentissage des succès passés' },
    { id: 6, category: 'diagnostic', icon: ClipboardList, title: 'Générateur de Checklists IA', description: 'Gammes complètes en 30 secondes vs 30 minutes', problem: 'La création de gammes de maintenance préventive est chronophage et nécessite une expertise métier importante.', solution: `Décrivez l'équipement et le type d'intervention, l'IA génère une checklist complète et structurée en 30 secondes.`, benefits: ['Gain de 90% sur la création de gammes', 'Qualité et exhaustivité garanties', 'Standardisation des procédures'], differentiator: 'Génération basée sur les bonnes pratiques du secteur' },
    { id: 7, category: 'diagnostic', icon: FileSearch, title: 'Extraction Procédures depuis PDF', description: 'Manuels constructeurs → gammes Maintex en 2 minutes', problem: 'Les manuels constructeurs sont des PDF de centaines de pages, inexploitables pour créer des procédures opérationnelles.', solution: `Importez vos PDF, l'IA extrait les procédures de maintenance et les transforme en gammes opérationnelles.`, benefits: ['Jours de travail économisés par documentation', 'Aucune information technique perdue', 'Mise à jour facilitée'], differentiator: `Seule solution capable d'extraire et structurer les tables de maintenance` },
    
    // Pilotage & Décision
    { id: 8, category: 'pilotage', icon: Activity, title: 'Score de Santé Équipement', description: 'Note 0-100 sur 6 critères, vision instantanée du parc', problem: `Impossible d'avoir une vue synthétique de l'état de santé du parc équipements sans analyser des dizaines d'indicateurs.`, solution: 'Un score unique de 0 à 100 calculé sur 6 critères : pannes, interventions, âge, criticité, conformité, stock.', benefits: [`Vision stratégique en un coup d'œil`, 'Priorisation objective des investissements', 'Communication facilitée avec la direction'], differentiator: 'Seul score intégrant le contexte métier et réglementaire' },
    { id: 9, category: 'pilotage', icon: Gauge, title: 'Score Qualité Interventions', description: 'Note A/B/C/D/F sur 9 critères, levier managérial', problem: 'La qualité des interventions est difficile à évaluer objectivement et de manière systématique.', solution: 'Chaque intervention reçoit une note de A à F basée sur 9 critères : complétude, délai, résolution, pièces, documentation...', benefits: ['Levier managérial objectif', 'Identification des besoins de formation', 'Amélioration continue des pratiques'], differentiator: 'Critères adaptables à vos processus et KPIs internes' },
    { id: 10, category: 'pilotage', icon: TrendingUp, title: 'Conseil Cycle de Vie', description: 'MAINTENIR / RÉNOVER / REMPLACER avec analyse TCO 1-3-5 ans', problem: `Les décisions de remplacement ou rénovation d'équipements sont souvent basées sur l'intuition plutôt que sur une analyse objective.`, solution: `L'IA analyse l'historique complet et fournit une recommandation argumentée avec projection TCO à 1, 3 et 5 ans.`, benefits: [`Décisions d'investissement justifiées`, 'Optimisation du budget maintenance', 'Anticipation des obsolescences'], differentiator: 'Analyse TCO intégrée avec scenarios personnalisables' },
    { id: 11, category: 'pilotage', icon: BarChart3, title: 'Rapports IA en Langage Naturel', description: '7 domaines, drill-down conversationnel, saisie vocale', problem: 'La production de rapports mensuels ou hebdomadaires consomme un temps précieux et les insights sont limités.', solution: 'Demandez vos rapports en langage naturel : "Rapport pannes ligne 3 ce mois-ci". Drill-down conversationnel et saisie vocale.', benefits: ['Rapports en 30 secondes vs 2 heures', 'Insights et recommandations automatiques', 'Vocal pour les managers en déplacement'], differentiator: 'Seul outil avec analyse conversationnelle et saisie vocale intégrée' },
    
    // Prédictif & Anticipation
    { id: 12, category: 'predictif', icon: AlertTriangle, title: `Détection d'Anomalies`, description: '3 algorithmes statistiques, surveillance 24/7 automatique', problem: 'Les signaux faibles annonciateurs de pannes passent inaperçus dans la masse de données.', solution: '3 algorithmes statistiques surveillent vos équipements 24/7 et détectent automatiquement les comportements anormaux.', benefits: ['Détection précoce des dérives', 'Surveillance continue sans effort', 'Faux positifs minimisés'], differentiator: `Multi-algorithmes pour couvrir tous les types d'anomalies` },
    { id: 13, category: 'predictif', icon: Wrench, title: 'BT Prédictifs', description: 'Réduction 30-50% des coûts correctifs, validation humaine', problem: 'La maintenance corrective coûte 3 à 5 fois plus cher que la préventive, mais il est difficile de savoir quand intervenir.', solution: `L'IA génère automatiquement des BT prédictifs basés sur les signaux d'usure, avec validation humaine avant intervention.`, benefits: ['Réduction 30-50% des coûts correctifs', 'Interventions au moment optimal', 'Validation humaine pour fiabilité'], differentiator: 'Seule solution avec workflow de validation systématique' },
    { id: 14, category: 'predictif', icon: Package, title: 'Prédiction Stock', description: 'Zéro rupture, quantités optimales, intègre les BT planifiés', problem: 'Les ruptures de stock immobilisent les équipements, et le sur-stock génère des coûts inutiles.', solution: `L'IA prédit les besoins en pièces en intégrant les BT planifiés, les historiques et les délais fournisseurs.`, benefits: ['Zéro rupture de stock critique', 'Réduction du capital immobilisé', 'Commandes automatiques suggérées'], differentiator: 'Intégration complète avec le planning maintenance' },
    { id: 15, category: 'predictif', icon: Users, title: 'Analyse Fournisseurs IA', description: 'Évaluation 360°, base factuelle pour négociations', problem: 'Les négociations fournisseurs manquent de données objectives sur la qualité réelle des produits et services.', solution: 'Analyse 360° de chaque fournisseur : qualité des pièces, respect des délais, prix, incidents, performance technique.', benefits: ['Négociations sur données factuelles', 'Identification des meilleurs fournisseurs', `Réduction des risques d'approvisionnement`], differentiator: 'Seule analyse intégrant la performance technique des pièces' },
    
    // Mobile & Terrain
    { id: 16, category: 'mobile', icon: Camera, title: 'Asset Snap', description: 'Photo de plaque signalétique → fiche équipement pré-remplie', problem: 'La création de fiches équipements est fastidieuse : saisie manuelle de toutes les informations techniques.', solution: `Photographiez la plaque signalétique, l'IA extrait automatiquement toutes les informations et pré-remplit la fiche.`, benefits: [`Création d'équipement en 30 secondes`, 'Zéro erreur de saisie', 'Inventaire du parc accéléré'], differentiator: 'Reconnaissance de tous types de plaques, même en mauvais état' },
    { id: 17, category: 'mobile', icon: Smartphone, title: 'Photo-to-Part', description: `Photo d'une pièce → fiche article identifiée`, problem: 'Identifier une pièce de rechange sans référence précise est un casse-tête quotidien pour les techniciens.', solution: `Photographiez la pièce, l'IA la reconnaît et affiche la fiche article avec disponibilité en stock.`, benefits: ['Identification instantanée des pièces', 'Réduction des erreurs de commande', 'Gain de temps précieux terrain'], differentiator: 'Catalogue étendu de pièces industrielles courantes' },
    
    // Administration & ROI
    { id: 18, category: 'admin', icon: Settings, title: 'Dashboard & Administration IA', description: 'KPIs IA, prompts personnalisables sans code', problem: `Chaque entreprise a des besoins spécifiques en matière de reporting et d'analyse IA.`, solution: 'Dashboard dédié aux KPIs IA avec prompts personnalisables. Configuration sans code par les administrateurs.', benefits: ['KPIs IA suivis en temps réel', 'Prompts adaptés à votre contexte', 'Configuration sans compétence technique'], differentiator: `Seule interface d'administration IA dédiée aux responsables maintenance` },
  ]

  const filteredFunctionalities = activeCategory === 'all' 
    ? functionalities 
    : functionalities.filter(f => f.category === activeCategory)

  const comparativeData = [
    { feature: 'Multi-modèle IA', maintex: true, maintainx: false, upkeep: false, limble: false },
    { feature: 'Diagnostic SDR natif', maintex: true, maintainx: false, upkeep: false, limble: false },
    { feature: 'Score qualité BT', maintex: true, maintainx: false, upkeep: false, limble: false },
    { feature: 'BT Prédictifs + validation', maintex: true, maintainx: false, upkeep: true, limble: false },
    { feature: 'Asset Snap (photo → fiche)', maintex: true, maintainx: false, upkeep: false, limble: true },
    { feature: 'Extraction procédures PDF', maintex: true, maintainx: true, upkeep: false, limble: false },
    { feature: 'Rapports NL 7 domaines + insights', maintex: true, maintainx: 'partial', upkeep: false, limble: false },
    { feature: 'Drill-down conversationnel', maintex: true, maintainx: false, upkeep: false, limble: false },
    { feature: 'Saisie vocale rapports', maintex: true, maintainx: false, upkeep: 'paid', limble: false },
    { feature: 'Suggestion technicien', maintex: true, maintainx: false, upkeep: true, limble: true },
    { feature: 'Hébergement on-premise', maintex: true, maintainx: false, upkeep: false, limble: false },
    { feature: 'Données 100% privées', maintex: true, maintainx: false, upkeep: false, limble: false },
  ]

  const profileGains = [
    { 
      icon: Wrench, 
      title: 'Techniciens terrain',
      features: ['Chatbot IA — réponse instantanée', 'Diagnostic — résolution rapide', 'Checklists — gammes en 30s', 'Asset Snap — fiche en 1 photo', 'Enrichir/Traduire — texte pro']
    },
    { 
      icon: Settings, 
      title: 'Responsables maintenance',
      features: ['BT Prédictifs — anticiper les pannes', 'Score santé — vision du parc', 'Suggestion technicien — affectation optimale', 'Procédures PDF — capitaliser le savoir', 'Anomalies — alertes proactives']
    },
    { 
      icon: TrendingUp, 
      title: 'Direction / Gestion',
      features: ['Rapports IA — 7 domaines + drill-down + voix', 'Dashboard KPI — vision stratégique', 'Fournisseurs — évaluation objective', 'Prédiction stock — optimiser le capital', 'Cycle de vie — aide à la décision budgétaire']
    }
  ]

  const interventionData = [65, 72, 68, 85, 92, 88, 95, 102, 98, 110, 105, 115]

  return (
    <main className="min-h-screen bg-[#FAFAF9] font-sans">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative pt-[90px] pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A]/5 via-white to-[#F97316]/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#e2e8f0_1px,transparent_0)] bg-[size:40px_40px] opacity-40" />
        
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-[#F97316]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#1E3A8A]/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F97316]/10 border border-[#F97316]/20 text-[#1E3A8A] mb-6">
                <Brain className="w-4 h-4 text-[#F97316]" />
                <span className="text-sm font-semibold">Intelligence Artificielle</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0C0A09] leading-tight tracking-tight mb-6">
                L&apos;IA qui transforme<br />
                <span className="text-[#1E3A8A]">votre maintenance en centre de profit.</span>
              </h1>
              
              <p className="text-lg text-[#44403C] max-w-xl mb-8">
                18 fonctionnalités IA natives, intégrées dans Maintex GMAO. 
                Données 100% privées. Hébergement on-premise possible.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#F97316] text-white font-semibold rounded-xl hover:bg-[#EA580C] transition-all shadow-lg shadow-[#F97316]/25 no-underline"
                >
                  Demander une démonstration
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  href="#fonctionnalites" 
                  className="inline-flex items-center gap-2 px-6 py-3.5 border-2 border-[#1E3A8A]/20 text-[#1E3A8A] font-semibold rounded-xl hover:border-[#1E3A8A] transition-all no-underline"
                >
                  Voir les 18 fonctionnalités
                </Link>
              </div>
            </div>

            {/* Hero Photo with Max 3 Floating Stats */}
            <div className="hidden lg:block relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/ai-predictive.jpg"
                  alt="Intelligence Artificielle Maintex"
                  width={500}
                  height={400}
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
              
              {/* Card 1 - Top Left - Badge */}
              <div className="absolute -top-3 left-4 flex items-center gap-2 px-4 py-2.5 bg-[#F97316] text-white rounded-full shadow-lg">
                <Brain className="w-4 h-4" />
                <span className="text-sm font-semibold">18 Fonctions IA</span>
              </div>
              
              {/* Card 2 - Top Right */}
              <div className="absolute top-4 -right-3 z-10">
                <DataCard
                  value="4 mois"
                  label="ROI moyen"
                  change="Retour investissement"
                  icon={<TrendingUp className="w-4 h-4 text-[#059669]" />}
                />
              </div>
              
              {/* Card 3 - Bottom Left - Chart */}
              <div className="absolute bottom-4 -left-3 z-10">
                <DataCard
                  value="99.2%"
                  label="Disponibilité"
                  change="+2.3%"
                  icon={<Activity className="w-4 h-4 text-[#1E3A8A]" />}
                />
              </div>
              
              {/* Vignette Badge */}
              <div className="absolute bottom-4 right-4 z-10">
                <VignetteBadge 
                  icon={<CheckCircle2 className="w-5 h-5 text-white" />} 
                  color="#059669" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bandeau */}
      <section className="py-12 bg-[#1E3A8A] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(249,115,22,0.15),transparent_50%)]" />
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-5 h-5 text-[#F97316]" />
                </div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Carousel */}
      <PartnerCarousel />

      {/* Pourquoi Maintex IA est différente */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#F97316] mb-3 block">Différenciation</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0C0A09] mb-4">
              Pourquoi Maintex IA est différente
            </h2>
            <p className="text-lg text-[#44403C] max-w-2xl mx-auto">
              Une IA souveraine, intégrée et centrée sur l&apos;humain
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, i) => (
              <div key={i} className="bg-[#FAFAF9] rounded-2xl p-6 border border-gray-200 hover:border-[#F97316]/30 transition-colors">
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${pillar.color}15` }}
                >
                  <pillar.icon className="w-7 h-7" style={{ color: pillar.color }} />
                </div>
                <h3 className="text-lg font-bold text-[#0C0A09] mb-2">{pillar.title}</h3>
                <p className="text-sm text-[#64748b]">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fonctionnalités Hub */}
      <section id="fonctionnalites" className="py-20 bg-[#FAFAF9]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#F97316] mb-3 block">Fonctionnalités</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0C0A09] mb-4">
              Les 18 fonctionnalités IA de Maintex
            </h2>
            <p className="text-lg text-[#44403C] max-w-2xl mx-auto">
              Organisées par catégories métier pour faciliter votre navigation
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#F97316] text-white shadow-lg shadow-[#F97316]/25'
                    : 'bg-white text-[#64748b] hover:bg-[#F97316]/10 hover:text-[#F97316] border border-gray-200'
                }`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.label}
              </button>
            ))}
          </div>

          {/* Functionalities Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFunctionalities.map((func) => (
              <div 
                key={func.id}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#F97316]/30 hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#F97316]/10 flex items-center justify-center">
                    <func.icon className="w-6 h-6 text-[#F97316]" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#64748b]">
                      #{func.id}
                    </span>
                    <h3 className="font-bold text-[#0C0A09]">{func.title}</h3>
                  </div>
                </div>
                <p className="text-sm text-[#44403C] mb-4">{func.description}</p>
                <div className="flex items-center gap-2 text-[#F97316] text-sm font-medium group-hover:gap-3 transition-all">
                  En savoir plus <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo with Chart - Diagnostic SDR */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Photo with Max 3 Cards - Diagnostic SDR */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/technician-sdr-validation.png"
                  alt="Technicien validant réparation SDR"
                  width={550}
                  height={400}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>

              {/* Card 1 - Top Left - Badge */}
              <div className="absolute -top-3 left-4 flex items-center gap-2 px-4 py-2.5 bg-[#059669] text-white rounded-full shadow-lg">
                <CheckCircle2 className="w-4 h-4" />
                <span className="text-sm font-semibold">Réparation validée</span>
              </div>

              {/* Card 2 - Top Right */}
              <div className="absolute top-4 -right-3 z-10">
                <DataCard
                  value="99.2%"
                  label="Disponibilité"
                  change="+2.3%"
                  icon={<Activity className="w-4 h-4 text-[#059669]" />}
                />
              </div>

              {/* Card 3 - Bottom Left */}
              <div className="absolute bottom-4 -left-3 bg-[#1E3A8A] text-white rounded-xl p-4 shadow-lg">
                <div className="text-lg font-bold">5×</div>
                <div className="text-xs text-white/80">Plus rapide</div>
              </div>
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#F97316] mb-3 block">Diagnostic</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0C0A09] mb-4">
                Diagnostic Intelligent : du symptôme au remède en quelques secondes
              </h2>

              {/* SDR Process */}
              <div className="flex gap-4 mb-6">
                <div className="flex-1 bg-[#059669] text-white rounded-xl p-4 text-center">
                  <CheckCircle2 className="w-6 h-6 mx-auto mb-2" />
                  <div className="font-bold text-sm">S</div>
                  <div className="text-xs text-white/80">Symptôme</div>
                  <div className="text-xs mt-1 font-semibold">✓ OK</div>
                </div>
                <div className="flex-1 bg-[#059669] text-white rounded-xl p-4 text-center">
                  <CheckCircle2 className="w-6 h-6 mx-auto mb-2" />
                  <div className="font-bold text-sm">D</div>
                  <div className="text-xs text-white/80">Diagnostic</div>
                  <div className="text-xs mt-1 font-semibold">✓ OK</div>
                </div>
                <div className="flex-1 bg-[#059669] text-white rounded-xl p-4 text-center">
                  <CheckCircle2 className="w-6 h-6 mx-auto mb-2" />
                  <div className="font-bold text-sm">R</div>
                  <div className="text-xs text-white/80">Remède</div>
                  <div className="text-xs mt-1 font-semibold">✓ OK</div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-red-50 rounded-xl p-4 border border-red-100">
                  <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    LE PROBLÈME
                  </h4>
                  <p className="text-sm text-red-800">
                    Le diagnostic de panne repose souvent sur l&apos;expérience individuelle des techniciens seniors, qui n&apos;est pas capitalisée.
                  </p>
                </div>

                <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                  <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    LA SOLUTION MAINTEX
                  </h4>
                  <p className="text-sm text-green-800">
                    L&apos;IA analyse les symptômes, l&apos;historique et propose les causes probables avec leurs remèdes en quelques secondes.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-[#0C0A09] mb-3 flex items-center gap-2">
                    <Target className="w-4 h-4 text-[#F97316]" />
                    BÉNÉFICES CONCRETS
                  </h4>
                  <ul className="space-y-2">
                    {['Diagnostic 5× plus rapide en moyenne', 'Capitalisation du savoir des experts', 'Montée en compétence accélérée des juniors'].map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-[#44403C]">
                        <CheckCircle2 className="w-4 h-4 text-[#059669] flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pour qui ? Les gains par profil */}
      <section className="py-20 bg-[#FAFAF9]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#F97316] mb-3 block">Profils</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0C0A09] mb-4">
              Pour qui ? Les gains par profil
            </h2>
            <p className="text-lg text-[#44403C] max-w-2xl mx-auto">
              Chaque profil métier trouve son compte dans l&apos;IA Maintex
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {profileGains.map((profile, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200">
                <div className="w-14 h-14 rounded-xl bg-[#F97316]/10 flex items-center justify-center mb-4">
                  <profile.icon className="w-7 h-7 text-[#F97316]" />
                </div>
                <h3 className="text-lg font-bold text-[#0C0A09] mb-4">{profile.title}</h3>
                <ul className="space-y-3">
                  {profile.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-[#44403C]">
                      <CheckCircle2 className="w-4 h-4 text-[#059669] flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparatif Concurrentiel */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#F97316] mb-3 block">Comparatif</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0C0A09] mb-4">
              Comparatif concurrentiel
            </h2>
            <p className="text-lg text-[#44403C] max-w-2xl mx-auto">
              Maintex est la seule GMAO IA qui combine puissance fonctionnelle ET souveraineté des données
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <thead className="bg-[#1E3A8A] text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Capacité IA</th>
                  <th className="px-6 py-4 text-center font-semibold">Maintex</th>
                  <th className="px-6 py-4 text-center font-semibold">MaintainX</th>
                  <th className="px-6 py-4 text-center font-semibold">UpKeep</th>
                  <th className="px-6 py-4 text-center font-semibold">Limble</th>
                </tr>
              </thead>
              <tbody>
                {comparativeData.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-3 text-sm text-[#44403C]">{row.feature}</td>
                    <td className="px-6 py-3 text-center">
                      {row.maintex === true ? (
                        <CheckCircle2 className="w-5 h-5 text-[#059669] mx-auto" />
                      ) : row.maintex === 'partial' ? (
                        <span className="text-xs text-[#F97316] font-medium">Partiel</span>
                      ) : row.maintex === 'paid' ? (
                        <span className="text-xs text-gray-500">Payant</span>
                      ) : (
                        <span className="text-gray-300">—</span>
                      )}
                    </td>
                    <td className="px-6 py-3 text-center">
                      {row.maintainx === true ? (
                        <CheckCircle2 className="w-5 h-5 text-[#059669] mx-auto" />
                      ) : row.maintainx === 'partial' ? (
                        <span className="text-xs text-[#F97316] font-medium">Partiel</span>
                      ) : row.maintainx === 'paid' ? (
                        <span className="text-xs text-gray-500">Payant</span>
                      ) : (
                        <span className="text-gray-300">—</span>
                      )}
                    </td>
                    <td className="px-6 py-3 text-center">
                      {row.upkeep === true ? (
                        <CheckCircle2 className="w-5 h-5 text-[#059669] mx-auto" />
                      ) : row.upkeep === 'partial' ? (
                        <span className="text-xs text-[#F97316] font-medium">Partiel</span>
                      ) : row.upkeep === 'paid' ? (
                        <span className="text-xs text-gray-500">Payant</span>
                      ) : (
                        <span className="text-gray-300">—</span>
                      )}
                    </td>
                    <td className="px-6 py-3 text-center">
                      {row.limble === true ? (
                        <CheckCircle2 className="w-5 h-5 text-[#059669] mx-auto" />
                      ) : row.limble === 'partial' ? (
                        <span className="text-xs text-[#F97316] font-medium">Partiel</span>
                      ) : row.limble === 'paid' ? (
                        <span className="text-xs text-gray-500">Payant</span>
                      ) : (
                        <span className="text-gray-300">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-[#F97316]/10 rounded-xl p-6 border border-[#F97316]/20">
            <p className="text-sm text-[#44403C] text-center">
              <strong className="text-[#F97316]">Maintex</strong> est la seule GMAO IA qui combine puissance fonctionnelle ET souveraineté des données — 
              un atout décisif pour les secteurs régulés (santé, énergie, infrastructures, défense) et pour les marchés africains exigeant une indépendance vis-à-vis du cloud US.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-20 bg-[#FAFAF9]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="bg-gradient-to-br from-[#F97316] to-[#EA580C] rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="flex justify-center gap-1 mb-6">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-white text-white" />
                ))}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Prêt à transformer votre maintenance ?
              </h2>
              <p className="text-lg text-white/90 max-w-xl mx-auto mb-8">
                Demandez une démonstration personnalisée et découvrez comment l&apos;IA Maintex peut transformer votre maintenance en centre de profit.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-[#F97316] bg-white rounded-xl hover:bg-gray-100 transition-all shadow-lg no-underline"
                >
                  Demander une démo <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  href="/tarifs" 
                  className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all no-underline"
                >
                  Voir les tarifs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}

// Add missing import
function Sparkles({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
      <path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/>
    </svg>
  )
}

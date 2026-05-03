'use client'

import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { 
  CheckCircle2, ArrowRight, ChevronRight, AlertTriangle, Target, TrendingUp,
  MessageSquare, Search, FileText, Wrench, UserCheck, ClipboardList, FileSearch, 
  Activity, Gauge, BarChart3, AlertTriangle as AlertIcon, Package, Users, Camera, 
  Smartphone, Settings, Brain, Zap, Shield, Clock
} from 'lucide-react'
import { MiniLineChartInline } from '@/components/photo-data-visual'

// All 18 AI Features Data
const aiFeatures = [
  // Productivité au quotidien
  { 
    id: 'chatbot-ia', 
    slug: 'chatbot-ia',
    category: 'productivite', 
    icon: MessageSquare, 
    title: 'Chatbot IA — Assistant GMAO', 
    description: 'Posez vos questions en français, obtenez la réponse en secondes',
    problem: 'Les techniciens perdent un temps précieux à chercher des informations dispersées dans la GMAO, les documents papier et les fichiers Excel.',
    solution: 'Notre chatbot IA comprend le langage naturel et répond instantanément à toutes vos questions sur les équipements, les interventions, les stocks et les procédures.',
    benefits: ['Réponse en moins de 3 secondes vs 15 minutes de recherche', 'Disponible 24/7 pour les équipes terrain', 'Apprentissage continu de votre contexte métier'],
    differentiator: 'Seul chatbot GMAO formé sur les données de maintenance industrielle',
    image: '/images/team-technicians.png'
  },
  { 
    id: 'recherche-langage-naturel', 
    slug: 'recherche-langage-naturel',
    category: 'productivite', 
    icon: Search, 
    title: 'Recherche en Langage Naturel', 
    description: 'Plus besoin de connaître les menus, demandez en français',
    problem: 'Les interfaces GMAO complexes ralentissent les techniciens et génèrent des erreurs de saisie.',
    solution: 'Exprimez vos besoins en langage naturel : "Montre-moi les BT ouverts sur la ligne 3" ou "Quand est le prochain contrôle de l\'onduleur ?".',
    benefits: ['Zero formation requise pour les tâches courantes', 'Réduction de 60% des erreurs de navigation', 'Adoption facilitée pour les nouveaux utilisateurs'],
    differentiator: 'Moteur sémantique propriétaire adapté au vocabulaire maintenance',
    image: '/images/dashboard-hero.png'
  },
  { 
    id: 'amelioration-texte-traduction', 
    slug: 'amelioration-texte-traduction',
    category: 'productivite', 
    icon: FileText, 
    title: 'Amélioration Texte & Traduction', 
    description: 'Documentation professionnelle, FR → EN / ES / PT',
    problem: 'Les descriptions d\'intervention sont souvent incomplètes, mal orthographiées, et les procédures ne sont pas traduites pour les équipes multilingues.',
    solution: 'L\'IA corrige, enrichit et structure automatiquement vos textes. Traduction instantanée en anglais, espagnol et portugais.',
    benefits: ['Rapports professionnels sans effort', 'Capitalisation du savoir dans toutes les langues', 'Conformité documentation améliorée'],
    differentiator: 'Traduction spécialisée vocabulaire technique maintenance',
    image: '/images/document-management.png'
  },
  
  // Diagnostic & Résolution
  { 
    id: 'diagnostic-intelligent', 
    slug: 'diagnostic-intelligent',
    category: 'diagnostic', 
    icon: Wrench, 
    title: 'Diagnostic Intelligent', 
    description: 'Causes probables + remèdes, en secondes vs heures',
    problem: 'Le diagnostic de panne repose souvent sur l\'expérience individuelle des techniciens seniors, qui n\'est pas capitalisée.',
    solution: 'L\'IA analyse les symptômes, l\'historique et propose les causes probables avec leurs remèdes en quelques secondes.',
    benefits: ['Diagnostic 5× plus rapide en moyenne', 'Capitalisation du savoir des experts', 'Montée en compétence accélérée des juniors'],
    differentiator: 'Basé sur l\'analyse de millions d\'interventions similaires',
    image: '/images/machine-room.png'
  },
  { 
    id: 'suggestion-technicien', 
    slug: 'suggestion-technicien',
    category: 'diagnostic', 
    icon: UserCheck, 
    title: 'Suggestion Technicien IA', 
    description: 'Affectation optimale (disponibilité, compétences, charge, succès)',
    problem: 'L\'affectation des interventions est souvent arbitraire, sans tenir compte des compétences, de la charge ou des historiques de succès.',
    solution: 'L\'IA recommande le meilleur technicien pour chaque intervention en tenant compte de tous les paramètres.',
    benefits: ['Taux de First Time Fix amélioré de 25%', 'Charge de travail équilibrée', 'Compétences optimalement utilisées'],
    differentiator: 'Algorithme multi-critères avec apprentissage des succès passés',
    image: '/images/team-engineers.png'
  },
  { 
    id: 'generateur-checklists', 
    slug: 'generateur-checklists',
    category: 'diagnostic', 
    icon: ClipboardList, 
    title: 'Générateur de Checklists IA', 
    description: 'Gammes complètes en 30 secondes vs 30 minutes',
    problem: 'La création de gammes de maintenance préventive est chronophage et nécessite une expertise métier importante.',
    solution: 'Décrivez l\'équipement et le type d\'intervention, l\'IA génère une checklist complète et structurée en 30 secondes.',
    benefits: ['Gain de 90% sur la création de gammes', 'Qualité et exhaustivité garanties', 'Standardisation des procédures'],
    differentiator: 'Génération basée sur les bonnes pratiques du secteur',
    image: '/images/maintenance-work.png'
  },
  { 
    id: 'extraction-procedures-pdf', 
    slug: 'extraction-procedures-pdf',
    category: 'diagnostic', 
    icon: FileSearch, 
    title: 'Extraction Procédures depuis PDF', 
    description: 'Manuels constructeurs → gammes Maintex en 2 minutes',
    problem: 'Les manuels constructeurs sont des PDF de centaines de pages, inexploitables pour créer des procédures opérationnelles.',
    solution: 'Importez vos PDF, l\'IA extrait les procédures de maintenance et les transforme en gammes opérationnelles.',
    benefits: ['Jours de travail économisés par documentation', 'Aucune information technique perdue', 'Mise à jour facilitée'],
    differentiator: 'Seule solution capable d\'extraire et structurer les tables de maintenance',
    image: '/images/document-management.png'
  },
  
  // Pilotage & Décision
  { 
    id: 'score-sante-equipement', 
    slug: 'score-sante-equipement',
    category: 'pilotage', 
    icon: Activity, 
    title: 'Score de Santé Équipement', 
    description: 'Note 0-100 sur 6 critères, vision instantanée du parc',
    problem: 'Impossible d\'avoir une vue synthétique de l\'état de santé du parc équipements sans analyser des dizaines d\'indicateurs.',
    solution: 'Un score unique de 0 à 100 calculé sur 6 critères : pannes, interventions, âge, criticité, conformité, stock.',
    benefits: ['Vision stratégique en un coup d\'œil', 'Priorisation objective des investissements', 'Communication facilitée avec la direction'],
    differentiator: 'Seul score intégrant le contexte métier et réglementaire',
    image: '/images/dashboard-hero.png'
  },
  { 
    id: 'score-qualite-interventions', 
    slug: 'score-qualite-interventions',
    category: 'pilotage', 
    icon: Gauge, 
    title: 'Score Qualité Interventions', 
    description: 'Note A/B/C/D/F sur 9 critères, levier managérial',
    problem: 'La qualité des interventions est difficile à évaluer objectivement et de manière systématique.',
    solution: 'Chaque intervention reçoit une note de A à F basée sur 9 critères : complétude, délai, résolution, pièces, documentation...',
    benefits: ['Levier managérial objectif', 'Identification des besoins de formation', 'Amélioration continue des pratiques'],
    differentiator: 'Critères adaptables à vos processus et KPIs internes',
    image: '/images/team-technicians.png'
  },
  { 
    id: 'conseil-cycle-vie', 
    slug: 'conseil-cycle-vie',
    category: 'pilotage', 
    icon: TrendingUp, 
    title: 'Conseil Cycle de Vie', 
    description: 'MAINTENIR / RÉNOVER / REMPLACER avec analyse TCO 1-3-5 ans',
    problem: 'Les décisions de remplacement ou rénovation d\'équipements sont souvent basées sur l\'intuition plutôt que sur une analyse objective.',
    solution: 'L\'IA analyse l\'historique complet et fournit une recommandation argumentée avec projection TCO à 1, 3 et 5 ans.',
    benefits: ['Décisions d\'investissement justifiées', 'Optimisation du budget maintenance', 'Anticipation des obsolescences'],
    differentiator: 'Analyse TCO intégrée avec scenarios personnalisables',
    image: '/images/machine-room.png'
  },
  { 
    id: 'rapports-ia', 
    slug: 'rapports-ia',
    category: 'pilotage', 
    icon: BarChart3, 
    title: 'Rapports IA en Langage Naturel', 
    description: '7 domaines, drill-down conversationnel, saisie vocale',
    problem: 'La production de rapports mensuels ou hebdomadaires consomme un temps précieux et les insights sont limités.',
    solution: 'Demandez vos rapports en langage naturel : "Rapport pannes ligne 3 ce mois-ci". Drill-down conversationnel et saisie vocale.',
    benefits: ['Rapports en 30 secondes vs 2 heures', 'Insights et recommandations automatiques', 'Vocal pour les managers en déplacement'],
    differentiator: 'Seul outil avec analyse conversationnelle et saisie vocale intégrée',
    image: '/images/dashboard-hero.png'
  },
  
  // Prédictif & Anticipation
  { 
    id: 'detection-anomalies', 
    slug: 'detection-anomalies',
    category: 'predictif', 
    icon: AlertIcon, 
    title: 'Détection d\'Anomalies', 
    description: '3 algorithmes statistiques, surveillance 24/7 automatique',
    problem: 'Les signaux faibles annonciateurs de pannes passent inaperçus dans la masse de données.',
    solution: '3 algorithmes statistiques surveillent vos équipements 24/7 et détectent automatiquement les comportements anormaux.',
    benefits: ['Détection précoce des dérives', 'Surveillance continue sans effort', 'Faux positifs minimisés'],
    differentiator: 'Multi-algorithmes pour couvrir tous les types d\'anomalies',
    image: '/images/ai-predictive.png'
  },
  { 
    id: 'bt-predictifs', 
    slug: 'bt-predictifs',
    category: 'predictif', 
    icon: Wrench, 
    title: 'BT Prédictifs', 
    description: 'Réduction 30-50% des coûts correctifs, validation humaine',
    problem: 'La maintenance corrective coûte 3 à 5 fois plus cher que la préventive, mais il est difficile de savoir quand intervenir.',
    solution: 'L\'IA génère automatiquement des BT prédictifs basés sur les signaux d\'usure, avec validation humaine avant intervention.',
    benefits: ['Réduction 30-50% des coûts correctifs', 'Interventions au moment optimal', 'Validation humaine pour fiabilité'],
    differentiator: 'Seule solution avec workflow de validation systématique',
    image: '/images/maintenance-work.png'
  },
  { 
    id: 'prediction-stock', 
    slug: 'prediction-stock',
    category: 'predictif', 
    icon: Package, 
    title: 'Prédiction Stock', 
    description: 'Zéro rupture, quantités optimales, intègre les BT planifiés',
    problem: 'Les ruptures de stock immobilisent les équipements, et le sur-stock génère des coûts inutiles.',
    solution: 'L\'IA prédit les besoins en pièces en intégrant les BT planifiés, les historiques et les délais fournisseurs.',
    benefits: ['Zéro rupture de stock critique', 'Réduction du capital immobilisé', 'Commandes automatiques suggérées'],
    differentiator: 'Intégration complète avec le planning maintenance',
    image: '/images/warehouse.png'
  },
  { 
    id: 'analyse-fournisseurs', 
    slug: 'analyse-fournisseurs',
    category: 'predictif', 
    icon: Users, 
    title: 'Analyse Fournisseurs IA', 
    description: 'Évaluation 360°, base factuelle pour négociations',
    problem: 'Les négociations fournisseurs manquent de données objectives sur la qualité réelle des produits et services.',
    solution: 'Analyse 360° de chaque fournisseur : qualité des pièces, respect des délais, prix, incidents, performance technique.',
    benefits: ['Négociations sur données factuelles', 'Identification des meilleurs fournisseurs', 'Réduction des risques d\'approvisionnement'],
    differentiator: 'Seule analyse intégrant la performance technique des pièces',
    image: '/images/team-engineers.png'
  },
  
  // Mobile & Terrain
  { 
    id: 'asset-snap', 
    slug: 'asset-snap',
    category: 'mobile', 
    icon: Camera, 
    title: 'Asset Snap', 
    description: 'Photo de plaque signalétique → fiche équipement pré-remplie',
    problem: 'La création de fiches équipements est fastidieuse : saisie manuelle de toutes les informations techniques.',
    solution: 'Photographiez la plaque signalétique, l\'IA extrait automatiquement toutes les informations et pré-remplit la fiche.',
    benefits: ['Création d\'équipement en 30 secondes', 'Zéro erreur de saisie', 'Inventaire du parc accéléré'],
    differentiator: 'Reconnaissance de tous types de plaques, même en mauvais état',
    image: '/images/mobile-maintenance-app.png'
  },
  { 
    id: 'photo-to-part', 
    slug: 'photo-to-part',
    category: 'mobile', 
    icon: Smartphone, 
    title: 'Photo-to-Part', 
    description: 'Photo d\'une pièce → fiche article identifiée',
    problem: 'Identifier une pièce de rechange sans référence précise est un casse-tête quotidien pour les techniciens.',
    solution: 'Photographiez la pièce, l\'IA la reconnaît et affiche la fiche article avec disponibilité en stock.',
    benefits: ['Identification instantanée des pièces', 'Réduction des erreurs de commande', 'Gain de temps précieux terrain'],
    differentiator: 'Catalogue étendu de pièces industrielles courantes',
    image: '/images/warehouse.png'
  },
  
  // Administration & ROI
  { 
    id: 'dashboard-administration-ia', 
    slug: 'dashboard-administration-ia',
    category: 'admin', 
    icon: Settings, 
    title: 'Dashboard & Administration IA', 
    description: 'KPIs IA, prompts personnalisables sans code',
    problem: 'Chaque entreprise a des besoins spécifiques en matière de reporting et d\'analyse IA.',
    solution: 'Dashboard dédié aux KPIs IA avec prompts personnalisables. Configuration sans code par les administrateurs.',
    benefits: ['KPIs IA suivis en temps réel', 'Prompts adaptés à votre contexte', 'Configuration sans compétence technique'],
    differentiator: 'Seule interface d\'administration IA dédiée aux responsables maintenance',
    image: '/images/dashboard-hero.png'
  }
]

const categoryInfo = {
  productivite: { label: 'Productivité', color: '#F97316', icon: Zap },
  diagnostic: { label: 'Diagnostic & Résolution', color: '#1E3A8A', icon: Wrench },
  pilotage: { label: 'Pilotage & Décision', color: '#059669', icon: BarChart3 },
  predictif: { label: 'Prédictif & Anticipation', color: '#7C3AED', icon: Activity },
  mobile: { label: 'Mobile & Terrain', color: '#EC4899', icon: Smartphone },
  admin: { label: 'Administration & ROI', color: '#0EA5E9', icon: Settings }
}

export default function AIFeaturePage() {
  const params = useParams()
  const slug = params.slug as string
  
  const feature = aiFeatures.find(f => f.slug === slug)
  
  if (!feature) {
    return (
      <main className="min-h-screen bg-[#FAFAF9] font-sans">
        <SiteHeader />
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-20 text-center">
          <h1 className="text-3xl font-bold text-[#0C0A09] mb-4">Fonctionnalité non trouvée</h1>
          <p className="text-[#64748b] mb-6">Cette fonctionnalité IA n'existe pas.</p>
          <Link 
            href="/intelligence-artificielle" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#F97316] text-white font-semibold rounded-xl hover:bg-[#EA580C] transition-all no-underline"
          >
            Retour aux fonctionnalités IA <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <SiteFooter />
      </main>
    )
  }
  
  const category = categoryInfo[feature.category as keyof typeof categoryInfo]
  const relatedFeatures = aiFeatures.filter(f => f.category === feature.category && f.id !== feature.id).slice(0, 3)
  
  const interventionData = [65, 72, 68, 85, 92, 88, 95, 102, 98, 110, 105, 115]

  return (
    <main className="min-h-screen bg-[#FAFAF9] font-sans">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative pt-[90px] pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A]/5 via-white to-[#F97316]/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#e2e8f0_1px,transparent_0)] bg-[size:40px_40px] opacity-40" />
        
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-[#F97316]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#1E3A8A]/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-[#64748b] mb-6">
            <Link href="/" className="hover:text-[#1E3A8A] no-underline">Accueil</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/intelligence-artificielle" className="hover:text-[#1E3A8A] no-underline">IA</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#0C0A09]">{feature.title}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F97316]/10 border border-[#F97316]/20 text-[#1E3A8A] mb-6">
                <Brain className="w-4 h-4 text-[#F97316]" />
                <span className="text-sm font-semibold">Fonctionnalité IA</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4" style={{ backgroundColor: `${category.color}15` }}>
                <category.icon className="w-3 h-3" style={{ color: category.color }} />
                <span className="text-xs font-semibold" style={{ color: category.color }}>{category.label}</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0C0A09] leading-tight tracking-tight mb-6">
                {feature.title}
              </h1>
              
              <p className="text-xl text-[#F97316] font-medium mb-4">{feature.description}</p>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#F97316] text-white font-semibold rounded-xl hover:bg-[#EA580C] transition-all shadow-lg shadow-[#F97316]/25 no-underline"
                >
                  Demander une démonstration
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  href="/intelligence-artificielle" 
                  className="inline-flex items-center gap-2 px-6 py-3.5 border-2 border-[#1E3A8A]/20 text-[#1E3A8A] font-semibold rounded-xl hover:border-[#1E3A8A] transition-all no-underline"
                >
                  Voir toutes les fonctionnalités IA
                </Link>
              </div>
            </div>

            {/* Hero Photo with Floating Stats */}
            <div className="hidden lg:block relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={500}
                  height={400}
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
              
              <div className="absolute -top-3 left-4 flex items-center gap-2 px-4 py-2.5 bg-[#F97316] text-white rounded-full shadow-lg">
                <feature.icon className="w-4 h-4" />
                <span className="text-sm font-semibold">IA Native</span>
              </div>
              
              <div className="absolute top-16 right-4 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="w-4 h-4 text-[#059669]" />
                  <span className="text-xs text-gray-500">Gain temps</span>
                </div>
                <div className="text-2xl font-bold text-[#0C0A09]">-80%</div>
              </div>
              
              <div className="absolute bottom-4 left-4 bg-[#1E3A8A] text-white rounded-xl p-4 shadow-lg">
                <div className="text-lg font-bold">24/7</div>
                <div className="text-xs text-white/80">Disponible</div>
              </div>
              
              <div className="absolute bottom-4 right-4 bg-white rounded-xl p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                  <span className="text-sm font-medium">Validé</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem / Solution / Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - Photo with Chart */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/team-technicians.png"
                  alt="Techniciens utilisant l'IA"
                  width={550}
                  height={400}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
              
              <div className="absolute -top-3 left-4 flex items-center gap-2 px-4 py-2.5 bg-[#1E3A8A] text-white rounded-full shadow-lg">
                <Users className="w-4 h-4" />
                <span className="text-sm font-semibold">Équipes terrain</span>
              </div>
              
              <div className="absolute top-16 right-4 bg-white rounded-xl p-4 shadow-lg w-48">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-500">Performance</span>
                  <span className="text-xs font-semibold text-[#059669] bg-[#059669]/10 px-2 py-0.5 rounded-full">+45%</span>
                </div>
                <div className="text-xl font-bold text-[#0C0A09] mb-2">156/mois</div>
                <MiniLineChartInline data={interventionData} color="#1E3A8A" height={40} />
              </div>
              
              <div className="absolute bottom-4 left-4 bg-[#F97316] text-white rounded-xl p-4 shadow-lg">
                <div className="text-lg font-bold">+89%</div>
                <div className="text-xs text-white/80">FTFR</div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="order-1 lg:order-2 space-y-6">
              {/* Problem */}
              <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
                <h4 className="font-bold text-red-700 mb-3 flex items-center gap-2 text-lg">
                  <AlertTriangle className="w-5 h-5" />
                  LE PROBLÈME
                </h4>
                <p className="text-red-800 leading-relaxed">{feature.problem}</p>
              </div>
              
              {/* Solution */}
              <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
                <h4 className="font-bold text-green-700 mb-3 flex items-center gap-2 text-lg">
                  <CheckCircle2 className="w-5 h-5" />
                  LA SOLUTION MAINTEX
                </h4>
                <p className="text-green-800 leading-relaxed">{feature.solution}</p>
              </div>
              
              {/* Benefits */}
              <div className="bg-[#FAFAF9] rounded-2xl p-6 border border-gray-200">
                <h4 className="font-bold text-[#0C0A09] mb-4 flex items-center gap-2 text-lg">
                  <Target className="w-5 h-5 text-[#F97316]" />
                  BÉNÉFICES CONCRETS
                </h4>
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#44403C]">
                      <CheckCircle2 className="w-5 h-5 text-[#059669] flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Differentiator */}
              <div className="bg-[#F97316]/10 rounded-2xl p-6 border border-[#F97316]/20">
                <h4 className="font-bold text-[#F97316] mb-2 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  NOTRE DIFFÉRENCE
                </h4>
                <p className="text-[#44403C]">{feature.differentiator}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Features */}
      {relatedFeatures.length > 0 && (
        <section className="py-16 bg-[#FAFAF9]">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#F97316] mb-2 block">Fonctionnalités associées</span>
                <h2 className="text-2xl font-bold text-[#0C0A09]">Autres fonctionnalités {category.label}</h2>
              </div>
              <Link 
                href="/intelligence-artificielle" 
                className="hidden md:inline-flex items-center gap-2 text-[#1E3A8A] font-semibold hover:text-[#F97316] transition-colors no-underline"
              >
                Voir toutes <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {relatedFeatures.map((relFeature) => (
                <Link
                  key={relFeature.id}
                  href={`/ia/${relFeature.slug}`}
                  className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#F97316]/30 hover:shadow-lg transition-all no-underline"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#F97316]/10 flex items-center justify-center mb-4 group-hover:bg-[#F97316]/20 transition-colors">
                    <relFeature.icon className="w-6 h-6 text-[#F97316]" />
                  </div>
                  <h3 className="font-bold text-[#0C0A09] mb-2 group-hover:text-[#F97316] transition-colors">{relFeature.title}</h3>
                  <p className="text-sm text-[#64748b]">{relFeature.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Band */}
      <section className="py-16 bg-[#1E3A8A] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(249,115,22,0.15),transparent_50%)]" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Prêt à essayer {feature.title} ?
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
            Demandez une démonstration personnalisée et découvrez comment cette fonctionnalité peut transformer votre maintenance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-[#1E3A8A] bg-white rounded-xl hover:bg-gray-100 transition-all shadow-lg no-underline"
            >
              Demander une démo gratuite <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/tarifs" 
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all no-underline"
            >
              Voir les tarifs
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}

'use client'

import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import Link from 'next/link'
import { 
  Wrench, FileText, ListChecks, Calendar, Brain, Users, Shield, BarChart3, 
  LayoutDashboard, Package, Cpu, Workflow, DollarSign, FolderOpen, 
  ArrowRight, Clock, Zap, Target, CheckCircle2, Star, TrendingUp,
  Lightbulb, Rocket, Gauge
} from 'lucide-react'

// Roadmap features data based on the document
const roadmapFeatures = [
  {
    id: 'F01',
    title: 'Aide au Diagnostic des Pannes',
    category: 'Interventions',
    priority: 'STRATEGIQUE',
    effort: 'Élevé',
    description: 'Assistant de diagnostic intelligent intégré dans le BT. Guide le technicien pas à pas vers la cause probable de la panne avec arbre de décision et IA.',
    value: 'Réduction du temps de diagnostic de 30 à 60%',
    icon: Brain,
    status: 'planned',
    timeline: 'Q3 2026'
  },
  {
    id: 'F02',
    title: 'Modèles de Bons de Travail',
    category: 'Interventions',
    priority: 'HAUTE',
    effort: 'Moyen',
    description: 'Créez des BT préconfigurés pour instancier un bon de travail complet en un seul clic. Gain de temps de 40 à 60% sur les interventions récurrentes.',
    value: 'Standardisation et gain de temps',
    icon: FileText,
    status: 'planned',
    timeline: 'Q2 2026'
  },
  {
    id: 'F03',
    title: 'Procédures et Gammes Enrichies',
    category: 'Planification',
    priority: 'HAUTE',
    effort: 'Élevé',
    description: 'Transformez les gammes en procédures interactives avec validation des étapes, saisie de mesures, capture photo et signature électronique.',
    value: 'Conformité réglementaire garantie',
    icon: ListChecks,
    status: 'planned',
    timeline: 'Q3 2026'
  },
  {
    id: 'F04',
    title: 'Ordres de Travail Récurrents Avancés',
    category: 'Planification',
    priority: 'HAUTE',
    effort: 'Moyen',
    description: 'Moteur de récurrence avancé (RRULE) et vue calendrier pour visualiser et planifier les maintenances à venir. Support des récurrences complexes.',
    value: 'Automatisation complète du préventif',
    icon: Calendar,
    status: 'in-progress',
    timeline: 'Q2 2026'
  },
  {
    id: 'F05',
    title: 'Détection d\'Anomalies par IA',
    category: 'Analytics / IA',
    priority: 'STRATEGIQUE',
    effort: 'Très élevé',
    description: 'Moteur d\'IA analysant les données historiques pour détecter les patterns anormaux et alerter proactivement avant la panne.',
    value: 'Réduction des pannes imprévues de 25 à 40%',
    icon: Brain,
    status: 'planned',
    timeline: 'Q4 2026'
  },
  {
    id: 'F06',
    title: 'Portail de Demandes d\'Intervention',
    category: 'Interventions',
    priority: 'HAUTE',
    effort: 'Moyen',
    description: 'Portail self-service pour les demandeurs hors maintenance. Suivi en temps réel, formulaires personnalisables, validation workflow.',
    value: 'Communication fluide avec les demandeurs',
    icon: Users,
    status: 'planned',
    timeline: 'Q2 2026'
  },
  {
    id: 'F07',
    title: 'SSO / Authentification Centralisée',
    category: 'Administration',
    priority: 'MOYENNE',
    effort: 'Moyen',
    description: 'Intégration SSO avec Active Directory, Azure AD, Okta. Gestion des droits centralisée et sécurisation des accès.',
    value: 'Sécurité et gestion simplifiée',
    icon: Shield,
    status: 'planned',
    timeline: 'Q3 2026'
  },
  {
    id: 'F08',
    title: 'Module Reporting Avancé',
    category: 'Éditions',
    priority: 'HAUTE',
    effort: 'Élevé',
    description: 'Report Builder pour créer des rapports personnalisés sans code. Drag-and-drop, planification automatique, exports multi-formats.',
    value: 'Rapports sur mesure en quelques clics',
    icon: BarChart3,
    status: 'planned',
    timeline: 'Q3 2026'
  },
  {
    id: 'F09',
    title: 'Tableaux de Bord Personnalisables',
    category: 'Analytics',
    priority: 'MOYENNE',
    effort: 'Moyen',
    description: 'Dashboard Builder pour créer des tableaux de bord personnalisés. Widgets drag-and-drop, KPIs temps réel, partage entre équipes.',
    value: 'Visualisation adaptée à chaque rôle',
    icon: LayoutDashboard,
    status: 'in-progress',
    timeline: 'Q2 2026'
  },
  {
    id: 'F10',
    title: 'Comptages Cycliques de Stock',
    category: 'Stock',
    priority: 'MOYENNE',
    effort: 'Faible',
    description: 'Gestion des inventaires tournants avec classification ABC, planification automatique des comptages et suivi des écarts.',
    value: 'Précision inventaire améliorée',
    icon: Package,
    status: 'planned',
    timeline: 'Q2 2026'
  },
  {
    id: 'F11',
    title: 'Relevés de Compteurs et IoT',
    category: 'Planification',
    priority: 'HAUTE',
    effort: 'Élevé',
    description: 'Intégration avec capteurs IoT pour relevés automatiques. Déclenchement de maintenance préventive basé sur les compteurs.',
    value: 'Maintenance conditionnelle automatisée',
    icon: Cpu,
    status: 'planned',
    timeline: 'Q3 2026'
  },
  {
    id: 'F12',
    title: 'Moteur d\'Automatisation',
    category: 'Administration',
    priority: 'STRATEGIQUE',
    effort: 'Très élevé',
    description: 'Workflow Engine pour automatiser les processus métier. Règles configurables, triggers, actions conditionnelles.',
    value: 'Automatisation des processus métier',
    icon: Workflow,
    status: 'planned',
    timeline: 'Q4 2026'
  },
  {
    id: 'F13',
    title: 'Gestion des Amortissements',
    category: 'Finance',
    priority: 'MOYENNE',
    effort: 'Moyen',
    description: 'Calcul automatique des amortissements d\'actifs. Valeur nette comptable, durées de vie, méthodes linéaires/dégressives.',
    value: 'Pilotage financier des actifs',
    icon: DollarSign,
    status: 'planned',
    timeline: 'Q4 2026'
  },
  {
    id: 'F14',
    title: 'Gestion Documentaire des Actifs',
    category: 'Nomenclature',
    priority: 'MOYENNE',
    effort: 'Moyen',
    description: 'DMS intégré pour la documentation technique. Versioning, recherche full-text, association documents/actifs.',
    value: 'Documentation centralisée et accessible',
    icon: FolderOpen,
    status: 'planned',
    timeline: 'Q3 2026'
  }
]

const priorityColors = {
  'STRATEGIQUE': 'bg-[#0A0A8A] text-white',
  'HAUTE': 'bg-amber-500 text-white',
  'MOYENNE': 'bg-gray-500 text-white'
}

const statusConfig = {
  'in-progress': { label: 'En développement', color: 'bg-green-500', dot: 'animate-pulse' },
  'planned': { label: 'Planifié', color: 'bg-[#0A0A8A]', dot: '' }
}

export default function RoadmapPage() {
  const strategicFeatures = roadmapFeatures.filter(f => f.priority === 'STRATEGIQUE')
  const highPriorityFeatures = roadmapFeatures.filter(f => f.priority === 'HAUTE')
  const mediumPriorityFeatures = roadmapFeatures.filter(f => f.priority === 'MOYENNE')

  return (
    <main className="min-h-screen bg-white font-sans">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative pt-[70px] pb-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#e2e8f0_1px,transparent_0)] bg-[size:40px_40px] opacity-50" />
        
        <div className="relative z-10 max-w-[1240px] mx-auto px-6 lg:px-10 py-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A0A8A]/10 border border-[#0A0A8A]/20 text-[#0A0A8A] mb-8">
              <Rocket className="w-4 h-4" />
              <span className="text-sm">Feuille de Route 2026</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
              MAINTEX évolue pour vous
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              Découvrez les 14 fonctionnalités en développement qui feront de MAINTEX 
              la GMAO la plus avancée du marché. Notre vision : l&apos;intelligence au service de la maintenance.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm">
                <div className="text-3xl font-black text-[#0A0A8A] mb-1">14</div>
                <div className="text-sm text-gray-500">Fonctionnalités</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm">
                <div className="text-3xl font-black text-[#0A0A8A] mb-1">3</div>
                <div className="text-sm text-gray-500">Stratégiques</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm">
                <div className="text-3xl font-black text-[#0A0A8A] mb-1">7</div>
                <div className="text-sm text-gray-500">Haute priorité</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm">
                <div className="text-3xl font-black text-[#0A0A8A] mb-1">2026</div>
                <div className="text-sm text-gray-500">Horizon</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Priority Legend */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <div className="flex items-center gap-2">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${priorityColors['STRATEGIQUE']}`}>
                Stratégique
              </span>
              <span className="text-sm text-gray-500 hidden md:inline">Différenciation majeure</span>
            </div>
            <div className="flex items-center gap-2">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${priorityColors['HAUTE']}`}>
                Haute
              </span>
              <span className="text-sm text-gray-500 hidden md:inline">Forte valeur ajoutée</span>
            </div>
            <div className="flex items-center gap-2">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${priorityColors['MOYENNE']}`}>
                Moyenne
              </span>
              <span className="text-sm text-gray-500 hidden md:inline">Planifiable moyen terme</span>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Features */}
      <section className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A0A8A]/10 border border-[#0A0A8A]/20 text-[#0A0A8A] mb-4">
              <Star className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">Priorité Stratégique</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              Fonctionnalités différenciantes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ces fonctionnalités représentent notre avantage concurrentiel majeur et notre vision de la GMAO de demain.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {strategicFeatures.map((feature) => (
              <div
                key={feature.id}
                className="group relative bg-white rounded-2xl border border-gray-200 hover:border-[#0A0A8A] hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#0A0A8A]" />
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#0A0A8A]/10 flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-[#0A0A8A]" />
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className="text-xs font-mono text-gray-400">{feature.id}</span>
                      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${statusConfig[feature.status as keyof typeof statusConfig].color} text-white`}>
                        <span className={`w-1.5 h-1.5 rounded-full bg-white ${statusConfig[feature.status as keyof typeof statusConfig].dot}`} />
                        {statusConfig[feature.status as keyof typeof statusConfig].label}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#0A0A8A] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg mb-4">
                    <TrendingUp className="w-4 h-4 text-[#0A0A8A] flex-shrink-0" />
                    <span className="text-sm font-medium text-[#0A0A8A]">{feature.value}</span>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-400 pt-4 border-t border-gray-100">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {feature.timeline}
                    </span>
                    <span className="flex items-center gap-1">
                      <Gauge className="w-3 h-3" />
                      Effort : {feature.effort}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* High Priority Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-700 mb-4">
              <Zap className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">Priorité Haute</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              Développement prioritaire
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fonctionnalités à forte valeur ajoutée, recommandées pour un développement court terme.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highPriorityFeatures.map((feature) => (
              <div
                key={feature.id}
                className="group bg-white rounded-xl border border-gray-200 hover:border-[#0A0A8A] hover:shadow-lg transition-all p-6"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#0A0A8A]/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-[#0A0A8A]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-mono text-gray-400">{feature.id}</span>
                      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${statusConfig[feature.status as keyof typeof statusConfig].color} text-white`}>
                        <span className={`w-1 h-1 rounded-full bg-white ${statusConfig[feature.status as keyof typeof statusConfig].dot}`} />
                        {statusConfig[feature.status as keyof typeof statusConfig].label}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-gray-900 group-hover:text-[#0A0A8A] transition-colors">
                      {feature.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {feature.description}
                </p>

                <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg mb-3">
                  <TrendingUp className="w-3 h-3 text-[#0A0A8A]" />
                  <span className="text-xs font-medium text-[#0A0A8A]">{feature.value}</span>
                </div>

                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {feature.timeline}
                  </span>
                  <span>{feature.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Medium Priority Features */}
      <section className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 border border-gray-200 text-gray-700 mb-4">
              <Target className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">Priorité Moyenne</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              Planifiées à moyen terme
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Valeur certaine, planifiable selon les retours clients et les ressources disponibles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mediumPriorityFeatures.map((feature) => (
              <div
                key={feature.id}
                className="group bg-gray-50 rounded-xl border border-gray-200 hover:border-[#0A0A8A] transition-all p-5"
              >
                <div className="w-9 h-9 rounded-lg bg-[#0A0A8A]/10 flex items-center justify-center mb-3">
                  <feature.icon className="w-4 h-4 text-[#0A0A8A]" />
                </div>
                
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-gray-400">{feature.id}</span>
                  <span className="text-xs text-gray-400">{feature.timeline}</span>
                </div>
                
                <h3 className="text-sm font-bold text-gray-900 mb-2 group-hover:text-[#0A0A8A] transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 text-xs mb-3 line-clamp-2">
                  {feature.description}
                </p>

                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0A0A8A]" />
                  {feature.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Overview */}
      <section className="py-20 bg-[#0A0A8A] relative overflow-hidden">
        <div className="relative z-10 max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
              Calendrier de déploiement
            </h2>
            <p className="text-lg text-white/70 font-normal max-w-xl mx-auto">
              Notre feuille de route organisée par trimestre pour 2026
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {['Q2 2026', 'Q3 2026', 'Q4 2026', '2027+'].map((quarter, qIndex) => {
              const quarterFeatures = roadmapFeatures.filter(f => f.timeline === quarter || (quarter === '2027+' && !['Q2 2026', 'Q3 2026', 'Q4 2026'].includes(f.timeline)))
              return (
                <div key={quarter} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 md:p-6">
                  <h3 className="text-base md:text-lg font-bold text-white mb-4 text-center">{quarter}</h3>
                  <div className="space-y-2 max-h-[200px] overflow-y-auto">
                    {quarterFeatures.length > 0 ? quarterFeatures.slice(0, 5).map(f => (
                      <div key={f.id} className="flex items-center gap-2 p-2 bg-white/5 rounded-lg">
                        <div className={`w-2 h-2 rounded-full ${statusConfig[f.status as keyof typeof statusConfig].color}`} />
                        <span className="text-xs text-white/80 truncate">{f.title}</span>
                      </div>
                    )) : (
                      <p className="text-center text-white/40 text-xs py-4">
                        {qIndex === 3 ? 'Et au-delà...' : 'À planifier'}
                      </p>
                    )}
                    {quarterFeatures.length > 5 && (
                      <p className="text-xs text-white/40 text-center">+{quarterFeatures.length - 5} autres</p>
                    )}
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/10 text-center">
                    <span className="text-xl md:text-2xl font-black text-white">{quarterFeatures.length}</span>
                    <span className="text-xs text-white/50 ml-1">features</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              Technologies ouvertes
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Nous construisons sur des fondations solides et open source
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {[
              { name: 'LangChain', desc: 'Pipeline IA & RAG', icon: Brain },
              { name: 'React Flow', desc: 'Éditeur visuel', icon: LayoutDashboard },
              { name: 'FullCalendar', desc: 'Planification', icon: Calendar },
              { name: 'Puppeteer', desc: 'Export PDF', icon: FileText },
              { name: 'pgvector', desc: 'Embeddings', icon: Cpu }
            ].map((tech, i) => (
              <div key={i} className="group text-center p-4 md:p-6 bg-gray-50 rounded-xl hover:bg-[#0A0A8A]/5 transition-all">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mx-auto mb-3 group-hover:shadow-md transition-all border border-gray-200">
                  <tech.icon className="w-5 h-5 md:w-6 md:h-6 text-[#0A0A8A]" />
                </div>
                <h4 className="font-semibold text-gray-900 text-sm md:text-base mb-1">{tech.name}</h4>
                <p className="text-xs text-gray-500">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10 text-center">
          <Lightbulb className="w-10 h-10 md:w-12 md:h-12 text-[#0A0A8A] mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Influencez notre feuille de route
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Vos retours sont précieux. Partagez vos besoins et priorités pour nous aider à construire la GMAO qui vous correspond.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-semibold text-white bg-[#0A0A8A] rounded-xl hover:bg-[#0A0A8A]/90 transition-all no-underline"
            >
              Partager mes besoins
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </Link>
            <Link
              href="/fonctionnalites"
              className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-medium text-gray-900 border border-gray-200 rounded-xl hover:border-[#0A0A8A] hover:bg-white transition-all no-underline"
            >
              Fonctionnalités actuelles
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}

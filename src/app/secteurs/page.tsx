'use client'

import { useState } from 'react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import Link from 'next/link'
import { 
  CheckCircle2, TrendingUp, ArrowRight, ChevronRight,
  Factory, Pickaxe, Car, FlaskConical, Wheat, Zap, Fuel, 
  Building2, Building, Server, HardHat, Truck, 
  Stethoscope, Shield, BadgeCheck, Clock, Users, 
  Globe, Target, Star
} from 'lucide-react'
import { TabNavigation, TabPanel } from '@/components/tab-navigation'
import { TabletMockup, MobileMockup, GMAODashboardMockup, EquipmentDetailMockup } from '@/components/device-mockups'

export default function SecteursPage() {
  const [activeTab, setActiveTab] = useState('industrie')

  const sectorTabs = [
    { id: 'industrie', label: 'Industrie', icon: <Factory className="w-4 h-4" /> },
    { id: 'mines', label: 'Mines & Carrières', icon: <Pickaxe className="w-4 h-4" /> },
    { id: 'sante', label: 'Santé', icon: <Stethoscope className="w-4 h-4" /> },
    { id: 'energie', label: 'Énergie', icon: <Zap className="w-4 h-4" /> },
    { id: 'btp', label: 'BTP', icon: <HardHat className="w-4 h-4" /> },
    { id: 'agro', label: 'Agroalimentaire', icon: <Wheat className="w-4 h-4" /> },
  ]

  const sectors = {
    industrie: {
      title: 'Industrie',
      icon: Factory,
      color: '#1E3A8A',
      gradient: 'from-blue-600 to-cyan-500',
      description: "Optimisez la disponibilité de vos lignes de production et réduisez les temps d'arrêt.",
      challenges: [
        "Arrêts de ligne non planifiés impactant la production",
        "Diagnostic trop lent et incertain",
        "Conformité ICPE et réglementations industrielles",
        "Base de connaissances technique dispersée"
      ],
      solutions: [
        { title: "Suivi des fonctions vitales", desc: "Visualisez la disponibilité de vos fonctions critiques en temps réel" },
        { title: "IA au service du diagnostic", desc: "Analyse des pannes similaires et recommandations automatiques" },
        { title: "Traçabilité automatique", desc: "Conformité HACCP, GMP, ISO sans surcharge administrative" },
        { title: "First Time Fix systématique", desc: "Identification de la cause racine sans tâtonnement" },
      ],
      stats: [
        { value: '–38%', label: 'temps d\'arrêt' },
        { value: '+85%', label: 'First Time Fix' },
        { value: '2x', label: 'montée en compétence' },
      ],
      mockup: <GMAODashboardMockup />
    },
    mines: {
      title: 'Mines & Carrières',
      icon: Pickaxe,
      color: '#F97316',
      gradient: 'from-orange-500 to-amber-500',
      description: "Optimisez la disponibilité de vos engins et équipements miniers dans des conditions extrêmes.",
      challenges: [
        "Conditions d'exploitation extrêmes (poussière, chaleur)",
        "Engins mobiles difficiles à suivre",
        "Coûts d'immobilisation très élevés",
        "Gestion des pièces de rechange critiques"
      ],
      solutions: [
        { title: "Suivi des heures de fonctionnement", desc: "Compteurs automatiques et alertes de maintenance" },
        { title: "Maintenance prédictive", desc: "Anticipez les pannes sur les équipements critiques" },
        { title: "Mobile offline", desc: "Fonctionne même sans connexion en zone isolée" },
        { title: "Rapports de disponibilité", desc: "Indicateurs de performance par engin et par site" },
      ],
      stats: [
        { value: '+25%', label: 'disponibilité' },
        { value: '–40%', label: 'pannes imprévues' },
        { value: '15%', label: 'économie pièces' },
      ],
      mockup: <EquipmentDetailMockup />
    },
    sante: {
      title: 'Santé & Biomédical',
      icon: Stethoscope,
      color: '#059669',
      gradient: 'from-emerald-500 to-teal-500',
      description: 'Assurez la conformité et la disponibilité de vos équipements biomédicaux.',
      challenges: [
        "Zéro tolérance à la panne sur les équipements critiques",
        "Conformité HAS et réglementations strictes",
        "Traçabilité obligatoire des interventions",
        "Sécurité patient directement liée à la maintenance"
      ],
      solutions: [
        { title: "Historique complet par équipement", desc: "Accès instantané au contexte de chaque machine" },
        { title: "Traçabilité automatique", desc: "Conformité réglementaire sans ressaisie" },
        { title: "Base de connaissances partagée", desc: "Capitalisation du savoir biomédical" },
        { title: "Alertes préventives", desc: "Anticipation des contrôles réglementaires" },
      ],
      stats: [
        { value: '100%', label: 'conformité HAS' },
        { value: '–50%', label: 'interventions répétées' },
        { value: '24/7', label: 'disponibilité' },
      ],
      mockup: <EquipmentDetailMockup />
    },
    energie: {
      title: 'Énergie & Utilities',
      icon: Zap,
      color: '#1E3A8A',
      gradient: 'from-blue-600 to-indigo-500',
      description: 'Assurez la continuité de service sur vos réseaux et infrastructures énergétiques.',
      challenges: [
        "Continuité de service critique",
        "Conformité réglementaire CRE",
        "Interventions d'urgence fréquentes",
        "Intégration avec les systèmes SCADA"
      ],
      solutions: [
        { title: "Fonctions vitales", desc: "Surveillance des fonctions critiques du réseau" },
        { title: "Conformité automatisée", desc: "Génération automatique des rapports réglementaires" },
        { title: "Intégration SCADA", desc: "Connexion avec vos systèmes de contrôle" },
        { title: "Gestion des urgences", desc: "Workflow d'intervention prioritaire" },
      ],
      stats: [
        { value: '99.9%', label: 'disponibilité' },
        { value: '–60%', label: 'temps de réponse' },
        { value: '100%', label: 'conformité' },
      ],
      mockup: <GMAODashboardMockup />
    },
    btp: {
      title: 'BTP & Construction',
      icon: HardHat,
      color: '#F97316',
      gradient: 'from-orange-500 to-red-500',
      description: 'Gérez efficacement votre flotte d\'engins de chantier et vos équipements.',
      challenges: [
        "Engins mobiles multi-chantiers",
        "Contrôles techniques obligatoires",
        "Conformité VGP réglementaire",
        "Carnet d'entretien numérique"
      ],
      solutions: [
        { title: "Géolocalisation des engins", desc: "Suivi en temps réel de votre flotte" },
        { title: "Carnet numérique", desc: "Remplacez le carnet papier réglementaire" },
        { title: "Alertes VGP", desc: "Notifications avant échéance des contrôles" },
        { title: "Multi-chantiers", desc: "Gestion centralisée de tous vos sites" },
      ],
      stats: [
        { value: '–40%', label: 'pannes imprévues' },
        { value: '100%', label: 'conformité VGP' },
        { value: '–2j', label: 'admin par mois' },
      ],
      mockup: <EquipmentDetailMockup />
    },
    agro: {
      title: 'Agroalimentaire',
      icon: Wheat,
      color: '#059669',
      gradient: 'from-green-500 to-lime-500',
      description: 'Maintenez vos lignes dans la conformité HACCP et ISO 22000.',
      challenges: [
        "Exigences HACCP strictes",
        "Traçabilité des nettoyages et désinfections",
        "Alertes températures critiques",
        "Conformité IFS, BRC, ISO 22000"
      ],
      solutions: [
        { title: "Plans HACCP intégrés", desc: "Check-lists automatiques dans les OT" },
        { title: "Suivi des températures", desc: "Alertes automatiques sur seuils critiques" },
        { title: "Traçabilité hygiène", desc: "Enregistrement des nettoyages et désinfections" },
        { title: "Rapports de conformité", desc: "Documentation prête pour les audits" },
      ],
      stats: [
        { value: '+44%', label: 'préventif' },
        { value: '100%', label: 'conformité HACCP' },
        { value: '–3j', label: 'préparation audit' },
      ],
      mockup: <GMAODashboardMockup />
    }
  }

  const otherSectors = [
    { id: 'chimie-pharma', icon: FlaskConical, title: 'Chimie & Pharmacie', href: '/secteurs/chimie-pharma' },
    { id: 'automobile', icon: Car, title: 'Automobile', href: '/secteurs/automobile' },
    { id: 'oil-gas', icon: Fuel, title: 'Pétrole & Gaz', href: '/secteurs/oil-gas' },
    { id: 'facilities', icon: Building2, title: 'Facility Management', href: '/secteurs/facilities' },
    { id: 'data-centers', icon: Server, title: 'Data Centers', href: '/secteurs/data-centers' },
    { id: 'eau-utilities', icon: Building, title: 'Eau & Utilities', href: '/secteurs/eau-utilities' },
    { id: 'aeronautique-ferroviaire', icon: Truck, title: 'Aéronautique & Ferroviaire', href: '/secteurs/aeronautique-ferroviaire' },
  ]

  const stats = [
    { value: '15', label: 'Secteurs couverts', icon: Target },
    { value: '350+', label: 'Clients actifs', icon: Users },
    { value: '15', label: 'Pays', icon: Globe },
    { value: '–30%', label: 'Temps d\'arrêt moyen', icon: TrendingUp },
  ]

  const currentSector = sectors[activeTab as keyof typeof sectors]

  return (
    <main className="min-h-screen bg-[#FAFAF9] font-sans">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative pt-[90px] pb-16 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A]/5 via-white to-[#F97316]/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#e2e8f0_1px,transparent_0)] bg-[size:40px_40px] opacity-40" />
        
        {/* Decorative blobs */}
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-[#F97316]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#1E3A8A]/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F97316]/10 border border-[#F97316]/20 text-[#1E3A8A] mb-6">
                <Factory className="w-4 h-4 text-[#F97316]" />
                <span className="text-sm font-semibold">15 secteurs couverts</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0C0A09] leading-tight tracking-tight mb-6">
                Votre secteur.<br />
                <span className="text-[#1E3A8A]">Nos solutions.</span>
              </h1>
              
              <p className="text-lg text-[#44403C] max-w-xl mb-8 leading-relaxed">
                Chaque secteur a ses contraintes réglementaires. MAINTEX est préconfiguré pour chacun d&apos;eux, 
                avec des modules métier adaptés à vos besoins spécifiques.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link 
                  href="#secteurs" 
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#F97316] text-white font-semibold rounded-xl hover:bg-[#EA580C] transition-all shadow-lg shadow-[#F97316]/25 no-underline"
                >
                  Explorer les secteurs
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 px-6 py-3.5 border-2 border-[#1E3A8A]/20 text-[#1E3A8A] font-semibold rounded-xl hover:border-[#1E3A8A] transition-all no-underline"
                >
                  Demander une démo
                </Link>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#F97316]/30 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-[#F97316]/10 flex items-center justify-center mb-4">
                    <stat.icon className="w-5 h-5 text-[#F97316]" />
                  </div>
                  <div className="text-3xl font-bold text-[#1E3A8A] mb-1">{stat.value}</div>
                  <div className="text-sm text-[#64748b]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bandeau */}
      <section className="py-5 bg-[#1E3A8A] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(249,115,22,0.15),transparent_50%)]" />
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 text-white/90 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#F97316]" />
              <span>Conformité réglementaire</span>
            </div>
            <div className="flex items-center gap-2">
              <BadgeCheck className="w-4 h-4 text-[#F97316]" />
              <span>Modules métier</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#F97316]" />
              <span>Déploiement 14 jours</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#F97316]" />
              <span>Support dédié</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section id="secteurs" className="py-8 bg-white border-b border-gray-200 sticky top-[68px] z-30">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <TabNavigation 
            tabs={sectorTabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-16 bg-[#FAFAF9]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          {Object.keys(sectors).map((key) => {
            const sector = sectors[key as keyof typeof sectors]
            return (
              <TabPanel key={key} isActive={activeTab === key}>
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  <div>
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${sector.gradient} flex items-center justify-center shadow-lg`}>
                        <sector.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-[#0C0A09]">{sector.title}</h2>
                        <p className="text-[#64748b]">{sector.description}</p>
                      </div>
                    </div>

                    {/* Challenges */}
                    <div className="mb-8">
                      <h3 className="text-sm font-semibold text-[#64748b] uppercase tracking-wider mb-3">Défis du secteur</h3>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {sector.challenges.map((challenge, i) => (
                          <div key={i} className="flex items-start gap-2 p-3 bg-white rounded-lg border border-gray-200">
                            <div className="w-2 h-2 rounded-full bg-[#F97316] mt-1.5 flex-shrink-0" />
                            <span className="text-sm text-[#44403C]">{challenge}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Solutions */}
                    <div className="mb-8">
                      <h3 className="text-sm font-semibold text-[#64748b] uppercase tracking-wider mb-3">Solutions MAINTEX</h3>
                      <div className="space-y-3">
                        {sector.solutions.map((solution, i) => (
                          <div key={i} className="bg-white rounded-lg border border-gray-200 p-4 hover:border-[#F97316]/30 transition-colors">
                            <div className="font-semibold text-[#0C0A09] mb-1">{solution.title}</div>
                            <div className="text-sm text-[#64748b]">{solution.desc}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {sector.stats.map((stat, i) => (
                        <div key={i} className="bg-white rounded-xl p-4 border border-gray-200 text-center">
                          <div className="text-2xl font-bold" style={{ color: sector.color }}>{stat.value}</div>
                          <div className="text-xs text-[#64748b]">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex flex-wrap gap-3">
                      <Link
                        href={`/secteurs/${key}`}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#F97316] text-white font-semibold rounded-xl hover:bg-[#EA580C] transition-all shadow-lg shadow-[#F97316]/25 no-underline"
                      >
                        En savoir plus <ChevronRight className="w-4 h-4" />
                      </Link>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#1E3A8A]/20 text-[#1E3A8A] font-semibold rounded-xl hover:border-[#1E3A8A] transition-all no-underline"
                      >
                        Demander une démo
                      </Link>
                    </div>
                  </div>

                  {/* Mockup */}
                  <div className="flex justify-center lg:sticky lg:top-36">
                    <TabletMockup className="w-full max-w-[340px]">
                      {sector.mockup}
                    </TabletMockup>
                  </div>
                </div>
              </TabPanel>
            )
          })}
        </div>
      </section>

      {/* Other Sectors */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-10">
            <h3 className="text-xl font-bold text-[#0C0A09] mb-2">Autres secteurs couverts</h3>
            <p className="text-sm text-[#64748b]">MAINTEX s&apos;adapte à tous les environnements industriels</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {otherSectors.map((sector) => (
              <Link
                key={sector.id}
                href={sector.href}
                className="flex items-center gap-2 px-5 py-3 bg-[#FAFAF9] border border-gray-200 rounded-xl text-sm text-[#44403C] hover:border-[#F97316] hover:text-[#F97316] hover:shadow-md transition-all no-underline"
              >
                <sector.icon className="w-4 h-4" />
                {sector.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-20 bg-[#FAFAF9]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="bg-gradient-to-br from-[#F97316] to-[#EA580C] rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Votre secteur n&apos;est pas listé ?
              </h2>
              <p className="text-lg text-white/90 max-w-xl mx-auto mb-8">
                MAINTEX s&apos;adapte à tous les secteurs. Contactez-nous pour discuter de vos besoins spécifiques.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-[#F97316] bg-white rounded-xl hover:bg-gray-100 transition-all shadow-lg no-underline"
                >
                  Contactez-nous <ArrowRight className="w-4 h-4" />
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

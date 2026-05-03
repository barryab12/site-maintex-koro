'use client'

import { useState } from 'react'
import Image from 'next/image'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import Link from 'next/link'
import { 
  CheckCircle2, TrendingUp, ArrowRight, ChevronRight,
  Factory, Pickaxe, Car, FlaskConical, Wheat, Zap, Fuel, 
  Building2, Building, Server, HardHat, Truck, 
  Stethoscope, Shield, BadgeCheck, Clock, Users, 
  Globe, Target, Star, Activity, TrendingDown, ArrowUpRight, Gauge
} from 'lucide-react'
import { TabNavigation, TabPanel } from '@/components/tab-navigation'
import { MiniLineChartInline } from '@/components/photo-data-visual'

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
      image: '/images/production-line.png',
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
        { value: '–38%', label: 'temps d\'arrêt', type: 'success' },
        { value: '+85%', label: 'First Time Fix', type: 'accent' },
        { value: '2x', label: 'montée en compétence', type: 'default' },
      ],
    },
    mines: {
      title: 'Mines & Carrières',
      icon: Pickaxe,
      color: '#F97316',
      image: '/images/mining-operation.png',
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
        { value: '+25%', label: 'disponibilité', type: 'success' },
        { value: '–40%', label: 'pannes imprévues', type: 'success' },
        { value: '15%', label: 'économie pièces', type: 'default' },
      ],
    },
    sante: {
      title: 'Santé & Biomédical',
      icon: Stethoscope,
      color: '#059669',
      image: '/images/hospital-medical.png',
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
        { value: '100%', label: 'conformité HAS', type: 'success' },
        { value: '–50%', label: 'interventions répétées', type: 'success' },
        { value: '24/7', label: 'disponibilité', type: 'default' },
      ],
    },
    energie: {
      title: 'Énergie & Utilities',
      icon: Zap,
      color: '#1E3A8A',
      image: '/images/energy-plant.png',
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
        { value: '99.9%', label: 'disponibilité', type: 'success' },
        { value: '–60%', label: 'temps de réponse', type: 'success' },
        { value: '100%', label: 'conformité', type: 'default' },
      ],
    },
    btp: {
      title: 'BTP & Construction',
      icon: HardHat,
      color: '#F97316',
      image: '/images/construction-site.png',
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
        { value: '–40%', label: 'pannes imprévues', type: 'success' },
        { value: '100%', label: 'conformité VGP', type: 'success' },
        { value: '–2j', label: 'admin par mois', type: 'default' },
      ],
    },
    agro: {
      title: 'Agroalimentaire',
      icon: Wheat,
      color: '#059669',
      image: '/images/food-processing.png',
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
        { value: '+44%', label: 'préventif', type: 'success' },
        { value: '100%', label: 'conformité HACCP', type: 'success' },
        { value: '–3j', label: 'préparation audit', type: 'default' },
      ],
    }
  }

  const otherSectors = [
    { id: 'chimie-pharma', icon: FlaskConical, title: 'Chimie & Pharmacie', href: '/secteurs/chimie-pharma', image: '/images/healthcare-equipment.png' },
    { id: 'automobile', icon: Car, title: 'Automobile', href: '/secteurs/automobile', image: '/images/production-line.png' },
    { id: 'oil-gas', icon: Fuel, title: 'Pétrole & Gaz', href: '/secteurs/oil-gas', image: '/images/oil-gas-refinery.png' },
    { id: 'facilities', icon: Building2, title: 'Facility Management', href: '/secteurs/facilities', image: '/images/warehouse.png' },
    { id: 'data-centers', icon: Server, title: 'Data Centers', href: '/secteurs/data-centers', image: '/images/data-center.png' },
    { id: 'eau-utilities', icon: Building, title: 'Eau & Utilities', href: '/secteurs/eau-utilities', image: '/images/water-treatment.png' },
    { id: 'aeronautique-ferroviaire', icon: Truck, title: 'Aéronautique & Ferroviaire', href: '/secteurs/aeronautique-ferroviaire', image: '/images/railway-maintenance.png' },
  ]

  const performanceData = [85, 88, 92, 95, 97, 98, 96, 99, 98, 99, 99, 99]

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

            {/* Hero Photo with Floating Stats */}
            <div className="hidden lg:block relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/technician-action.png"
                  alt="Technicien en action"
                  width={550}
                  height={350}
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-3 left-4 flex items-center gap-2 px-4 py-2.5 bg-[#F97316] text-white rounded-full shadow-lg">
                <Target className="w-4 h-4" />
                <span className="text-sm font-semibold">15 Secteurs</span>
              </div>
              
              <div className="absolute top-12 right-4 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Gauge className="w-4 h-4 text-[#059669]" />
                  <span className="text-xs text-gray-500">Disponibilité</span>
                </div>
                <div className="text-2xl font-bold text-[#0C0A09]">98.2%</div>
              </div>
              
              <div className="absolute bottom-4 left-4 bg-[#1E3A8A] text-white rounded-xl p-4 shadow-lg">
                <div className="text-lg font-bold">350+</div>
                <div className="text-xs text-white/80">Clients</div>
              </div>
              
              <div className="absolute bottom-4 right-4 bg-white rounded-xl p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                  <span className="text-sm font-medium">Conforme</span>
                </div>
              </div>
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
                  {/* Left - Content */}
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

                  {/* Right - Photo with Floating Stats */}
                  <div className="relative lg:sticky lg:top-36">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                      <Image
                        src={sector.image}
                        alt={sector.title}
                        width={500}
                        height={350}
                        className="object-cover w-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                    </div>
                    
                    {/* Floating Stats Cards */}
                    <div className="absolute -top-3 left-4 flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg">
                      <sector.icon className="w-4 h-4" style={{ color: sector.color }} />
                      <span className="text-sm font-semibold text-[#0C0A09]">{sector.title}</span>
                    </div>
                    
                    {sector.stats.map((stat, i) => (
                      <div 
                        key={i}
                        className={`absolute ${i === 0 ? '-right-3 top-16' : i === 1 ? '-left-3 top-1/2' : 'bottom-4 right-4'} bg-white rounded-xl p-4 shadow-lg`}
                      >
                        <div className={`text-xl font-bold ${stat.type === 'success' ? 'text-[#059669]' : stat.type === 'accent' ? 'text-[#F97316]' : 'text-[#0C0A09]'}`}>
                          {stat.value}
                        </div>
                        <div className="text-xs text-gray-500">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabPanel>
            )
          })}
        </div>
      </section>

      {/* Other Sectors Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-[#0C0A09] mb-2">Autres secteurs couverts</h3>
            <p className="text-[#64748b]">MAINTEX s&apos;adapte à tous les environnements industriels</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherSectors.map((sector) => (
              <Link
                key={sector.id}
                href={sector.href}
                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all no-underline"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={sector.image}
                    alt={sector.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center gap-2 text-white">
                    <sector.icon className="w-5 h-5 text-[#F97316]" />
                    <span className="font-semibold">{sector.title}</span>
                  </div>
                </div>
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

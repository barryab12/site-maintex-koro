'use client'

import { useState } from 'react'
import Image from 'next/image'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import Link from 'next/link'
import { 
  CheckCircle2, ArrowRight, ChevronRight,
  Factory, Pickaxe, Car, FlaskConical, Wheat, Zap, Fuel, 
  Building2, Building, Server, HardHat, Truck, 
  Stethoscope, Shield, BadgeCheck, Clock, Users, 
  Globe, Target, Activity, Gauge, TrendingUp, TrendingDown, ArrowUpRight
} from 'lucide-react'
import { TabNavigation, TabPanel } from '@/components/tab-navigation'

export default function SecteursPage() {
  const [activeTab, setActiveTab] = useState('industrie')

  const sectorTabs = [
    { id: 'industrie', label: 'Industrie & Production', icon: <Factory className="w-4 h-4" /> },
    { id: 'energies', label: 'Énergies & Infrastructures', icon: <Zap className="w-4 h-4" /> },
    { id: 'services', label: 'Services & Exploitation', icon: <Building2 className="w-4 h-4" /> },
  ]

  // INDUSTRIE & PRODUCTION
  const industrieSectors = [
    {
      id: 'industrie',
      icon: Factory,
      title: 'Industrie',
      subtitle: 'Usines & production',
      description: 'Optimisez la disponibilité de vos lignes de production et réduisez les temps d\'arrêt.',
      image: '/images/production-line.png',
      challenges: ['Arrêts de ligne non planifiés', 'Diagnostic trop lent', 'Conformité ICPE'],
      stats: { value: '-38%', label: 'temps d\'arrêt' }
    },
    {
      id: 'automobile',
      icon: Car,
      title: 'Automobile',
      subtitle: 'Industrie auto & équipements',
      description: 'Maintenance des lignes de production automobile et équipements spécialisés.',
      image: '/images/production-line.png',
      challenges: ['Lignes haute cadence', 'Traçabilité qualité', 'Juste-à-temps'],
      stats: { value: '99.5%', label: 'disponibilité' }
    },
    {
      id: 'chimie-pharma',
      icon: FlaskConical,
      title: 'Chimie & Pharma',
      subtitle: 'Process & conformité',
      description: 'Conformité et maintenance des installations chimiques et pharmaceutiques.',
      image: '/images/healthcare-equipment.png',
      challenges: ['Conformité GMP', 'Sécurité process', 'Traçabilité BPF'],
      stats: { value: '100%', label: 'conformité' }
    },
    {
      id: 'mines',
      icon: Pickaxe,
      title: 'Mines & extractif',
      subtitle: 'Exploitation & équipements lourds',
      description: 'Maintenance des engins miniers et équipements d\'extraction dans des conditions extrêmes.',
      image: '/images/mining-operation.png',
      challenges: ['Conditions extrêmes', 'Engins mobiles', 'Coûts immobilisation'],
      stats: { value: '+25%', label: 'disponibilité' }
    },
    {
      id: 'aeronautique',
      icon: Truck,
      title: 'Aéronautique & ferrov.',
      subtitle: 'Maintenance réglementée',
      description: 'Maintenance réglementée pour le transport aérien et ferroviaire.',
      image: '/images/railway-maintenance.png',
      challenges: ['Réglementation stricte', 'Sécurité critique', 'Traçabilité totale'],
      stats: { value: '100%', label: 'traçabilité' }
    },
    {
      id: 'agroalimentaire',
      icon: Wheat,
      title: 'Agroalimentaire',
      subtitle: 'Production & chaîne alimentaire',
      description: 'Maintenez vos lignes dans la conformité HACCP et ISO 22000.',
      image: '/images/food-processing.png',
      challenges: ['Exigences HACCP', 'Traçabilité nettoyages', 'Alertes températures'],
      stats: { value: '+44%', label: 'préventif' }
    }
  ]

  // ÉNERGIES & INFRASTRUCTURES
  const energiesSectors = [
    {
      id: 'energie',
      icon: Zap,
      title: 'Énergie',
      subtitle: 'Électricité & renouvelable',
      description: 'Assurez la continuité de service sur vos réseaux et infrastructures énergétiques.',
      image: '/images/energy-plant.png',
      challenges: ['Continuité service', 'Conformité CRE', 'Intégration SCADA'],
      stats: { value: '99.9%', label: 'disponibilité' }
    },
    {
      id: 'eau-utilities',
      icon: Building,
      title: 'Eau & utilities',
      subtitle: 'Réseaux & traitement',
      description: 'Gestion de la maintenance pour les réseaux d\'eau et services publics.',
      image: '/images/water-treatment.png',
      challenges: ['Continuité service public', 'Réglementation eau', 'Réseau étendu'],
      stats: { value: '24/7', label: 'service' }
    },
    {
      id: 'oil-gas',
      icon: Fuel,
      title: 'Oil & Gas',
      subtitle: 'Pétrole, gaz & sites critiques',
      description: 'Maintenance des sites pétroliers, gaziers et installations critiques.',
      image: '/images/oil-gas-refinery.png',
      challenges: ['Sécurité ATEX', 'Sites isolés', 'Maintenance critique'],
      stats: { value: '100%', label: 'sécurité' }
    },
    {
      id: 'btp',
      icon: HardHat,
      title: 'BTP & construction',
      subtitle: 'Chantiers & équipements',
      description: 'Gérez efficacement votre flotte d\'engins de chantier et vos équipements.',
      image: '/images/construction-site.png',
      challenges: ['Engins multi-chantiers', 'Conformité VGP', 'Carnet numérique'],
      stats: { value: '-40%', label: 'pannes imprévues' }
    },
    {
      id: 'infrastructures',
      icon: Building2,
      title: 'Infrastructures publ.',
      subtitle: 'Routes, villes, équipements',
      description: 'Maintenance des infrastructures publiques et équipements urbains.',
      image: '/images/warehouse.png',
      challenges: ['Patrimoine étendu', 'Budgets limités', 'Service public'],
      stats: { value: '+30%', label: 'efficacité' }
    },
    {
      id: 'telecoms',
      icon: Server,
      title: 'Télécoms',
      subtitle: 'Réseaux & infrastructures',
      description: 'Maintenance des réseaux télécoms et infrastructures de données.',
      image: '/images/data-center.png',
      challenges: ['Disponibilité réseau', 'Sites distants', 'Technologies variées'],
      stats: { value: '99.99%', label: 'uptime' }
    }
  ]

  // SERVICES & EXPLOITATION
  const servicesSectors = [
    {
      id: 'logistique',
      icon: Truck,
      title: 'Logistique & transport',
      subtitle: 'Entrepôts & supply chain',
      description: 'Maintenance des centres logistiques, entrepôts et flottes de transport.',
      image: '/images/warehouse.png',
      challenges: ['Haute disponibilité', 'Flottes hétérogènes', 'Supply chain'],
      stats: { value: '99.5%', label: 'disponibilité' }
    },
    {
      id: 'immobilier',
      icon: Building2,
      title: 'Immobilier & bâtiments',
      subtitle: 'Gestion technique',
      description: 'Gestion technique et maintenance des bâtiments et patrimoines immobiliers.',
      image: '/images/warehouse.png',
      challenges: ['Multi-sites', 'Confort occupants', 'Efficacité énergétique'],
      stats: { value: '-20%', label: 'consommation' }
    },
    {
      id: 'hotellerie',
      icon: Building,
      title: 'Hôtellerie',
      subtitle: 'Hôtels & résidences',
      description: 'Maintenance des établissements hôteliers et résidences.',
      image: '/images/hospital-medical.png',
      challenges: ['Expérience client', 'Disponibilité 24/7', 'Multi-services'],
      stats: { value: '+35%', label: 'satisfaction' }
    },
    {
      id: 'sante',
      icon: Stethoscope,
      title: 'Santé',
      subtitle: 'Hôpitaux & cliniques',
      description: 'Assurez la conformité et la disponibilité de vos équipements biomédicaux.',
      image: '/images/hospital-medical.png',
      challenges: ['Zéro tolérance panne', 'Conformité HAS', 'Sécurité patient'],
      stats: { value: '100%', label: 'conformité HAS' }
    },
    {
      id: 'retail',
      icon: Building2,
      title: 'Retail & distribution',
      subtitle: 'Magasins & chaînes',
      description: 'Maintenance des réseaux de magasins et points de vente.',
      image: '/images/warehouse.png',
      challenges: ['Multi-points de vente', 'Expérience client', 'Équipements variés'],
      stats: { value: '-25%', label: 'réactifs' }
    },
    {
      id: 'services-techniques',
      icon: Factory,
      title: 'Services techniques',
      subtitle: 'Maintenance externalisée',
      description: 'Pour les prestataires de maintenance et services techniques.',
      image: '/images/team-technicians.png',
      challenges: ['Multi-clients', 'SLA stricts', 'Ressources optimisées'],
      stats: { value: '+40%', label: 'productivité' }
    }
  ]

  const currentSectors = {
    industrie: industrieSectors,
    energies: energiesSectors,
    services: servicesSectors
  }

  const tabDescriptions = {
    industrie: { title: 'Industrie & Production', desc: 'Solutions adaptées aux environnements industriels et de production' },
    energies: { title: 'Énergies & Infrastructures', desc: 'Maintenance des infrastructures critiques et réseaux' },
    services: { title: 'Services & Exploitation', desc: 'Accompagnement des secteurs de services et d\'exploitation' }
  }

  return (
    <main className="min-h-screen bg-[#FAFAF9] font-sans">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative pt-[90px] pb-16 overflow-hidden">
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
                <Globe className="w-4 h-4 text-[#F97316]" />
                <span className="text-sm font-semibold">18 secteurs couverts</span>
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
                <span className="text-sm font-semibold">18 Secteurs</span>
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
          {Object.keys(currentSectors).map((key) => {
            const sectors = currentSectors[key as keyof typeof currentSectors]
            const tabInfo = tabDescriptions[key as keyof typeof tabDescriptions]
            return (
              <TabPanel key={key} isActive={activeTab === key}>
                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-[#0C0A09] mb-2">{tabInfo.title}</h2>
                  <p className="text-[#64748b]">{tabInfo.desc}</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sectors.map((sector) => (
                    <div
                      key={sector.id}
                      id={sector.id}
                      className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-[#F97316]/30 hover:shadow-xl transition-all scroll-mt-40"
                    >
                      <Link
                        href={`/secteurs/${sector.id}`}
                        className="block no-underline"
                      >
                        <div className="aspect-[16/10] relative overflow-hidden">
                          <Image
                            src={sector.image}
                            alt={sector.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                          <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full">
                            <sector.icon className="w-4 h-4 text-[#F97316]" />
                            <span className="text-xs font-semibold text-[#0C0A09]">{sector.subtitle}</span>
                          </div>
                        </div>
                        <div className="p-5">
                          <h3 className="text-lg font-bold text-[#0C0A09] mb-2 group-hover:text-[#F97316] transition-colors">
                            {sector.title}
                          </h3>
                          <p className="text-sm text-[#64748b] mb-4 line-clamp-2">{sector.description}</p>
                          
                          {/* Challenges */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {sector.challenges.map((challenge, i) => (
                              <span key={i} className="text-xs px-2 py-1 bg-[#1E3A8A]/5 text-[#1E3A8A] rounded-full">
                                {challenge}
                              </span>
                            ))}
                          </div>
                          
                          {/* Stat */}
                          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                            <div className={`text-lg font-bold ${sector.stats.value.includes('-') ? 'text-[#059669]' : sector.stats.value.includes('+') ? 'text-[#F97316]' : 'text-[#1E3A8A]'}`}>
                              {sector.stats.value}
                            </div>
                            <div className="text-xs text-gray-500">{sector.stats.label}</div>
                            <ChevronRight className="w-4 h-4 text-[#F97316] group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </TabPanel>
            )
          })}
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#F97316] mb-3 block">Avantages</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0C0A09] mb-4">
              Pourquoi choisir MAINTEX pour votre secteur ?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#FAFAF9] rounded-2xl p-6 border border-gray-200">
              <div className="w-14 h-14 rounded-xl bg-[#1E3A8A]/10 flex items-center justify-center mb-4">
                <Shield className="w-7 h-7 text-[#1E3A8A]" />
              </div>
              <h3 className="text-lg font-bold text-[#0C0A09] mb-2">Conformité intégrée</h3>
              <p className="text-sm text-[#64748b]">Chaque secteur dispose de ses modules de conformité préconfigurés : HACCP, GMP, VGP, HAS, etc.</p>
            </div>
            
            <div className="bg-[#FAFAF9] rounded-2xl p-6 border border-gray-200">
              <div className="w-14 h-14 rounded-xl bg-[#F97316]/10 flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-[#F97316]" />
              </div>
              <h3 className="text-lg font-bold text-[#0C0A09] mb-2">Support expert</h3>
              <p className="text-sm text-[#64748b]">Nos consultants connaissent votre métier et vous accompagnent dans la mise en place de vos processus.</p>
            </div>
            
            <div className="bg-[#FAFAF9] rounded-2xl p-6 border border-gray-200">
              <div className="w-14 h-14 rounded-xl bg-[#059669]/10 flex items-center justify-center mb-4">
                <Clock className="w-7 h-7 text-[#059669]" />
              </div>
              <h3 className="text-lg font-bold text-[#0C0A09] mb-2">Déploiement rapide</h3>
              <p className="text-sm text-[#64748b]">En 14 jours, votre GMAO est opérationnelle avec vos configurations métier prêtes à l\'emploi.</p>
            </div>
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

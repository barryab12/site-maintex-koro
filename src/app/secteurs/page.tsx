'use client'

import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import Link from 'next/link'
import { 
  CheckCircle2, TrendingUp, 
  // Industrie icons
  Factory, Pickaxe, Car, FlaskConical, Wheat,
  // Energie icons
  Zap, Fuel, Building2, Building, Server,
  // Services icons
  Landmark, HardHat, Truck, Hotel, Stethoscope
} from 'lucide-react'

export default function SecteursPage() {
  const sectors = [
    // INDUSTRIE
    {
      id: 'manufacture',
      icon: Factory,
      category: 'Industrie',
      title: 'Industrie Manufacturière',
      description: 'Optimisez la disponibilité de vos lignes de production et réduisez les temps d\'arrêt.',
      features: [
        'Gestion des lignes de production et équipements',
        'Plans de maintenance préventive par machine',
        'Traçabilité complète des pièces détachées',
        'Indicateurs MTTR, MTBF, OEE en temps réel',
        'Gestion des habilitations et certifications',
        'Conformité ICPE et réglementations industrielles'
      ],
      stat: '–38% de temps d\'arrêt non planifié',
      statDetail: 'Clients industrie — N=62',
      image: '/images/industrial-maintenance.png',
      dark: false
    },
    {
      id: 'mines',
      icon: Pickaxe,
      category: 'Industrie',
      title: 'Mines & Carrières',
      description: 'Optimisez la disponibilité de vos engins et équipements miniers dans des conditions extrêmes.',
      features: [
        'Gestion des engins miniers (pelles, dumpers, chargeurs)',
        'Maintenance prédictive des équipements critiques',
        'Gestion des pièces de rechange et consommables',
        'Suivi des heures de fonctionnement et compteurs',
        'Conformité réglementaire et sécurité minière',
        'Rapports de disponibilité et performance engins'
      ],
      stat: '+25% disponibilité des engins',
      statDetail: 'Clients mines',
      image: '/images/energy-utilities.png',
      dark: true
    },
    {
      id: 'automobile',
      icon: Car,
      category: 'Industrie',
      title: 'Industrie Automobile',
      description: 'Gérez la maintenance de vos chaînes d\'assemblage et équipements de production automobile.',
      features: [
        'Gestion des chaînes d\'assemblage',
        'Maintenance des robots industriels',
        'Suivi des outillages spécifiques',
        'Contrôle qualité intégré',
        'Traçabilité complète des interventions',
        'Conformité normes automotive (IATF 16949)'
      ],
      stat: '99.2% OEE sur lignes critiques',
      statDetail: 'Clients automobile',
      image: '/images/factory-industry.png',
      dark: false
    },
    {
      id: 'chimie',
      icon: FlaskConical,
      category: 'Industrie',
      title: 'Industrie Chimique',
      description: 'Assurez la sécurité et la conformité de vos installations chimiques.',
      features: [
        'Gestion des équipements sous pression',
        'Plans de maintenance Séveso',
        'Traçabilité des interventions ATEX',
        'Gestion des EPI et habilitations',
        'Conformité REACH et ICPE',
        'Intégration systèmes DCS/SCADA'
      ],
      stat: '0 incident majeur',
      statDetail: 'Sites chimiques clients',
      image: '/images/industrial-maintenance.png',
      dark: true
    },
    {
      id: 'agroali',
      icon: Wheat,
      category: 'Industrie',
      title: 'Agroalimentaire',
      description: 'Maintenez vos lignes dans la conformité HACCP et ISO 22000.',
      features: [
        'Plans HACCP intégrés dans les OT de maintenance',
        'Gestion nettoyage et désinfection (CIP/SIP)',
        'Traçabilité fournisseurs et pièces alimentaires',
        'Alertes hygiène et températures critiques',
        'Conformité IFS, BRC, ISO 22000',
        'Exports pour audits certification qualité'
      ],
      stat: '+44% de taux de réalisation préventif',
      statDetail: 'Clients IAA',
      image: '/images/factory-industry.png',
      dark: false
    },
    // ENERGIE & UTILITIES
    {
      id: 'energie',
      icon: Zap,
      category: 'Énergie & Utilities',
      title: 'Énergie',
      description: 'Assurez la continuité de service sur vos réseaux et infrastructures énergétiques.',
      features: [
        'Maintenance préventive des réseaux',
        'Conformité réglementaire CRE automatisée',
        'Gestion des interventions d\'urgence',
        'Traçabilité complète des opérations',
        'Rapports réglementaires automatisés',
        'Intégration SCADA et systèmes de contrôle'
      ],
      stat: '99.9% disponibilité réseau',
      statDetail: 'Clients énergie',
      image: '/images/energy-utilities.png',
      dark: true
    },
    {
      id: 'petrole',
      icon: Fuel,
      category: 'Énergie & Utilities',
      title: 'Pétrole & Gaz',
      description: 'Optimisez la maintenance de vos installations d\'exploration et de raffinage.',
      features: [
        'Gestion des équipements critiques (compresseurs, pompes)',
        'Maintenance prédictive des installations offshore',
        'Conformité ATEX et safety',
        'Gestion des arrêts de raffinerie',
        'Traçabilité des inspections réglementaires',
        'Intégration systèmes de contrôle (DCS, SIS)'
      ],
      stat: '–45% temps d\'arrêt planifié',
      statDetail: 'Sites pétroliers',
      image: '/images/energy-utilities.png',
      dark: false
    },
    {
      id: 'facilities',
      icon: Building2,
      category: 'Énergie & Utilities',
      title: 'Facility Management',
      description: 'Gérez efficacement la maintenance technique de vos bâtiments tertiaires.',
      features: [
        'Gestion multi-technique (CVC, électricité, plomberie)',
        'Helpdesk et tickets de demande',
        'Gestion des contrats de maintenance',
        'Contrôle technique réglementaire',
        'Gestion énergétique et indicateurs',
        'Applications mobiles pour équipes terrain'
      ],
      stat: '–30% coûts de maintenance',
      statDetail: 'Facilities clients',
      image: '/images/team-technicians.png',
      dark: true
    },
    {
      id: 'immobilier',
      icon: Building,
      category: 'Énergie & Utilities',
      title: 'Immobilier & Patrimoine',
      description: 'Valorisez votre patrimoine immobilier avec une maintenance optimisée.',
      features: [
        'Gestion du patrimoine immobilier',
        'Carnet numérique d\'entretien',
        'Suivi des travaux et rénovations',
        'Gestion des locataires et interventions',
        'Conformité réglementaire (amiante, légionelle)',
        'Reporting pour copropriétés et investisseurs'
      ],
      stat: '120+ immeubles gérés',
      statDetail: 'Clients immobiliers',
      image: '/images/team-technicians.png',
      dark: false
    },
    {
      id: 'datacenters',
      icon: Server,
      category: 'Énergie & Utilities',
      title: 'Data Centers',
      description: 'Assurez la disponibilité maximale de vos infrastructures critiques.',
      features: [
        'Gestion des infrastructures critiques',
        'Maintenance préventive des UPS et générateurs',
        'Surveillance des systèmes de refroidissement',
        'Conformité Tier III/IV',
        'Gestion des interventions 24/7',
        'SLA et reporting disponibilité'
      ],
      stat: '99.999% disponibilité',
      statDetail: 'Data centers clients',
      image: '/images/gmao-dashboard.png',
      dark: true
    },
    // SERVICES & AUTRES
    {
      id: 'institutions',
      icon: Landmark,
      category: 'Services & Autres',
      title: 'Institutions & Secteur Public',
      description: 'Modernisez la gestion de maintenance de vos bâtiments et équipements publics.',
      features: [
        'Gestion du patrimoine immobilier public',
        'Maintenance des équipements administratifs',
        'Conformité réglementaire et marchés publics',
        'Gestion multi-sites et multi-services',
        'Traçabilité pour contrôles et audits',
        'Reporting pour directions et élus'
      ],
      stat: '25 sites gérés centralement',
      statDetail: 'Collectivités territoriales',
      image: '/images/team-technicians.png',
      dark: false
    },
    {
      id: 'btp',
      icon: HardHat,
      category: 'Services & Autres',
      title: 'BTP & Construction',
      description: 'Gérez efficacement votre flotte d\'engins de chantier et vos équipements.',
      features: [
        'Gestion des engins de chantier (grues, pelles, bouteurs)',
        'Carnet d\'entretien numérique réglementaire',
        'Suivi des contrôles techniques obligatoires',
        'Gestion des parcs et locations',
        'Traçabilité des interventions et réparations',
        'Conformité sécurité et VGP'
      ],
      stat: '–40% pannes imprévues',
      statDetail: 'Clients BTP',
      image: '/images/industrial-maintenance.png',
      dark: true
    },
    {
      id: 'logistique',
      icon: Truck,
      category: 'Services & Autres',
      title: 'Logistique & Transport',
      description: 'Optimisez la disponibilité de votre flotte et de vos équipements logistiques.',
      features: [
        'Carnet d\'entretien numérique réglementaire',
        'Gestion de flotte et véhicules',
        'Traçabilité des interventions obligatoires',
        'Alertes contrôles techniques et réglementaires',
        'Gestion des pièces et consommables',
        'Maintenance des équipements d\'entrepôt'
      ],
      stat: '–50% pannes imprévues',
      statDetail: 'Clients transport',
      image: '/images/mobile-maintenance.png',
      dark: false
    },
    {
      id: 'hotellerie',
      icon: Hotel,
      category: 'Services & Autres',
      title: 'Hôtellerie & Tourisme',
      description: 'Garantissez le confort de vos clients avec une maintenance réactive et discrète.',
      features: [
        'Maintenance des équipements chambres et parties communes',
        'Gestion des interventions discrètes et rapides',
        'Suivi des équipements (climatisation, ascenseurs, piscines)',
        'Alertes et tickets mobiles pour équipes',
        'Conformité sécurité et réglementaire',
        'Reporting qualité et satisfaction client'
      ],
      stat: '98% satisfaction client',
      statDetail: 'Clients hôtellerie',
      image: '/images/team-technicians.png',
      dark: true
    },
    {
      id: 'sante',
      icon: Stethoscope,
      category: 'Services & Autres',
      title: 'Santé & Biomédical',
      description: 'Assurez la conformité et la disponibilité de vos équipements biomédicaux.',
      features: [
        'Gestion du parc biomédical',
        'Plans de maintenance conformes HAS',
        'Traçabilité des contrôles et métrologie',
        'Gestion des contrats de maintenance',
        'Conformité normes NF EN ISO 13485',
        'Reporting pour inspections et audits'
      ],
      stat: '100% conformité HAS',
      statDetail: 'Établissements de santé',
      image: '/images/healthcare-biomedical.png',
      dark: false
    }
  ]

  const categories = [
    { name: 'Industrie', count: 5 },
    { name: 'Énergie & Utilities', count: 5 },
    { name: 'Services & Autres', count: 5 }
  ]

  return (
    <main className="min-h-screen bg-white font-sans">
      <SiteHeader />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center pt-[70px] pb-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#e2e8f0_1px,transparent_0)] bg-[size:40px_40px] opacity-50" />

        <div className="relative z-10 max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A0A8A]/10 border border-[#0A0A8A]/20 text-[#0A0A8A] mb-6">
            <Factory className="w-4 h-4" />
            <span className="text-xs font-medium">15 secteurs couverts</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.06] tracking-tight mb-6 max-w-3xl">
            Votre secteur.<br />
            <span className="text-[#0A0A8A]">
              Nos solutions.
            </span>
          </h1>
          <p className="text-lg text-gray-600 font-normal max-w-xl">
            Chaque secteur a ses contraintes réglementaires. MAINTEX est préconfiguré pour chacun d&apos;eux.
          </p>
        </div>
      </section>

      {/* Categories Overview */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#0A0A8A] transition-all shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-[#0A0A8A]/10 flex items-center justify-center mb-4">
                  <span className="text-[#0A0A8A] font-bold text-sm">{cat.count}</span>
                </div>
                <h3 className="font-bold text-gray-900">{cat.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap justify-center gap-2">
            {sectors.map((s) => (
              <Link
                key={s.id}
                href={`#${s.id}`}
                className="flex items-center gap-2 px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-600 hover:border-[#0A0A8A] hover:text-[#0A0A8A] transition-all no-underline"
              >
                <div className="w-5 h-5 rounded bg-[#0A0A8A]/10 flex items-center justify-center">
                  <s.icon className="w-3 h-3 text-[#0A0A8A]" />
                </div>
                {s.title.split(' ')[0]}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sector Sections */}
      {sectors.map((sector, index) => (
        <section
          key={sector.id}
          id={sector.id}
          className={`py-24 ${sector.dark ? 'bg-gray-50' : 'bg-white'}`}
        >
          <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="w-16 h-16 rounded-2xl bg-[#0A0A8A]/10 flex items-center justify-center mb-6">
                  <sector.icon className="w-8 h-8 text-[#0A0A8A]" />
                </div>
                <div className="text-[11px] uppercase tracking-wider font-semibold mb-4 text-[#0A0A8A]">
                  {sector.category} • Secteur {(index % 5) + 1}/{Math.ceil(sectors.length / 3)}
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6 text-gray-900">
                  {sector.title}
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {sector.description}
                </p>

                <div className="rounded-2xl p-6 mb-8 bg-white border border-gray-200 shadow-sm">
                  <ul className="space-y-3">
                    {sector.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-600">
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#0A0A8A]" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl p-5 mb-8 flex items-center gap-4 bg-[#0A0A8A]/5 border border-[#0A0A8A]/20">
                  <div className="w-10 h-10 rounded-lg bg-[#0A0A8A]/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-[#0A0A8A]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#0A0A8A]">{sector.stat}</div>
                    <div className="text-sm text-gray-500">{sector.statDetail}</div>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all no-underline bg-[#0A0A8A] text-white hover:bg-[#0A0A8A]/90"
                >
                  Voir la solution →
                </Link>
              </div>

              <div className={`rounded-2xl overflow-hidden border border-gray-200 shadow-lg ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <img
                  src={sector.image}
                  alt={sector.title}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Band */}
      <section className="py-20 bg-[#0A0A8A] relative overflow-hidden">
        <div className="relative z-10 max-w-[1240px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-6">
            Votre secteur n&apos;est pas listé ?
          </h2>
          <p className="text-lg text-white/70 font-normal max-w-xl mx-auto mb-10">
            MAINTEX s&apos;adapte à tous les secteurs. Contactez-nous pour discuter de vos besoins spécifiques.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-[#0A0A8A] bg-white rounded-lg hover:bg-white/90 transition-all no-underline">
            Contactez-nous →
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}

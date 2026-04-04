'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Menu, X, ChevronDown, 
  // Fonctionnalités icons
  ClipboardList, RefreshCw, Brain, Cpu, Calendar,
  Settings, Heart, Package, Users, FolderKanban,
  Smartphone, BarChart3, Link2, FileText, ShieldCheck,
  // Secteurs icons
  Factory, Pickaxe, Car, FlaskConical, Wheat,
  Zap, Fuel, Building2, Building, Server,
  Landmark, HardHat, Truck, Hotel, Stethoscope,
  // Ressources icons
  BookOpen, Video, GraduationCap, HelpCircle, Rss,
  Calculator, FileCode, LayoutTemplate, FileText as FileTextIcon,
  Star, Users as UsersIcon, Play, MessageSquare, Rocket,
  // À propos icons
  Building2 as Building2Icon, Target, History, Users2,
  Lock, Award, MapPin, Handshake, UserPlus, GraduationCap as GraduationCapIcon, Newspaper, Mail
} from 'lucide-react'

// Types
type MegaMenuItem = {
  icon?: React.ComponentType<{ className?: string }>
  iconColor?: string
  label: string
  href: string
  description?: string
}

type MegaMenuColumn = {
  title: string
  items: MegaMenuItem[]
}

type MenuItem = {
  label: string
  href: string
  megaMenu?: MegaMenuColumn[]
}

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  const menuItems: MenuItem[] = [
    {
      label: 'À propos',
      href: '/a-propos',
      megaMenu: [
        {
          title: "L'Entreprise",
          items: [
            { icon: Building2Icon, iconColor: 'from-blue-500 to-cyan-500', label: 'Qui sommes-nous', href: '/a-propos#qui-sommes-nous', description: 'Découvrir BBC & Partners' },
            { icon: Target, iconColor: 'from-purple-500 to-pink-500', label: 'BBC & Partners', href: '/a-propos#bbc-partners', description: 'Notre cabinet de conseil' },
            { icon: History, iconColor: 'from-amber-500 to-orange-500', label: 'Histoire', href: '/a-propos#histoire', description: 'Plus de 15 ans d\'expertise' },
            { icon: Users2, iconColor: 'from-green-500 to-emerald-500', label: 'Mission', href: '/a-propos#mission', description: 'Notre vision' },
            { icon: Users, iconColor: 'from-rose-500 to-pink-500', label: 'Équipe', href: '/a-propos#equipe', description: 'Nos experts' },
          ]
        },
        {
          title: 'Engagements',
          items: [
            { icon: Lock, iconColor: 'from-slate-500 to-gray-600', label: 'Sécurité & RGPD', href: '/a-propos#securite', description: 'Protection des données' },
            { icon: Award, iconColor: 'from-yellow-500 to-amber-500', label: 'Certifications', href: '/a-propos#certifications', description: 'Nos accréditations' },
            { icon: MapPin, iconColor: 'from-indigo-500 to-blue-500', label: 'Données en France', href: '/a-propos#donnees', description: 'Hébergement local' },
          ]
        },
        {
          title: 'Partenariats',
          items: [
            { icon: Handshake, iconColor: 'from-teal-500 to-cyan-500', label: 'Intégrateurs', href: '/partenaires#integrateurs', description: 'Notre réseau' },
            { icon: UserPlus, iconColor: 'from-violet-500 to-purple-500', label: 'Devenir partenaire', href: '/partenaires', description: 'Rejoignez-nous' },
            { icon: GraduationCapIcon, iconColor: 'from-emerald-500 to-teal-500', label: 'Éducation', href: '/education', description: 'Offre académique' },
            { icon: Newspaper, iconColor: 'from-orange-500 to-red-500', label: 'Presse', href: '/a-propos#presse', description: 'Nos actualités' },
            { icon: Mail, iconColor: 'from-blue-500 to-indigo-500', label: 'Contact', href: '/contact', description: 'Nous contacter' },
          ]
        }
      ]
    },
    {
      label: 'Fonctionnalités',
      href: '/fonctionnalites',
      megaMenu: [
        {
          title: 'Gestion Maintenance',
          items: [
            { icon: ClipboardList, iconColor: 'from-blue-500 to-cyan-500', label: 'Ordres de travail', href: '/fonctionnalites#ot', description: 'Créer, assigner, suivre' },
            { icon: RefreshCw, iconColor: 'from-green-500 to-emerald-500', label: 'Maintenance préventive', href: '/fonctionnalites#preventif', description: 'Planification automatique' },
            { icon: Brain, iconColor: 'from-purple-500 to-pink-500', label: 'Prédictive (IA/IoT)', href: '/fonctionnalites#predictive', description: 'Anticipez les pannes' },
            { icon: Cpu, iconColor: 'from-amber-500 to-orange-500', label: 'Demandes', href: '/fonctionnalites#demandes', description: 'Portail demandeurs' },
            { icon: Calendar, iconColor: 'from-teal-500 to-cyan-500', label: 'Planification', href: '/fonctionnalites#planification', description: 'Calendrier intelligent' },
          ]
        },
        {
          title: 'Gestion des Actifs',
          items: [
            { icon: Settings, iconColor: 'from-slate-500 to-gray-600', label: 'Équipements', href: '/fonctionnalites#equipements', description: 'Parc et nomenclature' },
            { icon: Heart, iconColor: 'from-rose-500 to-pink-500', label: 'Fonctions Vitales', href: '/fonctionnalites#vitaux', description: 'Nouveau module' },
            { icon: Package, iconColor: 'from-violet-500 to-purple-500', label: 'Stocks', href: '/fonctionnalites#stocks', description: 'Inventaire temps réel' },
            { icon: Users, iconColor: 'from-indigo-500 to-blue-500', label: 'Fournisseurs', href: '/fonctionnalites#fournisseurs', description: 'Gestion des achats' },
            { icon: FolderKanban, iconColor: 'from-amber-500 to-yellow-500', label: 'Projets & Budgets', href: '/fonctionnalites#budget', description: 'Suivi financier' },
          ]
        },
        {
          title: 'Outils & Analyse',
          items: [
            { icon: Smartphone, iconColor: 'from-cyan-500 to-blue-500', label: 'Application mobile', href: '/fonctionnalites#mobile', description: 'iOS & Android' },
            { icon: BarChart3, iconColor: 'from-indigo-500 to-violet-500', label: 'Tableaux de bord', href: '/fonctionnalites#dashboard', description: 'KPI temps réel' },
            { icon: Link2, iconColor: 'from-emerald-500 to-teal-500', label: 'Intégrations ERP', href: '/fonctionnalites#integrations', description: 'SAP, Sage, Odoo...' },
            { icon: FileText, iconColor: 'from-orange-500 to-red-500', label: 'Documents', href: '/fonctionnalites#documents', description: 'Gestion documentaire' },
            { icon: ShieldCheck, iconColor: 'from-green-500 to-lime-500', label: 'Conformité', href: '/fonctionnalites#conformite', description: 'Audits & traçabilité' },
          ]
        }
      ]
    },
    {
      label: 'Secteurs',
      href: '/secteurs',
      megaMenu: [
        {
          title: 'Industrie',
          items: [
            { icon: Factory, iconColor: 'from-slate-500 to-gray-600', label: 'Manufacturière', href: '/secteurs#manufacture', description: 'Production industrielle' },
            { icon: Pickaxe, iconColor: 'from-amber-500 to-yellow-500', label: 'Mines', href: '/secteurs#mines', description: 'Extraction & carrières' },
            { icon: Car, iconColor: 'from-blue-500 to-indigo-500', label: 'Automobile', href: '/secteurs#automobile', description: 'Industrie auto' },
            { icon: FlaskConical, iconColor: 'from-purple-500 to-pink-500', label: 'Chimie', href: '/secteurs#chimie', description: 'Industrie chimique' },
            { icon: Wheat, iconColor: 'from-green-500 to-lime-500', label: 'Agroalimentaire', href: '/secteurs#agroali', description: 'IAA & HACCP' },
          ]
        },
        {
          title: 'Énergie & Utilities',
          items: [
            { icon: Zap, iconColor: 'from-yellow-500 to-orange-500', label: 'Énergie', href: '/secteurs#energie', description: 'Production & distribution' },
            { icon: Fuel, iconColor: 'from-slate-600 to-gray-700', label: 'Pétrole & gaz', href: '/secteurs#petrole', description: 'Exploration & raffinage' },
            { icon: Building2, iconColor: 'from-cyan-500 to-blue-500', label: 'Facilities', href: '/secteurs#facilities', description: 'Gestion technique' },
            { icon: Building, iconColor: 'from-indigo-500 to-purple-500', label: 'Immobilier', href: '/secteurs#immobilier', description: 'Gestion patrimoine' },
            { icon: Server, iconColor: 'from-blue-500 to-cyan-500', label: 'Data centers', href: '/secteurs#datacenters', description: 'Infrastructure IT' },
          ]
        },
        {
          title: 'Services & Autres',
          items: [
            { icon: Landmark, iconColor: 'from-blue-500 to-indigo-500', label: 'Institutions', href: '/secteurs#institutions', description: 'Secteur public' },
            { icon: HardHat, iconColor: 'from-orange-500 to-red-500', label: 'BTP', href: '/secteurs#btp', description: 'Construction' },
            { icon: Truck, iconColor: 'from-teal-500 to-cyan-500', label: 'Logistique', href: '/secteurs#logistique', description: 'Transport & entrepôts' },
            { icon: Hotel, iconColor: 'from-rose-500 to-pink-500', label: 'Hôtellerie', href: '/secteurs#hotellerie', description: 'Tourisme & hospitality' },
            { icon: Stethoscope, iconColor: 'from-emerald-500 to-green-500', label: 'Santé', href: '/secteurs#sante', description: 'Biomédical' },
          ]
        }
      ]
    },
    { label: 'Tarifs', href: '/tarifs' },
    {
      label: 'Ressources',
      href: '/ressources',
      megaMenu: [
        {
          title: 'Apprendre',
          items: [
            { icon: BookOpen, iconColor: 'from-blue-500 to-cyan-500', label: 'Centre de ressources', href: '/ressources', description: 'Articles et guides' },
            { icon: Video, iconColor: 'from-purple-500 to-pink-500', label: 'Webinaires', href: '/ressources#webinaires', description: 'Sessions en ligne' },
            { icon: GraduationCap, iconColor: 'from-emerald-500 to-teal-500', label: 'Académie', href: '/education', description: 'Formations' },
            { icon: HelpCircle, iconColor: 'from-amber-500 to-orange-500', label: 'Centre d\'aide', href: '/ressources#aide', description: 'FAQ et support' },
            { icon: Rss, iconColor: 'from-rose-500 to-pink-500', label: 'Blog', href: '/ressources#blog', description: 'Actualités' },
          ]
        },
        {
          title: 'Outils',
          items: [
            { icon: Calculator, iconColor: 'from-green-500 to-lime-500', label: 'Calculateur ROI', href: '/ressources#roi', description: 'Estimez vos gains' },
            { icon: FileCode, iconColor: 'from-indigo-500 to-violet-500', label: 'Documentation API', href: '/ressources#api', description: 'Intégration technique' },
            { icon: LayoutTemplate, iconColor: 'from-slate-500 to-gray-600', label: 'Templates', href: '/ressources#templates', description: 'Modèles prêts à l\'emploi' },
            { icon: FileTextIcon, iconColor: 'from-cyan-500 to-blue-500', label: 'Livres blancs', href: '/ressources#livres-blancs', description: 'Guides experts' },
          ]
        },
        {
          title: 'Nouveautés',
          items: [
            { icon: Rocket, iconColor: 'from-purple-500 to-indigo-500', label: 'Feuille de route', href: '/feuille-de-route', description: 'Fonctionnalités à venir' },
            { icon: Star, iconColor: 'from-yellow-500 to-amber-500', label: 'Études de cas', href: '/clients#etudes', description: 'Success stories' },
            { icon: UsersIcon, iconColor: 'from-teal-500 to-cyan-500', label: 'Clients par secteur', href: '/clients', description: 'Références' },
            { icon: Play, iconColor: 'from-rose-500 to-pink-500', label: 'Vidéos', href: '/ressources#videos', description: 'Témoignages vidéo' },
          ]
        }
      ]
    },
    { label: 'Contact', href: '/contact' },
  ]

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10 h-[70px] flex items-center gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <img
            src="/upload/logo-maintex.png"
            alt="MAINTEX"
            className="h-8"
          />
        </Link>

        {/* Right side: Menu + CTA */}
        <div className="flex items-center gap-4 ml-auto">
          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center list-none m-0 p-0">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="relative"
              onMouseEnter={() => item.megaMenu && setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={item.href}
                className={`flex items-center gap-1 px-3 py-2 text-[13px] transition-all no-underline ${
                  isActive(item.href)
                    ? 'text-[#0A0A8A] font-medium'
                    : 'text-gray-600 hover:text-[#0A0A8A]'
                }`}
              >
                {item.label}
                {item.megaMenu && <ChevronDown className="w-3 h-3 opacity-50" />}
              </Link>

              {/* Mega Menu */}
              {item.megaMenu && activeDropdown === item.label && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-[100]">
                  {/* Invisible bridge to prevent mouse leave */}
                  <div className="absolute -top-1 left-0 right-0 h-4" />
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-xl min-w-[720px]">
                    <div className="grid grid-cols-3 gap-6">
                    {item.megaMenu.map((column, colIndex) => (
                      <div key={colIndex}>
                        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 pb-2 border-b border-gray-100">
                          {column.title}
                        </h3>
                        <div className="space-y-1">
                          {column.items.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subItem.href}
                              className="flex items-start gap-3 px-3 py-2 -mx-3 text-sm text-gray-600 hover:text-[#0A0A8A] hover:bg-gray-50 rounded-lg transition-all no-underline group"
                            >
                              {subItem.icon && (
                                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#0A0A8A]/10 transition-colors">
                                  <subItem.icon className="w-4 h-4 text-[#0A0A8A]" />
                                </div>
                              )}
                              <div className="flex-1 min-w-0">
                                <div className="font-medium text-gray-800 group-hover:text-[#0A0A8A]">{subItem.label}</div>
                                {subItem.description && (
                                  <div className="text-xs text-gray-400 mt-0.5">{subItem.description}</div>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Bottom CTA */}
                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs text-gray-400">
                      {item.label === 'Fonctionnalités' && 'Découvrez toutes nos fonctionnalités'}
                      {item.label === 'Secteurs' && 'MAINTEX s\'adapte à votre secteur'}
                      {item.label === 'Ressources' && 'Tout ce dont vous avez besoin'}
                      {item.label === 'À propos' && 'En savoir plus sur BBC & Partners'}
                    </span>
                    <Link
                      href={item.href}
                      className="text-xs font-medium text-[#0A0A8A] hover:text-[#0A0A8A]/70 transition-colors no-underline"
                    >
                      Voir tout →
                    </Link>
                  </div>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/connexion"
              className="px-4 py-2 text-[13px] text-gray-600 border border-gray-300 rounded-md hover:border-[#0A0A8A] hover:text-[#0A0A8A] transition-all no-underline"
            >
              Se connecter
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2 text-[13px] font-medium text-white bg-[#0A0A8A] rounded-md hover:bg-[#0A0A8A]/90 transition-all no-underline"
            >
              Démo gratuite →
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-gray-600 ml-auto"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 p-6">
          <div className="flex flex-col gap-2">
            {menuItems.map((item, index) => (
              <div key={index}>
                <Link
                  href={item.href}
                  className={`py-2 no-underline block ${
                    isActive(item.href) ? 'text-[#0A0A8A] font-medium' : 'text-gray-600 hover:text-[#0A0A8A]'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.megaMenu && (
                  <div className="pl-4 mt-2 space-y-2">
                    {item.megaMenu.map((column, colIndex) => (
                      <div key={colIndex}>
                        <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider py-1">
                          {column.title}
                        </div>
                        {column.items.slice(0, 3).map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.href}
                            className="py-1 text-sm text-gray-500 hover:text-[#0A0A8A] no-underline block"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <hr className="border-gray-200 my-4" />
            <Link
              href="/contact"
              className="w-full py-3 text-center bg-[#0A0A8A] hover:bg-[#0A0A8A]/90 text-white rounded-lg no-underline"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Démo gratuite →
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

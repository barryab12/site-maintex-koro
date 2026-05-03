'use client'

import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { 
  Zap, Shield, Server, CheckCircle2, ChevronRight, ArrowRight,
  Factory, Pickaxe, Stethoscope, HardHat, Wheat, Truck,
  Globe, Users, TrendingUp, Clock, Star, MapPin, BadgeCheck,
  Activity, Brain, Heart, Smartphone, BarChart3, Settings,
  ArrowUpRight, Gauge, DollarSign, PieChart, Target, TrendingDown
} from 'lucide-react'
import { 
  TabletMockup, MobileMockup, GMAODashboardMockup, MobileTaskListMockup,
  KPICard, StatsOverlay, MiniBarChart, MiniLineChart, DonutChart, MetricGrid, ProgressBar
} from '@/components/data-visualization'

export default function HomePage() {
  const features = [
    { number: '01', title: 'Ordres de travail intelligents', desc: 'Créez, assignez et suivez chaque intervention en temps réel.', icon: Zap, color: '#F97316' },
    { number: '02', title: 'Maintenance préventive', desc: 'Planifiez vos révisions par fréquence calendaire ou compteur.', icon: Clock, color: '#059669' },
    { number: '03', title: 'Fonctions Vitales', desc: 'Surveillez la disponibilité de vos fonctions critiques en temps réel.', icon: Heart, color: '#DC2626', highlight: true },
    { number: '04', title: 'Projets & Budgets', desc: 'Pilotez vos projets et suivez vos budgets avec alertes automatiques.', icon: BarChart3, color: '#7C3AED', highlight: true },
    { number: '05', title: 'Gestion pièces & inventaire', desc: 'Stock en temps réel, seuils d\'alerte, consommation par équipement.', icon: Settings, color: '#0891B2' },
    { number: '06', title: 'Application mobile', desc: 'L\'appli Maintex fonctionne partout, même sans connexion.', icon: Smartphone, color: '#1E3A8A' },
  ]

  const testimonials = [
    {
      quote: "Depuis MAINTEX, notre First Time Fix Rate est passé de 65% à 89%. Les techniciens ont toutes les infos dès le premier déplacement.",
      author: "Marc D.",
      role: "Responsable Maintenance",
      company: "Groupe industriel (France)",
      result: "+24% First Time Fix Rate"
    },
    {
      quote: "Nous avons réduit nos temps d'arrêt de 42% en 6 mois. Le module de maintenance prédictive est un game-changer.",
      author: "Fatou D.",
      role: "Directrice Technique",
      company: "Agroalimentaire (Burkina Faso)",
      result: "-42% temps d'arrêt"
    },
    {
      quote: "Le diagnostic IA nous fait gagner 3 heures par intervention en moyenne. L'investissement est rentabilisé en 4 mois.",
      author: "Jean-Pierre M.",
      role: "Chef de Service Maintenance",
      company: "Énergie (Côte d'Ivoire)",
      result: "ROI en 4 mois"
    }
  ]

  const sectors = [
    { icon: Factory, name: 'Industrie', href: '/secteurs/industrie' },
    { icon: Pickaxe, name: 'Mines', href: '/secteurs/mines-carrieres' },
    { icon: Stethoscope, name: 'Santé', href: '/secteurs/sante' },
    { icon: HardHat, name: 'BTP', href: '/secteurs' },
    { icon: Wheat, name: 'Agroalimentaire', href: '/secteurs/agroalimentaire' },
    { icon: Truck, name: 'Logistique', href: '/secteurs' },
  ]

  // Data for charts
  const availabilityData = [92, 94, 91, 96, 98, 97, 99, 98, 99, 98, 99, 98]
  const monthlyData = [
    { value: 85, label: 'Jan', color: '#1E3A8A' },
    { value: 92, label: 'Fév', color: '#1E3A8A' },
    { value: 78, label: 'Mar', color: '#F97316' },
    { value: 95, label: 'Avr', color: '#1E3A8A' },
    { value: 88, label: 'Mai', color: '#1E3A8A' },
    { value: 102, label: 'Jun', color: '#059669' },
  ]

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <SiteHeader />

      {/* Hero Section with Data Visualization */}
      <section className="relative min-h-[90vh] flex items-center pt-[70px] pb-20 bg-gradient-to-br from-[#FAFAF9] via-white to-[#F97316]/5 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#e2e8f0_1px,transparent_0)] bg-[size:40px_40px] opacity-50" />
        
        {/* Decorative Blobs */}
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-[#F97316]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#1E3A8A]/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F97316]/10 border border-[#F97316]/20 text-[#1E3A8A] mb-6">
                <MapPin className="w-4 h-4 text-[#F97316]" />
                <span className="text-sm font-semibold">De Marseille à Abidjan — 350+ clients en 15 pays</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0C0A09] leading-tight tracking-tight mb-6">
                Votre maintenance reprend<br />
                <span className="text-[#1E3A8A]">le pouvoir sur le terrain.</span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg text-[#44403C] max-w-xl mb-6 leading-relaxed">
                MAINTEX est la GMAO mobile-first pensée pour les industries francophones — usines, BTP, énergie, santé.
              </p>

              {/* Key Benefits */}
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { icon: Server, text: 'Hébergée en France' },
                  { icon: Smartphone, text: 'Opérationnelle hors-ligne' },
                  { icon: Clock, text: 'Déployée en 14 jours' },
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-[#44403C]">
                    <benefit.icon className="w-4 h-4 text-[#F97316]" />
                    {benefit.text}
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-10">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#F97316] text-white font-semibold rounded-xl hover:bg-[#EA580C] transition-all shadow-lg shadow-[#F97316]/25 no-underline"
                >
                  Demander une démo gratuite
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <Link 
                  href="/clients" 
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#1E3A8A]/20 text-[#1E3A8A] font-semibold rounded-xl hover:border-[#1E3A8A] transition-all no-underline"
                >
                  Voir un cas client
                </Link>
              </div>

              {/* Quick Stats Row */}
              <div className="flex flex-wrap gap-6">
                {[
                  { value: '350+', label: 'Clients' },
                  { value: '15', label: 'Pays' },
                  { value: '-30%', label: 'Arrêts' },
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="text-2xl font-bold text-[#F97316]">{stat.value}</div>
                    <div className="text-sm text-[#64748b]">{stat.label}</div>
                  </div>
                ))}
                <div className="flex items-center gap-2 px-3 py-1.5 bg-[#1E3A8A] text-white rounded-full text-sm">
                  <span>🇫🇷</span>
                  <span>Support francophone</span>
                </div>
              </div>
            </div>

            {/* Dashboard Mockup with KPI Cards */}
            <div className="hidden lg:block relative">
              {/* Main Tablet */}
              <div className="relative z-10">
                <TabletMockup className="w-[340px] mx-auto">
                  <div className="h-full bg-gradient-to-br from-[#FAFAF9] to-white p-4">
                    {/* Dashboard Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-[#1E3A8A] rounded-lg flex items-center justify-center">
                          <Zap className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-bold text-gray-900 text-sm">MAINTEX</span>
                      </div>
                      <div className="text-xs text-gray-500">Tableau de bord</div>
                    </div>

                    {/* KPI Cards Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-white p-3 rounded-xl shadow-md border border-gray-100">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-6 h-6 rounded-lg bg-[#059669]/10 flex items-center justify-center">
                            <TrendingUp className="w-3 h-3 text-[#059669]" />
                          </div>
                          <span className="text-[10px] text-gray-500">Disponibilité</span>
                        </div>
                        <div className="text-2xl font-bold text-[#1E3A8A]">98.5%</div>
                        <div className="flex items-center gap-1 mt-1">
                          <span className="text-[9px] text-[#059669] font-medium flex items-center gap-0.5">
                            <ArrowUpRight className="w-2.5 h-2.5" />+2.3%
                          </span>
                          <span className="text-[9px] text-gray-400">vs. mois dernier</span>
                        </div>
                      </div>
                      <div className="bg-white p-3 rounded-xl shadow-md border border-gray-100">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-6 h-6 rounded-lg bg-[#F97316]/10 flex items-center justify-center">
                            <Clock className="w-3 h-3 text-[#F97316]" />
                          </div>
                          <span className="text-[10px] text-gray-500">MTTR</span>
                        </div>
                        <div className="text-2xl font-bold text-[#1E3A8A]">2.4h</div>
                        <div className="flex items-center gap-1 mt-1">
                          <span className="text-[9px] text-[#059669] font-medium flex items-center gap-0.5">
                            <TrendingDown className="w-2.5 h-2.5" />-18%
                          </span>
                          <span className="text-[9px] text-gray-400">amélioration</span>
                        </div>
                      </div>
                      <div className="bg-white p-3 rounded-xl shadow-md border border-gray-100">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-6 h-6 rounded-lg bg-[#7C3AED]/10 flex items-center justify-center">
                            <Activity className="w-3 h-3 text-[#7C3AED]" />
                          </div>
                          <span className="text-[10px] text-gray-500">OT ouverts</span>
                        </div>
                        <div className="text-2xl font-bold text-[#F97316]">24</div>
                        <div className="text-[9px] text-gray-400 mt-1">8 en cours, 16 en attente</div>
                      </div>
                      <div className="bg-white p-3 rounded-xl shadow-md border border-gray-100">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-6 h-6 rounded-lg bg-[#0891B2]/10 flex items-center justify-center">
                            <CheckCircle2 className="w-3 h-3 text-[#0891B2]" />
                          </div>
                          <span className="text-[10px] text-gray-500">Clôturés</span>
                        </div>
                        <div className="text-2xl font-bold text-[#059669]">156</div>
                        <div className="text-[9px] text-gray-400 mt-1">ce mois</div>
                      </div>
                    </div>

                    {/* Chart */}
                    <div className="bg-white p-3 rounded-xl shadow-md border border-gray-100">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-semibold text-gray-700">Évolution disponibilité</span>
                        <span className="text-[10px] text-gray-500">12 derniers mois</span>
                      </div>
                      <MiniLineChart data={availabilityData} color="#1E3A8A" height={50} />
                    </div>
                  </div>
                </TabletMockup>
              </div>

              {/* Floating Stats Badges */}
              <StatsOverlay 
                value="-38%" 
                label="arrêts" 
                type="success" 
                className="absolute -left-8 top-20 animate-pulse" 
              />
              <StatsOverlay 
                value="+89%" 
                label="FTFR" 
                type="accent" 
                className="absolute -right-4 top-40" 
              />
              
              {/* Mobile Mockup */}
              <MobileMockup className="absolute -right-8 bottom-0 w-[120px]">
                <MobileTaskListMockup />
              </MobileMockup>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bandeau */}
      <section className="py-5 bg-[#1E3A8A] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(249,115,22,0.15),transparent_50%)]" />
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-12 text-white/90 text-sm">
            <div className="flex items-center gap-2">
              <Server className="w-4 h-4 text-[#F97316]" />
              <span>Hébergement France</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#F97316]" />
              <span>RGPD conforme</span>
            </div>
            <div className="flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-[#F97316]" />
              <span>Mode hors-ligne</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#F97316]" />
              <span>Déploiement 14 jours</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#F97316]" />
              <span>Support francophone</span>
            </div>
          </div>
        </div>
      </section>

      {/* KPI Section - Modern Dashboard Style */}
      <section className="py-20 bg-[#FAFAF9]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#059669]/10 border border-[#059669]/20 text-[#059669] mb-6">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-semibold">Résultats clients</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0C0A09] tracking-tight mb-4">
              Des résultats mesurables,<br />
              <span className="text-[#1E3A8A]">dès les premiers mois.</span>
            </h2>
          </div>

          {/* Modern KPI Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <KPICard
              value="-38%"
              label="Temps d'arrêt"
              change="-38% vs. année précédente"
              changeType="positive"
              iconElement={<TrendingDown className="w-6 h-6" style={{ color: '#059669' }} />}
              iconColor="#059669"
              size="lg"
            />
            <KPICard
              value="98.5%"
              label="Disponibilité"
              change="+2.3% ce mois"
              changeType="positive"
              iconElement={<Gauge className="w-6 h-6" style={{ color: '#1E3A8A' }} />}
              iconColor="#1E3A8A"
              size="lg"
            />
            <KPICard
              value="+89%"
              label="First Time Fix Rate"
              change="+24 pts vs. avant"
              changeType="positive"
              iconElement={<Target className="w-6 h-6" style={{ color: '#F97316' }} />}
              iconColor="#F97316"
              size="lg"
            />
            <KPICard
              value="4 mois"
              label="ROI moyen"
              change="Retour sur investissement"
              changeType="positive"
              iconElement={<DollarSign className="w-6 h-6" style={{ color: '#7C3AED' }} />}
              iconColor="#7C3AED"
              size="lg"
            />
          </div>

          {/* Chart Section */}
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-bold text-[#0C0A09]">Interventions mensuelles</h3>
                  <p className="text-sm text-[#64748b]">Évolution sur 6 mois</p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-[#059669]/10 rounded-full">
                  <ArrowUpRight className="w-4 h-4 text-[#059669]" />
                  <span className="text-sm font-semibold text-[#059669]">+20%</span>
                </div>
              </div>
              <MiniBarChart data={monthlyData} height={120} />
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-bold text-[#0C0A09]">Taux de préventif</h3>
                  <p className="text-sm text-[#64748b]">Objectif : 80%</p>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <DonutChart value={76} max={100} size={120} color="#F97316" label="Atteint" />
                <div className="flex-1 space-y-4">
                  <ProgressBar value={76} max={100} color="#F97316" label="Préventif" />
                  <ProgressBar value={24} max={100} color="#64748b" label="Correctif" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F97316]/10 border border-[#F97316]/20 text-[#1E3A8A] mb-6">
              <Zap className="w-4 h-4 text-[#F97316]" />
              <span className="text-sm font-semibold">Plateforme complète</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0C0A09] tracking-tight mb-6">
              Des fonctionnalités pensées<br />
              <span className="text-[#1E3A8A]">pour le terrain.</span>
            </h2>
            <p className="text-lg text-[#44403C] max-w-xl mx-auto">
              Chaque module a été conçu avec et pour des équipes de maintenance. Pas de complexité inutile.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl p-6 border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  feature.highlight 
                    ? 'border-[#F97316] shadow-lg shadow-[#F97316]/10' 
                    : 'border-gray-200 hover:border-[#F97316]/30'
                }`}
              >
                {feature.highlight && (
                  <div className="absolute -top-3 right-4 px-3 py-1 bg-[#F97316] text-white text-xs font-bold rounded-full">
                    Nouveau
                  </div>
                )}
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${feature.color}15` }}>
                  <feature.icon className="w-7 h-7" style={{ color: feature.color }} />
                </div>
                <div className="text-xs font-semibold text-[#F97316] mb-2">{feature.number} — Cœur du produit</div>
                <h3 className="text-lg font-bold text-[#0C0A09] mb-2">{feature.title}</h3>
                <p className="text-sm text-[#64748b] leading-relaxed">{feature.desc}</p>
                <Link 
                  href="/fonctionnalites" 
                  className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-[#1E3A8A] hover:text-[#F97316] transition-colors no-underline group-hover:gap-2"
                >
                  En savoir plus <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/fonctionnalites" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#1E3A8A] text-white font-semibold rounded-xl hover:bg-[#1E3A8A]/90 transition-all shadow-lg no-underline"
            >
              Voir toutes les fonctionnalités
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Sectors Section with Dashboard Style */}
      <section className="py-24 bg-[#FAFAF9]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F97316]/10 border border-[#F97316]/20 text-[#1E3A8A] mb-6">
                <Factory className="w-4 h-4 text-[#F97316]" />
                <span className="text-sm font-semibold">15 secteurs couverts</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0C0A09] tracking-tight mb-6">
                Votre secteur.<br />
                <span className="text-[#1E3A8A]">Nos solutions.</span>
              </h2>
              <p className="text-lg text-[#44403C] mb-8">
                Chaque secteur a ses contraintes réglementaires. MAINTEX est préconfiguré pour chacun d&apos;eux, avec des modules métier adaptés.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {sectors.map((sector, i) => (
                  <Link
                    key={i}
                    href={sector.href}
                    className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl hover:border-[#F97316] hover:shadow-md transition-all no-underline group"
                  >
                    <sector.icon className="w-5 h-5 text-[#F97316]" />
                    <span className="text-sm font-medium text-[#44403C] group-hover:text-[#F97316]">{sector.name}</span>
                  </Link>
                ))}
              </div>

              <Link 
                href="/secteurs" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#F97316] text-white font-semibold rounded-xl hover:bg-[#EA580C] transition-all shadow-lg shadow-[#F97316]/25 no-underline"
              >
                Explorer tous les secteurs
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Sector Stats Dashboard */}
            <div className="hidden lg:block">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
                <h3 className="text-xl font-bold text-[#0C0A09] mb-6">Performance par secteur</h3>
                
                <div className="space-y-6">
                  {[
                    { sector: 'Industrie', availability: 98.2, improvement: '+15%', icon: Factory },
                    { sector: 'Santé', availability: 99.8, improvement: '+8%', icon: Stethoscope },
                    { sector: 'Énergie', availability: 99.9, improvement: '+12%', icon: Zap },
                    { sector: 'BTP', availability: 96.5, improvement: '+22%', icon: HardHat },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-[#FAFAF9] rounded-xl">
                      <div className="w-12 h-12 rounded-xl bg-[#F97316]/10 flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-[#F97316]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-[#0C0A09]">{item.sector}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-lg font-bold text-[#1E3A8A]">{item.availability}%</span>
                            <span className="text-xs font-semibold text-[#059669] bg-[#059669]/10 px-2 py-0.5 rounded-full">{item.improvement}</span>
                          </div>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-[#1E3A8A] to-[#F97316] rounded-full"
                            style={{ width: `${item.availability}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-br from-[#1E3A8A] to-[#1E3A8A]/95 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(249,115,22,0.15),transparent_50%)]" />
        
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white mb-6">
              <Star className="w-4 h-4 text-[#F97316] fill-[#F97316]" />
              <span className="text-sm font-semibold">Ils témoignent</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Résultats concrets, clients satisfaits
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-[#F97316] fill-[#F97316]" />
                  ))}
                </div>
                <p className="text-[#44403C] leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
                <div className="border-t border-gray-100 pt-4">
                  <div className="font-bold text-[#0C0A09]">{testimonial.author}</div>
                  <div className="text-sm text-[#64748b]">{testimonial.role}</div>
                  <div className="text-sm font-medium text-[#1E3A8A]">{testimonial.company}</div>
                </div>
                <div className="mt-4 p-3 bg-[#059669]/10 border border-[#059669]/20 rounded-lg">
                  <div className="text-sm font-bold text-[#059669]">{testimonial.result}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/clients" 
              className="inline-flex items-center gap-2 text-white font-semibold hover:text-[#F97316] transition-colors no-underline"
            >
              Voir toutes nos études de cas <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#FAFAF9]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="bg-gradient-to-br from-[#F97316] to-[#EA580C] rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Prêt à transformer votre maintenance ?
              </h2>
              <p className="text-lg text-white/90 max-w-xl mx-auto mb-10">
                Rejoignez les 350+ entreprises en France et en Afrique qui ont choisi MAINTEX.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-[#F97316] bg-white rounded-xl hover:bg-gray-100 transition-all shadow-lg no-underline"
                >
                  Demander une démo gratuite
                  <ArrowRight className="w-4 h-4" />
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

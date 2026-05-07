'use client'

import Link from 'next/link'
import Image from 'next/image'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PartnerCarousel } from '@/components/partner-carousel'
import { 
  Zap, Shield, Server, CheckCircle2, ChevronRight, ArrowRight,
  Factory, Pickaxe, Stethoscope, HardHat, Wheat, Truck,
  Globe, Users, TrendingUp, Clock, Star, MapPin,
  Activity, Brain, Heart, Smartphone, BarChart3, Settings,
  ArrowUpRight, Gauge, Target, TrendingDown,
  Wrench, Calendar
} from 'lucide-react'
import { 
  MiniLineChart, MiniBarChart, DataCard, VignetteBadge,
  HeroImageLayout, KpiGridLayout, ResultsLayout
} from '@/components/multi-image-layout'
import { ImageGridAsymmetric, ImageGridLShape, TeamDiverseGrid } from '@/components/image-grid'

export default function HomePage() {
  const features = [
    { number: '01', title: 'Ordres de travail intelligents', desc: 'Créez, assignez et suivez chaque intervention en temps réel.', icon: Zap, color: '#F97316' },
    { number: '02', title: 'Fonctionnalités IA natives', desc: 'Diagnostic intelligent, prédiction des pannes et assistance automatisée.', icon: Brain, color: '#059669' },
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

  // Chart data
  const availabilityData = [92, 94, 91, 96, 98, 97, 99, 98, 99, 98]
  const interventionData = [35, 45, 55, 70, 85]
  const mttrData = [4.2, 3.8, 3.5, 3.1, 2.8, 2.5, 2.3, 2.4]
  const performanceData = [65, 72, 78, 85, 92, 95]

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <SiteHeader />

      {/* Hero Section with Photo + Floating Data */}
      <section className="relative min-h-[90vh] flex items-center pt-[70px] pb-20 bg-gradient-to-br from-[#FAFAF9] via-white to-[#F97316]/5 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#e2e8f0_1px,transparent_0)] bg-[size:40px_40px] opacity-40" />
        
        {/* Decorative Blobs */}
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-[#F97316]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#1E3A8A]/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-10 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left - Content */}
            <div className="order-2 lg:order-1">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F97316]/10 border border-[#F97316]/20 text-[#1E3A8A] mb-6">
                <MapPin className="w-4 h-4 text-[#F97316]" />
                <span className="text-sm font-semibold">La GMAO française qui s'adapte à votre métier.</span>
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
                  { icon: Brain, text: 'Assistance IA' },
                  { icon: Smartphone, text: 'Opérationnelle hors-ligne' },
                  { icon: Clock, text: '30 Jours Essai gratuit' },
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
                  { value: '15+', label: 'Modules' },
                  { value: '18+', label: 'Secteurs' },
                  { value: '18+', label: 'Fonctionnalités IA' },
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="text-2xl font-bold text-[#F97316]">{stat.value}</div>
                    <div className="text-sm text-[#64748b]">{stat.label}</div>
                  </div>
                ))}
                <div className="flex items-center gap-2 px-3 py-1.5 bg-[#1E3A8A] text-white rounded-full text-sm">
                  <span>🇫🇷</span>
                  <span>Support francophone • GMAO multilingues</span>
                </div>
              </div>
            </div>

            {/* Right - Photo with Floating Data - Cards overlapping at edges */}
            <div className="order-1 lg:order-2 hidden lg:block">
              <div className="relative ml-8 mr-4">
                {/* Main Photo */}
                <div className="relative rounded-3xl overflow-visible shadow-2xl">
                  <Image
                    src="/images/hero-technician-new-1.png"
                    alt="Technicien maintenance avec tablette"
                    width={480}
                    height={520}
                    className="object-cover w-full h-auto rounded-3xl"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-3xl" />
                </div>

                {/* Card 1 - Overlapping top-right edge */}
                <div className="absolute -right-6 top-16 z-10">
                  <DataCard
                    value="98.5%"
                    label="Disponibilité"
                    change="+2.3%"
                    icon={<Gauge className="w-3 h-3 text-[#059669]" />}
                    chart="line"
                    chartData={[92, 94, 91, 96, 98, 97, 99, 98]}
                    chartColor="#059669"
                    size="sm"
                  />
                </div>

                {/* Card 2 - Overlapping left edge */}
                <div className="absolute -left-6 top-[40%] z-10">
                  <DataCard
                    value="2.4h"
                    label="MTTR"
                    change="-18%"
                    changeType="positive"
                    icon={<Clock className="w-3 h-3 text-[#F97316]" />}
                    size="sm"
                  />
                </div>

                {/* Card 3 - Overlapping bottom-right edge */}
                <div className="absolute -right-4 bottom-8 z-10">
                  <DataCard
                    value="156"
                    label="Interventions/mois"
                    change="+20%"
                    icon={<Activity className="w-4 h-4 text-[#1E3A8A]" />}
                    chart="bar"
                    chartData={interventionData}
                    chartColor="#1E3A8A"
                    size="md"
                  />
                </div>

                {/* Vignette Badge - Overlapping bottom-left */}
                <div className="absolute -bottom-3 left-6 z-10">
                  <VignetteBadge 
                    icon={<Zap className="w-5 h-5 text-white" />} 
                    color="#F97316"
                    size="lg"
                  />
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
          <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-12 text-white/90 text-sm">
            <div className="flex items-center gap-2">
              <Server className="w-4 h-4 text-[#F97316]" />
              <span>Hébergement sécurisé</span>
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
              <span>Déploiement auto assisté</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#F97316]" />
              <span>Support francophone</span>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Carousel */}
      <PartnerCarousel />

      {/* KPI Section - Image Grid with overlapping card */}
      <section className="py-20 bg-[#FAFAF9]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image Grid Asymmetric */}
            <div className="hidden lg:block">
              <ImageGridAsymmetric
                mainImage={{
                  src: "/images/team-success-new-3.png",
                  alt: "Succès projet maintenance"
                }}
                smallImages={[
                  { src: "/images/team-diverse-european-african-1.png", alt: "Équipe diverse" },
                  { src: "/images/happy-technician.png", alt: "Technicien satisfait" }
                ]}
                dataCards={[
                  {
                    value: "4 mois",
                    label: "ROI moyen",
                    change: "Retour investissement",
                    icon: <Target className="w-4 h-4 text-[#F97316]" />,
                    position: "-right-4 bottom-8"
                  }
                ]}
                vignette={{ icon: <CheckCircle2 className="w-5 h-5 text-white" />, color: "#059669" }}
                className="mr-4"
              />
            </div>

            {/* Right - Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#059669]/10 border border-[#059669]/20 text-[#059669] mb-6">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-semibold">Résultats clients</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0C0A09] tracking-tight mb-6">
                Des résultats mesurables,<br />
                <span className="text-[#1E3A8A]">dès les premiers mois.</span>
              </h2>
              <p className="text-lg text-[#44403C] mb-8">
                Nos clients constatent une amélioration significative de leurs indicateurs de performance maintenance en moins de 6 mois.
              </p>

              {/* KPI Grid - Compact */}
              <KpiGridLayout
                title="Indicateurs clés"
                subtitle="Amélioration moyenne constatée"
                kpis={[
                  { value: '-38%', label: 'Temps d\'arrêt', change: 'vs. année précédente', icon: <TrendingDown className="w-5 h-5 text-[#059669]" />, color: '#059669' },
                  { value: '98.5%', label: 'Disponibilité', change: '+2.3%', icon: <Gauge className="w-5 h-5 text-[#1E3A8A]" />, color: '#1E3A8A' },
                  { value: '89%', label: 'FTFR', change: '+24 pts', icon: <Wrench className="w-5 h-5 text-[#F97316]" />, color: '#F97316' },
                  { value: '4 mois', label: 'ROI', icon: <Target className="w-5 h-5 text-[#7C3AED]" />, color: '#7C3AED' },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Supervision Section - Single Image with 3 cards */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F97316]/10 border border-[#F97316]/20 text-[#1E3A8A] mb-6">
              <Activity className="w-4 h-4 text-[#F97316]" />
              <span className="text-sm font-semibold">Pilotage en temps réel</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0C0A09] tracking-tight mb-4">
              Supervisez vos installations,<br />
              <span className="text-[#1E3A8A]">où que vous soyez.</span>
            </h2>
            <p className="text-lg text-[#44403C] max-w-2xl mx-auto">
              Visualisez l'état de vos équipements, suivez les interventions en cours et anticipez les pannes grâce à nos tableaux de bord intuitifs.
            </p>
          </div>

          {/* Single Image with 3 overlapping cards */}
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-3xl overflow-visible shadow-2xl h-[400px]">
              <Image
                src="/images/control-room-new-2.png"
                alt="Équipe en salle de contrôle"
                fill
                className="object-cover rounded-3xl"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl" />
              
              {/* Card 1 - Overlapping top-left edge */}
              <div className="absolute -left-6 top-6 flex items-center gap-3 px-4 py-3 bg-white rounded-xl shadow-xl z-10">
                <VignetteBadge 
                  icon={<Activity className="w-4 h-4 text-white" />} 
                  color="#059669"
                  size="sm"
                />
                <div>
                  <div className="text-[10px] text-gray-500">Équipements</div>
                  <div className="text-lg font-bold text-[#0C0A09]">1,240</div>
                </div>
              </div>

              {/* Card 2 - Overlapping top-right edge */}
              <div className="absolute -right-6 top-6 z-10">
                <DataCard
                  value="99.9%"
                  label="Uptime"
                  change="Réseau"
                  icon={<Gauge className="w-3 h-3 text-[#059669]" />}
                  chart="line"
                  chartData={[98, 99, 99.5, 99.8, 99.9, 99.9]}
                  chartColor="#059669"
                  size="sm"
                />
              </div>

              {/* Card 3 - Overlapping bottom-right edge */}
              <div className="absolute -right-4 -bottom-4 z-10">
                <DataCard
                  value="24/7"
                  label="Monitoring"
                  change="Alertes temps réel"
                  icon={<Clock className="w-4 h-4 text-[#F97316]" />}
                  chart="bar"
                  chartData={[85, 90, 92, 95, 98, 99]}
                  chartColor="#F97316"
                  size="md"
                />
              </div>
              
              {/* Vignette overlapping bottom-left */}
              <div className="absolute -bottom-3 left-6 z-10">
                <VignetteBadge 
                  icon={<Shield className="w-5 h-5 text-white" />} 
                  color="#1E3A8A"
                  size="lg"
                />
              </div>
            </div>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {[
              { icon: Activity, text: 'Monitoring temps réel', color: '#059669' },
              { icon: Brain, text: 'Diagnostic IA', color: '#7C3AED' },
              { icon: Clock, text: 'Alertes préventives', color: '#F97316' },
              { icon: Shield, text: 'Fonctions vitales', color: '#DC2626' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 px-5 py-3 bg-[#FAFAF9] rounded-full border border-gray-200">
                <item.icon className="w-5 h-5" style={{ color: item.color }} />
                <span className="text-sm font-medium text-[#44403C]">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-[#FAFAF9]">
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

      {/* Full KPI Dashboard Section */}
      <section className="py-20 bg-gradient-to-br from-[#1E3A8A] to-[#1E3A8A]/95 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(249,115,22,0.2),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(5,150,105,0.15),transparent_50%)]" />
        
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white mb-6">
              <BarChart3 className="w-4 h-4 text-[#F97316]" />
              <span className="text-sm font-semibold">Indicateurs de Performance</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
              Les KPIs qui transforment<br />
              <span className="text-[#F97316]">votre maintenance</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Pilotez votre maintenance avec des indicateurs clés. Mesurez, analysez, optimisez.
            </p>
          </div>

          {/* KPI Categories Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {/* Fiabilité */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Activity className="w-5 h-5 text-[#F97316]" />
                Fiabilité & Disponibilité
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-white/90">
                  <span className="text-sm">MTBF</span>
                  <span className="font-semibold">720h <span className="text-[#059669] text-xs">+15%</span></span>
                </div>
                <div className="flex justify-between items-center text-white/90">
                  <span className="text-sm">MTTR</span>
                  <span className="font-semibold">2.4h <span className="text-[#059669] text-xs">-18%</span></span>
                </div>
                <div className="flex justify-between items-center text-white/90">
                  <span className="text-sm">Disponibilité</span>
                  <span className="font-semibold">98.5% <span className="text-[#059669] text-xs">+2.3%</span></span>
                </div>
                <div className="flex justify-between items-center text-white/90">
                  <span className="text-sm">OEE</span>
                  <span className="font-semibold">92% <span className="text-[#059669] text-xs">World-class</span></span>
                </div>
              </div>
            </div>

            {/* Efficacité */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-[#F97316]" />
                Efficacité Opérationnelle
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-white/90">
                  <span className="text-sm">PMP (Maintenance Planifiée)</span>
                  <span className="font-semibold">88% <span className="text-[#059669] text-xs">+15%</span></span>
                </div>
                <div className="flex justify-between items-center text-white/90">
                  <span className="text-sm">PMC (Conformité)</span>
                  <span className="font-semibold">94% <span className="text-[#059669] text-xs">+8%</span></span>
                </div>
                <div className="flex justify-between items-center text-white/90">
                  <span className="text-sm">First Time Fix Rate</span>
                  <span className="font-semibold">89% <span className="text-[#059669] text-xs">+24pts</span></span>
                </div>
                <div className="flex justify-between items-center text-white/90">
                  <span className="text-sm">Backlog</span>
                  <span className="font-semibold">2.1 sem <span className="text-[#059669] text-xs">Optimal</span></span>
                </div>
              </div>
            </div>

            {/* Impact */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-[#F97316]" />
                Impact Business
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-white/90">
                  <span className="text-sm">Temps d'arrêt</span>
                  <span className="font-semibold text-[#059669]">-38%</span>
                </div>
                <div className="flex justify-between items-center text-white/90">
                  <span className="text-sm">Coûts maintenance</span>
                  <span className="font-semibold text-[#059669]">-22%</span>
                </div>
                <div className="flex justify-between items-center text-white/90">
                  <span className="text-sm">ROI</span>
                  <span className="font-semibold">4 mois</span>
                </div>
                <div className="flex justify-between items-center text-white/90">
                  <span className="text-sm">Productivité équipes</span>
                  <span className="font-semibold text-[#059669]">+35%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Summary with Vignettes */}
          <ResultsLayout
            results={[
              { value: '+35%', label: 'Productivité', icon: <TrendingUp className="w-5 h-5 text-white" />, color: '#059669' },
              { value: '-38%', label: 'Arrêts', icon: <Clock className="w-5 h-5 text-white" />, color: '#F97316' },
              { value: '-22%', label: 'Coûts', icon: <Target className="w-5 h-5 text-white" />, color: '#7C3AED' },
            ]}
            className="justify-center"
          />
        </div>
      </section>

      {/* Sectors Section - Single Image with 2 cards */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F97316]/10 border border-[#F97316]/20 text-[#1E3A8A] mb-6">
                <Factory className="w-4 h-4 text-[#F97316]" />
                <span className="text-sm font-semibold">18 secteurs couverts</span>
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

            {/* Team Diverse Grid with overlapping card */}
            <div className="hidden lg:block">
              <div className="relative">
                <TeamDiverseGrid variant="european-african" className="mr-4" />
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

'use client'

import Link from 'next/link'
import Image from 'next/image'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { 
  Zap, Shield, Server, CheckCircle2, ChevronRight, ArrowRight,
  Factory, Pickaxe, Stethoscope, HardHat, Wheat, Truck,
  Globe, Users, TrendingUp, Clock, Star, MapPin, BadgeCheck,
  Activity, Brain, Heart, Smartphone, BarChart3, Settings,
  ArrowUpRight, Gauge, DollarSign, PieChart, Target, TrendingDown,
  Wrench, Calendar, AlertTriangle, Timer
} from 'lucide-react'
import { 
  HeroPhotoVisual, TeamPhotoVisual, MachineRoomVisual,
  BtpTeamVisual, MiniLineChartInline
} from '@/components/photo-data-visual'
import { 
  EnhancedHeroPhotoVisual, EnhancedBtpPhotoVisual, 
  ZeroBadge, KpiCard, KpiDashboard, SectorKpiGrid,
  maintenanceKPIs, sectorKPIs, zeroBadges
} from '@/components/kpi-visual'

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
                <span className="text-sm font-semibold">La GMAO évolutive</span>
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

            {/* Right - Photo with Floating Data */}
            <div className="order-1 lg:order-2 hidden lg:block">
              <EnhancedHeroPhotoVisual 
                imageSrc="/images/hero-technician-final.png"
                imageAlt="Technicien maintenance avec tablette sur ligne de production industrielle"
                className="ml-4"
              />
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

      {/* KPI Section with Photo + Data */}
      <section className="py-20 bg-[#FAFAF9]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Photo Visual */}
            <div className="hidden lg:block">
              <TeamPhotoVisual 
                imageSrc="/images/team-engineers.png"
                imageAlt="Équipe d'ingénieurs maintenance"
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

              {/* Enhanced KPI Grid with Maintenance KPIs */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <KpiCard kpiKey="tempsArret" value="-38%" change="vs. année précédente" trend="down" size="md" />
                <KpiCard kpiKey="disponibilite" value="98.5%" change="+2.3% ce mois" trend="up" size="md" />
                <KpiCard kpiKey="ftfr" value="89%" change="+24 pts vs. avant" trend="up" size="md" />
                <KpiCard kpiKey="roi" value="4 mois" description="retour investissement" size="md" />
              </div>
              
              {/* Zero Badges */}
              <div className="flex flex-wrap gap-2">
                <ZeroBadge text="Zéro arrêt production" icon={Shield} color="#059669" size="sm" />
                <ZeroBadge text="Zéro panne" icon={Zap} color="#0891B2" size="sm" />
                <ZeroBadge text="Zéro gaspillages" icon={Target} color="#7C3AED" size="sm" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BTP Team Section */}
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

          <div className="mb-12">
            <EnhancedBtpPhotoVisual 
              imageSrc="/images/team-btp-chantier.png"
              imageAlt="Équipe de techniciens sur chantier BTP avec tablettes"
              className="max-w-4xl mx-auto"
            />
          </div>

          {/* Feature Pills with Zero Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
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
          
          {/* Zero Badges Row */}
          <div className="flex flex-wrap justify-center gap-3">
            <ZeroBadge text="Zéro indisponibilité" icon={Shield} color="#059669" size="md" />
            <ZeroBadge text="Zéro retard chantier" icon={Clock} color="#F97316" size="md" />
            <ZeroBadge text="Zéro arrêt production" icon={Factory} color="#DC2626" size="md" />
            <ZeroBadge text="Zéro gaspillages" icon={Target} color="#7C3AED" size="md" />
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

          {/* Zero Badges Row */}
          <div className="flex flex-wrap justify-center gap-3">
            <ZeroBadge text="Zéro indisponibilité" icon={Shield} color="#059669" size="md" />
            <ZeroBadge text="Zéro retard chantier" icon={Clock} color="#F97316" size="md" />
            <ZeroBadge text="Zéro arrêt production" icon={Factory} color="#DC2626" size="md" />
            <ZeroBadge text="Zéro gaspillages" icon={Target} color="#7C3AED" size="md" />
            <ZeroBadge text="Zéro perte de production" icon={TrendingUp} color="#1E3A8A" size="md" />
            <ZeroBadge text="Zéro défauts" icon={CheckCircle2} color="#0891B2" size="md" />
          </div>
        </div>
      </section>

      {/* Sectors Section with Photo */}
      <section className="py-24 bg-white">
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

            {/* Sector Photo Visual with KPIs */}
            <div className="hidden lg:block relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/warehouse.png"
                  alt="Entrepôt industriel"
                  width={550}
                  height={450}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>

              {/* Floating Stats with KPIs */}
              <div className="absolute -top-4 left-8 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Factory className="w-4 h-4 text-[#F97316]" />
                  <span className="text-xs text-gray-500">Industrie</span>
                </div>
                <div className="text-xl font-bold text-[#0C0A09]">98.2%</div>
                <div className="text-xs text-[#059669]">Disponibilité</div>
              </div>

              {/* OEE Badge */}
              <div className="absolute top-16 -left-4 bg-white rounded-xl p-3 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Target className="w-3.5 h-3.5 text-[#7C3AED]" />
                  <span className="text-xs text-gray-500">OEE</span>
                </div>
                <div className="text-lg font-bold text-[#0C0A09]">92%</div>
              </div>

              <div className="absolute -bottom-4 right-8 bg-[#1E3A8A] text-white rounded-xl p-4 shadow-lg">
                <div className="text-lg font-bold">15</div>
                <div className="text-xs text-white/80">Secteurs</div>
              </div>

              <div className="absolute top-1/3 -right-4 bg-white rounded-xl p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                  <span className="text-sm font-medium">Conforme réglementation</span>
                </div>
              </div>
              
              {/* Zero Badge */}
              <div className="absolute bottom-4 left-8">
                <ZeroBadge text="Zéro défauts" icon={CheckCircle2} color="#059669" size="sm" />
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

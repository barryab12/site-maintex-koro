'use client'

import Image from 'next/image'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import Link from 'next/link'
import { CheckCircle2, Users, Target, Lightbulb, Shield, Award, BookOpen, Settings, Wrench, Globe, MapPin, Phone, Mail, Building2, Briefcase, TrendingUp, Layers, Cpu, Factory, Pickaxe, Zap, Landmark, HardHat, Wheat, Truck, Hotel, Clock, Heart, Lock, FileText, Newspaper, Rocket, Users2, ArrowRight, ArrowUpRight, Activity, Gauge } from 'lucide-react'
import { MiniLineChartInline } from '@/components/photo-data-visual'

export default function AProposPage() {
  const stats = [
    { value: '+15', label: 'ans d\'expérience cumulée' },
    { value: '+100', label: 'projets réalisés' },
    { value: '25', label: 'pays couverts' },
    { value: '+700', label: 'personnes formées' },
  ]

  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Faire évoluer les outils et les organisations par l\'innovation technologique et managériale.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Excellence',
      description: 'La qualité est notre exigence constante. Par une rigueur factuelle et des méthodes structurées, nous appliquons des standards élevés pour garantir des résultats à la hauteur de vos ambitions.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Intégrité',
      description: 'L\'intégrité guide notre engagement : une collaboration transparente pour un impact durable. Nous pilotons votre performance en garantissant sa cohérence sociale et environnementale.'
    }
  ]

  const services = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Conseil en excellence opérationnelle',
      items: ['Accompagnement projets Lean Six-Sigma', 'Mise en place Système Management Opérationnel', 'Organisation maintenance industrielle']
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Formation & certification professionnelle',
      items: ['Séminaires intra/inter-entreprises', 'Certifications Yellow/Green/Black Belt', 'Formation continue sur mesure']
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: 'Solutions technologiques',
      items: ['Développements logiciels spécifiques', 'GMAO Maintex', 'Intégrateur Odoo']
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: 'Assistance technique',
      items: ['Mise à disposition ressources dédiées', 'Support à l\'exploitation optimale', 'Développement solutions sur mesure']
    }
  ]

  const sectors = [
    { icon: Factory, name: 'Industrie' },
    { icon: Pickaxe, name: 'Mines & Carrières' },
    { icon: Zap, name: 'Énergie' },
    { icon: Landmark, name: 'Institutions' },
    { icon: HardHat, name: 'BTP' },
    { icon: Wheat, name: 'Agroalimentaire' },
    { icon: Truck, name: 'Logistique' },
    { icon: Hotel, name: 'Hôtellerie' },
  ]

  const leanResults = [
    'Amélioration mesurable de la performance opérationnelle',
    'Réduction des coûts d\'exploitation et de maintenance',
    'Fiabilité accrue des équipements et des processus',
    'Meilleure maîtrise des délais et de la qualité',
    'Montée en compétence durable des équipes',
    'Culture d\'amélioration continue ancrée dans l\'organisation'
  ]

  const locations = [
    {
      country: 'France',
      flag: '🇫🇷',
      address: '16 Rue Louis Pergaud, 94700 Maisons-Alfort',
      phone: '+33(0) 1 87 66 67 02'
    },
    {
      country: 'Burkina Faso',
      flag: '🇧🇫',
      address: '02 BP 5527 Ouagadougou 02',
      phone: '(226) 25 37 46 00'
    },
    {
      country: 'Côte d\'Ivoire',
      flag: '🇨🇮',
      address: 'Centre Commercial Koubeissi, Abidjan Treichville',
      phone: '(225) 27 21 73 22 23'
    },
    {
      country: 'Sénégal',
      flag: '🇸🇳',
      address: 'BP 23189 Ponty',
      phone: '(221) 77 639 38 62'
    }
  ]

  const teamMembers = [
    { name: 'Direction Générale', role: 'Pilotage stratégique', icon: Briefcase },
    { name: 'Consultants Seniors', role: 'Expertise métier', icon: Users },
    { name: 'Équipe Produit', role: 'Développement MAINTEX', icon: Cpu },
    { name: 'Support Client', role: 'Accompagnement', icon: Heart },
  ]

  const certifications = [
    { name: 'ISO 9001', description: 'Système de management de la qualité' },
    { name: 'ISO 27001', description: 'Sécurité de l\'information' },
    { name: 'RGPD', description: 'Conformité protection des données' },
    { name: 'Hébergement sécurisé', description: 'Données hébergées en France' },
  ]

  const timeline = [
    { year: '2009', title: 'Création', description: 'Fondation de BBC & Partners à Paris' },
    { year: '2012', title: 'Expansion Afrique', description: 'Ouverture bureaux Ouagadougou et Abidjan' },
    { year: '2015', title: 'MAINTEX', description: 'Lancement de la GMAO MAINTEX' },
    { year: '2018', title: 'Croissance', description: '15+ Modules et 25 pays couverts' },
    { year: '2023', title: 'MAINTEX 5.0', description: 'Nouvelle version avec IA et IoT' },
  ]

  return (
    <main className="min-h-screen bg-white font-sans">
      <SiteHeader />

      {/* Hero */}
      <section id="qui-sommes-nous" className="relative min-h-[60vh] flex items-center pt-[70px] pb-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#e2e8f0_1px,transparent_0)] bg-[size:40px_40px] opacity-50" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F97316]/10 border border-[#F97316]/20 text-[#1E3A8A] mb-6">
                <Building2 className="w-4 h-4 text-[#F97316]" />
                <span className="text-xs font-medium">Cabinet de conseil & intégration</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0C0A09] leading-tight tracking-tight mb-6">
                Votre partenaire en<br />
                <span className="text-[#1E3A8A]">
                  excellence opérationnelle
                </span>
              </h1>
              <p className="text-lg text-[#44403C] font-normal mb-8 max-w-lg leading-relaxed">
                BBC & Partners est un cabinet de conseil, de formation et d\'intégration de solutions technologiques, spécialisé dans l\'excellence opérationnelle.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 text-white bg-[#F97316] rounded-xl hover:bg-[#EA580C] transition-all shadow-lg shadow-[#F97316]/25 no-underline">
                  Nous contacter <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/fonctionnalites" className="inline-flex items-center gap-2 px-6 py-3.5 text-[#1E3A8A] border-2 border-[#1E3A8A]/20 rounded-xl hover:border-[#1E3A8A] transition-all no-underline">
                  Découvrir Maintex
                </Link>
              </div>
            </div>

            {/* Hero Photo with Floating Stats */}
            <div className="hidden lg:block relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img src="/images/team-engineers.png" alt="BBC & Partners" className="w-full h-auto" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-3 left-4 flex items-center gap-2 px-4 py-2.5 bg-[#F97316] text-white rounded-full shadow-lg">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-semibold">+15 ans</span>
              </div>
              
              <div className="absolute top-16 right-4 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Gauge className="w-4 h-4 text-[#1E3A8A]" />
                  <span className="text-xs text-gray-500">Performance</span>
                </div>
                <div className="text-2xl font-bold text-[#0C0A09]">+30%</div>
              </div>
              
              <div className="absolute bottom-4 left-4 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Users className="w-4 h-4 text-[#059669]" />
                  <span className="text-xs text-gray-500">Clients</span>
                </div>
                <div className="text-2xl font-bold text-[#0C0A09]">350+</div>
              </div>
              
              <div className="absolute bottom-4 right-4 bg-[#1E3A8A] text-white rounded-xl p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  <div>
                    <div className="text-lg font-bold">25</div>
                    <div className="text-xs text-white/80">Pays</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BBC & Partners Section */}
      <section id="bbc-partners" className="py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2B30D4]/10 border border-[#2B30D4]/20 text-[#2B30D4] mb-6">
                <Building2 className="w-4 h-4" />
                <span className="text-xs font-medium">BBC & Partners</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D1160] tracking-tight mb-6">
                Un cabinet de conseil dédié à la performance
              </h2>
              <p className="text-lg text-[#7A85A8] font-light mb-6 leading-relaxed">
                BBC & Partners est né de la conviction que l\'excellence opérationnelle est un levier majeur de compétitivité pour les organisations en Afrique et en Europe.
              </p>
              <p className="text-lg text-[#7A85A8] font-light mb-8 leading-relaxed">
                Notre équipe pluridisciplinaire combine expertise métier, maîtrise des méthodologies d\'amélioration continue et compétences technologiques pour accompagner vos transformations.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {teamMembers.map((member, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                    <div className="w-10 h-10 rounded-lg bg-[#0A0A8A]/10 flex items-center justify-center mb-3">
                      <member.icon className="w-5 h-5 text-[#0A0A8A]" />
                    </div>
                    <div className="font-semibold text-gray-900">{member.name}</div>
                    <div className="text-sm text-gray-500">{member.role}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src="/images/company-headquarters.png" alt="BBC & Partners" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Histoire / Timeline */}
      <section id="histoire" className="py-24 bg-[#F4F6FD]">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2B30D4]/10 border border-[#2B30D4]/20 text-[#2B30D4] mb-6">
              <Clock className="w-4 h-4" />
              <span className="text-xs font-medium">Notre histoire</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D1160] tracking-tight mb-4">
              Plus de 15 ans d\'expertise
            </h2>
            <p className="text-lg text-[#7A85A8] font-light max-w-2xl mx-auto">
              De la création à aujourd\'hui, une aventure humaine et technologique au service de la performance.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#2B30D4]/20" />
            
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <div key={i} className={`flex items-center gap-8 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-[rgba(26,29,181,0.1)] inline-block">
                      <div className="text-[#2B30D4] font-bold text-lg mb-2">{item.year}</div>
                      <h3 className="font-bold text-[#0D1160] mb-2">{item.title}</h3>
                      <p className="text-[#7A85A8] text-sm">{item.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-[#2B30D4] z-10 flex-shrink-0" />
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section id="mission" className="py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src="/images/team-meeting.png" alt="Notre mission" className="w-full h-auto" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2B30D4]/10 border border-[#2B30D4]/20 text-[#2B30D4] mb-6">
                <Target className="w-4 h-4" />
                <span className="text-xs font-medium">Notre Mission</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D1160] tracking-tight mb-6">
                Transformer la vision stratégique en résultats durables
              </h2>
              <p className="text-lg text-[#7A85A8] font-light leading-relaxed mb-8">
                Accompagner les organisations à transformer leur vision stratégique en résultats durables par l'innovation technologique et managériale centrée sur l'humain.
              </p>
              <div className="space-y-4">
                {[
                  'Améliorer la performance opérationnelle',
                  'Développer les compétences des équipes',
                  'Digitaliser les processus métiers',
                  'Garantir un impact durable'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                    </div>
                    <span className="text-[#3B4470]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section id="equipe" className="py-24 bg-[#F4F6FD]">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2B30D4]/10 border border-[#2B30D4]/20 text-[#2B30D4] mb-6">
              <Users2 className="w-4 h-4" />
              <span className="text-xs font-medium">Notre équipe</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D1160] tracking-tight mb-4">
              Des experts passionnés
            </h2>
            <p className="text-lg text-[#7A85A8] font-light max-w-2xl mx-auto">
              Une équipe pluridisciplinaire combinant expertise métier, méthodologie et technologie.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Consultants Seniors', count: '12+', desc: 'Experts en excellence opérationnelle', icon: TrendingUp },
              { title: 'Ingénieurs Produit', count: '8+', desc: 'Développement MAINTEX', icon: Cpu },
              { title: 'Formateurs', count: '6+', desc: 'Certifications Lean Six Sigma', icon: BookOpen },
              { title: 'Support Client', count: '10+', desc: 'Accompagnement terrain', icon: Heart },
            ].map((team, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center border border-gray-200 shadow-sm">
                <div className="w-14 h-14 rounded-xl bg-[#0A0A8A]/10 flex items-center justify-center mx-auto mb-4">
                  <team.icon className="w-7 h-7 text-[#0A0A8A]" />
                </div>
                <div className="text-3xl font-black text-[#0A0A8A] mb-1">{team.count}</div>
                <h3 className="font-bold text-gray-900 mb-2">{team.title}</h3>
                <p className="text-sm text-gray-500">{team.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D1160] tracking-tight mb-4">
              Nos valeurs
            </h2>
            <p className="text-lg text-[#7A85A8] font-light">
              Les principes qui guident notre engagement au quotidien.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-[#F4F6FD] rounded-2xl p-8 border border-[rgba(26,29,181,0.1)]">
                <div className="w-16 h-16 bg-[#2B30D4]/10 rounded-2xl flex items-center justify-center mb-6 text-[#2B30D4]">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0D1160] mb-4">{value.title}</h3>
                <p className="text-[#7A85A8] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D1160] tracking-tight mb-4">
              Nos services
            </h2>
            <p className="text-lg text-[#7A85A8] font-light max-w-2xl mx-auto">
              Un accompagnement complet pour améliorer durablement votre performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-[#F4F6FD] rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#2B30D4] rounded-xl flex items-center justify-center text-white">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#0D1160]">{service.title}</h3>
                </div>
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#3B4470]">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-green-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sécurité & RGPD */}
      <section id="securite" className="py-24 bg-gray-50">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A0A8A]/10 border border-[#0A0A8A]/20 text-[#0A0A8A] mb-6">
                <Lock className="w-4 h-4" />
                <span className="text-xs font-medium">Sécurité & RGPD</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-6">
                Vos données sont en sécurité
              </h2>
              <p className="text-lg text-gray-600 font-normal mb-8 leading-relaxed">
                MAINTEX est conçu avec la sécurité au cœur de son architecture. Nous appliquons les plus hauts standards de protection des données.
              </p>
              <div className="space-y-4">
                {[
                  'Chiffrement SSL/TLS en transit et au repos',
                  'Authentification multi-facteurs (MFA)',
                  'Sauvegardes automatisées quotidiennes',
                  'Conformité RGPD complète',
                  'Audits de sécurité réguliers',
                  'Politique de rétention transparente'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-600">
                    <div className="w-6 h-6 rounded-full bg-[#0A0A8A]/10 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-[#0A0A8A]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
              <img src="/images/data-security.png" alt="Sécurité des données" className="w-full h-auto rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-24 bg-[#F4F6FD]">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src="/images/certifications-awards.png" alt="Certifications" className="w-full h-auto" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2B30D4]/10 border border-[#2B30D4]/20 text-[#2B30D4] mb-6">
                <Award className="w-4 h-4" />
                <span className="text-xs font-medium">Certifications & accréditations</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D1160] tracking-tight mb-6">
                Des standards reconnus
              </h2>
              <p className="text-lg text-[#7A85A8] font-light mb-8 leading-relaxed">
                Notre engagement qualité est certifié par des organismes reconnus. Nous appliquons les meilleurs standards de l\'industrie.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {certifications.map((cert, i) => (
                  <div key={i} className="bg-white rounded-xl p-4 border border-[rgba(26,29,181,0.1)]">
                    <div className="font-bold text-[#0D1160] mb-1">{cert.name}</div>
                    <div className="text-sm text-[#7A85A8]">{cert.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Données en France */}
      <section id="donnees" className="py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2B30D4]/10 border border-[#2B30D4]/20 text-[#2B30D4] mb-6">
              <MapPin className="w-4 h-4" />
              <span className="text-xs font-medium">Données hébergées en France</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D1160] tracking-tight mb-6">
              Souveraineté des données garantie
            </h2>
            <p className="text-lg text-[#7A85A8] font-light mb-8 leading-relaxed">
              Toutes vos données sont hébergées en France, dans des data centers certifiés. Vous conservez le contrôle total sur vos informations sensibles.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Hébergement sécurisé', desc: 'Data centers certifiés Tier III+' },
                { title: 'Conformité RGPD', desc: 'Protection des données personnelles' },
                { title: 'Support local', desc: 'Équipe basée en France' },
              ].map((item, i) => (
                <div key={i} className="bg-[#F4F6FD] rounded-xl p-6 text-center">
                  <div className="w-10 h-10 rounded-full bg-[#2B30D4]/10 flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2B30D4]" />
                  </div>
                  <h3 className="font-bold text-[#0D1160] mb-1">{item.title}</h3>
                  <p className="text-sm text-[#7A85A8]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Excellence Opérationnelle */}
      <section className="py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A0A8A]/10 border border-[#0A0A8A]/20 text-[#0A0A8A] mb-6">
              <TrendingUp className="w-4 h-4" />
              <span className="text-xs font-medium">Excellence Opérationnelle</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              Notre démarche d'accompagnement
            </h2>
            <p className="text-lg text-gray-600 font-normal max-w-3xl mx-auto">
              Chez BBC & Partners, l'excellence opérationnelle est le moteur de votre performance durable. Nous transformons les organisations en optimisant leurs processus et en ancrant une culture de l'amélioration continue fondée sur la gestion par les faits et les données.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* SMO */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Layers className="w-6 h-6 text-[#0A0A8A]" />
                Système de Management Opérationnel
              </h3>
              <p className="text-gray-600 mb-6">
                Nous concevons et déployons des systèmes de management opérationnel permettant de traduire la stratégie en actions opérationnelles cohérentes et pilotées.
              </p>
              <h4 className="text-sm font-semibold text-gray-800 mb-4">Les piliers de notre approche :</h4>
              <ul className="space-y-3">
                {[
                  'Définition claire des objectifs et des indicateurs de performance',
                  'Pilotage de la performance à tous les niveaux (stratégique, tactique, opérationnel)',
                  'Standardisation et sécurisation des processus clés',
                  'Animation des rituels de management (revues, réunions de performance)',
                  'Boucle d\'amélioration continue basée sur le cycle PDCA'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#0A0A8A]" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Lean Six Sigma */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Target className="w-6 h-6 text-[#0A0A8A]" />
                Lean Six Sigma
              </h3>
              <p className="text-gray-600 mb-6">
                Le Lean Six Sigma constitue un pilier central de notre démarche d'excellence opérationnelle. Il permet de réduire les gaspillages, de maîtriser la variabilité des processus et d'améliorer durablement la qualité, les délais et les coûts.
              </p>
              <h4 className="text-sm font-semibold text-gray-800 mb-4">Nos interventions :</h4>
              <ul className="space-y-3 mb-6">
                {[
                  'Diagnostic de maturité des processus',
                  'Cartographie des processus et identification des gaspillages',
                  'Résolution structurée des problèmes (DMAIC)',
                  'Accompagnement de projets d\'amélioration',
                  'Transfert de compétences aux équipes internes'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#0A0A8A]" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Results */}
          <div className="mt-12 bg-[#0A0A8A] rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-6 text-center">Les résultats observés chez nos clients</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {leanResults.map((result, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/10 rounded-xl p-4">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-green-400" />
                  <span className="text-sm text-white/80">{result}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Formation & Certification */}
      <section className="py-24 bg-[#F4F6FD]">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2B30D4]/10 border border-[#2B30D4]/20 text-[#2B30D4] mb-6">
              <BookOpen className="w-4 h-4" />
              <span className="text-xs font-medium">Formation & Certification</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D1160] tracking-tight mb-4">
              Formation & Transfert de Compétences
            </h2>
            <p className="text-lg text-[#7A85A8] font-light max-w-3xl mx-auto">
              BBC & Partners conçoit des parcours de formation immersifs, centrés sur la pratique et l'acquisition de réflexes opérationnels. Notre mission est d'aligner le développement des compétences managériales et techniques avec les objectifs stratégiques de votre organisation.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            {/* Piliers pédagogiques */}
            <div className="bg-white rounded-2xl p-6 border border-[rgba(26,29,181,0.1)]">
              <h4 className="font-bold text-[#0D1160] mb-4">Excellence Méthodologique</h4>
              <p className="text-sm text-[#7A85A8]">Des standards éprouvés et actualisés selon les meilleures pratiques internationales.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[rgba(26,29,181,0.1)]">
              <h4 className="font-bold text-[#0D1160] mb-4">Immersion Contextuelle</h4>
              <p className="text-sm text-[#7A85A8]">Des études de cas et des simulations bâties sur vos réalités et enjeux locaux.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[rgba(26,29,181,0.1)]">
              <h4 className="font-bold text-[#0D1160] mb-4">Efficacité Immédiate</h4>
              <p className="text-sm text-[#7A85A8]">Des boîtes à outils concrètes pour un déploiement direct et autonome sur le terrain.</p>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-white rounded-2xl p-8 border border-[rgba(26,29,181,0.1)]">
            <h3 className="text-xl font-bold text-[#0D1160] mb-6 text-center">Nos certifications Lean Six Sigma</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🟡</span>
                </div>
                <h4 className="font-bold text-[#0D1160] mb-2">Yellow Belt</h4>
                <p className="text-sm text-[#7A85A8]">Initiation aux fondamentaux du Lean Six Sigma</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🟢</span>
                </div>
                <h4 className="font-bold text-[#0D1160] mb-2">Green Belt</h4>
                <p className="text-sm text-[#7A85A8]">Maîtrise des outils et conduite de projets</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">⚫</span>
                </div>
                <h4 className="font-bold text-[#0D1160] mb-2">Black Belt</h4>
                <p className="text-sm text-[#7A85A8]">Expertise avancée et mentorat</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Solutions */}
      <section className="py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2B30D4]/10 border border-[#2B30D4]/20 text-[#2B30D4] mb-6">
              <Cpu className="w-4 h-4" />
              <span className="text-xs font-medium">Solutions Technologiques</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D1160] tracking-tight mb-4">
              La technologie au service de la performance
            </h2>
            <p className="text-lg text-[#7A85A8] font-light max-w-3xl mx-auto">
              La technologie est un levier clé de performance opérationnelle lorsqu'elle est intégrée de manière cohérente aux processus métiers. Notre approche est orientée usage, résultats et simplicité opérationnelle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#0A0A8A] rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">GMAO MAINTEX</h3>
              <p className="text-white/70 mb-6">
                La solution MAINTEX structure votre fonction maintenance pour en faire un levier de productivité. Elle permet de passer d'une maintenance subie à une maintenance pilotée, garantissant une fiabilité maximale de votre outil de production.
              </p>
              <Link href="/fonctionnalites" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-all no-underline">
                Découvrir Maintex →
              </Link>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">ERP Odoo</h3>
              <p className="text-gray-600 mb-6">
                L'ERP Odoo centralise l'ensemble de vos flux au sein d'une plateforme unique, garantissant une source de vérité unique pour votre organisation. En alignant chaque département sur les mêmes référentiels, vous éliminez les silos de données.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Gestion de plans d'action</h3>
              <p className="text-gray-600 mb-6">
                Nous déployons des outils digitaux intuitifs dédiés à la centralisation et au pilotage de vos plans d'actions (issus des audits, revues de performance et chantiers d'amélioration).
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Plateforme IoT</h3>
              <p className="text-gray-600 mb-6">
                Nous déployons des solutions IoT (Internet des Objets) pour transformer vos équipements et infrastructures critiques en actifs communicants. Cette visibilité immédiate permet un pilotage proactif.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-24 bg-[#F4F6FD]">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D1160] tracking-tight mb-4">
              Nos secteurs d'activité
            </h2>
            <p className="text-lg text-[#7A85A8] font-light">
              Une expertise multi-sectorielle en Europe et en Afrique.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {sectors.map((sector, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center border border-gray-200 hover:shadow-lg hover:border-[#0A0A8A] transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#0A0A8A]/10 flex items-center justify-center mx-auto mb-3">
                  <sector.icon className="w-6 h-6 text-[#0A0A8A]" />
                </div>
                <div className="text-sm font-medium text-gray-900">{sector.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Presse */}
      <section id="presse" className="py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2B30D4]/10 border border-[#2B30D4]/20 text-[#2B30D4] mb-6">
              <Newspaper className="w-4 h-4" />
              <span className="text-xs font-medium">Presse & Médias</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D1160] tracking-tight mb-4">
              Ils parlent de nous
            </h2>
            <p className="text-lg text-[#7A85A8] font-light max-w-2xl mx-auto">
              Découvrez nos dernières actualités et retombées presse.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'MAINTEX 5.0 : La GMAO réinventée', source: 'Usine Nouvelle', date: 'Janvier 2024' },
              { title: 'BBC & Partners accélère son développement en Afrique', source: 'Jeune Afrique', date: 'Décembre 2023' },
              { title: 'L\'excellence opérationnelle au service des PME', source: 'Les Échos', date: 'Novembre 2023' },
            ].map((article, i) => (
              <div key={i} className="bg-[#F4F6FD] rounded-2xl p-6 border border-[rgba(26,29,181,0.1)]">
                <h3 className="font-bold text-[#0D1160] mb-2">{article.title}</h3>
                <div className="flex items-center justify-between text-sm text-[#7A85A8]">
                  <span>{article.source}</span>
                  <span>{article.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A0A8A]/10 border border-[#0A0A8A]/20 text-[#0A0A8A] mb-6">
              <Globe className="w-4 h-4" />
              <span className="text-xs font-medium">Présence internationale</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              Nos implantations
            </h2>
            <p className="text-lg text-gray-600 font-normal">
              BBC & Partners intervient en Europe et en Afrique à travers ses bureaux et partenaires.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((loc, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{loc.flag}</span>
                  <h3 className="text-lg font-bold text-gray-900">{loc.country}</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2 text-gray-500 text-sm">
                    <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#0A0A8A]" />
                    <span>{loc.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <Phone className="w-4 h-4 flex-shrink-0 text-[#0A0A8A]" />
                    <span>{loc.phone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a href="mailto:info@bbc-partners.com" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#0A0A8A] transition-all no-underline">
              <Mail className="w-5 h-5" />
              <span>info@bbc-partners.com</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="relative z-10 max-w-[1240px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-6">
            Prêt à transformer votre performance ?
          </h2>
          <p className="text-lg text-gray-600 font-normal max-w-xl mx-auto mb-10">
            Contactez-nous pour discuter de vos enjeux et découvrir comment nous pouvons vous accompagner.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-white bg-[#0A0A8A] rounded-lg hover:bg-[#0A0A8A]/90 transition-all no-underline">
            Contactez nos experts →
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}

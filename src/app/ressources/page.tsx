'use client'

import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import Link from 'next/link'
import { 
  BookOpen, Video, GraduationCap, HelpCircle, Rss,
  Calculator, FileCode, LayoutTemplate, FileText,
  Star, Users, Play, MessageSquare,
  ArrowRight, CheckCircle2, Calendar, Clock, Download, Code, FileSearch, BookMarked
} from 'lucide-react'

export default function RessourcesPage() {
  const learnResources = [
    { icon: BookOpen, title: 'Centre de ressources', description: 'Articles, guides et tutoriels pour maîtriser MAINTEX', count: '150+ articles', href: '#', id: 'centre' },
    { icon: Video, title: 'Webinaires', description: 'Sessions en direct avec nos experts produit', count: '24 replays', href: '#webinaires', id: 'webinaires' },
    { icon: GraduationCap, title: 'Académie MAINTEX', description: 'Formations certifiantes pour votre équipe', count: '12 parcours', href: '/education', id: 'academie' },
    { icon: HelpCircle, title: 'Centre d\'aide', description: 'FAQ et support pour toutes vos questions', count: '500+ réponses', href: '#aide', id: 'aide' },
    { icon: Rss, title: 'Blog', description: 'Actualités, tendances et bonnes pratiques GMAO', count: 'Nouveau chaque semaine', href: '#blog', id: 'blog' },
  ]

  const toolsResources = [
    { icon: Calculator, title: 'Calculateur ROI', description: 'Estimez votre retour sur investissement MAINTEX', action: 'Calculer', href: '#roi', id: 'roi' },
    { icon: FileCode, title: 'Documentation API', description: 'Guide complet pour intégrer MAINTEX', action: 'Consulter', href: '#api', id: 'api' },
    { icon: LayoutTemplate, title: 'Templates', description: 'Modèles de plannings, rapports et processus', count: '35 templates', href: '#templates', id: 'templates' },
    { icon: FileText, title: 'Livres blancs', description: 'Guides experts sur la maintenance', count: '8 livres blancs', href: '#livres-blancs', id: 'livres-blancs' },
  ]

  const testimonialResources = [
    { icon: Star, title: 'Études de cas', description: 'Success stories détaillées de nos clients', count: '25 études', href: '/clients#etudes', id: 'etudes' },
    { icon: Users, title: 'Clients par secteur', description: 'Découvrez nos références dans votre secteur', count: '15+ Modules', href: '/clients', id: 'clients' },
    { icon: Play, title: 'Vidéos témoignages', description: 'Retours d\'expérience en vidéo', count: '18 vidéos', href: '#videos', id: 'videos' },
    { icon: MessageSquare, title: 'Avis clients', description: 'Ce que nos utilisateurs pensent de MAINTEX', count: '4.8/5 étoiles', href: '/clients#avis', id: 'avis' },
  ]

  const featuredContent = [
    {
      type: 'Guide',
      title: 'Guide complet de la maintenance préventive',
      description: 'Tout ce que vous devez savoir pour mettre en place un programme de maintenance préventive efficace.',
      image: '/images/industrial-maintenance.png',
      tag: 'Populaire',
      href: '#'
    },
    {
      type: 'Webinaire',
      title: 'MAINTEX 5.0 : Découvrez les nouveautés',
      description: 'Présentation exclusive des nouvelles fonctionnalités de la version 5.0.',
      image: '/images/gmao-dashboard.png',
      tag: 'Nouveau',
      href: '#webinaires'
    },
    {
      type: 'Étude de cas',
      title: 'Comment Veolia a réduit ses temps d\'arrêt de 40%',
      description: 'Retour d\'expérience détaillé sur le déploiement MAINTEX chez Veolia.',
      image: '/images/energy-utilities.png',
      tag: 'À la une',
      href: '/clients#etudes'
    }
  ]

  const categories = [
    'Tout', 'Guides', 'Webinaires', 'Études de cas', 'Templates', 'API', 'Blog'
  ]

  const webinaires = [
    { title: 'MAINTEX 5.0 : Nouveautés et démo', date: '15 janvier 2024', duration: '45 min', speaker: 'Équipe Produit', image: '/images/webinar-presentation.png' },
    { title: 'Maintenance prédictive : Retour d\'expérience', date: '22 février 2024', duration: '60 min', speaker: 'Expert Industrie', image: '/images/webinar-presentation.png' },
    { title: 'Optimiser vos stocks avec MAINTEX', date: '5 mars 2024', duration: '30 min', speaker: 'Consultant Senior', image: '/images/webinar-presentation.png' },
  ]

  const faqItems = [
    { question: 'Comment débuter avec MAINTEX ?', answer: 'MAINTEX est conçu pour être intuitif. Commencez par notre guide de démarrage rapide ou contactez notre équipe pour une formation personnalisée.' },
    { question: 'Quelles sont les intégrations disponibles ?', answer: 'MAINTEX s\'intègre nativement avec SAP, Sage, Odoo, Divalto et propose une API REST complète pour vos développements spécifiques.' },
    { question: 'Mes données sont-elles sécurisées ?', answer: 'Oui, toutes vos données sont chiffrées, hébergées en France et MAINTEX est conforme au RGPD.' },
    { question: 'Puis-je personnaliser les workflows ?', answer: 'Absolument ! MAINTEX offre une flexibilité totale pour adapter les workflows à vos processus métiers.' },
  ]

  const blogArticles = [
    { title: 'Les 10 commandements de la maintenance préventive', category: 'Bonnes pratiques', date: '15 jan. 2024', image: '/images/blog-articles.png' },
    { title: 'Comment calculer le ROI de votre GMAO', category: 'Finance', date: '10 jan. 2024', image: '/images/blog-articles.png' },
    { title: 'IA et maintenance : vers une révolution prédictive', category: 'Innovation', date: '5 jan. 2024', image: '/images/blog-articles.png' },
    { title: 'RGPD et maintenance : les obligations à connaître', category: 'Réglementation', date: '28 déc. 2023', image: '/images/blog-articles.png' },
  ]

  const whitePapers = [
    { title: 'Guide complet de la maintenance préventive', pages: '24 pages', download: 'Gratuit', image: '/images/white-papers.png' },
    { title: 'Maintenance prédictive : Théorie et pratique', pages: '36 pages', download: 'Gratuit', image: '/images/white-papers.png' },
    { title: 'ROI de la GMAO : Méthodologie de calcul', pages: '18 pages', download: 'Gratuit', image: '/images/white-papers.png' },
  ]

  const templates = [
    { title: 'Plan de maintenance préventive', type: 'Excel', icon: LayoutTemplate },
    { title: 'Fiche équipement type', type: 'Word', icon: FileText },
    { title: 'Rapport d\'intervention', type: 'PDF', icon: FileSearch },
    { title: 'Checklist audit maintenance', type: 'Excel', icon: CheckCircle2 },
  ]

  return (
    <main className="min-h-screen bg-white font-sans">
      <SiteHeader />

      {/* Hero */}
      <section className="relative pt-[70px] pb-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#e2e8f0_1px,transparent_0)] bg-[size:40px_40px] opacity-50" />

        <div className="relative z-10 max-w-[1240px] mx-auto px-6 lg:px-10 text-center py-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A0A8A]/10 border border-[#0A0A8A]/20 text-[#0A0A8A] mb-6">
            <BookOpen className="w-4 h-4" />
            <span className="text-xs font-medium">Centre de ressources</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.06] tracking-tight mb-6 max-w-3xl mx-auto">
            Tout ce dont vous<br />
            <span className="text-[#0A0A8A]">
              avez besoin.
            </span>
          </h1>
          <p className="text-lg text-gray-600 font-normal max-w-xl mx-auto">
            Guides, webinaires, templates et études de cas pour réussir votre projet GMAO.
          </p>

          {/* Search */}
          <div className="max-w-xl mx-auto mt-10">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher des ressources..."
                className="w-full px-6 py-4 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0A0A8A]"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {categories.map((cat, i) => (
              <button
                key={i}
                className={`px-4 py-2 text-sm rounded-full transition-all ${
                  i === 0
                    ? 'bg-[#0A0A8A] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">À la une</h2>
            <Link href="#" className="text-sm text-[#0A0A8A] hover:underline no-underline">
              Voir tout →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredContent.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all no-underline"
              >
                <div className="relative h-40 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-[#0A0A8A] text-white text-xs font-medium rounded-full">
                      {item.tag}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="text-xs text-[#0A0A8A] font-medium mb-2">{item.type}</div>
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#0A0A8A] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Learn Section */}
      <section id="apprendre" className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-[#0A0A8A]/10 rounded-xl flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-[#0A0A8A]" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Apprendre</h2>
              <p className="text-sm text-gray-600">Montez en compétences sur MAINTEX</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {learnResources.map((resource, i) => (
              <Link
                key={i}
                href={resource.href}
                className="group p-5 bg-gray-50 rounded-xl hover:bg-[#0A0A8A]/5 transition-all no-underline"
              >
                <div className="w-10 h-10 bg-[#0A0A8A]/10 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <resource.icon className="w-5 h-5 text-[#0A0A8A]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-[#0A0A8A]">{resource.title}</h3>
                <p className="text-xs text-gray-600 mb-2">{resource.description}</p>
                <div className="text-xs text-[#0A0A8A] font-medium">{resource.count}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Webinaires Section */}
      <section id="webinaires" className="py-20 bg-gray-50">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#0A0A8A]/10 rounded-xl flex items-center justify-center">
                <Video className="w-5 h-5 text-[#0A0A8A]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Webinaires</h2>
                <p className="text-sm text-gray-600">Sessions en direct avec nos experts</p>
              </div>
            </div>
            <Link href="#" className="text-sm text-[#0A0A8A] hover:underline no-underline">
              Voir tous les replays →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {webinaires.map((web, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all">
                <div className="h-40 overflow-hidden">
                  <img src={web.image} alt={web.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 mb-3">{web.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{web.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{web.duration}</span>
                    </div>
                  </div>
                  <div className="text-xs text-[#0A0A8A] mt-3">{web.speaker}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Centre d'aide Section */}
      <section id="aide" className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#0A0A8A]/10 rounded-xl flex items-center justify-center">
                  <HelpCircle className="w-5 h-5 text-[#0A0A8A]" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Centre d&apos;aide</h2>
                  <p className="text-sm text-gray-600">FAQ et support pour toutes vos questions</p>
                </div>
              </div>
              <p className="text-gray-600 mb-8">
                Trouvez rapidement des réponses à vos questions sur MAINTEX. Notre base de connaissances couvre tous les aspects de la plateforme.
              </p>
              <div className="space-y-4">
                {faqItems.map((item, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">{item.question}</h3>
                    <p className="text-sm text-gray-600">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#0A0A8A] rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Besoin d&apos;aide personnalisée ?</h3>
              <p className="text-white/70 mb-6">
                Notre équipe support est disponible pour répondre à toutes vos questions et vous accompagner dans l&apos;utilisation de MAINTEX.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold">Chat en direct</div>
                    <div className="text-sm text-white/60">Réponse en moins de 5 min</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <BookMarked className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold">Documentation</div>
                    <div className="text-sm text-white/60">500+ articles détaillés</div>
                  </div>
                </div>
              </div>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0A0A8A] rounded-lg font-medium hover:bg-white/90 transition-all no-underline mt-6">
                Contacter le support →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-gray-50">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#0A0A8A]/10 rounded-xl flex items-center justify-center">
                <Rss className="w-5 h-5 text-[#0A0A8A]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Blog</h2>
                <p className="text-sm text-gray-600">Actualités et bonnes pratiques GMAO</p>
              </div>
            </div>
            <Link href="#" className="text-sm text-[#0A0A8A] hover:underline no-underline">
              Voir tous les articles →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogArticles.map((article, i) => (
              <Link key={i} href="#" className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all no-underline">
                <div className="h-32 overflow-hidden">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-[#0A0A8A] font-medium">{article.category}</span>
                    <span className="text-gray-500">{article.date}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm group-hover:text-[#0A0A8A] transition-colors">
                    {article.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="outils" className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-[#0A0A8A]/10 rounded-xl flex items-center justify-center">
              <LayoutTemplate className="w-5 h-5 text-[#0A0A8A]" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Outils</h2>
              <p className="text-sm text-gray-600">Ressources pratiques pour votre projet</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {toolsResources.map((resource, i) => (
              <Link
                key={i}
                href={resource.href}
                className="group bg-gray-50 rounded-xl p-6 hover:bg-[#0A0A8A]/5 transition-all no-underline"
              >
                <div className="w-12 h-12 bg-[#0A0A8A]/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <resource.icon className="w-6 h-6 text-[#0A0A8A]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#0A0A8A]">{resource.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{resource.description}</p>
                <div className="flex items-center gap-2 text-sm text-[#0A0A8A] font-medium">
                  {resource.count || resource.action}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section id="roi" className="py-20 bg-[#0A0A8A] relative overflow-hidden">
        <div className="relative z-10 max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/80 mb-6">
                <Calculator className="w-4 h-4" />
                <span className="text-sm">Calculateur ROI</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-6">
                Calculez votre retour sur investissement
              </h2>
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                Découvrez combien MAINTEX peut vous faire économiser chaque année. 
                Notre calculateur analyse vos données pour estimer votre ROI potentiel.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Réduction des temps d\'arrêt',
                  'Optimisation des stocks',
                  'Gain de productivité',
                  'Conformité réglementaire'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0A0A8A] rounded-lg font-medium hover:bg-white/90 transition-all no-underline"
              >
                Calculer mon ROI
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="text-center mb-8">
                <div className="text-5xl font-black text-white mb-2">34%</div>
                <div className="text-white/50">d'économies moyennes</div>
              </div>
              <div className="space-y-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white/60 text-sm">Temps d'arrêt</span>
                    <span className="text-green-400 font-bold">-38%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-green-400 rounded-full" style={{width: '62%'}}></div>
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white/60 text-sm">Coûts maintenance</span>
                    <span className="text-green-400 font-bold">-34%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-green-400 rounded-full" style={{width: '66%'}}></div>
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white/60 text-sm">Productivité</span>
                    <span className="text-blue-400 font-bold">+41%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-400 rounded-full" style={{width: '41%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API Documentation Section */}
      <section id="api" className="py-20 bg-gray-50">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <img src="/images/api-documentation.jpg" alt="Documentation API" className="w-full h-auto" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A0A8A]/10 border border-[#0A0A8A]/20 text-[#0A0A8A] mb-6">
                <Code className="w-4 h-4" />
                <span className="text-xs font-medium">Documentation API</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-6">
                Intégrez MAINTEX à vos systèmes
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Notre API REST complète vous permet de connecter MAINTEX à tous vos systèmes métiers. Documentation claire, exemples de code et SDK disponibles.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { title: 'API REST', desc: 'Endpoints complets' },
                  { title: 'Webhooks', desc: 'Événements temps réel' },
                  { title: 'SDK', desc: 'Python, Node.js, PHP' },
                  { title: 'OAuth 2.0', desc: 'Authentification sécurisée' },
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                    <div className="font-bold text-gray-900">{item.title}</div>
                    <div className="text-sm text-gray-600">{item.desc}</div>
                  </div>
                ))}
              </div>
              <Link href="#" className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A0A8A] text-white rounded-lg font-medium hover:bg-[#0A0A8A]/90 transition-all no-underline">
                Consulter la documentation API →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section id="templates" className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A0A8A]/10 border border-[#0A0A8A]/20 text-[#0A0A8A] mb-6">
                <LayoutTemplate className="w-4 h-4" />
                <span className="text-xs font-medium">Templates</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-6">
                Modèles prêts à l&apos;emploi
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Gagnez du temps avec nos templates professionnels. Plans de maintenance, fiches équipements, rapports... Tout est prêt à être utilisé.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {templates.map((template, i) => (
                  <div key={i} className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
                    <div className="w-10 h-10 rounded-lg bg-[#0A0A8A]/10 flex items-center justify-center">
                      <template.icon className="w-5 h-5 text-[#0A0A8A]" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{template.title}</div>
                      <div className="text-xs text-gray-500">{template.type}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <img src="/images/templates-library.png" alt="Templates" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Livres Blancs Section */}
      <section id="livres-blancs" className="py-20 bg-gray-50">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#0A0A8A]/10 rounded-xl flex items-center justify-center">
                <FileText className="w-5 h-5 text-[#0A0A8A]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Livres blancs</h2>
                <p className="text-sm text-gray-600">Guides experts sur la maintenance</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {whitePapers.map((paper, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all">
                <div className="h-48 overflow-hidden">
                  <img src={paper.image} alt={paper.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{paper.title}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <span>{paper.pages}</span>
                    <span className="text-green-600 font-medium">{paper.download}</span>
                  </div>
                  <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-[#0A0A8A] text-white rounded-lg text-sm font-medium hover:bg-[#0A0A8A]/90 transition-all">
                    <Download className="w-4 h-4" />
                    Télécharger
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="temoignages" className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-[#0A0A8A]/10 rounded-xl flex items-center justify-center">
              <Star className="w-5 h-5 text-[#0A0A8A]" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Témoignages</h2>
              <p className="text-sm text-gray-600">Ce que nos clients disent de MAINTEX</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonialResources.map((resource, i) => (
              <Link
                key={i}
                href={resource.href}
                className="group bg-gray-50 rounded-xl p-6 hover:bg-[#0A0A8A]/5 transition-all no-underline"
              >
                <div className="w-12 h-12 bg-[#0A0A8A]/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <resource.icon className="w-6 h-6 text-[#0A0A8A]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#0A0A8A]">{resource.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{resource.description}</p>
                <div className="text-sm text-[#0A0A8A] font-medium">{resource.count}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="py-20 bg-gray-50">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#0A0A8A]/10 rounded-xl flex items-center justify-center">
                <Play className="w-5 h-5 text-[#0A0A8A]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Vidéos témoignages</h2>
                <p className="text-sm text-gray-600">Retours d&apos;expérience en vidéo</p>
              </div>
            </div>
            <Link href="#" className="text-sm text-[#0A0A8A] hover:underline no-underline">
              Voir toutes les vidéos →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Veolia : Réduction de 40% des temps d\'arrêt', company: 'Veolia', duration: '4:32' },
              { title: 'Air Liquide : Déploiement en 3 mois', company: 'Air Liquide', duration: '5:15' },
              { title: 'Michelin : 350 techniciens formés', company: 'Michelin', duration: '3:48' },
            ].map((video, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all cursor-pointer group">
                <div className="relative h-40 bg-[#0A0A8A] flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                  <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/50 rounded text-white text-xs">
                    {video.duration}
                  </div>
                </div>
                <div className="p-5">
                  <div className="text-xs text-[#0A0A8A] font-medium mb-2">{video.company}</div>
                  <h3 className="font-bold text-gray-900">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-white">
        <div className="max-w-[800px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Restez informé
          </h2>
          <p className="text-gray-600 mb-8">
            Recevez nos derniers articles, webinaires et mises à jour directement dans votre boîte mail.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Votre email professionnel"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-sm focus:border-[#0A0A8A] focus:outline-none"
            />
            <button className="px-6 py-3 bg-[#0A0A8A] text-white rounded-lg font-medium hover:bg-[#0A0A8A]/90 transition-all">
              S'inscrire
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            Pas de spam, désinscription à tout moment.
          </p>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-20 bg-[#0A0A8A] relative overflow-hidden">
        <div className="relative z-10 max-w-[1240px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-6">
            Prêt à découvrir MAINTEX ?
          </h2>
          <p className="text-lg text-white/70 font-normal max-w-xl mx-auto mb-10">
            Demandez une démonstration personnalisée et voyez comment MAINTEX peut transformer votre maintenance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-[#0A0A8A] bg-white rounded-lg hover:bg-white/90 transition-all no-underline">
              Demander une démo →
            </Link>
            <Link href="/tarifs" className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-white border border-white/30 rounded-lg hover:border-white/60 transition-all no-underline">
              Voir les tarifs
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}

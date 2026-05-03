'use client'

import { useState } from 'react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import Link from 'next/link'
import { 
  CheckCircle2, HelpCircle, Zap, Building2, Users, Shield, Server, 
  HeadphonesIcon, Clock, ChevronRight, Sparkles, X, ArrowRight,
  BadgeCheck, TrendingUp, Target, Gift, Star, Phone
} from 'lucide-react'
import { TabletMockup, MobileMockup, GMAODashboardMockup, PricingDashboardMockup, MobileTaskListMockup } from '@/components/device-mockups'

export default function TarifsPage() {
  const [isAnnual, setIsAnnual] = useState(true)

  const plans = [
    {
      name: 'Freemium',
      price: { annual: 0, monthly: 0 },
      period: 'pour toujours',
      users: '1-2 utilisateurs',
      description: 'Idéal pour découvrir MAINTEX et les petites structures.',
      cta: 'Commencer gratuitement',
      ctaSubtext: 'Sans carte bancaire',
      popular: false,
      icon: Zap,
      color: '#64748B',
      features: [
        { name: 'Ordres de travail', included: true },
        { name: 'Gestion équipements', included: true },
        { name: 'Mobile & offline', included: true },
        { name: 'Multi-sites limité', included: true },
        { name: 'Diagnostic IA limité', included: true },
        { name: 'Stockage 2 Go', included: true },
        { name: 'Support FAQ', included: true },
        { name: 'Automatisations', included: false },
        { name: 'API', included: false },
        { name: 'Reporting', included: false },
      ]
    },
    {
      name: 'Starter',
      price: { annual: 15, monthly: 18 },
      period: '/ utilisateur / mois',
      users: '3-10 utilisateurs',
      description: 'Pour les équipes qui structurent leur maintenance.',
      cta: "Démarrer l'essai gratuit",
      ctaSubtext: "30 jours d'essai gratuit",
      popular: false,
      icon: Users,
      color: '#1E3A8A',
      features: [
        { name: 'Ordres de travail', included: true },
        { name: 'Gestion équipements', included: true },
        { name: 'Mobile & offline', included: true },
        { name: 'Multi-sites', included: true },
        { name: 'Diagnostic IA', included: true },
        { name: 'Automatisations limitées', included: true },
        { name: 'API basique', included: true },
        { name: 'Reporting basique', included: true },
        { name: 'Stockage 5 Go', included: true },
        { name: 'Support email', included: true },
      ]
    },
    {
      name: 'Pro',
      price: { annual: 30, monthly: 36 },
      period: '/ utilisateur / mois',
      users: '11-20 utilisateurs',
      description: 'Pour les organisations qui veulent optimiser chaque intervention.',
      cta: "Démarrer l'essai gratuit",
      ctaSubtext: "30 jours d'essai gratuit",
      popular: true,
      icon: Sparkles,
      color: '#F97316',
      features: [
        { name: 'Tout Starter inclus', included: true },
        { name: 'Automatisations complètes', included: true },
        { name: 'API complète', included: true },
        { name: 'Reporting avancé', included: true },
        { name: 'Stockage 15 Go', included: true },
        { name: 'Support prioritaire', included: true },
        { name: 'Fonctions vitales', included: true },
        { name: 'Budgets & projets', included: true },
        { name: 'Intégrations ERP', included: true },
        { name: 'Webhooks', included: true },
      ]
    },
    {
      name: 'Business',
      price: { annual: 70, monthly: 84 },
      period: '/ utilisateur / mois',
      users: '21+ utilisateurs',
      description: 'Pour les grandes entreprises avec des besoins avancés.',
      cta: 'Nous contacter',
      ctaSubtext: 'Devis personnalisé',
      popular: false,
      icon: Building2,
      color: '#1E3A8A',
      features: [
        { name: 'Tout Pro inclus', included: true },
        { name: 'IA prédictive', included: true },
        { name: 'SSO / Sécurité avancée', included: true },
        { name: 'Stockage illimité', included: true },
        { name: 'Support dédié', included: true },
        { name: 'Account manager', included: true },
        { name: 'Formation sur site', included: true },
        { name: 'SLA personnalisé', included: true },
        { name: 'Hébergement dédié', included: true },
        { name: 'API avancée', included: true },
      ]
    }
  ]

  const faqs = [
    {
      question: 'Puis-je essayer MAINTEX gratuitement ?',
      answer: "Oui, nous proposons un essai gratuit de 30 jours sans engagement et sans carte bancaire. Vous avez accès à toutes les fonctionnalités du plan Pro pendant cette période."
    },
    {
      question: 'Comment fonctionne la facturation ?',
      answer: "La facturation est mensuelle ou annuelle (avec jusqu'à 20% d'économie). Vous pouvez upgrader ou downgrader à tout moment. La facturation est proratisée."
    },
    {
      question: "L'hébergement est-il inclus ?",
      answer: "Oui, l'hébergement cloud en France est inclus dans tous les plans. Pour les besoins d'hébergement dédié ou on-premise, contactez-nous pour un devis Business."
    },
    {
      question: 'Le support est-il disponible en français ?',
      answer: "Absolument ! Notre équipe support est basée en France et disponible en français du lundi au vendredi, 9h-18h. Le support téléphonique prioritaire est inclus dans les plans Pro et Business."
    },
    {
      question: 'Combien de temps prend le déploiement ?',
      answer: "Le déploiement standard prend 2 à 4 semaines incluant la formation. Pour les projets Business avec intégrations ERP, comptez 6 à 12 semaines selon la complexité."
    },
    {
      question: 'Y a-t-il un engagement ?',
      answer: "Aucun engagement pour les plans mensuels. Pour les contrats annuels, vous bénéficiez de jusqu'à 20% d'économie. Les contrats Business sont négociés au cas par cas."
    }
  ]

  const stats = [
    { value: '30 jours', label: 'Essai gratuit', icon: Gift },
    { value: '20%', label: 'Économie annuelle', icon: TrendingUp },
    { value: '14 jours', label: 'Déploiement', icon: Clock },
    { value: '99.9%', label: 'Uptime garanti', icon: Server },
  ]

  return (
    <main className="min-h-screen bg-[#FAFAF9] font-sans">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative pt-[90px] pb-20 overflow-hidden">
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F97316]/10 border border-[#F97316]/20 text-[#1E3A8A] mb-8">
                <Zap className="w-4 h-4 text-[#F97316]" />
                <span className="text-sm font-semibold">Tarification transparente et sans engagement</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0C0A09] leading-tight tracking-tight mb-6">
                Des tarifs adaptés<br />
                <span className="text-[#1E3A8A]">à votre croissance.</span>
              </h1>
              
              <p className="text-lg text-[#44403C] max-w-xl mb-8">
                Démarrez gratuitement, évoluez à votre rythme. Essai 30 jours sans carte bancaire sur tous les plans payants.
              </p>

              {/* Toggle Switch */}
              <div className="flex flex-col items-start gap-4">
                <div className="relative bg-white rounded-2xl p-1.5 shadow-lg border border-gray-200 inline-flex">
                  <button
                    onClick={() => setIsAnnual(true)}
                    className={`relative px-8 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      isAnnual 
                        ? 'text-white' 
                        : 'text-[#64748b] hover:text-[#1E3A8A]'
                    }`}
                  >
                    {isAnnual && (
                      <span className="absolute inset-0 bg-[#1E3A8A] rounded-xl shadow-md" />
                    )}
                    <span className="relative">Annuel</span>
                  </button>
                  <button
                    onClick={() => setIsAnnual(false)}
                    className={`relative px-8 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      !isAnnual 
                        ? 'text-white' 
                        : 'text-[#64748b] hover:text-[#1E3A8A]'
                    }`}
                  >
                    {!isAnnual && (
                      <span className="absolute inset-0 bg-[#1E3A8A] rounded-xl shadow-md" />
                    )}
                    <span className="relative">Mensuel</span>
                  </button>
                </div>
                
                {isAnnual && (
                  <div className="flex items-center gap-2 text-[#059669] font-semibold">
                    <div className="w-5 h-5 rounded-full bg-[#059669]/20 flex items-center justify-center">
                      <CheckCircle2 className="w-3 h-3" />
                    </div>
                    Économisez jusqu'à 20% avec la facturation annuelle
                  </div>
                )}
              </div>
            </div>

            {/* Device Mockups */}
            <div className="hidden lg:flex justify-center gap-4">
              <TabletMockup className="w-[300px]">
                <PricingDashboardMockup />
              </TabletMockup>
              <MobileMockup className="w-[150px] mt-16">
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
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 text-white/90 text-sm">
            <div className="flex items-center gap-2">
              <Server className="w-4 h-4 text-[#F97316]" />
              <span>Hébergement France</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#F97316]" />
              <span>RGPD conforme</span>
            </div>
            <div className="flex items-center gap-2">
              <HeadphonesIcon className="w-4 h-4 text-[#F97316]" />
              <span>Support francophone</span>
            </div>
            <div className="flex items-center gap-2">
              <BadgeCheck className="w-4 h-4 text-[#F97316]" />
              <span>Sans engagement</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-[#F97316]/10 flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-5 h-5 text-[#F97316]" />
                </div>
                <div className="text-2xl font-bold text-[#1E3A8A]">{stat.value}</div>
                <div className="text-sm text-[#64748b]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-[#FAFAF9]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-6 transition-all duration-300 flex flex-col group ${
                  plan.popular
                    ? 'border-2 border-[#F97316] shadow-xl scale-[1.02] lg:scale-105 ring-4 ring-[#F97316]/10 z-10'
                    : 'border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#F97316]/30 hover:-translate-y-1'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-[#F97316] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                    <Star className="w-3 h-3 fill-white" />
                    Le plus populaire
                  </div>
                )}

                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div 
                    className={`w-11 h-11 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110`}
                    style={{ backgroundColor: `${plan.color}15` }}
                  >
                    <plan.icon className="w-5 h-5" style={{ color: plan.color }} />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider" style={{ color: plan.color }}>
                      {plan.name}
                    </div>
                    <div className="text-xs text-[#64748b]">{plan.users}</div>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-4">
                  {plan.name === 'Business' && (
                    <span className="text-xs text-[#64748b] font-medium">À partir de</span>
                  )}
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold tracking-tight text-[#0C0A09]">
                      {plan.price[isAnnual ? 'annual' : 'monthly']}€
                    </span>
                    {plan.price.annual > 0 && (
                      <span className="text-sm text-[#64748b]">{plan.period}</span>
                    )}
                  </div>
                  {plan.price.annual === 0 && (
                    <div className="text-sm text-[#64748b]">{plan.period}</div>
                  )}
                  {isAnnual && plan.price.annual > 0 && (
                    <div className="flex items-center gap-1 text-xs text-[#059669] font-semibold mt-1">
                      <TrendingUp className="w-3 h-3" />
                      Économisez {Math.round((1 - plan.price.annual / plan.price.monthly) * 100)}%
                    </div>
                  )}
                </div>
                
                <p className="text-sm text-[#44403C] mb-6 leading-relaxed flex-grow">{plan.description}</p>

                {/* CTA */}
                <Link
                  href={plan.name === 'Business' ? '/contact' : '/essai-gratuit'}
                  className={`block w-full py-3 text-center rounded-xl text-sm font-semibold transition-all no-underline mb-4 ${
                    plan.popular
                      ? 'bg-[#F97316] text-white hover:bg-[#EA580C] shadow-lg shadow-[#F97316]/25 hover:shadow-xl hover:shadow-[#F97316]/30'
                      : 'bg-[#1E3A8A] text-white hover:bg-[#1E3A8A]/90'
                  }`}
                >
                  {plan.cta}
                </Link>
                <p className="text-xs text-[#9CA3AF] text-center">{plan.ctaSubtext}</p>

                {/* Features */}
                <div className="border-t border-gray-100 pt-5 mt-4">
                  <div className="text-xs font-semibold text-[#64748b] uppercase tracking-wider mb-3">
                    Fonctionnalités incluses
                  </div>
                  <div className="space-y-2.5">
                    {plan.features.slice(0, 7).map((feature, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-sm">
                        {feature.included ? (
                          <CheckCircle2 className="w-4 h-4 text-[#059669] flex-shrink-0" />
                        ) : (
                          <X className="w-4 h-4 text-gray-300 flex-shrink-0" />
                        )}
                        <span className={feature.included ? 'text-[#44403C]' : 'text-gray-400'}>
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#F97316] mb-3 block">Comparatif</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0C0A09] mb-4">
                Quelle formule choisir ?
              </h2>
              <p className="text-lg text-[#44403C] mb-8">
                Un guide simple pour trouver la formule adaptée à vos besoins
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: Zap,
                    title: 'Freemium',
                    subtitle: 'Pour découvrir',
                    description: 'Idéal pour tester MAINTEX sans engagement. Parfait pour les très petites structures.',
                    features: ['1-2 utilisateurs', 'Fonctionnalités de base', 'Support FAQ'],
                  },
                  {
                    icon: Users,
                    title: 'Starter / Pro',
                    subtitle: 'Pour croître',
                    description: 'Pour les équipes qui veulent structurer leur maintenance et gagner en efficacité.',
                    features: ['3-20 utilisateurs', 'Diagnostic IA', 'Support prioritaire'],
                  },
                  {
                    icon: Building2,
                    title: 'Business',
                    subtitle: 'Pour scaler',
                    description: 'Pour les grandes organisations avec des besoins avancés et des intégrations ERP.',
                    features: ['21+ utilisateurs', 'IA prédictive', 'Support dédié'],
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-[#FAFAF9] rounded-xl p-5 border border-gray-200 hover:border-[#F97316] transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#F97316]/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-[#F97316]" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-bold text-[#0C0A09]">{item.title}</h3>
                          <span className="text-sm text-[#F97316] font-semibold">{item.subtitle}</span>
                        </div>
                        <p className="text-sm text-[#44403C] mb-2">{item.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {item.features.map((f, j) => (
                            <span key={j} className="flex items-center gap-1 text-xs text-[#64748b]">
                              <CheckCircle2 className="w-3 h-3 text-[#059669]" />
                              {f}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <TabletMockup className="w-[340px]">
                <GMAODashboardMockup />
              </TabletMockup>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-gradient-to-br from-[#1E3A8A] to-[#1E3A8A]/95 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(249,115,22,0.15),transparent_50%)]" />
        
        <div className="relative z-10 max-w-[900px] mx-auto px-6 lg:px-10 text-center">
          <div className="flex gap-1 justify-center mb-6">
            {[1,2,3,4,5].map((star) => (
              <Star key={star} className="w-5 h-5 fill-[#F97316] text-[#F97316]" />
            ))}
          </div>
          
          <blockquote className="text-2xl md:text-3xl font-medium text-white mb-8 leading-relaxed">
            "Nous avons comparé plusieurs solutions. MAINTEX s'est démarqué par son rapport qualité-prix, son support francophone et sa capacité à s'adapter à nos processus métier."
          </blockquote>
          
          <div className="flex items-center justify-center gap-4">
            <div className="w-14 h-14 rounded-full bg-[#F97316]/20 flex items-center justify-center text-white font-bold text-lg">
              JP
            </div>
            <div className="text-left">
              <div className="font-semibold text-white">Jean-Pierre M.</div>
              <div className="text-sm text-white/70">Directeur Maintenance — Énergie (Côte d'Ivoire)</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#FAFAF9]">
        <div className="max-w-[800px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#F97316] mb-3 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0C0A09] mb-4">
              Questions fréquentes
            </h2>
            <p className="text-lg text-[#44403C]">
              Tout ce que vous devez savoir avant de démarrer
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:border-[#F97316]/30 transition-colors">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-semibold text-[#0C0A09]">
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#F97316] flex-shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-sm text-[#44403C] leading-relaxed ml-8">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="bg-gradient-to-br from-[#F97316] to-[#EA580C] rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Prêt à démarrer ?
              </h2>
              <p className="text-lg text-white/90 max-w-xl mx-auto mb-8">
                Essayez MAINTEX gratuitement pendant 30 jours. Sans engagement, sans carte bancaire.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/essai-gratuit" 
                  className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-[#F97316] bg-white rounded-xl hover:bg-gray-100 transition-all shadow-lg no-underline"
                >
                  Démarrer l'essai gratuit <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all no-underline"
                >
                  <Phone className="w-4 h-4" />
                  Parler à un expert
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

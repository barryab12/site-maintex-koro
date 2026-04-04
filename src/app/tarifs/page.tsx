import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import Link from 'next/link'
import { CheckCircle2, HelpCircle, Zap, Building2, Users } from 'lucide-react'

export default function TarifsPage() {
  const plans = [
    {
      name: 'Starter',
      price: '490€',
      period: '/mois',
      users: 'jusqu\'à 10 utilisateurs',
      description: 'Idéal pour les PME souhaitant digitaliser rapidement leur maintenance.',
      features: [
        'Ordres de travail illimités',
        'Maintenance préventive',
        'Gestion des stocks de base',
        'Application mobile iOS & Android',
        'Support email 5j/7',
        '1 site / 1 entrepôt',
        'Formation en ligne incluse'
      ],
      cta: "Démarrer l'essai gratuit",
      popular: false,
      icon: Zap
    },
    {
      name: 'Pro',
      price: '990€',
      period: '/mois',
      users: 'jusqu\'à 50 utilisateurs',
      description: 'La solution complète pour les entreprises multi-sites avec besoins avancés.',
      features: [
        'Tout Starter, plus…',
        'Multi-sites illimité',
        'Tableaux de bord avancés',
        'API REST & webhooks',
        'Intégrations ERP (SAP, Sage, Odoo)',
        'Support téléphonique prioritaire',
        'Onboarding 2 jours sur site'
      ],
      cta: 'Essayer 30 jours gratuit',
      popular: true,
      icon: Users
    },
    {
      name: 'Enterprise',
      price: 'Sur devis',
      period: '',
      users: 'utilisateurs illimités',
      description: 'Pour les grands comptes avec exigences spécifiques de sécurité et conformité.',
      features: [
        'Tout Pro, plus…',
        'SSO SAML 2.0 / OIDC',
        'SLA contractuel garanti 99.9%',
        'Hébergement dédié possible',
        'Formations terrain incluses',
        'Customer Success Manager dédié',
        'Contrat évolutif sur-mesure'
      ],
      cta: 'Contacter les ventes',
      popular: false,
      icon: Building2
    }
  ]

  const faqs = [
    {
      question: 'Puis-je essayer MAINTEX gratuitement ?',
      answer: 'Oui, nous proposons un essai gratuit de 30 jours sans engagement et sans carte bancaire. Vous avez accès à toutes les fonctionnalités du plan Pro pendant cette période.'
    },
    {
      question: 'Comment fonctionne la facturation ?',
      answer: 'La facturation est mensuelle ou annuelle (avec 2 mois offerts). Vous pouvez upgrader ou downgrader à tout moment. La facturation est proratisée.'
    },
    {
      question: 'L\'hébergement est-il inclus ?',
      answer: 'Oui, l\'hébergement cloud en France est inclus dans tous les plans. Pour les besoins d\'hébergement dédié ou on-premise, contactez-nous pour un devis Enterprise.'
    },
    {
      question: 'Le support est-il disponible en français ?',
      answer: 'Absolument ! Notre équipe support est basée en France et disponible en français du lundi au vendredi, 9h-18h. Le support téléphonique prioritaire est inclus dans les plans Pro et Enterprise.'
    },
    {
      question: 'Combien de temps prend le déploiement ?',
      answer: 'Le déploiement standard prend 2 à 4 semaines incluant la formation. Pour les projets Enterprise avec intégrations ERP, comptez 6 à 12 semaines selon la complexité.'
    },
    {
      question: 'Y a-t-il un engagement ?',
      answer: 'Aucun engagement pour les plans mensuels. Pour les contrats annuels, vous bénéficiez de 2 mois offerts. Les contrats Enterprise sont négociés au cas par cas.'
    }
  ]

  return (
    <main className="min-h-screen bg-white font-sans">
      <SiteHeader />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center pt-[70px] pb-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#e2e8f0_1px,transparent_0)] bg-[size:40px_40px] opacity-50" />

        <div className="relative z-10 max-w-[1240px] mx-auto px-6 lg:px-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A0A8A]/10 border border-[#0A0A8A]/20 text-[#0A0A8A] mb-6">
            <Zap className="w-4 h-4" />
            <span className="text-xs font-medium">Tarification transparente</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.06] tracking-tight mb-6 max-w-3xl mx-auto">
            Des tarifs adaptés<br />
            <span className="text-[#0A0A8A]">
              à votre taille.
            </span>
          </h1>
          <p className="text-lg text-gray-600 font-normal max-w-xl mx-auto">
            Sans engagement long terme, sans frais cachés. Essai gratuit 30 jours sur tous les plans.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-8 transition-all ${
                  plan.popular
                    ? 'border-2 border-[#0A0A8A] shadow-xl scale-[1.02]'
                    : 'border border-gray-200 shadow-sm'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0A0A8A] text-white text-xs font-semibold px-4 py-1 rounded-full">
                    ⭐ Le plus populaire
                  </div>
                )}

                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${plan.popular ? 'bg-[#0A0A8A]/10' : 'bg-gray-100'}`}>
                    <plan.icon className={`w-5 h-5 ${plan.popular ? 'text-[#0A0A8A]' : 'text-gray-600'}`} />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#0A0A8A]">{plan.name}</div>
                </div>

                <div className="mb-2">
                  <span className="text-5xl font-black tracking-tight text-gray-900">{plan.price}</span>
                  <span className="text-sm text-gray-500">{plan.period}</span>
                </div>
                <div className="text-sm text-gray-500 mb-4">{plan.users}</div>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">{plan.description}</p>

                <div className="border-t border-gray-200 pt-6 mb-6">
                  <ul className="space-y-3">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-[#0A0A8A] flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={plan.name === 'Enterprise' ? '/contact' : '#'}
                  className={`block w-full py-3 text-center rounded-lg text-sm font-medium transition-all no-underline ${
                    plan.popular
                      ? 'bg-[#0A0A8A] text-white hover:bg-[#0A0A8A]/90'
                      : 'bg-transparent text-gray-900 border border-gray-300 hover:border-[#0A0A8A] hover:text-[#0A0A8A]'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 items-center">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle2 className="w-5 h-5 text-[#0A0A8A]" />
              Essai gratuit 30 jours
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle2 className="w-5 h-5 text-[#0A0A8A]" />
              Sans engagement
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle2 className="w-5 h-5 text-[#0A0A8A]" />
              Hébergement France
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle2 className="w-5 h-5 text-[#0A0A8A]" />
              Support en français
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              Comparez les plans
            </h2>
            <p className="text-lg text-gray-600 font-normal">
              Trouvez le plan adapté à vos besoins
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 text-sm font-semibold text-gray-600">Fonctionnalité</th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-gray-600">Starter</th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-[#0A0A8A] bg-gray-50">Pro</th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-gray-600">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Utilisateurs', starter: '10', pro: '50', enterprise: 'Illimité' },
                  { feature: 'Sites', starter: '1', pro: 'Illimité', enterprise: 'Illimité' },
                  { feature: 'Ordres de travail', starter: '✓', pro: '✓', enterprise: '✓' },
                  { feature: 'Maintenance préventive', starter: '✓', pro: '✓', enterprise: '✓' },
                  { feature: 'Application mobile', starter: '✓', pro: '✓', enterprise: '✓' },
                  { feature: 'API REST', starter: '—', pro: '✓', enterprise: '✓' },
                  { feature: 'Intégrations ERP', starter: '—', pro: '✓', enterprise: '✓' },
                  { feature: 'SSO SAML', starter: '—', pro: '—', enterprise: '✓' },
                  { feature: 'SLA garanti', starter: '—', pro: '—', enterprise: '✓' },
                  { feature: 'Support téléphonique', starter: '—', pro: 'Prioritaire', enterprise: 'Dédié' },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-gray-100">
                    <td className="py-4 px-4 text-sm text-gray-600">{row.feature}</td>
                    <td className="py-4 px-4 text-sm text-center text-gray-500">{row.starter}</td>
                    <td className="py-4 px-4 text-sm text-center text-[#0A0A8A] bg-gray-50 font-medium">{row.pro}</td>
                    <td className="py-4 px-4 text-sm text-center text-gray-500">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[800px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              Questions fréquentes
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-[#0A0A8A] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-20 bg-[#0A0A8A] relative overflow-hidden">
        <div className="relative z-10 max-w-[1240px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-6">
            Prêt à démarrer ?
          </h2>
          <p className="text-lg text-white/70 font-normal max-w-xl mx-auto mb-10">
            Essayez MAINTEX gratuitement pendant 30 jours. Sans engagement, sans carte bancaire.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-[#0A0A8A] bg-white rounded-lg hover:bg-white/90 transition-all no-underline">
              Demander une démo →
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}

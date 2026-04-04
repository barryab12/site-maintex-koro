import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import Link from 'next/link'
import { CheckCircle2, GraduationCap, BookOpen, Award } from 'lucide-react'

export default function EducationPage() {
  const plans = [
    {
      name: 'STUDY',
      price: 'Gratuit',
      period: '',
      description: 'Pour les élèves et étudiants',
      features: [
        'Version monoposte complète',
        'Toutes les fonctionnalités GMAO',
        'Validité 1 an',
        'Enregistrements limités',
        'Menu d\'aide intégré',
        'Didacticiel inclus'
      ],
      cta: 'Télécharger',
      icon: BookOpen,
      popular: false
    },
    {
      name: 'TRAINING',
      price: '220€',
      period: 'HT/an',
      description: 'Pour les enseignants',
      features: [
        'Installation multi-postes',
        'Toutes les fonctionnalités',
        'Mises à jour incluses',
        'Support technique email',
        'Ressources pédagogiques',
        'Exercices pratiques'
      ],
      cta: 'Commander',
      icon: GraduationCap,
      popular: false
    },
    {
      name: 'CAMPUS',
      price: '440€',
      period: 'HT/an',
      description: 'Formation incluse',
      features: [
        'Installation multi-postes',
        'Toutes les fonctionnalités',
        'Mises à jour incluses',
        'Web formation 2h incluse',
        'Support prioritaire',
        'Certification possible'
      ],
      cta: 'Commander',
      icon: Award,
      popular: true
    }
  ]

  const benefits = [
    {
      title: 'Menu d\'aide intégré',
      description: 'Conseils, leçons et didacticiel directement dans le logiciel pour une prise en main rapide.'
    },
    {
      title: 'Prise en main immédiate',
      description: 'Interface intuitive conçue pour les débutants comme les utilisateurs avancés.'
    },
    {
      title: 'Atout pour l\'emploi',
      description: 'Une compétence recherchée par les entreprises industrielles françaises.'
    },
    {
      title: 'Solution recommandée',
      description: 'MAINTEX est adapté et conseillé pour l\'enseignement de la maintenance.'
    }
  ]

  const institutions = [
    'Université Lyon 1', 'IUT de Nantes', 'Lycée Dorian Paris',
    'INSA Toulouse', 'IUT de Cachan', 'Lycée technique de Saint-Étienne',
    'UTC Compiègne', 'Polytech Marseille', 'IUT de Grenoble'
  ]

  return (
    <main className="min-h-screen bg-white font-sans">
      <SiteHeader />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center pt-[70px] pb-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#e2e8f0_1px,transparent_0)] bg-[size:40px_40px] opacity-50" />

        <div className="relative z-10 max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A0A8A]/10 border border-[#0A0A8A]/20 text-[#0A0A8A] mb-6">
            <GraduationCap className="w-4 h-4" />
            <span className="text-xs font-medium">Offre Éducation</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.06] tracking-tight mb-6 max-w-3xl">
            MAINTEX pour<br />
            <span className="text-[#0A0A8A]">
              l&apos;enseignement.
            </span>
          </h1>
          <p className="text-lg text-gray-600 font-normal max-w-xl">
            MAINTEX attache une très grande importance à l&apos;éducation.
            Notre approche pédagogique permet une prise en main quasi immédiate.
          </p>
        </div>
      </section>

      {/* Why Education */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <div className="text-[11px] uppercase tracking-wider text-[#0A0A8A] font-semibold mb-4">
              Pourquoi l&apos;éducation
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              Former les talents de demain
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nous croyons que l&apos;accès à des outils professionnels est essentiel
              pour préparer les étudiants aux réalités du monde industriel.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl p-8 text-center transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="w-14 h-14 bg-[#0A0A8A]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-7 h-7 text-[#0A0A8A]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-sm text-gray-600">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <div className="text-[11px] uppercase tracking-wider text-[#0A0A8A] font-semibold mb-4">
              Nos offres éducation
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              Choisissez votre formule
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-8 transition-all ${
                  plan.popular
                    ? 'border-2 border-[#0A0A8A] shadow-xl'
                    : 'border border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0A0A8A] text-white text-xs font-semibold px-4 py-1 rounded-full">
                    ⭐ Le plus complet
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
                <p className="text-sm text-gray-600 mb-6">{plan.description}</p>

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

                <button className={`w-full py-3 rounded-lg text-sm font-medium transition-all ${
                  plan.popular
                    ? 'bg-[#0A0A8A] text-white hover:bg-[#0A0A8A]/90'
                    : 'bg-transparent text-gray-900 border border-gray-300 hover:border-[#0A0A8A] hover:text-[#0A0A8A]'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutions */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <div className="text-[11px] uppercase tracking-wider text-[#0A0A8A] font-semibold mb-4">
              Ils nous font confiance
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              Établissements partenaires
            </h2>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-5 gap-px bg-gray-200 rounded-2xl overflow-hidden border border-gray-200">
            {institutions.map((inst, i) => (
              <div key={i} className="bg-white p-6 text-center text-xs font-medium text-gray-400">
                {inst}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Education */}
      <section className="py-24 bg-white">
        <div className="max-w-[800px] mx-auto px-6 lg:px-10">
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 lg:p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Contactez notre équipe éducation</h3>
            <p className="text-gray-600 mb-6">
              Pour toute question sur nos offres éducation ou pour demander un accès,
              contactez notre équipe dédiée.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 text-white bg-[#0A0A8A] rounded-lg hover:bg-[#0A0A8A]/90 transition-all no-underline">
                Nous contacter →
              </Link>
              <a href="mailto:education@maintex.fr" className="inline-flex items-center gap-2 px-6 py-3 text-gray-600 border border-gray-300 rounded-lg hover:border-[#0A0A8A] hover:text-[#0A0A8A] no-underline">
                education@maintex.fr
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}

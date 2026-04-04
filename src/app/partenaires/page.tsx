import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import Link from 'next/link'
import { CheckCircle2, Users, Award, GraduationCap, Briefcase, HeadphonesIcon, Wrench, Database, Code, Building, Mail } from 'lucide-react'

export default function PartenairesPage() {
  const accreditationTypes = [
    {
      id: 'revendeur',
      icon: <Briefcase className="w-8 h-8" />,
      title: 'Revendeur',
      description: 'Gérez en totale autonomie le cycle de vente, de la détection du besoin jusqu\'à la commande client.',
      training: '3 jours de formation technico-commerciale',
      benefits: [
        'Formation initiale gratuite',
        'Documentation commerciale complète',
        'Version de démonstration dédiée',
        'Accompagnement terrain (tournée commerciale)',
        'Formation annuelle sur les nouveautés'
      ]
    },
    {
      id: 'support',
      icon: <HeadphonesIcon className="w-8 h-8" />,
      title: 'Support Technique 1er Niveau',
      description: 'Intervenez directement auprès des clients pour les demandes d\'assistance fonctionnelle et technique.',
      training: '5 jours de formation (2 jours fonctionnel + 3 jours en binôme)',
      benefits: [
        'Formation technique approfondie',
        'Accès direct à l\'équipe support éditeur',
        'Outils de diagnostic avancés',
        'Veille proactive sur les évolutions',
        'Certification nominative'
      ]
    },
    {
      id: 'formateur',
      icon: <GraduationCap className="w-8 h-8" />,
      title: 'Formateur',
      description: 'Dispensez les formations et accompagnements nécessaires à la mise en place de Maintex chez les clients.',
      training: '3 jours de formation + phase d\'observation + validation',
      benefits: [
        'Formation pédagogique complète',
        'Supports de formation officiels',
        'Certification nominative',
        'Supervision des premières formations',
        'Accès aux ressources pédagogiques'
      ]
    }
  ]

  const exclusiveDomains = [
    {
      icon: <Wrench className="w-6 h-6" />,
      title: 'Installation du Progiciel',
      description: 'Installation autonome du logiciel avec les prérequis et procédures fournis par l\'éditeur.'
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Reprise de données',
      description: 'Import en masse des données via les fonctions Excel prévues à cet effet.'
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Interfaces sortantes',
      description: 'Création d\'interfaces vers d\'autres logiciels (ERP, supervision, comptabilité...).'
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: 'Développements spécifiques',
      description: 'Création d\'outils satellites (reporting, tableaux de bord personnalisés).'
    }
  ]

  const editorCommitments = [
    'Formation initiale et continue gratuite',
    'Fourniture des nouvelles versions du progiciel',
    'Documentation technique et commerciale adaptée',
    'Version de démonstration en ligne',
    'Politique d\'animation et de communication du réseau',
    'Support technique niveau 2'
  ]

  return (
    <main className="min-h-screen bg-white font-sans">
      <SiteHeader />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center pt-[70px] pb-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#e2e8f0_1px,transparent_0)] bg-[size:40px_40px] opacity-50" />

        <div className="relative z-10 max-w-[1240px] mx-auto px-6 lg:px-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A0A8A]/10 border border-[#0A0A8A]/20 text-[#0A0A8A] mb-6">
            <Users className="w-4 h-4" />
            <span className="text-xs font-medium">Devenez partenaire</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.06] tracking-tight mb-6 max-w-3xl mx-auto">
            Rejoignez le réseau<br />
            <span className="text-[#0A0A8A]">
              BBC & Partners France
            </span>
          </h1>
          <p className="text-lg text-gray-600 font-normal max-w-xl mx-auto">
            Distribuez Maintex, la solution GMAO de nouvelle génération, et développez votre activité avec le soutien d\'un éditeur engagé.
          </p>
        </div>
      </section>

      {/* Distribution Concept */}
      <section className="py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-6">
              Un réseau de distribution sélective
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              BBC & Partners France a élaboré un concept de distribution sélective, réservant un service de qualité et de proximité autour de distributeurs agréés sélectionnés sur critères objectifs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-200">
              <div className="w-16 h-16 bg-[#0A0A8A]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-[#0A0A8A]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Qualité</h3>
              <p className="text-gray-600">Des distributeurs sélectionnés pour leurs aptitudes à commercialiser Maintex dans des conditions optimales.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-200">
              <div className="w-16 h-16 bg-[#0A0A8A]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Building className="w-8 h-8 text-[#0A0A8A]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Proximité</h3>
              <p className="text-gray-600">Une présence régionale renforcée pour un service de proximité auprès des utilisateurs finaux.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-200">
              <div className="w-16 h-16 bg-[#0A0A8A]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-[#0A0A8A]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Accompagnement</h3>
              <p className="text-gray-600">Mobilisation des équipes BBC & Partners pour assurer la réussite de chaque distributeur.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditation Types */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-6">
              Trois types d\'agrément
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choisissez le type d\'agrément correspondant à votre positionnement et à vos compétences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {accreditationTypes.map((type) => (
              <div key={type.id} className="bg-white border border-gray-200 rounded-2xl p-8">
                <div className="text-[#0A0A8A] mb-6">
                  {type.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{type.title}</h3>
                <p className="text-gray-600 mb-6">{type.description}</p>
                
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <p className="text-sm text-[#0A0A8A] font-medium mb-1">Formation requise</p>
                  <p className="text-sm text-gray-600">{type.training}</p>
                </div>

                <ul className="space-y-3">
                  {type.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#0A0A8A]" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Process */}
      <section className="py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-6">
              Un processus d\'agrément structuré
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              L\'agrément est délivré de manière nominative après validation des compétences.
            </p>
          </div>

          <div className="relative">
            {/* Timeline */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2"></div>
            
            <div className="space-y-12">
              {[
                { step: 1, title: 'Demande d\'agrément', desc: 'Prise de contact et présentation du programme de partenariat.' },
                { step: 2, title: 'Formation initiale', desc: 'Formation technico-commerciale gratuite (frais de déplacement à votre charge).' },
                { step: 3, title: 'Validation des compétences', desc: 'Évaluation des acquis et vérification des critères objectifs.' },
                { step: 4, title: 'Délivrance de l\'agrément', desc: 'Agrément nominatif vous permettant de commercialiser Maintex.' },
                { step: 5, title: 'Accompagnement continu', desc: 'Tournée commerciale, formation annuelle et support de l\'éditeur.' }
              ].map((item, index) => (
                <div key={item.step} className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 inline-block">
                      <span className="text-[#0A0A8A] font-bold text-lg">Étape {item.step}</span>
                      <h3 className="text-xl font-bold text-gray-900 mt-2 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-12 h-12 bg-[#0A0A8A] rounded-full items-center justify-center text-white font-bold z-10 flex-shrink-0">
                    {item.step}
                  </div>
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Exclusive Domains */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-6">
              Domaines d\'intervention autonome
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              En tant que distributeur agréé, vous pouvez réaliser en autonomie certaines prestations accompagnant la mise en place de Maintex.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {exclusiveDomains.map((domain, index) => (
              <div key={index} className="flex items-start gap-4 bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="w-12 h-12 bg-[#0A0A8A]/10 rounded-xl flex items-center justify-center flex-shrink-0 text-[#0A0A8A]">
                  {domain.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{domain.title}</h3>
                  <p className="text-gray-600">{domain.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editor Commitments */}
      <section className="py-24 bg-[#0A0A8A] relative overflow-hidden">
        <div className="relative z-10 max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-6">
                Les engagements de BBC & Partners France
              </h2>
              <p className="text-lg text-white/70 mb-8">
                L\'éditeur s\'engage à accompagner chaque distributeur agréé pour assurer sa réussite commerciale.
              </p>

              <ul className="space-y-4">
                {editorCommitments.map((commitment, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/80">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-green-400" />
                    <span>{commitment}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Contact partenariat</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50">Email</p>
                    <a href="mailto:maintex@bbc-partners.com" className="text-white font-medium hover:underline">maintex@bbc-partners.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <Building className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50">Adresse</p>
                    <p className="text-white font-medium">16 rue Louis Pergaud, 94700 Maisons-Alfort</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-sm text-white/50 mb-4">BBC & Partners France</p>
                <p className="text-sm text-white/60">SARL au capital de 200 000 €<br />RCS Créteil n° 538 385 436</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-6">
            Devenez distributeur agréé
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto mb-10">
            Contactez-nous pour discuter des conditions de partenariat et démarrer votre agrément.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-white bg-[#0A0A8A] rounded-lg hover:bg-[#0A0A8A]/90 transition-all no-underline"
          >
            Demander le contrat de distribution →
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}

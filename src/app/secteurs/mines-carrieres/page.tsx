import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import Link from 'next/link'
import { Pickaxe, Shield, Clock, TrendingDown, Users, Award } from 'lucide-react'

export default function MinesCarrieresPage() {
  const benefits = [
    { icon: Shield, title: 'Sécurité renforcée', desc: 'Traçabilité complète des interventions et conformité aux normes' },
    { icon: Clock, title: 'Disponibilité maximale', desc: 'Réduction des temps d\'arrêt des équipements critiques' },
    { icon: TrendingDown, title: 'Coûts optimisés', desc: 'Gestion proactive des pièces de rechange et consommables' },
  ]

  const features = [
    'Gestion des équipements miniers (concasseurs, broyeurs, excavatrices)',
    'Maintenance préventive basée sur les compteurs d\'heures',
    'Gestion des lubrifiants et consommables',
    'Suivi des interventions en temps réel via mobile',
    'Tableaux de bord KPI dédiés au secteur minier',
    'Conformité aux normes de sécurité (ISO 45001)',
  ]

  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />
      
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center">
              <Pickaxe className="w-8 h-8 text-white" />
            </div>
            <div>
              <span className="text-amber-600 font-medium text-sm">Secteur</span>
              <h1 className="text-3xl font-bold text-gray-900">Mines & Carrières</h1>
            </div>
          </div>
          
          <p className="text-xl text-gray-600 max-w-3xl mb-8">
            Optimisez la disponibilité de vos équipements miniers et réduisez vos coûts d&apos;exploitation 
            avec une GMAO adaptée aux contraintes du terrain.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="px-6 py-3 bg-[#0A0A8A] text-white rounded-lg font-medium hover:bg-[#0A0A8A]/90 transition-colors no-underline">
              Demander une démo
            </Link>
            <Link href="/clients" className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors no-underline">
              Voir nos références
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Pourquoi MAINTEX pour les mines ?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6">
                <benefit.icon className="w-10 h-10 text-amber-500 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Fonctionnalités clés</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-lg">
                <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-[#0A0A8A] rounded-2xl p-8 text-white">
            <p className="text-xl mb-6">
              &quot;Depuis que nous utilisons MAINTEX, nos temps d&apos;arrêt ont diminué de 35%. 
              La gestion des pièces de rechange est devenue beaucoup plus efficace.&quot;
            </p>
            <div className="flex items-center justify-center gap-4">
              <Users className="w-8 h-8 opacity-50" />
              <div className="text-left">
                <div className="font-semibold">Directeur Maintenance</div>
                <div className="text-sm opacity-75">Mine d&apos;or, Burkina Faso</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <Award className="w-12 h-12 text-amber-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Prêt à transformer votre maintenance minière ?
          </h2>
          <p className="text-gray-600 mb-8">
            Rejoignez les entreprises minières qui font confiance à MAINTEX.
          </p>
          <Link href="/contact" className="inline-flex px-6 py-3 bg-[#0A0A8A] text-white rounded-lg font-medium hover:bg-[#0A0A8A]/90 transition-colors no-underline">
            Demander une démonstration →
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}

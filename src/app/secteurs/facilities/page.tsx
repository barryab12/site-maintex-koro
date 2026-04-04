import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import Link from 'next/link'
import { Building, Shield, Clock, TrendingDown, Users, Award } from 'lucide-react'

export default function FacilitiesPage() {
  const benefits = [
    { icon: Shield, title: 'Conformité réglementaire', desc: 'Respect des normes de sécurité et environnementales' },
    { icon: Clock, title: 'Réactivité maximale', desc: 'Gestion des demandes et interventions en temps réel' },
    { icon: TrendingDown, title: 'Économies d\'énergie', desc: 'Optimisation de la maintenance des systèmes techniques' },
  ]

  const features = [
    'Gestion multi-sites et multi-bâtiments',
    'Helpdesk intégré pour les demandeurs',
    'Maintenance des systèmes CVC, éclairage, sécurité',
    'Gestion des contrats de maintenance',
    'Contrôle des accès et badging',
    'Tableaux de bord consommation énergétique',
  ]

  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />
      
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center">
              <Building className="w-8 h-8 text-white" />
            </div>
            <div>
              <span className="text-blue-600 font-medium text-sm">Secteur</span>
              <h1 className="text-3xl font-bold text-gray-900">Facility Management</h1>
            </div>
          </div>
          
          <p className="text-xl text-gray-600 max-w-3xl mb-8">
            Gérez efficacement vos bâtiments et installations techniques avec une GMAO 
            conçue pour les facility managers et gestionnaires immobiliers.
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
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Pourquoi MAINTEX pour les facilities ?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6">
                <benefit.icon className="w-10 h-10 text-blue-500 mb-4" />
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
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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
              &quot;MAINTEX nous a permis de centraliser la gestion de nos 12 bâtiments 
              et de réduire nos coûts de maintenance de 25%.&quot;
            </p>
            <div className="flex items-center justify-center gap-4">
              <Users className="w-8 h-8 opacity-50" />
              <div className="text-left">
                <div className="font-semibold">Facility Manager</div>
                <div className="text-sm opacity-75">Groupe immobilier, France</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <Award className="w-12 h-12 text-blue-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Optimisez la gestion de vos bâtiments
          </h2>
          <p className="text-gray-600 mb-8">
            Découvrez comment MAINTEX peut transformer votre facility management.
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

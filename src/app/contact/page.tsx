'use client'

import { useState } from 'react'
import Image from 'next/image'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { 
  Phone, Mail, MapPin, Clock, Send, CheckCircle, Building2,
  TrendingUp, Activity, Gauge, Target, ArrowUpRight, Users, Shield, Zap
} from 'lucide-react'
import { MiniLineChartInline } from '@/components/photo-data-visual'

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  const interventionData = [65, 72, 68, 85, 92, 88, 95, 102, 98, 110, 105, 115]

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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F97316]/10 border border-[#F97316]/20 text-[#1E3A8A] mb-6">
                <Building2 className="w-4 h-4 text-[#F97316]" />
                <span className="text-sm font-semibold">Contact</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0C0A09] leading-tight tracking-tight mb-6">
                Parlons de<br />
                <span className="text-[#1E3A8A]">votre projet.</span>
              </h1>
              
              <p className="text-lg text-[#44403C] max-w-xl mb-8">
                Demandez une démo personnalisée ou posez vos questions à notre équipe. 
                Réponse sous 24h garantie.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link 
                  href="#contact-form" 
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#F97316] text-white font-semibold rounded-xl hover:bg-[#EA580C] transition-all shadow-lg shadow-[#F97316]/25 no-underline"
                >
                  Demander une démo
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <a 
                  href="tel:+33187666702" 
                  className="inline-flex items-center gap-2 px-6 py-3.5 border-2 border-[#1E3A8A]/20 text-[#1E3A8A] font-semibold rounded-xl hover:border-[#1E3A8A] transition-all no-underline"
                >
                  <Phone className="w-4 h-4" />
                  +33 (0)1 87 66 67 02
                </a>
              </div>
            </div>

            {/* Hero Photo with Floating Stats */}
            <div className="hidden lg:block relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/business-meeting.png"
                  alt="Équipe Maintex"
                  width={500}
                  height={400}
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-3 left-4 flex items-center gap-2 px-4 py-2.5 bg-[#F97316] text-white rounded-full shadow-lg">
                <Zap className="w-4 h-4" />
                <span className="text-sm font-semibold">Réponse 24h</span>
              </div>
              
              <div className="absolute top-16 right-4 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Gauge className="w-4 h-4 text-[#1E3A8A]" />
                  <span className="text-xs text-gray-500">Satisfaction</span>
                </div>
                <div className="text-2xl font-bold text-[#0C0A09]">98%</div>
              </div>
              
              <div className="absolute bottom-4 left-4 bg-white rounded-xl p-4 shadow-lg w-48">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-500">Projets</span>
                  <span className="text-xs font-semibold text-[#059669] bg-[#059669]/10 px-2 py-0.5 rounded-full">+15%</span>
                </div>
                <div className="text-xl font-bold text-[#0C0A09] mb-2">100+</div>
                <MiniLineChartInline data={interventionData} color="#1E3A8A" height={30} />
              </div>
              
              <div className="absolute bottom-4 right-4 bg-[#1E3A8A] text-white rounded-xl p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <div>
                    <div className="text-lg font-bold">350+</div>
                    <div className="text-xs text-white/80">Clients</div>
                  </div>
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
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 text-white/90 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#F97316]" />
              <span>Hébergement sécurisé</span>
            </div>
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-[#F97316]" />
              <span>RGPD conforme</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#F97316]" />
              <span>Support francophone • GMAO multilingues</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 text-[#F97316]" />
              <span>15+ Modules</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section id="contact-form" className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-[#0C0A09] mb-6">Comment pouvons-nous vous aider ?</h2>
              <p className="text-[#44403C] mb-10 leading-relaxed">
                Que vous soyez une PME cherchant à digitaliser votre maintenance ou un grand compte
                avec des besoins spécifiques, notre équipe est là pour vous accompagner.
              </p>

              {/* Contact Cards */}
              <div className="space-y-4 mb-10">
                <div className="bg-[#FAFAF9] border border-gray-200 rounded-xl p-6 flex items-start gap-4 hover:border-[#F97316]/30 transition-colors">
                  <div className="w-12 h-12 bg-[#F97316]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#F97316]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#0C0A09] mb-1">Téléphone</div>
                    <div className="text-[#44403C] text-sm">+33 (0)1 87 66 67 02</div>
                    <div className="text-xs text-[#64748b] mt-1">Du lundi au vendredi, 9h-18h</div>
                  </div>
                </div>

                <div className="bg-[#FAFAF9] border border-gray-200 rounded-xl p-6 flex items-start gap-4 hover:border-[#F97316]/30 transition-colors">
                  <div className="w-12 h-12 bg-[#F97316]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#F97316]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#0C0A09] mb-1">Email</div>
                    <div className="text-[#44403C] text-sm">contact@maintex.fr</div>
                    <div className="text-xs text-[#64748b] mt-1">Réponse sous 24h</div>
                  </div>
                </div>

                <div className="bg-[#FAFAF9] border border-gray-200 rounded-xl p-6 flex items-start gap-4 hover:border-[#F97316]/30 transition-colors">
                  <div className="w-12 h-12 bg-[#F97316]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#F97316]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#0C0A09] mb-1">Adresse</div>
                    <div className="text-[#44403C] text-sm">BBC & Partners</div>
                    <div className="text-[#44403C] text-sm">16 Rue Louis Pergaud, 94700 Maisons-Alfort, France</div>
                  </div>
                </div>

                <div className="bg-[#FAFAF9] border border-gray-200 rounded-xl p-6 flex items-start gap-4 hover:border-[#F97316]/30 transition-colors">
                  <div className="w-12 h-12 bg-[#F97316]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#F97316]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#0C0A09] mb-1">Horaires support</div>
                    <div className="text-[#44403C] text-sm">Lundi - Vendredi: 9h - 18h</div>
                    <div className="text-xs text-[#64748b] mt-1">Support technique et commercial</div>
                  </div>
                </div>
              </div>

              {/* BBC & Partners */}
              <div className="bg-[#1E3A8A] rounded-2xl p-6 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">BBC & Partners</div>
                    <div className="text-xs text-white/70">Éditeur de MAINTEX depuis 2009</div>
                  </div>
                </div>
                <p className="text-sm text-white/80">
                  BBC & Partners conçoit et édite MAINTEX depuis plus de 15 ans.
                  Basée en France, notre équipe accompagne les entreprises dans leur transformation
                  de la maintenance.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#FAFAF9] border border-gray-200 rounded-2xl p-8 lg:p-10">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-[#059669]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-[#059669]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0C0A09] mb-4">Message envoyé !</h3>
                  <p className="text-[#44403C] mb-6">
                    Nous vous répondrons dans les plus brefs délais (sous 24h ouvrées).
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="border-gray-300"
                  >
                    Envoyer un autre message
                  </Button>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-[#0C0A09] mb-6">Demande de démonstration</h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <Label htmlFor="name" className="text-sm font-medium text-[#44403C] mb-2 block">
                          Nom complet *
                        </Label>
                        <Input
                          id="name"
                          required
                          placeholder="Jean Dupont"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/10"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-sm font-medium text-[#44403C] mb-2 block">
                          Email professionnel *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          placeholder="jean@entreprise.fr"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/10"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <Label htmlFor="company" className="text-sm font-medium text-[#44403C] mb-2 block">
                          Entreprise *
                        </Label>
                        <Input
                          id="company"
                          required
                          placeholder="Nom de votre entreprise"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/10"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-sm font-medium text-[#44403C] mb-2 block">
                          Téléphone
                        </Label>
                        <Input
                          id="phone"
                          placeholder="+33 1 23 45 67 89"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/10"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="sector" className="text-sm font-medium text-[#44403C] mb-2 block">
                        Secteur d&apos;activité
                      </Label>
                      <select
                        id="sector"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/10 bg-white text-[#0C0A09]"
                      >
                        <option value="">Sélectionnez votre secteur</option>
                        <option value="industrie">Industrie & Production</option>
                        <option value="sante">Santé & Biomédical</option>
                        <option value="agroali">Agroalimentaire</option>
                        <option value="fm">Facility Management</option>
                        <option value="energie">Énergie & Utilities</option>
                        <option value="transport">Transport & Logistique</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-sm font-medium text-[#44403C] mb-2 block">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        required
                        rows={4}
                        placeholder="Décrivez votre projet ou posez vos questions..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/10 resize-none"
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="rgpd"
                        required
                        className="mt-1"
                      />
                      <Label htmlFor="rgpd" className="text-xs text-[#64748b] leading-relaxed">
                        J&apos;accepte que mes données soient traitées conformément à la politique de confidentialité.
                        Les informations recueillies sont nécessaires pour traiter votre demande.
                      </Label>
                    </div>

                    <Button
                      type="submit"
                      className="w-full py-4 text-base bg-[#F97316] hover:bg-[#EA580C] text-white rounded-xl shadow-lg shadow-[#F97316]/25"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Envoyer ma demande
                    </Button>

                    <p className="text-xs text-[#64748b] text-center">
                      * Champs obligatoires. Réponse garantie sous 24h.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section with Photo */}
      <section className="py-20 bg-[#FAFAF9]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#F97316] mb-3 block">International</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0C0A09] mb-4">
                Présence internationale
              </h2>
              <p className="text-lg text-[#44403C] mb-8">
                BBC & Partners intervient en Europe et en Afrique à travers ses bureaux et partenaires.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { country: 'France', flag: '🇫🇷', address: '16 Rue Louis Pergaud, 94700 Maisons-Alfort' },
                  { country: 'Burkina Faso', flag: '🇧🇫', address: '02 BP 5527 Ouagadougou 02' },
                  { country: 'Côte d\'Ivoire', flag: '🇨🇮', address: 'Centre Commercial Koubeissi, Abidjan' },
                  { country: 'Sénégal', flag: '🇸🇳', address: 'BP 23189 Ponty, Dakar' },
                ].map((loc, i) => (
                  <div key={i} className="bg-white rounded-xl p-4 border border-gray-200 hover:border-[#F97316]/30 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">{loc.flag}</span>
                      <span className="font-semibold text-[#0C0A09]">{loc.country}</span>
                    </div>
                    <p className="text-sm text-[#64748b]">{loc.address}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo with Stats */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/company-headquarters.png"
                  alt="BBC & Partners"
                  width={550}
                  height={400}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
              
              <div className="absolute -top-3 left-4 flex items-center gap-2 px-4 py-2.5 bg-[#1E3A8A] text-white rounded-full shadow-lg">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-semibold">18+ Secteurs</span>
              </div>
              
              <div className="absolute top-16 right-4 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Users className="w-4 h-4 text-[#F97316]" />
                  <span className="text-xs text-gray-500">Équipe</span>
                </div>
                <div className="text-2xl font-bold text-[#0C0A09]">40+</div>
              </div>
              
              <div className="absolute bottom-4 left-4 bg-[#F97316] text-white rounded-xl p-4 shadow-lg">
                <div className="text-lg font-bold">700+</div>
                <div className="text-xs text-white/80">Personnes formées</div>
              </div>
              
              <div className="absolute bottom-4 right-4 bg-white rounded-xl p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#059669]" />
                  <span className="text-sm font-medium">100+ projets</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}

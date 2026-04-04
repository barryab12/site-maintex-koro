'use client'

import { useState } from 'react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Building2 } from 'lucide-react'

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-white font-sans">
      <SiteHeader />

      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center pt-[70px] pb-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#e2e8f0_1px,transparent_0)] bg-[size:40px_40px] opacity-50" />

        <div className="relative z-10 max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A0A8A]/10 border border-[#0A0A8A]/20 text-[#0A0A8A] mb-6">
            <Building2 className="w-4 h-4" />
            <span className="text-xs font-medium">Contact</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.06] tracking-tight mb-6 max-w-3xl">
            Parlons de<br />
            <span className="text-[#0A0A8A]">
              votre projet.
            </span>
          </h1>
          <p className="text-lg text-gray-600 font-normal max-w-xl">
            Demandez une démo personnalisée ou posez vos questions à notre équipe.
            Réponse sous 24h garantie.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Comment pouvons-nous vous aider ?</h2>
              <p className="text-gray-600 mb-10 leading-relaxed">
                Que vous soyez une PME cherchant à digitaliser votre maintenance ou un grand compte
                avec des besoins spécifiques, notre équipe est là pour vous accompagner.
              </p>

              {/* Contact Cards */}
              <div className="space-y-4 mb-10">
                <div className="bg-white border border-gray-200 rounded-xl p-6 flex items-start gap-4 shadow-sm">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#0A0A8A]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Téléphone</div>
                    <div className="text-gray-600 text-sm">+33 (0)1 23 45 67 89</div>
                    <div className="text-xs text-gray-500 mt-1">Du lundi au vendredi, 9h-18h</div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 flex items-start gap-4 shadow-sm">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#0A0A8A]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Email</div>
                    <div className="text-gray-600 text-sm">contact@maintex.fr</div>
                    <div className="text-xs text-gray-500 mt-1">Réponse sous 24h</div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 flex items-start gap-4 shadow-sm">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#0A0A8A]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Adresse</div>
                    <div className="text-gray-600 text-sm">BBC & Partners</div>
                    <div className="text-gray-600 text-sm">Paris, France</div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 flex items-start gap-4 shadow-sm">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#0A0A8A]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Horaires support</div>
                    <div className="text-gray-600 text-sm">Lundi - Vendredi: 9h - 18h</div>
                    <div className="text-xs text-gray-500 mt-1">Support technique et commercial</div>
                  </div>
                </div>
              </div>

              {/* BBC & Partners */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="/upload/logo-bbc.png"
                    alt="BBC & Partners"
                    className="h-8"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">BBC & Partners</div>
                    <div className="text-xs text-gray-500">Éditeur de MAINTEX depuis 2009</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  BBC & Partners conçoit et édite MAINTEX depuis plus de 15 ans.
                  Basée en France, notre équipe accompagne les entreprises dans leur transformation
                  de la maintenance.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 lg:p-10 shadow-sm">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Message envoyé !</h3>
                  <p className="text-gray-600 mb-6">
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
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Demande de démonstration</h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <Label htmlFor="name" className="text-sm font-medium text-gray-700 mb-2 block">
                          Nom complet *
                        </Label>
                        <Input
                          id="name"
                          required
                          placeholder="Jean Dupont"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:border-[#0A0A8A] focus:ring-2 focus:ring-[#0A0A8A]/10"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
                          Email professionnel *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          placeholder="jean@entreprise.fr"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:border-[#0A0A8A] focus:ring-2 focus:ring-[#0A0A8A]/10"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <Label htmlFor="company" className="text-sm font-medium text-gray-700 mb-2 block">
                          Entreprise *
                        </Label>
                        <Input
                          id="company"
                          required
                          placeholder="Nom de votre entreprise"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:border-[#0A0A8A] focus:ring-2 focus:ring-[#0A0A8A]/10"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-2 block">
                          Téléphone
                        </Label>
                        <Input
                          id="phone"
                          placeholder="+33 1 23 45 67 89"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:border-[#0A0A8A] focus:ring-2 focus:ring-[#0A0A8A]/10"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="sector" className="text-sm font-medium text-gray-700 mb-2 block">
                        Secteur d&apos;activité
                      </Label>
                      <select
                        id="sector"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:border-[#0A0A8A] focus:ring-2 focus:ring-[#0A0A8A]/10 bg-white text-gray-900"
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
                      <Label htmlFor="message" className="text-sm font-medium text-gray-700 mb-2 block">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        required
                        rows={4}
                        placeholder="Décrivez votre projet ou posez vos questions..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:border-[#0A0A8A] focus:ring-2 focus:ring-[#0A0A8A]/10 resize-none"
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="rgpd"
                        required
                        className="mt-1"
                      />
                      <Label htmlFor="rgpd" className="text-xs text-gray-600 leading-relaxed">
                        J&apos;accepte que mes données soient traitées conformément à la politique de confidentialité.
                        Les informations recueillies sont nécessaires pour traiter votre demande.
                      </Label>
                    </div>

                    <Button
                      type="submit"
                      className="w-full py-4 text-base bg-[#0A0A8A] hover:bg-[#0A0A8A]/90 text-white"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Envoyer ma demande
                    </Button>

                    <p className="text-xs text-gray-500 text-center">
                      * Champs obligatoires. Réponse garantie sous 24h.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}

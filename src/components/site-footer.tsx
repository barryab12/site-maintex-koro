import Link from 'next/link'
import { Server, Shield, Globe, Users } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-200">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <img
              src="/upload/logo-maintex.png"
              alt="MAINTEX"
              className="h-8 mb-4"
            />
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              La GMAO mobile-first pour les industries francophones. Développé par BBC & Partners depuis 2009.
            </p>
            <div className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg">
              <img src="/upload/logo-bbc.png" alt="BBC & Partners" className="h-10 w-auto" />
              <div className="flex flex-col">
                <span className="text-xs font-medium text-gray-700">Développé par BBC & Partners</span>
                <span className="text-xs text-gray-500">Depuis 2009</span>
              </div>
            </div>
          </div>

          {/* Produit */}
          <div>
            <h4 className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold mb-5">Produit</h4>
            <ul className="space-y-3 list-none p-0 m-0">
              <li><Link href="/fonctionnalites" className="text-sm text-gray-500 hover:text-[#F97316] no-underline transition-colors">Fonctionnalités</Link></li>
              <li><Link href="/tarifs" className="text-sm text-gray-500 hover:text-[#F97316] no-underline transition-colors">Tarifs</Link></li>
              <li><Link href="/clients" className="text-sm text-gray-500 hover:text-[#F97316] no-underline transition-colors">Clients</Link></li>
              <li><Link href="/secteurs" className="text-sm text-gray-500 hover:text-[#F97316] no-underline transition-colors">Secteurs</Link></li>
              <li><Link href="/calculateur-roi" className="text-sm text-gray-500 hover:text-[#F97316] no-underline transition-colors">Calculateur ROI</Link></li>
              <li><Link href="/feuille-de-route" className="text-sm text-gray-500 hover:text-[#F97316] no-underline transition-colors">Feuille de route</Link></li>
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h4 className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold mb-5">Entreprise</h4>
            <ul className="space-y-3 list-none p-0 m-0">
              <li><Link href="/a-propos" className="text-sm text-gray-500 hover:text-[#F97316] no-underline transition-colors">À propos</Link></li>
              <li><Link href="/ressources#blog" className="text-sm text-gray-500 hover:text-[#F97316] no-underline transition-colors">Blog</Link></li>
              <li><Link href="#" className="text-sm text-gray-500 hover:text-[#F97316] no-underline transition-colors">Carrières</Link></li>
              <li><Link href="#" className="text-sm text-gray-500 hover:text-[#F97316] no-underline transition-colors">Presse</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-500 hover:text-[#F97316] no-underline transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold mb-5">Support</h4>
            <ul className="space-y-3 list-none p-0 m-0">
              <li><Link href="/legal/support" className="text-sm text-gray-500 hover:text-[#F97316] no-underline transition-colors">Centre d&apos;aide</Link></li>
              <li><Link href="/ressources#api" className="text-sm text-gray-500 hover:text-[#F97316] no-underline transition-colors">Documentation</Link></li>
              <li><Link href="/education" className="text-sm text-gray-500 hover:text-[#F97316] no-underline transition-colors">Académie</Link></li>
              <li><Link href="#" className="text-sm text-gray-500 hover:text-[#F97316] no-underline transition-colors">Status</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-500 hover:text-[#F97316] no-underline transition-colors">Nous contacter</Link></li>
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h4 className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold mb-5">Légal</h4>
            <ul className="space-y-3 list-none p-0 m-0">
              <li><Link href="/legal/cgu" className="text-sm text-gray-500 hover:text-[#F97316] no-underline transition-colors">CGU</Link></li>
              <li><Link href="/legal/confidentialite" className="text-sm text-gray-500 hover:text-[#F97316] no-underline transition-colors">Confidentialité</Link></li>
              <li><Link href="/legal/cookies" className="text-sm text-gray-500 hover:text-[#F97316] no-underline transition-colors">Cookies</Link></li>
              <li><Link href="/legal/rgpd" className="text-sm text-gray-500 hover:text-[#F97316] no-underline transition-colors">RGPD</Link></li>
              <li><Link href="/legal/support" className="text-sm text-gray-500 hover:text-[#F97316] no-underline transition-colors">Support</Link></li>
              <li><Link href="/legal/mot-de-passe" className="text-sm text-gray-500 hover:text-[#F97316] no-underline transition-colors">Mot de passe</Link></li>
              <li><Link href="/legal/utilisation-acceptable" className="text-sm text-gray-500 hover:text-[#F97316] no-underline transition-colors">Utilisation acceptable</Link></li>
            </ul>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 mb-6 border-y border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#F97316]/10 flex items-center justify-center">
              <Users className="w-5 h-5 text-[#F97316]" />
            </div>
            <div>
              <div className="text-lg font-bold text-[#1E3A8A]">15+</div>
              <div className="text-xs text-gray-500">Modules</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#F97316]/10 flex items-center justify-center">
              <Globe className="w-5 h-5 text-[#F97316]" />
            </div>
            <div>
              <div className="text-lg font-bold text-[#1E3A8A]">18+</div>
              <div className="text-xs text-gray-500">Secteurs</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#F97316]/10 flex items-center justify-center">
              <Server className="w-5 h-5 text-[#F97316]" />
            </div>
            <div>
              <div className="text-lg font-bold text-[#1E3A8A]">100%</div>
              <div className="text-xs text-gray-500">Hébergement sécurisé</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#F97316]/10 flex items-center justify-center">
              <Shield className="w-5 h-5 text-[#F97316]" />
            </div>
            <div>
              <div className="text-lg font-bold text-[#1E3A8A]">Auto</div>
              <div className="text-xs text-gray-500">Déploiement assisté</div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <p className="text-xs text-gray-400">
              © 2026 BBC & Partners. Tous droits réservés.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[11px] text-gray-400">RGPD conforme — Hébergement sécurisé</span>
            </div>
          </div>
          <div className="flex items-center gap-4 text-xs text-gray-400">
            <Link href="/legal/cgu" className="hover:text-[#F97316] no-underline">CGU</Link>
            <Link href="/legal/confidentialite" className="hover:text-[#F97316] no-underline">Confidentialité</Link>
            <Link href="/legal/cookies" className="hover:text-[#F97316] no-underline">Cookies</Link>
            <Link href="/legal/rgpd" className="hover:text-[#F97316] no-underline">RGPD</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

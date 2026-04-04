import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="bg-gray-50 py-16 border-t border-gray-200">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <img
              src="/upload/logo-maintex.png"
              alt="MAINTEX"
              className="h-8 mb-4"
            />
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              La GMAO française qui s&apos;adapte à votre métier. Développé par BBC & Partners depuis 2009.
            </p>
            <div className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg">
              <span className="text-sm font-semibold text-gray-700">BBC & Partners</span>
              <span className="text-[11px] text-gray-400">Éditeur de MAINTEX</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold mb-5">Produit</h4>
            <ul className="space-y-3 list-none p-0 m-0">
              {[
                { label: 'Fonctionnalités', href: '/fonctionnalites' },
                { label: 'Tarifs', href: '/tarifs' },
                { label: 'Clients', href: '/clients' },
                { label: 'Secteurs', href: '/secteurs' },
                { label: 'Feuille de route', href: '/feuille-de-route' },
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-sm text-gray-500 hover:text-[#0A0A8A] no-underline transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold mb-5">Entreprise</h4>
            <ul className="space-y-3 list-none p-0 m-0">
              {[
                { label: 'À propos', href: '/a-propos' },
                { label: 'Blog', href: '#' },
                { label: 'Carrières', href: '#' },
                { label: 'Presse', href: '#' },
                { label: 'Contact', href: '/contact' },
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-sm text-gray-500 hover:text-[#0A0A8A] no-underline transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold mb-5">Support</h4>
            <ul className="space-y-3 list-none p-0 m-0">
              {[
                { label: 'Centre d\'aide', href: '/ressources#aide' },
                { label: 'Documentation', href: '/ressources#api' },
                { label: 'API', href: '/ressources#api' },
                { label: 'Status', href: '#' },
                { label: 'Support', href: '/legal/support' },
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-sm text-gray-500 hover:text-[#0A0A8A] no-underline transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold mb-5">Légal</h4>
            <ul className="space-y-3 list-none p-0 m-0">
              {[
                { label: 'CGU', href: '/legal/cgu' },
                { label: 'Confidentialité', href: '/legal/confidentialite' },
                { label: 'Cookies', href: '/legal/cookies' },
                { label: 'RGPD', href: '/legal/rgpd' },
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-sm text-gray-500 hover:text-[#0A0A8A] no-underline transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 pt-6 flex flex-wrap justify-between items-center gap-4">
          <p className="text-xs text-gray-400">
            © 2026 BBC & Partners. Tous droits réservés.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
            <span className="text-[11px] text-gray-400">RGPD conforme — Hébergement France</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

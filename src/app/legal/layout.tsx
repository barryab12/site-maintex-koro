import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import Link from 'next/link'
import { FileText, Shield, HelpCircle, Key, Cookie, CheckCircle, Lock } from 'lucide-react'

const legalLinks = [
  {
    title: 'Conditions Générales d\'Utilisation',
    href: '/legal/cgu',
    icon: FileText,
    description: 'CGU'
  },
  {
    title: 'Politique de Confidentialité',
    href: '/legal/confidentialite',
    icon: Shield,
    description: 'Confidentialité'
  },
  {
    title: 'Politique de Support',
    href: '/legal/support',
    icon: HelpCircle,
    description: 'Support'
  },
  {
    title: 'Politique de Mot de Passe',
    href: '/legal/mot-de-passe',
    icon: Key,
    description: 'Sécurité'
  },
  {
    title: 'Politique relative aux Cookies',
    href: '/legal/cookies',
    icon: Cookie,
    description: 'Cookies'
  },
  {
    title: 'Politique d\'Utilisation Acceptable',
    href: '/legal/utilisation-acceptable',
    icon: CheckCircle,
    description: 'Utilisation'
  },
  {
    title: 'Conformité RGPD',
    href: '/legal/rgpd',
    icon: Lock,
    description: 'RGPD'
  }
]

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />
      
      <div className="pt-[70px]">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-12 border-b border-gray-100">
          <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Mentions Légales
            </h1>
            <p className="text-gray-500">
              Documents juridiques et politiques de MAINTEX
            </p>
          </div>
        </section>

        {/* Content with Sidebar */}
        <div className="max-w-[1240px] mx-auto px-6 lg:px-10 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <aside className="w-full lg:w-72 flex-shrink-0">
              <div className="sticky top-[90px]">
                <nav className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-3">
                    Documents Légaux
                  </h2>
                  <ul className="space-y-1">
                    {legalLinks.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="flex items-center gap-3 px-3 py-2.5 text-sm text-gray-600 hover:text-[#0A0A8A] hover:bg-white rounded-lg transition-all no-underline group"
                        >
                          <link.icon className="w-4 h-4 text-gray-400 group-hover:text-[#0A0A8A]" />
                          <span className="flex-1">{link.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Contact Info */}
                <div className="mt-4 bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-3">
                    Contact
                  </h2>
                  <div className="px-3 space-y-2 text-sm text-gray-600">
                    <p className="font-medium text-gray-900">BBC & Partners</p>
                    <p>16 Rue Louis Pergaud</p>
                    <p>94700 Maisons-Alfort, France</p>
                    <a 
                      href="mailto:contact@maintex.fr" 
                      className="text-[#0A0A8A] hover:underline block mt-2"
                    >
                      contact@maintex.fr
                    </a>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 min-w-0">
              <div className="prose prose-gray max-w-none">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>

      <SiteFooter />
    </main>
  )
}

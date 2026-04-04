import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import Link from 'next/link'

export default function RGPDPage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />
      
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Conformité RGPD
            </h1>
            <p className="text-gray-500">Règlement Général sur la Protection des Données</p>
          </div>

          <div className="prose prose-gray max-w-none">
            <div className="bg-[#0A0A8A]/5 border border-[#0A0A8A]/20 rounded-xl p-6 mb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#0A0A8A] rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-[#0A0A8A] m-0">MAINTEX est conforme au RGPD</h2>
              </div>
              <p className="text-gray-600 m-0">
                BBC & Partners s&apos;engage à respecter le Règlement Général sur la Protection des Données (RGPD) 
                dans toutes ses activités de traitement de données personnelles.
              </p>
            </div>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Nos engagements</h2>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-2">🇫🇷 Hébergement en France</h3>
                <p className="text-sm text-gray-600">Toutes les données sont stockées dans des datacenters français certifiés.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-2">🔐 Chiffrement SSL/TLS</h3>
                <p className="text-sm text-gray-600">Toutes les communications sont chiffrées de bout en bout.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-2">📋 Registre des traitements</h3>
                <p className="text-sm text-gray-600">Documentation complète de tous les traitements de données.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-2">👤 DPO dédié</h3>
                <p className="text-sm text-gray-600">Un Délégué à la Protection des Données est désigné.</p>
              </div>
            </div>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Vos droits RGPD</h2>
            <p className="text-gray-600 mb-4">
              Conformément aux articles 15 à 22 du RGPD, vous disposez des droits suivants :
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="border-l-4 border-[#0A0A8A] pl-4">
                <h3 className="font-semibold text-gray-900">Droit d&apos;accès (Art. 15)</h3>
                <p className="text-gray-600">Obtenir la confirmation et l&apos;accès à vos données personnelles.</p>
              </div>
              <div className="border-l-4 border-[#0A0A8A] pl-4">
                <h3 className="font-semibold text-gray-900">Droit de rectification (Art. 16)</h3>
                <p className="text-gray-600">Corriger ou compléter vos données inexactes ou incomplètes.</p>
              </div>
              <div className="border-l-4 border-[#0A0A8A] pl-4">
                <h3 className="font-semibold text-gray-900">Droit à l&apos;effacement (Art. 17)</h3>
                <p className="text-gray-600">Demander la suppression de vos données personnelles.</p>
              </div>
              <div className="border-l-4 border-[#0A0A8A] pl-4">
                <h3 className="font-semibold text-gray-900">Droit à la portabilité (Art. 20)</h3>
                <p className="text-gray-600">Recevoir vos données dans un format structuré et lisible par machine.</p>
              </div>
              <div className="border-l-4 border-[#0A0A8A] pl-4">
                <h3 className="font-semibold text-gray-900">Droit d&apos;opposition (Art. 21)</h3>
                <p className="text-gray-600">Vous opposer au traitement de vos données.</p>
              </div>
            </div>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Exercer vos droits</h2>
            <p className="text-gray-600 mb-4">
              Pour exercer vos droits, contactez notre DPO :
            </p>
            <ul className="list-none space-y-2 text-gray-600 mb-4">
              <li>📧 <strong>Email :</strong> dpo@bbc-partners.com</li>
              <li>📬 <strong>Courrier :</strong> BBC & Partners - DPO, 75001 Paris, France</li>
              <li>⏱️ <strong>Délai de réponse :</strong> 1 mois maximum</li>
            </ul>

            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Réclamation CNIL</h3>
              <p className="text-gray-600">
                Si vous estimez que le traitement de vos données constitue une violation du RGPD, 
                vous pouvez introduire une réclamation auprès de la CNIL : 
                <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-[#0A0A8A] hover:underline ml-1">www.cnil.fr</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}

import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import Link from 'next/link'

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />
      
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Politique de Support
            </h1>
            <p className="text-gray-500">Dernière mise à jour : Janvier 2024</p>
          </div>

          <div className="prose prose-gray max-w-none">
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Notre engagement</h2>
            <p className="text-gray-600 mb-4">
              BBC & Partners s&apos;engage à fournir un support technique de qualité pour tous les utilisateurs de MAINTEX. 
              Notre équipe est disponible pour vous accompagner dans l&apos;utilisation de la plateforme.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Niveaux de support</h2>
            
            <div className="space-y-4 mb-8">
              <div className="bg-green-50 border border-green-200 rounded-lg p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 text-xs font-semibold bg-green-500 text-white rounded">Niveau 1</span>
                  <h3 className="font-semibold text-gray-900">Support Standard</h3>
                </div>
                <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                  <li>Temps de réponse : 24h ouvrées</li>
                  <li>Email et centre d&apos;aide</li>
                  <li>Documentation en ligne</li>
                  <li>Inclus dans tous les plans</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 text-xs font-semibold bg-blue-500 text-white rounded">Niveau 2</span>
                  <h3 className="font-semibold text-gray-900">Support Premium</h3>
                </div>
                <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                  <li>Temps de réponse : 4h ouvrées</li>
                  <li>Email, téléphone et chat</li>
                  <li>Interlocuteur dédié</li>
                  <li>Disponible sur les plans Pro et Enterprise</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 text-xs font-semibold bg-purple-500 text-white rounded">Niveau 3</span>
                  <h3 className="font-semibold text-gray-900">Support Enterprise</h3>
                </div>
                <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                  <li>Temps de réponse : 1h</li>
                  <li>Ligne directe 24/7</li>
                  <li>Ingénieur dédié</li>
                  <li>SLA garanti</li>
                </ul>
              </div>
            </div>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Canaux de support</h2>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="text-center p-5 bg-gray-50 rounded-lg">
                <div className="text-3xl mb-2">📧</div>
                <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                <p className="text-sm text-gray-600">support@maintex.fr</p>
              </div>
              <div className="text-center p-5 bg-gray-50 rounded-lg">
                <div className="text-3xl mb-2">📞</div>
                <h3 className="font-semibold text-gray-900 mb-1">Téléphone</h3>
                <p className="text-sm text-gray-600">+33 1 XX XX XX XX</p>
              </div>
              <div className="text-center p-5 bg-gray-50 rounded-lg">
                <div className="text-3xl mb-2">💬</div>
                <h3 className="font-semibold text-gray-900 mb-1">Chat</h3>
                <p className="text-sm text-gray-600">Disponible dans l&apos;app</p>
              </div>
            </div>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Heures d&apos;ouverture</h2>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li><strong>Lundi - Vendredi :</strong> 8h00 - 19h00 (heure de Paris)</li>
              <li><strong>Samedi :</strong> 9h00 - 13h00 (support urgent uniquement)</li>
              <li><strong>Dimanche et jours fériés :</strong> fermé</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Classification des incidents</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Criticit&eacute;</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Description</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">R&eacute;ponse</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="px-4 py-3"><span className="px-2 py-1 text-xs bg-red-100 text-red-700 rounded">Critique</span></td>
                    <td className="px-4 py-3 text-sm text-gray-600">Service indisponible</td>
                    <td className="px-4 py-3 text-sm text-gray-600">1h</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-3"><span className="px-2 py-1 text-xs bg-orange-100 text-orange-700 rounded">Haute</span></td>
                    <td className="px-4 py-3 text-sm text-gray-600">Fonctionnalité dégradée</td>
                    <td className="px-4 py-3 text-sm text-gray-600">4h</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-3"><span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-700 rounded">Moyenne</span></td>
                    <td className="px-4 py-3 text-sm text-gray-600">Problème mineur</td>
                    <td className="px-4 py-3 text-sm text-gray-600">24h</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-3"><span className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded">Basse</span></td>
                    <td className="px-4 py-3 text-sm text-gray-600">Question / Demande</td>
                    <td className="px-4 py-3 text-sm text-gray-600">48h</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Besoin d&apos;aide ?</h3>
              <p className="text-gray-600 mb-4">
                Notre équipe est là pour vous accompagner.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2 bg-[#0A0A8A] text-white rounded-lg hover:bg-[#0A0A8A]/90 transition-colors no-underline">
                Contacter le support →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}

import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import Link from 'next/link'

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />
      
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Politique de Cookies
            </h1>
            <p className="text-gray-500">Dernière mise à jour : Janvier 2024</p>
          </div>

          <div className="prose prose-gray max-w-none">
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Qu&apos;est-ce qu&apos;un cookie ?</h2>
            <p className="text-gray-600 mb-4">
              Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, smartphone) 
              lors de votre visite sur un site web. Il permet de stocker des informations relatives à votre navigation.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Cookies utilisés sur MAINTEX</h2>
            
            <h3 className="text-lg font-medium text-gray-800 mt-6 mb-3">Cookies essentiels</h3>
            <p className="text-gray-600 mb-4">
              Ces cookies sont nécessaires au fonctionnement du site et ne peuvent pas être désactivés :
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>Authentification et sécurité de session</li>
              <li>Préférences de langue</li>
              <li>Mémorisation du panier</li>
            </ul>

            <h3 className="text-lg font-medium text-gray-800 mt-6 mb-3">Cookies analytiques</h3>
            <p className="text-gray-600 mb-4">
              Ils nous permettent d&apos;analyser l&apos;utilisation du site pour l&apos;améliorer :
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>Pages visitées</li>
              <li>Durée des visites</li>
              <li>Parcours de navigation</li>
            </ul>

            <h3 className="text-lg font-medium text-gray-800 mt-6 mb-3">Cookies marketing</h3>
            <p className="text-gray-600 mb-4">
              Ils permettent de personnaliser les publicités et contenus :
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>Ciblage publicitaire</li>
              <li>Remarketing</li>
              <li>Tests A/B</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Durée de conservation</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Type</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Durée</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="px-4 py-3 text-sm text-gray-600">Essentiels</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Session + 1 an</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-3 text-sm text-gray-600">Analytiques</td>
                    <td className="px-4 py-3 text-sm text-gray-600">26 mois</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-3 text-sm text-gray-600">Marketing</td>
                    <td className="px-4 py-3 text-sm text-gray-600">13 mois</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Gérer vos cookies</h2>
            <p className="text-gray-600 mb-4">
              Vous pouvez à tout moment configurer votre navigateur pour accepter ou refuser les cookies :
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li><strong>Chrome :</strong> Paramètres → Confidentialité et sécurité</li>
              <li><strong>Firefox :</strong> Options → Vie privée et sécurité</li>
              <li><strong>Safari :</strong> Préférences → Confidentialité</li>
              <li><strong>Edge :</strong> Paramètres → Cookies et autorisations de site</li>
            </ul>

            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Contact</h3>
              <p className="text-gray-600">
                Pour toute question sur notre politique cookies :<br />
                <Link href="/contact" className="text-[#0A0A8A] hover:underline">Nous contacter</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}

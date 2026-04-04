import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import Link from 'next/link'

export default function CGUPage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />
      
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Conditions Générales d&apos;Utilisation
            </h1>
            <p className="text-gray-500">Dernière mise à jour : Janvier 2024</p>
          </div>

          <div className="prose prose-gray max-w-none">
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Objet</h2>
            <p className="text-gray-600 mb-4">
              Les présentes Conditions Générales d&apos;Utilisation (CGU) régissent l&apos;accès et l&apos;utilisation de la plateforme MAINTEX, 
              logiciel de GMAO (Gestion de Maintenance Assistée par Ordinateur) édité par BBC & Partners.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Acceptation des conditions</h2>
            <p className="text-gray-600 mb-4">
              En accédant et en utilisant MAINTEX, vous acceptez d&apos;être lié par les présentes CGU. 
              Si vous n&apos;acceptez pas ces conditions, vous ne devez pas utiliser notre service.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. Description du service</h2>
            <p className="text-gray-600 mb-4">
              MAINTEX est une solution SaaS de gestion de maintenance qui permet notamment :
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>La gestion des ordres de travail</li>
              <li>La planification de la maintenance préventive</li>
              <li>La gestion des équipements et des pièces de rechange</li>
              <li>Le suivi des interventions et des performances</li>
              <li>La génération de tableaux de bord et rapports</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Obligations de l&apos;utilisateur</h2>
            <p className="text-gray-600 mb-4">
              L&apos;utilisateur s&apos;engage à :
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>Fournir des informations exactes lors de l&apos;inscription</li>
              <li>Protéger ses identifiants de connexion</li>
              <li>Utiliser le service conformément à sa destination</li>
              <li>Respecter les droits de propriété intellectuelle</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">5. Propriété intellectuelle</h2>
            <p className="text-gray-600 mb-4">
              L&apos;ensemble des éléments constituant MAINTEX (logiciel, design, textes, images) sont la propriété exclusive 
              de BBC & Partners et sont protégés par les lois françaises et internationales relatives à la propriété intellectuelle.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">6. Limitation de responsabilité</h2>
            <p className="text-gray-600 mb-4">
              BBC & Partners s&apos;efforce d&apos;assurer la disponibilité et la sécurité du service. 
              Toutefois, nous ne pouvons garantir une disponibilité à 100% et ne pourrons être tenus responsables 
              des dommages indirects résultant de l&apos;utilisation du service.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">7. Résiliation</h2>
            <p className="text-gray-600 mb-4">
              Chaque partie peut résilier le contrat conformément aux conditions définies dans le contrat commercial. 
              En cas de résiliation, l&apos;utilisateur dispose d&apos;un délai de 30 jours pour récupérer ses données.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">8. Droit applicable</h2>
            <p className="text-gray-600 mb-4">
              Les présentes CGU sont régies par le droit français. Tout litige sera soumis aux tribunaux compétents de Paris.
            </p>

            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Contact</h3>
              <p className="text-gray-600">
                Pour toute question concernant ces CGU :<br />
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

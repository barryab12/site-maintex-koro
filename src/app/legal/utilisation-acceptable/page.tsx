import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import Link from 'next/link'

export default function UtilisationAcceptablePage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />
      
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Politique d&apos;Utilisation Acceptable
            </h1>
            <p className="text-gray-500">Dernière mise à jour : Janvier 2024</p>
          </div>

          <div className="prose prose-gray max-w-none">
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Objet</h2>
            <p className="text-gray-600 mb-4">
              Cette politique définit les règles d&apos;utilisation acceptable de la plateforme MAINTEX. 
              Elle s&apos;applique à tous les utilisateurs du service.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Utilisations autorisées</h2>
            <p className="text-gray-600 mb-4">
              MAINTEX est conçu pour être utilisé dans les cas suivants :
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>Gestion des opérations de maintenance de votre entreprise</li>
              <li>Suivi des équipements et des interventions</li>
              <li>Planification de la maintenance préventive</li>
              <li>Gestion des stocks de pièces de rechange</li>
              <li>Analyse des performances et génération de rapports</li>
              <li>Collaboration entre équipes de maintenance</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. Utilisations interdites</h2>
            <p className="text-gray-600 mb-4">
              Il est strictement interdit d&apos;utiliser MAINTEX pour :
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>Stocker ou traiter des données illégales ou illicites</li>
              <li>Tenter d&apos;accéder non autorisé à d&apos;autres comptes ou systèmes</li>
              <li>Propager des virus, malwares ou autres codes malveillants</li>
              <li>Effectuer des attaques par déni de service (DDoS)</li>
              <li>Collecter des informations sur d&apos;autres utilisateurs sans consentement</li>
              <li>Utiliser le service à des fins de spam ou de phishing</li>
              <li>Violer les droits de propriété intellectuelle de tiers</li>
              <li>Contourner les mesures de sécurité mises en place</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Sécurité du compte</h2>
            <p className="text-gray-600 mb-4">
              Chaque utilisateur est responsable de :
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>La confidentialité de ses identifiants de connexion</li>
              <li>Toutes les activités effectuées depuis son compte</li>
              <li>La notification immédiate de toute utilisation non autorisée</li>
              <li>La déconnexion après chaque session sur un appareil partagé</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">5. Contenu utilisateur</h2>
            <p className="text-gray-600 mb-4">
              Vous êtes seul responsable du contenu que vous téléchargez ou créez sur MAINTEX. 
              Vous vous engagez à ne pas :
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>Télécharger du contenu protégé par des droits d&apos;auteur sans autorisation</li>
              <li>Partager des informations confidentielles appartenant à des tiers</li>
              <li>Stocker des données personnelles non nécessaires à la maintenance</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">6. Surveillance et contrôle</h2>
            <p className="text-gray-600 mb-4">
              BBC & Partners se réserve le droit de :
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>Surveiller l&apos;utilisation du service pour détecter les violations</li>
              <li>Suspendre ou résilier les comptes en cas de non-conformité</li>
              <li>Signaler aux autorités compétentes toute activité illégale</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">7. Sanctions</h2>
            <p className="text-gray-600 mb-4">
              En cas de violation de cette politique, les sanctions suivantes peuvent être appliquées :
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li><strong>Avertissement :</strong> notification de la violation</li>
              <li><strong>Suspension temporaire :</strong> blocage de l&apos;accès pendant une durée déterminée</li>
              <li><strong>Résiliation :</strong> suppression définitive du compte</li>
              <li><strong>Poursuites légales :</strong> en cas de violation grave ou répétée</li>
            </ul>

            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Signaler un abus</h3>
              <p className="text-gray-600 mb-4">
                Si vous constatez une utilisation abusive de MAINTEX, merci de nous signaler :
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2 bg-[#0A0A8A] text-white rounded-lg hover:bg-[#0A0A8A]/90 transition-colors no-underline">
                Signaler un abus →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}

import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import Link from 'next/link'

export default function ConfidentialitePage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />
      
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Politique de Confidentialité
            </h1>
            <p className="text-gray-500">Dernière mise à jour : Janvier 2024</p>
          </div>

          <div className="prose prose-gray max-w-none">
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Introduction</h2>
            <p className="text-gray-600 mb-4">
              BBC & Partners, éditeur de MAINTEX, s&apos;engage à protéger la vie privée des utilisateurs de sa plateforme. 
              Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos données personnelles.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Données collectées</h2>
            <p className="text-gray-600 mb-4">
              Nous collectons les données suivantes :
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li><strong>Données d&apos;identification :</strong> nom, prénom, email, fonction</li>
              <li><strong>Données d&apos;entreprise :</strong> raison sociale, SIRET, adresse</li>
              <li><strong>Données de connexion :</strong> adresse IP, logs, identifiants</li>
              <li><strong>Données d&apos;utilisation :</strong> préférences, historique d&apos;usage</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. Finalités du traitement</h2>
            <p className="text-gray-600 mb-4">
              Vos données sont utilisées pour :
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>Fournir et améliorer le service MAINTEX</li>
              <li>Assurer le support technique</li>
              <li>Respecter nos obligations légales</li>
              <li>Vous informer des évolutions du service</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Hébergement des données</h2>
            <p className="text-gray-600 mb-4">
              Les données sont hébergées en France, dans des datacenters certifiés ISO 27001. 
              Nous garantissons que vos données ne quittent pas le territoire européen.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">5. Durée de conservation</h2>
            <p className="text-gray-600 mb-4">
              Les données sont conservées pendant la durée du contrat commercial, augmentée des délais légaux de conservation 
              (5 ans pour les données comptables, 3 ans pour les données de connexion).
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">6. Vos droits</h2>
            <p className="text-gray-600 mb-4">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li><strong>Droit d&apos;accès :</strong> obtenir une copie de vos données</li>
              <li><strong>Droit de rectification :</strong> corriger vos données inexactes</li>
              <li><strong>Droit à l&apos;effacement :</strong> supprimer vos données</li>
              <li><strong>Droit à la portabilité :</strong> récupérer vos données dans un format standard</li>
              <li><strong>Droit d&apos;opposition :</strong> vous opposer au traitement</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">7. Sécurité</h2>
            <p className="text-gray-600 mb-4">
              Nous mettons en œuvre des mesures techniques et organisationnelles pour protéger vos données : 
              chiffrement SSL/TLS, contrôle d&apos;accès, audits réguliers, sauvegardes sécurisées.
            </p>

            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Contact DPO</h3>
              <p className="text-gray-600">
                Pour exercer vos droits ou pour toute question :<br />
                Email : dpo@bbc-partners.com<br />
                <Link href="/legal/rgpd" className="text-[#0A0A8A] hover:underline">En savoir plus sur le RGPD</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}

import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export default function MotDePassePage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />
      
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Politique de Mots de Passe
            </h1>
            <p className="text-gray-500">Dernière mise à jour : Janvier 2024</p>
          </div>

          <div className="prose prose-gray max-w-none">
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Exigences de sécurité</h2>
            <p className="text-gray-600 mb-4">
              Pour garantir la sécurité de votre compte MAINTEX, votre mot de passe doit respecter les critères suivants :
            </p>

            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h3 className="font-semibold text-gray-900 mb-4">✅ Critères obligatoires</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm">✓</span>
                  <span className="text-gray-700">Minimum <strong>12 caractères</strong></span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm">✓</span>
                  <span className="text-gray-700">Au moins <strong>une lettre majuscule</strong> (A-Z)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm">✓</span>
                  <span className="text-gray-700">Au moins <strong>une lettre minuscule</strong> (a-z)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm">✓</span>
                  <span className="text-gray-700">Au moins <strong>un chiffre</strong> (0-9)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm">✓</span>
                  <span className="text-gray-700">Au moins <strong>un caractère spécial</strong> (!@#$%^&*)</span>
                </li>
              </ul>
            </div>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Bonnes pratiques</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-green-50 border border-green-200 rounded-lg p-5">
                <h3 className="font-semibold text-green-800 mb-3">✅ À faire</h3>
                <ul className="list-disc pl-5 text-sm text-green-700 space-y-2">
                  <li>Utiliser un gestionnaire de mots de passe</li>
                  <li>Créer des mots de passe uniques pour chaque service</li>
                  <li>Changer votre mot de passe tous les 90 jours</li>
                  <li>Activer l&apos;authentification à deux facteurs</li>
                </ul>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-5">
                <h3 className="font-semibold text-red-800 mb-3">❌ À éviter</h3>
                <ul className="list-disc pl-5 text-sm text-red-700 space-y-2">
                  <li>Réutiliser un ancien mot de passe</li>
                  <li>Utiliser des informations personnelles</li>
                  <li>Partager votre mot de passe</li>
                  <li>Noter votre mot de passe sur un post-it</li>
                </ul>
              </div>
            </div>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Renouvellement et récupération</h2>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li><strong>Expiration :</strong> Les mots de passe expirent après 90 jours (configurable)</li>
              <li><strong>Historique :</strong> Les 12 derniers mots de passe ne peuvent pas être réutilisés</li>
              <li><strong>Récupération :</strong> Via email sécurisé ou contact administrateur</li>
              <li><strong>Verrouillage :</strong> Après 5 tentatives infructueuses</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Authentification à deux facteurs (2FA)</h2>
            <p className="text-gray-600 mb-4">
              MAINTEX recommande fortement l&apos;activation de l&apos;authentification à deux facteurs pour renforcer la sécurité de votre compte.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-8">
              <h3 className="font-semibold text-blue-800 mb-2">Méthodes 2FA supportées</h3>
              <ul className="list-disc pl-5 text-sm text-blue-700 space-y-1">
                <li>Application d&apos;authentification (Google Authenticator, Microsoft Authenticator, Authy)</li>
                <li>SMS (option de secours)</li>
                <li>Clé de sécurité physique (YubiKey)</li>
              </ul>
            </div>

            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Besoin d&apos;aide ?</h3>
              <p className="text-gray-600">
                Si vous avez oublié votre mot de passe, utilisez la fonction &quot;Mot de passe oublié&quot; sur la page de connexion 
                ou contactez votre administrateur.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}

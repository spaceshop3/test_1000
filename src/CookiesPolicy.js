"use client"
import { useNavigate } from "react-router-dom"

function CookiesPolicy() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40 backdrop-blur-md bg-white/90">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => navigate("/")}
              className="flex items-center space-x-2 text-gray-700 hover:text-orange-500 transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="font-medium">Retour</span>
            </button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CF</span>
              </div>
              <span className="font-bold text-gray-900">Casinos France</span>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm p-8 lg:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Politique cookies</h1>
          <p className="text-gray-600 mb-8">Dernière mise à jour : janvier 2025</p>

          <div className="prose prose-gray max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Qu'est-ce qu'un cookie ?</h2>
              <p className="text-gray-700 leading-relaxed">
                Un cookie est un petit fichier texte stocké sur votre appareil (ordinateur, tablette, smartphone) lors
                de votre visite sur un site web. Les cookies permettent au site de mémoriser vos actions et préférences
                sur une période donnée.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Types de cookies utilisés</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Cookies strictement nécessaires</h3>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    Ces cookies sont essentiels au fonctionnement du site. Ils permettent notamment :
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                    <li>La vérification d'âge (18+)</li>
                    <li>La sécurité et la prévention de la fraude</li>
                    <li>Le bon fonctionnement technique du site</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Cookies de performance</h3>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    Ces cookies collectent des informations sur la façon dont les visiteurs utilisent le site :
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                    <li>Pages les plus visitées</li>
                    <li>Temps passé sur le site</li>
                    <li>Messages d'erreur rencontrés</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Cookies de fonctionnalité</h3>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    Ces cookies permettent d'améliorer votre expérience :
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                    <li>Mémorisation de vos préférences</li>
                    <li>Personnalisation de l'interface</li>
                    <li>Amélioration de la navigation</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Durée de conservation</h2>
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <p className="text-gray-700 leading-relaxed mb-3">Les cookies ont des durées de vie variables :</p>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <strong>Cookies de session :</strong> Supprimés à la fermeture du navigateur
                  </li>
                  <li>
                    <strong>Cookies persistants :</strong> Conservés jusqu'à 12 mois maximum
                  </li>
                  <li>
                    <strong>Cookie de vérification d'âge :</strong> Conservé localement selon vos paramètres
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Gestion des cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Vous pouvez contrôler et gérer les cookies de plusieurs manières :
              </p>

              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4 border-2 border-orange-200">
                  <h3 className="font-bold text-gray-900 mb-2">Paramètres du navigateur</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Tous les navigateurs modernes vous permettent de modifier vos paramètres de cookies. Ces options se
                    trouvent généralement dans le menu "Paramètres" ou "Préférences".
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-2">Instructions par navigateur</h3>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>
                      <strong>Chrome :</strong> Paramètres → Confidentialité et sécurité → Cookies
                    </li>
                    <li>
                      <strong>Firefox :</strong> Paramètres → Vie privée et sécurité → Cookies
                    </li>
                    <li>
                      <strong>Safari :</strong> Préférences → Confidentialité → Cookies
                    </li>
                    <li>
                      <strong>Edge :</strong> Paramètres → Cookies et autorisations de site
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg mt-4">
                <p className="text-sm text-gray-700 leading-relaxed">
                  <strong>Note importante :</strong> Si vous bloquez ou supprimez tous les cookies, certaines
                  fonctionnalités du site pourraient ne plus fonctionner correctement, notamment la vérification d'âge.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies tiers</h2>
              <p className="text-gray-700 leading-relaxed">
                Certains cookies peuvent être placés par des services tiers que nous utilisons (analyse de trafic,
                sécurité, etc.). Ces tiers ont leurs propres politiques de confidentialité et nous vous encourageons à
                les consulter.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Vos droits</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Conformément au RGPD, vous disposez de plusieurs droits concernant les données collectées via les
                cookies :
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Droit d'accès aux données collectées</li>
                <li>Droit de rectification</li>
                <li>Droit à l'effacement</li>
                <li>Droit d'opposition au traitement</li>
                <li>Droit à la limitation du traitement</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Modifications de cette politique</h2>
              <p className="text-gray-700 leading-relaxed">
                Nous pouvons mettre à jour cette politique cookies pour refléter les changements dans nos pratiques ou
                pour d'autres raisons opérationnelles, légales ou réglementaires. Nous vous encourageons à consulter
                régulièrement cette page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed mb-2">
                  Pour toute question concernant notre utilisation des cookies :
                </p>
                <ul className="space-y-1 text-gray-700">
                  <li>
                    <strong>Email :</strong> contact@casinos-france.example
                  </li>
                  <li>
                    <strong>Téléphone :</strong> +33 1 89 45 67 21
                  </li>
                  <li>
                    <strong>Adresse :</strong> France (service en ligne)
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}

export default CookiesPolicy

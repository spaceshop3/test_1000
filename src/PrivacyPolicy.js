"use client"
import { useNavigate } from "react-router-dom"

function PrivacyPolicy() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Politique de confidentialité</h1>
          <p className="text-gray-600 mb-8">Dernière mise à jour : janvier 2025</p>

          <div className="prose prose-gray max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                Bienvenue sur Casinos France. Nous prenons très au sérieux la protection de vos données personnelles.
                Cette politique de confidentialité décrit comment nous collectons, utilisons et protégeons les
                informations que vous nous fournissez.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Collecte des données</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Nous pouvons collecter les types d'informations suivants :
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Informations de navigation (adresse IP, type de navigateur, pages visitées)</li>
                <li>Données de vérification d'âge (pour respecter la législation en vigueur)</li>
                <li>Informations de contact si vous nous contactez volontairement</li>
                <li>Cookies et technologies similaires pour améliorer votre expérience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Utilisation des données</h2>
              <p className="text-gray-700 leading-relaxed mb-3">Nous utilisons vos données pour :</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Assurer le bon fonctionnement du site</li>
                <li>Vérifier l'âge des utilisateurs conformément à la loi</li>
                <li>Améliorer nos services et votre expérience utilisateur</li>
                <li>Respecter nos obligations légales et réglementaires</li>
                <li>Vous fournir des informations que vous avez demandées</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Protection des données</h2>
              <p className="text-gray-700 leading-relaxed">
                Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données personnelles contre
                tout accès non autorisé, modification, divulgation ou destruction. Nous utilisons des protocoles de
                sécurité standard de l'industrie, y compris le chiffrement SSL/TLS pour toutes les transmissions de
                données.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Partage des données</h2>
              <p className="text-gray-700 leading-relaxed">
                Nous ne vendons, n'échangeons ni ne louons vos informations personnelles à des tiers. Nous pouvons
                partager des informations uniquement dans les cas suivants :
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mt-3">
                <li>Avec votre consentement explicite</li>
                <li>Pour se conformer à une obligation légale</li>
                <li>Pour protéger nos droits, notre propriété ou notre sécurité</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies</h2>
              <p className="text-gray-700 leading-relaxed">
                Notre site utilise des cookies pour améliorer votre expérience de navigation. Les cookies sont de petits
                fichiers texte stockés sur votre appareil. Vous pouvez configurer votre navigateur pour refuser les
                cookies, mais cela pourrait affecter certaines fonctionnalités du site. Pour plus d'informations,
                consultez notre politique cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Vos droits</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Conformément au RGPD et à la législation française, vous disposez des droits suivants :
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Droit d'accès à vos données personnelles</li>
                <li>Droit de rectification de vos données</li>
                <li>Droit à l'effacement (droit à l'oubli)</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité des données</li>
                <li>Droit d'opposition au traitement</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-3">
                Pour exercer ces droits, contactez-nous à : <strong>contact@casinos-france.example</strong>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Conservation des données</h2>
              <p className="text-gray-700 leading-relaxed">
                Nous conservons vos données personnelles uniquement pendant la durée nécessaire aux fins pour lesquelles
                elles ont été collectées, ou conformément aux exigences légales applicables.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Modifications</h2>
              <p className="text-gray-700 leading-relaxed">
                Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les
                modifications seront publiées sur cette page avec une date de mise à jour. Nous vous encourageons à
                consulter régulièrement cette page pour rester informé.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed mb-2">
                  Pour toute question concernant cette politique de confidentialité, veuillez nous contacter :
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

export default PrivacyPolicy

"use client"
import { useNavigate } from "react-router-dom"

function Under18() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8 lg:p-12 relative overflow-hidden">
        {/* Decorative Pattern */}
        <svg className="absolute top-0 right-0 w-40 h-40 opacity-5" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="currentColor" className="text-red-500" />
        </svg>

        <div className="relative z-10">
          {/* Warning Icon */}
          <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>

          {/* Content */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">Accès interdit</h1>
          <p className="text-lg text-gray-700 mb-6 text-center leading-relaxed">
            Ce site est strictement réservé aux personnes âgées de 18 ans et plus.
          </p>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8 rounded-r-lg">
            <h2 className="text-lg font-semibold text-red-900 mb-3">Informations importantes</h2>
            <ul className="space-y-2 text-sm text-red-800">
              <li className="flex items-start space-x-2">
                <span className="text-red-500 font-bold">•</span>
                <span className="leading-relaxed">Les jeux d'argent sont interdits aux mineurs</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-red-500 font-bold">•</span>
                <span className="leading-relaxed">
                  Les jeux d'argent comportent des risques financiers et peuvent entraîner une dépendance
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-red-500 font-bold">•</span>
                <span className="leading-relaxed">
                  Si vous ou quelqu'un de votre entourage avez besoin d'aide, contactez Joueurs Info Service
                </span>
              </li>
            </ul>
          </div>

          {/* Help Resources */}
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-gray-900 mb-4">Ressources d'aide</h3>
            <div className="space-y-3">
              <a
                href="https://www.joueurs-info-service.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-700 hover:text-orange-500 transition"
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <div className="font-medium">Joueurs Info Service</div>
                  <div className="text-sm text-gray-500">09 74 75 13 13 (appel non surtaxé)</div>
                </div>
              </a>
              <a
                href="https://anj.fr/english"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-700 hover:text-orange-500 transition"
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <div className="font-medium">ANJ (Autorité Nationale des Jeux)</div>
                  <div className="text-sm text-gray-500">Régulateur des jeux en France</div>
                </div>
              </a>
            </div>
          </div>

          {/* Action Button */}
          <button
            onClick={() => navigate("/")}
            className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-4 px-6 rounded-lg transition duration-200"
          >
            Retour à l'accueil
          </button>
        </div>
      </div>
    </div>
  )
}

export default Under18

"use client"
import { useNavigate } from "react-router-dom"

function ResponsibleGaming() {
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
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Jeu responsable</h1>
              <p className="text-gray-600 mt-1">Votre bien-être est notre priorité</p>
            </div>
          </div>

          <div className="prose prose-gray max-w-none space-y-6">
            <section>
              <p className="text-lg text-gray-700 leading-relaxed">
                Le jeu doit rester un divertissement. Nous nous engageons à promouvoir des pratiques de jeu responsables
                et à fournir les ressources nécessaires pour prévenir et traiter les problèmes liés au jeu.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Principes du jeu responsable</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Fixez des limites",
                    description: "Déterminez à l'avance combien de temps et d'argent vous pouvez consacrer au jeu",
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    ),
                  },
                  {
                    title: "Jouez pour le plaisir",
                    description: "Le jeu doit être une activité de loisir, jamais un moyen de gagner de l'argent",
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    ),
                  },
                  {
                    title: "Restez lucide",
                    description: "Ne jouez jamais sous l'influence de l'alcool ou de substances",
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                    ),
                  },
                  {
                    title: "Prenez des pauses",
                    description: "Faites des pauses régulières pour maintenir une perspective saine",
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    ),
                  },
                ].map((item, index) => (
                  <div key={index} className="bg-green-50 rounded-lg p-6 border border-green-200">
                    <div className="flex items-start space-x-3">
                      <div className="text-green-600 flex-shrink-0 mt-1">{item.icon}</div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-700 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Signes d'alerte</h2>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <p className="text-gray-900 font-semibold mb-3">Le jeu devient problématique si :</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-red-500 font-bold mt-1">•</span>
                    <span className="leading-relaxed">
                      Vous jouez avec de l'argent que vous ne pouvez pas vous permettre de perdre
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-500 font-bold mt-1">•</span>
                    <span className="leading-relaxed">Vous mentez à votre entourage sur vos activités de jeu</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-500 font-bold mt-1">•</span>
                    <span className="leading-relaxed">
                      Vous négligez vos responsabilités professionnelles ou familiales
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-500 font-bold mt-1">•</span>
                    <span className="leading-relaxed">
                      Vous ressentez le besoin de jouer de plus en plus pour obtenir le même plaisir
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-500 font-bold mt-1">•</span>
                    <span className="leading-relaxed">Vous tentez de récupérer vos pertes en continuant à jouer</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-500 font-bold mt-1">•</span>
                    <span className="leading-relaxed">
                      Vous vous sentez irritable ou anxieux quand vous ne jouez pas
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Auto-évaluation</h2>
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Répondez honnêtement à ces questions pour évaluer votre relation avec le jeu :
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>1. Avez-vous déjà manqué des engagements importants à cause du jeu ?</li>
                  <li>2. Le jeu a-t-il déjà causé des problèmes financiers dans votre vie ?</li>
                  <li>3. Pensez-vous souvent au jeu même quand vous ne jouez pas ?</li>
                  <li>4. Avez-vous déjà emprunté de l'argent pour jouer ?</li>
                  <li>5. Avez-vous déjà ressenti le besoin de cacher vos activités de jeu ?</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4 font-medium">
                  Si vous avez répondu "oui" à une ou plusieurs de ces questions, nous vous encourageons vivement à
                  contacter une organisation d'aide.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Outils de contrôle</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Les opérateurs de jeux responsables proposent généralement les outils suivants :
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "Limites de dépôt", description: "Fixez un montant maximum que vous pouvez déposer" },
                  { title: "Limites de mise", description: "Contrôlez le montant maximum de vos mises" },
                  { title: "Limites de temps", description: "Définissez une durée maximale de jeu" },
                  { title: "Auto-exclusion", description: "Bloquez votre accès temporairement ou définitivement" },
                  { title: "Test d'évaluation", description: "Évaluez votre comportement de jeu" },
                  { title: "Historique", description: "Consultez l'historique de vos activités de jeu" },
                ].map((tool, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                    <h3 className="font-bold text-gray-900 mb-2">{tool.title}</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">{tool.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ressources d'aide</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Si vous ou quelqu'un de votre entourage avez besoin d'aide concernant un problème de jeu, ces
                organisations sont là pour vous soutenir :
              </p>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 border-2 border-orange-500 shadow-sm">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Joueurs Info Service</h3>
                      <p className="text-gray-700 mb-3 leading-relaxed">
                        Service d'aide et d'écoute pour les joueurs et leur entourage. Confidentiel et gratuit.
                      </p>
                      <div className="space-y-2">
                        <p className="text-gray-900 font-semibold">☎ 09 74 75 13 13</p>
                        <p className="text-sm text-gray-600">Appel non surtaxé, disponible 7j/7 de 8h à 2h</p>
                        <a
                          href="https://www.joueurs-info-service.fr/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium"
                        >
                          Visiter le site
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">ANJ - Autorité Nationale des Jeux</h3>
                  <p className="text-gray-700 mb-3 leading-relaxed">
                    Régulateur français des jeux d'argent. Informations sur la réglementation et la protection des
                    joueurs.
                  </p>
                  <a
                    href="https://anj.fr/english"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium"
                  >
                    Visiter le site
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>

                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Autres ressources internationales</h3>
                  <div className="space-y-3">
                    <a
                      href="https://www.gambleaware.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-orange-500 hover:text-orange-600 font-medium"
                    >
                      → GambleAware (International)
                    </a>
                    <a
                      href="https://www.gamcare.org.uk/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-orange-500 hover:text-orange-600 font-medium"
                    >
                      → GamCare (International)
                    </a>
                    <a
                      href="https://mediateur-jeux.fr/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-orange-500 hover:text-orange-600 font-medium"
                    >
                      → Médiateur des Jeux (France)
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Protection des mineurs</h2>
              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <p className="text-gray-700 leading-relaxed mb-3">
                  Les jeux d'argent sont strictement interdits aux personnes de moins de 18 ans. Les parents et tuteurs
                  doivent :
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-purple-500 font-bold mt-1">•</span>
                    <span className="leading-relaxed">Surveiller l'utilisation d'Internet par les mineurs</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-purple-500 font-bold mt-1">•</span>
                    <span className="leading-relaxed">Utiliser des outils de contrôle parental</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-purple-500 font-bold mt-1">•</span>
                    <span className="leading-relaxed">Sensibiliser les jeunes aux risques des jeux d'argent</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-purple-500 font-bold mt-1">•</span>
                    <span className="leading-relaxed">Sécuriser l'accès aux moyens de paiement</span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Notre engagement</h2>
              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-6 border border-orange-200">
                <p className="text-gray-700 leading-relaxed">
                  Casinos France s'engage à promouvoir le jeu responsable en fournissant des informations transparentes,
                  en référençant uniquement des opérateurs qui respectent les standards de protection des joueurs, et en
                  mettant en avant les ressources d'aide disponibles. Votre bien-être est plus important que n'importe
                  quel jeu.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ResponsibleGaming

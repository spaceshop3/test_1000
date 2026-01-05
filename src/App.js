"use client"

import { useState, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"
import img2 from './img/plateforme_de_jeux_en_ligne_dlom2r.jpg';
import zeturf from './img/zeturf.png';


function App() {
  const [showAgeGate, setShowAgeGate] = useState(false)
  const [faqOpen, setFaqOpen] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    const ageVerified = localStorage.getItem("ageVerified")
    if (ageVerified !== "yes") {
      setShowAgeGate(true)
    }
  }, [])

  const handleAgeConfirm = () => {
    localStorage.setItem("ageVerified", "yes")
    setShowAgeGate(false)
  }

  const handleUnder18 = () => {
    localStorage.setItem("ageVerified", "no")
    navigate("./under18")
  }

  const toggleFaq = (index) => {
    setFaqOpen((prev) => ({ ...prev, [index]: !prev[index] }))
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Age Verification Modal */}
      {showAgeGate && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 relative overflow-hidden">
            {/* Decorative SVG Pattern */}
            <svg className="absolute top-0 right-0 w-32 h-32 opacity-10" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="currentColor" className="text-orange-500" />
              <circle cx="30" cy="30" r="20" fill="currentColor" className="text-orange-400" />
            </svg>

            <div className="relative z-10">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">18+</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3 text-center">Vérification d'âge</h2>
              <p className="text-gray-600 mb-6 text-center leading-relaxed">
                Ce site est réservé aux personnes majeures. Veuillez confirmer que vous avez 18 ans ou plus pour
                continuer.
              </p>
              <div className="space-y-3">
                <button
                  onClick={handleAgeConfirm}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
                >
                  J'ai 18 ans ou plus
                </button>
                <button
                  onClick={handleUnder18}
                  className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-lg transition duration-200"
                >
                  J'ai moins de 18 ans
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">CF</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Casinos France</span>
              <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">18+</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("offres")}
                className="text-gray-700 hover:text-orange-500 font-medium transition"
              >
                Offres
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-orange-500 font-medium transition"
              >
                À propos
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-gray-700 hover:text-orange-500 font-medium transition"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection("jeu-responsable")}
                className="text-gray-700 hover:text-orange-500 font-medium transition"
              >
                Jeu responsable
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 overflow-hidden">
        {/* Background Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-6">
              <div className="inline-block bg-orange-500/20 border border-orange-500/30 rounded-full px-4 py-2 backdrop-blur-sm">
                <span className="text-orange-300 text-sm font-semibold">✓ Réservé aux 18 ans et plus</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-balance">
                Découvrez les meilleures plateformes de jeux en ligne en France
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed text-pretty">
                Notre guide comparatif vous aide à trouver des opérateurs régulés offrant des expériences de jeu
                responsables et sécurisées.
              </p>
              <button
                onClick={() => scrollToSection("offres")}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg transition duration-200 inline-flex items-center space-x-2"
              >
                <span>Voir l'offre recommandée</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            {/* Right Content - Image */}
            <div className="relative">
              <img src={img2} alt="Plateforme de jeux en ligne" className="rounded-2xl shadow-2xl w-full" />

              {/* Stats Card Overlay */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white rounded-2xl shadow-2xl p-6 w-11/12 max-w-md">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-3xl font-bold text-gray-900">100%</div>
                    <div className="text-sm text-gray-600 leading-relaxed">Opérateurs vérifiés</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">24/7</div>
                    <div className="text-sm text-gray-600 leading-relaxed">Support disponible</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">18+</div>
                    <div className="text-sm text-gray-600 leading-relaxed">Strictement réglementé</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-500">★ 4.6</div>
                    <div className="text-sm text-gray-600 leading-relaxed">Note moyenne</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,50 C300,100 900,0 1200,50 L1200,120 L0,120 Z" fill="#f9fafb" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ce que vous obtiendrez</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-pretty">
              Des informations transparentes pour vous aider à faire des choix éclairés
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Transparence totale",
                description: "Analyses détaillées et objectives des plateformes de jeux en ligne disponibles en France",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                ),
              },
              {
                title: "Sécurité prioritaire",
                description:
                  "Uniquement des opérateurs qui respectent les standards de sécurité et de protection des joueurs",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                ),
              },
              {
                title: "Jeu responsable",
                description:
                  "Promotion active de pratiques de jeu responsables avec des outils de contrôle et de prévention",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition border border-gray-200"
              >
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center text-orange-500 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section id="offres" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre recommandation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-pretty">
              Plateforme sélectionnée selon des critères stricts de sécurité et de qualité
            </p>
          </div>

          {/* Zeturf Offer Card */}
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-50 to-orange-50 rounded-2xl shadow-xl overflow-hidden border border-orange-200">
            <div className="p-8 lg:p-10">
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-white rounded-xl shadow-md flex items-center justify-center overflow-hidden">
                    <img
                      src={zeturf}
                      alt="Zeturf"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Zeturf</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="flex text-orange-400">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-5 h-5 ${i < 4 ? "fill-current" : "fill-gray-300"}`}
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-gray-700 font-semibold">4.6/5</span>
                    </div>
                  </div>
                </div>
                <a
                  href="https://zeturf.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition duration-200 text-center whitespace-nowrap"
                >
                  Accéder au site
                </a>
              </div>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-6 text-pretty">
                Plateforme de paris hippiques reconnue en France, proposant une expérience complète pour les amateurs de
                courses. L'opérateur met l'accent sur la transparence et le jeu responsable.
              </p>

              {/* Payment Systems */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Systèmes de paiement</h4>
                <div className="flex flex-wrap gap-2">
                  {["Carte bancaire", "Virement", "Portefeuilles électroniques"].map((method, index) => (
                    <span
                      key={index}
                      className="bg-white px-4 py-2 rounded-lg text-sm font-medium text-gray-700 border border-gray-200"
                    >
                      {method}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bonus */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Bonus / Avantages</h4>
                <div className="bg-white rounded-lg p-4 border border-orange-200">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Offres promotionnelles pouvant varier selon les conditions. Consultez le site officiel pour les
                    détails actuels et les termes applicables.
                  </p>
                </div>
              </div>

              {/* Characteristics Table */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Caractéristiques</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    { label: "Support client", value: "Disponible" },
                    { label: "Application mobile", value: "iOS & Android" },
                    { label: "Sécurité", value: "Protocoles standards" },
                    { label: "Vérification", value: "Selon conditions" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg p-3 border border-gray-200 flex justify-between items-center"
                    >
                      <span className="text-gray-600 text-sm">{item.label}</span>
                      <span className="text-gray-900 font-medium text-sm">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why This Offer */}
              <div className="bg-white rounded-lg p-6 border border-orange-200">
                <h4 className="font-semibold text-gray-900 mb-4">Pourquoi cette offre</h4>
                <ul className="space-y-3">
                  {[
                    "Opérateur établi avec une présence reconnue sur le marché français",
                    "Interface claire et accessible pour les utilisateurs de tous niveaux",
                    "Engagement envers le jeu responsable avec des outils de contrôle disponibles",
                  ].map((reason, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <svg
                        className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-gray-700 leading-relaxed text-sm">{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 max-w-4xl mx-auto">
            <div className="bg-gray-100 border-l-4 border-orange-500 p-6 rounded-r-lg">
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>Important :</strong> Les informations présentées sont indicatives. Les conditions, offres et
                caractéristiques peuvent évoluer. Vérifiez toujours les informations actuelles directement sur le site
                officiel de l'opérateur et consultez les ressources réglementaires officielles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Questions fréquentes</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Tout ce que vous devez savoir sur les jeux en ligne en France
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "Les jeux en ligne sont-ils légaux en France ?",
                answer:
                  "En France, les jeux en ligne sont réglementés par l'Autorité Nationale des Jeux (ANJ). Seuls les opérateurs titulaires d'une licence délivrée par l'ANJ peuvent proposer légalement des jeux d'argent en ligne. Vérifiez toujours le statut de licence d'un opérateur sur le site officiel de l'ANJ.",
              },
              {
                question: "Comment puis-je jouer de manière responsable ?",
                answer:
                  "Le jeu responsable implique de fixer des limites de temps et d'argent, de ne jamais jouer pour récupérer des pertes, et de considérer le jeu comme un divertissement et non comme une source de revenus. Utilisez les outils de contrôle proposés par les opérateurs (limites de dépôt, auto-exclusion, etc.).",
              },
              {
                question: "Quels sont les risques des jeux d'argent ?",
                answer:
                  "Les jeux d'argent comportent un risque de perte financière et peuvent entraîner une dépendance. Il est important de jouer uniquement avec de l'argent que vous pouvez vous permettre de perdre, et de demander de l'aide si vous ressentez une perte de contrôle.",
              },
              {
                question: "Où trouver de l'aide en cas de problème de jeu ?",
                answer:
                  "Plusieurs organismes proposent une aide gratuite et confidentielle : Joueurs Info Service (09 74 75 13 13), les services de médiation des jeux en ligne, et des associations spécialisées dans l'addiction au jeu. N'hésitez pas à les contacter si vous avez besoin de soutien.",
              },
              {
                question: "Ce site est-il un opérateur de jeux ?",
                answer:
                  "Non, ce site est un portail d'information et de comparaison. Nous ne proposons pas directement de jeux d'argent. Notre objectif est de fournir des informations objectives pour vous aider à faire des choix éclairés concernant les opérateurs régulés en France.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition"
                >
                  <span className="font-semibold text-gray-900 pr-4 leading-relaxed">{faq.question}</span>
                  <svg
                    className={`w-6 h-6 text-orange-500 flex-shrink-0 transition-transform ${faqOpen[index] ? "transform rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {faqOpen[index] && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsible Gaming Section */}
      <section id="jeu-responsable" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Jeu responsable</h2>
            <p className="text-xl text-gray-600 leading-relaxed text-pretty">
              Votre bien-être est notre priorité. Jouez toujours de manière consciente et contrôlée.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-orange-50 to-gray-50 rounded-xl p-8 border border-orange-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Conseils pour un jeu responsable</h3>
              <ul className="space-y-3">
                {[
                  "Fixez des limites de temps et d'argent avant de commencer à jouer",
                  "Ne jouez jamais avec de l'argent dont vous avez besoin pour vos dépenses essentielles",
                  "Considérez le jeu comme un divertissement, pas comme une source de revenus",
                  "Ne jouez pas sous l'influence de l'alcool ou lorsque vous êtes émotionnellement perturbé",
                  "Faites des pauses régulières et n'essayez jamais de récupérer vos pertes",
                  "Utilisez les outils d'auto-limitation proposés par les opérateurs",
                ].map((tip, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <svg
                      className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700 leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
              <h3 className="text-lg font-bold text-red-900 mb-3">⚠️ Signes d'alerte</h3>
              <p className="text-red-800 leading-relaxed mb-3">
                Si vous remarquez l'un de ces comportements, il est important de demander de l'aide :
              </p>
              <ul className="list-disc list-inside text-red-800 space-y-1 text-sm">
                <li>Jouer plus longtemps ou avec plus d'argent que prévu</li>
                <li>Mentir à votre entourage sur vos habitudes de jeu</li>
                <li>Emprunter de l'argent pour jouer</li>
                <li>Négliger vos responsabilités personnelles ou professionnelles</li>
              </ul>
            </div>

            <div className="bg-gray-100 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Besoin d'aide ?</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Plusieurs organismes offrent une assistance gratuite et confidentielle pour les personnes confrontées à
                des problèmes de jeu. N'hésitez pas à les contacter :
              </p>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="font-semibold text-gray-900">Joueurs Info Service</p>
                  <p className="text-gray-600 text-sm">Téléphone : 09 74 75 13 13 (appel non surtaxé)</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="font-semibold text-gray-900">Consultation en ligne</p>
                  <p className="text-gray-600 text-sm">
                    Visitez joueurs-info-service.fr pour un soutien et des ressources
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <p className="text-blue-900 leading-relaxed">
                <strong>Rappel important :</strong> Ce site est un portail d'information à but éducatif. Nous ne sommes

                pas un opérateur de jeux d'argent. Notre mission est de promouvoir le jeu responsable et de fournir des
                informations objectives sur le secteur régulé en France.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">CF</span>
                </div>
                <span className="text-white font-bold text-lg">Casinos France</span>
              </div>
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-3">
                <span className="text-white text-xl font-bold">18+</span>
              </div>
              <p className="text-sm leading-relaxed text-gray-400">
                Portail d'information sur les jeux en ligne en France. Strictement réservé aux personnes majeures.
              </p>
            </div>

            {/* Pages */}
            <div>
              <h4 className="text-white font-semibold mb-4">Pages légales</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    to="/privacypolicy"
                    className="hover:text-orange-400 transition"
                  >
                    Politique de confidentialité
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cookiespolicy"
                    className="hover:text-orange-400 transition"
                  >
                    Politique cookies
                  </Link>
                </li>
                <li>
                  <Link
                    to="/termsofservice"
                    className="hover:text-orange-400 transition"
                  >
                    Conditions d'utilisation
                  </Link>
                </li>
                <li>
                  <Link
                    to="/responsiblegaming"
                    className="hover:text-orange-400 transition"
                  >
                    Jeu responsable
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li className="break-words">Email: contact@casinos-france.example</li>
                <li>Tél: +33 1 89 45 67 21</li>
                <li className="break-words">France (service en ligne)</li>
              </ul>
            </div>

            {/* Help Resources */}
            <div>
              <h4 className="text-white font-semibold mb-4">Aide & ressources</h4>
              <div className="space-y-3">
                <a
                  href="https://www.joueurs-info-service.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm hover:text-orange-400 transition"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Joueurs Info Service</span>
                </a>
                <a
                  href="https://anj.fr/english"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm hover:text-orange-400 transition"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>ANJ (Autorité des Jeux)</span>
                </a>
                <a
                  href="https://mediateur-jeux.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm hover:text-orange-400 transition"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Médiateur des Jeux</span>
                </a>
                <a
                  href="https://www.gambleaware.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm hover:text-orange-400 transition"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>GambleAware</span>
                </a>
                <a
                  href="https://www.gamcare.org.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm hover:text-orange-400 transition"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>GamCare</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Disclaimer */}
          <div className="border-t border-gray-800 pt-8">
            <div className="bg-gray-800 rounded-lg p-6 mb-6">
              <p className="text-sm text-gray-400 leading-relaxed text-pretty">
                <strong className="text-gray-200">Avertissement :</strong> Les jeux d'argent comportent des risques
                financiers et peuvent entraîner une dépendance. Ce site est strictement réservé aux personnes âgées de
                18 ans et plus. Jouez de manière responsable. Les informations présentées sur ce site sont fournies à
                titre informatif uniquement. Vérifiez toujours le statut de licence des opérateurs sur les ressources
                officielles comme le site de l'ANJ. Nous ne sommes pas responsables des pertes financières résultant de
                l'utilisation des services des opérateurs mentionnés.
              </p>
            </div>
            <p className="text-center text-sm text-gray-500">
              © 2025 Casinos France. Service d'information en ligne. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

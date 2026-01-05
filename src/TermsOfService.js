"use client"
import { useNavigate } from "react-router-dom"

function TermsOfService() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Conditions d'utilisation</h1>
          <p className="text-gray-600 mb-8">Dernière mise à jour : janvier 2025</p>

          <div className="prose prose-gray max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptation des conditions</h2>
              <p className="text-gray-700 leading-relaxed">
                En accédant et en utilisant Casinos France, vous acceptez d'être lié par les présentes conditions
                d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser ce site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Restriction d'âge</h2>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
                <p className="text-gray-900 font-semibold mb-2">IMPORTANT : Restriction 18+</p>
                <p className="text-gray-700 leading-relaxed">
                  Ce site est strictement réservé aux personnes âgées de 18 ans et plus. Les jeux d'argent sont
                  interdits aux mineurs. En utilisant ce site, vous confirmez avoir 18 ans ou plus et être légalement
                  autorisé à accéder à du contenu relatif aux jeux d'argent dans votre juridiction.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Nature du service</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Casinos France est un site d'information et de comparaison. Nous ne sommes pas un opérateur de jeux
                d'argent. Notre rôle se limite à :
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Fournir des informations sur les opérateurs de jeux en ligne</li>
                <li>Comparer les offres disponibles sur le marché français</li>
                <li>Promouvoir le jeu responsable et la prévention de l'addiction</li>
                <li>Diriger les utilisateurs vers des ressources d'aide appropriées</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Informations fournies</h2>
              <p className="text-gray-700 leading-relaxed">
                Les informations présentées sur ce site sont fournies à titre indicatif uniquement. Bien que nous nous
                efforcions de maintenir l'exactitude des informations, nous ne garantissons pas leur exhaustivité,
                exactitude ou actualité. Les conditions, offres et caractéristiques des opérateurs peuvent changer sans
                préavis.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Limitation de responsabilité</h2>
              <p className="text-gray-700 leading-relaxed mb-3">Nous déclinons toute responsabilité concernant :</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Les pertes financières résultant de l'utilisation des services des opérateurs mentionnés</li>
                <li>Les litiges entre les utilisateurs et les opérateurs de jeux</li>
                <li>L'exactitude des informations fournies par des tiers</li>
                <li>Les problèmes techniques ou interruptions de service</li>
                <li>Les dommages indirects, accessoires ou consécutifs</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Propriété intellectuelle</h2>
              <p className="text-gray-700 leading-relaxed">
                Tout le contenu présent sur ce site (textes, images, graphiques, logos) est protégé par les droits
                d'auteur et autres droits de propriété intellectuelle. Vous ne pouvez pas reproduire, distribuer ou
                utiliser ce contenu sans notre autorisation écrite préalable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Liens externes</h2>
              <p className="text-gray-700 leading-relaxed">
                Ce site peut contenir des liens vers des sites web externes. Nous ne sommes pas responsables du contenu,
                des politiques de confidentialité ou des pratiques de ces sites tiers. L'inclusion de tout lien
                n'implique pas notre approbation du site lié.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Jeu responsable</h2>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <p className="text-gray-900 font-semibold mb-2">Avertissement sur les risques</p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Les jeux d'argent comportent des risques financiers importants et peuvent entraîner une dépendance.
                  Nous encourageons fortement tous les utilisateurs à :
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Jouer uniquement avec de l'argent qu'ils peuvent se permettre de perdre</li>
                  <li>Fixer des limites de temps et d'argent avant de jouer</li>
                  <li>Ne jamais essayer de "se refaire" après des pertes</li>
                  <li>Consulter de l'aide si le jeu devient problématique</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Utilisation acceptable</h2>
              <p className="text-gray-700 leading-relaxed mb-3">Vous acceptez de ne pas :</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Utiliser ce site à des fins illégales</li>
                <li>Tenter d'accéder à des zones non autorisées du site</li>
                <li>Interférer avec le fonctionnement normal du site</li>
                <li>Collecter des données d'autres utilisateurs sans autorisation</li>
                <li>Usurper l'identité d'une autre personne ou entité</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Modifications des conditions</h2>
              <p className="text-gray-700 leading-relaxed">
                Nous nous réservons le droit de modifier ces conditions d'utilisation à tout moment. Les modifications
                entreront en vigueur dès leur publication sur cette page. Votre utilisation continue du site après la
                publication des modifications constitue votre acceptation de ces changements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Loi applicable</h2>
              <p className="text-gray-700 leading-relaxed">
                Ces conditions sont régies par les lois françaises. Tout litige relatif à ces conditions sera soumis à
                la juridiction exclusive des tribunaux français.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed mb-2">
                  Pour toute question concernant ces conditions d'utilisation :
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

export default TermsOfService

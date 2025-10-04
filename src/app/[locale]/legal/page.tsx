export default function LegalPage() {
  return (
    <div className="container mx-auto px-6 pt-32 pb-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Mentions légales</h1>

      <section className="prose prose-lg max-w-none">
        <h2>Éditeur du site</h2>
        <p>
          <strong>Raison sociale :</strong> [À COMPLÉTER]<br />
          <strong>Forme juridique :</strong> [À COMPLÉTER]<br />
          <strong>Capital social :</strong> [À COMPLÉTER]<br />
          <strong>Siège social :</strong> [À COMPLÉTER]<br />
          <strong>SIRET :</strong> [À COMPLÉTER]<br />
          <strong>Email :</strong> contact@hitom.fr
        </p>

        <h2>Directeur de publication</h2>
        <p>[NOM DU DIRECTEUR] - [FONCTION]</p>

        <h2>Hébergement</h2>
        <p>
          Ce site est hébergé par :<br />
          <strong>Vercel Inc.</strong><br />
          340 S Lemon Ave #4133<br />
          Walnut, CA 91789<br />
          États-Unis
        </p>

        <h2>Propriété intellectuelle</h2>
        <p>
          L'ensemble du contenu de ce site (textes, images, vidéos, etc.) est protégé par le droit d'auteur.
          Toute reproduction, même partielle, est interdite sans autorisation préalable.
        </p>

        <h2>Données personnelles</h2>
        <p>
          Pour en savoir plus sur la collecte et le traitement de vos données personnelles,
          consultez notre <a href="/privacy" className="text-brand-primary hover:underline">politique de confidentialité</a>.
        </p>

        <h2>Cookies</h2>
        <p>
          Ce site utilise des cookies. Pour plus d'informations, consultez notre{' '}
          <a href="/cookies" className="text-brand-primary hover:underline">politique de cookies</a>.
        </p>
      </section>
    </div>
  )
}

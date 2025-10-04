export default function CookiesPage() {
  return (
    <div className="container mx-auto px-6 pt-32 pb-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Politique de cookies</h1>

      <section className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-8">
          <em>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</em>
        </p>

        <h2>Qu'est-ce qu'un cookie ?</h2>
        <p>
          Un cookie est un petit fichier texte déposé sur votre appareil lors de la visite d'un site web.
          Il permet de mémoriser des informations sur votre navigation.
        </p>

        <h2>Cookies utilisés sur ce site</h2>

        <h3>1. Cookies strictement nécessaires</h3>
        <p>
          Ces cookies sont indispensables au fonctionnement du site. Ils ne nécessitent pas de consentement.
        </p>
        <ul>
          <li><strong>axeptio_cookies</strong> : stocke vos préférences de consentement</li>
          <li><strong>locale</strong> : mémorise votre langue préférée</li>
        </ul>

        <h3>2. Cookies analytiques (nécessitent votre consentement)</h3>
        <p>
          Ces cookies nous aident à comprendre comment vous utilisez notre site.
        </p>
        <ul>
          <li>
            <strong>Google Analytics (GA4)</strong>
            <ul>
              <li>_ga : identifiant unique de l'utilisateur</li>
              <li>_ga_* : stocke l'état de la session</li>
              <li>Durée : 2 ans</li>
            </ul>
          </li>
          <li>
            <strong>Microsoft Clarity</strong>
            <ul>
              <li>_clck, _clsk : analyse comportementale</li>
              <li>Durée : 1 an</li>
            </ul>
          </li>
        </ul>

        <h3>3. Cookies fonctionnels</h3>
        <ul>
          <li>
            <strong>Crisp Chat</strong>
            <ul>
              <li>crisp-client/* : gestion du chat</li>
              <li>Durée : 6 mois</li>
            </ul>
          </li>
        </ul>

        <h2>Gestion des cookies</h2>
        <p>
          Vous pouvez à tout moment modifier vos préférences de cookies en cliquant sur le bouton
          "Gérer mes cookies" en bas de page, ou via les paramètres de votre navigateur.
        </p>

        <h3>Paramètres du navigateur</h3>
        <ul>
          <li>
            <strong>Chrome :</strong>{' '}
            <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">
              Gérer les cookies
            </a>
          </li>
          <li>
            <strong>Firefox :</strong>{' '}
            <a href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">
              Gérer les cookies
            </a>
          </li>
          <li>
            <strong>Safari :</strong>{' '}
            <a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">
              Gérer les cookies
            </a>
          </li>
        </ul>

        <h2>Consentement</h2>
        <p>
          Conformément au RGPD et à la directive ePrivacy, nous utilisons Axeptio pour recueillir votre consentement
          avant de déposer des cookies non essentiels.
        </p>
        <p>
          Vous pouvez retirer votre consentement à tout moment sans que cela n'affecte la licéité du traitement
          fondé sur le consentement effectué avant le retrait.
        </p>

        <h2>Contact</h2>
        <p>
          Pour toute question : <a href="mailto:contact@hitom.fr" className="text-brand-primary hover:underline">contact@hitom.fr</a>
        </p>
      </section>
    </div>
  )
}

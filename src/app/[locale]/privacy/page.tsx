export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-6 pt-32 pb-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Politique de confidentialité</h1>

      <section className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-8">
          <em>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</em>
        </p>

        <h2>1. Responsable du traitement</h2>
        <p>
          Le responsable du traitement des données est :<br />
          <strong>[NOM DE L'ENTREPRISE]</strong><br />
          [ADRESSE]<br />
          Email : contact@hitom.fr
        </p>

        <h2>2. Données collectées</h2>
        <p>Nous collectons les données suivantes :</p>
        <ul>
          <li><strong>Données de navigation :</strong> adresse IP, type de navigateur, pages visitées (via Google Analytics et Microsoft Clarity)</li>
          <li><strong>Données de contact :</strong> nom, email, message (via formulaires de contact)</li>
          <li><strong>Cookies :</strong> cookies de mesure d'audience et fonctionnels</li>
        </ul>

        <h2>3. Finalités du traitement</h2>
        <p>Vos données sont utilisées pour :</p>
        <ul>
          <li>Répondre à vos demandes de contact</li>
          <li>Améliorer l'expérience utilisateur</li>
          <li>Analyser le trafic du site</li>
          <li>Respecter nos obligations légales</li>
        </ul>

        <h2>4. Base légale</h2>
        <p>
          Le traitement de vos données repose sur :
        </p>
        <ul>
          <li>Votre consentement (cookies analytiques)</li>
          <li>L'exécution d'un contrat (formulaires)</li>
          <li>Notre intérêt légitime (amélioration du service)</li>
        </ul>

        <h2>5. Destinataires des données</h2>
        <p>Vos données peuvent être partagées avec :</p>
        <ul>
          <li>Google Analytics (mesure d'audience)</li>
          <li>Microsoft Clarity (analyse comportementale)</li>
          <li>Crisp (support client)</li>
          <li>Axeptio (gestion du consentement)</li>
        </ul>

        <h2>6. Durée de conservation</h2>
        <p>
          Vos données sont conservées pendant la durée nécessaire aux finalités poursuivies :
        </p>
        <ul>
          <li>Données de contact : 3 ans après dernier contact</li>
          <li>Données analytics : 26 mois maximum (Google Analytics)</li>
        </ul>

        <h2>7. Vos droits</h2>
        <p>Conformément au RGPD, vous disposez des droits suivants :</p>
        <ul>
          <li>Droit d'accès à vos données</li>
          <li>Droit de rectification</li>
          <li>Droit à l'effacement</li>
          <li>Droit à la limitation du traitement</li>
          <li>Droit à la portabilité</li>
          <li>Droit d'opposition</li>
        </ul>
        <p>
          Pour exercer vos droits, contactez-nous à : <a href="mailto:contact@hitom.fr" className="text-brand-primary hover:underline">contact@hitom.fr</a>
        </p>

        <h2>8. Réclamation</h2>
        <p>
          Vous avez le droit d'introduire une réclamation auprès de la CNIL :{' '}
          <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">
            www.cnil.fr
          </a>
        </p>
      </section>
    </div>
  )
}

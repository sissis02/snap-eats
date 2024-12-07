/* eslint-disable react/no-unescaped-entities */
import styles from './legalNotices.module.scss';

export default function LegalNotices() {
  return (
    <main className={styles.main}>
      <section>
        <h3>Propriétaire du site</h3>
        <p>
          Nom du site :
          <em>Snapeats</em>
        </p>
        <p>
          Contact :
          <em>sissis1993@gmail.com</em>
        </p>
      </section>
      <section>
        <h3>Informations sur l'hébergeur</h3>
        <p>
          Nom de l'hébergeur :
          <em>Vercel Inc.</em>
        </p>
        <p>
          Adresse complète :
          <em>340 S Lemon Ave #4133 Walnut, CA 91789 USA</em>
        </p>
      </section>
      <section>
        <h3>Droits d'auteur et propriété intellectuelle</h3>
        <p>
          Copyright :
          <br />
          <em>
            Tous les contenus (charte graphique, textes, recettes) présents sur ce site sont la
            propriété exclusive de Snapeats. Toute reproduction, totale ou partielle, est
            interdite sans autorisation préalable.
          </em>
        </p>
        <br />
        <p>
          Crédits :
          <br />
          <em>
            Certaines images utilisées sur ce site ont été conçues par Freepik et
            sont disponibles sur www.freepik.com.
          </em>
          <em>
            D'autres images utilisées sur ce site ont été conçues par IconScout et
            sont disponibles sur www.iconscout.com.
          </em>
        </p>
      </section>
      <section>
        <h3>Limitation de responsabilité</h3>
        <p>
          Exactitude des recettes :
          <br />
          <em>
            Les recettes présentées sur ce site sont fournies à titre indicatif.
          </em>
          <em>
            Le propriétaire du site ne peut être tenu responsable en cas d'erreur ou d'omission.
          </em>
        </p>
        <br />
        <p>
          Disponibilité du site :
          <br />
          <em>
            Nous ne garantissons pas que le site sera toujours disponible et exempt d'erreurs.
          </em>
        </p>
        <br />
        <p>
          Allergies et dommages :
          <br />
          <em>
            Les ingrédients mentionnés dans nos recettes sont donnés à titre indicatif.
          </em>
          <em>
            Il appartient à chaque utilisateur de vérifier les éventuelles allergies ou intolérances
            liées à ces produits avant de les consommer.
          </em>
          <em>
            Le site Snapeats ne saurait être tenu responsable des réactions
            allergiques ou des dommages résultant de la préparation
            ou de la consommation des recettes proposées.
          </em>
        </p>
      </section>
      <section>
        <h3>Politique de confidentialité (données personnelles)</h3>
        <p>
          Ce site ne collecte aucune donnée.
        </p>
      </section>
      <section>
        <h3>Utilisation des cookies</h3>
        <p>Ce site n'utilise aucun cookie.</p>
      </section>
    </main>
  );
}

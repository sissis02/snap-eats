/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { IConcept } from 'types/concept.types';
import styles from './card.module.scss';
import quoteLeft from '../../../../public/icons/quotes_left.svg';
import quoteRight from '../../../../public/icons/quotes_right.svg';

export default function Card({ concept }: { concept : IConcept }) {
  return (
    <article className={styles.container}>
      <img src={concept.image} alt="concept" />
      <div className={styles.texts}>
        <div className={styles.title}>
          <Image src={quoteLeft} alt="quotes" />
          <h6>{concept.title}</h6>
          <Image src={quoteRight} alt="quotes" className={styles.rightQuotes} />
        </div>
        <p>
          {concept.description}
        </p>
      </div>
    </article>
  );
}

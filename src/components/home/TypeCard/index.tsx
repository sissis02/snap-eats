/* eslint-disable @next/next/no-img-element */
import { IType } from 'types/type.types';
import styles from './typeCard.module.scss';

export default function TypeCard({ type } : { type: IType }) {
  return (
    <article className={styles.container}>
      <img src={type.image} alt={type.name} />
      <h5>{type.name}</h5>
    </article>
  );
}

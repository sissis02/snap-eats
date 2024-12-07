/* eslint-disable react/no-unescaped-entities */
import styles from './step.module.scss';

export default function Step({ step } : { step: Array<number | string> }) {
  return (
    <article className={styles.container}>
      <em>{step[0]}</em>
      <p>
        {step[1]}
      </p>
    </article>
  );
}

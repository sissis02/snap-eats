import styles from './searchFilter.module.scss';

export default function SearchFilter({ onInput }:
{ onInput: (event: React.ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <input
      type="text"
      placeholder="Rechercher par ingrédient ..."
      autoComplete="off"
      className={styles.input}
      onInput={onInput}
    />
  );
}

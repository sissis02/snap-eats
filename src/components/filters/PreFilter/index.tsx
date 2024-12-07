import { MouseEventHandler } from 'react';
import styles from './preFilter.module.scss';

export default function PreFilter({ key, type, onClick, isActive }:
{ key: string, type: string, onClick: MouseEventHandler<HTMLButtonElement>, isActive: boolean }) {
  return (
    <button
      type="button"
      className={`${isActive ? styles.active : styles.filter}`}
      onClick={onClick}
    >
      {type}
    </button>
  );
}

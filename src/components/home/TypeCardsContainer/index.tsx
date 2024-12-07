'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { IType } from 'types/type.types';
import TypeCard from '../TypeCard';
import styles from './typeCardsContainer.module.scss';

export default function TypeCardsContainer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/types');
      const result = await res.json();
      setData(result);
    };

    fetchData();
  }, []);
  return (
    <section className={styles.container}>
      <h3>
        Les 6 types de plats proposés
      </h3>
      <div className={styles.cardsContainer}>
        {data && data.map((type: IType) => (
          <TypeCard key={type.id} type={type} />
        ))}
      </div>
      <aside>
        <Link href="/recipes"><button type="button">Explorez les recettes</button></Link>
      </aside>
    </section>
  );
}

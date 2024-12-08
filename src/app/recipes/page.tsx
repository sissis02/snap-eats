/* eslint-disable max-len */

'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Card from '@/components/recipes/Card';
import SearchFilter from '@/components/filters/SearchFilter';
import PreFilter from '@/components/filters/PreFilter';
import Pagination from '@/components/Pagination';
import paginate from 'utils/pagination-helper';
import { IIngredient, IRecipe } from 'types/recipe.types';
import styles from './recipes.module.scss';

export default function Recipes() {
  const router = useRouter();

  const [data, setData] = useState([]);
  const [inputSearch, setInputSearch] = useState<string>('');
  const [filters, setFilters] = useState<Record<string, boolean>>({
    salades: false,
    croques: false,
    burgers: false,
    omelettes: false,
    pâtes: false,
    tartines: false,
    assiette: false,
    four: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/recipes');
      const result = await res.json();
      setData(result);
    };

    fetchData();
  }, []);

  // Filters
  const handleInputSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputSearch(event.target.value);
  };

  const toggleFilter = (type: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [type]: !prevFilters[type],
    }));
  };

  // Apply filters cumulatively
  const filteredRecipes = data.filter((recipe : IRecipe) => {
    const matchesSearch = recipe.ingredients?.some((ingredient: IIngredient) => ingredient.name?.toLowerCase().includes(inputSearch.toLowerCase()));

    const activeFilters = Object.keys(filters).filter((key) => filters[key]);

    const matchesCategory = activeFilters.length === 0 || activeFilters.some((filter) => recipe.categories?.includes(filter));
    return matchesSearch && matchesCategory;
  });
  //

  // Pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 8;

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedRecipes = paginate(filteredRecipes, currentPage, pageSize);

  return (
    <main className={styles.main}>
      <aside>
        <SearchFilter onInput={handleInputSearch} />
        <div>
          <PreFilter
            key="salades"
            type="salades"
            onClick={() => toggleFilter('salades')}
            isActive={filters.salades}
          />
          <PreFilter
            key="croques"
            type="croques"
            onClick={() => toggleFilter('croques')}
            isActive={filters.croques}
          />
          <PreFilter
            key="burgers"
            type="burgers"
            onClick={() => toggleFilter('burgers')}
            isActive={filters.burgers}
          />
          <PreFilter
            key="omelettes"
            type="omelettes"
            onClick={() => toggleFilter('omelettes')}
            isActive={filters.omelettes}
          />
          <PreFilter
            key="pâtes"
            type="pâtes"
            onClick={() => toggleFilter('pâtes')}
            isActive={filters['pâtes']}
          />
          <PreFilter
            key="tartines"
            type="tartines"
            onClick={() => toggleFilter('tartines')}
            isActive={filters.tartines}
          />
          <PreFilter
            key="assiette"
            type="assiette"
            onClick={() => toggleFilter('assiette')}
            isActive={filters.assiette}
          />
          <PreFilter
            key="four"
            type="four"
            onClick={() => toggleFilter('four')}
            isActive={filters.four}
          />
        </div>
      </aside>
      <section className={styles.paginationContainer} id="top">
        <section className={styles.cardsContainer}>
          {data && filteredRecipes && paginatedRecipes.map((recipe: IRecipe) => (
            <Card
              key={recipe.id}
              recipe={recipe}
              onClick={() => router.push(`/recipes/${recipe.id}`)}
            />
          ))}
        </section>
        <article className={styles.pagination}>
          <Pagination
            items={filteredRecipes.length}
            currentPage={currentPage}
            pageSize={pageSize}
            onPageChange={onPageChange}
          />
        </article>
      </section>
    </main>
  );
}

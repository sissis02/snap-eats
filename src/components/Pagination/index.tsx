import { IPagination } from '@/types/index';
import styles from './pagination.module.scss';

export default function Pagination({
  items, currentPage, pageSize, onPageChange,
}: IPagination) {
  const pagesCount = Math.ceil(items / pageSize);

  if (pagesCount === 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
  console.log(pages);

  return (
    <article className={styles.container}>
      {pages.map((page) => (
        <a
          key={page}
          className={page === currentPage ? styles.pageItemActive : styles.pageItem}
          href="#top"
          onClick={() => onPageChange(page)}
          aria-hidden="true"
        >
          <p>
            {page}
          </p>
        </a>
      ))}
    </article>
  );
}

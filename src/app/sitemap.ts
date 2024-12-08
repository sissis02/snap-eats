import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let recipes = [];

  if (process.env.NODE_ENV === 'production') {
    // Mock des données pour éviter les requêtes pendant la build
    recipes = [{ id: 1 }, { id: 2 }, { id: 3 }]; // Exemple de données statiques
  } else {
    // Fetch les données réelles pour le développement
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/recipes`);
    recipes = await res.json();
  }

  const recipeEntries: MetadataRoute.Sitemap = recipes.map(({ id } : { id: number }) => ({
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/recipes/${id}`,
    // lastModified : new Date(),
    changeFrequency: 'yearly',
    // priority:,
  }));

  return [
    {
      url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/`,
      lastModified: '2024-11-26',
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/concept`,
      lastModified: '2024-11-26',
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/gallery`,
      // lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/legalNotices`,
      lastModified: '2024-11-26',
      changeFrequency: 'yearly',
      priority: 0,
    },
    ...recipeEntries,
  ];
}

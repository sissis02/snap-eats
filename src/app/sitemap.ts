import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

  let recipes = [];

  if (process.env.NODE_ENV === 'production') {
    // Mock des données pour éviter les requêtes pendant la build
    recipes = [{ id: 1 }, { id: 2 }, { id: 3 }]; // Exemple de données statiques
  } else if (process.env.NEXT_PHASE === 'phase-production-build') {
    console.log('Skipping API calls during the build phase');
    recipes = [{ id: 1 }, { id: 2 }, { id: 3 }];
  } else {
    // Fetch les données réelles pour le développement
    const res = await fetch(`${baseUrl}/api/recipes`);
    recipes = await res.json();
  }

  const recipeEntries: MetadataRoute.Sitemap = recipes.map(({ id } : { id: number }) => ({
    url: `${baseUrl}/recipes/${id}`,
    // lastModified : new Date(),
    changeFrequency: 'yearly',
    // priority:,
  }));

  return [
    {
      url: `${baseUrl}/`,
      lastModified: '2024-11-26',
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/concept`,
      lastModified: '2024-11-26',
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${baseUrl}/gallery`,
      // lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/legalNotices`,
      lastModified: '2024-11-26',
      changeFrequency: 'yearly',
      priority: 0,
    },
    ...recipeEntries,
  ];
}

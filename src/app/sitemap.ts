import type { MetadataRoute } from 'next'
 
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  
  const res = await fetch('/api/recipes');
  const data = await res.json();

  const recipeEntries: MetadataRoute.Sitemap = data.map(({id } : {id: number}) => ({
    url: `/recipes/${id}`,
    // lastModified : new Date(),
    changeFrequency: 'yearly',
    // priority:,
  }))

  return [
    {
      url: "/",
      lastModified: '2024-11-26',
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: "/concept",
      lastModified: '2024-11-26',
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: "/gallery",
      // lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: "/legalNotices",
      lastModified: '2024-11-26',
      changeFrequency: 'yearly',
      priority: 0,
    },
    ...recipeEntries,
  ]
}
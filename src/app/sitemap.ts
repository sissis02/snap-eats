import type { MetadataRoute } from 'next'
 
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  
  const res = await fetch(`${process.env.URL}/api/recipes`);
  const data = await res.json();

  const recipeEntries: MetadataRoute.Sitemap = data.map(({id } : {id: number}) => ({
    url: `${process.env.URL}/recipes/${id}`,
    // lastModified : new Date(),
    changeFrequency: 'yearly',
    // priority:,
  }))

  return [
    {
      url: `${process.env.URL}/`,
      lastModified: '2024-11-26',
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${process.env.URL}/concept`,
      lastModified: '2024-11-26',
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${process.env.URL}/gallery`,
      // lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${process.env.URL}/legalNotices`,
      lastModified: '2024-11-26',
      changeFrequency: 'yearly',
      priority: 0,
    },
    ...recipeEntries,
  ]
}
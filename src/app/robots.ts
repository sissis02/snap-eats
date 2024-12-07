import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // disallow: ["admin", "/privacy"]
        disallow: ["/legalNotices"]
      }
    ],
    sitemap: `${process.env.URL}/sitemap.xml`
  }
}
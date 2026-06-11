import type { MetadataRoute } from 'next';

const SITE_URL = 'https://medinaservices.us';

// Baseline sitemap (expanded/automated in Phase 5).
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/contact'];
  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.7,
  }));
}

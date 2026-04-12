import type { MetadataRoute } from 'next';
import { navLinks, siteConfig } from '@/data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return navLinks.map((link) => ({
    url: new URL(link.href, siteConfig.url).toString(),
    lastModified: now,
    changeFrequency: link.href === '/' ? 'weekly' : 'monthly',
    priority: link.href === '/' ? 1 : 0.7,
  }));
}


import { MetadataRoute } from 'next';
import { client } from '@/tina/__generated__/client';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Get all blog posts
  const postsResponse = await client.queries.postConnection();
  const posts = postsResponse.data.postConnection.edges?.map((edge) => edge.node) || [];

  const blogUrls = posts.map((post) => ({
    url: `https://lobinstores.com/blog/${post._sys.filename}`,
    lastModified: new Date(post.date),
  }));

  // Add static routes
  const routes = [
    '',
    '/blog',
    '/places/florida',
    '/places/texas',
    '/places/california',
    '/places/new-york',
  ].map((route) => ({
    url: `https://lobinstores.com${route}`,
    lastModified: new Date(),
  }));

  return [...routes, ...blogUrls];
}
import { Metadata } from 'next';
import { client } from '@/tina/__generated__/client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Blog | Latest Updates and Store Guides',
  description: 'Read the latest news, guides, and tips about bin stores and liquidation centers across the United States.',
};

export default async function BlogPage() {
  const postsResponse = await client.queries.postConnection();
  const posts = postsResponse.data.postConnection.edges?.map((edge) => edge.node) || [];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Latest Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link key={post._sys.filename} href={`/blog/${post._sys.filename}`}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              {post.image && (
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {new Date(post.date).toLocaleDateString()}
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground line-clamp-3">
                  {post.description}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
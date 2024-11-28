import { Metadata } from 'next';
import { useTina } from 'tinacms/dist/react';
import { client } from '@/tina/__generated__/client';

interface BlogPostProps {
  params: {
    slug: string;
  };
}




export default async function BlogPage() {
  const postsResponse = await client.queries.postConnection();

  // Use a type guard to ensure edges are properly narrowed and extract nodes
  const posts =
    postsResponse.data.postConnection.edges
      ?.filter((edge): edge is NonNullable<typeof edge> => edge !== null && edge.node !== null)
      .map((edge) => edge.node) || [];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
      {posts.length > 0 ? (
        <ul>
          {posts.map((post) => (
            post && ( // Ensure post is not null
              <li key={post.slug}>
                <a href={`/blog/${post.slug}`} className="text-blue-500">
                  {post.title}
                </a>
              </li>
            )
          ))}
        </ul>
      ) : (
        <p>No posts found.</p>
      )}
    </div>
  );
}

import { Metadata } from 'next';
import { useTina } from 'tinacms/dist/react';
import { client } from '@/tina/__generated__/client';

interface BlogPostProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const post = await client.queries.post({ relativePath: `${params.slug}.mdx` });
  
  return {
    title: post.data.post.title,
    description: post.data.post.description,
    openGraph: {
      title: post.data.post.title,
      description: post.data.post.description,
      images: post.data.post.image ? [{ url: post.data.post.image }] : [],
    },
  };
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { data } = await useTina({
    query: client.queries.post,
    variables: { relativePath: `${params.slug}.mdx` },
  });

  const { title, date, author, body } = data.post;

  return (
    <article className="container mx-auto px-4 py-12 prose prose-lg">
      <header className="mb-8">
        <h1 className="text-4xl font-bold">{title}</h1>
        <div className="mt-4 text-muted-foreground">
          <time>{new Date(date).toLocaleDateString()}</time>
          {author && <span> · By {author}</span>}
        </div>
      </header>
      <div>{body}</div>
    </article>
  );
}
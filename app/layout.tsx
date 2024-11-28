import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/navigation';
import { PageWrapper } from '@/providers/animation-provider';
import { DefaultSeo } from 'next-seo';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://lobinstores.com'),
  title: {
    default: 'Bin Stores Directory | Find Discount Stores Near You',
    template: '%s | Bin Stores Directory'
  },
  description: 'Discover the best bin stores and liquidation centers across the United States. Find great deals and discounts in your area.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lobinstores.com',
    siteName: 'Bin Stores Directory',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bin Stores Directory'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bin Stores Directory',
    description: 'Find the best bin stores near you',
    images: ['/og-image.jpg']
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://lobinstores.com" />
      </head>
      <body className={inter.className}>
        <DefaultSeo
          additionalMetaTags={[
            {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1',
            },
            {
              name: 'theme-color',
              content: '#ffffff',
            },
          ]}
          additionalLinkTags={[
            {
              rel: 'icon',
              href: '/favicon.ico',
            },
            {
              rel: 'manifest',
              href: '/manifest.json',
            },
          ]}
        />
        <Navigation />
        <PageWrapper>{children}</PageWrapper>
      </body>
    </html>
  );
}
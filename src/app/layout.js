import './globals.css';
import { Inter } from 'next/font/google';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Desigfinity - Digital Marketing Agency | Grow Your Local Business 10x Faster',
  description: 'Digital marketing made simple: Reels, AI Carousels, Lead Gen, Social Media & More. Help local businesses grow online with powerful digital strategies.',
  keywords: ['digital marketing', 'local business', 'social media management', 'lead generation', 'AI carousels', 'viral reels'],
  authors: [{ name: 'Desigfinity' }],
  creator: 'Desigfinity',
  publisher: 'Desigfinity',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://desigfinity.com',
    title: 'Desigfinity - Digital Marketing Agency',
    description: 'Grow Your Local Business 10x Faster with Desigfinity. Digital marketing made simple.',
    siteName: 'Desigfinity',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Desigfinity - Digital Marketing Agency',
    description: 'Grow Your Local Business 10x Faster with Desigfinity',
    creator: '@desigfinity',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
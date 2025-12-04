import type { Metadata } from 'next';
import './globals.css';
import Analytics from '@/components/Analytics';
import StructuredData from '@/components/StructuredData';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: '30 Recetas de Sopas Saludables para la Longevidad | Nutrición para Adultos Mayores',
    template: '%s | Sopas de Longevidad'
  },
  description: 'Descubre 30 recetas de sopas y cremas diseñadas para prolongar la vitalidad, mejorar la digestión y fortalecer la salud de tus abuelos. Recetas fáciles, nutritivas y deliciosas para una vejez activa y saludable.',
  keywords: 'recetas para adultos mayores, sopas saludables, nutrición geriátrica, alimentación tercera edad, longevidad, vitalidad, recetas fáciles, sopas nutritivas, dieta mediterránea, recetas antiaging',
  authors: [{ name: 'Milton Hurtado' }],
  creator: 'Milton Hurtado',
  publisher: 'Sopas de Longevidad',
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
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: '/',
    siteName: 'Sopas de Longevidad',
    title: '30 Recetas de Sopas Saludables para la Longevidad',
    description: 'Transforma la salud de tus abuelos con recetas nutritivas y deliciosas. 30 sopas diseñadas para prolongar la vitalidad.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '30 Recetas de Sopas Saludables para la Longevidad',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '30 Recetas de Sopas Saludables para la Longevidad',
    description: 'Transforma la salud de tus abuelos con recetas nutritivas y deliciosas',
    images: ['/og-image.jpg'],
    creator: '@tuhandle',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#e55341' },
    { media: '(prefers-color-scheme: dark)', color: '#e55341' },
  ],
  verification: {
    google: 'tu-codigo-de-verificacion-google',
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍲</text></svg>" />
        <StructuredData />
      </head>
      <body className="antialiased">
        <Analytics />
        {children}
      </body>
    </html>
  );
}

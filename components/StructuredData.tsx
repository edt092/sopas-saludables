export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: '30 Recetas de Sopas Saludables para la Longevidad',
    description: 'Descubre 30 recetas de sopas y cremas diseñadas para prolongar la vitalidad, mejorar la digestión y fortalecer la salud de tus abuelos. Recetas fáciles, nutritivas y deliciosas para una vejez activa y saludable.',
    image: `${process.env.NEXT_PUBLIC_SITE_URL}/og-image.jpg`,
    brand: {
      '@type': 'Brand',
      name: 'Sopas de Longevidad',
    },
    offers: {
      '@type': 'Offer',
      url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
      priceCurrency: 'USD',
      price: '27',
      availability: 'https://schema.org/InStock',
      priceValidUntil: '2025-12-31',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1',
    },
    category: 'Libros de Cocina/Nutrición',
    author: {
      '@type': 'Person',
      name: 'Milton Hurtado',
    },
  };

  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Sopas de Longevidad',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    logo: `${process.env.NEXT_PUBLIC_SITE_URL}/logo.png`,
    description: 'Recetas de sopas saludables diseñadas para mejorar la nutrición y longevidad de adultos mayores',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: ['Spanish'],
    },
  };

  const webSiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Sopas de Longevidad',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    description: 'Recetas de sopas saludables para la longevidad de adultos mayores',
    inLanguage: 'es',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteData) }}
      />
    </>
  );
}

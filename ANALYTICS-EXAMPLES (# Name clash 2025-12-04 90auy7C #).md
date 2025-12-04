# Ejemplos de Uso de Google Analytics

Este documento muestra cómo implementar tracking de eventos en tus componentes.

## Funciones Disponibles

Las funciones están en `lib/analytics.ts`:

```typescript
import {
  trackCTAClick,
  trackPricing,
  trackTestimonials,
  trackFAQOpen,
  trackBenefitsView,
  trackScrollDepth,
  trackPurchaseIntent,
  trackPurchase,
  trackEvent,
} from '@/lib/analytics';
```

## Ejemplos de Implementación

### 1. Trackear Clicks en Botones CTA

**En cualquier componente con botón de compra:**

```tsx
import { trackCTAClick } from '@/lib/analytics';

export default function CTAButton() {
  const handleClick = () => {
    // Trackear el evento
    trackCTAClick('Comprar Ahora', 'Hero');

    // Tu lógica de compra
    window.location.href = 'tu-link-de-pago';
  };

  return (
    <button onClick={handleClick}>
      Comprar Ahora
    </button>
  );
}
```

### 2. Trackear Vista de Secciones (Scroll)

**Opción A: Usando el hook useInView (recomendado):**

```tsx
'use client';

import { useEffect } from 'react';
import { useInView } from '@/hooks/useInView';
import { trackPricing } from '@/lib/analytics';

export default function Pricing() {
  const { ref, hasBeenInView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (hasBeenInView) {
      trackPricing();
    }
  }, [hasBeenInView]);

  return (
    <section ref={ref as any}>
      {/* Tu contenido de precios */}
    </section>
  );
}
```

**Opción B: Usando Intersection Observer directamente:**

```tsx
'use client';

import { useEffect, useRef } from 'react';
import { trackPricing } from '@/lib/analytics';

export default function Pricing() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            trackPricing();
            // Desconectar después del primer tracking
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 } // 50% visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref}>
      {/* Tu contenido de precios */}
    </section>
  );
}
```

### 3. Trackear Apertura de FAQs

**En un componente accordion:**

```tsx
'use client';

import { useState } from 'react';
import { trackFAQOpen } from '@/lib/analytics';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: '¿Las recetas son fáciles de preparar?',
      answer: 'Sí, todas las recetas...'
    },
    // más FAQs
  ];

  const handleToggle = (index: number, question: string) => {
    if (openIndex !== index) {
      // Solo trackear cuando se abre (no cuando se cierra)
      trackFAQOpen(question);
    }
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {faqs.map((faq, index) => (
        <div key={index}>
          <button onClick={() => handleToggle(index, faq.question)}>
            {faq.question}
          </button>
          {openIndex === index && <p>{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
}
```

### 4. Trackear Scroll Depth

**En el layout o página principal:**

```tsx
'use client';

import { useEffect } from 'react';
import { trackScrollDepth } from '@/lib/analytics';

export default function Page() {
  useEffect(() => {
    const depths = {
      '25%': false,
      '50%': false,
      '75%': false,
      '100%': false,
    };

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const percentage = (scrolled / scrollHeight) * 100;

      if (percentage >= 25 && !depths['25%']) {
        trackScrollDepth('25%');
        depths['25%'] = true;
      }
      if (percentage >= 50 && !depths['50%']) {
        trackScrollDepth('50%');
        depths['50%'] = true;
      }
      if (percentage >= 75 && !depths['75%']) {
        trackScrollDepth('75%');
        depths['75%'] = true;
      }
      if (percentage >= 100 && !depths['100%']) {
        trackScrollDepth('100%');
        depths['100%'] = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <div>{/* Tu contenido */}</div>;
}
```

### 5. Trackear Inicio de Proceso de Compra

**Cuando el usuario hace click en "Comprar":**

```tsx
import { trackPurchaseIntent } from '@/lib/analytics';

export default function PricingCard() {
  const handleBuyClick = () => {
    const price = 27;

    // Trackear intención de compra
    trackPurchaseIntent(price);

    // Redirigir a checkout
    window.location.href = 'https://tu-checkout.com';
  };

  return (
    <button onClick={handleBuyClick}>
      Comprar por $27
    </button>
  );
}
```

### 6. Trackear Compra Exitosa

**En tu página de confirmación o callback de pago:**

```tsx
'use client';

import { useEffect } from 'react';
import { trackPurchase } from '@/lib/analytics';

export default function ThankYouPage() {
  useEffect(() => {
    // Obtener transaction ID de tu sistema de pago
    const transactionId = 'order-123456';
    const value = 27;

    trackPurchase(transactionId, value);
  }, []);

  return (
    <div>
      <h1>¡Gracias por tu compra!</h1>
    </div>
  );
}
```

### 7. Trackear Eventos Personalizados

**Para cualquier interacción específica:**

```tsx
import { trackEvent } from '@/lib/analytics';

export default function Newsletter() {
  const handleSubscribe = () => {
    trackEvent(
      'subscribe_newsletter',  // acción
      'email_signup',          // categoría
      'footer_form',           // etiqueta
      undefined                // valor (opcional)
    );

    // Tu lógica de suscripción
  };

  return (
    <button onClick={handleSubscribe}>
      Suscribirse
    </button>
  );
}
```

### 8. Trackear Clics en Links Externos

```tsx
import { trackEvent } from '@/lib/analytics';

export default function Footer() {
  const handleSocialClick = (platform: string) => {
    trackEvent(
      'click_social',
      'external_link',
      platform
    );
  };

  return (
    <div>
      <a
        href="https://facebook.com/tupagina"
        onClick={() => handleSocialClick('Facebook')}
        target="_blank"
      >
        Facebook
      </a>
      <a
        href="https://instagram.com/tupagina"
        onClick={() => handleSocialClick('Instagram')}
        target="_blank"
      >
        Instagram
      </a>
    </div>
  );
}
```

## Componentes Sugeridos para Implementar Tracking

### Prioridad Alta
1. **CTAButton.tsx** - Todos los botones de compra
2. **Pricing.tsx** - Vista de sección de precios
3. **Hero.tsx** - CTA principal del hero

### Prioridad Media
4. **FAQ.tsx** - Apertura de preguntas
5. **Testimonials.tsx** - Vista de testimonios
6. **Benefits.tsx** - Vista de beneficios

### Prioridad Baja
7. **Footer.tsx** - Clicks en redes sociales
8. **CountdownTimer.tsx** - Cuando llega a 0

## Visualizar Eventos en Google Analytics

1. Ve a Google Analytics 4
2. Navega a **Reportes > Engagement > Eventos**
3. Verás todos tus eventos en tiempo real

### Crear Conversiones

1. En GA4, ve a **Configuración > Eventos**
2. Marca estos eventos como conversiones:
   - `click_cta`
   - `begin_checkout`
   - `purchase`
   - `view_pricing` (opcional)

## Testing Local

Para verificar que los eventos se están enviando:

1. Abre Chrome DevTools (F12)
2. Ve a la pestaña **Network**
3. Filtra por "collect" o "google-analytics"
4. Interactúa con tu sitio
5. Verás las peticiones a Google Analytics

## Mejores Prácticas

1. **No envíes eventos duplicados** - Usa flags o desconecta observers
2. **Nombres consistentes** - Usa snake_case (ej: `click_cta`)
3. **Categorías claras** - Agrupa eventos similares
4. **Etiquetas descriptivas** - Ayudan a segmentar datos
5. **Valida antes de deploy** - Usa el modo debug de GA4

## Debug Mode

Para activar el modo debug en desarrollo:

```typescript
// En components/Analytics.tsx, cambia:
gtag('config', '${GA_ID}', {
  page_path: window.location.pathname,
  debug_mode: true, // Agregar esta línea
});
```

Luego abre Chrome DevTools > Console y verás logs de GA4.

## Recursos

- [GA4 Event Reference](https://developers.google.com/analytics/devguides/collection/ga4/events)
- [GA4 Recommended Events](https://support.google.com/analytics/answer/9267735)
- [Debug Mode](https://developers.google.com/analytics/devguides/collection/ga4/debug)

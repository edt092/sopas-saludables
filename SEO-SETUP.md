# Guía de Configuración SEO - Sopas de Longevidad

## Checklist Pre-Deploy

### 1. Google Analytics 4 (GA4)

#### Pasos para configurar:

1. Ve a [Google Analytics](https://analytics.google.com)
2. Crea una cuenta nueva o usa una existente
3. Crea una propiedad GA4
4. Obtén tu ID de medición (formato: `G-XXXXXXXXXX`)
5. Copia el archivo `.env.local.example` a `.env.local`
6. Agrega tu ID de GA4:
   ```bash
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

#### Qué podrás rastrear:
- Visitas a la página
- Comportamiento del usuario (clics, scroll, tiempo en página)
- Conversiones (compras, registros)
- Demografía y ubicación de usuarios
- Dispositivos y navegadores utilizados

### 2. Variables de Entorno

Crea un archivo `.env.local` con las siguientes variables:

```bash
# Google Analytics 4
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# URL del sitio (cambiar en producción)
NEXT_PUBLIC_SITE_URL=https://tudominio.com
```

### 3. Google Search Console

1. Ve a [Google Search Console](https://search.google.com/search-console)
2. Agrega tu propiedad (dominio o URL prefix)
3. Verifica la propiedad usando uno de estos métodos:
   - **Archivo HTML**: Sube el archivo de verificación a `/public/`
   - **Meta tag**: Ya está configurado en `layout.tsx:60` (reemplaza `tu-codigo-de-verificacion-google`)
   - **Google Analytics**: Si ya tienes GA4 configurado
   - **DNS**: Agrega un registro TXT a tu DNS

4. Una vez verificado, envía tu sitemap:
   ```
   https://tudominio.com/sitemap.xml
   ```

### 4. Imagen Open Graph

Crea una imagen para compartir en redes sociales:

- **Ubicación**: `/public/og-image.jpg`
- **Dimensiones**: 1200x630 píxeles
- **Formato**: JPG o PNG
- **Contenido sugerido**:
  - Logo o marca
  - Título del producto
  - Imagen atractiva de sopas
  - Call to action visual

**Herramientas para crear la imagen:**
- [Canva](https://canva.com) (templates gratuitos)
- [Figma](https://figma.com)
- [Adobe Express](https://www.adobe.com/express/)

### 5. Meta Tags Personalizables

En `app/layout.tsx`, actualiza estos campos:

```typescript
// Línea 48: Handle de Twitter
creator: '@tuhandle',

// Línea 60: Código de verificación de Google
verification: {
  google: 'tu-codigo-de-verificacion-google',
},
```

### 6. Structured Data (JSON-LD)

El structured data ya está configurado en `components/StructuredData.tsx`. Personaliza:

- **Precio**: Línea 15 (actualmente $27)
- **Rating**: Líneas 20-24 (actualmente 4.8 con 127 reviews)
- **Información de contacto**: Líneas 38-42

### 7. Sitemap y Robots

Ya están configurados automáticamente:
- **Sitemap**: `/sitemap.xml` (generado en `app/sitemap.ts`)
- **Robots**: `/robots.txt` (generado en `app/robots.ts`)

Si agregas más páginas en el futuro, actualiza `app/sitemap.ts`.

## Herramientas de Testing Pre-Deploy

### 1. Rich Results Test
Verifica que tus structured data sean válidos:
- https://search.google.com/test/rich-results

### 2. Meta Tags Debugger
**Facebook/Open Graph:**
- https://developers.facebook.com/tools/debug/

**Twitter:**
- https://cards-dev.twitter.com/validator

### 3. PageSpeed Insights
Mide el rendimiento y SEO:
- https://pagespeed.web.dev/

### 4. Mobile-Friendly Test
Verifica que tu sitio sea mobile-friendly:
- https://search.google.com/test/mobile-friendly

## Métricas Clave en Google Analytics

Una vez configurado GA4, monitorea estas métricas:

### Engagement
- **Usuarios activos**: Cuántas personas visitan tu sitio
- **Sesiones**: Número de visitas totales
- **Duración promedio de sesión**: Cuánto tiempo permanecen
- **Páginas por sesión**: Cuántas páginas ven
- **Tasa de rebote**: % de usuarios que se van sin interactuar

### Conversiones
Configura estos eventos como conversiones en GA4:
- Clics en el botón de compra
- Scroll hasta la sección de precios
- Tiempo en página > 2 minutos (indica interés)
- Clicks en testimonios o FAQ

### Adquisición
- **Fuentes de tráfico**: De dónde vienen los usuarios
  - Orgánico (Google/Bing)
  - Directo (URL directa)
  - Referencia (otros sitios)
  - Social (redes sociales)
  - Paid (anuncios)

### Comportamiento
- **Páginas más visitadas**
- **Flujo de comportamiento**: Cómo navegan los usuarios
- **Eventos personalizados**: Clics en CTAs, descargas, etc.

## Eventos Personalizados Recomendados

Puedes agregar tracking de eventos específicos en tus componentes:

```typescript
// Ejemplo: Trackear clic en botón de compra
const handleClick = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'click_cta', {
      event_category: 'engagement',
      event_label: 'Comprar Ahora',
      value: 27
    });
  }
  // Tu lógica de compra
};
```

### Eventos sugeridos:
1. `view_pricing` - Usuario ve la sección de precios
2. `click_cta` - Clic en botón de compra
3. `read_testimonials` - Interacción con testimonios
4. `open_faq` - Apertura de preguntas frecuentes
5. `view_benefits` - Scroll a sección de beneficios

## Optimizaciones Adicionales

### Performance
- ✅ Lazy loading de imágenes
- ✅ Optimización de fuentes con Next.js
- ⚠️ Considera: Comprimir imágenes con Sharp o next/image
- ⚠️ Considera: Implementar ISR o SSG para páginas estáticas

### Accesibilidad
- ✅ Etiquetas semánticas HTML
- ⚠️ Verifica: Contraste de colores (WCAG AA)
- ⚠️ Verifica: Textos alternativos en imágenes
- ⚠️ Verifica: Navegación por teclado

### Core Web Vitals
Monitorea en Google Search Console:
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

## Checklist Final

- [ ] Configurar Google Analytics 4
- [ ] Crear archivo `.env.local` con variables
- [ ] Verificar sitio en Google Search Console
- [ ] Crear imagen Open Graph (1200x630px)
- [ ] Actualizar handle de Twitter
- [ ] Agregar código de verificación de Google
- [ ] Personalizar precios y ratings en StructuredData
- [ ] Testear meta tags con Facebook Debugger
- [ ] Testear structured data con Rich Results Test
- [ ] Verificar mobile-friendly
- [ ] Ejecutar PageSpeed Insights
- [ ] Enviar sitemap a Google Search Console
- [ ] Configurar eventos de conversión en GA4

## Recursos Adicionales

- [Next.js SEO Best Practices](https://nextjs.org/learn/seo/introduction-to-seo)
- [Google Analytics 4 Documentation](https://support.google.com/analytics/answer/10089681)
- [Schema.org Product Markup](https://schema.org/Product)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Card Documentation](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)

---

**Nota**: Después del deploy, espera 24-48 horas para que Google indexe tu sitio y comiences a ver datos en Analytics y Search Console.

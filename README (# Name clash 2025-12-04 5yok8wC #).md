# Landing Page: 30 Recetas de Sopas y Cremas para la Longevidad

Landing page moderna y de alta conversión desarrollada con Next.js 14, React y Tailwind CSS.

## 🚀 Características

- **Diseño Responsive**: Optimizado para todos los dispositivos
- **Contador Regresivo**: 24 horas con auto-reset automático
- **Animaciones Suaves**: Implementadas con Framer Motion
- **Múltiples CTAs**: Estratégicamente ubicados para maximizar conversiones
- **Gatillos Mentales**: Escasez, urgencia, prueba social, autoridad
- **SEO Optimizado**: Meta tags, structured data, sitemap automático
- **Google Analytics 4**: Tracking completo de usuarios y conversiones
- **Performance**: Optimizado para carga rápida

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Configurar variables de entorno (ver sección SEO & Analytics)
cp .env.local.example .env.local
# Edita .env.local con tus credenciales

# Modo desarrollo
npm run dev

# Compilar para producción
npm run build

# Iniciar servidor de producción
npm start
```

## 🔍 SEO & Analytics

Esta landing page viene con una configuración SEO completa lista para producción:

### Configuración Rápida

1. **Copia el archivo de variables de entorno:**
   ```bash
   cp .env.local.example .env.local
   ```

2. **Configura Google Analytics 4:**
   - Obtén tu ID en [Google Analytics](https://analytics.google.com)
   - Agrega el ID a `.env.local`: `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX`

3. **Configura la URL de tu sitio:**
   - Edita `.env.local`: `NEXT_PUBLIC_SITE_URL=https://tudominio.com`

### Características SEO Incluidas

- ✅ Meta tags optimizados (title, description, keywords)
- ✅ Open Graph para redes sociales
- ✅ Twitter Cards
- ✅ Structured Data (JSON-LD) para rich snippets
- ✅ Sitemap.xml automático
- ✅ Robots.txt configurado
- ✅ Canonical URLs
- ✅ Google Analytics 4 integrado
- ✅ Eventos de tracking predefinidos

### Documentación Completa

- **[SEO-SETUP.md](./SEO-SETUP.md)** - Guía completa de configuración pre-deploy
- **[ANALYTICS-EXAMPLES.md](./ANALYTICS-EXAMPLES.md)** - Ejemplos de implementación de tracking

### Verificación Pre-Deploy

Antes de hacer deploy, asegúrate de:
- [ ] Configurar Google Analytics 4
- [ ] Crear imagen Open Graph (1200x630px en `/public/og-image.jpg`)
- [ ] Verificar sitio en Google Search Console
- [ ] Actualizar handle de Twitter en `app/layout.tsx`
- [ ] Testear meta tags con [Facebook Debugger](https://developers.facebook.com/tools/debug/)

Para más detalles, consulta **[SEO-SETUP.md](./SEO-SETUP.md)**

## 🎨 Estructura del Proyecto

```
├── app/
│   ├── layout.tsx       # Layout principal con SEO
│   ├── page.tsx         # Página principal
│   ├── sitemap.ts       # Sitemap dinámico
│   ├── robots.ts        # Robots.txt dinámico
│   └── globals.css      # Estilos globales
├── components/
│   ├── Hero.tsx         # Sección hero
│   ├── Problem.tsx      # Sección de problemas
│   ├── Benefits.tsx     # Beneficios
│   ├── Author.tsx       # Sobre el autor
│   ├── Features.tsx     # Características del producto
│   ├── Bonuses.tsx      # Bonos exclusivos
│   ├── Pricing.tsx      # Precio y oferta
│   ├── Testimonials.tsx # Testimonios
│   ├── FAQ.tsx          # Preguntas frecuentes
│   ├── Footer.tsx       # Footer
│   ├── CTAButton.tsx    # Botón de llamado a la acción
│   ├── CountdownTimer.tsx # Contador regresivo
│   ├── Analytics.tsx    # Google Analytics 4
│   └── StructuredData.tsx # JSON-LD Schema
├── hooks/
│   └── useInView.ts     # Hook para detectar elementos visibles
├── lib/
│   └── analytics.ts     # Utilidades de tracking
└── tailwind.config.js   # Configuración de Tailwind
```

## 🎯 Gatillos Mentales Implementados

1. **Escasez**: Contador regresivo de 24 horas
2. **Urgencia**: "Solo disponible esta semana"
3. **Autoridad**: Credenciales del autor y experiencia
4. **Prueba Social**: 500+ familias, testimonios reales
5. **Reciprocidad**: Bonos gratuitos incluidos
6. **Garantía**: 7 días de devolución sin preguntas
7. **Valor**: Precio regular vs precio con descuento
8. **Exclusividad**: Comunidad privada, bonos limitados

## 💰 Precio

- Precio regular: $40.80 USD
- Precio oferta: **$9.70 USD**
- Ahorro: 90%+

## 🔗 Link de Compra

https://go.hotmart.com/K101972366R?dp=1

## 📱 Responsive

- Mobile: Optimizado con CTA flotante
- Tablet: Layout adaptativo
- Desktop: Experiencia completa

## ⚡ Performance

- Imágenes optimizadas
- Lazy loading de componentes
- Animaciones con GPU acceleration
- Código minificado para producción

## 🎨 Paleta de Colores

- Primary: #e55341 (rojo cálido)
- Warm: #eba43a (naranja/dorado)
- Grays: Escala completa para contraste

## 📄 Licencia

© 2025 Mega Escuela. Todos los derechos reservados.

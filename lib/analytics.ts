// Utilidades para Google Analytics

declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
  }
}

// Trackear eventos personalizados
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Eventos específicos predefinidos

export const trackCTAClick = (buttonText: string, section: string) => {
  trackEvent('click_cta', 'engagement', `${section} - ${buttonText}`);
};

export const trackPricing = () => {
  trackEvent('view_pricing', 'engagement', 'Usuario vio precios');
};

export const trackTestimonials = () => {
  trackEvent('view_testimonials', 'engagement', 'Usuario vio testimonios');
};

export const trackFAQOpen = (question: string) => {
  trackEvent('open_faq', 'engagement', question);
};

export const trackBenefitsView = () => {
  trackEvent('view_benefits', 'engagement', 'Usuario vio beneficios');
};

export const trackScrollDepth = (depth: '25%' | '50%' | '75%' | '100%') => {
  trackEvent('scroll_depth', 'engagement', depth);
};

export const trackPurchaseIntent = (price: number) => {
  trackEvent('begin_checkout', 'ecommerce', 'Inicio de compra', price);
};

// Trackear conversiones (cuando el usuario compra)
export const trackPurchase = (transactionId: string, value: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'purchase', {
      transaction_id: transactionId,
      value: value,
      currency: 'USD',
      items: [
        {
          item_id: 'sopas-longevidad-ebook',
          item_name: '30 Recetas de Sopas Saludables',
          price: value,
          quantity: 1,
        },
      ],
    });
  }
};

// Trackear páginas vistas (útil para SPAs)
export const trackPageView = (url: string, title: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: url,
      page_title: title,
    });
  }
};

'use client';

import Author from '@/components/Author';
import Benefits from '@/components/Benefits';
import Bonuses from '@/components/Bonuses';
import CTAButton from '@/components/CTAButton';
import FAQ from '@/components/FAQ';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Pricing from '@/components/Pricing';
import Problem from '@/components/Problem';
import Testimonials from '@/components/Testimonials';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Problem Section */}
      <Problem />

      {/* Benefits Section */}
      <Benefits />

      {/* Author Section */}
      <Author />

      {/* Features Section */}
      <Features />

      {/* Bonuses Section */}
      <Bonuses />

      {/* Pricing Section */}
      <Pricing />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Final CTA before FAQ */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-warm-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                No esperes más para transformar su calidad de vida
              </h2>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Cada día que pasa es una oportunidad perdida de darles más salud,
                energía y años de vida plena
              </p>
              <CTAButton
                variant="secondary"
                icon="cart"
                text="Sí, Quiero Comenzar Esta Transformación Ahora"
                className="bg-white text-primary-700 hover:bg-gray-100"
              />
              <p className="text-sm mt-6 opacity-75">
                Garantía de 7 días • Acceso instantáneo • Soporte completo
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Footer */}
      <Footer />

      {/* Floating CTA Button (mobile) */}
      <div className="fixed bottom-6 left-0 right-0 z-40 px-4 md:hidden">
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <CTAButton
            variant="urgent"
            size="md"
            icon="cart"
            text="Comprar Ahora $9.70"
            className="w-full shadow-2xl"
          />
        </motion.div>
      </div>

      {/* Scroll to top button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-primary-600 text-white p-4 rounded-full shadow-2xl hover:bg-primary-700 transition-all hover:scale-110 hidden md:block"
          aria-label="Volver arriba"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </main>
  );
}

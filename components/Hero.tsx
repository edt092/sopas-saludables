'use client';

import { motion } from 'framer-motion';
import { Heart, Sparkles, Star } from 'lucide-react';
import CTAButton from './CTAButton';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-warm-50 to-orange-50 py-20 md:py-32">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-warm-200 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg mb-8"
          >
            <Sparkles className="w-5 h-5 text-primary-600" />
            <span className="text-sm md:text-base font-semibold text-gray-700">
              Más de 500 familias ya lo disfrutan
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight"
          >
            Dale a tus abuelos el{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-warm-600">
              regalo más valioso:
            </span>
            <br />
            <span className="inline-flex items-center gap-3">
              Más años con salud
              <Heart className="w-10 h-10 md:w-14 md:h-14 text-red-500 animate-bounce-soft inline" />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            30 recetas de sopas y cremas diseñadas por expertos en nutrición para{' '}
            <strong className="text-primary-700">prolongar la vitalidad</strong>,{' '}
            <strong className="text-primary-700">mejorar la digestión</strong> y{' '}
            <strong className="text-primary-700">fortalecer la salud</strong> sin renunciar al sabor.
          </motion.p>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center justify-center gap-2 mb-10"
          >
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  src={`/img/avatares/avatar${i + 1}.jpg`}
                  alt="Avatar"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover bg-gray-100"
                />
              ))}
            </div>
            <div className="flex gap-1 ml-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-sm text-gray-600 ml-2">
              <strong>4.9/5</strong> · 500+ reseñas
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <CTAButton
              variant="urgent"
              icon="cart"
              text="Sí, Quiero Transformar la Salud de Mis Abuelos"
            />
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600"
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Garantía 7 días</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Acceso inmediato</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Pago 100% seguro</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

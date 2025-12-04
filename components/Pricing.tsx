'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Shield, Zap } from 'lucide-react';
import CountdownTimer from './CountdownTimer';
import CTAButton from './CTAButton';

export default function Pricing() {
  const included = [
    '30 Recetas de Sopas y Cremas Saludables',
    'Tablas nutricionales detalladas',
    'Beneficios específicos de cada receta',
    'Instrucciones paso a paso ilustradas',
    'Las 10 Claves para una Nutrición sin Errores',
    'Come con Ganas: Guía para Revivir el Apetito',
    'Los Pilares de la Vitalidad (Bono Semanal)',
    'Acceso a Comunidad Exclusiva por 1 año',
    '25% de descuento en productos futuros',
    'Garantía de devolución de 7 días'
  ];

  return (
    <section id="offer" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-warm-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-red-600 px-6 py-3 rounded-full mb-6">
              <Zap className="w-5 h-5" />
              <span className="font-bold">OFERTA POR TIEMPO LIMITADO</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Invierte en la salud de quienes más amas
            </h2>
            <p className="text-xl text-gray-300">
              Por menos de lo que cuesta una comida fuera de casa
            </p>
          </motion.div>

          {/* Pricing card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl overflow-hidden shadow-2xl text-gray-900"
          >
            <div className="bg-gradient-to-r from-primary-600 to-warm-600 p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-2">
                Paquete Completo de Nutrición y Vitalidad
              </h3>
              <p className="text-primary-100">
                Todo lo que necesitas para transformar la salud de tus abuelos
              </p>
            </div>

            <div className="p-8 md:p-12">
              {/* Value breakdown */}
              <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                <h4 className="font-bold text-gray-900 mb-4 text-lg">
                  Si compraras todo por separado pagarías:
                </h4>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Ebook Principal (30 Recetas)</span>
                    <span className="font-semibold">$19.90</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Nutrición sin Errores</span>
                    <span className="font-semibold">$15.00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Come con Ganas</span>
                    <span className="font-semibold">$12.00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Los Pilares de la Vitalidad</span>
                    <span className="font-semibold">$18.00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Acceso a Comunidad (1 año)</span>
                    <span className="font-semibold">$97.00</span>
                  </div>
                  <div className="border-t-2 border-gray-300 pt-2 mt-2">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-lg">Valor Total:</span>
                      <span className="font-bold text-2xl text-gray-500 line-through">$161.90</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Special price */}
              <div className="text-center mb-8">
                <p className="text-xl text-gray-700 mb-4">
                  Precio especial de lanzamiento:
                </p>
                <div className="flex items-center justify-center gap-4 mb-2">
                  <span className="text-3xl text-gray-400 line-through">$40.80</span>
                  <div className="bg-gradient-to-r from-primary-600 to-warm-600 text-white px-6 py-3 rounded-2xl">
                    <div className="text-sm font-semibold mb-1">HOY SOLAMENTE</div>
                    <div className="text-5xl font-bold">$9.70</div>
                  </div>
                </div>
                <p className="text-primary-600 font-bold text-xl">
                  ¡Ahorra más del 90%!
                </p>
              </div>

              {/* What's included */}
              <div className="mb-8">
                <h4 className="font-bold text-gray-900 mb-4 text-lg">
                  Todo lo que obtienes hoy:
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {included.map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="text-center mb-8">
                <CTAButton
                  variant="urgent"
                  icon="cart"
                  text="¡Quiero Aprovechar Esta Oferta Ahora!"
                  className="w-full md:w-auto"
                />
              </div>

              {/* Guarantee */}
              <div className="bg-green-50 rounded-2xl p-6 border-2 border-green-200">
                <div className="flex items-start gap-4">
                  <Shield className="w-12 h-12 text-green-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">
                      Garantía de Satisfacción Total - 7 Días
                    </h4>
                    <p className="text-gray-700">
                      Si en los próximos 7 días decides que este recetario no es para ti,
                      simplemente envíanos un email y te devolvemos el 100% de tu dinero.
                      Sin preguntas, sin complicaciones.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Countdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12"
          >
            <CountdownTimer />
          </motion.div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-8"
          >
            <CTAButton
              variant="secondary"
              icon="sparkles"
              text="Sí, Quiero Transformar Su Salud Hoy"
            />
            <p className="text-sm text-gray-400 mt-4">
              Pago 100% seguro procesado por Hotmart • Acceso inmediato
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

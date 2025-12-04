'use client';

import { motion } from 'framer-motion';
import { Brain, Heart, Moon, Smile, Sparkles, Zap } from 'lucide-react';

export default function Benefits() {
  const benefitsForElderly = [
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: 'Digestión Ligera',
      description: 'Sin pesadez ni malestares. Sopas diseñadas para un sistema digestivo sensible.'
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: 'Más Energía Diaria',
      description: 'Recupera la vitalidad para disfrutar las actividades que amas sin agotamiento.'
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: 'Corazón Saludable',
      description: 'Recetas que apoyan la circulación y la salud cardiovascular naturalmente.'
    },
    {
      icon: <Brain className="w-10 h-10" />,
      title: 'Claridad Mental',
      description: 'Nutrientes que alimentan el cerebro para mantener la memoria activa y aguda.'
    },
    {
      icon: <Moon className="w-10 h-10" />,
      title: 'Sueño Reparador',
      description: 'Descansa mejor con ingredientes que promueven un descanso profundo y natural.'
    },
    {
      icon: <Smile className="w-10 h-10" />,
      title: 'Bienestar Emocional',
      description: 'El placer de una buena comida mejora el ánimo y la calidad de vida.'
    }
  ];

  const benefitsForFamily = [
    {
      emoji: '🕊',
      title: 'Tranquilidad Emocional',
      description: 'Saber que están bien alimentados te da paz mental.'
    },
    {
      emoji: '⏳',
      title: 'Ahorro de Tiempo',
      description: 'Recetas simples que no requieren horas en la cocina.'
    },
    {
      emoji: '📚',
      title: 'Método Probado',
      description: 'Confía en recetas validadas por nutricionistas expertos.'
    },
    {
      emoji: '💖',
      title: 'Vínculos Más Fuertes',
      description: 'Cocinar juntos crea momentos memorables en familia.'
    },
    {
      emoji: '🩺',
      title: 'Prevención de Salud',
      description: 'Evita problemas futuros con una nutrición adecuada hoy.'
    },
    {
      emoji: '🌟',
      title: 'Satisfacción Personal',
      description: 'El orgullo de ver a tus seres queridos florecer.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Transforma la vida de quienes más amas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada receta está diseñada con un propósito: darles más años de vida plena.
            </p>
          </motion.div>

          {/* Benefits for Elderly */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="text-6xl">👵👴</div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Si eres abuelita o abuelito
                </h3>
                <p className="text-gray-600">Disfruta de estos beneficios en tu día a día</p>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {benefitsForElderly.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-primary-50 to-warm-50 rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="text-primary-600 mb-4">
                    {benefit.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Benefits for Family */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="text-6xl">👨‍👩‍👧‍👦</div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Si eres hijo, nieto o cuidador
                </h3>
                <p className="text-gray-600">Descubre cómo esto te beneficia también</p>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {benefitsForFamily.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-primary-300 hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="text-5xl mb-4">
                    {benefit.emoji}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

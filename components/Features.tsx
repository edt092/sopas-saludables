'use client';

import { motion } from 'framer-motion';
import { BookOpen, ChefHat, Clock, Heart, LineChart, Lightbulb } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Tabla Nutricional Completa',
      description: 'Cada receta incluye información detallada de calorías, proteínas, vitaminas y minerales.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Beneficios Específicos',
      description: 'Descubre exactamente cómo cada plato mejora la salud: digestión, energía, memoria y más.'
    },
    {
      icon: <ChefHat className="w-8 h-8" />,
      title: 'Ingredientes Fáciles',
      description: 'Todo lo que necesitas se encuentra en cualquier supermercado. Sin complicaciones.'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Preparación Simple',
      description: 'Instrucciones paso a paso con tiempos de preparación y nivel de dificultad claramente marcados.'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Consejos de Experto',
      description: 'Tips prácticos en cada receta para maximizar el sabor y los beneficios nutricionales.'
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: 'Resultados Medibles',
      description: 'Verás mejoras en energía, digestión y bienestar en las primeras semanas.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-warm-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Mucho más que un simple recetario
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cada página está diseñada para darte confianza y claridad en la cocina
            </p>
          </motion.div>

          {/* Sample recipe preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 md:p-12 mb-16 text-gray-900 shadow-2xl"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Vista previa de receta
                </div>
                <h3 className="text-3xl font-bold mb-4 text-gray-900">
                  Sopa de Lentejas con Verduras
                </h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary-600" />
                    <span className="text-gray-700"><strong>Tiempo:</strong> 35 minutos</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ChefHat className="w-5 h-5 text-primary-600" />
                    <span className="text-gray-700"><strong>Dificultad:</strong> Fácil</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-red-500" />
                    <span className="text-gray-700"><strong>Beneficios:</strong> Energía, digestión, corazón sano</span>
                  </div>
                </div>
                <div className="bg-primary-50 rounded-xl p-4">
                  <h4 className="font-semibold text-primary-800 mb-2">💡 Consejo del experto:</h4>
                  <p className="text-gray-700 text-sm">
                    Para una digestión aún más suave, puedes licuar la mitad de la sopa y mezclarla con la otra mitad.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary-100 to-warm-100 rounded-2xl p-6">
                <h4 className="font-bold text-gray-900 mb-4 text-lg">Información Nutricional (por porción)</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Calorías</span>
                    <span className="font-bold text-primary-700">245 kcal</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Proteínas</span>
                    <span className="font-bold text-primary-700">14g</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Fibra</span>
                    <span className="font-bold text-primary-700">8g</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Hierro</span>
                    <span className="font-bold text-primary-700">4.2mg</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Features grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all"
              >
                <div className="text-primary-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { AlertCircle, Clock, Frown, TrendingDown } from 'lucide-react';

export default function Problem() {
  const problems = [
    {
      icon: <Frown className="w-8 h-8" />,
      title: '¿Te preocupa ver a tus abuelos sin apetito?',
      description: 'La pérdida de interés en la comida es común en la tercera edad, pero puede llevar a desnutrición y pérdida de energía vital.'
    },
    {
      icon: <TrendingDown className="w-8 h-8" />,
      title: '¿Notas que cada vez tienen menos vitalidad?',
      description: 'La fatiga, problemas de memoria y falta de energía no son "solo parte de envejecer". Una buena nutrición puede cambiar esto.'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: '¿No sabes qué cocinar para su dieta especial?',
      description: 'Entre restricciones médicas, gustos personales y necesidades nutricionales, planear comidas se vuelve un desafío diario.'
    },
    {
      icon: <AlertCircle className="w-8 h-8" />,
      title: '¿Te sientes impotente ante su deterioro?',
      description: 'Ver cómo nuestros seres queridos pierden calidad de vida duele. Pero hay algo que SÍ puedes hacer: la nutrición correcta hace la diferencia.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Si alguna vez has sentido esto,
              <br />
              <span className="text-primary-600">no estás solo...</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Miles de familias enfrentan estos desafíos cada día. La buena noticia es que{' '}
              <strong className="text-primary-700">hay una solución simple y efectiva</strong>.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-primary-600 mb-4">
                  {problem.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {problem.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {problem.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Ebook Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex justify-center"
          >
            <div className="max-w-md">
              <img
                src="/img/ebook-portada.png"
                alt="Portada del Ebook"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Transition to solution */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center bg-gradient-to-r from-primary-600 to-warm-600 rounded-2xl p-10 text-white"
          >
            <h3 className="text-2xl md:text-4xl font-bold mb-4">
              La solución está en algo tan simple como una buena sopa
            </h3>
            <p className="text-lg md:text-xl opacity-90">
              Fácil de digerir, llena de nutrientes, reconfortante y deliciosa.
              <br />
              <strong>Descubre cómo transformar cada comida en un impulso de vitalidad.</strong>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

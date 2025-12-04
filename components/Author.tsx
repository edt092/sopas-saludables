'use client';

import { motion } from 'framer-motion';
import { Award, BookOpen, Heart, Users } from 'lucide-react';

export default function Author() {
  const credentials = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      text: 'Experto en Nutrición Geriátrica'
    },
    {
      icon: <Users className="w-6 h-6" />,
      text: '+500 Familias Asesoradas'
    },
    {
      icon: <Award className="w-6 h-6" />,
      text: '15+ Años de Experiencia'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      text: 'Resultados Comprobados'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-warm-50 to-primary-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Conoce a tu guía nutricional
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/img/profe-milton.png"
                  alt="Milton Hurtado - Especialista en Nutrición"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="text-4xl font-bold text-primary-600">500+</div>
                <div className="text-sm text-gray-600">Familias felices</div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Milton Hurtado
              </h3>
              <p className="text-xl text-primary-600 font-semibold mb-6">
                Especialista en Nutrición para Adultos Mayores
              </p>

              <div className="space-y-4 mb-8">
                <p className="text-gray-700 leading-relaxed">
                  Durante más de 15 años, he trabajado de cerca con familias y adultos mayores,
                  y he visto cómo <strong>la nutrición correcta puede transformar vidas</strong>.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Diseñé este recetario después de escuchar una y otra vez las mismas preocupaciones:
                  "No sé qué cocinar", "No tiene apetito", "Necesita algo fácil de digerir pero nutritivo".
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong className="text-primary-700">Mi misión es simple:</strong> que cada familia
                  pueda compartir más tiempo de calidad con sus mayores, viéndolos disfrutar de comidas
                  deliciosas que además les devuelven energía y vitalidad.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {credentials.map((credential, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-md"
                  >
                    <div className="text-primary-600">
                      {credential.icon}
                    </div>
                    <span className="text-sm font-semibold text-gray-700">
                      {credential.text}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-lg border-l-4 border-primary-600"
          >
            <p className="text-xl md:text-2xl text-gray-700 italic mb-4">
              "No se trata solo de agregar años a la vida, sino de agregar vida a los años.
              Cada receta de este libro está pensada para que nuestros abuelos disfruten,
              se nutran y florezcan."
            </p>
            <p className="text-lg font-semibold text-primary-600">
              — Milton Hurtado
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

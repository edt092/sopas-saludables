'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Gift, Sparkles, Users } from 'lucide-react';

export default function Bonuses() {
  const bonusesForAll = [
    {
      title: 'Las 10 Claves para una Nutrición sin Errores',
      description: 'Evita los errores más comunes que cometen las familias al alimentar a sus adultos mayores.',
      value: '$15.00',
      items: [
        'Mitos nutricionales desmentidos',
        'Lista de alimentos prohibidos y permitidos',
        'Guía de hidratación correcta'
      ]
    },
    {
      title: 'Come con Ganas: Guía para Revivir el Apetito',
      description: 'Técnicas probadas para despertar el interés por la comida en adultos mayores sin apetito.',
      value: '$12.00',
      items: [
        'Estrategias de presentación de platillos',
        'Horarios óptimos de comidas',
        'Suplementación natural cuando es necesaria'
      ]
    }
  ];

  const weeklyBonus = [
    {
      title: 'Los Pilares de la Vitalidad: Más Allá de la Comida',
      description: 'Un enfoque integral sobre nutrición, ejercicio ligero y bienestar emocional.',
      value: '$18.00',
      items: [
        'Principios básicos de nutrición geriátrica',
        'Plantilla imprimible para organizar comidas',
        'Rutinas de movimiento suave'
      ]
    }
  ];

  const immediateBonus = [
    {
      title: 'Acceso Exclusivo a la Comunidad de Nutrición',
      description: 'Únete a un grupo privado donde compartir experiencias, recetas adicionales y apoyo mutuo.',
      value: '$97/año',
      features: [
        'Acceso por 1 año completo',
        'Contenido adicional mensual',
        'Sesiones de preguntas y respuestas',
        'Recetas bonus cada mes'
      ]
    },
    {
      title: '25% de Descuento en Futuros Productos',
      description: 'Descuento permanente en todos los productos de la colección de nutrición.',
      value: 'Invaluable',
      features: [
        'Aplicable a todos los ebooks futuros',
        'Sin fecha de expiración',
        'Transferible a familiares'
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 via-warm-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full mb-6">
              <Gift className="w-5 h-5" />
              <span className="font-semibold">Bonos Exclusivos Incluidos</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Llévate mucho más que un recetario
            </h2>
            <p className="text-xl text-gray-600">
              Cada bono ha sido diseñado para multiplicar tus resultados
            </p>
          </motion.div>

          {/* Bonos para todos */}
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <Sparkles className="w-8 h-8 text-primary-600" />
              <h3 className="text-2xl font-bold text-gray-900">
                Bonos incluidos para todos
              </h3>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {bonusesForAll.map((bonus, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg relative overflow-hidden"
                >
                  <div className="absolute top-4 right-4 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-bold">
                    Valor: {bonus.value}
                  </div>
                  {index === 0 && (
                    <div className="mb-6">
                      <img
                        src="/img/10-claves-ebook.jpg"
                        alt="Las 10 Claves para una Nutrición sin Errores"
                        className="w-full h-48 object-cover rounded-xl"
                      />
                    </div>
                  )}
                  {index === 1 && (
                    <div className="mb-6">
                      <img
                        src="/img/come-con-ganas-ebook.jpg"
                        alt="Come con Ganas: Guía para Revivir el Apetito"
                        className="w-full h-48 object-cover rounded-xl"
                      />
                    </div>
                  )}
                  <h4 className="text-xl font-bold text-gray-900 mb-3 pr-24">
                    {bonus.title}
                  </h4>
                  <p className="text-gray-600 mb-4">
                    {bonus.description}
                  </p>
                  <ul className="space-y-2">
                    {bonus.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bono semanal */}
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-warm-600 to-primary-600 rounded-2xl p-2 mb-6"
            >
              <div className="bg-white rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">🎁</div>
                  <div>
                    <p className="text-sm font-semibold text-primary-600">BONO ESPECIAL</p>
                    <h3 className="text-xl font-bold text-gray-900">
                      Solo disponible esta semana
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>

            {weeklyBonus.map((bonus, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-warm-100 to-primary-100 rounded-2xl p-8 shadow-lg border-2 border-primary-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-2xl font-bold text-gray-900 flex-1">
                    {bonus.title}
                  </h4>
                  <div className="bg-white px-4 py-2 rounded-full text-primary-700 font-bold ml-4">
                    Valor: {bonus.value}
                  </div>
                </div>
                <div className="mb-6">
                  <img
                    src="/img/los-pilares.jpg"
                    alt="Los Pilares de la Vitalidad: Más Allá de la Comida"
                    className="w-full h-48 object-cover rounded-xl"
                  />
                </div>
                <p className="text-gray-700 mb-4 text-lg">
                  {bonus.description}
                </p>
                <ul className="space-y-2">
                  {bonus.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-800 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Bonos inmediatos */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-red-600 to-primary-600 rounded-2xl p-2 mb-6"
            >
              <div className="bg-white rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">⚡</div>
                  <div>
                    <p className="text-sm font-semibold text-red-600">ACCIÓN INMEDIATA REQUERIDA</p>
                    <h3 className="text-xl font-bold text-gray-900">
                      Si compras ahora mismo (próximos 24 horas)
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {immediateBonus.map((bonus, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-red-50 to-primary-50 rounded-2xl p-8 shadow-lg border-2 border-red-300"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <Users className="w-8 h-8 text-red-600 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        {bonus.title}
                      </h4>
                      <div className="inline-block bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold mb-3">
                        Valor: {bonus.value}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">
                    {bonus.description}
                  </p>
                  <ul className="space-y-2">
                    {bonus.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-800">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

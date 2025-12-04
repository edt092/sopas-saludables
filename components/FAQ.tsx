'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: '¿Las recetas son adecuadas para personas con condiciones médicas específicas?',
      answer: 'Sí, las recetas están diseñadas pensando en las necesidades nutricionales de adultos mayores y son adaptables. Incluyen información nutricional completa para que puedas consultarlo con el médico de tu familiar. Muchas recetas son naturalmente bajas en sodio, ricas en fibra y apropiadas para dietas controladas. Sin embargo, siempre recomendamos consultar con el profesional de salud sobre restricciones específicas.'
    },
    {
      question: '¿Qué pasa si mi familiar no tiene apetito?',
      answer: 'Este es uno de los desafíos más comunes y por eso incluimos el bono "Come con Ganas: Guía para Revivir el Apetito". Las sopas por naturaleza son más apetecibles, reconfortantes y fáciles de digerir. Además, incluimos técnicas de presentación y consejos para hacer cada comida más atractiva. Muchas familias reportan que sus abuelos recuperan el interés por la comida en las primeras semanas.'
    },
    {
      question: '¿Cómo recibiré el ebook después de la compra?',
      answer: 'Inmediatamente después de completar tu compra, recibirás un email con el enlace de descarga del ebook en formato PDF. Podrás leerlo en cualquier dispositivo: tablet, computadora, teléfono o imprimirlo si lo prefieres. El acceso es instantáneo y de por vida.'
    },
    {
      question: '¿Las recetas son difíciles de preparar?',
      answer: 'Para nada. Este recetario fue diseñado pensando en que cualquier persona pueda preparar las recetas, incluso sin experiencia en cocina. Cada receta incluye: instrucciones paso a paso muy claras, tiempo de preparación (la mayoría toma menos de 40 minutos), nivel de dificultad claramente marcado, y consejos prácticos para simplificar el proceso. Muchos de nuestros usuarios reportan que pueden cocinar junto con sus abuelos.'
    },
    {
      question: '¿Los ingredientes son costosos o difíciles de conseguir?',
      answer: 'No, todo lo contrario. Hemos diseñado las recetas usando ingredientes que puedes encontrar en cualquier supermercado o mercado local. La mayoría son productos básicos y económicos: verduras de temporada, legumbres, pollo, pescado, etc. Parte de nuestra filosofía es que la buena nutrición debe ser accesible para todas las familias.'
    },
    {
      question: '¿Realmente funciona la garantía de devolución?',
      answer: 'Absolutamente. Tienes 7 días completos para probar el recetario. Si por cualquier motivo decides que no es para ti, simplemente envías un email a soporte y recibes el 100% de tu dinero de vuelta. Sin preguntas incómodas, sin complicaciones. Procesamos todas las devoluciones en menos de 24 horas.'
    },
    {
      question: '¿Cuánto tiempo toma ver resultados?',
      answer: 'Los beneficios comienzan desde la primera comida: digestión más ligera y sensación de satisfacción. En las primeras 2 semanas, la mayoría de familias reportan mejor apetito y más energía en sus abuelos. Después de un mes, los cambios son muy visibles: mejor ánimo, más vitalidad, mejor sueño. Los beneficios a largo plazo en salud cardiovascular y cognitiva se acumulan con el tiempo.'
    },
    {
      question: '¿Puedo compartir el ebook con mi familia?',
      answer: 'Sí, puedes compartirlo con los miembros de tu familia inmediata para uso personal. Sin embargo, no está permitida la distribución masiva o reventa. El objetivo es que todas las personas involucradas en el cuidado de tu familiar tengan acceso a las recetas.'
    },
    {
      question: '¿Qué incluye exactamente el acceso a la comunidad?',
      answer: 'Con tu compra obtienes acceso por 1 año completo a nuestra comunidad privada exclusiva donde podrás: compartir experiencias con otras familias, recibir recetas bonus mensuales, participar en sesiones de preguntas y respuestas, acceder a contenido educativo adicional sobre nutrición geriátrica, y recibir soporte directo de nuestro equipo.'
    },
    {
      question: '¿Por qué el precio es tan bajo si incluye tanto?',
      answer: 'Esta es una oferta de lanzamiento especial y limitada en el tiempo. Queremos que la mayor cantidad de familias posible tenga acceso a estas herramientas que pueden transformar la calidad de vida de sus abuelos. El precio regular será mucho más alto, pero durante este periodo queremos construir una comunidad fuerte y obtener testimonios. Es nuestra forma de generar impacto real.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Preguntas frecuentes
            </h2>
            <p className="text-xl text-gray-600">
              Todo lo que necesitas saber antes de comenzar
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 md:px-8 py-6 flex items-start justify-between gap-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-gray-900 text-lg flex-1">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-primary-600 flex-shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 md:px-8 pb-6">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Still have questions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 text-center bg-gradient-to-r from-primary-50 to-warm-50 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Aún tienes dudas?
            </h3>
            <p className="text-gray-700 mb-6">
              Recuerda que tienes 7 días de garantía. Pruébalo sin riesgo y comprueba
              los resultados por ti mismo. Tu familia se lo merece.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Carmen R.',
      role: 'Nieta',
      age: '(Abuela de 78 años)',
      content: 'Mi abuelita está más contenta desde que le preparo estas sopas. Se siente con más energía y ¡por fin tiene buen apetito! Antes le costaba terminar su plato, ahora me pide repetir. Es maravilloso verla disfrutar de la comida otra vez.',
      rating: 5,
      highlight: 'Recuperó su apetito en 2 semanas'
    },
    {
      name: 'Luis G.',
      role: 'Hijo',
      age: '(Padre de 82 años)',
      content: 'Este recetario nos ha simplificado la vida en casa. Las recetas son tan fáciles que mi mamá puede ayudarme a prepararlas. Ahora la cocina es nuestra actividad favorita y papá nota la diferencia en su digestión. Ya no tiene esa pesadez después de comer.',
      rating: 5,
      highlight: 'Cocinar juntos fortaleció su vínculo'
    },
    {
      name: 'María F.',
      role: 'Nieta',
      age: '(Abuelo de 75 años)',
      content: 'Al principio, mi abuelo era reacio a probar cosas nuevas, pero estas sopas lo conquistaron. Me encanta ver cómo disfruta cada plato. Su médico notó mejoras en sus análisis de sangre y mejor control de la presión. ¡Gracias por devolverme a mi abuelo lleno de vida!',
      rating: 5,
      highlight: 'Mejoras visibles en análisis médicos'
    },
    {
      name: 'Roberto S.',
      role: 'Cuidador profesional',
      age: '(Varios adultos mayores)',
      content: 'Como cuidador profesional, he probado muchos recetarios. Este es diferente porque realmente está pensado para las necesidades específicas de los adultos mayores. Las porciones son adecuadas, los sabores les encantan y la variedad evita que se aburran.',
      rating: 5,
      highlight: 'El mejor para nutrición geriátrica'
    },
    {
      name: 'Patricia M.',
      role: 'Hija',
      age: '(Madre de 80 años)',
      content: 'Mamá perdió mucho peso después de una hospitalización y estábamos muy preocupados. Con estas sopas nutritivas recuperó 4 kilos en un mes y medio. Se ve radiante, tiene mejor color en la piel y más ánimos. Fue nuestra salvación.',
      rating: 5,
      highlight: 'Recuperó peso saludable'
    },
    {
      name: 'Jorge A.',
      role: 'Esposo',
      age: '(Esposa de 73 años)',
      content: 'Mi esposa tiene diabetes y siempre fue un reto encontrar recetas que fueran saludables y ricas. Estas sopas cumplen ambos requisitos. Su nivel de azúcar está más estable y ella está feliz porque no siente que está en una dieta restrictiva.',
      rating: 5,
      highlight: 'Control de diabetes mejorado'
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
              Historias reales de familias como la tuya
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Más de 500 familias ya están disfrutando de estos beneficios
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all relative"
              >
                {/* Quote icon */}
                <Quote className="w-10 h-10 text-primary-200 absolute top-6 right-6" />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Highlight */}
                <div className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-semibold mb-4 inline-block">
                  {testimonial.highlight}
                </div>

                {/* Content */}
                <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-bold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    {testimonial.role} {testimonial.age}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 grid md:grid-cols-4 gap-6"
          >
            {[
              { number: '500+', label: 'Familias satisfechas' },
              { number: '4.9/5', label: 'Calificación promedio' },
              { number: '95%', label: 'Recomendarían' },
              { number: '30', label: 'Recetas probadas' }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center bg-gradient-to-br from-primary-50 to-warm-50 rounded-2xl p-6"
              >
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-700 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

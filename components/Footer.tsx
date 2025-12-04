'use client';

import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main footer content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="text-3xl">🍲</span>
                Sopas Longevidad
              </h3>
              <p className="text-gray-400">
                Transformando vidas a través de la nutrición consciente para adultos mayores.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4 text-lg">Enlaces Rápidos</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#offer" className="hover:text-primary-400 transition-colors">
                    Ver Oferta
                  </a>
                </li>
                <li>
                  <a href="https://go.hotmart.com/K101972366R?dp=1" className="hover:text-primary-400 transition-colors">
                    Comprar Ahora
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold mb-4 text-lg">Soporte</h4>
              <p className="text-gray-400 mb-2">
                ¿Necesitas ayuda? Contáctanos a través de Hotmart después de tu compra.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-500 mt-4">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Pago 100% seguro por Hotmart</span>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="border-t border-gray-800 pt-8 mb-8">
            <div className="bg-gray-800 rounded-xl p-6 text-sm text-gray-400">
              <p className="mb-3">
                <strong className="text-gray-300">Aviso importante:</strong> Este ebook contiene
                recetas y consejos nutricionales generales para adultos mayores. No reemplaza el
                consejo médico profesional. Siempre consulta con el médico de tu familiar antes
                de realizar cambios significativos en su dieta, especialmente si tiene condiciones
                médicas preexistentes o toma medicamentos.
              </p>
              <p>
                Los resultados individuales pueden variar. Los testimonios presentados son experiencias
                reales de usuarios, pero no garantizan resultados específicos para todos.
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 mb-2">
              © {currentYear} Mega Escuela. Todos los derechos reservados.
            </p>
            <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
              Hecho con <Heart className="w-4 h-4 text-red-500 fill-red-500" /> para las familias
              que valoran la salud de sus mayores
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

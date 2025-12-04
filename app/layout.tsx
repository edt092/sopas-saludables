import './globals.css'
import Analytics from '@/components/Analytics'

export const metadata = {
  title: '30 Recetas de Sopas Saludables - Guía de Longevidad',
  description: 'Descubre 30 recetas de sopas nutritivas que te ayudarán a vivir más y mejor. Guía completa con ingredientes saludables y preparaciones fáciles.',
  verification: {
    google: 'd71ed2c800b05aa9'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

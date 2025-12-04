'use client';

import { ArrowRight, ShoppingCart, Sparkles } from 'lucide-react';

interface CTAButtonProps {
  variant?: 'primary' | 'secondary' | 'urgent';
  size?: 'sm' | 'md' | 'lg';
  icon?: 'arrow' | 'cart' | 'sparkles' | 'none';
  text?: string;
  className?: string;
}

export default function CTAButton({
  variant = 'primary',
  size = 'lg',
  icon = 'arrow',
  text = '¡Quiero mi Ebook Ahora!',
  className = ''
}: CTAButtonProps) {
  const handleClick = () => {
    window.location.href = 'https://go.hotmart.com/K101972366R?dp=1';
  };

  const baseClasses = 'inline-flex items-center justify-center gap-3 font-bold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl active:scale-95 focus:outline-none focus:ring-4 focus:ring-offset-2';

  const variantClasses = {
    primary: 'bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white shadow-xl focus:ring-primary-300',
    secondary: 'bg-gradient-to-r from-warm-500 to-warm-600 hover:from-warm-600 hover:to-warm-700 text-white shadow-xl focus:ring-warm-300',
    urgent: 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-xl animate-pulse-slow focus:ring-red-300'
  };

  const sizeClasses = {
    sm: 'px-6 py-3 text-sm',
    md: 'px-8 py-4 text-base',
    lg: 'px-10 py-5 text-lg md:text-xl'
  };

  const iconComponents = {
    arrow: <ArrowRight className="w-5 h-5" />,
    cart: <ShoppingCart className="w-5 h-5" />,
    sparkles: <Sparkles className="w-5 h-5" />,
    none: null
  };

  return (
    <button
      onClick={handleClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      <span>{text}</span>
      {iconComponents[icon]}
    </button>
  );
}

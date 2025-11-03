import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'default' | 'gradient' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

export function Button({ children, variant = 'default', size = 'md', className = '', onClick }: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all';

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const variantStyles = {
    default: 'bg-gray-800 text-white hover:bg-gray-700',
    gradient: 'bg-gradient-to-r from-orange-600 to-red-600 text-white hover:scale-105 shadow-xl',
    outline: 'bg-transparent border-2 border-orange-500/50 text-white hover:border-orange-500'
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
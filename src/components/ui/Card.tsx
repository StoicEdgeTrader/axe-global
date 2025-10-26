import React from 'react';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'glass';
  className?: string;
}

export function Card({ children, variant = 'default', className = '' }: CardProps) {
  const baseStyles = 'p-6 rounded-lg';
  const variantStyles = {
    default: 'bg-gray-800 border border-gray-700',
    glass: 'bg-gray-900/40 backdrop-blur-lg border border-white/10'
  };

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </div>
  );
}
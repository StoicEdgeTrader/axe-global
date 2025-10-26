import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  gradient?: 'orange' | 'mixed';
  className?: string;
}

export function GradientText({ children, gradient = 'orange', className = '' }: GradientTextProps) {
  const gradients = {
    orange: 'bg-gradient-to-r from-orange-400 to-red-400',
    mixed: 'bg-gradient-to-r from-orange-400 via-red-400 to-amber-400'
  };

  return (
    <span className={`${gradients[gradient]} bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
}
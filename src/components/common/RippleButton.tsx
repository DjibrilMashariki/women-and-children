import React from 'react';
import { useRipple, useLoadingState } from '@/lib/hooks/useInteractions';

interface RippleButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void | Promise<void>;
  variant?: 'primary' | 'secondary' | 'outline';
  disabled?: boolean;
}

export function RippleButton({ 
  children, 
  className = '', 
  onClick,
  variant = 'primary',
  disabled = false 
}: RippleButtonProps) {
  const { ripples, createRipple } = useRipple();
  const { isLoading, success, handleAction } = useLoadingState();

  const baseClasses = "relative overflow-hidden transition-all duration-300 font-semibold rounded-xl";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-primary-600 dark:from-orange-600 to-secondary-600 dark:to-orange-500 text-white hover:from-primary-700 dark:hover:from-orange-500 hover:to-secondary-700 dark:hover:to-orange-400 shadow-lg hover:shadow-xl dark:shadow-lg dark:shadow-orange-500/30 dark:hover:shadow-orange-500/50",
    secondary: "bg-gradient-to-r from-orange-500 dark:from-orange-500 to-orange-600 dark:to-orange-600 text-white dark:text-neutral-900 hover:from-orange-600 dark:hover:from-orange-400 hover:to-orange-700 dark:hover:to-orange-500 shadow-lg hover:shadow-xl dark:shadow-lg",
    outline: "border-2 border-primary-600 dark:border-orange-400 text-primary-600 dark:text-orange-400 hover:bg-primary-50 dark:hover:bg-neutral-800 hover:border-primary-700 dark:hover:border-orange-300"
  };

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || isLoading) return;
    
    createRipple(event);
    
    if (onClick) {
      if (onClick.constructor.name === 'AsyncFunction') {
        await handleAction(onClick as () => Promise<void>);
      } else {
        (onClick as () => void)();
      }
    }
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className} ${
        disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'
      } ${success ? 'bg-green-500 hover:bg-green-600' : ''}`}
      onClick={handleClick}
      disabled={disabled || isLoading}
    >
      {/* Ripple Effect */}
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="absolute bg-white/30 rounded-full animate-ping pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: '100px',
            height: '100px',
          }}
        />
      ))}
      
      {/* Loading State */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/10">
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      
      {/* Success State */}
      {success && (
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-5 h-5 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      )}
      
      {/* Content */}
      <span className={`relative z-10 transition-opacity ${isLoading || success ? 'opacity-0' : 'opacity-100'}`}>
        {children}
      </span>
    </button>
  );
}
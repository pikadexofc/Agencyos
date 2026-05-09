import React from 'react';
import { cn } from '@/src/lib/utils';
import { motion } from 'motion/react';

interface SurfaceCardProps {
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}

export const SurfaceCard = ({ children, className, noPadding = false }: SurfaceCardProps) => (
  <div className={cn(
    "relative bg-zinc-950/40 border border-white/[0.03] backdrop-blur-3xl rounded-2xl overflow-hidden",
    !noPadding && "p-6",
    className
  )}>
    {/* Subtle inner top highlight */}
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent pointer-events-none" />
    {children}
  </div>
);

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ElementType;
  isActive?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const IconButton = ({ icon: Icon, className, isActive = false, children, ...props }: IconButtonProps) => (
  <button 
    className={cn(
      "flex items-center justify-center rounded-xl transition-all duration-300 outline-none",
      isActive 
        ? 'bg-zinc-100 text-black shadow-[0_0_20px_rgba(255,255,255,0.1)]' 
        : 'bg-transparent text-zinc-500 hover:bg-zinc-800/50 hover:text-zinc-200',
      className
    )}
    {...props}
  >
    <Icon size={18} strokeWidth={1.5} />
    {children}
  </button>
);

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: 'default' | 'danger' | 'ai' | 'success';
  className?: string;
  key?: any;
}

export const Badge = ({ children, variant = 'default', className, ...props }: BadgeProps) => {
  const variants = {
    default: 'bg-zinc-800/40 text-zinc-400',
    danger: 'bg-red-500/10 text-red-400 border border-red-500/10',
    ai: 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/10',
    success: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/10',
  };
  return (
    <span 
      className={cn(
        "px-2 py-0.5 rounded-md text-[10px] tracking-wide font-medium flex items-center gap-1.5 backdrop-blur-sm",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};


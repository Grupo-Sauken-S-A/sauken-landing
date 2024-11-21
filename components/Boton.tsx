"use client"

import React, { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-none cursor-pointer',
  {
    variants: {
      variant: {
        primary: 'bg-c3 text-primary-foreground hover:bg-primary/90 clip',
        secondary: 'bg-white text-foreground hover:bg-secondary/80 clip',
        outline: 'clip',
        link: 'text-primary underline-offset-4 hover:underline px-6 py-3',
      },
      size: {
        sm: 'h-9 px-3',
        md: 'h-[40px] px-6 py-2 lg:h-[50px] lg:px-8 lg:py-2',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Boton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Boton.displayName = 'Boton'

export { Boton, buttonVariants }
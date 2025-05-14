'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import type { JSX } from 'react';
import { type HTMLAttributes } from 'react';
import { css } from '../../../styled-system/css';

// 1. Определяем базовые стили через Panda CSS
const pandaBaseStyles = css({
  borderRadius: 'md',
  fontWeight: 'medium',
  transition: 'colors',
  cursor: 'pointer',
  _disabled: {
    opacity: 0.6,
    cursor: 'not-allowed',
  },
});

// 2. Создаем варианты через cva, используя Panda CSS классы
const buttonVariants = cva(pandaBaseStyles, {
  variants: {
    variant: {
      primary: css({ bg: 'blue.500', color: 'white', _hover: { bg: 'blue.600' } }),
      secondary: css({ bg: 'gray.200', color: 'gray.800', _hover: { bg: 'gray.300' } }),
      ghost: css({ bg: 'transparent', border: '1px solid gray', _hover: { bg: 'gray.100' } }),
    },
    size: {
      sm: css({ px: '3', py: '1', fontSize: 'sm' }),
      md: css({ px: '4', py: '2', fontSize: 'base' }),
      lg: css({ px: '6', py: '3', fontSize: 'lg' }),
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

// 3. Типы для пропсов
interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({
  variant,
  size,
  className,
  children,
  disabled,
  onClick,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={buttonVariants({ variant, size, className })}
      disabled={disabled}
      {...props}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

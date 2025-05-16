import React from 'react';
import {
  baseStyles,
  sizeStyles,
  variantStyles,
  ButtonVariant,
  ButtonSize,
} from './button.styles.js';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  ...props
}) => {
  return (
    <button css={[baseStyles, sizeStyles[size], variantStyles[variant]]} {...props}>
      {children}
    </button>
  );
};

export default Button;

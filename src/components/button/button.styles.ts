// button.styles.ts
import { css } from '@emotion/react';

// Типы
export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outlined';
export type ButtonSize = 'xs' | 'md' | 'lg';

// Базовые стили
export const baseStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
  outline: none;
  white-space: nowrap;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    transform: translateY(-1px);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }
`;

// Стили размеров
export const sizeStyles: Record<ButtonSize, ReturnType<typeof css>> = {
  xs: css`
    padding: 4px 8px;
    font-size: 12px;
    height: 24px;
  `,
  md: css`
    padding: 8px 16px;
    font-size: 14px;
    height: 32px;
  `,
  lg: css`
    padding: 12px 24px;
    font-size: 16px;
    height: 40px;
  `,
};

// Стили вариантов
export const variantStyles: Record<ButtonVariant, ReturnType<typeof css>> = {
  primary: css`
    background-color: #3b82f6;
    color: white;
    &:hover:not(:disabled) {
      background-color: #2563eb;
    }
  `,
  secondary: css`
    background-color: #e5e7eb;
    color: #111827;
    &:hover:not(:disabled) {
      background-color: #d1d5db;
    }
  `,
  ghost: css`
    background-color: transparent;
    color: #3b82f6;
    &:hover:not(:disabled) {
      background-color: rgba(59, 130, 246, 0.1);
    }
  `,
  outlined: css`
    background-color: transparent;
    color: #3b82f6;
    border: 1px solid #3b82f6;
    &:hover:not(:disabled) {
      background-color: rgba(59, 130, 246, 0.1);
    }
  `,
};

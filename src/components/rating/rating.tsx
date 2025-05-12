import React, { useState } from 'react';
import { Rating, RatingProps } from '@mui/material';
import Star from '@mui/icons-material/Star';
import StarBorder from '@mui/icons-material/StarBorder';

interface CustomRatingProps extends RatingProps {
  /** Кастомное кол-во звёзд (по умолчанию 5) */
  maxStars?: number;
  /** Показывать подпись с текущим значением */
  showLabel?: boolean;
  /** Цвет активных звёзд */
  activeColor?: string;
  /** Цвет неактивных звёзд */
  inactiveColor?: string;
}

const MuiRating: React.FC<CustomRatingProps> = ({
  maxStars = 5,
  showLabel = false,
  activeColor = '#ffb400',
  inactiveColor = '#ddd',
  defaultValue = 0,
  precision = 1, // разрешает дробные значения (0.5, 1.5 и т.д.)
  size = 'large',
  onChange,
  ...rest
}) => {
  const [value, setValue] = useState<number | null>(defaultValue);

  const handleChange = (event: React.SyntheticEvent<Element, Event>, newValue: number | null) => {
    setValue(newValue);
    onChange?.(event, newValue);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <Rating
        value={value}
        max={maxStars}
        precision={precision}
        size={size}
        onChange={handleChange}
        emptyIcon={<StarBorder fontSize="inherit" style={{ color: inactiveColor }} />}
        icon={<Star fontSize="inherit" style={{ color: activeColor }} />}
        {...rest}
      />
      {showLabel && (
        <span style={{ color: activeColor, fontWeight: 'bold' }}>
          {value !== null ? value.toFixed(precision) : '—'}
        </span>
      )}
    </div>
  );
};

export default MuiRating;

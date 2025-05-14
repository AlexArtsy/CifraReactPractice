import type { JSX } from 'react';
import styles from './card.module.css';

type CardProps = {
  title: string;
  content: string | React.ReactNode;
  Button?: React.ReactNode;
};

export const Card = ({ title, content, Button }: CardProps): JSX.Element => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.content}>{content}</div>
        {Button}
      </div>
    </div>
  );
};

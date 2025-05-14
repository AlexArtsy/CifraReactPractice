'use client';

import { Button } from '@/components/button/button';
import { Card } from '@/components/card/card';
import type { ReactElement } from 'react';

export default function Home(): ReactElement {
  return (
    <main style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1
          style={{
            fontSize: '30px',
            fontWeight: 'bold',
            margin: '0',
            lineHeight: '1.2',
          }}
        >
          Задание 3.1
        </h1>
      </header>
      <section
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          flexWrap: 'wrap',
        }}
      >
        <Card
          title="ЗАГОЛОВОК КАРТОЧКИ 1"
          content="Контент карточки 1"
          Button={
            <Button variant="ghost" onClick={() => alert('Ай - яй! Не балуйся!')}>
              Прозрачная
            </Button>
          }
        />
        <Card
          title="ЗАГОЛОВОК КАРТОЧКИ 2"
          content={
            <>
              <div>Контент карточки 2</div>
              <Button
                variant="primary"
                onClick={() => alert('Обработчики кнопок - платная услуга!')}
              >
                AAAAAAAAa
              </Button>
            </>
          }
          Button={
            <Button variant="ghost" size="lg" onClick={() => alert('Да не тыкай в меня!')}>
              Прозрачная ОГРОМНАЯ
            </Button>
          }
        />
      </section>
    </main>
  );
}

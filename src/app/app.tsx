import Button from '@/components/button/button.js';
import { Card } from '@/components/card/card.js';

export const App = () => {
  return (
    <div className="p-4">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold m-0 leading-tight">Задание 3.2</h1>
      </header>
      <section className="flex justify-center gap-8 flex-wrap">
        <Card
          title="ЗАГОЛОВОК КАРТОЧКИ 1"
          content="Контент карточки 1"
          Button={
            <Button variant="outlined" size="xs" onClick={() => alert('Ай - яй! Не балуйся!')}>
              С рамкой
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
    </div>
  );
};

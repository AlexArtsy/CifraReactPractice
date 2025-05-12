import Calendar from '@/components/calendar/calendar';
import Rating from '@/components/rating/rating';
import Button from '@/components/button/button';
import { Content, TabList } from './types';
import { Modal } from '../modal/modal';

const lists: TabList[] = [
  { value: 'calendar', list: 'Календарь' },
  { value: 'modal', list: 'Модалка' },
  { value: 'rating', list: 'Рэйтинг' },
];

const content: Content[] = [
  {
    value: 'calendar',
    content: <Calendar />,
  },
  {
    value: 'modal',
    content: (
      <Modal
        trigger={<Button type="primary">Открыть модалку</Button>}
        title="Пример модального окна"
      >
        <p className="text-gray-700">Содержимое модалки. Можно вставить что угодно!</p>
      </Modal>
    ),
  },
  {
    value: 'rating',
    content: <Rating />,
  },
];

export { lists, content };

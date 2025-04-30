import Calendar from '@/components/calendar/calendar';
import Rating from '@/components/rating/rating';
import { Content, TabList } from './types';

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
  { value: 'modal', content: 'Модалка' },
  {
    value: 'rating',
    content: <Rating />,
  },
];

export { lists, content };

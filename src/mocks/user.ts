import { User, Post, Gender } from '../types/user';

export const mockUser: User = {
  id: '1',
  avatar: 'https://bit.ly/dan-abramov',
  firstName: 'John',
  lastName: 'Doe',
  middleName: 'Smith',
  gender: 'male',
  phone: '+7 (123) 456-78-90',
  about: 'Frontend developer with 5 years of experience. Love React and TypeScript.',
  status: 'Online',
  isOwner: true,
};

export const mockPosts: Post[] = [
  {
    id: '1',
    author: {
      id: '1',
      name: 'John Doe',
      avatar: 'https://bit.ly/dan-abramov',
    },
    content: 'Just finished building this awesome profile page with Chakra UI!',
    createdAt: '2023-05-15T10:30:00Z',
    comments: [
      {
        id: '1',
        author: {
          id: '2',
          name: 'Jane Smith',
          avatar: 'https://bit.ly/kent-c-dodds',
        },
        content: 'Looks great! Good job!',
        createdAt: '2023-05-15T11:15:00Z',
      },
    ],
  },
  {
    id: '2',
    author: {
      id: '1',
      name: 'John Doe',
      avatar: 'https://bit.ly/dan-abramov',
    },
    content: 'Working on a new project using React and TypeScript. So excited!',
    createdAt: '2023-05-10T14:20:00Z',
    comments: [],
  },
];

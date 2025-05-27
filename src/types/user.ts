export type Gender = 'male' | 'female' | 'other';

export interface User {
  id: string;
  avatar: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  gender: Gender;
  phone: string;
  about: string;
  status: string;
  isOwner: boolean;
}

export interface Post {
  id: string;
  author: {
    id: string;
    name: string;
    avatar: string;
  };
  content: string;
  createdAt: string;
  comments: Comment[];
}

export interface Comment {
  id: string;
  author: {
    id: string;
    name: string;
    avatar: string;
  };
  content: string;
  createdAt: string;
}

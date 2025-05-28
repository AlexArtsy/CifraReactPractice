export type Gender = 'male' | 'female' | 'other';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  email: string;
  phone?: string;
  avatar?: string;
  gender?: string;
  status?: string;
  about?: string;
  role: 'user' | 'admin';
  isOwner?: boolean;
}

export interface Post {
  id: string;
  author: {
    _id: string;
    firstName: string;
    lastName: string;
    avatar?: string;
  };
  averageRating?: number;
  content: string;
  createdAt: string;
  comments: Comment[];
}

export interface Comment {
  id: string;
  author: {
    id: string;
    name: string;
    avatar?: string;
  };
  content: string;
  createdAt: string;
}

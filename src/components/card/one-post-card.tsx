import React, { useCallback, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { z } from 'zod';
import { Input, Spin, Alert } from 'antd';
import Button from '@/components/button/button.js';
import { Post } from '../post/post.js';

// Zod схема для валидации поста
const postSchema = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string(),
  body: z.string(),
});

type PostType = z.infer<typeof postSchema>;

// Функция для получения поста с API
const fetchPost = async (id: number): Promise<PostType> => {
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return postSchema.parse(data);
};

export const OnePostsCard = (): React.JSX.Element => {
  const [inputValue, setInputValue] = useState<string>('');
  const [postId, setPostId] = useState<number | null>(null);

  const {
    data: post,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['post', postId],
    queryFn: () => {
      if (!postId) throw new Error('No post ID provided');
      return fetchPost(postId);
    },
    enabled: !!postId,
    staleTime: 60000,
  });

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }, []);

  const handleClick = useCallback(() => {
    const id = parseInt(inputValue);
    if (!isNaN(id) && id > 0) {
      setPostId(id);
    }
  }, [inputValue]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        handleClick();
      }
    },
    [handleClick],
  );

  return (
    <section className="flex flex-col items-center gap-8">
      <div className="text-center mb-8 w-full max-w-md">
        <h2 className="text-3xl font-bold m-0 leading-tight mb-4">Получить пост по id!</h2>
        <div className="flex gap-2">
          <Input
            value={inputValue}
            placeholder="Введите номер поста"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            type="number"
            min="1"
          />
          <Button onClick={handleClick} disabled={!inputValue}>
            Получить пост
          </Button>
        </div>
      </div>

      {isLoading && <Spin size="large" />}

      {isError && (
        <Alert
          message="Ошибка"
          description={error instanceof Error ? error.message : 'Неизвестная ошибка'}
          type="error"
          showIcon
        />
      )}
      {post && <Post {...post} />}
    </section>
  );
};

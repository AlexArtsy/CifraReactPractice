import type { JSX } from 'react';
import Button from '@/components/button/button.js';
import { Post, PostProps } from '@/components/post/post.js';
import { SetStateAction, useCallback, useState, useEffect } from 'react';
import { Pagination } from 'antd';
import { chunk } from 'lodash';

export const AllPostsCard = (): JSX.Element => {
  const [posts, setPosts] = useState<Array<PostProps>>([]);
  const [visiblePosts, setVisiblePosts] = useState<Array<PostProps>>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(3);

  // Обновляем видимые посты при изменении posts, currentPage или pageSize
  useEffect(() => {
    if (posts.length > 0) {
      const chunks = chunk(posts, pageSize);
      setVisiblePosts(chunks[currentPage - 1] || []);
    }
  }, [posts, currentPage, pageSize]);

  const handleClick = useCallback(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data);
        setCurrentPage(1); // Сбрасываем на первую страницу при новой загрузке
      })
      .catch((error) => {
        throw new Error('There was a problem with the fetch operation:', error);
      });
  }, []);

  const handlePageChange = (page: SetStateAction<number>, size: SetStateAction<number>) => {
    setCurrentPage(page);
    setPageSize(size);
  };

  return (
    <section className="flex flex-col items-center gap-8">
      <div className="text-center mb-8 w-full">
        <h2 className="text-3xl font-bold m-0 leading-tight">Получение всех постов</h2>
        <Button onClick={handleClick}>Получить все посты!</Button>
      </div>
      <div className="flex justify-center gap-8 flex-wrap">
        {visiblePosts.map((postProps) => (
          <Post key={postProps.id} {...postProps} />
        ))}
      </div>
      {posts.length > 0 && (
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={posts.length}
          onChange={handlePageChange}
        />
      )}
    </section>
  );
};

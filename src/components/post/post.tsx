import React, { useState } from 'react';
import type { JSX } from 'react';
import axios from 'axios';
import { Spin, Alert, List, message } from 'antd';
import Button from '../button/button.js';

export type PostProps = {
  userId: number;
  id: number;
  title: string;
  body: string | React.ReactNode;
};

type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export const Post = ({ id, title, body }: PostProps): JSX.Element => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showComments, setShowComments] = useState(false);
  const [api, contextHolder] = message.useMessage();

  const fetchComments = async () => {
    try {
      setLoading(true);
      setError(null);
      const { data } = await axios.get<Comment[]>(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
      );
      setComments(data);
      setShowComments(true);
    } catch (err) {
      setError('Failed to fetch comments');
      api.error({
        content: 'Error fetching comments',
        duration: 3,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleRefetch = () => {
    setComments([]);
    fetchComments();
  };

  const toggleComments = () => {
    if (showComments) {
      setShowComments(false);
    } else {
      fetchComments();
    }
  };

  return (
    <div className="w-[30%] min-w-[250px] mx-auto p-6 bg-white rounded-lg shadow-md flex flex-col items-center text-center gap-4 border border-gray-100">
      {contextHolder}

      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <div className="text-gray-600 flex flex-col items-center">{body}</div>

      <div className="flex gap-2 mt-4">
        <Button onClick={toggleComments} variant={showComments ? 'outlined' : 'primary'}>
          {showComments ? 'Hide Comments' : 'Show Comments'}
        </Button>

        {showComments && <Button onClick={handleRefetch}>Refresh</Button>}
      </div>

      {loading && <Spin className="mt-4" />}

      {error && (
        <Alert message="Error" description={error} type="error" showIcon className="mt-4" />
      )}

      {showComments && comments.length > 0 && (
        <div className="w-full mt-4">
          <h4 className="text-lg font-medium mb-2">Comments:</h4>
          <List
            dataSource={comments}
            renderItem={(comment) => (
              <List.Item key={comment.id} className="text-left">
                <div className="w-full">
                  <p className="font-medium">{comment.name}</p>
                  <p className="text-gray-600 text-sm">{comment.email}</p>
                  <p className="mt-1">{comment.body}</p>
                </div>
              </List.Item>
            )}
          />
        </div>
      )}
    </div>
  );
};

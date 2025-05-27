import { useState } from 'react';
import { UserProfile } from '../components/user-profile/user-profile';
import { mockUser, mockPosts } from '../mocks/user';

export const UserProfilePage = () => {
  const [user, setUser] = useState(mockUser);
  const [posts, setPosts] = useState(mockPosts);

  const handleUserUpdate = (updatedUser: typeof mockUser) => {
    setUser(updatedUser);
  };

  const handlePostCreate = (content: string) => {
    const newPost = {
      id: `post-${Date.now()}`,
      author: {
        id: user.id,
        name: `${user.firstName} ${user.lastName}`,
        avatar: user.avatar,
      },
      content,
      createdAt: new Date().toISOString(),
      comments: [],
    };
    setPosts([newPost, ...posts]);
  };

  const handleCommentCreate = (postId: string, content: string) => {
    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          const newComment = {
            id: `comment-${Date.now()}`,
            author: {
              id: '2', // Mock comment author
              name: 'Jane Smith',
              avatar: 'https://bit.ly/kent-c-dodds',
            },
            content,
            createdAt: new Date().toISOString(),
          };
          return {
            ...post,
            comments: [...post.comments, newComment],
          };
        }
        return post;
      }),
    );
  };

  return (
    <UserProfile
      user={user}
      posts={posts}
      onUserUpdate={handleUserUpdate}
      onPostCreate={handlePostCreate}
      onCommentCreate={handleCommentCreate}
    />
  );
};

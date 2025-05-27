import { Box } from '@chakra-ui/react';
import { User, Post } from '../../types/user';
import { UserProfileCard } from './user-profile-card';
import { PostsWall } from './post-wall';

interface UserProfileProps {
  user: User;
  posts: Post[];
  onUserUpdate: (updatedUser: User) => void;
  onPostCreate: (content: string) => void;
  onCommentCreate: (postId: string, content: string) => void;
}

export const UserProfile = ({
  user,
  posts,
  onUserUpdate,
  onPostCreate,
  onCommentCreate,
}: UserProfileProps) => {
  return (
    <Box maxW="800px" mx="auto" p={4}>
      <Box display="flex" flexDirection="column" gap={8} width="100%">
        <UserProfileCard user={user} onUserUpdate={onUserUpdate} />
        <PostsWall
          posts={posts}
          isOwner={user.isOwner}
          onPostCreate={onPostCreate}
          onCommentCreate={onCommentCreate}
        />
      </Box>
    </Box>
  );
};

import { VStack, Box, Heading } from '@chakra-ui/react';
import { Post } from '../../types/user';
import { PostCard } from './post-card';

interface PostsWallProps {
  posts: Post[];
  isOwner: boolean;
  onPostCreate: (content: string) => void;
  onCommentCreate: (postId: string, content: string) => void;
}

export const PostsWall = ({ posts, isOwner, onPostCreate, onCommentCreate }: PostsWallProps) => {
  return (
    <Box>
      <Heading as="h3" size="md" mb={4}>
        Posts
      </Heading>
      <VStack spacing={6} align="stretch">
        {isOwner && <PostCard isOwner={isOwner} onPostCreate={onPostCreate} mode="create" />}
        {posts.map((post) => (
          <PostCard key={post.id} post={post} isOwner={isOwner} onCommentCreate={onCommentCreate} />
        ))}
      </VStack>
    </Box>
  );
};

import { VStack, Box, Heading } from '@chakra-ui/react';
import { PostCard } from './post-card';
import { useGetUserPostsByIdQuery } from '../../store/api';
import { Post, User } from '@/types/user';

interface PostsWallProps {
  user: User;
  isOwner: boolean;
}

export const PostsWall = ({ isOwner, user }: PostsWallProps) => {
  const { data: postsData = [] } = useGetUserPostsByIdQuery(user.id ?? user._id);

  return (
    <Box>
      <Heading as="h3" size="md" mb={4}>
        Посты {user.firstName}
      </Heading>
      <VStack align="stretch">
        {postsData.map((post: Post) => (
          <PostCard key={post.id} post={post} isOwner={isOwner} onCommentCreate={() => {}} />
        ))}
      </VStack>
    </Box>
  );
};

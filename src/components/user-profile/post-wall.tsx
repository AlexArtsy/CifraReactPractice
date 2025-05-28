import { VStack, Box, Heading, Skeleton, Alert } from '@chakra-ui/react';
import { PostCard } from './post-card';
import { useGetUserPostsByIdQuery } from '../../store/api';
import { User } from '@/types/user';

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
        {/* {isOwner && <PostCard isOwner={isOwner} onPostCreate={onPostCreate} mode="create" />} */}
        {postsData.map((post) => (
          <PostCard key={post.id} post={post} isOwner={isOwner} />
        ))}
      </VStack>
    </Box>
  );
};

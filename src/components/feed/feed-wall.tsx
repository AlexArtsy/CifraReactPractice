import { VStack, Box, Heading, Skeleton } from '@chakra-ui/react';
import { useGetPostsQuery } from '../../store/api';
import { FeedPost } from './feed-post';

export const FeedWall = () => {
  const { data: posts = [], isLoading } = useGetPostsQuery(undefined);

  if (isLoading) {
    return (
      <VStack>
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} width="100%" height="200px" borderRadius="md" />
        ))}
      </VStack>
    );
  }

  return (
    <Box>
      <Heading as="h3" size="md" mb={4}>
        Лента новостей
      </Heading>
      <VStack align="stretch">
        {posts && posts.map((post) => <FeedPost key={post.id} post={post} />)}
      </VStack>
    </Box>
  );
};

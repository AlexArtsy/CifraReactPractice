import { VStack, Box, Heading, Skeleton, Alert } from '@chakra-ui/react';
import { Post } from '../../types/user';
import { useGetPostsQuery } from '../../store/api';
import { FeedPost } from './feed-post';

interface PostsWallProps {
  posts: Post[];
  isOwner: boolean;
  onPostCreate?: (content: string) => void;
  onCommentCreate: (postId: string, content: string) => void;
}

export const FeedWall = () => {
  const { data: posts = [], isLoading, isError, refetch } = useGetPostsQuery(undefined);

  if (isLoading) {
    return (
      <VStack>
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} width="100%" height="200px" borderRadius="md" />
        ))}
      </VStack>
    );
  }

  // if (isError) {
  //   return (
  //     // <Alert status="error" mb={4}>
  //     //   {/* <AlertIcon /> */}
  //     //   Failed to load posts.{' '}
  //     //   <Button variant="link" onClick={refetch}>
  //     //     Retry
  //     //   </Button>
  //     // </Alert>
  //   );
  // }

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

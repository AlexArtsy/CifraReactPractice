import { VStack, Box, Heading, Skeleton, Alert } from '@chakra-ui/react';
import { PostCard } from './post-card';
import { useGetUserPostsByIdQuery } from '../../store/api';
import { User } from '@/types/user';

interface PostsWallProps {
  user: User;
  isOwner: boolean;
}

export const PostsWall = ({ isOwner, user }: PostsWallProps) => {
  const { data: postsData = [], refetch: refetchPosts } = useGetUserPostsByIdQuery(
    user.id ?? user._id,
  );
  //const { data: posts = [], isLoading, isError, refetch } = useGetPostsQuery();

  // if (isLoading) {
  //   return (
  //     <VStack>
  //       {[...Array(3)].map((_, i) => (
  //         <Skeleton key={i} width="100%" height="200px" borderRadius="md" />
  //       ))}
  //     </VStack>
  //   );
  // }

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

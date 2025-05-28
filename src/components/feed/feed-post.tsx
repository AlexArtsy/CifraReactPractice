import { Box, Flex, Text, Heading, Button } from '@chakra-ui/react';
import { Post } from '../../types/user';
import { Avatar } from '../ui/avatar';
import { useNavigate } from 'react-router-dom';
import { Rating } from '../ui/rating';

interface FeedPostProps {
  post: Post;
}

export const FeedPost = (props: FeedPostProps) => {
  const { post } = props;
  const { author, averageRating } = post;

  const navigate = useNavigate();
  const handleOnClick = () => {
    if (author._id) {
      navigate(`/profile/${author._id}`);
    }
  };

  return (
    <Box p={4} rounded="lg" boxShadow="md" bg="white">
      <Flex gap={3} mb={4}>
        <Avatar src={author.avatar} />
        <Box flex={1}>
          <Heading as="h4" size="sm">
            <Button
              onClick={handleOnClick}
              variant="ghost"
            >{`${author.firstName} ${author.lastName}`}</Button>
            <Rating defaultValue={averageRating} size="sm" />
          </Heading>
          <Text fontSize="sm" color="gray.500">
            {new Date(post.createdAt).toLocaleString()}
          </Text>
        </Box>
      </Flex>

      <Text mb={4}>{post.content}</Text>

      {post.comments && post.comments.length > 0 && (
        <Box pl={8} borderLeft="2px" borderColor="gray.100">
          <Box display="flex" flexDirection="column" gap={8} width="100%">
            {post.comments.map((comment) => (
              <Flex key={comment.id} gap={3}>
                <Avatar src={comment.author.avatar} size="sm" />
                <Box>
                  <Heading as="h5" size="xs">
                    {comment.author.name}
                  </Heading>
                  <Text fontSize="sm">{comment.content}</Text>
                  <Text fontSize="xs" color="gray.500">
                    {new Date(comment.createdAt).toLocaleString()}
                  </Text>
                </Box>
              </Flex>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};

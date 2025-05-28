import {
  Box,
  Flex,
  Text,
  Heading,
  Textarea,
  Button,
  HStack,
  useDisclosure,
  IconButton,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { Post } from '../../types/user';
import { Avatar } from '../ui/avatar';
import { useDeletePostMutation } from '../../store/api';
import { Rating } from '../ui/rating';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';

interface PostCardBaseProps {
  isOwner: boolean;
  onCommentCreate?: () => void;
  onPostCreate?: () => void;
}

interface PostCardCreateProps extends PostCardBaseProps {
  mode: 'create';
  post?: never;
  onCommentCreate?: never;
}

interface PostCardViewProps extends PostCardBaseProps {
  mode?: 'view';
  post: Post;
  onCommentCreate: () => void;
}

type PostCardProps = PostCardCreateProps | PostCardViewProps;

interface CommentFormData {
  content: string;
}

export const PostCard = (props: PostCardProps) => {
  const { register, handleSubmit } = useForm<CommentFormData>();
  const { open, onToggle } = useDisclosure();

  if (props.mode === 'create') {
    return (
      <Box p={4} rounded="lg" boxShadow="md" bg="white">
        {!open ? (
          <Button onClick={onToggle} width="full">
            Create new post
          </Button>
        ) : (
          <Box as="form">
            <Textarea
              {...register('content', { required: true })}
              placeholder="What's on your mind?"
              mb={2}
            />
            <HStack>
              <Button type="submit" colorScheme="blue">
                Post
              </Button>
              <Button onClick={onToggle}>Cancel</Button>
            </HStack>
          </Box>
        )}
      </Box>
    );
  }

  const { post, isOwner } = props;
  const { author, averageRating } = post;

  return (
    <Box p={4} rounded="lg" boxShadow="md" bg="white">
      <Flex gap={3} mb={4}>
        <Avatar src={author.avatar} />
        <Box flex={1}>
          <Heading as="h4" size="sm">
            {`${author.firstName} ${author.lastName}`}
            <Rating defaultValue={averageRating} size="sm" />
          </Heading>
          <Text fontSize="sm" color="gray.500">
            {new Date(post.createdAt).toLocaleString()}
          </Text>
        </Box>
        {isOwner && (
          <HStack>
            <IconButton aria-label="Edit post" size="sm" variant="ghost">
              <EditIcon />
            </IconButton>
            <IconButton aria-label="Delete post" size="sm" variant="ghost" colorScheme="red">
              <DeleteIcon />
            </IconButton>
          </HStack>
        )}
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

      <Box mt={4} as="form">
        <Textarea
          {...register('content', { required: true })}
          placeholder="Write a comment..."
          size="sm"
          mb={2}
        />
        <Button type="submit" size="sm" colorScheme="blue">
          Comment
        </Button>
      </Box>
    </Box>
  );
};

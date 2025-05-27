import {
  Box,
  Flex,
  Text,
  Heading,
  Badge,
  Stack,
  Textarea,
  Button,
  HStack,
  useDisclosure,
  IconButton,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { Post, Comment } from '../../types/user';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import { Avatar } from '../ui/avatar';

interface PostCardBaseProps {
  isOwner: boolean;
  onCommentCreate?: (content: string) => void;
  onPostCreate?: (content: string) => void;
}

interface PostCardCreateProps extends PostCardBaseProps {
  mode: 'create';
  post?: never;
  onCommentCreate?: never;
}

interface PostCardViewProps extends PostCardBaseProps {
  mode?: 'view';
  post: Post;
  onCommentCreate: (content: string) => void;
}

type PostCardProps = PostCardCreateProps | PostCardViewProps;

interface CommentFormData {
  content: string;
}

export const PostCard = (props: PostCardProps) => {
  const { register, handleSubmit, reset } = useForm<CommentFormData>();
  const { open, onToggle } = useDisclosure();

  const onSubmit = (data: CommentFormData) => {
    if (props.mode === 'create') {
      props.onPostCreate?.(data.content);
    } else {
      props.onCommentCreate(data.content);
    }
    reset();
    if (props.mode === 'create') {
      onToggle();
    }
  };

  if (props.mode === 'create') {
    return (
      <Box p={4} rounded="lg" boxShadow="md" bg="white">
        {!open ? (
          <Button onClick={onToggle} width="full">
            Create new post
          </Button>
        ) : (
          <Box as="form" onSubmit={handleSubmit(onSubmit)}>
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

  return (
    <Box p={4} rounded="lg" boxShadow="md" bg="white">
      <Flex gap={3} mb={4}>
        <Avatar src={post.author.avatar} />
        <Box flex={1}>
          <Heading as="h4" size="sm">
            {post.author.name}
          </Heading>
          <Text fontSize="sm" color="gray.500">
            {new Date(post.createdAt).toLocaleString()}
          </Text>
        </Box>
        {isOwner && (
          <HStack>
            <IconButton aria-label="Edit post" icon={<EditIcon />} size="sm" variant="ghost" />
            <IconButton
              aria-label="Delete post"
              icon={<DeleteIcon />}
              size="sm"
              variant="ghost"
              colorScheme="red"
            />
          </HStack>
        )}
      </Flex>

      <Text mb={4}>{post.content}</Text>

      {post.comments.length > 0 && (
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

      <Box mt={4} as="form" onSubmit={handleSubmit(onSubmit)}>
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

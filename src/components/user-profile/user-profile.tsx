import { Box } from '@chakra-ui/react';
import { User } from '../../types/user';
import { UserProfileCard } from './user-profile-card';
import { PostsWall } from './post-wall';

interface UserProfileProps {
  user: User;
  isOwner: boolean;
  onUserUpdate: () => void;
}

export const UserProfile = ({ user, isOwner, onUserUpdate }: UserProfileProps) => {
  return (
    <Box maxW="800px" mx="auto" p={4}>
      <Box display="flex" flexDirection="column" gap={8} width="100%">
        <UserProfileCard user={user} isOwner onUserUpdate={onUserUpdate} />
        <PostsWall user={user} isOwner={isOwner} />
      </Box>
    </Box>
  );
};

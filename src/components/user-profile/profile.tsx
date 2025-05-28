import { Box } from '@chakra-ui/react';
import { User } from '../../types/user';
import { UserProfileCard } from './user-profile-card';
import { PostsWall } from './post-wall';

interface ProfileProps {
  user: User;
}

export const Profile = ({ user }: ProfileProps) => {
  return (
    <Box maxW="800px" mx="auto" p={4}>
      <Box display="flex" flexDirection="column" gap={8} width="100%">
        <UserProfileCard user={user} isOwner={false} onUserUpdate={() => {}} />
        <PostsWall user={user} isOwner={false} />
      </Box>
    </Box>
  );
};

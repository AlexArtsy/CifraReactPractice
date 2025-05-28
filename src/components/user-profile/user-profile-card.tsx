import {
  Box,
  Flex,
  Text,
  Heading,
  Badge,
  Stack,
  IconButton,
  useDisclosure,
  Input,
  Textarea,
  Select,
  Button,
} from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import { useForm } from 'react-hook-form';
import { User } from '../../types/user';
import { Avatar } from '../ui/avatar';
import { EditModal } from './edit-modal';

interface UserProfileCardProps {
  user: User;
  isOwner: boolean;
  onUserUpdate: (updatedUser: Partial<User>) => void;
}

export const UserProfileCard = ({ user, isOwner, onUserUpdate }: UserProfileCardProps) => {
  const { open, onOpen, onClose } = useDisclosure();

  const handleEditClick = () => {
    onOpen();
  };

  return (
    <Box p={6} rounded="lg" boxShadow="md" bg="white" position="relative">
      {isOwner && (
        <IconButton
          aria-label="Edit profile"
          position="absolute"
          top={4}
          right={4}
          onClick={handleEditClick}
        >
          <EditIcon />
        </IconButton>
      )}

      <Flex direction={['column', 'row']} gap={6}>
        <Flex direction="column" align="center">
          <Avatar size="xl" src={user.avatar} mb={4} />
          <Badge colorScheme={user.role === 'admin' ? 'purple' : 'green'}>{user.role}</Badge>
        </Flex>

        <Box flex={1}>
          <Heading as="h2" size="lg" mb={2}>
            {user.lastName} {user.firstName} {user.middleName}
          </Heading>

          <Stack mt={4}>
            <Text key="Gender">
              <strong>Gender:</strong> {user.gender}
            </Text>
            <Text key="Phone">
              <strong>Phone:</strong> {user.phone}
            </Text>
            <Text key="About">
              <strong>About:</strong> {user.about}
            </Text>
          </Stack>
        </Box>
      </Flex>
      {open && (
        <EditModal isOpen={open} onClose={onClose} user={user} onUserUpdate={onUserUpdate} />
      )}
    </Box>
  );
};

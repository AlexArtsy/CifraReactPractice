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
import { User, Gender } from '../../types/user';
import { Avatar } from '../ui/avatar';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from '@chakra-ui/modal';
import { FormControl, FormLabel } from '@chakra-ui/form-control';

interface UserProfileCardProps {
  user: User;
  onUserUpdate: (updatedUser: User) => void;
}

export const UserProfileCard = ({ user, onUserUpdate }: UserProfileCardProps) => {
  const { open, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit, reset } = useForm<User>({
    defaultValues: user,
  });

  const onSubmit = (data: User) => {
    onUserUpdate(data);
    onClose();
  };

  const handleEditClick = () => {
    reset(user);
    onOpen();
  };

  return (
    <Box p={6} rounded="lg" boxShadow="md" bg="white" position="relative">
      {user.isOwner && (
        <IconButton
          aria-label="Edit profile"
          icon={<EditIcon />}
          position="absolute"
          top={4}
          right={4}
          onClick={handleEditClick}
        />
      )}

      <Flex direction={['column', 'row']} gap={6}>
        <Flex direction="column" align="center">
          <Avatar size="xl" src={user.avatar} mb={4} />
          <Badge colorScheme="green">{user.status}</Badge>
        </Flex>

        <Box flex={1}>
          <Heading as="h2" size="lg" mb={2}>
            {user.lastName} {user.firstName} {user.middleName}
          </Heading>

          <Stack /*spacing={3}*/ mt={4}>
            <Text>
              <strong>Gender:</strong> {user.gender}
            </Text>
            <Text>
              <strong>Phone:</strong> {user.phone}
            </Text>
            <Text>
              <strong>About:</strong> {user.about}
            </Text>
          </Stack>
        </Box>
      </Flex>

      <Modal isOpen={open} onClose={onClose}>
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader>Edit Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack /*spacing={4}*/>
              <FormControl>
                <FormLabel>Avatar URL</FormLabel>
                <Input {...register('avatar')} />
              </FormControl>

              <FormControl>
                <FormLabel>First Name</FormLabel>
                <Input {...register('firstName')} />
              </FormControl>

              <FormControl>
                <FormLabel>Last Name</FormLabel>
                <Input {...register('lastName')} />
              </FormControl>

              <FormControl>
                <FormLabel>Middle Name</FormLabel>
                <Input {...register('middleName')} />
              </FormControl>

              <FormControl>
                <FormLabel>Gender</FormLabel>
                <Select {...register('gender')}>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel>Phone</FormLabel>
                <Input {...register('phone')} />
              </FormControl>

              <FormControl>
                <FormLabel>Status</FormLabel>
                <Input {...register('status')} />
              </FormControl>

              <FormControl>
                <FormLabel>About</FormLabel>
                <Textarea {...register('about')} rows={4} />
              </FormControl>

              <Button type="submit" colorScheme="blue" mt={4}>
                Save Changes
              </Button>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

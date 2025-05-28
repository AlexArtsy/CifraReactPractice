import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/modal';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Button, Flex, Input, Stack, Textarea } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { User } from '@/types/user';

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: User;
  onUserUpdate: () => void | Promise<void>;
}

export const EditModal = ({ isOpen, onClose, user, onUserUpdate }: EditModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<User>({
    defaultValues: user,
  });

  const onSubmit = async () => {
    await onUserUpdate();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay bg="blackAlpha.600" />
      <ModalContent bg="white" borderRadius="lg" maxW="600px" mx="auto" color="gray.800">
        <ModalHeader borderBottom="1px" borderColor="gray.200">
          Edit Profile
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody py={6} color="gray.800">
          <Stack>
            <FormControl>
              <FormLabel>Avatar URL</FormLabel>
              <Input {...register('avatar')} placeholder="Enter avatar URL" />
            </FormControl>

            <Flex gap={4}>
              <FormControl flex={1}>
                <FormLabel>First Name</FormLabel>
                <Input {...register('firstName')} />
              </FormControl>

              <FormControl flex={1}>
                <FormLabel>Last Name</FormLabel>
                <Input {...register('lastName')} />
              </FormControl>
            </Flex>

            <FormControl>
              <FormLabel>Middle Name</FormLabel>
              <Input {...register('middleName')} />
            </FormControl>

            <FormControl>
              <FormLabel>Phone</FormLabel>
              <Input {...register('phone')} type="tel" />
            </FormControl>

            <FormControl>
              <FormLabel>About</FormLabel>
              <Textarea {...register('about')} rows={4} />
            </FormControl>
          </Stack>
        </ModalBody>
        <ModalFooter borderTop="1px" borderColor="gray.200">
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button
            colorScheme="blue"
            loading={isSubmitting}
            loadingText="Saving..."
            type="submit"
            onClick={handleSubmit(onSubmit)}
          >
            Save Changes
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

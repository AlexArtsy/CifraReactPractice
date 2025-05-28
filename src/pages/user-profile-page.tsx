import { UserProfile } from '../components/user-profile/user-profile';
import { useGetCurrentUserQuery, useUpdateUserMutation } from '../store/api';
import { useAppSelector } from '../store/hooks';
import { selectCurrentUser } from '../store/selectors';
import { User } from '@/types/user';

export const UserProfilePage = () => {
  const currentUser = useAppSelector(selectCurrentUser);
  const { data: userData, refetch: refetchUser } = useGetCurrentUserQuery(undefined);
  const [updateUser] = useUpdateUserMutation();

  const handleUserUpdate = async (updatedUser: Partial<User>) => {
    try {
      if (!currentUser?.id) return;

      await updateUser({
        id: currentUser.id,
        ...updatedUser,
      }).unwrap();

      refetchUser();
    } catch (error) {
      console.error('Failed to update user:', error);
    }
  };

  const user = userData;
  const isOwner = !!currentUser && !!user && currentUser.id === user.id;

  return user && <UserProfile user={user.data} isOwner={isOwner} onUserUpdate={handleUserUpdate} />;
};

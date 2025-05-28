import { UserProfile } from '../components/user-profile/user-profile';
import { useGetCurrentUserQuery } from '../store/api';
import { useAppSelector } from '../store/hooks';
import { selectCurrentUser } from '../store/selectors';

export const UserProfilePage = () => {
  const currentUser = useAppSelector(selectCurrentUser);
  const { data: userData } = useGetCurrentUserQuery(undefined);

  const user = userData;
  const isOwner = !!currentUser && !!user && currentUser.id === user.id;

  return user && <UserProfile user={user.data} isOwner={isOwner} onUserUpdate={() => {}} />;
};

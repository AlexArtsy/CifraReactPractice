import { useParams } from 'react-router-dom';
import { useGetUserByIdQuery } from '../store/api';
import { Profile } from '@/components/user-profile/profile';

type ProfileParams = {
  userId?: string;
};

export const ProfilePage = () => {
  const { userId } = useParams<ProfileParams>();
  const { data: userData } = useGetUserByIdQuery(userId);

  return userData && <Profile user={userData} />;
};

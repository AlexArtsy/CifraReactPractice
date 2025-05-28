// user-profile-page.tsx
import { UserProfile } from '../components/user-profile/user-profile';
import {
  useGetCurrentUserQuery,
  useCreatePostMutation,
  useUpdateUserMutation,
  useCreateCommentMutation,
} from '../store/api';
import { useAppSelector } from '../store/hooks';
import { selectCurrentUser } from '../store/selectors';
import { User } from '@/types/user';

export const UserProfilePage = () => {
  // Получаем текущего пользователя из Redux store
  const currentUser = useAppSelector(selectCurrentUser);

  // API запросы
  const { data: userData, isSuccess, refetch: refetchUser } = useGetCurrentUserQuery(undefined);
  const [createPost] = useCreatePostMutation();
  const [updateUser] = useUpdateUserMutation();
  const [createComment] = useCreateCommentMutation();

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

  // Обработчик создания поста
  // const handlePostCreate = async (content: string) => {
  //   try {
  //     await createPost({ content }).unwrap();
  //     refetchPosts();
  //   } catch (error) {
  //     console.error('Failed to create post:', error);
  //   }
  // };

  // Обработчик создания комментария
  // const handleCommentCreate = async (postId: string, content: string) => {
  //   try {
  //     await createComment({
  //       postId,
  //       content,
  //     }).unwrap();

  //     refetchPosts();
  //   } catch (error) {
  //     console.error('Failed to create comment:', error);
  //   }
  // };

  // Объединяем данные пользователя из локального хранилища и с сервера
  const user = userData; //|| currentUser;

  // Проверяем, является ли текущий пользователь владельцем профиля
  const isOwner = !!currentUser && !!user && currentUser.id === user.id;
  console.log(user);
  return user && <UserProfile user={user.data} isOwner={isOwner} onUserUpdate={handleUserUpdate} />;
};

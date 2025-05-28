import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Input, VStack } from '@chakra-ui/react';
import { FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/form-control';
import { useLoginMutation } from '@/store/api';

interface LoginFormData {
  username: string;
  password: string;
}

export default function Login() {
  const navigate = useNavigate();
  const [login, { isLoading, error }] = useLoginMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginFormData>();

  const onSubmit = async (data: LoginFormData) => {
    try {
      const response = await login(data).unwrap();
      localStorage.setItem('token', response.token);
      localStorage.setItem('user', JSON.stringify(response.user));
      console.log(response);
      navigate('/');
    } catch (err) {
      console.error('Login failed:', err);

      setError('root', {
        type: 'manual',
        message: 'Неверные учетные данные',
      });
    }
  };

  return (
    <Box minH="100vh" display="flex" alignItems="center" justifyContent="center">
      <Box
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        p={8}
        bg="white"
        color="gray.800"
        boxShadow="md"
        borderRadius="md"
        w="md"
      >
        <VStack>
          <FormControl isInvalid={!!errors.username}>
            <FormLabel htmlFor="username">Логин</FormLabel>
            <Input
              id="username"
              placeholder="Введите логин"
              {...register('username', {
                required: 'Обязательное поле',
                minLength: { value: 3, message: 'Минимум 3 символа' },
              })}
            />
            <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.password}>
            <FormLabel htmlFor="password">Пароль</FormLabel>
            <Input
              id="password"
              type="password"
              placeholder="Введите пароль"
              {...register('password', {
                required: 'Обязательное поле',
                minLength: { value: 6, message: 'Минимум 6 символов' },
              })}
            />
            <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
          </FormControl>

          {/* Общая ошибка формы */}
          {errors.root && (
            <Box color="red.500" fontSize="sm" textAlign="center" w="full">
              {errors.root.message}
            </Box>
          )}

          <Button
            type="submit"
            colorScheme="teal"
            w="full"
            loading={isLoading}
            loadingText="Вход..."
          >
            Войти
          </Button>
        </VStack>
      </Box>
    </Box>
  );
}

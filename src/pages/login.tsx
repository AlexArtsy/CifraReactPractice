import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Input, VStack } from '@chakra-ui/react';
import { FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/form-control';

interface LoginProps {
  onLogin: () => void;
}

interface LoginFormData {
  username: string;
  password: string;
}

export default function Login({ onLogin }: LoginProps) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>();

  const onSubmit = (data: LoginFormData) => {
    // Здесь должна быть реальная проверка авторизации
    if (data.username && data.password) {
      onLogin();
      navigate('/');
    }
  };

  return (
    <Box minH="100vh" display="flex" alignItems="center" justifyContent="center">
      <Box
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        p={8}
        bg="white"
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
            <FormErrorMessage>{errors.username && errors.username.message}</FormErrorMessage>
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
            <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
          </FormControl>

          <Button
            type="submit"
            colorScheme="teal"
            w="full"
            loading={isSubmitting}
            loadingText="Вход..."
          >
            Войти
          </Button>
        </VStack>
      </Box>
    </Box>
  );
}

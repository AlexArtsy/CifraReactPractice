import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Input, VStack } from '@chakra-ui/react';
import { FormControl, FormLabel } from '@chakra-ui/form-control';

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь должна быть реальная проверка авторизации
    if (username && password) {
      onLogin();
      navigate('/');
    }
  };

  return (
    <Box minH="100vh" display="flex" alignItems="center" justifyContent="center">
      <Box
        as="form"
        onSubmit={handleSubmit}
        p={8}
        bg="white"
        boxShadow="md"
        borderRadius="md"
        w="md"
      >
        <VStack spacing={4}>
          <FormControl>
            <FormLabel>Логин</FormLabel>
            <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </FormControl>

          <FormControl>
            <FormLabel>Пароль</FormLabel>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </FormControl>

          <Button type="submit" colorScheme="teal" w="full">
            Войти
          </Button>
        </VStack>
      </Box>
    </Box>
  );
}

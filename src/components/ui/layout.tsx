import { Flex, Box, useDisclosure, IconButton, Heading } from '@chakra-ui/react';
import { Outlet, useNavigate } from 'react-router-dom';

interface LayoutProps {
  isAuth: boolean;
  onLogout: () => void;
}

const Layout = ({ isAuth, onLogout }: LayoutProps) => {
  const { open, onToggle } = useDisclosure();
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <Flex minH="100vh" bg="gray.50">
      <Box
        as="aside"
        w={{ base: 'full', md: 60 }}
        bg="teal.600"
        color="white"
        display={{ base: open ? 'block' : 'none', md: 'block' }}
        position={{ base: 'fixed', md: 'static' }}
        h={{ base: 'full', md: 'auto' }}
        zIndex="sticky"
      >
        <Box p={4}>
          <Heading size="md" mb={6}>
            Меню
          </Heading>
          <Flex direction="column" gap={2}>
            <Box p={2} _hover={{ bg: 'teal.500' }} cursor="pointer" onClick={() => navigate('/')}>
              Лента
            </Box>
            <Box
              p={2}
              _hover={{ bg: 'teal.500' }}
              cursor="pointer"
              onClick={() => navigate('/profile')}
            >
              Профиль
            </Box>
          </Flex>
        </Box>
      </Box>

      {/* Основное содержимое */}
      <Box flex={1} ml={{ md: 60 }}>
        {/* Хедер */}
        <Box as="header" bg="white" boxShadow="sm" p={4}>
          <Flex justify="space-between" align="center">
            <IconButton display={{ md: 'none' }} onClick={onToggle} aria-label="Toggle sidebar" />

            <Flex align="center" gap={4}>
              {isAuth && (
                <Box
                  as="button"
                  onClick={handleLogout}
                  color="gray.600"
                  _hover={{ color: 'teal.600' }}
                >
                  Выйти
                </Box>
              )}
            </Flex>
          </Flex>
        </Box>

        {/* Контент страницы */}
        <Box as="main" p={4}>
          <Outlet />
        </Box>
      </Box>
    </Flex>
  );
};

export default Layout;

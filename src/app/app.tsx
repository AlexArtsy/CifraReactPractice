import { AllPostsCard } from '@/components/card/all-posts-card.js';
import { OnePostsCard } from '@/components/card/one-post-card.js';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="p-4">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold m-0 leading-tight">Задание 4.1</h1>
        </header>
        <AllPostsCard />
        <OnePostsCard />
      </div>
    </QueryClientProvider>
  );
};

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Task 3.1',
  description: 'Задане 3.1',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

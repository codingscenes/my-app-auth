import Header from '@/components/header';
import { Inter } from 'next/font/google';
import './globals.css';
import Providers from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Rich Note App',
  description: 'A place to save your notes.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>
          <Header />
          <div className='container mx-auto px-4 max-w-6xl'>{children}</div>
        </Providers>
      </body>
    </html>
  );
}

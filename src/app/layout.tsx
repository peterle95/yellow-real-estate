import './globals.css';
import { Inter, Playfair_Display } from 'next/font/google';
import { Header } from '@/components/common/Header/Header';
import { Footer } from '@/components/common/Footer/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata = {
  title: 'Yellow Estate - Find Your Dream Home',
  description: 'Discover your perfect home with Yellow Estate. Browse through our curated selection of properties.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import './globals.css';

// import local components
import MainHeader from '@/Components/MainHeader/MainHeader';

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}

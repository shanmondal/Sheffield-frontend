import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import GoogleAnalytics from '../componets/GoogleAnalytics';

export const MainLayout = () => {
  return (
    <>
      <GoogleAnalytics />
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

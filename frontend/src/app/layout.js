import 'bootstrap/dist/css/bootstrap.min.css'
import BootstrapClient from '@/components/BootstrapClient';
import { Navbar } from '@/components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        {children}
        <BootstrapClient />
        <ToastContainer />
      </body>
    </html>
  );
}
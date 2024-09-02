import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "MSME Group - The future of MSMEs",
  description: "The world's leading platform for micro, small, and medium enterprises. Connect with businesses globally, access resources, and expand your reach",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

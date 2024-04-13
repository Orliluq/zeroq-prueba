import type { Metadata } from 'next';
import './globals.css';
import { Header } from './components/header';


export const metadata: Metadata = {
  title: "ZeroQ",
  description: "Prueba Frontend",
};

export default function RootLayout({

  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
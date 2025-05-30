// src/app/layout.tsx
import Navbar from './components/Navbar';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <Navbar />
        <main className="max-w-4xl mx-auto py-8 px-4">{children}</main>
      </body>
    </html>
  );
}

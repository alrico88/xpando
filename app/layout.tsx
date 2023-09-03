import './globals.scss';
import type { Metadata } from 'next';
import { Lato } from 'next/font/google';

const font = Lato({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Xpando',
  description: 'Unshorten any link',
  authors: [
    {
      name: 'Alberto Rico',
      url: 'https://alrico.es',
    },
  ],
  keywords: ['unshorten', 'url', 'link', 'unshortener'],
  themeColor: '#004d40',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-100">
      <body className={`h-100 ${font.className}`}>{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Srt Testing Next JS',
  description: 'Generated using create next app by sarath'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import React from 'react';

export const metadata = {
  title: 'Spray Delivery',
  description: 'Delivery de tintas spray Colorgin Arte Urbana',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}

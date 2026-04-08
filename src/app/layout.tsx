// src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';

export const metadata: Metadata = {
  title: { default: 'Yango Expert', template: '%s — Yango Expert' },
  description: 'La première app de gestion financière pour chauffeurs VTC à Dakar.',
  keywords: ['VTC', 'Dakar', 'Yango', 'rentabilité', 'chauffeur'],
  metadataBase: new URL('https://yangoexpert.store'),
  openGraph: {
    title: 'Yango Expert — Pilotez votre rentabilité VTC',
    description: 'Calculez votre vrai profit net après commission, carburant et versage.',
    url: 'https://yangoexpert.store',
    siteName: 'Yango Expert',
    locale: 'fr_SN',
    type: 'website',
  },
  icons: { icon: '/favicon.png', apple: '/logo.svg' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800;900&family=DM+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@500;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

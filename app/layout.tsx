import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Vici Studio",
//   description: "Design. Prototype. Share.",
// };

export const metadata: Metadata = {
  title: {
    default: 'Vici Studio - Professional Photography Studio',
    template: '%s | Vici Studio'
  },
  description: 'Vici Studio offers professional photography services including wedding, portrait, product, and editorial photography. Capture your moments with artistic excellence.',
  keywords: [
    'photography studio',
    'wedding photography',
    'portrait photography',
    'product photography',
    'editorial photography',
    'professional photographer',
    'photo studio',
    'creative photography',
    'fashion photography',
    'pre-wedding photoshoot',
    'event photography',
    'commercial photography',
    'artistic photography',
    'photography services',
    'Vici Studio'
  ].join(', '),
  authors: [{ name: 'Vici Studio' }],
  creator: 'Vici Studio',
  publisher: 'Vici Studio',

  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vicistudio.com',
    siteName: 'Vici Studio',
    title: 'Vici Studio - Professional Photography Studio',
    description: 'Capture timeless moments with Vici Studio. Professional wedding, portrait, and commercial photography services.',
    images: [
      {
        url: '/favicon.ico',
        width: 1200,
        height: 630,
        alt: 'Vici Studio - Professional Photography',
      },
    ],
  },

  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'Vici Studio - Professional Photography Studio',
    description: 'Capture timeless moments with Vici Studio. Professional photography services.',
    images: ['/favicon.ico'],
    creator: '@vicistudio',
  },

  // Additional metadata
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Icons
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },

  // Manifest for PWA
  manifest: '/manifest.json',

  // Verification
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },

  // Alternates
  alternates: {
    canonical: 'https://vicistudio.com',
    languages: {
      'en-US': 'https://vicistudio.com/en',
      // Add other languages if available
    },
  },

  // Other
  category: 'photography',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

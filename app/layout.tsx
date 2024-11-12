import Script from 'next/script';
import { PresentationProvider } from '@/contexts/PresentationContext';
import '@/app/globals.css';

export const metadata = {
  title: 'MIT On-Board',
  description: 'MIT Alumni Society Onboarding Platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
      </head>
      <body>
        <PresentationProvider>
          {children}
        </PresentationProvider>
      </body>
    </html>
  );
}

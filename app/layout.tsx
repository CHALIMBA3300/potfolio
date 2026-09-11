import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Charles Chalimba — Developer, Designer & Entrepreneur',
  description: 'Charles Chalimba is a website developer, UI/UX designer, and entrepreneur. Creating meaningful digital experiences through code, design, and curiosity.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}

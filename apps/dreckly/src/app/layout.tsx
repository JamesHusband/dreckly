import { ClientLayout } from '@dreckly/shared-layout';
import './global.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Dreckly - Cornwall's Food Delivery Platform",
  description:
    'Order food online from the best restaurants in Cornwall. Fast delivery, great food, delivered dreckly to your door.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

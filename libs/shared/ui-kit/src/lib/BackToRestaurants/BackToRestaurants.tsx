import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const BackToRestaurants = () => (
  <div className="container mx-auto px-4 py-4">
    <Link
      href="/"
      className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-4"
    >
      <ArrowLeft className="h-5 w-5" />
      Back to restaurants
    </Link>
  </div>
);

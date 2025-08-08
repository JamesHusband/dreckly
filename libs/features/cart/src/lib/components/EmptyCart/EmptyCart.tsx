import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { PageHeader } from '@dreckly/shared-ui-kit';

export const EmptyCart = () => (
  <div className="min-h-screen bg-gray-50 py-12">
    <div className="container mx-auto px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white rounded-lg p-12 shadow-sm">
          <div className="text-6xl mb-4">
            <ShoppingCart />
          </div>
          <div className="mb-4">
            <PageHeader title="Your cart is empty" size="medium" />
          </div>
          <p className="text-gray-600 mb-8">
            Looks like you haven&apos;t added any delicious food to your cart
            yet.
          </p>
          <Link href="/">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium transition-colors">
              Start Ordering
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

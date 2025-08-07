import { Clock } from 'lucide-react';
import {
  getCartSubtotal,
  getCartTotal,
  getDeliveryFee,
  getServiceFee,
} from '../../utils';

export const CartSummary = () => {
  const subtotal = getCartSubtotal();
  const deliveryFee = getDeliveryFee();
  const serviceFee = getServiceFee();
  const total = getCartTotal();
  return (
    <div className="lg:col-span-1">
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm sticky top-24">
        <div className="p-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold">Order Summary</h3>
        </div>
        <div className="p-4">
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>£{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery fee</span>
              <span>£{deliveryFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Service fee</span>
              <span>£{serviceFee.toFixed(2)}</span>
            </div>
            <hr className="border-gray-200" />
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>£{total.toFixed(2)}</span>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg py-6 rounded-md font-medium transition-colors">
              Proceed to Checkout
            </button>
            <p className="text-xs text-gray-500 text-center">
              By placing your order, you agree to our Terms of Service and
              Privacy Policy
            </p>
          </div>

          <div className="mt-6 p-4 bg-green-50 rounded-lg">
            <div className="flex items-center gap-2 text-green-700">
              <Clock className="h-4 w-4" />
              <span className="text-sm font-medium">
                Estimated delivery: 25-40 minutes
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

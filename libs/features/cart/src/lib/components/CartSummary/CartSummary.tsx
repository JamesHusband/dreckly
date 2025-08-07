import { Clock } from 'lucide-react';
import { PriceRow, Button, InfoCard } from '@dreckly/shared-ui-kit';
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
            <PriceRow label="Subtotal" amount={subtotal} />
            <PriceRow label="Delivery fee" amount={deliveryFee} />
            <PriceRow label="Service fee" amount={serviceFee} />
            <hr className="border-gray-200" />
            <PriceRow label="Total" amount={total} isTotal />
          </div>

          <div className="mt-6 space-y-3">
            <Button
              value="Proceed to Checkout"
              variant="primary"
              onClick={() => console.log('clicked')}
            />
            <p className="text-xs text-gray-500 text-center">
              By placing your order, you agree to our Terms of Service and
              Privacy Policy
            </p>
          </div>

          <InfoCard variant="success" className="mt-6">
            <Clock className="h-4 w-4" />
            <span className="text-sm font-medium">
              Estimated delivery: 25-40 minutes
            </span>
          </InfoCard>
        </div>
      </div>
    </div>
  );
};

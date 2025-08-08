import { MapPin, Clock } from 'lucide-react';
import { Card, SectionHeader } from '@dreckly/shared-ui-kit';

export const CustomerAddress = ({
  customerAddress,
}: {
  customerAddress: string;
}) => (
  <Card>
    <SectionHeader 
      title={
        <div className="flex items-center gap-2">
          <MapPin className="h-5 w-5" />
          Delivery Address
        </div>
      }
    />
    <div className="p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-medium">{customerAddress}</p>
          <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
            <Clock className="h-4 w-4" />
            <span>Estimated delivery: 25-40 min</span>
          </div>
        </div>
        <button className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors font-medium">
          Change
        </button>
      </div>
    </div>
  </Card>
);

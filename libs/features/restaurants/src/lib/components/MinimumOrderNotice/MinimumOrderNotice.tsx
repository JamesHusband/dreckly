export const MinimumOrderNotice = ({ minOrder }: { minOrder: string }) => (
  <div className="mb-6">
    <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
      Minimum order: {minOrder}
    </span>
  </div>
);

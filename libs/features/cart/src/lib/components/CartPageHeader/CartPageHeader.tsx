import { BackToRestaurants } from '@dreckly/shared-ui-kit';

export const CartPageHeader = () => {
  return (
    <>
      <BackToRestaurants />
      <h1 className="text-3xl font-bold mb-8">Your Order</h1>
    </>
  );
};

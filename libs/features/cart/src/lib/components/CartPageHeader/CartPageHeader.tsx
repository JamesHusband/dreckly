import { BackToRestaurants, PageHeader } from '@dreckly/shared-ui-kit';

export const CartPageHeader = () => {
  return (
    <>
      <BackToRestaurants />
      <div className="mb-8">
        <PageHeader title="Your Order" size="large" />
      </div>
    </>
  );
};

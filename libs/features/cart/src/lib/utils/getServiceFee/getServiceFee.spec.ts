import { getServiceFee } from './getServiceFee';

describe('getServiceFee', () => {
  it('should return the fixed service fee', () => {
    const serviceFee = getServiceFee();

    expect(serviceFee).toBe(1.49);
  });
});

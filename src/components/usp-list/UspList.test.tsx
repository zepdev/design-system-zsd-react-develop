import { render } from '@testing-library/react';
import { GlobalVariants } from '../../interfaces/global-variants';
import { USPList } from './UspList';

describe('USP list component', () => {
  it('should render an usp list component', () => {
    const Child = <USPList variant={GlobalVariants.Zps} headerTitle={'Header'} />;
    const { getByTestId } = render(Child);
    const anchorCardElement = getByTestId('zep-usp-list');
    expect(anchorCardElement).toBeInTheDocument();
  });
});

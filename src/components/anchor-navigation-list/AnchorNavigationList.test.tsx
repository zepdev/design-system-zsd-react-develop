import { render } from '@testing-library/react';
import { AnchorNavigationVariant } from '../anchor-navigation-card';
import { AnchorNavigationList } from './AnchorNavigationList';

describe('Anchor navigation list component', () => {
  it('should render an anchor navigation list component', () => {
    const Child = <AnchorNavigationList headlines={[]} variant={AnchorNavigationVariant.Zps} />;
    const { getByTestId } = render(Child);
    const anchorCardElement = getByTestId('zep-anchor-navigation-list');
    expect(anchorCardElement).toBeInTheDocument();
  });
});

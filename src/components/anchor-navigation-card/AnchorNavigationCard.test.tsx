import { render } from '@testing-library/react';
import { AnchorNavigationCard } from './AnchorNavigationCard';
import { AnchorNavigationVariant } from './anchor-navigation-card.interface';

describe('Anchor navigation card component', () => {
  it('should render an anchor navigation card component', () => {
    const Child = (
      <AnchorNavigationCard
        headline={'Gasmotoren Baureihe CG132 B (400 - 1.000 kW)'}
        linkUrl="https://www.google.com/"
        linkLabel="Mehr zum Gasmotor"
        variant={AnchorNavigationVariant.Zps}
      />
    );
    const { getByTestId } = render(Child);
    const anchorCardElement = getByTestId('zep-anchor-navigation-card');
    const headlineElement = getByTestId('anchor-navigation-card-headline');
    expect(anchorCardElement).toBeInTheDocument();
    expect(headlineElement).toBeInTheDocument();
  });
});

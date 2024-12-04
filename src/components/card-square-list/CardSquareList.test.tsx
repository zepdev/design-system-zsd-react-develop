import { render } from '@testing-library/react';
import { GlobalVariants } from '../../interfaces/global-variants';
import { CardSquareList } from './CardSquareList';

describe('Card Square list component', () => {
  it('should render card square list', () => {
    const Child = <CardSquareList headlines={[]} imageAlt='' imageSrc='' variant={GlobalVariants.Zps} />;
    const { getByTestId } = render(Child);
    const anchorCardElement = getByTestId('zep-card-square-list');
    expect(anchorCardElement).toBeInTheDocument();
  });
});
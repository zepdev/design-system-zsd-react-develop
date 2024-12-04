import { render, screen } from '@testing-library/react';
import { HeaderLong } from './HeaderLong';
import { GlobalVariantExtended } from '../../interfaces/global-variants';

describe('HeaderLong Pattern', () => {
  const headline = 'headline short';
  const tagline = 'tagline';
  const description = 'This is a line of the text, with description';

  it('should render with background', () => {
    const { getByTestId } = render(
      <HeaderLong variant={GlobalVariantExtended.ZpsBg} description={description} headline={headline} tagline={tagline} />,
    );
    const HeaderLongElement = getByTestId('zep-header-long');
    expect(HeaderLongElement).toBeInTheDocument();
    expect(HeaderLongElement).toHaveClass('zep-bg-gradient-to-r zep-from-[rgb(32,27,52)] zep-to-[rgb(32,23,94)]')
  });

  it('should render without background', () => {
    const { getByTestId } = render(<HeaderLong headline={headline} />);
    const headlineElement = screen.getByText(headline);
    const HeaderLongElement = getByTestId('zep-header-long');
    expect(headlineElement).toBeInTheDocument();
    expect(HeaderLongElement).not.toHaveClass('zep-bg-background-gradient')
  });

  it('should render with cat theme', () => {
    const { getByTestId } = render(<HeaderLong description={description} variant={GlobalVariantExtended.CatBg} headline={headline} tagline={tagline} />);
    const taglineElement = screen.getByText(tagline);
    expect(taglineElement).toBeInTheDocument();
    const HeaderLongElement = getByTestId('zep-header-long');
    expect(HeaderLongElement).toHaveClass('zep-bg-background-dark');
  });
});

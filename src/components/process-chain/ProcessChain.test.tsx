import { render, screen } from '@testing-library/react';
import { ProcessChain } from './ProcessChain';

describe('ProcessChain component', () => {
  const contentItems = [
    {
      headline: 'Test Headline 1',
      linkItems: [{ icon: 'arrow-right', link: 'https://example.com/1' }],
      listItems: ['List item 1'],
    },
    {
      headline: 'Test Headline 2',
      linkItems: [{ icon: 'arrow-right', link: 'https://example.com/2' }],
      listItems: ['List item 2'],
    },
  ];

  test('renders ProcessChain component with headlines and links', () => {
    render(<ProcessChain linkChain={true} contentItems={contentItems} />);

    const headlineElements = screen.getAllByTestId('process-chain-headline');
    expect(headlineElements.length).toBe(2);
    expect(headlineElements[0]).toHaveTextContent('Test Headline 1');
    expect(headlineElements[1]).toHaveTextContent('Test Headline 2');

    const linkElements = screen.getAllByRole('link');
    expect(linkElements.length).toBe(2);
    expect(linkElements[0]).toHaveAttribute('href', 'https://example.com/1');
    expect(linkElements[1]).toHaveAttribute('href', 'https://example.com/2');
  });

  test('renders list items when linkChain is false', () => {
    render(<ProcessChain linkChain={false} contentItems={contentItems} />);

    const listItemElements = screen.getAllByRole('listitem');
    expect(listItemElements.length).toBe(2);
    expect(listItemElements[0]).toHaveTextContent('List item 1');
    expect(listItemElements[1]).toHaveTextContent('List item 2');
  });

  test('renders links that open in a new tab when linkChain is true', () => {
    render(<ProcessChain linkChain={true} contentItems={contentItems} />);

    const linkElements = screen.getAllByRole('link');
    linkElements.forEach((linkElement) => {
      expect(linkElement).toHaveAttribute('target', '_blank');
    });
  });
});

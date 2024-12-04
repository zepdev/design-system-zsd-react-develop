import { render } from '@testing-library/react';
import { RichText } from './RichText';
import { Content } from './richText.interface';

const mockContent: Content = {
  blocks: [
    {
      type: 'header-three',
      depth: 0,
      text: 'Li Europan lingues',
      inlineStyleRanges: [],
      entityRanges: [],
      items: [],
      ordered: false
    },
    {
      type: 'unstyled',
      depth: 0,
      text: 'existent ae tareie eun myth Por ie ntiemusic sport etc,',
      inlineStyleRanges: [
        {
          offset: 12,
          length: 10,
          style: 'BOLD',
        },
      ],
      entityRanges: [
        {
          offset: 12,
          length: 10,
          key: 0,
        },
      ],
      items: [],
      ordered: false
    },
    {
      type: 'header-two',
      depth: 0,
      text: 'Omnicos directe al desirabilite',
      inlineStyleRanges: [],
      entityRanges: [],
      items: [],
      ordered: false
    },
    {
      type: 'list',
      ordered: true,
      items: ['First ordered item', 'Second ordered item'],
      depth: 0,
      text: '',
      inlineStyleRanges: [],
      entityRanges: []
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'On refusa continuar payar custosi traductores.',
        'pronunciation e plu commun paroles payar custosi traductores.',
      ],
      depth: 0,
      text: '',
      inlineStyleRanges: [],
      entityRanges: []
    },
  ],
  entityMap: {
    '0': {
      type: 'LINK',
      mutability: 'MUTABLE',
      data: {
        url: 'https://www.google.com',
      },
    },
  },
  images: [
    {
      src: 'https://via.placeholder.com/600x400',
      alt: 'Example Image',
      width: '600px',
      height: '400px',
    },
  ],
  unstyled: [
    {
      type: 'unstyled',
      depth: 0,
      text: 'Ma quande lingues coalesce, li grammatica del',
      inlineStyleRanges: [],
      entityRanges: [],
    },
  ],
};

// This component may need to refactor so did not add more unit test
describe('RichText component', () => {
  it('should render', () => {
    const { getByTestId } = render(<RichText content={mockContent} textColor="white"></RichText>);
    const richTextElement = getByTestId('zep-richtext');
    expect(richTextElement).toBeInTheDocument();
    expect(richTextElement).toHaveClass('md:zep-w-[944px]');
  });
});

import { Meta, StoryObj } from '@storybook/react';
import { RichText } from './RichText';
import { Content, RichTextProps } from './richText.interface';

const meta = {
  title: 'Components/RichText',
  component: RichText,
  tags: ['autodocs'],
  argTypes: {
    textColor: {
      control: {
        type: 'radio',
        options: ['indigo', 'white', 'black'],
      },
    },
  },
} satisfies Meta<typeof RichText>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample JSON
const sampleContent: Content = {
  blocks: [
    {
      type: 'header-three',
      depth: 0,
      text: 'Li Europan lingues tot Europa',
      inlineStyleRanges: [],
      entityRanges: [],
      items: [],
      ordered: false
    },
    {
      type: 'header-four',
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
      text: 'existent ae tareie eun myth Por ie ntiemusic sport etc, tot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular',
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
      type: 'list',
      ordered: true,
      items: ['First ordered item', 'Second ordered item', 'Third ordered item'],
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
        'At solmen va esser grammatica, pronunciation e plu commun paroles.',
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
      text: 'Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic. Li franca va esser plu simplic e regulari quam li existent Europan lingues. It va esser tam simplic quam Occidental; in fact, it va esser Occidental. A un Angleso it va semblar un simplificat Angles, quam un skeptic Cambridge amico dit me que Occidental es.',
      inlineStyleRanges: [],
      entityRanges: [],
    },
  ],
};

export const Default: Story = {
  args: {
    textColor: 'indigo',
    content: sampleContent,
    children: <p className="zep-mb-1">This is Custom</p>,
  } as RichTextProps,
};

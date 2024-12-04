import { Meta, StoryObj } from '@storybook/react';
import { BlocksContent } from '@strapi/blocks-react-renderer';
import { GlobalVariants } from '../../interfaces/global-variants';
import { AccordionPattern } from './AccordionPattern';
import { AccordionPatternProps } from './accordion.interface';

const mockContent: BlocksContent = [
  {
    type: 'paragraph',
    children: [
      {
        text: 'Unsere Produktkomponenten von Optimarin umfassen leistungsstarke UV-Systeme, effiziente Filter, robuste Rückspülpumpen, präzise Druckregelventile und bedienfreundliche Control Panel. Innovative Technologien gewährleisten eine effektive Entfernung von Organismen und Partikeln, hohe Durchflussraten und eine zuverlässige Leistung bei minimalem Wartungsaufwand. Damit sorgen unsere Ballastwasserbehandlungssysteme für eine nachhaltige und effiziente Ballastwasserbehandlung, die den höchsten Umweltstandards entspricht.',
        type: 'text',
      },
    ],
  },
];

const meta = {
  title: 'Patterns/AccordionPattern',
  component: AccordionPattern,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'radio',
        options: [...Object.keys(GlobalVariants), 'default'],
      },
    },
  },
} satisfies Meta<typeof AccordionPattern>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    topDescription: mockContent,
    bottomDescription: mockContent,
    contents: [
      {
        title: 'Title one',
        accordionContent: mockContent,
      },
      {
        title: 'Title two',
        accordionContent: mockContent,
      },
      {
        title: 'Title three',
        accordionContent: mockContent,
      },
      {
        title: 'Title four',
        accordionContent: mockContent,
      },
      {
        title: 'Title five',
        accordionContent: mockContent,
      },
    ],
    variant: GlobalVariants.Zps,
  } as AccordionPatternProps,
};

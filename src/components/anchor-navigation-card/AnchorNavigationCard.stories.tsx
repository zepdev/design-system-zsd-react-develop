import type { Meta, StoryObj } from '@storybook/react';
import { AnchorNavigationCard, anchorCardVariants } from './AnchorNavigationCard';
import { AnchorNavigationCardProps, AnchorNavigationVariant } from './anchor-navigation-card.interface';

const anchorVariantCardKeys = Object.keys(anchorCardVariants) as AnchorNavigationVariant[];

const meta = {
  title: 'Components/AnchorNavigationCard',
  component: AnchorNavigationCard,
  tags: ['autodocs'],
  argTypes: {
    isLoading: {
      control: {
        type: 'boolean',
      },
    },
    variant: {
      control: {
        type: 'radio',
        options: anchorVariantCardKeys,
      },
    },
  },
} satisfies Meta<typeof AnchorNavigationCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headline: 'Gasmotoren Baureihe CG132 B (400 - 1.000 kW)',
    variant: AnchorNavigationVariant.Zps,
    scrollToIdLink: 'test',
    linkLabel: 'Mehr zum Gasmotor',
    isLoading: false,
  } as AnchorNavigationCardProps,
};

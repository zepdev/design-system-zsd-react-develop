import type { Meta, StoryObj } from '@storybook/react';
import { AnchorNavigationVariant } from '../anchor-navigation-card/anchor-navigation-card.interface';
import { AnchorNavigationList } from './AnchorNavigationList';
import { AnchorNavigationListProps } from './anchor-navigation-list.interface';

const meta = {
  title: 'Patterns/AnchorNavigationList',
  component: AnchorNavigationList,
  tags: ['autodocs'],
  argTypes: {
    isLoading: {
      control: {
        type: 'boolean',
      },
    },
    headlines: {
      control: {
        type: 'array',
      },
    },
    variant: {
      control: {
        type: 'radio',
        options: Object.keys(AnchorNavigationVariant),
      },
    },
  },
} satisfies Meta<typeof AnchorNavigationList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headlines: [
      {
        headline: 'Gasmotoren Baureihe CG132 B (400 - 1.000 kW)',
        scrollToIdLink: 'test',
        linkLabel: 'Mehr zum Gasmotor',
        isLoading: false,
      },
    ],
    variant: AnchorNavigationVariant.Zps,
  } as AnchorNavigationListProps,
};

export const With2Items: Story = {
  args: {
    headlines: new Array(2).fill({
      headline: 'Gasmotoren Baureihe CG132 B (400 - 1.000 kW)',
      scrollToIdLink: 'test',
      linkLabel: 'Mehr zum Gasmotor',
      isLoading: false,
    }),
    variant: AnchorNavigationVariant.Zps,
  } as AnchorNavigationListProps,
};

export const With3Items: Story = {
  args: {
    headlines: new Array(3).fill({
      headline: 'Gasmotoren Baureihe CG132 B (400 - 1.000 kW)',
      scrollToIdLink: 'test',
      linkLabel: 'Mehr zum Gasmotor',
      isLoading: false,
    }),
    variant: AnchorNavigationVariant.Zps,
  } as AnchorNavigationListProps,
};

export const With4Items: Story = {
  args: {
    headlines: new Array(4).fill({
      headline: 'Gasmotoren Baureihe CG132 B (400 - 1.000 kW)',
      scrollToIdLink: 'test',
      linkLabel: 'Mehr zum Gasmotor',
      isLoading: false,
    }),
    variant: AnchorNavigationVariant.Zps,
  } as AnchorNavigationListProps,
};

export const With5Items: Story = {
  args: {
    headlines: new Array(5).fill({
      headline: 'Gasmotoren Baureihe CG132 B (400 - 1.000 kW)',
      scrollToIdLink: 'test',
      linkLabel: 'Mehr zum Gasmotor',
      isLoading: false,
    }),
    variant: AnchorNavigationVariant.Zps,
  } as AnchorNavigationListProps,
};

export const With6Items: Story = {
  args: {
    headlines: new Array(6).fill({
      headline: 'Gasmotoren Baureihe CG132 B (400 - 1.000 kW)',
      scrollToIdLink: 'test',
      linkLabel: 'Mehr zum Gasmotor',
      isLoading: false,
    }),
    variant: AnchorNavigationVariant.Zps,
  } as AnchorNavigationListProps,
};

export const With7Items: Story = {
  args: {
    headlines: new Array(7).fill({
      headline: 'Gasmotoren Baureihe CG132 B (400 - 1.000 kW)',
      scrollToIdLink: 'test',
      linkLabel: 'Mehr zum Gasmotor',
      isLoading: false,
    }),
    variant: AnchorNavigationVariant.Zps,
  } as AnchorNavigationListProps,
};

export const With8Items: Story = {
  args: {
    headlines: new Array(8).fill({
      headline: 'Gasmotoren Baureihe CG132 B (400 - 1.000 kW)',
      scrollToIdLink: 'test',
      linkLabel: 'Mehr zum Gasmotor',
      isLoading: false,
    }),
    variant: AnchorNavigationVariant.Zps,
  } as AnchorNavigationListProps,
};

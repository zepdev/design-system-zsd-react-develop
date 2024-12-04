import type { Meta, StoryObj } from '@storybook/react';
import { GlobalVariants } from '../../interfaces/global-variants';
import { CardSquareList } from './CardSquareList';
import { CardSquareListProps } from './card-square-list.interface';

const meta = {
  title: 'Patterns/CardSquareList',
  component: CardSquareList,
  tags: ['autodocs'],
  argTypes: {
    headlines: {
      control: {
        type: 'array',
      },
    },
    variant: {
      control: {
        type: 'radio',
        options: Object.keys(GlobalVariants),
      },
    },
  },
} satisfies Meta<typeof CardSquareList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headlines: new Array(2).fill({
      headline: 'Headline ',
      imageSrc: './assets/worker.png',
      imageAlt: 'worker img',
      description: 'This is the description',
    }),
    variant: GlobalVariants.Zps,
  } as CardSquareListProps,
};

export const With3Items: Story = {
  args: {
    headlines: new Array(3).fill({
      headline: 'Headline',
      imageSrc: './assets/worker.png',
      imageAlt: 'worker img',
      description: 'This is the description',
    }),
    variant: GlobalVariants.Zps,
  } as CardSquareListProps,
};

export const With4Items: Story = {
  args: {
    headlines: new Array(4).fill({
      headline: 'Headline',
      imageSrc: './assets/worker.png',
      imageAlt: 'worker img',
      description: 'This is the description',
    }),
    variant: GlobalVariants.Zps,
  } as CardSquareListProps,
};

export const With5Items: Story = {
  args: {
    headlines: new Array(5).fill({
      headline: 'Headline',
      imageSrc: './assets/worker.png',
      imageAlt: 'worker img',
      description: 'This is the description',
    }),
    variant: GlobalVariants.Zps,
  } as CardSquareListProps,
};

export const With6Items: Story = {
  args: {
    headlines: new Array(6).fill({
      headline: 'Headline',
      imageSrc: './assets/worker.png',
      imageAlt: 'worker img',
      description: 'This is the description',
    }),
    variant: GlobalVariants.Zps,
  } as CardSquareListProps,
};
export const With7Items: Story = {
  args: {
    headlines: new Array(7).fill({
      headline: 'Headline',
      imageSrc: './assets/worker.png',
      imageAlt: 'worker img',
      description: 'This is the description',
    }),
    variant: GlobalVariants.Zps,
  } as CardSquareListProps,
};
export const With8Items: Story = {
  args: {
    headlines: new Array(8).fill({
      headline: 'Headline',
      imageSrc: './assets/worker.png',
      imageAlt: 'worker img',
      description: 'This is the description',
    }),
    variant: GlobalVariants.Zps,
  } as CardSquareListProps,
};
export const With9Items: Story = {
  args: {
    headlines: new Array(9).fill({
      headline: 'Headline',
      imageSrc: './assets/worker.png',
      imageAlt: 'worker img',
      description: 'This is the description',
    }),
    variant: GlobalVariants.Zps,
  } as CardSquareListProps,
};
export const With10Items: Story = {
  args: {
    headlines: new Array(10).fill({
      headline: 'Headline',
      imageSrc: './assets/worker.png',
      imageAlt: 'worker img',
      description: 'This is the description',
    }),
    variant: GlobalVariants.Zps,
  } as CardSquareListProps,
};
export const With11Items: Story = {
  args: {
    headlines: new Array(11).fill({
      headline: 'Headline',
      imageSrc: './assets/worker.png',
      imageAlt: 'worker img',
      description: 'This is the description',
    }),
    variant: GlobalVariants.Zps,
  } as CardSquareListProps,
};
export const With12Items: Story = {
  args: {
    headlines: new Array(12).fill({
      headline: 'Headline',
      imageSrc: './assets/worker.png',
      imageAlt: 'worker img',
      description: 'This is the description',
    }),
    variant: GlobalVariants.Zps,
  } as CardSquareListProps,
};

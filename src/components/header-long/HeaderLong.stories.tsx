import type { Meta, StoryObj } from '@storybook/react';
import { HeaderLong } from './HeaderLong';
import { HeaderLongProps } from './headerlong.interface';
import { GlobalVariantExtended, GlobalVariants } from '../../interfaces/global-variants';

const meta = {
  title: 'Patterns/HeaderLong',
  component: HeaderLong,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof HeaderLong>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: GlobalVariants.Zps,
    type: 'button',
    tagline: 'Tagline',
    headline:
      'Headline Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus',
    linkText: 'Click me',
    linkHref: 'https://www.google.com',
    onClick: () => {},
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.',
  } as HeaderLongProps,
};

export const WithBackground: Story = {
  args: {
    variant: GlobalVariantExtended.ZpsBg,
    type: 'link',
    tagline: 'Tagline',
    headline: 'Headline',
    linkText: 'Click me',
    linkHref: 'https://www.google.com',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.',
  } as HeaderLongProps,
};

export const WithLink: Story = {
  args: {
    variant: GlobalVariants.Zps,
    type: 'link',
    tagline: 'Tagline',
    headline: 'Headline',
    linkText: 'Click me',
    linkHref: 'https://www.google.com',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.',
  } as HeaderLongProps,
};

export const WithButton: Story = {
  args: {
    variant: GlobalVariants.Zps,
    type: 'button',
    tagline: 'Tagline',
    headline: 'Headline',
    linkText: 'Click me',
    onClick: () => {},
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.',
  } as HeaderLongProps,
};

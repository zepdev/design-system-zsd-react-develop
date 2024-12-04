import type { Meta, StoryObj } from '@storybook/react';
import { Hero } from './Hero';
import { GlobalVariants } from '../../interfaces/global-variants';


const meta = {
  title: 'Components/Hero',
  component: Hero,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

const Image = {
  src: './assets/hero_image.png',
  alt: 'Lorem ipsum dolor sit amet consectetur.',
};
const headline = 'Headline';
const buttonPrimary = 'Primary';
const buttonSecondary = 'Secondary';

export const Default: Story = {
  args: {
    variant: GlobalVariants.Zps,
    headline,
    buttonPrimary,
    buttonSecondary,
    buttonSecondaryOnClick: () => null,
    buttonPrimaryOnClick: () => null,
    imageSrc: Image.src,
    imageAlt: Image.alt,
  },
};

export const HeroSimple: Story = {
  args: {
    variant: GlobalVariants.Zps,
    headline,
    buttonPrimary,
    buttonPrimaryOnClick: () => null,
    buttonSecondary,
    buttonSecondaryOnClick: () => null,
  },
};

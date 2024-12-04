import { Meta, StoryObj } from '@storybook/react';
import { LinkListItem } from '@/components/link-list-item/LinkListItem';

const meta = {
  title: 'Components/LinkListItem',
  component: LinkListItem,
  tags: ['autodocs'],
  argTypes: {
    theme: {
      children: {
        control: {
          type: 'select',
          options: ['cat', 'power-systems'],
        }
      }
    }
  },
} satisfies Meta<typeof LinkListItem>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    links: [
      { icon: 'arrow-right', href: 'https://www.google.com', label: 'link inline', hasIcon: true },
      { icon: 'arrow-right', href: 'https://www.google.com', label: 'link inline', hasIcon: true },
      { icon: 'arrow-right', href: 'https://www.google.com', label: 'link inline', hasIcon: true },
      { icon: 'arrow-right', href: 'https://www.google.com', label: 'link inline', hasIcon: true },
    ],
    headline: 'Headline optional',
    description: 'Description optional',
    theme: 'power-systems',
  },
};

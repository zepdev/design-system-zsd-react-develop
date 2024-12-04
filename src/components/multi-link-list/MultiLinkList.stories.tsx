import { Meta, StoryObj } from '@storybook/react';
import { MultiLinkList } from './MultiLinkList';
import { LinkListItemProps } from '@/components/link-list-item';
import { GlobalVariants } from '../../interfaces/global-variants';

const mockLinkList: LinkListItemProps = {
  links: [
    { icon: 'arrow-right', href: 'https://www.google.com', label: 'link inline', hasIcon: true },
    { icon: 'arrow-right', href: 'https://www.google.com', label: 'link inline', hasIcon: true },
    { icon: 'arrow-right', href: 'https://www.google.com', label: 'link inline', hasIcon: true },
    { icon: 'arrow-right', href: 'https://www.google.com', label: 'link inline', hasIcon: true },
  ],
  headline: 'Headline optional',
  description: 'Description optional',
}

const meta = {
  title: 'Patterns/MultiLinkList',
  component: MultiLinkList,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      children: {
        control: {
          type: 'select',
          options: [GlobalVariants.Zps, GlobalVariants.Cat],
        }
      }
    }
  },
} satisfies Meta<typeof MultiLinkList>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    headline: 'Two Link Lists',
    linkLists: [
      mockLinkList,
      mockLinkList,
    ],
    variant: GlobalVariants.Zps,
  },
};

export const ThreeItems: Story = {
  args: {
    headline: 'Three Link Lists',
    linkLists: [
      mockLinkList,
      mockLinkList,
      mockLinkList,
    ],
  },
};

export const FourItems: Story = {
  args: {
    headline: 'Four Link Lists',
    linkLists: [
      mockLinkList,
      mockLinkList,
      mockLinkList,
      mockLinkList,
    ],
  },
};

export const FiveItems: Story = {
  args: {
    headline: 'Five Link Lists',
    linkLists: [
      mockLinkList,
      mockLinkList,
      mockLinkList,
      mockLinkList,
      mockLinkList,
    ],
  },
};

export const SixItems: Story = {
  args: {
    headline: 'Six Link Lists',
    linkLists: [
      mockLinkList,
      mockLinkList,
      mockLinkList,
      mockLinkList,
      mockLinkList,
      mockLinkList,
    ],
  },
};

export const SevenItems: Story = {
  args: {
    headline: 'Seven Link Lists',
    linkLists: [
      mockLinkList,
      mockLinkList,
      mockLinkList,
      mockLinkList,
      mockLinkList,
      mockLinkList,
      mockLinkList,
    ],
  },
};

export const EightItems: Story = {
  args: {
    headline: 'Eight Link Lists',
    linkLists: [
      mockLinkList,
      mockLinkList,
      mockLinkList,
      mockLinkList,
      mockLinkList,
      mockLinkList,
      mockLinkList,
      mockLinkList,
    ],
  },
};

export const NineItems: Story = {
  args: {
    headline: 'Nine Link Lists',
    linkLists: [
      mockLinkList,
      mockLinkList,
      mockLinkList,
      mockLinkList,
      mockLinkList,
      mockLinkList,
      mockLinkList,
      mockLinkList,
      mockLinkList,
    ],
  },
};

export const TenItems: Story = {
  args: {
    headline: 'Ten Link Lists',
    linkLists: [
      mockLinkList,
      mockLinkList,
      mockLinkList,
      mockLinkList,
      mockLinkList,
      mockLinkList,
      mockLinkList,
      mockLinkList,
      mockLinkList,
      mockLinkList,
    ],
  },
};

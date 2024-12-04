import type { Meta, StoryObj } from '@storybook/react';
import { LinkTarget } from '@zepdev/design-system-component-library-react';
import { Footer } from './Footer';
import { FooterProps } from './Footer.interface';
import { LinkListItemProps } from '../link-list-item';

const mockLinkList: LinkListItemProps = {
  links: [
    { icon: 'arrow-right', href: 'https://www.google.com', label: 'link inline', hasIcon: true },
    { icon: 'arrow-right', href: 'https://www.google.com', label: 'link inline', hasIcon: true },
    { icon: 'arrow-right', href: 'https://www.google.com', label: 'link inline', hasIcon: true },
    { icon: 'arrow-right', href: 'https://www.google.com', label: 'link inline', hasIcon: true },
  ],
  headline: 'Headline optional',
}

const meta = {
  title: 'Patterns/Footer',
  component: Footer,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    socialMediaTitle: 'Folgen Sie uns auf',
    linkLists: [
      mockLinkList,
      mockLinkList,
      mockLinkList,
      mockLinkList,
      mockLinkList,
    ],
    footerLinks: [
      { label: 'inline link', href: 'https://www.google.com', target: LinkTarget.Blank },
      { label: 'inline link', href: 'https://www.google.com', target: LinkTarget.Blank },
      { label: 'inline link', href: 'https://www.google.com', target: LinkTarget.Blank },
      { label: 'inline link', href: 'https://www.google.com', target: LinkTarget.Blank },
    ],
    socialMediaLinks: [
      { icon: 'alarm', href: 'https://www.facebook.com', target: LinkTarget.Blank },
      { icon: 'alarm', href: 'https://www.facebook.com', target: LinkTarget.Blank }
    ],
  } as FooterProps,
};

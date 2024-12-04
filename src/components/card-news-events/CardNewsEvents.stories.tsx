import type { Meta, StoryObj } from '@storybook/react';

import { GlobalVariants } from '../../interfaces/global-variants';
import { CardNewsEvents } from './CardNewsEvents';
import { CardNewsEventsProps
 } from './card-news-events.interface';

const meta = {
  title: 'Components/CardNewsEvents',
  component: CardNewsEvents,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CardNewsEvents>;

export default meta;
type Story = StoryObj<typeof meta>;
const Image = {
    src: './assets/image-4_3.png',
    alt: 'Lorem ipsum dolor sit amet consectetur. Sed amet feugiat egestas elementum convallis.',
  };

  const  event = {
    id: 1,
    title: "Sample Event",
    date: "2024-12-15",
    location: "New York City",
    description: "This is a description of the sample event.",
    image: {
      src: './assets/image-4_3.png',
      alt: "Sample event image"
    },
    link: {
        icon: 'arrow-long-right', linkLabel: 'https://www.google.com' 
      
    }
  }
export const Default: Story = {
    
  decorators: [
    (Story) => (
      <button>
        <Story />
      </button>
    ),
  ],
  args: {
event:event,
  } as CardNewsEventsProps,
};
// 

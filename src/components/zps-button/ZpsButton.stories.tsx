import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { Button, zpsButtonVariants } from './ZpsButton';
import { ZpsButtonProps, ZpsButtonVariant } from './zps-button.interface';

const buttonVariantKeys = Object.keys(zpsButtonVariants) as ZpsButtonVariant[];

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    isLoading: {
      control: {
        type: 'boolean',
      },
    },
    variant: {
      control: {
        type: 'select',
        options: buttonVariantKeys,
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: ZpsButtonVariant.Primary,
    label: 'Zps Button',
    title: 'Button title',
    isLoading: false,
    disabled: false,
  } as ZpsButtonProps,
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    const button = canvas.getByRole('button');

    await step('Initial checks', async () => {
      await expect(button).toHaveTextContent('Button');
      await expect(button).toHaveAttribute('title', 'Button title');
      await expect(button).toBeEnabled();
    });

    await step('Focus button with keyboard', async () => {
      await userEvent.tab();
      await expect(button).toHaveFocus();
    });

    await step('Fire click event with keyboard', async () => {
      await userEvent.keyboard('{enter}');
      await expect(button).toHaveFocus();

      await userEvent.keyboard('{space}');
      await expect(button).toHaveFocus();
    });

    await step('Fire click event with mouse', async () => {
      await userEvent.click(button);
      await expect(button).toHaveFocus();
    });

    await step('Blur button with keyboard and check focus', async () => {
      await userEvent.tab();
      await expect(button).not.toHaveFocus();
    });
  },
};

export const IconButton: Story = {
  args: {
    variant: ZpsButtonVariant.Primary,
    label: '',
    title: 'Button title',
    icon: 'alert',
    isLoading: false,
    disabled: false,
  } as ZpsButtonProps,
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    const button = canvas.getByRole('button');

    await step('Initial checks', async () => {
      await expect(button).toHaveAttribute('title', 'Button title');
      await expect(button).toBeEnabled();
    });

    await step('Focus button with keyboard', async () => {
      await userEvent.tab();
      await expect(button).toHaveFocus();
    });

    await step('Fire click event with keyboard', async () => {
      await userEvent.keyboard('{enter}');
      await expect(button).toHaveFocus();

      await userEvent.keyboard('{space}');
      await expect(button).toHaveFocus();
    });

    await step('Fire click event with mouse', async () => {
      await userEvent.click(button);
      await expect(button).toHaveFocus();
    });

    await step('Blur button with keyboard and check focus', async () => {
      await userEvent.tab();
      await expect(button).not.toHaveFocus();
    });
  },
};

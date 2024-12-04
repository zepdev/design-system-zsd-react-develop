import type { Meta, StoryObj } from '@storybook/react';
import zepCatLogo from '../../assets/zep-cat-logo.svg';
import { Navigation } from './Navigation';
import { NavigationProps } from './navigation.interface';

const meta = {
  title: 'Components/Navigation',
  component: Navigation,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

const locales = [
  { label: 'Deutsch (DE)', value: 'de', country: 'Germany (Deutschland)' },
  { label: 'English (EN)', value: 'en', country: 'Germany (Deutschland)' },
  { label: 'Deutsch (AT)', value: 'de-AT', country: 'Austria (Österreich)' },
];

export const Default: Story = {
  args: {
    logo: zepCatLogo,
    navigationItems: [
      {
        navId: '1',
        label: 'Marine',
        link: '/home',
        children: [
          {
            navId: '1',
            label: 'Marine 1',
            link: '',
            children: [
              {
                id: '1',
                label: 'Marine 1-1',
                children: [{ label: 'Marine 1-1-1', link: 'https://www.google.co.uk/' }],
              },
              { label: 'Marine 1-2' },
            ],
          },
        ],
      },
      { id: '2', label: 'Strom & Wärme', children: [{ label: 'Strom 1' }] },
      { id: '3', label: 'Industrie', children: [{ label: 'Industrie 1' }] },
      { id: '4', label: 'Öl & Gas' },
      { id: '5', label: 'Schiene' },
      { id: '6', label: 'Gebrauchtmaschinen' },
    ],
    locales: locales,
    selectedLocale: locales[0],
    navigationUtilityItems: [{ label: 'Services' }, { label: 'Unternehmen' }, { label: 'Kontakt & Standorte' }],
  } as NavigationProps,
};

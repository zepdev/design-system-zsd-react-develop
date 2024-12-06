import { StoryObj } from '@storybook/react';
import { AnchorNavigationCardProps, AnchorNavigationVariant } from './anchor-navigation-card.interface';

declare const meta: {
    title: string;
    component: import('react').FC<AnchorNavigationCardProps>;
    tags: string[];
    argTypes: {
        isLoading: {
            control: {
                type: string;
            };
        };
        variant: {
            control: {
                type: string;
                options: AnchorNavigationVariant[];
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
//# sourceMappingURL=AnchorNavigationCard.stories.d.ts.map
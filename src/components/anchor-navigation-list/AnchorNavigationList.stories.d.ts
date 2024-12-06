import { StoryObj } from '@storybook/react';
import { AnchorNavigationListProps } from './anchor-navigation-list.interface';

declare const meta: {
    title: string;
    component: import('react').FC<AnchorNavigationListProps>;
    tags: string[];
    argTypes: {
        isLoading: {
            control: {
                type: string;
            };
        };
        headlines: {
            control: {
                type: string;
            };
        };
        variant: {
            control: {
                type: string;
                options: string[];
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const With2Items: Story;
export declare const With3Items: Story;
export declare const With4Items: Story;
export declare const With5Items: Story;
export declare const With6Items: Story;
export declare const With7Items: Story;
export declare const With8Items: Story;
//# sourceMappingURL=AnchorNavigationList.stories.d.ts.map
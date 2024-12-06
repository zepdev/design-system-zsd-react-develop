import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: import('react').FC<import('./LinkListItem.interface').LinkListItemProps>;
    tags: string[];
    argTypes: {
        theme: {
            children: {
                control: {
                    type: string;
                    options: string[];
                };
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
//# sourceMappingURL=LinkListItem.stories.d.ts.map
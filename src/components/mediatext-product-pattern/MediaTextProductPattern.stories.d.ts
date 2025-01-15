import { StoryObj } from '@storybook/react';
import { MediaTextProductPatternProps } from './mediatext-product-pattern.interface';

declare const meta: {
    title: string;
    component: import('react').FC<MediaTextProductPatternProps>;
    tags: string[];
    argTypes: {
        items: {
            control: {
                type: string;
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
//# sourceMappingURL=MediaTextProductPattern.stories.d.ts.map
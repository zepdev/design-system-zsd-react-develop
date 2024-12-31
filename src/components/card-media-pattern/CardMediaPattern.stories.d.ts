import { StoryObj } from '@storybook/react';
import { CardMediaPatternProps } from './CardMediaPattern.interface';

declare const meta: {
    title: string;
    component: import('react').FC<CardMediaPatternProps>;
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
//# sourceMappingURL=CardMediaPattern.stories.d.ts.map
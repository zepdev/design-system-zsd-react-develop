import { StoryObj } from '@storybook/react';
import { RichTextProps } from './richText.interface';

declare const meta: {
    title: string;
    component: ({ content, children, textColor }: RichTextProps) => import("react/jsx-dev-runtime").JSX.Element;
    tags: string[];
    argTypes: {
        textColor: {
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
//# sourceMappingURL=RichText.stories.d.ts.map
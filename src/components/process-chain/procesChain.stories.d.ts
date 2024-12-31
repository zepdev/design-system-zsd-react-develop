import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: ({ linkChain, contentItems }: {
        linkChain: any;
        contentItems: any;
    }) => import("react/jsx-dev-runtime").JSX.Element;
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const LinkChain: Story;
export declare const ListChain: Story;
//# sourceMappingURL=procesChain.stories.d.ts.map
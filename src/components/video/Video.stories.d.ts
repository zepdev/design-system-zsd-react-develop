import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: ({ video }: import('./video.interface').VideoProps) => import("react/jsx-dev-runtime").JSX.Element;
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
//# sourceMappingURL=Video.stories.d.ts.map
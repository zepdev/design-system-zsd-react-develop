import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: ({ variant, headline, buttonSecondary, buttonPrimary, buttonPrimaryOnClick, buttonSecondaryOnClick, imageAlt, imageSrc, }: import('./hero.interface').HeroProps) => import("react/jsx-dev-runtime").JSX.Element;
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const HeroSimple: Story;
//# sourceMappingURL=Hero.stories.d.ts.map
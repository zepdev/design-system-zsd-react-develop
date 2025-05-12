import { BlocksContent } from '@strapi/blocks-react-renderer';
import { MouseEvent } from 'react';
import { LinkTarget } from '@zepdev/design-system-component-library-react';

export interface LinkComponentProps {
    linkText?: string;
    linkHref?: string;
    type?: 'primary-button' | 'secondary-button' | 'link' | 'none';
    onClick?: (ev: MouseEvent<HTMLElement>) => void;
    target?: LinkTarget;
}
export interface HeaderLongComponentProps extends LinkComponentProps {
    tagline?: string;
    headline: string;
    description?: BlocksContent;
}
//# sourceMappingURL=HeaderLongComponent.interface.d.ts.map
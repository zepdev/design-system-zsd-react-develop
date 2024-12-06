import { FunctionalIconNames } from '@zepdev/design-system-component-library-react';
import { HTMLAttributes } from 'react';

export interface LinkItem {
    icon: FunctionalIconNames;
    link: string;
}
export interface ContentItem {
    headline: string;
    linkItems?: LinkItem[];
    listItems?: string[];
}
export interface ProcessChainProps extends HTMLAttributes<HTMLDivElement> {
    contentItems: ContentItem[];
    linkChain: boolean;
}
//# sourceMappingURL=processChain.interface.d.ts.map
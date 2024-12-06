import { ReactNode } from 'react';

export declare enum AnchorNavigationVariant {
    Zps = "ZPS",
    Cat = "CAT"
}
export interface AnchorNavigationCardProps {
    headline: string;
    linkLabel: string;
    scrollToIdLink: string;
    variant: AnchorNavigationVariant;
    isLoading?: boolean;
    children?: ReactNode;
    className?: string;
}
//# sourceMappingURL=anchor-navigation-card.interface.d.ts.map
import { MouseEvent } from 'react';
import { GlobalVariants } from '../../interfaces/global-variants';

export interface HeroProps extends HeroImageProps {
    variant?: GlobalVariants;
    headline: string;
    buttonPrimary: string;
    buttonSecondary?: string;
    buttonPrimaryOnClick: (ev: MouseEvent<HTMLElement>) => void;
    buttonSecondaryOnClick?: (ev: MouseEvent<HTMLElement>) => void;
}
export interface HeroImageProps {
    imageSrc?: string;
    imageAlt?: string;
}
export interface HeroHeadlineProps {
    children: string;
}
//# sourceMappingURL=hero.interface.d.ts.map
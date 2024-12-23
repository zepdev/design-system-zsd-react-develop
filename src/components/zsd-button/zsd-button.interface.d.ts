import { ButtonHTMLAttributes, MouseEvent, ReactNode } from 'react';
import { FunctionalIconNames } from '@zepdev/design-system-component-library-react';

export declare enum ZpsButtonVariant {
    PrimaryDark = "primary-dark",
    SecondaryDark = "secondary-dark",
    SecondaryLight = "secondary-light",
    PrimaryLight = "primary-light"
}
export interface ZpsButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    label?: string;
    variant?: ZpsButtonVariant;
    icon?: FunctionalIconNames;
    iconPosition?: 'left' | 'right';
    isLoading?: boolean;
    children?: ReactNode;
    onClick?: (ev: MouseEvent<HTMLElement>) => void;
}
//# sourceMappingURL=zsd-button.interface.d.ts.map
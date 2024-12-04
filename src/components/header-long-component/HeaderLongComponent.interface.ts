import { MouseEvent } from 'react';
import { GlobalVariantExtended, GlobalVariants } from '../../interfaces/global-variants';

export interface LinkComponentProps {
  linkText?: string;
  linkHref?: string;
  type?: 'button' | 'link' | 'none';
  onClick?: (ev: MouseEvent<HTMLElement>) => void;
  variant?: GlobalVariants | GlobalVariantExtended;
}

export interface HeaderLongComponentProps extends LinkComponentProps {
  tagline?: string;
  headline: string;
  description?: string;
}

import { HTMLAttributes, ReactNode } from 'react';
import { GlobalVariants } from '../../interfaces/global-variants';

export interface CardSquareProps extends HTMLAttributes<HTMLDivElement> {
  imageSrc: string;
  imageAlt: string;
  headline: string;
  description?: string;
  hideDescription?: boolean;
  children?: ReactNode;
  variant?: GlobalVariants;
  isCardSquarePattern?: boolean;
  cardListsLength?: number | undefined;
}

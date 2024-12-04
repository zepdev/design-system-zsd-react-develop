import { ReactNode } from '~/@types/react';
import { GlobalVariants } from '../../interfaces/global-variants';
import { CardSquareProps } from '../card-square/card-square.interface';

export interface CardSquareListProps {
  headlines: Omit<CardSquareProps, 'variant'>[];
  imageSrc: string;
  imageAlt: string;
  children?: ReactNode;
  variant?: GlobalVariants;
  cardListsLength?: number;
}

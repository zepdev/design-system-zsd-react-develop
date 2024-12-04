import { ReactNode } from 'react';
import { AnchorNavigationCardProps } from '../anchor-navigation-card';
import { AnchorNavigationVariant } from '../anchor-navigation-card/anchor-navigation-card.interface';

export interface AnchorNavigationListProps {
  headlines: Omit<AnchorNavigationCardProps, 'variant'>[];
  variant: AnchorNavigationVariant;
  isLoading?: boolean;
  children?: ReactNode;
  className?: string;
}

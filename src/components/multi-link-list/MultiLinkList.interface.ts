import { HTMLAttributes } from 'react';
import { LinkListItemProps } from '../link-list-item';
import { GlobalVariantExtended, GlobalVariants } from '../../interfaces/global-variants';

export interface MultiLinkListProps extends HTMLAttributes<HTMLDivElement> {
  linkLists: LinkListItemProps[],
  headline?: string,
  variant?: GlobalVariants | GlobalVariantExtended,
}

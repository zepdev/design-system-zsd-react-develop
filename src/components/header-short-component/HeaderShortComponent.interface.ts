import { GlobalVariantExtended, GlobalVariants } from '../../interfaces/global-variants';

export interface HeaderShortComponentProps {
  variant?: GlobalVariants | GlobalVariantExtended;
  hasBackground?: boolean;
  showArrow?: boolean;
  tagline?: string;
  headline?: string;
  className?: string;
}

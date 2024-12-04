import { GlobalVariants } from '../../interfaces/global-variants';
import { USPProps } from '../USP/usp.interface';

export interface USPListProps {
  headerTitle: string;
  tagline?: string;
  variant?: GlobalVariants;
  uspCards?: USPProps[];
}

import { CardMediaProps } from '../card-media-component';
import { HeaderLongProps } from '../header-long';
import { GlobalVariants } from '../../interfaces/global-variants';

export interface CardMediaPatternProps extends Omit<HeaderLongProps, 'textColor' | 'type'> {
  cards: CardMediaProps[],
  className?: string,
  variant?: GlobalVariants,
  imageOrientation?: 'horizontal' | 'vertical',
}

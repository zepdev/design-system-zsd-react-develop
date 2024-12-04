import React from 'react';
import { clsx } from 'clsx';
import { GlobalVariantExtended, GlobalVariants } from '../../interfaces/global-variants';
import { HeaderShortProps } from './headershort.interface';
import { HeaderShortComponent } from '../header-short-component';

export const HeaderShort: React.FC<HeaderShortProps> = ({ className, variant = GlobalVariants.Zps, ...props }) => {
const colSpanByArrow = props.showArrow ? 'md:zep-col-span-6' : 'md:zep-col-span-5';
  const backgroundColor = {
    'zep-bg-gradient-to-r zep-from-[rgb(32,27,52)] zep-to-[rgb(32,23,94)]': variant === GlobalVariantExtended.ZpsBg,
    'zep-bg-background-dark': variant === GlobalVariantExtended.CatBg,
  }

  const paddingByVariant = variant === GlobalVariantExtended.CatBg || variant === GlobalVariantExtended.ZpsBg
    ? 'md:zep-py-5 sm:zep-py-4 zep-py-3'
    : ''

  return (
    <div
      className={clsx(
        'zep-container',
        'zep-grid',
        'zep-gap-1',
        'sm:zep-gap-1.5',
        'md:zep-gap-2',
        'zep-grid-cols-4',
        'sm:zep-grid-cols-8',
        'md:zep-grid-cols-16',
        backgroundColor,
        paddingByVariant,
        className,
      )}
      data-testid="header-short"
    >
      <HeaderShortComponent
        {...props}
        variant={variant}
        className={clsx(
          'zep-col-span-4',
          'sm:zep-col-span-8',
          'md:zep-col-start-2',
          'zep-px-1',
          'sm:zep-px-1.5',
          'md:zep-px-[0px]',
          colSpanByArrow,
        )}
      />
    </div>
  );
};

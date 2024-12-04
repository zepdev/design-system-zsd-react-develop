import React from 'react';
import { clsx } from 'clsx';
import { HeaderLongProps } from './headerlong.interface';
import { HeaderLongComponent } from '../header-long-component';
import { GlobalVariantExtended, GlobalVariants } from '../../interfaces/global-variants';

// Header Long Pattern
export const HeaderLong = ({ variant = GlobalVariants.Zps, ...rest }: HeaderLongProps) => {
  const backgroundColor = {
    'zep-bg-gradient-to-r zep-from-[rgb(32,27,52)] zep-to-[rgb(32,23,94)]': variant === GlobalVariantExtended.ZpsBg,
    'zep-bg-background-dark': variant === GlobalVariantExtended.CatBg,
  }

  const paddingByVariant = variant === GlobalVariantExtended.CatBg || variant === GlobalVariantExtended.ZpsBg
    ? 'md:zep-px-[0px] sm:zep-px-1.5 zep-px-1 zep-pb-2 zep-pt-3 sm:zep-pt-4 sm:zep-pb-3 md:zep-pb-4 md:zep-pt-5'
    : ''

  return (
    <div
      className={clsx(
        'zep-grid',
        'zep-grid-cols-4',
        'sm:zep-grid-cols-8',
        'md:zep-grid-cols-16',
        'zep-max-w-[1920px]',
        'zep-gap-1',
        'sm:zep-gap-1.5',
        'xl:zep-gap-2',
        backgroundColor,
      )}
      data-testid="zep-header-long"
    >
      <div className={
        clsx(
          'zep-col-span-4',
          'sm:zep-col-span-8',
          'md:zep-col-start-2',
          'md:zep-col-span-14',
          paddingByVariant,
        )
      }>
        <HeaderLongComponent {...rest} variant={variant} />
      </div>
    </div>
  );
};

import React from 'react';
import clsx from 'clsx';
import { CardMedia } from '../card-media-component';
import { CardMediaPatternProps } from './CardMediaPattern.interface';
import { HeaderLongComponent } from '../header-long-component';
import { GlobalVariants } from '../../interfaces/global-variants';

export const CardMediaPattern: React.FC<CardMediaPatternProps> = ({
  className,
  cards,
  variant = GlobalVariants.Zps,
  imageOrientation = 'horizontal',
  ...headerLongComponentProps
}) => {
  const cardsList = cards.map((card) => ({ ...card, imageOrientation }));

  return (
    <div
      className={clsx(
        'zep-bg-background-medium',
        'zep-flex',
        'zep-flex-col',
        'xl:zep-gap-4',
        'sm:zep-gap-3',
        'zep-gap-2',
        'zep-items-start',
        'zep-py-3',
        'sm:zep-py-4',
        'md:zep-py-5',
        'zep-px-1',
        'sm:zep-px-1.5',
        'md:zep-px-[66px]',
        'xl:zep-px-[122px]',
        'zep-w-full',
        'zep-max-w-[1920px]',
      )}
    >
      <HeaderLongComponent type="link" {...headerLongComponentProps} variant={variant} />
      <div data-testid="cards-container" className={clsx('zep-w-full', 'zep-overflow-x-auto')}>
        <div className={clsx('zep-flex', 'zep-gap-1', 'sm:zep-gap-1.5', 'xl:zep-gap-2', 'zep-w-fit')}>
          {cardsList.map((card) => (
            <CardMedia {...card} variant={variant} />
          ))}
        </div>
      </div>
    </div>
  );
}

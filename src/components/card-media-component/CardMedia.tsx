import { clsx } from 'clsx';
import { Link, LinkMode } from '@zepdev/design-system-component-library-react';
import { CardMediaProps } from './cardmedia.interface';
import React from 'react';
import { GlobalVariants } from '../../interfaces/global-variants';

export const CardMedia: React.FC<CardMediaProps> = ({
  imageSrc,
  imageAlt,
  imageOrientation = 'horizontal',
  className,
  headline,
  linkSrc,
  linkText,
  description,
  variant = GlobalVariants.Zps,
}: CardMediaProps) => {
  const textColorClass = variant === GlobalVariants.Zps ? 'zep-text-primary-default' : 'zep-text-typography-dark-100';
  const imageHeightClass = imageOrientation === 'horizontal' ? 'zep-h-[116px] md:zep-h-[132px] xl:zep-h-[148px]' : 'zep-aspect-[100/141]';

  return (
    <div
      className={clsx(
        'zep-px-1.5',
        'md:zep-px-2',
        'xl:zep-px-3',
        'zep-py-2',
        'xl:zep-py-3',
        'zep-flex',
        'zep-flex-col',
        'zep-gap-2',
        'zep-bg-greyscale-0',
        'zep-w-[280px]',
        'md:zep-max-w-[330px]',
        'md:zep-min-w-[300px]',
        'xl:zep-w-[537px]',
        'xl:zep-max-w-[537px]',
        className,
      )}
      data-testid="card-media"
    >
      <img
        src={imageSrc}
        alt={imageAlt}
        className={clsx(
          imageHeightClass,
          'zep-w-full',
          'xl:zep-max-w-[377px]',
          'xl:zep-mx-2',
          'zep-object-cover',
        )}
        data-testid="card-media-image"
      />
      <div className={clsx('zep-flex', 'zep-flex-col', 'zep-gap-1', 'zep-items-start')}>
        <h4
          className={clsx('zep-typography-headlineXS-fluid-cqi', 'zep-break-all', textColorClass)}
          data-testid="card-media-headline"
        >
          {headline}
        </h4>
        <p
          className={clsx('zep-typography-bodyText', 'zep-break-words', textColorClass)}
          data-testid="card-media-description"
        >
          {description}
        </p>
      </div>
      <Link data-testid="card-media-link" label={linkText} href={linkSrc} mode={LinkMode.Standalone} className={clsx(textColorClass)} />
    </div>
  );
};

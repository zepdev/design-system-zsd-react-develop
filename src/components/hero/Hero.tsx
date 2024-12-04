import { Spacing } from '@zepdev/design-system-component-library-react';
import clsx from 'clsx';
import { GlobalVariants } from '../../interfaces/global-variants';
import { Button } from '../zps-button/ZpsButton';
import { ZpsButtonVariant } from '../zps-button/zps-button.interface';
import {
  HeroHeadlineProps,
  HeroImageProps,
  HeroProps,
} from './hero.interface';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import arrowImg from '../../../public/assets/moving-forward-arrow.svg';

const heroThemes = {
  [GlobalVariants.Zps]: ['zep-bg-gradient-to-r zep-from-[rgb(32,27,52)] zep-to-[rgb(32,23,94)]'],
  [GlobalVariants.Cat]: ['zep-bg-typography-dark-100'],
};
//comment to fix wrong commits for release
const heroCva = cva(
  [
    ` 
      zep-px-1.5
      zep-py-2
      sm:zep-px-2.5
      sm:zep-py-3
      md:zep-px-[65px]
      md:zep-py-4
      xl:zep-py-5
      xl:zep-px-[122px]
      zep-items-center
      zep-w-full
      zep-relative
    `
  ],
  {
    variants: {
      variant: heroThemes,
    },
    defaultVariants: {
      variant: GlobalVariants.Zps,
    },
  },
);

const HeroImage = ({ imageSrc, imageAlt }: HeroImageProps) => {
  if (imageSrc === undefined) {
    return null;
  }

  return (
    <img
      alt={imageAlt}
      src={imageSrc}
      data-testid="zep-newhero-image"
      className={clsx(
        'zep-w-full',
        'zep-object-cover',
        'zep-h-auto',
        'sm:zep-h-[380px]',
        'xl:zep-h-[540px]',
      )}
    />
  );
};

const HeroHeader = ({ children }: HeroHeadlineProps) => {
  return (
    <h4
      data-testid="new-hero-headline"
      className={clsx(
        'zep-typography-headlineLG',
        'zep-typography-headline2XL-fluid-cqi',
        'supports-cqi:zep-typography-headline2XL-fluid-cqi',
        'zep-text-typography-light-100',
        'supports-cqi:after:zep-text-[0.23em]',
        'zep-mb-2',
        'zep-col-span-1',
      )}
    >
      {children}
    </h4>
  );
};

const HeroIconArrow = () => {
  return (
    <div className="zep-w-full zep-absolute zep-left-[0px] zep-bottom-[0px] zep-hidden md:zep-block">
      <img
        src={arrowImg}
        alt="arrow"
        width="18.75%"
        data-testid="zep-her-arrowIcon"
        className={clsx(
          'zep-absolute',
          'zep-right-1',
          'zep-mr-[3%]',
          'zep-top-[50%]',
          'zep-translate-y-[-50%]',
        )}
      />
    </div>
  );
};

export const Hero = ({
  variant = GlobalVariants.Zps,
  headline,
  buttonSecondary,
  buttonPrimary,
  buttonPrimaryOnClick,
  buttonSecondaryOnClick,
  imageAlt,
  imageSrc,
}: HeroProps) => {
  return (
    <div
      className={clsx(
        'zep-flex-col',
        'zep-rounded-lg',
        'zep-shadow-lg',
        'md:zep-flex',
        'zep-relative',
        'zep-max-w-[1920px]',
        'zep-mx-auto',
      )}
      data-testid="zep-newhero"
    >
      <HeroImage imageSrc={imageSrc} imageAlt={imageAlt} />
      <div data-testid="zep-newhero-body" className={twMerge(heroCva({ variant }))}>
        <HeroHeader>{headline}</HeroHeader>
        <div className="zep-block" data-testid="zep-new-herobutton">
          <Spacing className={clsx('max-md:zep-flex', 'sm:zep-flex-row', 'zep-gap-1')} direction="column">
            <Button data-testid="zep-hero-primary-button" label={buttonPrimary} variant={ZpsButtonVariant.Primary} onClick={buttonPrimaryOnClick} />
            {buttonSecondary
              ? <Button data-testid="zep-hero-secondary-button" label={buttonSecondary} variant={ZpsButtonVariant.Secondary} onClick={buttonSecondaryOnClick} />
              : null}
          </Spacing>
        </div>
        <HeroIconArrow />
      </div>
    </div>
  );
};

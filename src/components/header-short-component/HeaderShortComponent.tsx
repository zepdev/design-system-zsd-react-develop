import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';
import arrowImg from '../../../public/assets/moving-forward-arrow.svg';
import { GlobalVariantExtended, GlobalVariants } from '../../interfaces/global-variants';
import { HeaderShortComponentProps } from './HeaderShortComponent.interface';

const headerShortHeadlineVariants = {
  [GlobalVariantExtended.ZpsBg]: ['zep-text-typography-light-100'],
  [GlobalVariantExtended.CatBg]: ['zep-text-typography-light-100'],
  [GlobalVariants.Zps]: ['zep-text-indigo-500'],
  [GlobalVariants.Cat]: ['zep-text-typography-dark-100'],
};

const headerShortTaglineVariants = {
  [GlobalVariants.Zps]: ['zep-text-typography-brand-steel'],
  [GlobalVariants.Cat]: ['zep-text-typography-dark-70 zep-opacity-70'],
  [GlobalVariantExtended.CatBg]: ['zep-text-typography-light-70 zep-opacity-70'],
  [GlobalVariantExtended.ZpsBg]: ['zep-text-typography-brand-steel'],
};

const headlineClass = cva([`zep-typography-headlineLG-fluid-cqi zep-break-all`], {
  variants: {
    variant: headerShortHeadlineVariants,
  },
  defaultVariants: {
    variant: GlobalVariants.Zps,
  },
});

const taglineClass = cva(['zep-mb-0.5 zep-typography-taglineMD zep-break-all'], {
  variants: {
    variant: headerShortTaglineVariants,
  },
  defaultVariants: {
    variant: GlobalVariants.Zps,
  },
});

export const HeaderShortComponent = ({
  tagline,
  headline,
  showArrow,
  className,
  variant = GlobalVariants.Zps,
}: HeaderShortComponentProps) => {
  return (
    <div
      className={clsx(
        'zep-flex',
        'zep-@container',
        'zep-items-center',
        'xl:zep-gap-3.5',
        'md:zep-gap-1.5',
        'sm:zep-gap-2.5',
        'zep-gap-1.5',
        className,
      )}
      data-testid="header-short-component"
    >
      {showArrow ? (
        <img
          className={clsx('zep-h-4', 'sm:zep-h-5', 'md:zep-h-4', 'xl:zep-h-[100px]', 'zep-w-auto')}
          alt="forward arrow"
          src={arrowImg}
        />
      ) : null}
      <div className="zep-w-full">
        {tagline ? (
          <h3 className={clsx(taglineClass({ variant }), 'zep-mb-0.5', 'zep-typography-taglineMD', 'zep-break-all')}>
            {tagline}
          </h3>
        ) : null}
        <h2 className={headlineClass({ variant })}>{headline}</h2>
      </div>
    </div>
  );
};

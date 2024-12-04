import React from 'react';
import { Link, LinkMode } from '@zepdev/design-system-component-library-react';
import { clsx } from 'clsx';
import { Button, ZpsButtonVariant } from '../zps-button';
import { HeaderLongComponentProps, LinkComponentProps } from './HeaderLongComponent.interface';
import { GlobalVariantExtended, GlobalVariants } from '../../interfaces/global-variants';

const LinkComponent = ({
  type,
  linkHref,
  linkText,
  onClick,
  variant,
}: LinkComponentProps) => {
  const linkClass = {
    'zep-text-yellow-500': variant === GlobalVariantExtended.ZpsBg || variant === GlobalVariantExtended.CatBg,
    'zep-text-typography-dark-100': variant === GlobalVariants.Cat,
    'zep-text-indigo-500': GlobalVariants.Zps,
  }

  switch (type) {
    case 'link':
      return (
        <Link
          className={clsx(
            linkClass,
            'zep-h-fit',
            'zep-font-400',
            'zep-whitespace-nowrap',
            'hover:zep-underline',
            'hover:zep-font-500',
            'zep-cursor-pointer',
          )}
          label={linkText || ''}
          hasIcon={true}
          href={linkHref}
          mode={LinkMode.Standalone}
        />
      )
    case 'button':
      return (
        <Button
          className="zep-whitespace-nowrap sm:zep-w-fit zep-h-fit"
          label={linkText}
          onClick={onClick}
          variant={ZpsButtonVariant.Primary}
        />
      )
    default:
      return null;
  }
}

export const HeaderLongComponent: React.FC<HeaderLongComponentProps> = ({
  tagline,
  headline,
  description,
  variant = GlobalVariants.Zps,
  ...linkProps
}) => {
  const containerClass = {
    'zep-text-typography-light-100': variant === GlobalVariantExtended.ZpsBg || variant === GlobalVariantExtended.CatBg,
    'zep-text-typography-dark-100': variant === GlobalVariants.Cat,
    'zep-text-indigo-500': variant === GlobalVariants.Zps,
  }

  const taglineClass = {
    'zep-text-steel-500': variant === GlobalVariants.Zps || variant === GlobalVariantExtended.ZpsBg,
    'zep-text-typography-dark-70 zep-opacity-70': variant === GlobalVariants.Cat,
    'zep-text-typography-light-70 zep-opacity-70': variant === GlobalVariantExtended.CatBg,
  }

  return (
    <div
      className={clsx('zep-w-full', 'zep-flex', 'zep-flex-col', 'zep-gap-1.5', 'md:zep-gap-2.5', 'zep-items-start')}
      data-testid="header-long"
    >
      <div className={clsx('zep-w-full', 'zep-flex', 'zep-flex-col', 'zep-gap-0.5', 'zep-items-start')}>
        <h3 className={clsx(taglineClass, 'zep-typography-taglineMD', 'zep-break-all')}>{tagline}</h3>
        {/* headline and Button/Link wrapper */}
        <div className={clsx(
          'zep-w-full',
          'zep-flex',
          'zep-flex-col',
          'xl:zep-flex-row',
          'xl:zep-justify-between',
          'xl:zep-gap-2',
          'zep-gap-1.5',
        )}>
          <h2
            className={clsx(
              containerClass,
              'zep-max-w-[944px]',
              'zep-break-all',
              'zep-typography-headlineLG-fluid-cqi',
              'zep-text-start',
            )}
          >
            {headline}
          </h2>
          {/* Button or Link or None */}
          <LinkComponent {...linkProps} variant={variant} />
        </div>
      </div>
      <p className={clsx(containerClass, 'zep-text-start', 'zep-max-w-[944px]', 'zep-break-all')}>{description}</p>
    </div>
  );
}

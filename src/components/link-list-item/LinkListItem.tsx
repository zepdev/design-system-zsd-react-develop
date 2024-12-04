import clsx from 'clsx';
import React from 'react';
import { GlobalVariantExtended, GlobalVariants } from '../../interfaces/global-variants';
import { Accordion, Link, LinkMode, LinkTarget } from '@zepdev/design-system-component-library-react';
import { LinkListItemProps } from '.';
import { cva } from 'class-variance-authority';

const textColorVariants = {
  [GlobalVariants.Zps]: 'zep-text-primary-default',
  [GlobalVariants.Cat]: 'zep-text-typography-dark-100',
  [GlobalVariantExtended.ZpsBg]: 'zep-text-typography-light-100',
  [GlobalVariantExtended.CatBg]: 'zep-text-typography-light-100',
}

const textColorClass = cva([],{
  variants: {
    variant: textColorVariants,
  },
  defaultVariants: {
    variant: GlobalVariants.Zps,
  }
})

const Headline = ({ variant, headline }: Partial<LinkListItemProps>) => {
  if (headline) {
    return (
      <h4
        data-testid="link-list-headline"
        className={clsx('zep-typography-headlineSM-fluid-cqi', 'zep-break-all', textColorClass({ variant }))}
      >
        {headline}
      </h4>
    )
  }

  return null;
}

const Description = ({ variant, description }: Partial<LinkListItemProps>) => {
  if (description) {
    return (
      <p
        data-testid="link-list-description"
        className={clsx('zep-typography-bodyText', 'zep-break-all', textColorClass({ variant }))}
      >
        {description}
      </p>
    )
  }

  return null;
}

const Links = ({ links, variant }: LinkListItemProps) => {
  return (
    <div
      data-testid="link-list-links"
      className={clsx(
        'zep-flex',
        'zep-flex-col',
        'zep-gap-1',
        textColorClass({ variant }),
      )}
    >
      {links.map((link, index) => (
        <Link
          key={index}
          label={link.label}
          icon={link.icon}
          href={link.href}
          iconPlacement="before"
          hasIcon
          target={LinkTarget.Blank}
          mode={LinkMode.Inline}
        />
      ))}
    </div>
  );
}

export const LinkListItem: React.FC<LinkListItemProps> = ({
  headline,
  description,
  variant = GlobalVariants.Zps,
  links,
  isMultiListItem = false,
  className,
}) => {
  const linkList = links.length > 15 ? links.slice(0, 15) : links;
  const widthClass = isMultiListItem
    ? 'md:zep-flex zep-hidden zep-min-w-[280px]'
    : 'zep-flex zep-max-w-[774px] zep-min-w-[290px]';
  const linkListItemBg = variant === GlobalVariants.Cat || variant === GlobalVariants.Zps
    ? 'zep-bg-background-medium' : '';

  return (
    <>
      <div
        className={clsx(
          'zep-gap-1.5',
          'zep-p-1.5',
          'sm:zep-p-2',
          'md:zep-p-2.5',
          'zep-flex-col',
          'zep-items-start',
          textColorClass({ variant }),
          linkListItemBg,
          widthClass,
          className,
        )}
        data-testid="zep-link-list"
      >
        <Headline headline={headline} variant={variant} />
        <Description description={description} variant={variant} />
        <Links links={linkList} variant={variant} />
      </div>
      <Accordion
        className={clsx(
          'zep-w-full',
          {
            'zep-hidden': !isMultiListItem,
            'md:zep-hidden zep-min-w-[280px] zep-border-none': isMultiListItem,
          },
          textColorClass({ variant }),
          linkListItemBg,
          className,
        )}
        items={[{
          title: headline || '',
          content: (
            <div className="zep-flex zep-flex-col zep-gap-1">
              <Description description={description} variant={variant} />
              <Links links={linkList} variant={variant} />
            </div>
          )
        }]}
      />
    </>
  );
};

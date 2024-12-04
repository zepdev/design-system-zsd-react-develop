import React from 'react';
import clsx from 'clsx';
import { Link, LinkMode } from '@zepdev/design-system-component-library-react';
import { FooterProps } from './Footer.interface';
import { MultiLinkList } from '../multi-link-list';
import { GlobalVariantExtended } from '../../interfaces/global-variants';

export const Footer: React.FC<FooterProps> = ({
  socialMediaLinks,
  socialMediaTitle,
  footerLinks,
  ...multiLinkListProps
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <div
      className={clsx(
        'zep-w-full',
        'zep-max-w-[1920px]',
        'zep-pt-1',
        'md:zep-pt-4',
        'xl:zep-pt-5',
        'zep-bg-background-dark',
      )}
      data-testid={'zep-footer'}
    >
      <MultiLinkList {...multiLinkListProps} variant={GlobalVariantExtended.CatBg} />
      <div className={clsx(
        'zep-grid',
        'zep-grid-cols-4',
        'sm:zep-grid-cols-8',
        'md:zep-grid-cols-16',
        'zep-gap-1',
        'sm:zep-gap-1.5',
        'xl:zep-gap-2',
        'zep-max-w-[1920px]',
      )}>
        <div className="zep-flex zep-flex-col zep-w-full md:zep-col-start-2 md:zep-col-span-14 sm:zep-col-span-8 zep-col-span-4">
          <div className="xl:zep-pt-4 md:zep-py-3 zep-py-1.5 sm:zep-py-2.5 sm md:zep-px-[0px] zep-px-0.5 sm:zep-px-1 zep-flex zep-items-center zep-gap-2.5">
            <p className="zep-text-typography-light-100 zep-typography-headlineXS-fluid-cqi">{socialMediaTitle}</p>
            <div className="zep-flex zep-gap-1">
              {socialMediaLinks.map((link) => (
                <div
                  className="zep-rounded-full zep-bg-background-light zep-h-1.5 zep-w-1.5 zep-flex zep-items-center zep-justify-center">
                  <Link label="" icon={link.icon} href={link.href} hasIcon target={link.target} />
                </div>
              ))}
            </div>
          </div>
          <div className="zep-flex xl:zep-flex-row zep-flex-col md:zep-px-[0px] zep-px-1.5 xl:zep-items-center xl:zep-gap-5 zep-gap-1 zep-py-1.5 zep-border-t-1 zep-border-t-greyscale-700 zep-w-full">
            <p className="zep-text-greyscale-0 zep-typography-bodyText">{`© ${currentYear} Zeppelin Power Systems GmbH`}</p>
            <div className="zep-flex sm:zep-gap-3 zep-gap-1 sm:zep-items-center sm:zep-flex-row sm:zep-flex-wrap zep-flex-col">
              {footerLinks.map((link) => (
                <Link className="zep-text-greyscale-0" hasIcon={false} label={link.label} mode={LinkMode.Inline} target={link.target} href={link.href} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

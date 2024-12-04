import { clsx } from 'clsx';
import { FC } from 'react';
import { GlobalVariants } from '../../interfaces/global-variants';
import { HeaderShortComponent } from '../header-short-component';
import { LinkListItem } from '../link-list-item';
import { SingleLinkListProps } from './SingleLinkList.interface';

export const SingleLinkList: FC<SingleLinkListProps> = ({
  headline,
  links,
  description,
  variant = GlobalVariants.Zps,
  title,
}) => {
  return (
    <div
      className={clsx(
        'zep-grid',
        'zep-grid-cols-4',
        'sm:zep-grid-cols-8',
        'md:zep-grid-cols-16',
        'zep-gap-y-1.5',
        'sm:zep-gap-y-2',
        'zep-gap-x-1',
        'sm:zep-gap-x-1.5',
        'xl:zep-gap-x-2',
        'zep-w-full',
        'zep-px-0.75',
        'sm:zep-px-1.5',
        'md:zep-p-[0px]',
        'zep-items-start',
      )}
    >
      <HeaderShortComponent
        className={clsx(
          'lg:zep-col-start-3',
          'lg:zep-col-span-5',
          'md:zep-col-start-2',
          'md:zep-col-span-6',
          'sm:zep-col-span-8',
          'zep-col-span-4',
        )}
        headline={title}
        variant={variant}
        showArrow={false}
      />
      <div
        className={clsx(
          'zep-col-span-4',
          'sm:zep-col-span-8',
          'md:zep-col-span-8',
          'lg:zep-col-span-7',
          'md:zep-col-start-8',
          'md:zep-ml-1.5',
          'lg:zep-ml-3',
        )}
      >
        <LinkListItem
          className="zep-bg-background-medium"
          links={links}
          headline={headline}
          description={description}
          variant={variant}
        />
      </div>
    </div>
  );
};

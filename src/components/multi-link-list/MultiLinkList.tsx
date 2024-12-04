import { FC } from 'react';
import { clsx } from 'clsx';
import { MultiLinkListProps } from './MultiLinkList.interface';
import { LinkListItem } from '../link-list-item';
import { HeaderShortComponent } from '../header-short-component';
import { GlobalVariants } from '../../interfaces/global-variants';

export const MultiLinkList: FC<MultiLinkListProps> = ({ headline, linkLists, variant = GlobalVariants.Zps }) => {
  const linkListCards = linkLists.length > 10 ? linkLists.slice(0, 10) : linkLists;

  return (
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
      <div
        className={clsx(
          'md:zep-col-start-2',
          'md:zep-col-span-14',
          'zep-col-span-4',
          'sm:zep-col-span-8',
          'zep-flex-col',
          'zep-flex',
          'zep-gap-2',
          'sm:zep-gap-3',
          'xl:zep-gap-4',
        )}
      >
        {headline ? <HeaderShortComponent headline={headline} variant={variant} /> : null}
        <div className={clsx(
          'zep-flex',
          'zep-flex-col',
          'md:zep-grid',
          'zep-gap-1',
          'md:zep-gap-1.5',
          'xl:zep-gap-2',
          'md:zep-grid-flow-row',
          {
            'xl:zep-grid-cols-2': linkLists.length === 2,
            'xl:zep-grid-cols-4': [4, 7, 8].includes(linkLists.length),
            'xl:zep-grid-cols-5': [5, 9, 10].includes(linkLists.length),
            'md:zep-grid-cols-2': [2, 4].includes(linkLists.length),
            'md:zep-grid-cols-3': [3, 5, 6, 7, 8, 9, 10].includes(linkLists.length),
          }
        )}>
          {linkListCards.map((linkListProps) => (
            <LinkListItem
              {...linkListProps}
              variant={variant}
              isMultiListItem
            />
          ))}
        </div>
      </div>
    </div>
  );
};

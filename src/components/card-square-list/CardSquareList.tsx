import { clsx } from 'clsx';
import { CardSquare } from '../card-square';
import { CardSquareListProps } from './card-square-list.interface';

export const CardSquareList: React.FC<CardSquareListProps> = ({ headlines, variant }: CardSquareListProps) => {
  const cardLists = headlines.length > 10 ? headlines.slice(0, 12) : headlines;
  return (
    <div className={clsx(
      'zep-max-w-[1920px]',
      'zep-grid',
      'zep-grid-cols-4',
      'sm:zep-grid-cols-8',
      'md:zep-grid-cols-16',
      'zep-gap-1',
      'sm:zep-gap-1.5',
      'xl:zep-gap-2',
    )}>
      <div
        data-testid="zep-card-square-list"
        className={clsx(
          'md:zep-col-start-2',
          'md:zep-col-span-14',
          'zep-col-span-4',
          'sm:zep-col-span-8',
          'zep-flex',
          'zep-overflow-x-auto',
          'md:zep-overflow-x-hidden',
          'md:zep-grid',
          'md:zep-grid-flow-row',
          'zep-gap-1',
          'md:zep-gap-1.5',
          'xl:zep-gap-2',
          'zep-px-1',
          'sm:zep-px-1.5',
          'md:zep-px-[0px]',
          {
            'xl:zep-grid-cols-2': cardLists.length === 2,
            'xl:zep-grid-cols-3': [3, 5, 6, 9].includes(cardLists.length),
            'xl:zep-grid-cols-4': [4, 7, 8, 10, 11, 12].includes(cardLists.length),
            'md:zep-grid-cols-2': [2, 4].includes(cardLists.length),
            'md:zep-grid-cols-3': [3, 5, 6, 7, 8, 9, 10, 11, 12].includes(cardLists.length),
          },
        )}
      >
        {headlines?.map((headline) => (
          <CardSquare className="" key={headline.headline} {...headline} isCardSquarePattern variant={variant} />
        ))}
      </div>
    </div>
  );
};

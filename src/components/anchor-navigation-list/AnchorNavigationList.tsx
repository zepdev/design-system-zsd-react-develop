import { AnchorNavigationCard } from '../anchor-navigation-card';
import { AnchorNavigationListProps } from './anchor-navigation-list.interface';

export const AnchorNavigationList: React.FC<AnchorNavigationListProps> = ({
  headlines,
  variant,
  isLoading = false,
  className = '',
}: AnchorNavigationListProps) => {
  return (
    <div
      data-testid="zep-anchor-navigation-list"
      className={`zep-flex zep-gap-1 md:zep-gap-1.5 lg:zep-gap-2 zep-overflow-x-auto zep-w-full ${className}`}
    >
      {headlines?.map((headline) => <AnchorNavigationCard key={headline.headline} {...headline} variant={variant} />)}
    </div>
  );
};

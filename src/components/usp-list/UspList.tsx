import { cva } from 'class-variance-authority';
import { GlobalVariantExtended, GlobalVariants } from '../../interfaces/global-variants';
import { USP } from '../USP/Usp';
import { HeaderShort } from '../header-short';
import { USPListProps } from './usp-list.interface';

export const USPList: React.FC<USPListProps> = ({
  uspCards,
  variant = GlobalVariants.Cat,
  headerTitle,
  tagline,
  ...props
}: USPListProps) => {
  const uspListVariants = {
    [GlobalVariants.Zps]: ['zep-bg-gradient-to-r zep-from-[rgb(32,27,52)] zep-to-[rgb(32,23,94)]'],
    [GlobalVariants.Cat]: ['zep-bg-background-dark'],
  };

  const uspListCva = cva([`zep-py-3 sm:zep-py-4 md:zep-py-5`], {
    variants: {
      variant: uspListVariants,
    },
    defaultVariants: {
      variant: GlobalVariants.Zps,
    },
  });

  return (
    <div className={uspListCva({ variant })} {...props} data-testid="zep-usp-list">
      <HeaderShort
        className="zep-pt-[0px] sm:zep-pt[0px] md:zep-pt-[0px] zep-pb-2.5 sm:zep-pb-3 md:zep-pb-4"
        variant={variant === GlobalVariants.Zps ? GlobalVariantExtended.ZpsBg : GlobalVariantExtended.CatBg}
        headline={headerTitle}
        showArrow={true}
        tagline={tagline}
      />
      <div className="zep-grid zep-grid-cols-4 sm:zep-grid-cols-8 md:zep-grid-cols-16 zep-gap-1 sm:zep-gap-1.5 md:zep-gap-2">
        <div className="zep-flex zep-overflow-x-auto zep-w-full zep-gap-1 md:zep-gap-1.5 lg:zep-gap-3.5 zep-col-start-1 md:zep-col-start-2 zep-col-end-5 sm:zep-col-end-9 md:zep-col-end-17 sm:zep-pr-2.5 md:zep-pr-4 zep-px-1 md:zep-pl-[0px] sm:zep-px-1.5">
          {uspCards?.map((card, index) => (
            <USP
              count={card?.count || `${ index + 1}.`}
              headline={card.headline}
              description={card.description}
              iconName={card.iconName}
              variant={variant}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

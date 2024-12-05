import { cva } from 'class-variance-authority';
import clsx from 'clsx';
import { FC, useEffect, useRef, useState } from 'react';
import arrowImg from '../../../public/assets/yellow-right-arrow.svg';
import { useContainerDimensions } from '../../hooks/useContainerDimensions';
import { GlobalVariants } from '../../interfaces/global-variants';
import { CardSquareProps } from './card-square.interface';

export const cardSquareVariants = {
  [GlobalVariants.Zps]: [
    'zep-bg-gradient-to-r zep-from-[rgb(32,27,52)] zep-to-[rgb(32,23,94)] group-hover:zep-bg-none group-hover:zep-bg-primary-hover',
  ],
  [GlobalVariants.Cat]: ['zep-bg-neutral-dark-default  group-hover:zep-bg-none group-hover:zep-bg-neutral-dark-hover'],
};
export const cardSquareCardCva = cva(
  [
    `zep-flex
     zep-justify-between
     zep-items-center
     zep-absolute
     lg:zep-bottom-2.5
     lg:zep-left-2.5
     lg:zep-right-2.5
     md:zep-bottom-2
     md:zep-left-2
     md:zep-right-2
     zep-bottom-1.5
     zep-left-1.5
     zep-right-1.5
     zep-p-1.5`,
  ],
  {
    variants: {
      variant: cardSquareVariants,
    },
    defaultVariants: {
      variant: GlobalVariants.Zps,
    },
  },
);

const CardSquare: FC<CardSquareProps> = ({
  imageSrc,
  isCardSquarePattern = false,
  description,
  headline,
  imageAlt,
  hideDescription,
  variant,
  cardListsLength = 0,
}) => {
  const [isContainerClassApplied, setIsContainerClassApplied] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Dynamically track screen size
  const paddingDescription = isCardSquarePattern ? 'md:zep-p-[20px]' : 'md:zep-p-2 lg:zep-p-2.5';
  const componentRef = useRef<HTMLDivElement | null>(null);
  const { width } = useContainerDimensions(componentRef);

  const isMdScreen = windowWidth >= 1024 && windowWidth < 1263;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth < 1024) {
      setIsContainerClassApplied(true);
    } else if (isMdScreen && cardListsLength !== 2 && cardListsLength !== 4) {
      setIsContainerClassApplied(true);
    } else {
      setIsContainerClassApplied(false);
    }
  }, [windowWidth, isMdScreen, cardListsLength]);

  return (
    <div
      className={clsx(
        'zep-relative',
        'zep-group',
        'hover:zep-brightness-90',
        // 'zep-min-w-[282px]',
        // 'zep-max-w-[700px]',
        'zep-w-full',
        isContainerClassApplied ? 'zep-@container' : 'zep-@container-normal',
      )}
      tabIndex={0}
      data-testid="zep-card-square"
      ref={componentRef}
    >
      <img
        className="zep-object-cover zep-w-full zep-h-full group-hover:zep-transition-all zep-duration-1000 group-hover:zep-brightness-90"
        src={imageSrc}
        alt={imageAlt}
        title="construction site"
      />
      <div className={`${cardSquareCardCva({ variant })} ${paddingDescription}`}>
        <div className="zep-flex zep-flex-col zep-items-start zep-w-full">
          <h4
            data-testid="card-square-headline"
            className={clsx('zep-typography-headlineMD-fluid-cqi', 'zep-text-background-light', 'zep-text-left', {
              'zep-mb-1': width > 350,
            })}
          >
            {headline}
          </h4>
          {width > 350 && (
            <p
              data-testid="card-square-description"
              className={clsx(
                'md:zep-block',
                {
                  'zep-hidden': isCardSquarePattern && hideDescription,
                },
                'zep-typography-bodyText',
                'zep-text-background-light',
                // 'zep-text-left',
                'zep-break-all',
              )}
            >
              {description}
            </p>
          )}
        </div>
        <div className="zep-transition group-hover:zep-translate-x-0.75 zep-ml-1.5 ">
          <img src={arrowImg} alt={'yellow left arrow'} data-testid="zep-her-arrowIcon"></img>
        </div>
      </div>
    </div>
  );
};
export { CardSquare };

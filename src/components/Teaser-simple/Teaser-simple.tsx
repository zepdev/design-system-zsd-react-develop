import clsx from 'clsx';
import { Button } from '../zps-button/ZpsButton';
import { ZpsButtonVariant } from '../zps-button/zps-button.interface';
import { TeaserSimpleProps } from './teaser-simple.interface';

export const TeaserSimple: React.FC<TeaserSimpleProps> = ({ teaserText, buttonText, onClick }) => {
  return (
    <>
      <div
        className={clsx(
          'zep-flex',
          'zep-flex-col',
          'zep-w-[360px]',
          'zep-px-1.5',
          'zep-py-2.5',
          'zep-items-center',
          'zep-justify-center',
          'zep-bg-indigo-500',
          'zep-w-full',
          'md:zep-flex-row',
          'md:zep-py-4',
          'xl:zep-py-5',
        )}
      >
        <h1
          className={clsx(
            'zep-text-typography-light-100',
            'zep-typography-headlineMD-fluid-cqi',
            'zep-w-auto',
            'zep-text-center',
          )}
        >
          {teaserText}
        </h1>

        <Button
          className={clsx(
            'zep-mt-1.5',
            'md:zep-ml-[80px]',
            'md:zep-mt-[0]',
            'xl:zep-ml-[120px]',
            'md:zep-whitespace-nowrap',
          )}
          label={buttonText}
          title={buttonText}
          variant={ZpsButtonVariant.Primary}
          onClick={onClick}
        />
      </div>
    </>
  );
};

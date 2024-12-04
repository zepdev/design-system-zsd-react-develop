import clsx from 'clsx';
import { LayoutProps } from './layout.interface';

const Layout = ({ children, className }: LayoutProps) => {
  return (
    <div className={clsx(className, 'zep-w-full')}>
      <div
        className={
          'zep-max-w-[1920px] zep-mx-auto zep-px-1 zep-py-1 sm:zep-px-[24px] sm:zep-py-[24px] md:zep-px-4 md:zep-py-4 lg:zep-px-7.5'
        }
      >
        {children}
      </div>
    </div>
  );
};

export { Layout };

import clsx from 'clsx';
import { Link } from '@zepdev/design-system-component-library-react';
import { LinkMode, LinkTarget } from '@zepdev/design-system-component-library-react';

export const ProcessChain = ({ linkChain, contentItems }) => {
  return (
    <div className="zep-flex zep-items-stretch">
      {contentItems.map((obj, idx) => (
        <div key={idx} className={clsx('zep-mr-2', 'md:zep-mr-2.5')}>
          <div
            className={clsx(' zep-relative zep-bg-indigo-500 zep-text-greyscale-0 zep-w-[300px] zep-p-1.5 zep-h-full')}
          >
            <div className={clsx('zep-flex', 'zep-flex-col', 'zep-items-start')}>
              <h4 data-testid="process-chain-headline" className="zep-typography-headlineSM-fluid-cqi  zep-break-all">
                {obj.headline}
              </h4>
              {linkChain
                ? obj.linkItems.map((item, index) => (
                    <div key={index} className="zep-mt-1 ">
                      <Link
                        label="inline link"
                        iconPlacement="before"
                        icon={item.icon}
                        href={item.link}
                        hasIcon={true}
                        target={LinkTarget.Blank}
                        mode={LinkMode.Inline}
                      ></Link>
                    </div>
                  ))
                : obj.listItems.map((item, index) => (
                    <ul key={index} className="zep-mt-1 zep-pl-1.5 ">
                      <li className="zep-list-disc">{item}</li>
                    </ul>
                  ))}
            </div>
            {idx < contentItems.length - 1 && (
              <div className="zep-mr-1.5 zep-absolute zep-border-t-transparent zep-border-b-transparent zep-border-t-[18px] zep-border-b-[18px] zep-top-1/3 zep-left-[300px] zep-border-l-[16px] zep-border-l-indigo-500 zep-translate-y-1/2"></div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

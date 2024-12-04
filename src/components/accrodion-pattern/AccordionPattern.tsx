import { Accordion, Link, LinkTarget } from '@zepdev/design-system-component-library-react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { BlocksRenderer } from '~/@strapi/blocks-react-renderer/dist';
import { GlobalVariants } from '../../interfaces/global-variants';
import { AccordionPatternProps } from './accordion.interface';

//Accordion themes
const accordionThemes = {
  [GlobalVariants.Zps]: ['zep-text-typography-primary-default'],
  [GlobalVariants.Cat]: ['zep-text-typography-dark-100'],
};

const accordionCva = cva(
  [
    ` 
        zep-items-center
        zep-max-w-[719px]
        zep-relative
    `,
  ],
  {
    variants: {
      variant: accordionThemes,
    },
    defaultVariants: {
      variant: GlobalVariants.Zps,
    },
  },
);

export const AccordionPattern: React.FC<AccordionPatternProps> = ({
  topDescription,
  bottomDescription,
  contents,
  variant,
}) => {
  const blocks = {
    paragraph: ({ children }: { children?: React.ReactNode }) => <p>{children}</p>,
    heading: ({ children }: { children?: React.ReactNode }) => (
      <h5 className="zep-typography-headlineXS-fluid-cqi">{children}</h5>
    ),
    link: ({ children, url }: { children?: React.ReactNode; url: string }) => (
      <Link className="zep-typography-link" target={LinkTarget.Blank} href={url} label={children as string} />
    ),
  };

  const modifiers = {
    bold: ({ children }: { children?: React.ReactNode }) => (
      <span className="zep-typography-bodyStrong">{children}</span>
    ),
  };

  return (
    <div className={twMerge(accordionCva({ variant }))} data-testid="zep-accordion-pattern">
      {/* Top Description */}
      {topDescription && (
        <div className="zep-block zep-mb-1.5 md:zep-mb-2" data-testid="accordion-pattern-topDescription">
          <BlocksRenderer content={topDescription} blocks={blocks} modifiers={modifiers} />
        </div>
      )}
      {/* Accordion */}
      <div data-testid="accordion-pattern-titleContent">
        <Accordion
          items={contents.map((item, index) => ({
            title: item.title,
            content: (
              <div className={twMerge(accordionCva({ variant }))}>
                <BlocksRenderer content={item.accordionContent} blocks={blocks} modifiers={modifiers} />
              </div>
            ),
          }))}
        />
      </div>
      {/* Bottom Description */}
      {bottomDescription && (
        <div className="zep-block zep-mt-1.5 md:zep-mt-2" data-testid="accordion-pattern-bottomDescription">
          <BlocksRenderer content={bottomDescription} blocks={blocks} modifiers={modifiers} />
        </div>
      )}
    </div>
  );
};

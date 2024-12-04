// import clsx from 'clsx';
// import React from 'react'
// import { CardNewsEventsImageProps } from './card-news-events.interface';

// const CardNewsEventsImage = ({ src, alt, aspectRatio = '4:3' }: CardNewsEventsImageProps) => {
//   // const { imageAlignment } = useMediaTextContext();
//   const imageAspectRation = aspectRatio === '4:3' ? 'zep-pb-[calc(3_*_100%_/_4)]' : 'zep-pb-[calc(4_*_100%_/_3)]';
//   // const alignmentClass = imageAlignment === 'left' ? 'md:zep-order-1' : '';
//   // const columnClass =
//   //   imageAlignment === 'left'
//   //     ? 'md:zep-col-start-2 md:zep-col-end-9 xl:zep-col-start-3 xl:zep-col-end-10'
//   //     : 'md:zep-col-start-9 md:zep-col-end-16 xl:zep-col-start-8 xl:zep-col-end-15';
//   return (
//     <div
//       data-testid="zep-mediaText-image"
//       className={clsx(
//         'zep-col-start-5',
//         'zep-col-end-13',
//         'zep-justify-center',
//         'zep-row-start-1',
//         'zep-row-end-1',
//         // alignmentClass,
//         // columnClass,
//       )}
//     >
//       <div className={clsx('zep-relative', imageAspectRation)}>
//         <img
//           alt={alt}
//           src={src}
//           className={clsx('zep-w-full zep-h-full zep-object-cover md:zep-w-full md:zep-h-full md:zep-max-w-full')}
//         />
//       </div>
//     </div>
//   );
// };
// const CardNewsEvents = () => {
//   return (
//     <div className='zep-flex'>

//       <div className='zep-flex zep-flex-col'> </div>
//       <h3></h3>

//     </div>
//   )
// }

// export  {CardNewsEvents};

import React from 'react';
// import { ArrowRight } from 'lucide-react';
import { CardNewsEventsProps } from './card-news-events.interface';
import { Link } from '@zepdev/design-system-component-library-react';
import { LinkMode, LinkTarget } from '@zepdev/design-system-component-library-react';
export const CardNewsEvents: React.FC<CardNewsEventsProps> = ({ event, className = '' }) => {
  return (
    <article className={`max-w-[1076px] flex flex-col md:flex-row gap-6 ${className}`}>
      {/* Image Section */}
      <div className="w-full md:w-[20%] aspect-[3_/_4] relative overflow-hidden rounded-lg">
        <img src={event.image?.src} alt={event.image?.alt} className="object-cover w-full h-full" />
      </div>

      {/* Content Section */}
      <div className="flex-1 space-y-3 max-w-[944px]">
        <h2 className="text-[2rem] font-medium leading-tight text-primary-default">{event.title}</h2>

        <div className="flex gap-2 text-sm">
          <time>{event.date}</time>
          <span>|</span>
          <span>{event.location}</span>
        </div>

        <p className="text-base">{event.description}</p>

        <Link
          label="inline link"
          iconPlacement="before"
          icon={event.link.icon}
          href={event.link.linkLabel}
          hasIcon={true}
          target={LinkTarget.Blank}
          mode={LinkMode.Inline}
        ></Link>
      </div>
    </article>
  );
};

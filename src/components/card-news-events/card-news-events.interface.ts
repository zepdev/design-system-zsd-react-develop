import { HTMLAttributes, ReactNode } from 'react';
import { GlobalVariants } from '../../interfaces/global-variants';
import { FunctionalIconNames } from '@zepdev/design-system-component-library-react';

export interface CardNewsEventsImageProps extends HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
  aspectRatio?: '4:3' | '3:4';
  orientation?: 'landscape' | 'portrait';
  imageAlignment?: 'left' | 'right';
}
export interface LinkItem {
    icon: FunctionalIconNames;
    linkLabel: string;
  }

export interface CardNewsEventsProps extends HTMLAttributes<HTMLDivElement> {
    // headline?: string;
    // date?: string;
    // location?:string;
    // description?: string;
    // link:LinkItem;
    event:EventData;
    className?:string;
  }
  

  export interface EventData {
    id?: number;
    title?: string;
    date?: string;
    location?: string;
    description?: string;
    image?: CardNewsEventsImageProps;
    link:LinkItem;
  }
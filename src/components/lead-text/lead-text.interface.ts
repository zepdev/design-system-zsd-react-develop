import { BlocksContent } from '@strapi/blocks-react-renderer';

export interface LeadTextProps {
  headline?: string,
  content: BlocksContent,
  theme?: 'cat' | 'power-systems'
}
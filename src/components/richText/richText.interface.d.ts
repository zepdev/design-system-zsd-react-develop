import { default as React } from 'react';

export interface TextStyle {
    fontWeight?: string;
    fontStyle?: string;
}
export interface Block {
    type: string;
    depth: number;
    text: string;
    inlineStyleRanges: Array<{
        offset: number;
        length: number;
        style: string;
    }>;
    entityRanges: Array<{
        offset: number;
        length: number;
        key: number;
    }>;
    items: string[];
    ordered: boolean;
}
export interface EntityMap {
    [key: string]: {
        type: string;
        mutability: string;
        data: {
            url: string;
        };
    };
}
export interface Content {
    blocks: Block[];
    entityMap: EntityMap;
    images: Array<{
        offset: number;
        length: number;
        key: number;
        alt: string;
        src: string;
    }>;
}
export interface RichTextProps {
    content: Content;
    textColor?: 'white' | 'indigo' | 'black';
    children?: React.ReactNode;
}
//# sourceMappingURL=richText.interface.d.ts.map
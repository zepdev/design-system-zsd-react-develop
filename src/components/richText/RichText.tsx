import { List } from '@zepdev/design-system-component-library-react';
import React from 'react';
import { clsx } from 'clsx';
import { Link, LinkMode, LinkTarget } from '@zepdev/design-system-component-library-react';
import { Block, EntityMap, RichTextProps } from './richText.interface';

const Header: React.FC<{ level: 'header-three' | 'header-four'; className?: string; children: React.ReactNode }> = ({
  level,
  children,
}) => {
  const headerClass =
    level === 'header-three'
      ? 'zep-typography-headlineSM-fluid-cqi zep-mb-1'
      : 'zep-typography-headlineMD-fluid-cqi zep-mb-2';
  return level === 'header-three' ? (
    <h3 className={clsx(headerClass)}>{children}</h3>
  ) : (
    <h4 className={clsx(headerClass)}>{children}</h4>
  );
};

// Paragraph Component
const Paragraph: React.FC<{ children: React.ReactNode; className?: string }> = ({ children }) => (
  <p className="zep-mb-2">{children}</p>
);

// List Component
const ListComponent: React.FC<{ ordered: boolean; className?: string; items: string[] }> = ({ ordered, items }) => (
  <List className="zep-mb-2" type={ordered ? 'numeric' : 'bullet'}>
    {items.map((item, idx) => (
      <List.Item key={idx}>{item}</List.Item>
    ))}
  </List>
);

const RichText = ({ content, children, textColor }: RichTextProps) => {
  const containerClass =
    textColor === 'white'
      ? '!zep-text-typography-light-100'
      : textColor === 'black'
      ? '!zep-text-typography-dark-100'
      : 'zep-text-indigo-500';
  const renderBlock = (block: Block, index: number, entityMap: EntityMap) => {
    const { type, text, inlineStyleRanges = [], entityRanges = [], items = [], ordered } = block;

    const getSegments = (text: string, ranges: any[], entityMap?: EntityMap, type: 'style' | 'entity' = 'style') => {
      let segments: Array<{ text: string; style?: string | null; url?: string | null }> = [];
      let lastIndex = 0;

      ranges.forEach(({ offset, length, style, key }) => {
        if (offset > lastIndex) {
          segments.push({ text: text.slice(lastIndex, offset), style: null, url: null });
        }
        const segmentText = text.slice(offset, offset + length);
        const segmentStyle = type === 'style' ? style || null : null;
        const segmentUrl = type === 'entity' && key !== undefined && entityMap ? entityMap[key].data.url : null;

        segments.push({ text: segmentText, style: segmentStyle, url: segmentUrl });
        lastIndex = offset + length;
      });

      if (lastIndex < text.length) {
        segments.push({ text: text.slice(lastIndex), style: null, url: null });
      }

      return segments;
    };

    const entitySegments = getSegments(text || '', entityRanges, entityMap, 'entity');
    const finalSegments = entitySegments.flatMap((segment, entityIndex) => {
      if (segment.url) {
        return (
          <>
            <Link
              key={entityIndex}
              href={segment.url}
              as="span"
              hasIcon={false}
              label={segment.text}
              mode={LinkMode.Inline}
              target={LinkTarget.Blank}
            />
          </>
        );
      }
      const styleSegments = getSegments(segment.text, inlineStyleRanges, undefined, 'style');
      return styleSegments.map((styleSegment, styleIndex) => {
        if (styleSegment.style === 'BOLD') {
          return (
            <span className="zep-typography-bodyStrong" key={entityIndex + '-' + styleIndex}>
              {styleSegment.text}
            </span>
          );
        } else if (styleSegment.style === 'ITALIC') {
          return (
            <span className="zep-italic" key={entityIndex + '-' + styleIndex}>
              {styleSegment.text}
            </span>
          );
        }
        return <span key={entityIndex + '-' + styleIndex}>{styleSegment.text}</span>;
      });
    });

    // resove unique key issue
    const contentElement = (
      <span className={clsx(containerClass)}>
        {finalSegments.map((segment, segmentIndex) => (
          <span key={`${index}-${segmentIndex}`}>{segment}</span>
        ))}
      </span>
    );

    switch (type) {
      case 'header-three':
      case 'header-four':
        return (
          <Header className={clsx(containerClass, 'zep-font-500')} level={type} key={index}>
            {contentElement}
          </Header>
        );
      case 'unstyled':
        return (
          <Paragraph className={containerClass} key={index}>
            {contentElement}
          </Paragraph>
        );
      case 'list':
        return <ListComponent className={containerClass} ordered={!!ordered} items={items} key={index} />;
      default:
        return null;
    }
  };

  return (
    <div
      className={clsx(containerClass, 'zep-container', 'md:zep-w-[944px]', 'zep-mx-auto')}
      data-testid="zep-richtext"
    >
      {content.blocks.map((block, index) => renderBlock(block, index, content.entityMap))}
      {content.images.map((image, index) => (
        <div key={index}>
          <img className="zep-h-auto zep-max-w-full zep-mb-1" src={image.src} alt={image.alt} />
        </div>
      ))}
      {children}
    </div>
  );
};

export { RichText };

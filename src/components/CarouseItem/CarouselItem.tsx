import './CarouselItem.scss';

interface CarouselItemProps {
  className: string;
  content: CardContent;
}

export interface CardContent {
  title: string;
  text: string;
  icon: string;
}

export default function CarouselItem({ className, content }: CarouselItemProps) {
  return (
    <article className={`card ${className}`}>
      <h4>{content.title}</h4>
      <p>{content.text}</p>
      <div className='icon' dangerouslySetInnerHTML={{ __html: content.icon }}></div>
    </article>
  );
}
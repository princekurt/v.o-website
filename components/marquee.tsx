type MarqueeProps = {
  items: string[];
  className?: string;
  itemClassName?: string;
  reverse?: boolean;
  separator?: string;
};

export function Marquee({ items, className = "", itemClassName = "", reverse = false, separator = "✳" }: MarqueeProps) {
  return (
    <div className={`marquee ${className}`}>
      <div className={`marquee-track ${reverse ? "rev" : ""}`}>
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
            {items.map((item) => (
              <span key={`${copy}-${item}`} className={`flex shrink-0 items-center gap-6 px-6 ${itemClassName}`}>
                {item}
                <span className="opacity-50">{separator}</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

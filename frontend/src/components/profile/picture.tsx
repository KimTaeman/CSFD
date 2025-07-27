interface PictureProps {
  src: string;
  alt?: string;
  className?: string;
  darken?: boolean;
  overlayText?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

function Picture({
  src,
  alt,
  className,
  darken = false,
  overlayText,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: PictureProps) {
  return (
    <div
      className="relative aspect-[5/7] max-h-[175px] max-w-[20%] justify-center overflow-hidden rounded-lg max-sm:mx-auto max-sm:max-w-[50%]"
      style={{ cursor: onClick ? 'pointer' : undefined }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      tabIndex={onClick ? 0 : undefined}
    >
      <div className={`aspect-[5/7] justify-center overflow-hidden rounded-lg ${className || ''}`}>
        <img
          src={src}
          alt={alt || 'Image'}
          className="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>

      {darken && (
        <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black/40">
          {overlayText && (
            <span className="text-lg font-semibold text-white select-none">{overlayText}</span>
          )}
        </div>
      )}
    </div>
  );
}

export default Picture;

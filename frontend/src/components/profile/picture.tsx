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
      className="relative space-y-3"
      style={{ cursor: onClick ? 'pointer' : undefined }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      tabIndex={onClick ? 0 : undefined}
    >
      <p className="font-[Poppins] text-sm text-white lg:pl-4 lg:text-base">Photo</p>
      <div className={`relative aspect-[3/4] overflow-hidden rounded-2xl ${className || ''}`}>
        <img
          src={src}
          alt={alt || 'Image'}
          className="h-full w-full"
          loading="lazy"
          decoding="async"
        />
        {darken && (
          <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black/40">
            {overlayText && (
              <span className="text-lg font-semibold text-white select-none">{overlayText}</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Picture;

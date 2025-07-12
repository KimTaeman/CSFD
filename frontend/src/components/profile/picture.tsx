function Picture({ src, alt, className }: { src: string; alt?: string; className?: string }) {
  return (
    <div className={`space-y-0.1 lg:space-y-3 ${className}`}>
      <p className="pt-2 pl-2 font-[Poppins] text-sm text-white lg:pt-0 lg:pl-4 lg:text-base">
        Photo
      </p>
      <div className={`aspect-[3/4] w-full overflow-hidden rounded-2xl ${className || ''}`}>
        <img
          src={src}
          alt={alt || 'Image'}
          className="h-full w-full object-contain"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  );
}

export default Picture;

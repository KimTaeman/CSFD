function Picture({ src, alt, className }: { src: string; alt?: string; className?: string }) {
  return (
    <div className={`space-y-0.1 lg:space-y-3 ${className}`}>
      <p className="pl-2 lg:pl-4 pt-2 lg:pt-0 font-[Poppins] text-sm lg:text-base text-white">Photo</p>
      <div
        className={`aspect-[3/4] w-full max-w-[40000px] overflow-hidden rounded-2xl ${className || ''}`}
      >
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

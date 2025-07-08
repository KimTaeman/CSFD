function Picture({ src, alt, className }: { src: string; alt?: string; className?: string }) {
  return (
    <div className={`space-y-0.1 lg:space-y-3 ${className}`}>
      <p className="pl-2 lg:pl-4 pt-2 lg:pt-0 font-[Poppins] text-sm lg:text-base text-white">Photo</p>
      <div
        className={`overflow-hidden rounded-2xl w-full max-w-[40000px] aspect-[3/4] ${className || ''}`}
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

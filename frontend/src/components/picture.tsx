function Picture({ src, alt, className }: { src: string; alt?: string; className?: string }) {
  return (
    <div className="flex flex-col space-y-3">
      <p className="pl-4 font-[Poppins] text-lg text-white">Photo</p>
      <div
        className={`overflow-hidden rounded-2xl ${className || ''}`}
        style={{
          width: '100%',
          maxWidth: '40000px',
          aspectRatio: '3/4',
        }}
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

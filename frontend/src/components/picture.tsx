
function Picture({ src, alt, className }: { src: string; alt?: string; className?: string }) {
  return (
    <div className="flex flex-col space-y-3">
      <p className="text-lg pl-4 text-white font-[Poppins]">Photo</p>
      <div
        className={`rounded-2xl overflow-hidden  ${className || ''}`}
        style={{
          width: '100%',
          maxWidth: '40000px',
          aspectRatio: '3/4', 
        }}
      >
        <img
          src={src}
          alt={alt || 'Image'}
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default Picture;
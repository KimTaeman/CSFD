import React from 'react';
import Cropper from 'react-easy-crop';

interface ProfilePicUploadProps {
  open: boolean;
  onSave: (croppedImage: string) => void;
  onClose: () => void;
  imageSrc: string | null;
  crop: any;
  setCrop: (crop: any) => void;
  zoom: number;
  setZoom: (zoom: number) => void;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCropComplete: (croppedArea: any, croppedAreaPixels: any) => void;
  saveCroppedImage: (onSave: (img: string) => void) => void;
  setImageSrc: (src: string | null) => void;
}

const ProfilePicUpload: React.FC<ProfilePicUploadProps> = ({
  open,
  onSave,
  onClose,
  imageSrc,
  crop,
  setCrop,
  zoom,
  setZoom,
  fileInputRef,
  onFileChange,
  handleCropComplete,
  saveCroppedImage,
  setImageSrc,
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="relative flex flex-col items-center overflow-hidden rounded-2xl p-4">
        <div className="relative h-[400px] w-[300px] overflow-hidden rounded-2xl bg-black">
          {imageSrc ? (
            <Cropper
              image={imageSrc}
              crop={crop}
              zoom={zoom}
              aspect={3 / 4}
              cropShape="rect"
              showGrid={false}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={handleCropComplete}
            />
          ) : (
            <label className="flex h-full w-full cursor-pointer flex-col items-center justify-center text-white/70">
              <span className="font-[Inter] text-lg text-white">Select a profile picture</span>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={onFileChange}
              />
            </label>
          )}
        </div>
        <div className="mt-6 flex gap-4">
          <button
            className="rounded-xl border border-white bg-transparent px-8 py-2 text-white transition-colors hover:bg-white/10"
            onClick={() => {
              setImageSrc(null);
              onClose();
            }}
          >
            Cancel
          </button>
          {imageSrc && (
            <button
              className="rounded-xl border border-white bg-transparent px-8 py-2 text-white transition-colors hover:bg-white/10"
              onClick={() => saveCroppedImage(onSave)}
            >
              Save
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePicUpload;

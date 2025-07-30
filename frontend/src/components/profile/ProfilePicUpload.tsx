import React from 'react';
import Cropper from 'react-easy-crop';
import {
  IconX,
  IconPhoto,
  IconLoader2,
  IconAlertCircle,
  IconCheck,
  IconInfoCircle,
} from '@tabler/icons-react';

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
  isPending: boolean;
  isError: boolean;
  isSuccess: boolean;
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
  isPending,
  isError,
  isSuccess,
}) => {
  if (!open) return null;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape' && !isPending) {
      setImageSrc(null);
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="upload-title"
      aria-describedby="upload-description"
      onKeyDown={handleKeyDown}
    >
      <div className="relative flex w-full max-w-md flex-col overflow-hidden rounded-2xl border border-white/10 bg-gray-800/30 shadow-2xl backdrop-blur-lg">
        {/* Header */}
        <div className="relative border-b border-white/10 px-6 py-4">
          <h2 id="upload-title" className="text-center text-xl font-semibold text-white">
            Upload Profile Picture
          </h2>
          <p id="upload-description" className="mt-1 text-center text-sm text-gray-300">
            {imageSrc
              ? 'Drag to reposition · Scroll or pinch to zoom'
              : 'Choose an image to upload and crop'}
          </p>

          {/* Close button */}
          <button
            className="absolute top-4 right-4 rounded-lg p-1.5 text-gray-400 transition-colors hover:bg-white/10 hover:text-white focus:ring-2 focus:ring-white/50 focus:outline-none"
            onClick={() => {
              setImageSrc(null);
              onClose();
            }}
            disabled={isPending}
            aria-label="Close dialog"
          >
            <IconX size={20} />
          </button>
        </div>

        {/* Image Cropper Area */}
        <div className="relative h-[70vh] max-h-[500px] min-h-[300px] w-full bg-gray-900 sm:h-[500px] sm:max-h-[600px]">
          {imageSrc ? (
            <div className="relative h-full w-full">
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

              {/* Zoom Instructions */}
              <div className="absolute right-4 bottom-4 left-4 rounded-xl border border-white/10 bg-gray-900/80 p-3 backdrop-blur-sm">
                <div className="flex items-center justify-center-safe gap-2 text-center text-xs text-gray-300">
                  <IconInfoCircle size={14} className="flex-shrink-0 text-purple-400" />
                  <span>Use mouse wheel or pinch to zoom &#xB7; Drag to reposition</span>
                </div>
              </div>
            </div>
          ) : (
            <label
              className="flex h-full w-full cursor-pointer flex-col items-center justify-center border-2 border-dashed border-white/20 text-gray-400 transition-colors hover:border-purple-400/50 hover:bg-white/5 hover:text-gray-200"
              htmlFor="profile-picture-input"
              aria-describedby="file-requirements"
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="rounded-full border border-purple-500/30 bg-purple-900/20 p-4">
                  <IconPhoto size={32} className="text-purple-400" />
                </div>
                <div className="text-center">
                  <span className="font-poppins block text-lg font-medium text-white">
                    Select a profile picture
                  </span>
                  <span className="font-poppins mt-1 block text-sm text-gray-400">
                    Click here or drag and drop
                  </span>
                </div>
              </div>
              <input
                id="profile-picture-input"
                ref={fileInputRef}
                type="file"
                accept=".jpg,.jpeg,.png,.gif,.bmp,.webp"
                className="sr-only"
                onChange={onFileChange}
                aria-describedby="file-requirements"
              />
            </label>
          )}
        </div>

        {/* File Requirements */}
        <div className="border-t border-white/10 bg-gray-900/50 px-4 py-2">
          <p id="file-requirements" className="font-poppins text-center text-xs text-gray-400">
            Accepted: JPG, PNG, GIF, WebP &#xB7; Max size: 10MB
          </p>
        </div>

        {/* Status Messages */}
        {(isError || isSuccess) && (
          <div className="border-t border-white/10 px-4 py-3" role="status" aria-live="polite">
            {isError && (
              <div
                id="error-message"
                className="flex items-center gap-3 rounded-xl border border-red-500/30 bg-red-900/20 p-3 text-red-200"
              >
                <IconAlertCircle size={18} className="flex-shrink-0 text-red-400" />
                <span className="font-poppins text-sm">
                  Failed to upload image. Please try again.
                </span>
              </div>
            )}
            {isSuccess && (
              <div
                id="success-message"
                className="flex items-center gap-3 rounded-xl border border-green-500/30 bg-green-900/20 p-3 text-green-200"
              >
                <IconCheck size={18} className="flex-shrink-0 text-green-400" />
                <span className="font-poppins text-sm">Profile picture uploaded successfully!</span>
              </div>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 border-t border-white/10 p-4 sm:flex-row">
          <button
            className="font-poppins w-full flex-1 rounded-xl border border-purple-500/50 bg-purple-900/60 px-6 py-3 text-sm text-white transition-all duration-200 hover:bg-purple-900/80 focus:ring-2 focus:ring-purple-400/50 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            onClick={() => saveCroppedImage(onSave)}
            disabled={isPending || !imageSrc}
            aria-describedby={isError ? 'error-message' : isSuccess ? 'success-message' : undefined}
          >
            {isPending ? (
              <span className="flex items-center justify-center gap-2">
                <IconLoader2 size={16} className="animate-spin" />
                <span>Uploading...</span>
              </span>
            ) : (
              'Save Profile Picture'
            )}
          </button>

          <button
            className="font-poppins w-full flex-1 rounded-xl border border-white/10 bg-gray-900/60 px-6 py-3 text-sm text-white transition-all duration-200 hover:bg-gray-900/80 focus:ring-2 focus:ring-white/50 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            onClick={() => {
              setImageSrc(null);
              onClose();
            }}
            disabled={isPending}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePicUpload;

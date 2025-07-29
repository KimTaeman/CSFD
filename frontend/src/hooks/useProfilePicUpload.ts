import api from '@/api/axios';
import { useState, useCallback, useRef } from 'react';
import { useAuthContext } from './useAuthContext';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

interface CropArea {
  x: number;
  y: number;
  width: number;
  height: number;
}

function getCroppedImg(imageSrc: string, crop: CropArea): Promise<string> {
  return new Promise((resolve) => {
    const image = new window.Image();
    image.src = imageSrc;
    image.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = crop.width;
      canvas.height = crop.height;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(
          image,
          crop.x,
          crop.y,
          crop.width,
          crop.height,
          0,
          0,
          crop.width,
          crop.height,
        );
        resolve(canvas.toDataURL('image/jpeg'));
      }
    };
  });
}

export function useProfilePicUpload() {
  const { user } = useAuthContext();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedArea, setCroppedArea] = useState<CropArea | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  const onFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setImageSrc(reader.result);
          setIsOpen(true);
        }
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const handleCropComplete = useCallback(
    (_: any, croppedAreaPixels: CropArea) => setCroppedArea(croppedAreaPixels),
    [],
  );

  const uploadProfilePic = async (croppedImage: string) => {
    const { data } = await api.put(`/students/${user.id}`, { profilePic: croppedImage });
    return data;
  };

  const {
    mutate: uploadMutation,
    isPending,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: uploadProfilePic,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['authUser'] });
      setImageSrc(data.profilePic);
      close();
      navigate(0);
    },
    onError: (e) => {
      console.error('Error uploading profile picture:', e);
    },
  });

  const saveCroppedImage = useCallback(
    async (onSave: (img: string) => void) => {
      if (!imageSrc || !croppedArea) return;
      const cropped = await getCroppedImg(imageSrc, croppedArea);
      uploadMutation(cropped);
      onSave(cropped);
      close();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [imageSrc, croppedArea, uploadMutation],
  );

  const openFileDialog = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  return {
    isOpen,
    open,
    close,
    imageSrc,
    setImageSrc,
    crop,
    setCrop,
    zoom,
    setZoom,
    fileInputRef,
    onFileChange,
    handleCropComplete,
    saveCroppedImage,
    openFileDialog,
    isPending,
    isError,
    isSuccess,
  };
}

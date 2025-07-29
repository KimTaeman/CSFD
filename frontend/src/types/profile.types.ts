import React from 'react';

export interface ProfileData {
  displayName: string;
  nickname: string;
  studentId: string;
  nationality: string;
  instagram: string;
  discord: string;
  line: string;
}

export interface FormField {
  key: keyof ProfileData;
  label: string;
  type: string;
}

export interface SocialMediaField {
  key: keyof Pick<ProfileData, 'instagram' | 'discord' | 'line'>;
  label: string;
  icon: React.ReactNode;
}

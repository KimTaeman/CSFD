export interface ProfileData {
  fullName: string;
  nickname: string;
  studentId: string;
  nationality: string;
  instagram: string;
  discord: string;
  lineId: string;
}

export interface FormField {
  key: keyof ProfileData;
  label: string;
  type: string;
}

export interface SocialMediaField {
  key: keyof Pick<ProfileData, 'instagram' | 'discord' | 'lineId'>;
  label: string;
  icon: string;
  iconColor: string;
}

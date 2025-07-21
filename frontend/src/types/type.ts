export interface User {
  id: number;
  displayName: string;
  email: string;
  nickname: string | null;
  role: string;
}

export interface StudentInfo {
  id: number;
  displayName: string;
  nickname: string;
  house: string;
  nationality: string;
  studentId: string;
  profilePic: string;
  instagram: string;
  discord: string;
  line?: string;
  email: string;
  role: string;
  lives: number | null;
  isSenior: boolean | null;
  mentees: Array<{
    id: string;
    displayName: string;
    nickname: string | null;
    instagram: string | null;
    discord: string | null;
    line: string | null;
    lives: number | null;
  }>;
  mentor?: {
    id: string;
    displayName: string;
    nickname: string | null;
    instagram: string | null;
    discord: string | null;
    line: string | null;
  } | null;
  hints: Array<{
    id: string;
    order: number;
    content: string;
    revealDate: Date;
  }>;
}

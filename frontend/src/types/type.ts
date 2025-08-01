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
  line: string;
  guessCheck?: {
    isFound: boolean;
    juniorId: number;
    seniorId: number;
  } | null;
  email: string;
  role: string;
  isHouseLeader: boolean | null;
  lives: number | null;
  isSenior: boolean | null;
  isAdmin: boolean;
  mentees: Array<{
    id: string;
    displayName: string;
    nickname: string | null;
    instagram: string | null;
    discord: string | null;
    line: string | null;
    lives: number | null;
    isFound: boolean | null;
    foundAt: Date | null;
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

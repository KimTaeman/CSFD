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
  email: string;
  nickname: string | null;
  role: string;
  profilePic: string | null;
  isHouseLeader: boolean | null;
  studentId: string | null;
  nationality: string | null;
  lives: number | null;
  mentees: Array<{
    junior: {
      id: string;
      displayName: string;
      nickname: string | null;
      instagram: string | null;
      discord: string | null;
      line: string | null;
      lives: number | null;
    };
  }>;
  mentor?: {
    senior: {
      id: string;
      displayName: string;
      nickname: string | null;
      instagram: string | null;
      discord: string | null;
      line: string | null;
    };
  } | null;
  givenHints: Array<{
    id: string;
    order: number;
    content: string;
    revealDate: Date;
  }>;
  receivedHints: Array<{
    id: string;
    order: number;
    content: string;
    revealDate: Date;
  }>;
  house: string | null;
  instagram: string | null;
  discord: string | null;
  line: string | null;
}

export interface CovenProps {
  onClick?: () => void;
  className?: string;
}

export interface User {
  displayName: string;
  nickname: string;
  house: string;
  nationality: string;
  studentId: string;
  profilePic: string;
  instagram: string;
  discord: string;
  line?: string;
}

export const mockUsers: User[] = [
  {
    displayName: "Jane Doe",
    nickname: "Janie",
    house: "Alpha",
    nationality: "Thai",
    studentId: "67130500899",
    profilePic: "/src/assets/pic-mock.jpg",
    instagram: "jane_doe",
    discord: "jane#1234",
    line: "jane_doe"
  },
  {
    displayName: "John Smith",
    nickname: "Johnny",
    house: "Beta",
    nationality: "American",
    studentId: "68130500895",
    profilePic: "/src/assets/pic-mock.jpg",
    instagram: "john_smith",
    discord: "johnny#5678"
  },
  {
    displayName: "Alice Johnson",
    nickname: "Ali",
    house: "Gamma",
    nationality: "British",
    studentId: "66130500123",
    profilePic: "/src/assets/pic-mock.jpg",
    instagram: "alice_j",
    discord: "ali#9999",
    line: "alice_johnson"
  },
  {
    displayName: "Bob Wilson",
    nickname: "Bobby",
    house: "Delta",
    nationality: "Canadian",
    studentId: "67130500456",
    profilePic: "/src/assets/pic-mock.jpg",
    instagram: "bob_wilson",
    discord: "bobby#1111"
  },
  {
    displayName: "Emma Davis",
    nickname: "Em",
    house: "Epsilon",
    nationality: "Australian",
    studentId: "68130500789",
    profilePic: "/src/assets/pic-mock.jpg",
    instagram: "emma_davis",
    discord: "em#2222",
    line: "emma_d"
  },
  {
    displayName: "Michael Brown",
    nickname: "Mike",
    house: "Zeta",
    nationality: "German",
    studentId: "66130500321",
    profilePic: "/src/assets/pic-mock.jpg",
    instagram: "mike_brown",
    discord: "mike#3333"
  },
  {
    displayName: "Sophie Taylor",
    nickname: "Soph",
    house: "Eta",
    nationality: "French",
    studentId: "67130500654",
    profilePic: "/src/assets/pic-mock.jpg",
    instagram: "sophie_t",
    discord: "soph#4444",
    line: "sophie_taylor"
  },
  {
    displayName: "David Lee",
    nickname: "Dave",
    house: "Theta",
    nationality: "Korean",
    studentId: "68130500987",
    profilePic: "/src/assets/pic-mock.jpg",
    instagram: "david_lee",
    discord: "dave#5555"
  }
];

// Helper function to determine role based on student ID
export const getUserRole = (studentId: string): string => {
  const year = studentId.substring(0, 2);
  
  if (year === '68') {
    return 'Junior';
  } else if (year === '67' || year === '66') {
    return 'Senior';
  }
  
  return 'Unknown';
};
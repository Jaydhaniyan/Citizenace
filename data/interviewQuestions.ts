export interface InterviewQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

export const interviewQuestions: InterviewQuestion[] = [
  {
    id: 1,
    question: "What is the supreme law of the land?",
    options: [
      "The Declaration of Independence",
      "The Constitution",
      "The Articles of Confederation",
      "The Bill of Rights",
    ],
    correctAnswer: "The Constitution",
  },
  {
    id: 2,
    question:
      "The idea of self-government is in the first three words of the Constitution. What are these words?",
    options: [
      "In God We",
      "Liberty and Justice",
      "We the People",
      "For the Republic",
    ],
    correctAnswer: "We the People",
  },
  {
    id: 3,
    question: "What is one right or freedom guaranteed by the First Amendment?",
    options: [
      "Freedom of speech",
      "Right to bear arms",
      "Right to a speedy trial",
      "Protection against double jeopardy",
    ],
    correctAnswer: "Freedom of speech",
  },
  {
    id: 4,
    question: "What are the two parts of the U.S. Congress?",
    options: [
      "The Senate and House of Representatives",
      "The President and the Cabinet",
      "The Supreme Court and Federal Courts",
      "The Joint Chiefs and the Pentagon",
    ],
    correctAnswer: "The Senate and House of Representatives",
  },
  {
    id: 5,
    question: "How many U.S. Senators are there?",
    options: ["50", "100", "435", "538"],
    correctAnswer: "100",
  },
  {
    id: 6,
    question: "We elect a U.S. Senator for how many years?",
    options: ["2 years", "4 years", "6 years", "8 years"],
    correctAnswer: "6 years",
  },
  {
    id: 7,
    question: "Who is the Commander in Chief of the military?",
    options: [
      "The Secretary of Defense",
      "The Chairman of the Joint Chiefs",
      "The President",
      "The Vice President",
    ],
    correctAnswer: "The President",
  },
  {
    id: 8,
    question: "What is the highest court in the United States?",
    options: [
      "The Court of Appeals",
      "The Federal Circuit Court",
      "The Supreme Court",
      "The District Court",
    ],
    correctAnswer: "The Supreme Court",
  },
  {
    id: 9,
    question:
      "What is one responsibility that is only for United States citizens?",
    options: [
      "Serve on a jury",
      "Pay federal income taxes",
      "Obey traffic laws",
      "Register with local police",
    ],
    correctAnswer: "Serve on a jury",
  },
  {
    id: 10,
    question: "How old do citizens have to be to vote for President?",
    options: ["16 and older", "18 and older", "21 and older", "25 and older"],
    correctAnswer: "18 and older",
  },
  {
    id: 11,
    question: "Who wrote the Declaration of Independence?",
    options: [
      "George Washington",
      "Benjamin Franklin",
      "Thomas Jefferson",
      "James Madison",
    ],
    correctAnswer: "Thomas Jefferson",
  },
  {
    id: 12,
    question: "What was one important thing that Abraham Lincoln did?",
    options: [
      "Freed the slaves (Emancipation Proclamation)",
      "Purchased Alaska from Russia",
      "Drafted the U.S. Constitution",
      "Established the first national bank",
    ],
    correctAnswer: "Freed the slaves (Emancipation Proclamation)",
  },
  {
    id: 13,
    question:
      "What movement tried to end racial discrimination in the United States?",
    options: [
      "The civil rights movement",
      "The temperance movement",
      "The labor union movement",
      "The conservation movement",
    ],
    correctAnswer: "The civil rights movement",
  },
  {
    id: 14,
    question: "What is the capital of the United States?",
    options: [
      "New York City",
      "Philadelphia",
      "Washington, D.C.",
      "Boston",
    ],
    correctAnswer: "Washington, D.C.",
  },
  {
    id: 15,
    question: "Why does the American flag have 50 stars?",
    options: [
      "Because there were 50 original amendments",
      "Because each star represents one of the 50 states",
      "Because there were 50 signers of the Constitution",
      "Because 50 presidents have served the nation",
    ],
    correctAnswer: "Because each star represents one of the 50 states",
  },
];

export default interviewQuestions;

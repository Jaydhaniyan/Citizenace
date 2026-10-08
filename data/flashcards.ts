export interface Flashcard {
  id: number;
  category: string;
  question: string;
  answer: string;
}

export const flashcards: Flashcard[] = [
  {
    id: 1,
    category: "Government",
    question: "What is the supreme law of the land?",
    answer: "The Constitution",
  },
  {
    id: 2,
    category: "Government",
    question: "What does the Constitution do?",
    answer: "Sets up and defines the government, and protects basic rights of Americans.",
  },
  {
    id: 3,
    category: "Government",
    question: "Who is in charge of the executive branch?",
    answer: "The President of the United States",
  },
  {
    id: 4,
    category: "Government",
    question: "How many U.S. Senators are there?",
    answer: "100 (two senators from each of the 50 states)",
  },
  {
    id: 5,
    category: "Government",
    question: "We elect a U.S. Senator for how many years?",
    answer: "6 years",
  },
  {
    id: 6,
    category: "Government",
    question: "Who is the Commander in Chief of the military?",
    answer: "The President of the United States",
  },
  {
    id: 7,
    category: "Government",
    question: "What is the highest court in the United States?",
    answer: "The Supreme Court",
  },
  {
    id: 8,
    category: "Rights",
    question: "What is one right or freedom from the First Amendment?",
    answer: "Speech, religion, assembly, press, or the right to petition the government.",
  },
  {
    id: 9,
    category: "Rights",
    question: "What is freedom of religion?",
    answer: "You can practice any religion, or not practice a religion.",
  },
  {
    id: 10,
    category: "Rights",
    question: "What is one responsibility that is only for United States citizens?",
    answer: "Serve on a jury (or vote in a federal election)",
  },
  {
    id: 11,
    category: "Rights",
    question: "How old do citizens have to be to vote for President?",
    answer: "18 years and older",
  },
  {
    id: 12,
    category: "Rights",
    question: "What are two rights in the Declaration of Independence?",
    answer: "Life, Liberty, and the pursuit of Happiness",
  },
  {
    id: 13,
    category: "History",
    question: "Who wrote the Declaration of Independence?",
    answer: "Thomas Jefferson",
  },
  {
    id: 14,
    category: "History",
    question: "When was the Declaration of Independence adopted?",
    answer: "July 4, 1776",
  },
  {
    id: 15,
    category: "History",
    question: "Who is the 'Father of Our Country' and first U.S. President?",
    answer: "George Washington",
  },
  {
    id: 16,
    category: "History",
    question: "What did the Emancipation Proclamation do?",
    answer: "Freed enslaved people in the Confederate states.",
  },
  {
    id: 17,
    category: "History",
    question: "What movement tried to end racial discrimination in the United States?",
    answer: "The civil rights movement",
  },
  {
    id: 18,
    category: "Civics",
    question: "Why does the American flag have 13 stripes?",
    answer: "Because there were 13 original colonies.",
  },
  {
    id: 19,
    category: "Civics",
    question: "Why does the American flag have 50 stars?",
    answer: "Because there is one star for each of the 50 states.",
  },
  {
    id: 20,
    category: "Civics",
    question: "Where is the Statue of Liberty located?",
    answer: "New York Harbor (Liberty Island)",
  },
];

export default flashcards;

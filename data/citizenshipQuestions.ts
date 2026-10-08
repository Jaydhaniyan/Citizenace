export interface Question {
  id: number;
  category: string;
  question: string;
  options: string[];
  answer: string;
}

export const citizenshipQuestions: Question[] = [
  {
    id: 1,
    category: "American Government",
    question: "What is the supreme law of the land?",
    options: [
      "The Constitution",
      "The Declaration of Independence",
      "Congress",
      "The Supreme Court"
    ],
    answer: "The Constitution"
  },
  {
    id: 2,
    category: "American Government",
    question: "What does the Constitution do?",
    options: [
      "Creates the government",
      "Elects the President",
      "Prints money",
      "Declares war"
    ],
    answer: "Creates the government"
  },
  {
    id: 3,
    category: "American Government",
    question: "The idea of self-government is in the first three words of the Constitution. What are these words?",
    options: [
      "We the People",
      "United States Forever",
      "Liberty and Justice",
      "Bill of Rights"
    ],
    answer: "We the People"
  },
  {
    id: 4,
    category: "American Government",
    question: "What is an amendment?",
    options: [
      "A change to the Constitution",
      "A law passed by Congress",
      "A presidential order",
      "A court decision"
    ],
    answer: "A change to the Constitution"
  },
  {
    id: 5,
    category: "American Government",
    question: "What do we call the first ten amendments to the Constitution?",
    options: [
      "Bill of Rights",
      "Articles of Freedom",
      "Founding Laws",
      "Declaration"
    ],
    answer: "Bill of Rights"
  },
  {
    id: 6,
    category: "Rights",
    question: "What is one right or freedom from the First Amendment?",
    options: [
      "Speech",
      "Vote",
      "Bear arms",
      "Run for office"
    ],
    answer: "Speech"
  },
  {
    id: 7,
    category: "Rights",
    question: "How many amendments does the Constitution have?",
    options: ["27", "10", "25", "50"],
    answer: "27"
  },
  {
    id: 8,
    category: "Rights",
    question: "What did the Declaration of Independence do?",
    options: [
      "Announced independence from Great Britain",
      "Created Congress",
      "Ended slavery",
      "Started the Constitution"
    ],
    answer: "Announced independence from Great Britain"
  },
  {
    id: 9,
    category: "Rights",
    question: "What are two rights in the Declaration of Independence?",
    options: [
      "Life and Liberty",
      "Speech and Religion",
      "Vote and Education",
      "Property and Travel"
    ],
    answer: "Life and Liberty"
  },
  {
    id: 10,
    category: "Rights",
    question: "What is freedom of religion?",
    options: [
      "You can practice any religion, or not practice a religion.",
      "Everyone must follow one religion.",
      "Only citizens have religion.",
      "Religion is decided by Congress."
    ],
    answer: "You can practice any religion, or not practice a religion."
  },
  {
    id: 11,
    category: "Government System",
    question: "What is the economic system in the United States?",
    options: [
      "Capitalist economy",
      "Socialist economy",
      "Communist economy",
      "Traditional economy"
    ],
    answer: "Capitalist economy"
  },
  {
    id: 12,
    category: "Government System",
    question: "What is the 'rule of law'?",
    options: [
      "Everyone must follow the law.",
      "Only the President follows the law.",
      "Only Congress makes laws.",
      "Courts decide all laws."
    ],
    answer: "Everyone must follow the law."
  },
  {
    id: 13,
    category: "Branches of Government",
    question: "Name one branch or part of the government.",
    options: [
      "Congress",
      "Governor",
      "Mayor",
      "Cabinet"
    ],
    answer: "Congress"
  },
  {
    id: 14,
    category: "Branches of Government",
    question: "What stops one branch of government from becoming too powerful?",
    options: [
      "Checks and balances",
      "The President",
      "Voting",
      "State governments"
    ],
    answer: "Checks and balances"
  },
  {
    id: 15,
    category: "Branches of Government",
    question: "Who is in charge of the executive branch?",
    options: [
      "The President",
      "Congress",
      "The Supreme Court",
      "The Vice President"
    ],
    answer: "The President"
  },
  {
    id: 16,
    category: "Branches of Government",
    question: "Who makes federal laws?",
    options: [
      "Congress",
      "The President",
      "The Supreme Court",
      "Governors"
    ],
    answer: "Congress"
  },
  {
    id: 17,
    category: "Congress",
    question: "What are the two parts of the U.S. Congress?",
    options: [
      "Senate and House of Representatives",
      "President and Senate",
      "House and Cabinet",
      "Congress and Supreme Court"
    ],
    answer: "Senate and House of Representatives"
  },
  {
    id: 18,
    category: "Congress",
    question: "How many U.S. Senators are there?",
    options: [
      "100",
      "50",
      "435",
      "200"
    ],
    answer: "100"
  },
  {
    id: 19,
    category: "Congress",
    question: "We elect a U.S. Senator for how many years?",
    options: [
      "6",
      "2",
      "4",
      "8"
    ],
    answer: "6"
  },
  {
    id: 20,
    category: "Congress",
    question: "The House of Representatives has how many voting members?",
    options: [
      "435",
      "100",
      "50",
      "538"
    ],
    answer: "435"
  },
    {
    id: 21,
    category: "Congress",
    question: "We elect a U.S. Representative for how many years?",
    options: ["2", "4", "6", "8"],
    answer: "2"
  },
  {
    id: 22,
    category: "Congress",
    question: "Name your U.S. Representative.",
    options: [
      "Depends on where you live",
      "The President",
      "The Vice President",
      "The Governor"
    ],
    answer: "Depends on where you live"
  },
  {
    id: 23,
    category: "Congress",
    question: "Who does a U.S. Senator represent?",
    options: [
      "All people of the state",
      "Only one city",
      "Only Congress",
      "The President"
    ],
    answer: "All people of the state"
  },
  {
    id: 24,
    category: "Congress",
    question: "Why do some states have more Representatives than others?",
    options: [
      "Because they have more people",
      "Because they are older",
      "Because they pay more taxes",
      "Because they have more land"
    ],
    answer: "Because they have more people"
  },
  {
    id: 25,
    category: "Congress",
    question: "We elect a President for how many years?",
    options: ["4", "2", "6", "8"],
    answer: "4"
  },
  {
    id: 26,
    category: "Executive Branch",
    question: "In what month do we vote for President?",
    options: ["November", "January", "July", "March"],
    answer: "November"
  },
  {
    id: 27,
    category: "Executive Branch",
    question: "What is the name of the President of the United States now?",
    options: [
      "Donald J. Trump",
      "Joe Biden",
      "Kamala Harris",
      "Barack Obama"
    ],
    answer: "Donald J. Trump"
  },
  {
    id: 28,
    category: "Executive Branch",
    question: "What is the name of the Vice President of the United States now?",
    options: [
      "JD Vance",
      "Kamala Harris",
      "Mike Pence",
      "Marco Rubio"
    ],
    answer: "JD Vance"
  },
  {
    id: 29,
    category: "Executive Branch",
    question: "If the President can no longer serve, who becomes President?",
    options: [
      "The Vice President",
      "Speaker of the House",
      "Chief Justice",
      "Secretary of State"
    ],
    answer: "The Vice President"
  },
  {
    id: 30,
    category: "Executive Branch",
    question: "If both the President and Vice President can no longer serve, who becomes President?",
    options: [
      "Speaker of the House",
      "Chief Justice",
      "Secretary of State",
      "Senate Majority Leader"
    ],
    answer: "Speaker of the House"
  },
  {
    id: 31,
    category: "Executive Branch",
    question: "Who is the Commander in Chief of the military?",
    options: [
      "The President",
      "The Vice President",
      "Congress",
      "The Secretary of Defense"
    ],
    answer: "The President"
  },
  {
    id: 32,
    category: "Executive Branch",
    question: "Who signs bills to become laws?",
    options: [
      "The President",
      "Congress",
      "The Supreme Court",
      "The Governor"
    ],
    answer: "The President"
  },
  {
    id: 33,
    category: "Executive Branch",
    question: "Who vetoes bills?",
    options: [
      "The President",
      "Congress",
      "The Senate",
      "The Supreme Court"
    ],
    answer: "The President"
  },
  {
    id: 34,
    category: "Executive Branch",
    question: "What does the President's Cabinet do?",
    options: [
      "Advises the President",
      "Makes laws",
      "Runs elections",
      "Approves judges"
    ],
    answer: "Advises the President"
  },
  {
    id: 35,
    category: "Executive Branch",
    question: "What are two Cabinet-level positions?",
    options: [
      "Secretary of State and Secretary of Defense",
      "Governor and Mayor",
      "Judge and Senator",
      "Speaker and Representative"
    ],
    answer: "Secretary of State and Secretary of Defense"
  },
  {
    id: 36,
    category: "Judicial Branch",
    question: "What does the judicial branch do?",
    options: [
      "Reviews laws",
      "Creates laws",
      "Signs laws",
      "Collects taxes"
    ],
    answer: "Reviews laws"
  },
  {
    id: 37,
    category: "Judicial Branch",
    question: "What is the highest court in the United States?",
    options: [
      "The Supreme Court",
      "Federal Court",
      "State Court",
      "Congress"
    ],
    answer: "The Supreme Court"
  },
  {
    id: 38,
    category: "Judicial Branch",
    question: "How many justices are on the Supreme Court?",
    options: ["9", "7", "12", "11"],
    answer: "9"
  },
  {
    id: 39,
    category: "Judicial Branch",
    question: "Who is the Chief Justice of the United States?",
    options: [
      "John Roberts",
      "Clarence Thomas",
      "Amy Coney Barrett",
      "Brett Kavanaugh"
    ],
    answer: "John Roberts"
  },
  {
    id: 40,
    category: "Judicial Branch",
    question: "Under our Constitution, some powers belong to the federal government. What is one power of the federal government?",
    options: [
      "Print money",
      "Issue driver's licenses",
      "Run local schools",
      "Conduct city elections"
    ],
    answer: "Print money"
  },
  {
    id: 41,
    category: "Federal Government",
    question: "Under our Constitution, some powers belong to the federal government. What is another power of the federal government?",
    options: [
      "Declare war",
      "Issue driver's licenses",
      "Run public schools",
      "Conduct local elections"
    ],
    answer: "Declare war"
  },
  {
    id: 42,
    category: "Federal Government",
    question: "Under our Constitution, some powers belong to the states. What is one power of the states?",
    options: [
      "Provide schooling and education",
      "Print money",
      "Declare war",
      "Create federal laws"
    ],
    answer: "Provide schooling and education"
  },
  {
    id: 43,
    category: "Federal Government",
    question: "Who is the Governor of your state?",
    options: [
      "Depends on where you live",
      "The President",
      "The Vice President",
      "The Chief Justice"
    ],
    answer: "Depends on where you live"
  },
  {
    id: 44,
    category: "Federal Government",
    question: "What is the capital of your state?",
    options: [
      "Depends on where you live",
      "Washington, D.C.",
      "New York City",
      "Los Angeles"
    ],
    answer: "Depends on where you live"
  },
  {
    id: 45,
    category: "Federal Government",
    question: "What are the two major political parties in the United States?",
    options: [
      "Democratic and Republican",
      "Green and Republican",
      "Libertarian and Democratic",
      "Independent and Republican"
    ],
    answer: "Democratic and Republican"
  },
  {
    id: 46,
    category: "Political Parties",
    question: "What is the political party of the President now?",
    options: [
      "Republican Party",
      "Democratic Party",
      "Independent Party",
      "Green Party"
    ],
    answer: "Republican Party"
  },
  {
    id: 47,
    category: "Political Parties",
    question: "What is the name of the Speaker of the House of Representatives now?",
    options: [
      "Mike Johnson",
      "Nancy Pelosi",
      "Chuck Schumer",
      "JD Vance"
    ],
    answer: "Mike Johnson"
  },
  {
    id: 48,
    category: "Citizenship",
    question: "There are four amendments to the Constitution about who can vote. Describe one of them.",
    options: [
      "Citizens 18 and older can vote",
      "Only men can vote",
      "Only property owners can vote",
      "Voting is required"
    ],
    answer: "Citizens 18 and older can vote"
  },
  {
    id: 49,
    category: "Citizenship",
    question: "What is one responsibility that is only for United States citizens?",
    options: [
      "Serve on a jury",
      "Obey the law",
      "Pay taxes",
      "Go to school"
    ],
    answer: "Serve on a jury"
  },
  {
    id: 50,
    category: "Citizenship",
    question: "Name one right only for United States citizens.",
    options: [
      "Vote in a federal election",
      "Freedom of speech",
      "Freedom of religion",
      "Freedom of assembly"
    ],
    answer: "Vote in a federal election"
  },
  {
    id: 51,
    category: "Rights & Responsibilities",
    question: "What are two rights of everyone living in the United States?",
    options: [
      "Freedom of speech and freedom of religion",
      "Vote and run for President",
      "Serve on a jury and vote",
      "Carry a passport and vote"
    ],
    answer: "Freedom of speech and freedom of religion"
  },
  {
    id: 52,
    category: "Rights & Responsibilities",
    question: "What do we show loyalty to when we say the Pledge of Allegiance?",
    options: [
      "The United States and the flag",
      "The President",
      "Congress",
      "The Constitution only"
    ],
    answer: "The United States and the flag"
  },
  {
    id: 53,
    category: "Rights & Responsibilities",
    question: "What is one promise you make when you become a United States citizen?",
    options: [
      "Be loyal to the United States",
      "Join the military",
      "Become a senator",
      "Vote in every election"
    ],
    answer: "Be loyal to the United States"
  },
  {
    id: 54,
    category: "Rights & Responsibilities",
    question: "How old do citizens have to be to vote for President?",
    options: [
      "18 and older",
      "16 and older",
      "21 and older",
      "25 and older"
    ],
    answer: "18 and older"
  },
  {
    id: 55,
    category: "Rights & Responsibilities",
    question: "What are two ways that Americans can participate in their democracy?",
    options: [
      "Vote and join a political party",
      "Pay taxes and obey laws",
      "Serve in court and go to school",
      "Own property and travel"
    ],
    answer: "Vote and join a political party"
  },
  {
    id: 56,
    category: "Rights & Responsibilities",
    question: "When is the last day you can send in federal income tax forms?",
    options: [
      "April 15",
      "January 1",
      "July 4",
      "November 1"
    ],
    answer: "April 15"
  },
  {
    id: 57,
    category: "Rights & Responsibilities",
    question: "When must all men register for the Selective Service?",
    options: [
      "At age 18",
      "At age 16",
      "At age 21",
      "At age 25"
    ],
    answer: "At age 18"
  },
  {
    id: 58,
    category: "Colonial Period",
    question: "What is one reason colonists came to America?",
    options: [
      "Freedom",
      "To become President",
      "To join Congress",
      "To avoid voting"
    ],
    answer: "Freedom"
  },
  {
    id: 59,
    category: "Colonial Period",
    question: "Who lived in America before the Europeans arrived?",
    options: [
      "American Indians / Native Americans",
      "British colonists",
      "French settlers",
      "Spanish governors"
    ],
    answer: "American Indians / Native Americans"
  },
  {
    id: 60,
    category: "Colonial Period",
    question: "What group of people was taken to America and sold as slaves?",
    options: [
      "Africans",
      "Europeans",
      "Asians",
      "Native Americans"
    ],
    answer: "Africans"
  },
];
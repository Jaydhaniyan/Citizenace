export interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
  category: string;
}

export const questions: Question[] = [
  {
    id: 1,
    category: "American Government",
    question: "What is the supreme law of the land?",
    options: [
      "The Constitution",
      "The Declaration of Independence",
      "The Articles of Confederation",
      "The Bill of Rights",
    ],
    answer: "The Constitution",
    explanation:
      "The Constitution is the highest law in the United States and creates the framework for the federal government.",
  },
  {
    id: 2,
    category: "American Government",
    question: "What does the Constitution do?",
    options: [
      "Sets up the government",
      "Collects local property taxes",
      "Establishes state borders",
      "Declares war without congressional approval",
    ],
    answer: "Sets up the government",
    explanation:
      "The Constitution sets up and defines the government while protecting the basic rights of Americans.",
  },
  {
    id: 3,
    category: "American Government",
    question:
      "The idea of self-government is in the first three words of the Constitution. What are these words?",
    options: [
      "We the People",
      "In God We",
      "Liberty and Justice",
      "For the Republic",
    ],
    answer: "We the People",
    explanation:
      "'We the People' signifies that sovereign authority is derived from and belongs to the citizens.",
  },
  {
    id: 4,
    category: "American Government",
    question: "What is an amendment?",
    options: [
      "A change (or addition) to the Constitution",
      "A presidential executive order",
      "A decision by the Supreme Court",
      "A treaty between state governors",
    ],
    answer: "A change (or addition) to the Constitution",
    explanation:
      "An amendment is an official modification or addition made to the United States Constitution.",
  },
  {
    id: 5,
    category: "American Government",
    question: "What do we call the first ten amendments to the Constitution?",
    options: [
      "The Bill of Rights",
      "The Preamble",
      "The Federalist Papers",
      "The Declaration of Rights",
    ],
    answer: "The Bill of Rights",
    explanation:
      "The first ten amendments to the Constitution are called the Bill of Rights and protect fundamental liberties.",
  },
  {
    id: 6,
    category: "American Government",
    question: "What is one right or freedom from the First Amendment?",
    options: [
      "Speech",
      "Right to bear arms",
      "Trial by jury",
      "Voting in elections",
    ],
    answer: "Speech",
    explanation:
      "The First Amendment protects freedom of speech, religion, assembly, press, and the right to petition.",
  },
  {
    id: 7,
    category: "American Government",
    question: "How many amendments does the Constitution have?",
    options: ["27", "10", "21", "50"],
    answer: "27",
    explanation:
      "There are 27 ratified amendments to the Constitution, with the most recent ratified in 1992.",
  },
  {
    id: 8,
    category: "Independence",
    question: "What did the Declaration of Independence do?",
    options: [
      "Announced our independence from Great Britain",
      "Created the United States Constitution",
      "Freed all enslaved persons across America",
      "Established the Supreme Court",
    ],
    answer: "Announced our independence from Great Britain",
    explanation:
      "The Declaration announced that the thirteen American colonies were free and independent states.",
  },
  {
    id: 9,
    category: "Independence",
    question: "What are two rights in the Declaration of Independence?",
    options: [
      "Life and liberty",
      "Free speech and trial by jury",
      "Voting and public education",
      "Privacy and property ownership",
    ],
    answer: "Life and liberty",
    explanation:
      "The Declaration declares unalienable rights: Life, Liberty, and the pursuit of Happiness.",
  },
  {
    id: 10,
    category: "American Government",
    question: "What is freedom of religion?",
    options: [
      "You can practice any religion, or not practice a religion",
      "You must practice the official state religion",
      "The federal government selects one national church",
      "Religious practice is prohibited in public places",
    ],
    answer: "You can practice any religion, or not practice a religion",
    explanation:
      "Freedom of religion ensures that everyone may freely practice any faith or choose not to practice any religion.",
  },
  {
    id: 11,
    category: "American Government",
    question: "What is the economic system in the United States?",
    options: [
      "Capitalist economy",
      "Socialist planned economy",
      "Feudal agricultural system",
      "State-controlled commerce",
    ],
    answer: "Capitalist economy",
    explanation:
      "The United States has a capitalist (market) economy where private businesses and consumers drive trade.",
  },
  {
    id: 12,
    category: "American Government",
    question: "What is the 'rule of law'?",
    options: [
      "Everyone must follow the law",
      "Only ordinary citizens must obey the law",
      "Leaders are above legal accountability",
      "Judges decide statutes without written codes",
    ],
    answer: "Everyone must follow the law",
    explanation:
      "The rule of law means that all people, including government officials and leaders, must obey the law.",
  },
  {
    id: 13,
    category: "System of Government",
    question: "Name one branch or part of the government.",
    options: [
      "Congress",
      "The Federal Reserve",
      "The United Nations",
      "State police departments",
    ],
    answer: "Congress",
    explanation:
      "The three branches of federal government are Legislative (Congress), Executive (President), and Judicial (Courts).",
  },
  {
    id: 14,
    category: "System of Government",
    question: "What stops one branch of government from becoming too powerful?",
    options: [
      "Checks and balances",
      "The Federal Reserve",
      "The Military Police",
      "Public opinion polls",
    ],
    answer: "Checks and balances",
    explanation:
      "Checks and balances and the separation of powers prevent any single branch from dominating the federal government.",
  },
  {
    id: 15,
    category: "System of Government",
    question: "Who is in charge of the executive branch?",
    options: [
      "The President",
      "The Chief Justice",
      "The Speaker of the House",
      "The Secretary of State",
    ],
    answer: "The President",
    explanation:
      "The President of the United States leads the executive branch of the federal government.",
  },
  {
    id: 16,
    category: "System of Government",
    question: "Who makes federal laws?",
    options: [
      "Congress",
      "The President alone",
      "The Supreme Court",
      "The Cabinet",
    ],
    answer: "Congress",
    explanation:
      "The legislative branch, consisting of the Senate and House of Representatives, drafts and passes federal laws.",
  },
  {
    id: 17,
    category: "System of Government",
    question: "What are the two parts of the U.S. Congress?",
    options: [
      "The Senate and House of Representatives",
      "The Supreme Court and Appellate Courts",
      "The President and Vice President",
      "The Cabinet and Joint Chiefs",
    ],
    answer: "The Senate and House of Representatives",
    explanation:
      "The U.S. Congress is bicameral, divided into two chambers: the Senate and the House of Representatives.",
  },
  {
    id: 18,
    category: "System of Government",
    question: "How many U.S. Senators are there?",
    options: ["100", "50", "435", "538"],
    answer: "100",
    explanation:
      "There are 100 U.S. Senators, with two senators representing each of the 50 states.",
  },
  {
    id: 19,
    category: "System of Government",
    question: "We elect a U.S. Senator for how many years?",
    options: ["6", "2", "4", "8"],
    answer: "6",
    explanation:
      "U.S. Senators are elected to 6-year terms with staggered election cycles every two years.",
  },
  {
    id: 20,
    category: "System of Government",
    question: "Who is one of your state's U.S. Senators now?",
    options: [
      "Answers will vary by state",
      "The Speaker of the House",
      "The Chief Justice",
      "The Vice President",
    ],
    answer: "Answers will vary by state",
    explanation:
      "Each state has two senators; answers vary by state. Residents of D.C. and U.S. territories have no voting senators.",
  },
  {
    id: 21,
    category: "System of Government",
    question: "The House of Representatives has how many voting members?",
    options: ["435", "100", "50", "538"],
    answer: "435",
    explanation:
      "The U.S. House of Representatives contains 435 voting members, apportioned by state population.",
  },
  {
    id: 22,
    category: "System of Government",
    question: "We elect a U.S. Representative for how many years?",
    options: ["2", "4", "6", "1"],
    answer: "2",
    explanation:
      "Members of the U.S. House of Representatives serve 2-year terms and face reelection every even-numbered year.",
  },
  {
    id: 23,
    category: "System of Government",
    question: "Name your U.S. Representative.",
    options: [
      "Answers will vary by congressional district",
      "Every state has the same representative",
      "Representatives are appointed by the Governor",
      "Representatives serve the whole country equally",
    ],
    answer: "Answers will vary by congressional district",
    explanation:
      "Your U.S. Representative depends on the specific congressional district in which you reside.",
  },
  {
    id: 24,
    category: "System of Government",
    question: "Who does a U.S. Senator represent?",
    options: [
      "All people of the state",
      "Only voters from their party",
      "Residents of the state capital only",
      "Property owners only",
    ],
    answer: "All people of the state",
    explanation:
      "A U.S. Senator represents all residents in their state, regardless of background or political party.",
  },
  {
    id: 25,
    category: "System of Government",
    question:
      "Why do some states have more Representatives than other states?",
    options: [
      "Because of the state's population",
      "Because of the state's geographic size",
      "Because they were original colonies",
      "Because of state tax revenue",
    ],
    answer: "Because of the state's population",
    explanation:
      "Representation in the House is based on population determined by the national census conducted every 10 years.",
  },
  {
    id: 26,
    category: "System of Government",
    question: "We elect a President for how many years?",
    options: ["4", "2", "6", "8"],
    answer: "4",
    explanation:
      "The U.S. President is elected to a 4-year term and can serve a maximum of two terms under the 22nd Amendment.",
  },
  {
    id: 27,
    category: "System of Government",
    question: "In what month do we vote for President?",
    options: ["November", "October", "January", "December"],
    answer: "November",
    explanation:
      "Presidential elections occur every four years on the Tuesday following the first Monday in November.",
  },
  {
    id: 28,
    category: "System of Government",
    question: "What is the name of the President of the United States now?",
    options: [
      "Donald J. Trump",
      "Barack Obama",
      "George W. Bush",
      "Bill Clinton",
    ],
    answer: "Donald J. Trump",
    explanation:
      "The President leads the executive branch and serves as Commander in Chief. Check uscis.gov for updates.",
  },
  {
    id: 29,
    category: "System of Government",
    question: "What is the name of the Vice President of the United States now?",
    options: [
      "JD Vance",
      "Kamala Harris",
      "Mike Pence",
      "Tim Walz",
    ],
    answer: "JD Vance",
    explanation:
      "The Vice President serves as President of the Senate and is first in line in presidential succession.",
  },
  {
    id: 30,
    category: "System of Government",
    question:
      "If the President can no longer serve, who becomes President?",
    options: [
      "The Vice President",
      "The Speaker of the House",
      "The Secretary of State",
      "The Chief Justice",
    ],
    answer: "The Vice President",
    explanation:
      "The Vice President immediately assumes the presidency if the President dies, resigns, or is removed.",
  },
  {
    id: 31,
    category: "System of Government",
    question:
      "If both the President and the Vice President can no longer serve, who becomes President?",
    options: [
      "The Speaker of the House",
      "The Secretary of State",
      "The Secretary of Defense",
      "The Senate Majority Leader",
    ],
    answer: "The Speaker of the House",
    explanation:
      "Under the Presidential Succession Act, the Speaker of the House is second in line to succeed the presidency.",
  },
  {
    id: 32,
    category: "System of Government",
    question: "Who is the Commander in Chief of the military?",
    options: [
      "The President",
      "The Secretary of Defense",
      "The Chairman of the Joint Chiefs",
      "The Vice President",
    ],
    answer: "The President",
    explanation:
      "Article II, Section 2 of the Constitution designates the President as Commander in Chief of the armed forces.",
  },
  {
    id: 33,
    category: "System of Government",
    question: "Who signs bills to become laws?",
    options: [
      "The President",
      "The Chief Justice",
      "The Speaker of the House",
      "The Attorney General",
    ],
    answer: "The President",
    explanation:
      "After Congress passes a bill, the President signs it to enact it into federal law.",
  },
  {
    id: 34,
    category: "System of Government",
    question: "Who vetoes bills?",
    options: [
      "The President",
      "The Supreme Court",
      "The Senate Majority Leader",
      "The Vice President",
    ],
    answer: "The President",
    explanation:
      "The President has constitutional power to reject bills passed by Congress by issuing a veto.",
  },
  {
    id: 35,
    category: "System of Government",
    question: "What does the President's Cabinet do?",
    options: [
      "Advises the President",
      "Drafts federal laws",
      "Confirms federal judges",
      "Overrides presidential vetoes",
    ],
    answer: "Advises the President",
    explanation:
      "The Cabinet is composed of executive department heads whose role is to advise the President.",
  },
  {
    id: 36,
    category: "System of Government",
    question: "What are two Cabinet-level positions?",
    options: [
      "Secretary of State and Secretary of Defense",
      "Speaker of the House and Chief Justice",
      "Governor and State Senator",
      "Ambassador to the UN and Mayor",
    ],
    answer: "Secretary of State and Secretary of Defense",
    explanation:
      "Cabinet positions include the Attorney General and Secretaries of State, Defense, Treasury, and Homeland Security.",
  },
  {
    id: 37,
    category: "System of Government",
    question: "What does the judicial branch do?",
    options: [
      "Reviews and explains laws",
      "Commands armed forces",
      "Allocates the federal budget",
      "Collects federal income taxes",
    ],
    answer: "Reviews and explains laws",
    explanation:
      "The judicial branch reviews laws, resolves disputes, and decides if laws violate the Constitution.",
  },
  {
    id: 38,
    category: "System of Government",
    question: "What is the highest court in the United States?",
    options: [
      "The Supreme Court",
      "The Court of Appeals",
      "The Federal Circuit Court",
      "The District Court",
    ],
    answer: "The Supreme Court",
    explanation:
      "The Supreme Court of the United States is the nation's highest tribunal and final interpreter of federal law.",
  },
  {
    id: 39,
    category: "System of Government",
    question: "How many justices are on the Supreme Court?",
    options: ["9", "7", "11", "12"],
    answer: "9",
    explanation:
      "By law since 1869, the Supreme Court has 9 justices: 1 Chief Justice and 8 Associate Justices.",
  },
  {
    id: 40,
    category: "System of Government",
    question: "Who is the Chief Justice of the United States now?",
    options: [
      "John Roberts",
      "Clarence Thomas",
      "Elena Kagan",
      "Sonia Sotomayor",
    ],
    answer: "John Roberts",
    explanation:
      "John G. Roberts, Jr. has served as the 17th Chief Justice of the United States since 2005.",
  },
  {
    id: 41,
    category: "System of Government",
    question:
      "Under our Constitution, some powers belong to the federal government. What is one power of the federal government?",
    options: [
      "To print money",
      "To issue driver's licenses",
      "To provide public schooling",
      "To set police and fire zoning",
    ],
    answer: "To print money",
    explanation:
      "Delegated federal powers include printing money, declaring war, maintaining the military, and making treaties.",
  },
  {
    id: 42,
    category: "System of Government",
    question:
      "Under our Constitution, some powers belong to the states. What is one power of the states?",
    options: [
      "Provide schooling and education",
      "Print national currency",
      "Declare war on foreign countries",
      "Make international treaties",
    ],
    answer: "Provide schooling and education",
    explanation:
      "Reserved state powers include providing education, issuing driver's licenses, and running state police departments.",
  },
  {
    id: 43,
    category: "System of Government",
    question: "Who is the Governor of your state now?",
    options: [
      "Answers will vary by state",
      "The Secretary of the Interior",
      "The U.S. Attorney General",
      "The Chief Justice",
    ],
    answer: "Answers will vary by state",
    explanation:
      "Each of the 50 states elects its own Governor as head of the state executive branch.",
  },
  {
    id: 44,
    category: "Geography",
    question: "What is the capital of your state?",
    options: [
      "Answers will vary by state",
      "Washington, D.C.",
      "New York City",
      "Philadelphia",
    ],
    answer: "Answers will vary by state",
    explanation:
      "Each state has an official capital city where its legislature meets and governor's office is located.",
  },
  {
    id: 45,
    category: "System of Government",
    question: "What are the two major political parties in the United States?",
    options: [
      "Democratic and Republican",
      "Liberal and Conservative",
      "Progressive and Libertarian",
      "Federalist and Whig",
    ],
    answer: "Democratic and Republican",
    explanation:
      "The Democratic and Republican parties have been the two dominant political parties in the U.S. since the 1850s.",
  },
  {
    id: 46,
    category: "System of Government",
    question: "What is the political party of the President now?",
    options: [
      "Republican Party",
      "Democratic Party",
      "Independent Party",
      "Libertarian Party",
    ],
    answer: "Republican Party",
    explanation:
      "The President belongs to the Republican Party. Check uscis.gov for current leadership updates.",
  },
  {
    id: 47,
    category: "System of Government",
    question:
      "What is the name of the Speaker of the House of Representatives now?",
    options: [
      "Mike Johnson",
      "Nancy Pelosi",
      "Kevin McCarthy",
      "Hakeem Jeffries",
    ],
    answer: "Mike Johnson",
    explanation:
      "Mike Johnson serves as Speaker of the House, the presiding officer of the House of Representatives.",
  },
  {
    id: 48,
    category: "Rights and Responsibilities",
    question:
      "There are four amendments to the Constitution about who can vote. Describe one of them.",
    options: [
      "Citizens 18 and older can vote",
      "Only property owners can vote",
      "Citizens must pass a literacy test to vote",
      "Only taxpayers can vote",
    ],
    answer: "Citizens 18 and older can vote",
    explanation:
      "The 26th Amendment lowered the national voting age to 18; others prohibited discrimination by race, sex, or poll tax.",
  },
  {
    id: 49,
    category: "Rights and Responsibilities",
    question:
      "What is one responsibility that is only for United States citizens?",
    options: [
      "Serve on a jury",
      "Pay income taxes",
      "Obey traffic laws",
      "Work for the government",
    ],
    answer: "Serve on a jury",
    explanation:
      "Serving on a jury and voting in federal elections are civic duties reserved strictly for U.S. citizens.",
  },
  {
    id: 50,
    category: "Rights and Responsibilities",
    question: "Name one right only for United States citizens.",
    options: [
      "Vote in a federal election",
      "Freedom of speech",
      "Freedom of religion",
      "Right to a fair trial",
    ],
    answer: "Vote in a federal election",
    explanation:
      "Only U.S. citizens have the constitutional right to vote in federal elections and run for federal office.",
  },
  {
    id: 51,
    category: "Rights and Responsibilities",
    question: "What are two rights of everyone living in the United States?",
    options: [
      "Freedom of speech and freedom of religion",
      "Right to vote in federal elections and run for Senate",
      "Exemption from taxes and free healthcare",
      "Right to travel abroad without a passport and free housing",
    ],
    answer: "Freedom of speech and freedom of religion",
    explanation:
      "The Bill of Rights guarantees fundamental liberties like speech, assembly, and religion to all residents.",
  },
  {
    id: 52,
    category: "Rights and Responsibilities",
    question:
      "What do we show loyalty to when we say the Pledge of Allegiance?",
    options: [
      "The United States and the flag",
      "The President and Congress",
      "The Constitution and Supreme Court",
      "The state government",
    ],
    answer: "The United States and the flag",
    explanation:
      "Reciting the Pledge of Allegiance expresses loyalty to the United States and the American flag.",
  },
  {
    id: 53,
    category: "Rights and Responsibilities",
    question:
      "What is one promise you make when you become a United States citizen?",
    options: [
      "Defend the Constitution and laws of the United States",
      "Never visit another country",
      "Register with a specific political party",
      "Vote in every municipal election",
    ],
    answer: "Defend the Constitution and laws of the United States",
    explanation:
      "The Naturalization Oath requires new citizens to defend the Constitution and obey the laws of the nation.",
  },
  {
    id: 54,
    category: "Rights and Responsibilities",
    question: "How old do citizens have to be to vote for President?",
    options: ["18 and older", "16 and older", "21 and older", "25 and older"],
    answer: "18 and older",
    explanation:
      "The 26th Amendment guarantees voting rights in all federal, state, and local elections to citizens 18 and older.",
  },
  {
    id: 55,
    category: "Rights and Responsibilities",
    question:
      "What are two ways that Americans can participate in their democracy?",
    options: [
      "Vote and join a political party",
      "Veto laws and declare emergencies",
      "Appoint judges and write treaties",
      "Issue executive orders and mint coins",
    ],
    answer: "Vote and join a political party",
    explanation:
      "Citizens participate in democracy by voting, joining campaigns, contacting representatives, and running for office.",
  },
  {
    id: 56,
    category: "Rights and Responsibilities",
    question: "When is the last day you can send in federal income tax forms?",
    options: ["April 15", "January 1", "July 4", "December 31"],
    answer: "April 15",
    explanation:
      "Federal income tax returns for individuals are normally due annually on April 15.",
  },
  {
    id: 57,
    category: "Rights and Responsibilities",
    question: "When must all men register for the Selective Service?",
    options: [
      "At age 18 (between 18 and 26)",
      "At age 16",
      "At age 21",
      "At age 25",
    ],
    answer: "At age 18 (between 18 and 26)",
    explanation:
      "Federal law mandates that male U.S. citizens and immigrants register with the Selective Service between ages 18 and 26.",
  },
  {
    id: 58,
    category: "Colonial Period",
    question: "What is one reason colonists came to America?",
    options: [
      "Freedom",
      "To join the British crown",
      "To avoid farming",
      "To build a monarchy",
    ],
    answer: "Freedom",
    explanation:
      "Colonists came to America seeking religious freedom, political liberty, and economic opportunity.",
  },
  {
    id: 59,
    category: "Colonial Period",
    question: "Who lived in America before the Europeans arrived?",
    options: [
      "American Indians",
      "Vikings only",
      "No one",
      "Ancient Romans",
    ],
    answer: "American Indians",
    explanation:
      "Indigenous Native American nations inhabited the Americas for thousands of years before European exploration.",
  },
  {
    id: 60,
    category: "Colonial Period",
    question: "What group of people was taken to America and sold as slaves?",
    options: ["Africans", "Polynesians", "Vikings", "Canadians"],
    answer: "Africans",
    explanation:
      "Millions of people from Africa were forcibly brought to the Americas and subjected to chattel slavery.",
  },
  {
    id: 61,
    category: "Independence",
    question: "Why did the colonists fight the British?",
    options: [
      "Because of high taxes without representation",
      "Because they wanted an emperor",
      "Because Britain allied with France",
      "Because the British banned trade",
    ],
    answer: "Because of high taxes without representation",
    explanation:
      "Colonists fought against unfair British taxation without representation and the quartering of troops.",
  },
  {
    id: 62,
    category: "Independence",
    question: "Who wrote the Declaration of Independence?",
    options: [
      "Thomas Jefferson",
      "George Washington",
      "Benjamin Franklin",
      "Alexander Hamilton",
    ],
    answer: "Thomas Jefferson",
    explanation:
      "Thomas Jefferson was chosen by the Continental Congress to draft the historic Declaration of Independence in 1776.",
  },
  {
    id: 63,
    category: "Independence",
    question: "When was the Declaration of Independence adopted?",
    options: [
      "July 4, 1776",
      "July 4, 1787",
      "September 17, 1787",
      "November 11, 1918",
    ],
    answer: "July 4, 1776",
    explanation:
      "The Continental Congress formally adopted the Declaration of Independence on July 4, 1776, in Philadelphia.",
  },
  {
    id: 64,
    category: "Colonial Period",
    question: "There were 13 original states. Name three.",
    options: [
      "New York, New Jersey, and Pennsylvania",
      "California, Texas, and Florida",
      "Ohio, Illinois, and Michigan",
      "Washington, Oregon, and Nevada",
    ],
    answer: "New York, New Jersey, and Pennsylvania",
    explanation:
      "The original thirteen states evolved from the British colonies along the Atlantic coast.",
  },
  {
    id: 65,
    category: "Colonial Period",
    question: "What happened at the Constitutional Convention?",
    options: [
      "The Constitution was written",
      "The Declaration of Independence was drafted",
      "The Civil War peace treaty was signed",
      "George Washington was crowned king",
    ],
    answer: "The Constitution was written",
    explanation:
      "Founding Fathers gathered in Philadelphia in 1787 to frame and write the United States Constitution.",
  },
  {
    id: 66,
    category: "Colonial Period",
    question: "When was the Constitution written?",
    options: ["1787", "1776", "1789", "1803"],
    answer: "1787",
    explanation:
      "The Constitution was drafted and signed by convention delegates in September 1787.",
  },
  {
    id: 67,
    category: "Colonial Period",
    question:
      "The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.",
    options: [
      "James Madison",
      "Thomas Jefferson",
      "George Washington",
      "Benjamin Franklin",
    ],
    answer: "James Madison",
    explanation:
      "James Madison, Alexander Hamilton, and John Jay co-wrote 85 essays urging constitutional ratification.",
  },
  {
    id: 68,
    category: "Colonial Period",
    question: "What is one thing Benjamin Franklin is famous for?",
    options: [
      "U.S. diplomat",
      "Third President of the United States",
      "Author of the Constitution",
      "First Chief Justice of the Supreme Court",
    ],
    answer: "U.S. diplomat",
    explanation:
      "Benjamin Franklin served as a brilliant diplomat to France, helped draft the Constitution, and founded free libraries.",
  },
  {
    id: 69,
    category: "Independence",
    question: "Who is the 'Father of Our Country'?",
    options: [
      "George Washington",
      "Thomas Jefferson",
      "Abraham Lincoln",
      "Benjamin Franklin",
    ],
    answer: "George Washington",
    explanation:
      "George Washington is celebrated as the Father of Our Country for commanding the Revolutionary Army and leading the nation.",
  },
  {
    id: 70,
    category: "Independence",
    question: "Who was the first President of the United States?",
    options: [
      "George Washington",
      "John Adams",
      "Thomas Jefferson",
      "James Madison",
    ],
    answer: "George Washington",
    explanation:
      "George Washington served as the first President under the Constitution, from 1789 to 1797.",
  },
  {
    id: 71,
    category: "1800s",
    question: "What territory did the United States buy from France in 1803?",
    options: [
      "The Louisiana Territory",
      "Alaska",
      "Florida",
      "California",
    ],
    answer: "The Louisiana Territory",
    explanation:
      "The Louisiana Purchase doubled the land area of the United States under President Thomas Jefferson.",
  },
  {
    id: 72,
    category: "1800s",
    question: "Name one war fought by the United States in the 1800s.",
    options: [
      "The Civil War",
      "World War I",
      "The Revolutionary War",
      "The French and Indian War",
    ],
    answer: "The Civil War",
    explanation:
      "Major 19th-century conflicts included the War of 1812, Mexican-American War, Civil War, and Spanish-American War.",
  },
  {
    id: 73,
    category: "1800s",
    question: "Name the U.S. war between the North and the South.",
    options: [
      "The Civil War",
      "The War of 1812",
      "The Revolutionary War",
      "The Spanish-American War",
    ],
    answer: "The Civil War",
    explanation:
      "The American Civil War (1861–1865) was fought between the Union states and the Confederate secessionist states.",
  },
  {
    id: 74,
    category: "1800s",
    question: "Name one problem that led to the Civil War.",
    options: [
      "Slavery",
      "Immigration restrictions",
      "Oil drilling rights",
      "Religious disagreements",
    ],
    answer: "Slavery",
    explanation:
      "The central cause of the Civil War was the conflict over slavery, alongside states' rights and economic tensions.",
  },
  {
    id: 75,
    category: "1800s",
    question: "What was one important thing that Abraham Lincoln did?",
    options: [
      "Freed the slaves (Emancipation Proclamation)",
      "Purchased Alaska from Russia",
      "Wrote the Declaration of Independence",
      "Founded the first American university",
    ],
    answer: "Freed the slaves (Emancipation Proclamation)",
    explanation:
      "Abraham Lincoln preserved the Union during the Civil War and issued the Emancipation Proclamation.",
  },
  {
    id: 76,
    category: "1800s",
    question: "What did the Emancipation Proclamation do?",
    options: [
      "Freed slaves in the Confederacy",
      "Ended the War of 1812",
      "Gave women the right to vote",
      "Created the public school system",
    ],
    answer: "Freed slaves in the Confederacy",
    explanation:
      "Effective January 1, 1863, the Emancipation Proclamation declared enslaved persons in rebellious states free.",
  },
  {
    id: 77,
    category: "1800s",
    question: "What did Susan B. Anthony do?",
    options: [
      "Fought for women's rights",
      "Led the Underground Railroad",
      "Designed the American flag",
      "Served as a Cabinet secretary",
    ],
    answer: "Fought for women's rights",
    explanation:
      "Susan B. Anthony was a leading activist who campaigned tirelessly for women's voting rights and civil equality.",
  },
  {
    id: 78,
    category: "Recent American History",
    question: "Name one war fought by the United States in the 1900s.",
    options: [
      "World War I",
      "The Civil War",
      "The Mexican-American War",
      "The War of 1812",
    ],
    answer: "World War I",
    explanation:
      "20th-century U.S. wars included World War I, World War II, the Korean War, the Vietnam War, and the Persian Gulf War.",
  },
  {
    id: 79,
    category: "Recent American History",
    question: "Who was President during World War I?",
    options: [
      "Woodrow Wilson",
      "Theodore Roosevelt",
      "Franklin D. Roosevelt",
      "Herbert Hoover",
    ],
    answer: "Woodrow Wilson",
    explanation:
      "Woodrow Wilson served as President during World War I and advocated for the creation of the League of Nations.",
  },
  {
    id: 80,
    category: "Recent American History",
    question:
      "Who was President during the Great Depression and World War II?",
    options: [
      "Franklin Roosevelt",
      "Herbert Hoover",
      "Harry S. Truman",
      "Dwight D. Eisenhower",
    ],
    answer: "Franklin Roosevelt",
    explanation:
      "Franklin D. Roosevelt established the New Deal and guided the United States throughout most of World War II.",
  },
  {
    id: 81,
    category: "Recent American History",
    question: "Who did the United States fight in World War II?",
    options: [
      "Japan, Germany, and Italy",
      "Russia, China, and North Korea",
      "Great Britain, France, and Canada",
      "Spain, Mexico, and Brazil",
    ],
    answer: "Japan, Germany, and Italy",
    explanation:
      "During World War II, the United States and the Allied coalition fought against the Axis powers: Japan, Germany, and Italy.",
  },
  {
    id: 82,
    category: "Recent American History",
    question:
      "Before he was President, Eisenhower was a general. What war was he in?",
    options: [
      "World War II",
      "World War I",
      "The Korean War",
      "The Vietnam War",
    ],
    answer: "World War II",
    explanation:
      "General Dwight D. Eisenhower served as Supreme Allied Commander in Europe, directing the D-Day Normandy invasion.",
  },
  {
    id: 83,
    category: "Recent American History",
    question:
      "During the Cold War, what was the main concern of the United States?",
    options: [
      "Communism",
      "Climate change",
      "Global inflation",
      "Colonial expansion by European empires",
    ],
    answer: "Communism",
    explanation:
      "The primary focus of American defense and foreign policy during the Cold War was containing the spread of communism.",
  },
  {
    id: 84,
    category: "Recent American History",
    question: "What movement tried to end racial discrimination?",
    options: [
      "Civil rights movement",
      "Temperance movement",
      "Women's suffrage movement",
      "Labor union movement",
    ],
    answer: "Civil rights movement",
    explanation:
      "The civil rights movement used nonviolent protest and legal advocacy to combat segregation and racial discrimination.",
  },
  {
    id: 85,
    category: "Recent American History",
    question: "What did Martin Luther King, Jr. do?",
    options: [
      "Fought for civil rights",
      "Wrote the Civil Rights Act as President",
      "Served on the Supreme Court",
      "Commanded military troops in World War II",
    ],
    answer: "Fought for civil rights",
    explanation:
      "Dr. Martin Luther King, Jr. was a prominent civil rights leader who championed equality through peaceful demonstrations.",
  },
  {
    id: 86,
    category: "Recent American History",
    question:
      "What major event happened on September 11, 2001, in the United States?",
    options: [
      "Terrorists attacked the United States",
      "The stock market crashed",
      "The Cold War officially ended",
      "Hurricane Katrina struck the Gulf Coast",
    ],
    answer: "Terrorists attacked the United States",
    explanation:
      "On September 11, 2001, terrorists hijacked four commercial flights, attacking the World Trade Center and Pentagon.",
  },
  {
    id: 87,
    category: "American History",
    question: "Name one American Indian tribe in the United States.",
    options: ["Cherokee", "Inca", "Maya", "Aztec"],
    answer: "Cherokee",
    explanation:
      "The Cherokee, Navajo, Sioux, Chippewa, and Choctaw are among the hundreds of sovereign American Indian nations.",
  },
  {
    id: 88,
    category: "Geography",
    question: "Name one of the two longest rivers in the United States.",
    options: [
      "Missouri River",
      "Colorado River",
      "Rio Grande",
      "Hudson River",
    ],
    answer: "Missouri River",
    explanation:
      "The Missouri River and Mississippi River are the two longest river systems in North America.",
  },
  {
    id: 89,
    category: "Geography",
    question: "What ocean is on the West Coast of the United States?",
    options: [
      "Pacific Ocean",
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
    ],
    answer: "Pacific Ocean",
    explanation:
      "The Pacific Ocean borders the western United States, including California, Oregon, Washington, Hawaii, and Alaska.",
  },
  {
    id: 90,
    category: "Geography",
    question: "What ocean is on the East Coast of the United States?",
    options: [
      "Atlantic Ocean",
      "Pacific Ocean",
      "Indian Ocean",
      "Southern Ocean",
    ],
    answer: "Atlantic Ocean",
    explanation:
      "The Atlantic Ocean borders the eastern seaboard from Maine down through Florida.",
  },
  {
    id: 91,
    category: "Geography",
    question: "Name one U.S. territory.",
    options: ["Puerto Rico", "Bermuda", "Cuba", "The Bahamas"],
    answer: "Puerto Rico",
    explanation:
      "Major inhabited U.S. territories include Puerto Rico, Guam, U.S. Virgin Islands, American Samoa, and Northern Mariana Islands.",
  },
  {
    id: 92,
    category: "Geography",
    question: "Name one state that borders Canada.",
    options: ["New York", "Florida", "California", "Texas"],
    answer: "New York",
    explanation:
      "Thirteen U.S. states share a northern border with Canada, including New York, Washington, Montana, and Maine.",
  },
  {
    id: 93,
    category: "Geography",
    question: "Name one state that borders Mexico.",
    options: ["Texas", "Florida", "Louisiana", "Georgia"],
    answer: "Texas",
    explanation:
      "Four southern states border Mexico: California, Arizona, New Mexico, and Texas.",
  },
  {
    id: 94,
    category: "Geography",
    question: "What is the capital of the United States?",
    options: [
      "Washington, D.C.",
      "New York City",
      "Philadelphia",
      "Boston",
    ],
    answer: "Washington, D.C.",
    explanation:
      "Washington, District of Columbia is the federal capital and seat of all three branches of the U.S. government.",
  },
  {
    id: 95,
    category: "Symbols",
    question: "Where is the Statue of Liberty?",
    options: [
      "New York Harbor",
      "Boston Harbor",
      "San Francisco Bay",
      "Washington, D.C.",
    ],
    answer: "New York Harbor",
    explanation:
      "The Statue of Liberty is located on Liberty Island in New York Harbor and stands as a global symbol of freedom.",
  },
  {
    id: 96,
    category: "Symbols",
    question: "Why does the flag have 13 stripes?",
    options: [
      "Because there were 13 original colonies",
      "Because there were 13 founding fathers",
      "Because it was adopted in 1913",
      "Because 13 states signed the Bill of Rights",
    ],
    answer: "Because there were 13 original colonies",
    explanation:
      "The 13 alternating red and white stripes represent the original thirteen American colonies that rebelled against Britain.",
  },
  {
    id: 97,
    category: "Symbols",
    question: "Why does the flag have 50 stars?",
    options: [
      "Because there is one star for each state",
      "Because there were 50 original amendments proposed",
      "Because there were 50 signers of the Constitution",
      "Because the U.S. has 50 presidents",
    ],
    answer: "Because there is one star for each state",
    explanation:
      "Each of the 50 white stars on the blue union represents one of the fifty current states of the Union.",
  },
  {
    id: 98,
    category: "Symbols",
    question: "What is the name of the national anthem?",
    options: [
      "The Star-Spangled Banner",
      "America the Beautiful",
      "God Bless America",
      "My Country, 'Tis of Thee",
    ],
    answer: "The Star-Spangled Banner",
    explanation:
      "Written by Francis Scott Key in 1814, 'The Star-Spangled Banner' was officially designated the national anthem in 1931.",
  },
  {
    id: 99,
    category: "Holidays",
    question: "When do we celebrate Independence Day?",
    options: ["July 4", "June 19", "September 17", "November 11"],
    answer: "July 4",
    explanation:
      "Independence Day (the Fourth of July) commemorates the adoption of the Declaration of Independence on July 4, 1776.",
  },
  {
    id: 100,
    category: "Holidays",
    question: "Name two national U.S. holidays.",
    options: [
      "New Year's Day and Memorial Day",
      "Valentine's Day and Halloween",
      "April Fools' Day and Earth Day",
      "St. Patrick's Day and Easter",
    ],
    answer: "New Year's Day and Memorial Day",
    explanation:
      "Federal holidays honor historic events and service, including New Year's Day, Memorial Day, Juneteenth, and Independence Day.",
  },
];

export default questions;

const proposalData = [
  {
    id: 1,
    title: "Drake jhon",
    rating: 3,
    review: 200,
    amount: 75,
    days: 30,
  },
  {
    id: 2,
    title: "Jhon dyre",
    rating: 4,
    review: 20,
    amount: 55,
    days: 45,
  },
  {
    id: 3,
    title: "Aman singh",
    rating: 5,
    review: 15,
    amount: 125,
    days: 20,
  },
];

const transHistory = [
  {
    id: 1,
    company: "Amazon",
    category: "Freelance Designer",
    amount: "₦120.00",
  },

  {
    id: 2,
    company: "Google",
    category: "Services",
    amount: "₦120.00",
  },

  {
    id: 3,
    company: "Dell",
    category: "Services",
    amount: "₦120.00",
  },
];

const bankCards = [
  {
    id: 1,
    bank: "SBI",
    code: "1234",
  },

  {
    id: 2,
    bank: "MasterCard",
    code: "1234",
  },
  {
    id: 3,
    bank: "HDFC",
    code: "1234",
  },
];

const jobCard = [
  {
    id: 1,
    title: "Google",
    subtitle: "Software Engineer",
    range: "$50-$100",
    image: require("../assets/appIcon.jpg"),
    topics: ["Coding", "Android"],
  },
  {
    id: 2,
    title: "Apple",
    subtitle: "Freelance Graphic Design",
    range: "$25-$75",
    image: require("../assets/appIcon.jpg"),
    topics: ["UI/UX", "Remote"],
  },
  {
    id: 3,
    title: "Facebook",
    subtitle: "Freelance Graphic Design",
    range: "$25-$75",
    image: require("../assets/appIcon.jpg"),
    topics: ["Social Media Marketing", "Marketing"],
  },
  {
    id: 4,
    title: "IBM",
    subtitle: "Freelance Graphic Design",
    range: "$25-$75",
    image: require("../assets/appIcon.jpg"),
    topics: ["GUI", "Remote"],
  },
  {
    id: 5,
    title: "Microsoft",
    subtitle: "Freelance Graphic Design",
    range: "$25-$75",
    image: require("../assets/appIcon.jpg"),
    topics: ["Desktop", "Store"],
  },
];

export { proposalData, jobCard, transHistory, bankCards };

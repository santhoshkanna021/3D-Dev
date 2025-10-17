// index.js
export const servicesData = [
  {
    title: "Full-Stack Development",
    description:
      "I build fast, scalable, and maintainable web applications using the MERN Stack. From clean React frontends to robust Node.js backends, I ensure seamless integrations and optimized performance at every layer.",
    items: [
      { title: "Backend", description: "(Node.js, Express, REST/GraphQL APIs, Authentication Systems)" },
      { title: "Frontend", description: "(React, Redux, TypeScript, Interactive UI/UX)" },
      { title: "Database", description: "(MongoDB, SQL, Optimized & Scalable Schemas)" },
    ],
  },
  {
    title: "Data Analytics & Visualization",
    description:
      "I transform raw data into actionable insights to help businesses make informed decisions. Using modern analytics tools and visualization techniques, I deliver dashboards, reports, and predictive models that drive growth.",
    items: [
      { title: "Data Cleaning & ETL", description: "(Python, Pandas, SQL, Data Pipeline Automation)" },
      { title: "Dashboarding", description: "(Power BI, Tableau, D3.js, Interactive Reports)" },
      { title: "Predictive Analysis", description: "(Machine Learning Models, Trend Forecasting, Business Insights)" },
    ],
  },
];

export const projects = [
  {
    id: 1,
    name: "Agency.ai",
    description:
      "A modern digital agency website built to showcase services, portfolio, and client trust with an elegant and interactive UI.",
    href: "",
    image: "/assets/projects/Agency.ai.png",
    bgImage: "/assets/backgrounds/clean-white.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Next.js" },
      { id: 3, name: "Tailwind CSS" },
      { id: 4, name: "Framer Motion" },
    ],
  },
  {
    id: 2,
    name: "Movie Finder App",
    description:
      "A movie search application that helps users find and explore movies effortlessly using an API-driven interface.",
    href: "",
    image: "/assets/projects/Movie app.png",
    bgImage: "/assets/backgrounds/dark-purple.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Tailwind CSS" },
      { id: 3, name: "TMDb API" },
      { id: 4, name: "Vite" },
    ],
  },
  {
    id: 3,
    name: "Airline Passenger Insight Dashboard",
    description:
      "An interactive Power BI dashboard visualizing passenger satisfaction metrics, travel class insights, and factors affecting customer loyalty.",
    href: "",
    image: "/assets/projects/Images.png",
    bgImage: "/assets/backgrounds/gradient-grey.jpg",
    frameworks: [
      { id: 1, name: "Power BI" },
      { id: 2, name: "Excel" },
      { id: 3, name: "Data Visualization" },
      { id: 4, name: "DAX" },
    ],
  },
];

export const socials = [

  { name: "LinkedIn", href: "https://www.linkedin.com/in/santhoshkanna021/" },
  { name: "GitHub", href: "https://github.com/santhoshkanna021" },
];

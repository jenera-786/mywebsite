export const profile = {
  name: "Jenera Jaani Basha",
  role: "Data Science Fresher | Machine Learning | Data Analytics",
  intro:
    "Passionate about transforming data into meaningful insights and building data-driven solutions using Python, Machine Learning, SQL, Power BI, and Tableau.",
  objective:
    "Eager Data Science fresher with strong foundation in machine learning, data analysis, and Python programming. Seeking an entry-level opportunity to apply technical skills in building data-driven solutions while contributing to organizational goals. Committed to continuous learning and delivering high-quality analytical insights.",
  location: "Tirupur, Tamil Nadu, India",
  phone: "9994316075",
  email: "jenerabasha@gmail.com",
  github: "https://github.com/jenera123",
  githubHandle: "jenera123",
  linkedin: "https://www.linkedin.com/in/jenera-j",
  linkedinHandle: "jenera-j",
  resume: "/jenera-jaani-basha-resume.pdf",
};

export const skillGroups = [
  { title: "Programming", items: ["Python", "R"] },
  {
    title: "Data Analysis",
    items: ["Pandas", "NumPy", "Exploratory Data Analysis", "Machine Learning"],
  },
  { title: "Database", items: ["SQL", "MongoDB"] },
  {
    title: "Data Visualization",
    items: ["Tableau", "Power BI", "Matplotlib", "Seaborn"],
  },
  { title: "Tools & Platforms", items: ["Git", "GitHub", "AWS"] },
  { title: "Web Technologies", items: ["HTML", "CSS", "JavaScript"] },
];

export type Project = {
  name: string;
  tech: string[];
  description: string;
  contributions: string[];
  label?: string;
  visual: "ml" | "map" | "excel" | "fraud" | "bi";
};

export const projects: Project[] = [
  {
    name: "Heart Disease Analysis",
    tech: ["Python", "Machine Learning", "Tableau"],
    description:
      "Built an end-to-end machine learning project to analyze patient health data and predict heart disease risk.",
    contributions: [
      "Data cleaning",
      "Feature engineering",
      "Exploratory Data Analysis",
      "Model training",
      "Performance evaluation",
      "Tableau dashboard",
    ],
    visual: "ml",
  },
  {
    name: "Crime Prediction System",
    tech: ["Machine Learning", "Tableau"],
    description:
      "Developed an end-to-end machine learning project to predict crime patterns using historical data.",
    contributions: [
      "Data preprocessing",
      "Feature engineering",
      "Model training",
      "Result visualization",
    ],
    visual: "map",
  },
  {
    name: "Sales Dashboard",
    tech: ["Advanced Excel", "VBA Macros"],
    description:
      "Developed an interactive sales dashboard using Advanced Excel and VBA Macros.",
    contributions: [
      "Automated data processing",
      "Automated report generation",
      "Interactive dashboard development",
    ],
    label: "Internship Project",
    visual: "excel",
  },
  {
    name: "Credit Card Fraud Detection",
    tech: ["Python", "Machine Learning"],
    description:
      "Built a machine learning model to detect fraudulent credit card transactions.",
    contributions: [
      "Data preprocessing",
      "Handling class imbalance",
      "Model performance evaluation",
    ],
    label: "Internship Project",
    visual: "fraud",
  },
  {
    name: "Hospital Management Dashboard",
    tech: ["Power BI", "Power Query", "DAX"],
    description:
      "Developed an interactive Power BI dashboard to analyze patient admissions, treatment costs, doctor performance, and hospital KPIs.",
    contributions: [
      "Power Query",
      "DAX",
      "Cards",
      "Charts",
      "Slicers",
      "Healthcare data analysis",
      "Actionable insights",
    ],
    visual: "bi",
  },
];

export const experience = [
  {
    role: "Data Science Intern",
    org: "Skilled Mentor",
    duration: "One month",
    description:
      "Completed a one-month internship focused on data analysis, machine learning, and real-world datasets.",
  },
  {
    role: "Data Science Intern",
    org: "Novitech R&D Private Limited",
    duration: "",
    description:
      "Gained hands-on experience in Python, machine learning algorithms, data visualization, and model building.",
  },
];

export const education = [
  {
    degree: "M.Sc. Computer Science",
    school: "RVS College of Arts and Science, Coimbatore",
    years: "2024 – 2026",
    score: "95%",
  },
  {
    degree: "B.Sc. Computer Science",
    school: "LRG Arts College for Women, Tirupur",
    years: "2021 – 2024",
    score: "87%",
  },
  {
    degree: "HSC",
    school: "Jaivabai Girls Hr. Sec. School, Tirupur",
    years: "2020 – 2021",
    score: "72%",
  },
];

export const highlights = [
  "Data Science Intern at Skilled Mentor",
  "Data Science Intern at Novitech R&D Private Limited",
  'Workshop on "Applications in Business Intelligence and Data Analytics" organized by RVS College of Arts and Science',
  "Designed an IPL Dashboard using Tableau",
  "Infosys BPM Soft Skills Training Program",
];

export const certifications = [
  { title: "Python in Data Science", issuer: "Infosys" },
  {
    title: "Data Analytics — Power BI, Tableau, SQL, Excel",
    issuer: "Simplilearn",
  },
  { title: "AWS for Data Science", issuer: "Simplilearn" },
];

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

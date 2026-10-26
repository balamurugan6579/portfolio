export const personalDetails = {
  name: "Balamurugan M.",
  shortName: "BM",
  title: "Information Technology Student & Aspiring Software Developer",
  careerPositioning: "Information Technology Student | Aspiring Software Developer",
  heroBio: "I'm an Information Technology student at Kumaraguru College of Technology who enjoys building practical web applications and exploring technology to solve real-world problems.",
  aboutBio: [
    "I am an Information Technology student pursuing my B.Tech at Kumaraguru College of Technology (2023–2027) with a CGPA of 7.25.",
    "During my internship at IDM Techpark, I contributed to Python-based web application development, supporting both frontend and backend tasks, executing database CRUD operations, and participating in testing and optimization.",
    "I have engineered practical academic projects including a Smart Clinic Management System utilizing Supabase and an AI-Driven Crop Recommendation and Advisory System with integrated machine learning models.",
    "I am passionate about software development, web technologies, and continuous learning, bringing strong teamwork, decision-making, and organizational skills to engineering teams."
  ],
  education: {
    degree: "B.Tech Information Technology",
    institution: "Kumaraguru College of Technology",
    location: "Coimbatore, Tamil Nadu",
    duration: "2023 – 2027",
    cgpa: "7.25",
    status: "Currently Pursuing"
  },
  contact: {
    email: "balamr@gmail.com",
    phone: "8148295183",
    phoneFormatted: "+91 81482 95183",
    location: "Tamil Nadu, India",
    github: "https://github.com/balamurugan6579",
    linkedin: "https://www.linkedin.com/in/balamurugan-m-1a3849388/",
    languages: ["Tamil", "English"]
  },
  professionalInterests: [
    "Software Development",
    "Web Technologies",
    "Problem Solving",
    "Learning New Technologies"
  ]
};

export const skillsData = {
  programming: [
    { name: "Python", category: "Core Language", level: "Proficient" },
    { name: "JavaScript", category: "Core Language", level: "Intermediate" }
  ],
  frontend: [
    { name: "React.js", category: "Framework", level: "Intermediate" },
    { name: "HTML5", category: "Markup", level: "Proficient" },
    { name: "CSS3", category: "Styling", level: "Proficient" },
    { name: "Bootstrap", category: "UI Library", level: "Proficient" }
  ],
  backend: [
    { name: "Django", category: "Python Framework", level: "Intermediate" }
  ],
  database: [
    { name: "MySQL", category: "Relational DB", level: "Proficient" }
  ]
};

export const experienceData = [
  {
    role: "Python Full Stack Intern",
    company: "IDM Techpark",
    type: "Internship",
    location: "Coimbatore, India",
    responsibilities: [
      "Contributed to the development of web applications using Python.",
      "Supported frontend and backend development activities.",
      "Executed basic database operations, including CRUD processes.",
      "Participated in application testing and debugging.",
      "Assisted with application performance improvements."
    ],
    technologies: ["Python", "Web Development", "CRUD Operations", "Testing", "Debugging"]
  }
];

export const projectsData = [
  {
    id: "clinic-management",
    title: "Smart Clinic Management System",
    category: "Full Stack / Healthcare Application",
    description: "Developed a Smart Clinic Management System for small clinics to manage patient records, appointments, medicine inventory, and billing. Used Supabase for secure data storage and real-time updates.",
    keyFeatures: [
      "Patient records management & medical history tracking",
      "Real-time appointment scheduling & slot status",
      "Medicine inventory monitoring & low-stock alerts",
      "Automated clinic billing & invoice generation"
    ],
    technologies: ["Supabase", "Python", "Web Technologies", "Database Design", "Real-Time Sync"],
    githubUrl: "https://github.com/balamurugan6579",
    statusBadge: "Verified Academic Project",
    liveDemoAvailable: false,
    themeColor: "from-cyan-500 to-blue-600"
  },
  {
    id: "crop-recommendation",
    title: "AI-Driven Crop Recommendation & Advisory System",
    category: "Machine Learning / AgriTech Application",
    description: "Developed a machine learning-based crop recommendation system that recommends suitable crops and fertilizers using soil and weather data. Integrated an AI chatbot to provide farming guidance.",
    keyFeatures: [
      "Soil nutrient analysis & weather data synthesis",
      "Predictive ML model for crop & fertilizer selection",
      "Integrated conversational AI farming advisor chatbot",
      "Data-driven insights tailored for local agricultural conditions"
    ],
    technologies: ["Machine Learning", "Python", "Data Analysis", "AI Chatbot", "AgTech"],
    githubUrl: "https://github.com/balamurugan6579",
    statusBadge: "Verified Academic Project",
    liveDemoAvailable: false,
    themeColor: "from-emerald-500 to-teal-600"
  }
];

export const certificationsData = [
  {
    title: "Python Full Stack Development Certification",
    issuer: "Full Stack Training Program",
    description: "Comprehensive practical training spanning Python backend architecture, frontend fundamentals, database management, and full-stack development workflow.",
    highlight: "Core Competency"
  },
  {
    title: "Databases and SQL for Data Science with Python",
    issuer: "IBM",
    description: "Certified coursework covering relational database design, SQL querying, data extraction, analysis, and Python database connectivity.",
    highlight: "IBM Verified"
  }
];

export const softSkillsData = [
  { name: "Good Listening", description: "Attentive communication and understanding user/system requirements." },
  { name: "Decision-Making", description: "Structured problem-solving and selecting sound technical approaches." },
  { name: "Collaboration & Teamwork", description: "Effective cross-functional coordination and peer pair programming." },
  { name: "Organizational & Planning Skills", description: "Disciplined time management, task breakdown, and project execution." }
];

export const personalInterestsData = [
  { name: "Cricket", icon: "activity", description: "Playing and analyzing competitive matches; strategic teamwork." },
  { name: "Enjoying Music", icon: "music", description: "Unwinding, staying focused, and drawing creative inspiration." },
  { name: "Exploring New Tools & Software", icon: "cpu", description: "Continuously experimenting with cutting-edge developer utilities." }
];

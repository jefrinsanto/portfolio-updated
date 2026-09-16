// All content below is sourced directly from Jefrin's resume and prompt brief.
// No achievements, statistics, or experience have been invented.

export const profile = {
  name: "Jefrin Santo SV",
  firstName: "Jefrin Santo",
  headline: "Software Engineer Intern Candidate",
  subHeadline: "Full Stack Developer · Cyber Security Enthusiast",
  location: "Nagercoil, Tamil Nadu, India",
  email: "jefrinsanto26@gmail.com",
  phone: "+91-9385477389",
  github: "https://github.com/jefrinsanto",
  linkedin: "https://www.linkedin.com/in/jefrin-santo-sv-577716332/",
  leetcode: "https://leetcode.com/u/JefrinSanto/",
  leetcodeStats: {
    solved: 42,
    language: "Java",
  },
  resumeUrl: "/Jefrin_Santo_Resume.pdf",
  summary:
    "Computer Science Engineering (Cyber Security) student with hands-on experience building three responsive web projects using HTML5, CSS3, JavaScript, and React.js. Skilled in UI and navigation structure design, troubleshooting, debugging, and optimizing web applications for performance and cross-browser compatibility. Comfortable working independently and collaborating with developers and designers, with a strong focus on Data Structures & Algorithms and problem solving.",
};

export const about = {
  paragraphs: [
    "I'm a Computer Science and Engineering student specializing in Cyber Security at St. Joseph's College of Engineering, currently building a strong foundation in Java, Data Structures & Algorithms, and full stack web development.",
    "My project work spans responsive front-end builds in HTML5, CSS3 and JavaScript, an introductory React.js interface for an enterprise e-commerce concept, and a cyber security internship focused on endpoint protection and threat monitoring.",
    "I care about writing code that is easy to debug, easy to scale, and easy for the next developer to read — and I'm continuously sharpening my problem-solving skills through consistent DSA practice.",
  ],
  highlights: [
    "Computer Science & Engineering (Cyber Security)",
    "Java — Oracle Certified",
    "Data Structures & Algorithms practice",
    "Full Stack Development (HTML, CSS, JS, React)",
    "Debugging & Problem Solving",
    "Continuous, self-directed learner",
  ],
};

export const skillGroups = [
  {
    category: "Programming",
    items: ["Java", "C", "JavaScript"],
  },
  {
    category: "Frontend",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Responsive Web Design",
    ],
  },
  {
    category: "Backend / APIs",
    items: ["REST APIs", "Java Full Stack", "Spring Boot — Learning"],
  },
  {
    category: "Database",
    items: ["Oracle", "SQL", "Relational Database Fundamentals"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "VS Code"],
  },
  {
    category: "Software Engineering",
    items: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Debugging",
      "Problem Solving",
      "Performance Optimization",
    ],
  },
  {
    category: "Cyber Security",
    items: [
      "Endpoint Security",
      "Threat Protection",
      "Security Monitoring",
      "Sophos",
    ],
  },
];

// Positioned as a graph for the DSA network visualization (desktop).
// x / y are percentage-based coordinates within the visual canvas.
export const dsaTopics = [
  { id: "arrays", label: "Arrays", x: 10, y: 22 },
  { id: "strings", label: "Strings", x: 26, y: 8 },
  { id: "hashing", label: "Hashing", x: 44, y: 14 },
  { id: "two-pointers", label: "Two Pointers", x: 8, y: 55 },
  { id: "sliding-window", label: "Sliding Window", x: 25, y: 68 },
  { id: "binary-search", label: "Binary Search", x: 42, y: 78 },
  { id: "stack", label: "Stack", x: 60, y: 10 },
  { id: "queue", label: "Queue", x: 76, y: 20 },
  { id: "linked-list", label: "Linked List", x: 58, y: 45 },
  { id: "trees", label: "Trees", x: 78, y: 52 },
  { id: "graphs", label: "Graphs", x: 92, y: 38 },
  { id: "greedy", label: "Greedy Algorithms", x: 62, y: 72 },
  { id: "dp", label: "Dynamic Programming", x: 82, y: 82 },
  { id: "sorting", label: "Sorting", x: 40, y: 45 },
  { id: "searching", label: "Searching", x: 95, y: 65 },
];

export const dsaEdges = [
  ["arrays", "two-pointers"],
  ["arrays", "strings"],
  ["arrays", "sorting"],
  ["strings", "hashing"],
  ["hashing", "sorting"],
  ["two-pointers", "sliding-window"],
  ["sliding-window", "binary-search"],
  ["binary-search", "sorting"],
  ["sorting", "searching"],
  ["stack", "queue"],
  ["stack", "linked-list"],
  ["queue", "trees"],
  ["linked-list", "trees"],
  ["trees", "graphs"],
  ["trees", "greedy"],
  ["graphs", "searching"],
  ["greedy", "dp"],
  ["dp", "searching"],
  ["sorting", "linked-list"],
];

export const projects = [
  {
    title: "Perfume Shopping Website",
    type: "E-Commerce UI",
    tech: ["HTML5", "CSS3", "JavaScript"],
    description:
      "A responsive e-commerce-style web application with product listing pages and product cards, built for a clean UI and smooth user experience.",
    points: [
      "Responsive product grid with reusable product-card components",
      "Layout and code optimized for speed and scalability",
      "Verified cross-browser compatibility across desktop, tablet, and mobile",
    ],
    link: "#",
    linkLabel: "Repository",
  },
  {
    title: "Responsive Business Website",
    type: "Business Site",
    tech: ["HTML5", "CSS3", "JavaScript"],
    description:
      "A responsive website concept for a software development company, built with semantic HTML and a mobile-first layout.",
    points: [
      "Semantic HTML structure with modern CSS layout techniques",
      "Mobile-first design with a clear navigation structure",
      "Debugged and troubleshot UI issues to improve usability",
    ],
    link: "#",
    linkLabel: "Repository",
  },
  {
    title: "Personal Portfolio Website",
    type: "Personal Project",
    tech: ["HTML5", "CSS3", "JavaScript"],
    description:
      "An earlier personal portfolio built to showcase skills, projects, and resume, with JavaScript-based interactive elements.",
    points: [
      "Sections for skills, projects, and resume access",
      "JavaScript-driven interactive UI elements",
      "Debugged for smooth functionality across browsers",
    ],
    link: "#",
    linkLabel: "Repository",
  },
  {
    title: "Multi-Vendor E-Commerce Login UI",
    type: "Infosys Virtual Internship",
    tech: ["React.js"],
    description:
      "Frontend login page UI for an enterprise multi-vendor e-commerce platform, built during a virtual internship with Infosys.",
    points: [
      "Built with React.js, focused on form layout and styling",
      "Frontend UI development for an enterprise-scale concept",
    ],
    link: "#",
    linkLabel: "Repository",
  },
  {
    title: "Cyber Security Internship — Big Bucks",
    type: "Cyber Security",
    tech: ["Sophos", "Endpoint Security"],
    description:
      "A two-month Cyber Security internship in Chennai, gaining hands-on exposure to endpoint protection and monitoring.",
    points: [
      "Hands-on exposure to endpoint security and threat protection",
      "Endpoint management and basic security monitoring using Sophos",
      "Concepts applied to real-world IT and web environments",
    ],
    link: "#",
    linkLabel: "About the internship",
  },
];

export const experience = [
  {
    company: "Big Bucks — Cyber Security Domain",
    role: "Internship Student",
    location: "Chennai, India",
    date: "June 2026 – July 2026",
    points: [
      "Completed a 2-month Cyber Security internship with hands-on exposure to endpoint security, threat protection, and endpoint management.",
      "Performed basic security monitoring using Sophos, applicable to real-world IT and web environments.",
    ],
  },
  {
    company: "Infosys — Virtual Internship",
    role: "Frontend Developer (Virtual)",
    location: "Remote",
    date: "Virtual Internship",
    points: [
      "Built the frontend login page UI for an enterprise multi-vendor e-commerce platform using React.js.",
      "Focused on form layout and styling for a production-style enterprise interface.",
    ],
  },
];

export const education = [
  {
    degree: "B.E. Computer Science and Engineering (Cyber Security)",
    institution: "St. Joseph's College of Engineering, OMR, Chennai, India",
    date: "Expected 2028",
    detail: "CGPA: 7.67 / 10 (up to 4th Semester)",
  },
  {
    degree: "Higher Secondary School — Class XII",
    institution:
      "Seventh Day Adventist Matriculation Higher Secondary School, Nagercoil, India",
    date: "Completed",
    detail: "Marks: 464 / 600",
  },
];

export const certifications = [
  "Oracle Certification — Java Developer",
  "Java Developer Certification — Infosys Springboard",
  "NPTEL — Programming in C",
  "Linux Workshop — Chennai Institute of Technology",
];

export const currentlyLearning = [
  "Advanced DSA",
  "Java Full Stack Development",
  "Spring Boot",
  "REST APIs",
  "System Design",
  "Modern AI-assisted development",
];

export const exploring = [
  "Game development fundamentals",
  "Real-time systems & performance profiling",
  "AI-assisted engineering workflows",
];

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "DSA", href: "#dsa" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

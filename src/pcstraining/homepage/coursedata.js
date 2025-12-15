// src/data/coursedata.js

import CourseImg1 from "../assets/popular1.png";
import CourseImg2 from "../assets/popular2.png";
import CourseImg3 from "../assets/popular3.png";
import CourseImg4 from "../assets/popular2.png";
import CourseImg5 from "../assets/popular2.png";

const coursedata = [
  {
    id: "fullstack-web",
    title: "Full Stack Web Development",
    shortTitle: "HTML, CSS, JS, React & Node",
    category: "Development",
    image: CourseImg1,
    duration: "3 Months",
    level: "Beginner to Advanced",
    mode: "Online / Offline",
    lessons: 27,

    overview:
      "Master frontend and backend web development by building real-world applications using modern technologies.",

    learn: [
      "HTML5, CSS3 & Responsive Design",
      "JavaScript & ES6",
      "React.js & Hooks",
      "Node.js & Express.js",
      "MongoDB & REST APIs",
      "Live Projects & Deployment",
    ],

    curriculum: [
      { module: "Frontend Basics", desc: "HTML, CSS, Flexbox, Grid" },
      { module: "JavaScript", desc: "DOM, Events, ES6" },
      { module: "React.js", desc: "Hooks, Routing, APIs" },
      { module: "Backend", desc: "Node, Express, MongoDB" },
    ],

    tools: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],

    whoCanJoin: [
      "Students & Freshers",
      "Career Switchers",
      "Working Professionals",
    ],
  },

  {
    id: "frontend-react",
    title: "Frontend Development with React",
    shortTitle: "HTML, CSS, JS & React",
    category: "Development",
    image: CourseImg2,
    duration: "2 Months",
    level: "Beginner to Intermediate",
    mode: "Online / Offline",
    lessons: 20,

    overview:
      "Build fast, responsive and scalable frontend applications using React.js.",

    learn: [
      "Modern HTML & CSS",
      "JavaScript Fundamentals",
      "React Components",
      "Hooks & State Management",
      "API Integration",
    ],

    curriculum: [
      { module: "HTML & CSS", desc: "Layouts, Responsive UI" },
      { module: "JavaScript", desc: "Logic & DOM" },
      { module: "React", desc: "Hooks & Components" },
    ],

    tools: ["HTML", "CSS", "JavaScript", "React"],

    whoCanJoin: ["Students", "UI Developers", "Freshers"],
  },

  {
    id: "backend-node",
    title: "Backend Development with Node.js",
    shortTitle: "Node.js, Express & MongoDB",
    category: "Development",
    image: CourseImg3,
    duration: "2 Months",
    level: "Intermediate",
    mode: "Online / Offline",
    lessons: 18,

    overview:
      "Learn to build secure and scalable backend applications using Node.js.",

    learn: [
      "Node.js Fundamentals",
      "Express.js",
      "MongoDB",
      "Authentication",
      "REST APIs",
    ],

    curriculum: [
      { module: "Node Basics", desc: "Async, Events" },
      { module: "Express", desc: "Routing & Middleware" },
      { module: "Database", desc: "MongoDB" },
    ],

    tools: ["Node.js", "Express", "MongoDB"],

    whoCanJoin: ["Backend Developers", "Full Stack Learners"],
  },

  {
    id: "python-full",
    title: "Python Full Course",
    shortTitle: "Python, Django & Flask",
    category: "Programming",
    image: CourseImg4,
    duration: "2.5 Months",
    level: "Beginner to Advanced",
    mode: "Online / Offline",
    lessons: 22,

    overview:
      "Learn Python programming from basics to backend development.",

    learn: [
      "Python Basics",
      "OOPS Concepts",
      "Django & Flask",
      "Database Handling",
    ],

    curriculum: [
      { module: "Python Basics", desc: "Syntax & Logic" },
      { module: "Advanced Python", desc: "OOPS & Modules" },
      { module: "Frameworks", desc: "Django, Flask" },
    ],

    tools: ["Python", "Django", "Flask"],

    whoCanJoin: ["Beginners", "Backend Developers"],
  },

  {
    id: "react-native",
    title: "React Native App Development",
    shortTitle: "Mobile App Development",
    category: "Mobile",
    image: CourseImg5,
    duration: "2 Months",
    level: "Intermediate",
    mode: "Online / Offline",
    lessons: 16,

    overview:
      "Build Android & iOS apps using React Native.",

    learn: [
      "React Native Basics",
      "Navigation",
      "API Integration",
      "App Deployment",
    ],

    curriculum: [
      { module: "Basics", desc: "Components & Styling" },
      { module: "Advanced", desc: "APIs & Navigation" },
    ],

    tools: ["React Native", "JavaScript"],

    whoCanJoin: ["React Developers", "Mobile App Learners"],
  },
];

export default coursedata;

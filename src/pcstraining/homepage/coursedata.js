// // src/data/coursedata.js

// import CourseImg1 from "../assets/popular1.png";
// import CourseImg2 from "../assets/popular2.png";
// import CourseImg3 from "../assets/popular3.png";
// import CourseImg4 from "../assets/popular2.png";
// import CourseImg5 from "../assets/popular2.png";

// const coursedata = [
//   {
//     id: "fullstack-web",
//     title: "Full Stack Web Development",
//     shortTitle: "HTML, CSS, JS, React & Node",
//     category: "Development",
//     image: CourseImg1,
//     duration: "3 Months",
//     level: "Beginner to Advanced",
//     mode: "Online / Offline",
//     lessons: 27,

//     overview:
//       "Master frontend and backend web development by building real-world applications using modern technologies.",

//     learn: [
//       "HTML5, CSS3 & Responsive Design",
//       "JavaScript & ES6",
//       "React.js & Hooks",
//       "Node.js & Express.js",
//       "MongoDB & REST APIs",
//       "Live Projects & Deployment",
//     ],

//     curriculum: [
//       { module: "Frontend Basics", desc: "HTML, CSS, Flexbox, Grid" },
//       { module: "JavaScript", desc: "DOM, Events, ES6" },
//       { module: "React.js", desc: "Hooks, Routing, APIs" },
//       { module: "Backend", desc: "Node, Express, MongoDB" },
//     ],

//     tools: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],

//     whoCanJoin: [
//       "Students & Freshers",
//       "Career Switchers",
//       "Working Professionals",
//     ],
//   },

//   {
//     id: "frontend-react",
//     title: "Frontend Development with React",
//     shortTitle: "HTML, CSS, JS & React",
//     category: "Development",
//     image: CourseImg2,
//     duration: "2 Months",
//     level: "Beginner to Intermediate",
//     mode: "Online / Offline",
//     lessons: 20,

//     overview:
//       "Build fast, responsive and scalable frontend applications using React.js.",

//     learn: [
//       "Modern HTML & CSS",
//       "JavaScript Fundamentals",
//       "React Components",
//       "Hooks & State Management",
//       "API Integration",
//     ],

//     curriculum: [
//       { module: "HTML & CSS", desc: "Layouts, Responsive UI" },
//       { module: "JavaScript", desc: "Logic & DOM" },
//       { module: "React", desc: "Hooks & Components" },
//     ],

//     tools: ["HTML", "CSS", "JavaScript", "React"],

//     whoCanJoin: ["Students", "UI Developers", "Freshers"],
//   },

//   {
//     id: "backend-node",
//     title: "Backend Development with Node.js",
//     shortTitle: "Node.js, Express & MongoDB",
//     category: "Development",
//     image: CourseImg3,
//     duration: "2 Months",
//     level: "Intermediate",
//     mode: "Online / Offline",
//     lessons: 18,

//     overview:
//       "Learn to build secure and scalable backend applications using Node.js.",

//     learn: [
//       "Node.js Fundamentals",
//       "Express.js",
//       "MongoDB",
//       "Authentication",
//       "REST APIs",
//     ],

//     curriculum: [
//       { module: "Node Basics", desc: "Async, Events" },
//       { module: "Express", desc: "Routing & Middleware" },
//       { module: "Database", desc: "MongoDB" },
//     ],

//     tools: ["Node.js", "Express", "MongoDB"],

//     whoCanJoin: ["Backend Developers", "Full Stack Learners"],
//   },

//   {
//     id: "python-full",
//     title: "Python Full Course",
//     shortTitle: "Python, Django & Flask",
//     category: "Programming",
//     image: CourseImg4,
//     duration: "2.5 Months",
//     level: "Beginner to Advanced",
//     mode: "Online / Offline",
//     lessons: 22,

//     overview:
//       "Learn Python programming from basics to backend development.",

//     learn: [
//       "Python Basics",
//       "OOPS Concepts",
//       "Django & Flask",
//       "Database Handling",
//     ],

//     curriculum: [
//       { module: "Python Basics", desc: "Syntax & Logic" },
//       { module: "Advanced Python", desc: "OOPS & Modules" },
//       { module: "Frameworks", desc: "Django, Flask" },
//     ],

//     tools: ["Python", "Django", "Flask"],

//     whoCanJoin: ["Beginners", "Backend Developers"],
//   },

//   {
//     id: "react-native",
//     title: "React Native App Development",
//     shortTitle: "Mobile App Development",
//     category: "Mobile",
//     image: CourseImg5,
//     duration: "2 Months",
//     level: "Intermediate",
//     mode: "Online / Offline",
//     lessons: 16,

//     overview:
//       "Build Android & iOS apps using React Native.",

//     learn: [
//       "React Native Basics",
//       "Navigation",
//       "API Integration",
//       "App Deployment",
//     ],

//     curriculum: [
//       { module: "Basics", desc: "Components & Styling" },
//       { module: "Advanced", desc: "APIs & Navigation" },
//     ],

//     tools: ["React Native", "JavaScript"],

//     whoCanJoin: ["React Developers", "Mobile App Learners"],
//   },
// ];

// export default coursedata;

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
    students: 1250,
    rating: 4.8,
    reviews: 340,
    price: 15999,
    language: "English & Tamil",
    certificate: true,
    liveProjects: 5,

    overview:
      "Master frontend and backend web development by building real-world applications using modern technologies. This comprehensive program covers everything from HTML basics to deploying full-stack applications.",

    learn: [
      "HTML5, CSS3 & Responsive Design with modern frameworks",
      "JavaScript ES6+ and advanced programming concepts",
      "React.js with Hooks, Context API & Redux",
      "Node.js, Express.js & RESTful API development",
      "MongoDB database design and optimization",
      "Authentication, Authorization & Security best practices",
      "Git, GitHub & Version Control",
      "Live Projects & Cloud Deployment (Vercel, Heroku)",
      "Testing & Debugging techniques",
      "Performance optimization & SEO basics"
    ],

    curriculum: [
      { 
        module: "Frontend Fundamentals", 
        desc: "HTML5, CSS3, Flexbox, Grid, Responsive Design",
        duration: "3 weeks",
        topics: ["Semantic HTML", "CSS Variables", "Media Queries", "Bootstrap basics"]
      },
      { 
        module: "JavaScript Mastery", 
        desc: "DOM Manipulation, ES6+, Async Programming",
        duration: "4 weeks",
        topics: ["Arrow Functions", "Promises", "Fetch API", "Local Storage"]
      },
      { 
        module: "React.js Development", 
        desc: "Components, Hooks, Routing, State Management",
        duration: "4 weeks",
        topics: ["JSX", "useState/useEffect", "React Router", "Context API", "Redux"]
      },
      { 
        module: "Backend with Node.js", 
        desc: "Node.js, Express.js, RESTful APIs",
        duration: "3 weeks",
        topics: ["Express Setup", "Middleware", "Route Handling", "Error Handling"]
      },
      { 
        module: "Database & Authentication", 
        desc: "MongoDB, Mongoose, JWT, OAuth",
        duration: "2 weeks",
        topics: ["CRUD Operations", "Schema Design", "JWT Tokens", "Password Hashing"]
      },
      { 
        module: "Deployment & DevOps", 
        desc: "Git, GitHub, Hosting, CI/CD basics",
        duration: "1 week",
        topics: ["Git commands", "GitHub workflows", "Vercel deployment", "Environment variables"]
      }
    ],

    tools: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB", "Git", "VS Code", "Postman"],

    prerequisites: [
      "Basic computer knowledge",
      "Passion to learn coding",
      "No prior programming experience needed"
    ],

    whoCanJoin: [
      "Students & College Freshers looking to start a tech career",
      "Career Switchers wanting to enter web development",
      "Working Professionals upskilling for better opportunities",
      "Entrepreneurs building their own web products"
    ],

    careerOpportunities: [
      "Full Stack Developer",
      "Frontend Developer",
      "Backend Developer",
      "MERN Stack Developer",
      "Web Application Developer"
    ],

    highlights: [
      "5 Industry-level Projects",
      "1-on-1 Mentorship Sessions",
      "Job Placement Assistance",
      "Lifetime Course Access",
      "Interview Preparation",
      "Certificate of Completion"
    ],

    instructor: {
      name: "Rajesh Kumar",
      experience: "8+ years",
      companies: ["Google", "Amazon", "Startup Founder"],
      students: 5000
    }
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
    students: 890,
    rating: 4.7,
    reviews: 210,
    price: 9999,
    language: "English & Tamil",
    certificate: true,
    liveProjects: 3,

    overview:
      "Build fast, responsive and scalable frontend applications using React.js. Learn modern UI development techniques and create stunning user interfaces that work seamlessly across all devices.",

    learn: [
      "Modern HTML5 & CSS3 with Flexbox and Grid",
      "JavaScript ES6+ fundamentals and advanced concepts",
      "React Components and Props",
      "React Hooks (useState, useEffect, useContext, useReducer)",
      "State Management with Context API",
      "React Router for navigation",
      "API Integration with Axios",
      "Form Handling and Validation",
      "CSS Modules and Styled Components",
      "Performance Optimization techniques"
    ],

    curriculum: [
      { 
        module: "HTML & CSS Mastery", 
        desc: "Modern layouts, Responsive UI, Flexbox, Grid",
        duration: "2 weeks",
        topics: ["Semantic HTML", "CSS Grid", "Flexbox", "Animations", "Media Queries"]
      },
      { 
        module: "JavaScript Essentials", 
        desc: "ES6+, DOM Manipulation, Event Handling",
        duration: "3 weeks",
        topics: ["Variables", "Functions", "Arrays", "Objects", "DOM API"]
      },
      { 
        module: "React Fundamentals", 
        desc: "Components, JSX, Props, State",
        duration: "2 weeks",
        topics: ["JSX Syntax", "Component Types", "Props passing", "Conditional Rendering"]
      },
      { 
        module: "React Hooks & Advanced", 
        desc: "Hooks, Context, Custom Hooks",
        duration: "3 weeks",
        topics: ["useState", "useEffect", "useContext", "Custom Hooks", "Performance"]
      }
    ],

    tools: ["HTML", "CSS", "JavaScript", "React", "VS Code", "Chrome DevTools", "Git"],

    prerequisites: [
      "Basic understanding of HTML/CSS helpful",
      "Eagerness to learn modern web development"
    ],

    whoCanJoin: [
      "Students wanting to specialize in frontend",
      "UI/UX Designers transitioning to development",
      "Freshers starting their coding journey",
      "Backend developers learning frontend skills"
    ],

    careerOpportunities: [
      "React Developer",
      "Frontend Developer",
      "UI Developer",
      "JavaScript Developer"
    ],

    highlights: [
      "3 Real-world Projects",
      "Interactive Live Classes",
      "Code Reviews & Feedback",
      "Portfolio Building Support",
      "Job-ready Certificate"
    ],

    instructor: {
      name: "Priya Sharma",
      experience: "6+ years",
      companies: ["Microsoft", "Flipkart"],
      students: 3500
    }
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
    students: 670,
    rating: 4.9,
    reviews: 180,
    price: 11999,
    language: "English & Tamil",
    certificate: true,
    liveProjects: 4,

    overview:
      "Learn to build secure, scalable and high-performance backend applications using Node.js. Master server-side development, database management, API design, and deployment strategies used by top tech companies.",

    learn: [
      "Node.js Fundamentals and Event Loop",
      "Express.js framework and middleware",
      "RESTful API design principles",
      "MongoDB database and Mongoose ODM",
      "Authentication & Authorization (JWT, OAuth)",
      "Security best practices (CORS, Helmet, Rate Limiting)",
      "File uploads and handling",
      "Real-time applications with Socket.io",
      "Error handling and logging",
      "Testing with Jest and Supertest",
      "Deployment on cloud platforms"
    ],

    curriculum: [
      { 
        module: "Node.js Basics", 
        desc: "Core modules, Async programming, Event Loop",
        duration: "2 weeks",
        topics: ["File System", "HTTP module", "Events", "Streams", "NPM"]
      },
      { 
        module: "Express.js Framework", 
        desc: "Routing, Middleware, Request handling",
        duration: "2 weeks",
        topics: ["Express setup", "Routes", "Middleware chain", "Error handling"]
      },
      { 
        module: "Database Integration", 
        desc: "MongoDB, Mongoose, CRUD operations",
        duration: "2 weeks",
        topics: ["Schema design", "Models", "Queries", "Aggregation", "Indexing"]
      },
      { 
        module: "Authentication & Security", 
        desc: "JWT, bcrypt, OAuth, API security",
        duration: "1.5 weeks",
        topics: ["JWT tokens", "Password hashing", "Role-based access", "CORS"]
      },
      { 
        module: "Advanced Topics", 
        desc: "WebSockets, Caching, Performance",
        duration: "1.5 weeks",
        topics: ["Socket.io", "Redis", "Load balancing", "PM2"]
      }
    ],

    tools: ["Node.js", "Express", "MongoDB", "Postman", "Git", "VS Code", "Heroku", "AWS"],

    prerequisites: [
      "Good understanding of JavaScript",
      "Basic knowledge of databases",
      "Familiarity with command line"
    ],

    whoCanJoin: [
      "Backend Developers wanting to specialize in Node.js",
      "Full Stack learners focusing on server-side",
      "Frontend developers expanding to backend",
      "Software Engineers upskilling"
    ],

    careerOpportunities: [
      "Backend Developer",
      "Node.js Developer",
      "API Developer",
      "Full Stack Developer",
      "DevOps Engineer"
    ],

    highlights: [
      "4 Production-ready Projects",
      "API Design Best Practices",
      "Cloud Deployment Training",
      "Performance Optimization",
      "Industry Certificate"
    ],

    instructor: {
      name: "Arjun Mehta",
      experience: "10+ years",
      companies: ["PayPal", "Netflix", "Tech Lead"],
      students: 4200
    }
  },

  {
    id: "python-full",
    title: "Python Full Course",
    shortTitle: "Python, Django & Flask",
    category: "Programming",
    image: "https://i.pinimg.com/1200x/fb/2f/b9/fb2fb957ca2f07a813abddf973a69514.jpg",
    duration: "2.5 Months",
    level: "Beginner to Advanced",
    mode: "Online / Offline",
    lessons: 22,
    students: 1100,
    rating: 4.8,
    reviews: 290,
    price: 12999,
    language: "English & Tamil",
    certificate: true,
    liveProjects: 4,

    overview:
      "Learn Python programming from basics to advanced web development. Master Python fundamentals, data structures, OOP concepts, and build powerful web applications using Django and Flask frameworks.",

    learn: [
      "Python syntax and programming fundamentals",
      "Data structures (Lists, Tuples, Sets, Dictionaries)",
      "Object-Oriented Programming concepts",
      "File handling and exception management",
      "Working with libraries (NumPy, Pandas basics)",
      "Django framework for full-featured web apps",
      "Flask for lightweight web applications",
      "Database handling with SQLite and PostgreSQL",
      "RESTful API development with Django REST",
      "Authentication and user management",
      "Web scraping basics with BeautifulSoup",
      "Deployment and hosting"
    ],

    curriculum: [
      { 
        module: "Python Basics", 
        desc: "Syntax, Variables, Data types, Control flow",
        duration: "2 weeks",
        topics: ["Variables", "Loops", "Functions", "Modules", "Input/Output"]
      },
      { 
        module: "Data Structures & OOPS", 
        desc: "Lists, Tuples, Classes, Inheritance",
        duration: "2 weeks",
        topics: ["Lists operations", "Dictionary methods", "Classes", "Inheritance", "Polymorphism"]
      },
      { 
        module: "Django Framework", 
        desc: "MVC, Models, Views, Templates, Forms",
        duration: "3 weeks",
        topics: ["Project setup", "URL routing", "Models & ORM", "Templates", "Forms", "Admin panel"]
      },
      { 
        module: "Flask Framework", 
        desc: "Routing, Templates, RESTful APIs",
        duration: "2 weeks",
        topics: ["Flask basics", "Jinja templates", "REST API", "Database integration"]
      },
      { 
        module: "Database & Deployment", 
        desc: "SQL, PostgreSQL, Heroku deployment",
        duration: "1.5 weeks",
        topics: ["SQLite", "PostgreSQL", "Migrations", "Cloud deployment"]
      }
    ],

    tools: ["Python", "Django", "Flask", "PostgreSQL", "Git", "PyCharm", "VS Code", "Postman"],

    prerequisites: [
      "Basic computer knowledge",
      "Logical thinking ability",
      "No programming experience needed"
    ],

    whoCanJoin: [
      "Complete beginners to programming",
      "Students interested in data science path",
      "Backend developers learning Python",
      "Automation enthusiasts"
    ],

    careerOpportunities: [
      "Python Developer",
      "Django Developer",
      "Backend Developer",
      "Automation Engineer",
      "Data Analyst (with further learning)"
    ],

    highlights: [
      "4 Full-stack Projects",
      "Django & Flask mastery",
      "Database integration",
      "Practical coding exercises",
      "Verified Certificate"
    ],

    instructor: {
      name: "Sneha Reddy",
      experience: "7+ years",
      companies: ["IBM", "Accenture", "Python Trainer"],
      students: 6000
    }
  },

  {
    id: "react-native",
    title: "React Native App Development",
    shortTitle: "Mobile App Development",
    category: "Mobile",
    image: "https://i.pinimg.com/736x/75/08/e3/7508e3990857d8ab2c6b83d89bf7eda1.jpg",
    duration: "2 Months",
    level: "Intermediate",
    mode: "Online / Offline",
    lessons: 16,
    students: 540,
    rating: 4.6,
    reviews: 150,
    price: 13999,
    language: "English & Tamil",
    certificate: true,
    liveProjects: 3,

    overview:
      "Build cross-platform Android & iOS mobile applications using React Native. Learn to create native mobile experiences with JavaScript and deploy your apps to Google Play Store and Apple App Store.",

    learn: [
      "React Native fundamentals and setup",
      "Core components (View, Text, Image, ScrollView)",
      "Styling with Flexbox and StyleSheet",
      "Navigation with React Navigation",
      "State management in mobile apps",
      "API integration and data fetching",
      "Native device features (Camera, GPS, Notifications)",
      "Async Storage for local data",
      "Authentication flows",
      "Performance optimization",
      "Building and deploying to app stores",
      "Push notifications integration"
    ],

    curriculum: [
      { 
        module: "React Native Basics", 
        desc: "Setup, Components, Styling, Layouts",
        duration: "2 weeks",
        topics: ["Environment setup", "Core components", "Flexbox styling", "Platform-specific code"]
      },
      { 
        module: "Navigation & Routing", 
        desc: "React Navigation, Stack, Tab, Drawer",
        duration: "2 weeks",
        topics: ["Stack Navigator", "Tab Navigator", "Drawer Navigator", "Nested navigation"]
      },
      { 
        module: "State & APIs", 
        desc: "State management, API calls, AsyncStorage",
        duration: "2 weeks",
        topics: ["useState/useEffect", "Fetch API", "Axios", "Context API", "AsyncStorage"]
      },
      { 
        module: "Native Features", 
        desc: "Camera, Location, Permissions, Notifications",
        duration: "1.5 weeks",
        topics: ["Camera integration", "Maps", "Permissions", "Push notifications"]
      },
      { 
        module: "Deployment", 
        desc: "Build, Test, Deploy to Play Store & App Store",
        duration: "0.5 weeks",
        topics: ["APK generation", "iOS build", "Store submissions", "Testing"]
      }
    ],

    tools: ["React Native", "JavaScript", "Expo", "Android Studio", "Xcode", "Firebase", "Git"],

    prerequisites: [
      "Good knowledge of React.js",
      "JavaScript ES6+ proficiency",
      "Basic understanding of mobile app concepts"
    ],

    whoCanJoin: [
      "React developers moving to mobile",
      "Mobile app development learners",
      "Frontend developers expanding skills",
      "Entrepreneurs building mobile products"
    ],

    careerOpportunities: [
      "React Native Developer",
      "Mobile App Developer",
      "Cross-platform Developer",
      "Full Stack Mobile Developer"
    ],

    highlights: [
      "3 Mobile Apps from scratch",
      "Play Store & App Store deployment",
      "Native features integration",
      "Real device testing",
      "Industry-recognized Certificate"
    ],

    instructor: {
      name: "Vikram Singh",
      experience: "5+ years",
      companies: ["Swiggy", "Zomato", "Mobile Tech Lead"],
      students: 2800
    }
  }
];

export default coursedata;
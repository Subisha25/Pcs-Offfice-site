
import CourseImg1 from "../assets/popular1.png";
import CourseImg2 from "../assets/popular2.png";
import CourseImg3 from "../assets/popular3.png";
import CourseImg4 from "../assets/popular2.png";
import CourseImg5 from "../assets/popular2.png";
import CourseImgAI from "../assets/AI image.jpg";
import CourseImgDM from "../assets/digital marketing.jpg";
import CourseImgJava from "../assets/java.jpg";


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
  },
  {
  id: "artificial-intelligence",
  title: "Artificial Intelligence & Machine Learning",
  shortTitle: "Python, ML, DL & AI",
  category: "AI & Data Science",
  image: CourseImgAI,
  duration: "4 Months",
  level: "Beginner to Advanced",
  mode: "Online / Offline",
  lessons: 32,
  students: 980,
  rating: 4.9,
  reviews: 410,
  price: 18999,
  language: "English & Tamil",
  certificate: true,
  liveProjects: 6,

  overview:
    "Become an AI expert by learning Python, Machine Learning, Deep Learning, and real-world AI applications. This course takes you from basic concepts to building intelligent systems used in the industry.",

  learn: [
    "Python programming for AI & Data Science",
    "Statistics & Mathematics for Machine Learning",
    "Machine Learning algorithms with real examples",
    "Deep Learning using Neural Networks",
    "Natural Language Processing (NLP)",
    "Computer Vision basics",
    "Model training, testing & optimization",
    "AI project deployment",
    "Working with real-world datasets",
    "Ethical AI & future trends"
  ],

  curriculum: [
    {
      module: "Python for AI",
      desc: "Python basics, data structures & libraries",
      duration: "3 weeks",
      topics: ["Python syntax", "NumPy", "Pandas", "Matplotlib"]
    },
    {
      module: "Maths & Statistics for ML",
      desc: "Core math concepts for AI",
      duration: "2 weeks",
      topics: ["Linear Algebra", "Probability", "Statistics", "Data analysis"]
    },
    {
      module: "Machine Learning",
      desc: "Supervised & Unsupervised Learning",
      duration: "4 weeks",
      topics: [
        "Linear Regression",
        "Logistic Regression",
        "Decision Trees",
        "KNN",
        "Clustering",
        "Model evaluation"
      ]
    },
    {
      module: "Deep Learning",
      desc: "Neural Networks & Deep Learning models",
      duration: "3 weeks",
      topics: [
        "Neural Networks",
        "ANN",
        "CNN",
        "RNN",
        "TensorFlow & Keras"
      ]
    },
    {
      module: "NLP & Computer Vision",
      desc: "Text & Image based AI systems",
      duration: "2 weeks",
      topics: [
        "Text preprocessing",
        "Sentiment Analysis",
        "Image classification",
        "Face detection"
      ]
    },
    {
      module: "AI Projects & Deployment",
      desc: "Real-world projects & deployment",
      duration: "2 weeks",
      topics: [
        "End-to-end AI projects",
        "Model deployment",
        "Flask basics",
        "Cloud introduction"
      ]
    }
  ],

  tools: [
    "Python",
    "NumPy",
    "Pandas",
    "Matplotlib",
    "Scikit-learn",
    "TensorFlow",
    "Keras",
    "Jupyter Notebook",
    "VS Code"
  ],

  prerequisites: [
    "Basic computer knowledge",
    "Interest in AI & problem solving",
    "No prior AI experience required"
  ],

  whoCanJoin: [
    "Students & Freshers interested in AI",
    "Software Developers upgrading to AI",
    "Career switchers entering Data & AI field",
    "Entrepreneurs building AI-based products"
  ],

  careerOpportunities: [
    "AI Engineer",
    "Machine Learning Engineer",
    "Data Scientist",
    "AI Developer",
    "Research Assistant"
  ],

  highlights: [
    "6 Real-time AI Projects",
    "Hands-on Practical Training",
    "1-on-1 Mentorship",
    "Job Assistance",
    "Interview Preparation",
    "Industry Recognized Certificate"
  ],

  instructor: {
    name: "Dr. Suresh Anand",
    experience: "10+ years",
    companies: ["Microsoft", "IBM", "AI Research Labs"],
    students: 6200
  }
},
{
  id: "digital-marketing",
  title: "Digital Marketing & Growth Hacking",
  shortTitle: "SEO, SEM, SMM & Analytics",
  category: "Marketing",
  image: CourseImgDM,
  duration: "3 Months",
  level: "Beginner to Advanced",
  mode: "Online / Offline",
  lessons: 25,
  students: 1420,
  rating: 4.7,
  reviews: 380,
  price: 14999,
  language: "English & Tamil",
  certificate: true,
  liveProjects: 4,

  overview:
    "Learn Digital Marketing from scratch and master online branding, lead generation, and performance marketing. This course focuses on practical skills with real-time campaigns and tools used by industry experts.",

  learn: [
    "Digital Marketing fundamentals & strategy planning",
    "Search Engine Optimization (SEO)",
    "Search Engine Marketing (Google Ads)",
    "Social Media Marketing (Facebook, Instagram, LinkedIn)",
    "Content Marketing & Copywriting",
    "Email Marketing & Automation",
    "Google Analytics & Data Tracking",
    "Conversion Rate Optimization (CRO)",
    "Influencer & Affiliate Marketing",
    "Live Campaign Management"
  ],

  curriculum: [
    { 
      module: "Digital Marketing Fundamentals", 
      desc: "Introduction to online marketing & branding",
      duration: "2 weeks",
      topics: ["Digital ecosystem", "Customer journey", "Marketing funnels"]
    },
    { 
      module: "Search Engine Optimization (SEO)", 
      desc: "On-page, Off-page & Technical SEO",
      duration: "3 weeks",
      topics: ["Keyword research", "On-page SEO", "Backlinks", "SEO tools"]
    },
    { 
      module: "Search Engine Marketing (SEM)", 
      desc: "Paid advertising with Google Ads",
      duration: "3 weeks",
      topics: ["Google Ads setup", "Keyword bidding", "Ad copy", "Quality score"]
    },
    { 
      module: "Social Media Marketing (SMM)", 
      desc: "Organic & paid social media campaigns",
      duration: "3 weeks",
      topics: [
        "Facebook Ads",
        "Instagram growth",
        "LinkedIn marketing",
        "Content calendar"
      ]
    },
    { 
      module: "Analytics & Performance Tracking", 
      desc: "Measure, analyze & optimize campaigns",
      duration: "2 weeks",
      topics: [
        "Google Analytics",
        "Google Search Console",
        "Conversion tracking",
        "Campaign optimization"
      ]
    },
    { 
      module: "Advanced Marketing & Projects", 
      desc: "Growth hacking & real-time projects",
      duration: "2 weeks",
      topics: [
        "Email automation",
        "Influencer marketing",
        "Affiliate marketing",
        "Live project execution"
      ]
    }
  ],

  tools: [
    "Google Analytics",
    "Google Ads",
    "Search Console",
    "Facebook Ads Manager",
    "Canva",
    "Mailchimp",
    "SEMrush",
    "Ahrefs"
  ],

  prerequisites: [
    "Basic computer & internet knowledge",
    "Interest in marketing & branding",
    "No prior marketing experience required"
  ],

  whoCanJoin: [
    "Students & Freshers interested in marketing",
    "Business owners & Entrepreneurs",
    "Career switchers entering digital marketing",
    "Working professionals upgrading marketing skills"
  ],

  careerOpportunities: [
    "Digital Marketing Executive",
    "SEO Specialist",
    "Social Media Manager",
    "Performance Marketer",
    "Content Marketing Strategist"
  ],

  highlights: [
    "4 Live Industry Projects",
    "Hands-on Campaign Experience",
    "1-on-1 Mentorship",
    "Internship Guidance",
    "Job Assistance",
    "Industry Recognized Certificate"
  ],

  instructor: {
    name: "Arun Prakash",
    experience: "7+ years",
    companies: ["Zoho", "Flipkart", "Marketing Agency"],
    students: 4300
  }
},
{
  id: "java-fullstack",
  title: "Java Full Stack Development",
  shortTitle: "Java, Spring Boot & React",
  category: "Development",
  image: CourseImgJava,
  duration: "4 Months",
  level: "Beginner to Advanced",
  mode: "Online / Offline",
  lessons: 30,
  students: 1580,
  rating: 4.8,
  reviews: 420,
  price: 16999,
  language: "English & Tamil",
  certificate: true,
  liveProjects: 6,

  overview:
    "Become a professional Java Full Stack Developer by mastering core Java, backend development with Spring Boot, database management, and frontend integration. This course focuses on real-world applications and enterprise-level projects.",

  learn: [
    "Core Java fundamentals & OOP concepts",
    "Advanced Java & Collections framework",
    "JDBC & database connectivity",
    "Spring & Spring Boot framework",
    "RESTful API development",
    "Hibernate & JPA",
    "Frontend basics with HTML, CSS & React",
    "Authentication & Authorization",
    "Microservices basics",
    "Real-time project development"
  ],

  curriculum: [
    { 
      module: "Core Java Fundamentals", 
      desc: "Java basics, syntax & OOP concepts",
      duration: "3 weeks",
      topics: [
        "Java syntax",
        "Data types",
        "OOP concepts",
        "Exception handling"
      ]
    },
    { 
      module: "Advanced Java", 
      desc: "Collections, Multithreading & Java 8",
      duration: "3 weeks",
      topics: [
        "Collections framework",
        "Streams & Lambda",
        "Multithreading",
        "File handling"
      ]
    },
    { 
      module: "Database & JDBC", 
      desc: "SQL & Java database connectivity",
      duration: "2 weeks",
      topics: [
        "SQL basics",
        "JDBC",
        "CRUD operations",
        "Transactions"
      ]
    },
    { 
      module: "Spring & Spring Boot", 
      desc: "Enterprise backend development",
      duration: "4 weeks",
      topics: [
        "Spring Core",
        "Spring MVC",
        "Spring Boot",
        "REST APIs"
      ]
    },
    { 
      module: "Hibernate & JPA", 
      desc: "ORM & database mapping",
      duration: "2 weeks",
      topics: [
        "Hibernate",
        "JPA annotations",
        "Entity relationships",
        "Caching"
      ]
    },
    { 
      module: "Full Stack Project & Deployment", 
      desc: "End-to-end application development",
      duration: "2 weeks",
      topics: [
        "React integration",
        "Security (JWT)",
        "Project deployment",
        "Microservices intro"
      ]
    }
  ],

  tools: [
    "Java",
    "Spring Boot",
    "Hibernate",
    "MySQL",
    "React",
    "Maven",
    "Git",
    "IntelliJ IDEA",
    "Postman"
  ],

  prerequisites: [
    "Basic computer knowledge",
    "Logical thinking & problem-solving interest",
    "No prior Java experience required"
  ],

  whoCanJoin: [
    "Students & Freshers learning Java",
    "Backend developers upgrading to Full Stack",
    "Career switchers entering Java development",
    "Professionals targeting enterprise projects"
  ],

  careerOpportunities: [
    "Java Developer",
    "Java Full Stack Developer",
    "Backend Developer",
    "Spring Boot Developer",
    "Software Engineer"
  ],

  highlights: [
    "6 Enterprise-level Projects",
    "Hands-on Java Coding",
    "1-on-1 Mentorship",
    "Job Assistance",
    "Interview Preparation",
    "Industry Recognized Certificate"
  ],

  instructor: {
    name: "Vignesh Rao",
    experience: "9+ years",
    companies: ["TCS", "Infosys", "Product-based Company"],
    students: 5800
  }
}
];

export default coursedata;
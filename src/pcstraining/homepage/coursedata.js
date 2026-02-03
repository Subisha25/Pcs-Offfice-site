
import CourseImg1 from "../assets/popular1.webp";
import CourseImg2 from "../assets/popular2.webp";
import CourseImg3 from "../assets/popular3.webp";
import CourseImg4 from "../assets/popular2.webp";
import CourseImg5 from "../assets/popular2.webp";
import CourseImgAI from "../assets/AI image.webp";
import CourseImgDM from "../assets/digital marketing.webp";
import CourseImgJava from "../assets/java.webp";
import htmlIcon from "../../components/assets/teach/html.svg";
import cssIcon from "../../components/assets/teach/css.svg";
import jsIcon from "../../components/assets/teach/js.svg";
import reactIcon from "../../components/assets/teach/react.svg";
import nodeIcon from "../../components/assets/teach/node.svg";
import expressIcon from "../../components/assets/teach/expressjs.webp";
import mongoIcon from "../../components/assets/teach/mongodb-svgrepo-com.svg";
import gitIcon from "../../components/assets/teach/git.svg";
import vscodeIcon from "../../components/assets/teach/vscode.svg";
import postmanIcon from "../../components/assets/teach/postman.svg";
import chromedevtools from "../../components/assets/teach/chrome-devtools.svg";
import heroku from "../../components/assets/teach/heroku.svg";
import aws from "../../components/assets/teach/aws.svg";
import python from "../../components/assets/teach/python.svg";
import django from "../../components/assets/teach/django.svg";
import Flask from "../../components/assets/teach/flask-svgrepo-com.svg";
import postgresql from "../../components/assets/teach/postgresql.svg";
import jbpycharm from "../../components/assets/teach/jbpycharm.svg";
import expo from "../../components/assets/teach/expo.svg";
import android from "../../components/assets/teach/androidsudio.svg";
import xcode from "../../components/assets/teach/xcode.svg";
import firebase from "../../components/assets/teach/firebase.svg";
import numpy from "../../components/assets/teach/numpy.svg";
import pandas from "../../components/assets/teach/pandas.svg";
import Matplotlib from "../../components/assets/teach/Matplotlib.webp";
import scikitlearn from "../../components/assets/teach/scikitlearn.webp";
import keras from "../../components/assets/teach/keras.svg";
import jupyter from "../../components/assets/teach/jupyter.svg";
import googleanalytics from "../../components/assets/teach/googleanalytics.svg";
import googleads from "../../components/assets/teach/googleads.svg";
import googlesearchcons from "../../components/assets/teach/googlesearchcons.svg";
import facebookads from "../../components/assets/teach/facebook.svg";
import canva from "../../components/assets/teach/canva.svg";
import mailchimp from "../../components/assets/teach/mailchimp.svg";
import semrush from "../../components/assets/teach/semrush.webp";
import ahrefs from "../../components/assets/teach/ahrefs.webp";
import java from "../../components/assets/teach/java.svg";
import springboot1 from "../../components/assets/teach/springboot1.webp";
import hibernate from "../../components/assets/teach/hibernate.svg";
import Mysql from "../../components/assets/teach/mysql-svgrepo-com.svg";
import maven from "../../components/assets/teach/maven-svgrepo-com.svg";
import IntelliJ from "../../components/assets/teach/intellij-idea-svgrepo-com.svg";
import developer from "../../components/assets/prerequisites/career.webp";
import WhyBasicComputer from "../../components/assets/prerequisites/pre.webp"
import students from "../../components/assets/prerequisites/whocanjion.webp"
const coursedata = [

  {
    id: "fullstack-web",
    title: "Full Stack Web Development",
    shortTitle: "HTML, CSS, JS, React & Node",
    category: " Full Stack Development",
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
    desc: "This module introduces the fundamentals of frontend development. You will learn HTML5 structure, CSS3 styling, and modern layout systems like Flexbox and Grid to build responsive and user-friendly websites.",
    duration: "3 weeks",
    topics: ["Semantic HTML", "CSS Variables", "Media Queries", "Bootstrap basics"]
  },
  {
    module: "JavaScript Mastery",
    desc: "Learn how to make websites interactive by mastering JavaScript concepts such as DOM manipulation, ES6 features, and asynchronous programming techniques used in real-world applications.",
    duration: "4 weeks",
    topics: ["Arrow Functions", "Promises", "Fetch API", "Local Storage"]
  },
  {
    module: "React.js Development",
    desc: "Build scalable and high-performance user interfaces using React.js by learning components, hooks, routing, and modern state management techniques.",
    duration: "4 weeks",
    topics: ["JSX", "useState/useEffect", "React Router", "Context API", "Redux"]
  },
  {
    module: "Backend with Node.js",
    desc: "Understand server-side development using Node.js and Express by creating RESTful APIs, handling requests, and managing backend application logic.",
    duration: "3 weeks",
    topics: ["Express Setup", "Middleware", "Route Handling", "Error Handling"]
  },
  {
    module: "Database & Authentication",
    desc: "Learn how to design and manage databases using MongoDB and implement secure authentication and authorization using JWT and modern security practices.",
    duration: "2 weeks",
    topics: ["CRUD Operations", "Schema Design", "JWT Tokens", "Password Hashing"]
  },
  {
    module: "Deployment & DevOps",
    desc: "Gain hands-on experience with Git, GitHub, and cloud deployment tools to deploy, manage, and maintain applications in production environments.",
    duration: "1 week",
    topics: ["Git commands", "GitHub workflows", "Vercel deployment", "Environment variables"]
  }
]
,

tools: [
  { name: "HTML", icon: htmlIcon },
  { name: "CSS", icon: cssIcon },
  { name: "JavaScript", icon: jsIcon },
  { name: "React", icon: reactIcon },
  { name: "Node.js", icon: nodeIcon },
  { name: "Express", icon: expressIcon },
  { name: "MongoDB", icon: mongoIcon },
  { name: "Git", icon: gitIcon },
  { name: "VS Code", icon: vscodeIcon },
  { name: "Postman", icon: postmanIcon }
]
,
    prerequisites: [
      "Basic computer knowledge",
      "Passion to learn coding",
      "No prior programming experience needed"
    ],

    prerequisitesImages: [
 WhyBasicComputer,
 
],
    whoCanJoin: [
      "Students & College Freshers looking to start a tech career",
      "Career Switchers wanting to enter web development",
      "Working Professionals upskilling for better opportunities",
      "Entrepreneurs building their own web products"
    ],


    whoCanJoinImages: [
 students,],

 careerOpportunities: [
  "Full Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "MERN Stack Developer",
  "Web Application Developer"
],

careerImages: [
 developer,
 
],


    highlights: [
      "5 Industry-level Projects",
      "1-on-1 Mentorship Sessions",
      "Job Placement Assistance",
      "Lifetime Course Access",
      "Interview Preparation",
      "Certificate of Completion"
    ],

    highlightsImages: [
 ,
 
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
    category: "Frontend",
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
    desc: "This module builds a strong foundation in web layout and styling. You will learn how to structure pages using semantic HTML and design modern, responsive user interfaces with CSS, Flexbox, Grid, animations, and media queries for multiple screen sizes.",
    duration: "2 weeks",
    topics: ["Semantic HTML", "CSS Grid", "Flexbox", "Animations", "Media Queries"]
  },
  { 
    module: "JavaScript Essentials", 
    desc: "Learn the core concepts of JavaScript required to build interactive websites. This module covers ES6+ features, DOM manipulation, event handling, and data structures to make web pages dynamic and user-driven.",
    duration: "3 weeks",
    topics: ["Variables", "Functions", "Arrays", "Objects", "DOM API"]
  },
  { 
    module: "React Fundamentals", 
    desc: "Understand the basics of React by learning how to build reusable components using JSX. You will work with props and state to create dynamic user interfaces and manage data flow within applications.",
    duration: "2 weeks",
    topics: ["JSX Syntax", "Component Types", "Props passing", "Conditional Rendering"]
  },
  { 
    module: "React Hooks & Advanced", 
    desc: "Dive deeper into React with hooks and advanced patterns. This module focuses on managing state and side effects using hooks, sharing data with Context API, creating custom hooks, and optimizing application performance.",
    duration: "3 weeks",
    topics: ["useState", "useEffect", "useContext", "Custom Hooks", "Performance"]
  }
]
,


    tools: [
  { name: "HTML", icon: htmlIcon },
  { name: "CSS", icon: cssIcon },
  { name: "JavaScript", icon: jsIcon },
  { name: "React", icon: reactIcon },
  { name: "VS Code", icon: vscodeIcon },
  { name: "chromedevtools", icon: chromedevtools },
  { name: "Git", icon: gitIcon },

],

    prerequisites: [
      "Basic understanding of HTML/CSS helpful",
      // "Eagerness to learn modern web development"
      "Interest in Web Development"
    ],
    prerequisitesImages: [
 WhyBasicComputer,
 
],
    whoCanJoin: [
      "Students wanting to specialize in frontend",
      "UI/UX Designers transitioning to development",
      "Freshers starting their coding journey",
      "Backend developers learning frontend skills"
    ],
    whoCanJoinImages: [
 students,],
    careerOpportunities: [
      "React Developer",
      "Frontend Developer",
      "UI Developer",
      "JavaScript Developer"
    ],
  careerImages: [
 developer,
 
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
    category: "Backend",
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
    desc: "This module introduces the core concepts of Node.js, including built-in modules, asynchronous programming, and the event-driven architecture. You will understand how the Node.js event loop works and how to build efficient, non-blocking server-side applications.",
    duration: "2 weeks",
    topics: ["File System", "HTTP module", "Events", "Streams", "NPM"]
  },
  { 
    module: "Express.js Framework", 
    desc: "Learn how to build web servers and REST APIs using Express.js. This module covers routing, middleware flow, request and response handling, and structured error management for scalable backend applications.",
    duration: "2 weeks",
    topics: ["Express setup", "Routes", "Middleware chain", "Error handling"]
  },
  { 
    module: "Database Integration", 
    desc: "Understand how to integrate MongoDB with Node.js using Mongoose. You will learn schema design, perform CRUD operations, optimize queries, and work with aggregations and indexes for better performance.",
    duration: "2 weeks",
    topics: ["Schema design", "Models", "Queries", "Aggregation", "Indexing"]
  },
  { 
    module: "Authentication & Security", 
    desc: "Focus on securing backend applications by implementing authentication and authorization. This module covers JWT-based login systems, password hashing with bcrypt, role-based access control, and essential API security practices.",
    duration: "1.5 weeks",
    topics: ["JWT tokens", "Password hashing", "Role-based access", "CORS"]
  },
  { 
    module: "Advanced Topics", 
    desc: "Explore advanced backend concepts such as real-time communication, caching, and performance optimization. You will work with WebSockets, Redis caching, process management, and scalability techniques used in production systems.",
    duration: "1.5 weeks",
    topics: ["Socket.io", "Redis", "Load balancing", "PM2"]
  }
]
,

tools: [

  { name: "Node.js", icon: nodeIcon },
  { name: "Express", icon: expressIcon },
  { name: "MongoDB", icon: mongoIcon },
  { name: "Git", icon: gitIcon },
  { name: "VS Code", icon: vscodeIcon },
  { name: "Postman", icon: postmanIcon },
    { name: "Heroku", icon: heroku },
  { name: "AWS", icon:aws }

],
    

    prerequisites: [
      "Good understanding of JavaScript",
      "Basic knowledge of databases",
      "Familiarity with command line"
    ],
    prerequisitesImages: [
 WhyBasicComputer,
 
],
    whoCanJoin: [
      "Backend Developers wanting to specialize in Node.js",
      "Full Stack learners focusing on server-side",
      "Frontend developers expanding to backend",
      "Software Engineers upskilling"
    ],
    whoCanJoinImages: [
 students,],
    careerOpportunities: [
      "Backend Developer",
      "Node.js Developer",
      "API Developer",
      "Full Stack Developer",
      "DevOps Engineer"
    ],

    careerImages: [
 developer,
 
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
    category: "Core Programming",
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
    desc: "This module introduces the fundamentals of Python programming. You will learn Python syntax, variables, data types, and control flow statements to build a strong foundation for writing clean and efficient programs.",
    duration: "2 weeks",
    topics: ["Variables", "Loops", "Functions", "Modules", "Input/Output"]
  },
  { 
    module: "Data Structures & OOPS", 
    desc: "Learn how to organize and manage data efficiently using Python data structures. This module also covers object-oriented programming concepts such as classes, inheritance, polymorphism, and real-world problem solving using OOP principles.",
    duration: "2 weeks",
    topics: ["Lists operations", "Dictionary methods", "Classes", "Inheritance", "Polymorphism"]
  },
  { 
    module: "Django Framework", 
    desc: "Build full-featured and scalable web applications using Django. You will work with the MVC architecture, models, views, templates, forms, and Django ORM to create secure, database-driven web applications.",
    duration: "3 weeks",
    topics: ["Project setup", "URL routing", "Models & ORM", "Templates", "Forms", "Admin panel"]
  },
  { 
    module: "Flask Framework", 
    desc: "Learn to develop lightweight and flexible web applications using Flask. This module focuses on routing, templating with Jinja, RESTful API development, and integrating databases for backend functionality.",
    duration: "2 weeks",
    topics: ["Flask basics", "Jinja templates", "REST API", "Database integration"]
  },
  { 
    module: "Database & Deployment", 
    desc: "Understand database management and application deployment workflows. You will work with SQL databases like SQLite and PostgreSQL, handle migrations, and deploy Python applications to cloud platforms for production use.",
    duration: "1.5 weeks",
    topics: ["SQLite", "PostgreSQL", "Migrations", "Cloud deployment"]
  }
]
,
      
    tools: [
  { name: "Python", icon: python },
  { name: "Django", icon: django },
  { name: "Flask", icon: Flask },
  { name: "PostgreSQL", icon: postgresql },
  { name: "PyCharm", icon: jbpycharm },
  { name: "Git", icon: gitIcon },
  { name: "VS Code", icon: vscodeIcon },
  { name: "Postman", icon: postmanIcon }
],

    prerequisites: [
      "Basic computer knowledge",
      "Logical thinking ability",
      "No programming experience needed"
    ],

        prerequisitesImages: [
 WhyBasicComputer,
 
],
    whoCanJoin: [
      "Complete beginners to programming",
      "Students interested in data science path",
      "Backend developers learning Python",
      "Automation enthusiasts"
    ],
    whoCanJoinImages: [
 students,],
    careerOpportunities: [
      "Python Developer",
      "Django Developer",
      "Backend Developer",
      "Automation Engineer",
      "Data Analyst (with further learning)"
    ],
    careerImages: [
 developer,
 
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
    desc: "This module introduces the fundamentals of React Native development. You will set up the development environment, understand core components, and build mobile layouts using Flexbox while handling platform-specific behaviors for Android and iOS.",
    duration: "2 weeks",
    topics: ["Environment setup", "Core components", "Flexbox styling", "Platform-specific code"]
  },
  { 
    module: "Navigation & Routing", 
    desc: "Learn how to manage screen transitions and navigation flows in mobile applications using React Navigation. This module covers stack, tab, and drawer navigators along with nested navigation patterns.",
    duration: "2 weeks",
    topics: ["Stack Navigator", "Tab Navigator", "Drawer Navigator", "Nested navigation"]
  },
  { 
    module: "State & APIs", 
    desc: "Understand how to manage application state and work with external data sources. You will learn to handle state using hooks, make API calls, store data locally, and share data across components.",
    duration: "2 weeks",
    topics: ["useState/useEffect", "Fetch API", "Axios", "Context API", "AsyncStorage"]
  },
  { 
    module: "Native Features", 
    desc: "Explore native device capabilities and integrate them into your applications. This module focuses on working with camera, location services, permissions, maps, and push notifications for real-world mobile apps.",
    duration: "1.5 weeks",
    topics: ["Camera integration", "Maps", "Permissions", "Push notifications"]
  },
  { 
    module: "Deployment", 
    desc: "Learn the complete process of preparing, testing, and deploying React Native applications. You will generate builds and publish apps to the Google Play Store and Apple App Store following best practices.",
    duration: "0.5 weeks",
    topics: ["APK generation", "iOS build", "Store submissions", "Testing"]
  }
]
,

    tools: [
  { name: "React Native", icon: reactIcon },
  { name: "JavaScript", icon: jsIcon },
  { name: "Expo", icon: expo },
  { name: "Android Studio", icon: android },
  { name: "Xcode", icon: xcode },
  { name: "Firebase", icon: firebase },
  { name: "Git", icon: gitIcon },
],

    prerequisites: [
      "Good knowledge of React.js",
      "JavaScript ES6+ proficiency",
      "Basic understanding of mobile app concepts"
    ],
    prerequisitesImages: [
 WhyBasicComputer,
 
],
    whoCanJoin: [
      "React developers moving to mobile",
      "Mobile app development learners",
      "Frontend developers expanding skills",
      "Entrepreneurs building mobile products"
    ],

        whoCanJoinImages: [
 students,],
    careerOpportunities: [
      "React Native Developer",
      "Mobile App Developer",
      "Cross-platform Developer",
      "Full Stack Mobile Developer"
    ],
careerImages: [
 developer,
 
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
    desc: "This module builds a strong foundation in Python for artificial intelligence. You will learn Python programming basics, essential data structures, and widely used libraries such as NumPy, Pandas, and Matplotlib for data handling and visualization.",
    duration: "3 weeks",
    topics: ["Python syntax", "NumPy", "Pandas", "Matplotlib"]
  },
  {
    module: "Maths & Statistics for ML",
    desc: "Understand the core mathematical concepts required for machine learning. This module covers linear algebra, probability, statistics, and data analysis techniques that form the backbone of ML algorithms.",
    duration: "2 weeks",
    topics: ["Linear Algebra", "Probability", "Statistics", "Data analysis"]
  },
  {
    module: "Machine Learning",
    desc: "Learn how machine learning algorithms work and how to apply them to real-world problems. This module covers both supervised and unsupervised learning techniques, model training, evaluation, and performance tuning.",
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
    desc: "Dive into deep learning concepts by building and training neural network models. You will work with architectures such as ANN, CNN, and RNN using modern frameworks like TensorFlow and Keras.",
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
    desc: "Explore advanced AI domains including Natural Language Processing and Computer Vision. This module focuses on building text-based and image-based intelligent systems using practical techniques and real datasets.",
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
    desc: "Apply your knowledge by working on end-to-end AI projects. You will learn how to deploy trained models using Flask, understand basic cloud concepts, and take AI solutions into production environments.",
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
  { name: "Python", icon: python },
  { name: "NumPy", icon: numpy },
  { name: "Pandas", icon: pandas },
  { name: "Matplotlib", icon: Matplotlib },
  { name: "Scikit-learn", icon: scikitlearn },
  { name: "Keras", icon:keras },
  { name: "Jupyter Notebook", icon: jupyter },
    { name: "VS Code", icon: vscodeIcon },

  
],

  prerequisites: [
    "Basic computer knowledge",
    "Interest in AI & problem solving",
    "No prior AI experience required"
  ],
    prerequisitesImages: [
 WhyBasicComputer,
 
],
  whoCanJoin: [
    "Students & Freshers interested in AI",
    "Software Developers upgrading to AI",
    "Career switchers entering Data & AI field",
    "Entrepreneurs building AI-based products"
  ],

      whoCanJoinImages: [
 students,],
  careerOpportunities: [
    "AI Engineer",
    "Machine Learning Engineer",
    "Data Scientist",
    "AI Developer",
    "Research Assistant"
  ],
careerImages: [
 developer,
 
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
    desc: "This module introduces the basics of digital marketing and online branding. You will understand the digital ecosystem, customer journey, and marketing funnels that help businesses attract, engage, and convert customers online.",
    duration: "2 weeks",
    topics: ["Digital ecosystem", "Customer journey", "Marketing funnels"]
  },
  { 
    module: "Search Engine Optimization (SEO)", 
    desc: "Learn how to improve website visibility on search engines through effective SEO strategies. This module covers keyword research, on-page and off-page optimization, technical SEO concepts, and the use of popular SEO tools.",
    duration: "3 weeks",
    topics: ["Keyword research", "On-page SEO", "Backlinks", "SEO tools"]
  },
  { 
    module: "Search Engine Marketing (SEM)", 
    desc: "Understand paid advertising strategies using search engines. You will learn how to create, manage, and optimize Google Ads campaigns, including keyword bidding, ad copy creation, and improving quality scores.",
    duration: "3 weeks",
    topics: ["Google Ads setup", "Keyword bidding", "Ad copy", "Quality score"]
  },
  { 
    module: "Social Media Marketing (SMM)", 
    desc: "Learn to build brand presence and run successful campaigns across social media platforms. This module focuses on organic growth, paid advertising, audience targeting, and content planning for platforms like Facebook, Instagram, and LinkedIn.",
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
    desc: "Measure and analyze the performance of digital marketing campaigns using analytics tools. You will learn to track user behavior, conversions, and key metrics to optimize campaigns for better results.",
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
    desc: "Apply advanced digital marketing techniques through real-world projects. This module covers growth hacking strategies, email automation, influencer and affiliate marketing, and hands-on project execution.",
    duration: "2 weeks",
    topics: [
      "Email automation",
      "Influencer marketing",
      "Affiliate marketing",
      "Live project execution"
    ]
  }
]
,


   tools: [
  { name: "Google Analytics", icon: googleanalytics },
  { name: "Google Ads", icon: googleads },
  { name: "Search Console", icon: googlesearchcons },
  { name: "Facebook Ads Manager", icon: facebookads },
  { name: "Canva", icon: canva },
  { name: "Mailchimp", icon: mailchimp },
  { name: "SEMrush", icon: semrush },
    { name: "Ahrefs", icon: ahrefs },
  ],


  prerequisites: [
    "Basic computer & internet knowledge",
    "Interest in marketing & branding",
    "No prior marketing experience required"
  ],
    prerequisitesImages: [
 WhyBasicComputer,
 
],
  whoCanJoin: [
    "Students & Freshers interested in marketing",
    "Business owners & Entrepreneurs",
    "Career switchers entering digital marketing",
    "Working professionals upgrading marketing skills"
  ],
    whoCanJoinImages: [
 students,],
  careerOpportunities: [
    "Digital Marketing Executive",
    "SEO Specialist",
    "Social Media Manager",
    "Performance Marketer",
    "Content Marketing Strategist"
  ],
careerImages: [
 developer,
 
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
  category: "Core Language",
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
    desc: "This module introduces the fundamentals of Java programming. You will learn Java syntax, data types, object-oriented programming concepts, and exception handling to build a strong foundation for backend and enterprise development.",
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
    desc: "Dive deeper into Java with advanced programming concepts. This module covers the Collections framework, Java 8 features such as streams and lambda expressions, multithreading, and file handling for real-world applications.",
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
    desc: "Learn how to work with databases using Java. This module focuses on SQL fundamentals, JDBC connectivity, performing CRUD operations, and handling transactions to build data-driven applications.",
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
    desc: "Build enterprise-grade backend applications using Spring and Spring Boot. You will learn dependency injection, Spring MVC architecture, RESTful API development, and rapid application configuration.",
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
    desc: "Understand object-relational mapping and database interaction using Hibernate and JPA. This module covers entity mapping, relationships, caching strategies, and efficient data persistence techniques.",
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
    desc: "Apply your learning by building an end-to-end full stack application. This module includes frontend integration, backend security using JWT, deployment strategies, and an introduction to microservices architecture.",
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
  { name: "Java", icon: java },
  { name: "Spring Boot", icon: springboot1 },
  { name: "Hibernate", icon: hibernate },
  { name: "MySQL", icon: Mysql },
  { name: "React", icon: reactIcon },
  { name: "Maven", icon:maven },
  { name: "Git", icon: gitIcon },
  { name: "IntelliJ IDEA", icon: IntelliJ },
{ name: "Postman", icon: postmanIcon }
  
],
prerequisites: [

     "Basic computer knowledge",
    //  "Logical thinking & problem-solving interest",
    "Problem-Solving Interest",
      "No prior Java experience required",

],
    prerequisitesImages: [
 WhyBasicComputer,
 
],
whoCanJoin: [
    "Students & Freshers learning Java",
    "Backend developers upgrading to Full Stack",
    "Career switchers entering Java development",
    "Professionals targeting enterprise projects"
  ],

      whoCanJoinImages: [
 students,],
  careerOpportunities: [
    "Java Developer",
    "Java Full Stack Developer",
    "Backend Developer",
    "Spring Boot Developer",
    "Software Engineer"
  ],
careerImages: [
 developer,
 
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
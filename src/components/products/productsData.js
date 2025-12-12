// src/products/productsData.js
const productsData = [
  {
    id: 1,
    title: "Doctors Appointment Booking Website",
    image: "https://pcstech.in/static/media/doctorappoiunment.42f3868518930b704e33.jpeg",
    description: "Easily book doctor appointments online. Simplifies scheduling and enhances patient convenience.",
    overview: "A complete hospital appointment management system built using React.js and Node.js that helps hospitals simplify patient bookings, manage doctors, nurses, pharmacists, departments, medicines, and streamline day-to-day hospital operations.",
    technology_stack: [
      "React.js",
      "Node.js",
      "MongoDB",
      "MySQL",
     
    ],
    key_features: [
      "Add/Edit/Delete doctors with availability and specializations",
      "Nurse & staff management with schedules",
      "Department creation and doctor assignment",
      "Pharmacist and medicine stock management",
      "Patient profiles with medical history",
      "Online appointment booking with reschedule/cancel",
      "Representative/Receptionist panel for walk-ins",
      "Admin dashboard with charts and reports",
      "Email/SMS notifications and reminders"
    ],
    benefits: [
      "Reduces manual scheduling workload",
      "Improves patient satisfaction and reduces queues",
      "Provides centralized hospital data and reporting",
      "Customizable for clinics and multi-specialty hospitals"
    ],
    faq: [
      {
        q: "Can we customize the modules?",
        a: "Yes, the system is fully customizable—staff roles, appointment flow, and UI can all be modified."
      },
      {
        q: "Can doctors view their own appointments?",
        a: "Yes, doctors have a separate panel to view schedules and patient details."
      },
      {
        q: "Does it support multi-department hospitals?",
        a: "Yes, you can add unlimited departments and assign multiple doctors."
      }
    ],
    screenshots: [
      "https://pcstech.in/static/media/doctorappoiunment.42f3868518930b704e33.jpeg",
      "https://pcstech.in/static/media/doctorappoiunment.42f3868518930b704e33.jpeg",
      "https://pcstech.in/static/media/doctorappoiunment.42f3868518930b704e33.jpeg",
      "https://pcstech.in/static/media/doctorappoiunment.42f3868518930b704e33.jpeg"
    ]
  },
  {
    id: 2,
    title: "E-Commerce Store",
    image: "https://pcstech.in/static/media/e%20commerce.f3223133494f1275b6b2.png",
    description: "A shopping platform with product filters, cart system, and checkout.",
    overview: "Zestocart is a modern full-stack e-commerce web application built using React.js, Node.js, Express.js, and MySQL. It provides users with a seamless shopping experience, supporting features such as product browsing, cart management, wishlist, checkout, secure payments, order history, tracking, and invoice generation.",
    technology_stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
   
    ],

     key_features: [
      "User Registration & Login",
      "Product Listings & Search",
      "Add to Cart & Wishlist",
      "Checkout & Payment Integration",
      "Order History & Tracking",
      "Invoice Generation",
      "Responsive Design"
    ],
     benefits: [
      "Fast and user-friendly shopping experience",
      "Secure payment handling",
      "Easy product browsing and management",
      "Real-time order tracking",
      "Scalable architecture for real-world deployment"
    ],
    faq: [
      {
        q: "Is Zestocart mobile-friendly?",
        a: "Yes, it includes fully responsive UI screens."
      },
      {
        q: "Which payment methods are supported?",
        a: "COD, Card, UPI, and Net Banking."
      },
      {
        q: "Does it support invoice downloads?",
        a: "Yes, PDF invoices are generated via the backend."
      }
    ],
    screenshots: [
      "https://pcstech.in/static/media/e%20commerce.f3223133494f1275b6b2.png",
      "https://pcstech.in/static/media/e%20commerce.f3223133494f1275b6b2.png",
      "https://pcstech.in/static/media/e%20commerce.f3223133494f1275b6b2.png"
    ]
  },
  {
    id: 3,
    title: "KYC System",
    image: "https://pcstech.in/static/media/kyc.c51f92619c2c73661f51.jpeg",
    description: "A secure and automated system to verify customer identity and ensure compliance with regulatory standards.",
    overview: "A secure and automated system to verify customer identity and ensure compliance with regulatory standards, supporting document uploads, verification statuses, and audit logs.",
    technology_stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
   
    ],
    key_features: [
      "Customer document upload and storage",
      "Automated identity verification using OCR",
      "Manual review queue for compliance officers",
      "Verification status tracking and audit logs",
      "Role-based access control and reporting"
    ],
    benefits: [
      "Speeds up customer onboarding",
      "Reduces fraud and improves compliance",
      "Provides clear audit trails for regulators"
    ],
    faq: [
      {
        q: "Which documents are supported?",
        a: "Supports passports, national IDs, driver's licenses and custom document types."
      },
      {
        q: "Can we integrate external verification providers?",
        a: "Yes, system supports integration with third-party KYC/AML providers."
      },
      {
        q: "How is data secured?",
        a: "Documents are stored in encrypted storage with role-based access control and audit logs."
      }
    ],
    screenshots: [
      "https://pcstech.in/static/media/kyc.c51f92619c2c73661f51.jpeg",
      "https://pcstech.in/static/media/kyc.c51f92619c2c73661f51.jpeg",
      "https://pcstech.in/static/media/kyc.c51f92619c2c73661f51.jpeg"
    ]
  },
  {
    id: 4,
    title: "Billing Software",
    image: "https://pcstech.in/static/media/billingsoftware.cc4322fa1321295489fe.png",
    description: "Smart and efficient billing system to manage invoices, payments, and reports.",
    overview: "Smart and efficient billing system to manage invoices, payments, taxes and reports with multi-currency and customizable invoice templates.",
    technology_stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "JWT",
      "Stripe"
    ],
    key_features: [
      "Invoice creation and recurring invoices",
      "Payment tracking and receipts",
      "Tax configurations and multi-currency support",
      "Client management and payment history",
      "Exportable reports and accounting integrations"
    ],
    benefits: [
      "Automates invoicing and reduces manual errors",
      "Improves cash flow with recurring billing",
      "Provides accurate financial reporting"
    ],
    faq: [
      {
        q: "Does it support recurring invoices?",
        a: "Yes, schedule recurring invoices with configurable intervals."
      },
      {
        q: "Can invoices be exported to accounting software?",
        a: "Yes, supports CSV export and integrations with major accounting tools."
      },
      {
        q: "Is multi-currency supported?",
        a: "Yes, configure multiple currencies and tax rules."
      }
    ],
    screenshots: [
      "https://pcstech.in/static/media/billingsoftware.cc4322fa1321295489fe.png",
      "https://pcstech.in/static/media/billingsoftware.cc4322fa1321295489fe.png",
      "https://pcstech.in/static/media/billingsoftware.cc4322fa1321295489fe.png"
    ]
  },
  {
    id: 5,
    title: "Car Rental App",
    image: "https://pcstech.in/static/media/car.6613c3edb0420ec8c8cf.jpeg",
    description: "A smart car rental solution offering hassle-free booking, flexible options, and doorstep delivery.",
    overview: "A modern car rental management solution for booking, fleet management, flexible pricing, and door-step delivery.",
    technology_stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe",
      "Google Maps API"
    ],
    key_features: [
      "Car listing with images and pricing",
      "Real-time availability and booking calendar",
      "Fleet management and maintenance logs",
      "Driver/partner management and delivery options",
      "Payment processing and invoices"
    ],
    benefits: [
      "Streamlines rental operations and reduces manual work",
      "Provides flexible booking & delivery options",
      "Improves fleet utilization and tracking"
    ],
    faq: [
      {
        q: "Can we set different pricing rules?",
        a: "Yes, dynamic pricing by date, vehicle type and promos is supported."
      },
      {
        q: "Do you support driver assignment?",
        a: "Yes, assign drivers and manage their schedules."
      },
      {
        q: "Is GPS tracking available?",
        a: "GPS integration is possible through third-party telematics."
      }
    ],
    screenshots: [
      "https://pcstech.in/static/media/car.6613c3edb0420ec8c8cf.jpeg",
      "https://pcstech.in/static/media/car.6613c3edb0420ec8c8cf.jpeg",
      "https://pcstech.in/static/media/car.6613c3edb0420ec8c8cf.jpeg"
    ]
  },
  {
    id: 6,
    title: "Gas Booking App",
    image: "https://pcstech.in/static/media/gas1.38d2d0a543811cc66b76.avif",
    description: "Easily book and track your gas cylinder anytime, anywhere with just a tap.",
    overview: "A user-friendly app to book and track gas cylinder deliveries with scheduling, tracking, and order history.",
    technology_stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Twilio/SMS",
      "Google Maps API"
    ],
    key_features: [
      "Book gas cylinders with preferred delivery slots",
      "Track delivery status and driver location",
      "Order history and re-order quick action",
      "Admin panel for managing deliveries and partners"
    ],
    benefits: [
      "Improves delivery accuracy and customer convenience",
      "Reduces missed deliveries with tracking and notifications",
      "Simplifies partner and route management"
    ],
    faq: [
      {
        q: "Does it support scheduled deliveries?",
        a: "Yes, users can choose preferred delivery slots."
      },
      {
        q: "Can customers track delivery in real-time?",
        a: "Yes, driver location and status are visible for live tracking."
      },
      {
        q: "How are notifications sent?",
        a: "Notifications via SMS, email and in-app push are supported."
      }
    ],
    screenshots: [
      "https://pcstech.in/static/media/gas1.38d2d0a543811cc66b76.avif",
      "https://pcstech.in/static/media/gas1.38d2d0a543811cc66b76.avif",
      "https://pcstech.in/static/media/gas1.38d2d0a543811cc66b76.avif"
    ]
  },
  {
    id: 7,
    title: "LMS (Learning Management System)",
    image: "https://pcstech.in/static/media/lms.548ffa03fce871973cb6.jpeg",
    description: "This Learning Management System allows students to conveniently enroll in courses and learn online.",
    overview: "A learning platform for creating courses, enrolling students, tracking progress, quizzes and certificates with instructor & admin panels.",
    technology_stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "AWS S3"
    ],
    key_features: [
      "Course creation with multimedia content",
      "Student enrollment and progress tracking",
      "Quizzes, assignments and auto-grading",
      "Instructor dashboard and analytics",
      "Certificate generation and download"
    ],
    benefits: [
      "Delivers scalable online education",
      "Easy management for instructors and admins",
      "Improves student engagement and tracking"
    ],
    faq: [
      {
        q: "Can courses be monetized?",
        a: "Yes, supports paid courses and subscription models."
      },
      {
        q: "Is there support for live classes?",
        a: "Integration with live-streaming platforms is possible."
      },
      {
        q: "Can we create certificates?",
        a: "Yes, customizable certificates can be generated."
      }
    ],
    screenshots: [
      "https://pcstech.in/static/media/lms.548ffa03fce871973cb6.jpeg",
      "https://pcstech.in/static/media/lms.548ffa03fce871973cb6.jpeg",
      "https://pcstech.in/static/media/lms.548ffa03fce871973cb6.jpeg"
    ]
  },
  {
    id: 8,
    title: "Zestaurant – Online Food Ordering & Delivery System",
    image: "https://pcstech.in/static/media/food.f7dd0d573a52bdd1fff5.png",
    description: "Delicious meals delivered hot and fast to your doorstep.",
    overview: "Zestaurant is a full‑stack online food ordering and restaurant management system built using React.js, Node.js/Express, and MySQL. It allows users to browse restaurants, order food, track delivery, and download invoices. Admins manage menus, orders, offers, and restaurants, while super-admins approve restaurants and oversee platform operations.",
    technology_stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "Google Maps API"
    ],
     key_features: [
      "User registration, login, and secure JWT authentication",
      " Restaurant browsing with filters",
      "Menu display with Add to Cart functionality",
      "Checkout flow with multiple payment options (COD, Card, UPI)",
      " Order tracking with status updates",
      " Auto-generated PDF invoice",
      "Admin panel for menu & order management",
      "Super-admin panel for restaurant approvals"
    ],
     benefits: [
      "Fully scalable and modular architecture",
      "Real-world food delivery experience",
      "Secure authentication & role-based access",
      "Admin and super-admin controls improve platform management",
      "Clean and responsive UI designed for mobile & desktop",
      "Easy extension for future features like coupons, reviews, or live tracking"
    ],

    
    faq: [
      {
        q: "How does the order process work?",
        a: "Users browse restaurants, add items to their cart, enter delivery details, choose a payment method, and place the order. The system updates order status until delivery."
      },
      {
        q: "How secure is the system?",
        a: "The system uses JWT authentication, password hashing, SQL injection prevention, and role-based route protections for maximum safety."
      },
      {
        q: "Can this system be expanded?",
        a: "Yes. The architecture supports future upgrades like live tracking, delivery partner apps, coupons, chat support, and review systems."
      }
    ],
    screenshots: [
      "https://pcstech.in/static/media/food.f7dd0d573a52bdd1fff5.png",
      "https://pcstech.in/static/media/food.f7dd0d573a52bdd1fff5.png",
      "https://pcstech.in/static/media/food.f7dd0d573a52bdd1fff5.png"
    ]
  },
  {
    id: 9,
    title: "Beautician Booking Portal",
    image: "https://pcstech.in/static/media/beauty.aa895d02eae408f3eaf4.png",
    description: "A simple platform to book beauty services with your preferred beauticians anytime, anywhere.",
    overview: "A booking portal for salons and beauticians to manage services, appointments, and customer history with easy online scheduling.",
    technology_stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Stripe"
    ],
    key_features: [
      "Service catalog with durations & prices",
      "Beautician profiles and availability",
      "Online appointment booking and rescheduling",
      "Customer profiles and appointment history",
      "Promotions and loyalty features"
    ],
    benefits: [
      "Reduces no-shows with reminders",
      "Improves salon scheduling and revenue",
      "Provides easy rebooking and customer management"
    ],
    faq: [
      {
        q: "Can customers book multiple services at once?",
        a: "Yes, the booking flow supports multiple services per appointment."
      },
      {
        q: "Can staff add walk-in appointments?",
        a: "Yes, receptionists can create walk-in bookings."
      },
      {
        q: "Is online payment supported?",
        a: "Yes, supports card payments and wallet options."
      }
    ],
    screenshots: [
      "https://pcstech.in/static/media/beauty.aa895d02eae408f3eaf4.png",
      "https://pcstech.in/static/media/beauty.aa895d02eae408f3eaf4.png",
      "https://pcstech.in/static/media/beauty.aa895d02eae408f3eaf4.png"
    ]
  },
  {
    id: 10,
    title: "Tailoring Mobile App",
    image: "https://pcstech.in/static/media/tailor.9b4c21d9eff7225c47ae.webp",
    description: "Your personal tailor in your pocket – stitch, style, and track orders effortlessly.",
    overview: "A tailoring & alterations app to place stitch orders, store measurements, track orders and manage tailors with pickup/delivery options.",
    technology_stack: [
      "React Native / React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe",
      "AWS S3"
    ],
    key_features: [
      "Order creation with measurement uploads",
      "Tailor assignment and order tracking",
      "Measurement profile per customer",
      "Pickup & delivery scheduling",
      "Order history and invoice generation"
    ],
    benefits: [
      "Streamlines tailor order handling and deliveries",
      "Reduces measurement errors with stored profiles",
      "Improves customer convenience and tracking"
    ],
    faq: [
      {
        q: "Can customers store multiple measurements?",
        a: "Yes, customers can save multiple measurement profiles."
      },
      {
        q: "Are pickup and delivery supported?",
        a: "Yes, schedule pickups and deliveries with status tracking."
      },
      {
        q: "Can tailors manage orders via an app?",
        a: "Yes, tailors get a partner app to accept and update orders."
      }
    ],
    screenshots: [
      "https://pcstech.in/static/media/tailor.9b4c21d9eff7225c47ae.webp",
      "https://pcstech.in/static/media/tailor.9b4c21d9eff7225c47ae.webp",
      "https://pcstech.in/static/media/tailor.9b4c21d9eff7225c47ae.webp"
    ]
  }
];

export default productsData;

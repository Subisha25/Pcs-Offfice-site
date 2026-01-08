import beauty1 from "./images/beautyparlour/beauty.jpeg";
import beauty2 from "./images/beautyparlour/beauty1.jpeg";
import beauty3 from "./images/beautyparlour/beauty2.jpeg";
import beauty4 from "./images/beautyparlour/beauty3.jpeg";
import beauty5 from "./images/beautyparlour/beauty4.jpeg";
import beauty6 from "./images/beautyparlour/beauty5.jpeg";
import beauty7 from "./images/beautyparlour/beauty7.jpeg";
import beauty8 from "./images/beautyparlour/beauty8.png";
import LMS from "./images/lms/lms.jpeg";
import LMS1 from "./images/lms/lms1.jpeg";
import LMS2 from "./images/lms/lms2.jpeg";
import LMS3 from "./images/lms/lms3.jpeg";
import LMS4 from "./images/lms/lms4.jpeg";
import DOC from "./images/doc/doc.jpeg";
import DOC2 from "./images/doc/doc2.jpeg";
import DOC3 from "./images/doc/doc3.jpeg";
import DOC4 from "./images/doc/doc4.jpeg";
import DOC5 from "./images/doc/doc5.jpeg";
import FOOD from "./images/food/food.jpeg";
import FOOD1 from "./images/food/food1.jpeg";
import FOOD2 from "./images/food/food2.jpeg";
import FOOD3 from "./images/food/food3.jpeg";
import Billing from "./images/doc/billing.png";

import Ecommerce from "./images/ecommerce/e-commerce.png";
import Ecommerce1 from "./images/ecommerce/ecommerce1.png";
import Ecommerce2 from "./images/ecommerce/ecommerce2.png";
import Ecommerce3 from "./images/ecommerce/ecommerce3.png";
import Ecommerce4 from "./images/ecommerce/ecommerce4.png";

import Gas from "./images/gas/gas.png";
import Gas1 from "./images/gas/gas1.png";
import Gas2 from "./images/gas/gas2.jpg";

import Kyc1 from "./images/kyc/kyc1.png";
import Kyc2 from "./images/kyc/kyc2.png";
import Kyc3 from "./images/kyc/kyc3.png";
import Kyc4 from "./images/kyc/kyc4.png";
import Kyc5 from "./images/kyc/kyc5.png";


// import Kyc2 from "./images/kyc/kyc2.png";

import Carrendal from "./images/carrendal/carrendal.png";
import Car1 from "./images/carrendal/car1.png";
import Car2 from "./images/carrendal/car2.png";
import Car3 from "./images/carrendal/car3.png";
import Car4 from "./images/carrendal/car4.png";

import Tailoring from "./images/tailoring/tailoring.jpg";
import Tailoring1 from "./images/tailoring/tailor1.png";
import Tailoring2 from "./images/tailoring/tailor2.png";
import Tailoring3 from "./images/tailoring/tailor3.png";
import Tailoring4 from "./images/tailoring/tailor4.png";
import Tailoring5 from "./images/tailoring/tailor5.png";
import react from "../../components/assets/teach/react.svg"
import node from "../../components/assets/teach/node.svg"
import meterialui from "../../components/assets/teach/material-ui-svgrepo-com.svg"
import mysql from "../../components/assets/teach/mysql-svgrepo-com.svg"
import express from "../../components/assets/teach/express.png"
import Tailwind from "../../components/assets/teach/tailwind.png"
import mongodb from "../../components/assets/teach/mongodb-svgrepo-com.svg"
import html from "../../components/assets/teach/html.svg";
import css from "../../components/assets/teach/css.svg";
import Bootstrap from "../../components/assets/teach/bootstrap-svgrepo-com.svg";
import php from "../../components/assets/teach/php.svg";
import Flutter from "../../components/assets/teach/flutter-svgrepo-com.svg";

// src/products/productsData.js
const productsData = [
  {
    id: 1,
    title: "Doctors Appointment Booking Website",
    image: DOC2,
    description: "Easily book doctor appointments online. Simplifies scheduling and enhances patient convenience.",
    overview: "A complete hospital appointment management system built using React.js and Node.js that helps hospitals simplify patient bookings, manage doctors, nurses, pharmacists, departments, medicines, and streamline day-to-day hospital operations.",
    technology_stack: [
      react,
      node,
      meterialui,
      mysql,
     
    ],
    key_features: [
      "Add/Edit/Delete doctors with availability and specializations",
      "Nurse & staff management with schedules",
      "Department creation and doctor assignment",
      "Pharmacist and medicine stock management",
      "Patient profiles with medical history & Online appointment booking with reschedule/cancel",
 
      
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
     DOC2,
     DOC,
     DOC3,
     DOC4,
     DOC5
    ]
  },
  {
    id: 2,
    title: "E-Commerce Store",
    image: Ecommerce,
    description: "A shopping platform with product filters, cart system, and checkout.",
    overview: "Zestocart is a modern full-stack e-commerce web application built using React.js, Node.js, Express.js, and MySQL. It provides users with a seamless shopping experience, supporting features such as product browsing, cart management, wishlist, checkout, secure payments, order history, tracking, and invoice generation.",
    technology_stack: [
      react,
      Tailwind ,
      node,
      express,
      mysql,
   
    ],

     key_features: [
      "User Registration & Login",
      "Product Listings & Search",
      "Add to Cart & Wishlist",
      "Checkout & Payment Integration",
      "Order History & Tracking & Invoice Generation",
    
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
      Ecommerce1,
      Ecommerce2,
      Ecommerce3,
      Ecommerce4
    ]
  },
  {
    id: 3,
    title: "KYC System",
    image: Kyc1,
    description: "A secure and automated system to verify customer identity and ensure compliance with regulatory standards.",
    overview: "A secure and automated system to verify customer identity and ensure compliance with regulatory standards, supporting document uploads, verification statuses, and audit logs.",
    technology_stack: [
      react,
      node,
      express,
      mongodb,

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
     Kyc2,
      Kyc3,
      Kyc4,
      Kyc5
    ]
  },
  {
    id: 4,
    title: "Billing Software",
    image: Billing,
    description: "Smart and efficient billing system to manage invoices, payments, and reports.",
    overview: "Smart and efficient billing system to manage invoices, payments, taxes and reports with multi-currency and customizable invoice templates.",
    technology_stack: [
      html,
      css,
      Bootstrap,
      php,
      mysql
    
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
     Billing,
    ]
  },
  {
    id: 5,
    title: "Car Rental App",
    image: Carrendal,
    description: "A smart car rental solution offering hassle-free booking, flexible options, and doorstep delivery.",
    overview: "A modern car rental management solution for booking, fleet management, flexible pricing, and door-step delivery.",
    technology_stack: [
      Flutter,
      node,
      express,
      mongodb,

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
      Car1,
      Car2,
      Car3,
      Car4,
    ]
  },
  {
    id: 6,
    title: "Gas Booking App",
    image: Gas,
    description: "Easily book and track your gas cylinder anytime, anywhere with just a tap.",
    overview: "A user-friendly app to book and track gas cylinder deliveries with scheduling, tracking, and order history.",
    technology_stack: [
      react,
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
      Gas1,
      Gas2
    ]
  },
   {
    id: 7,
    title: "LMS (Learning Management System)",
    image: LMS,
    description: "This Learning Management System allows students to conveniently enroll in courses and learn online.",
    overview: "An Online Learning Management System (LMS) built with React.js + Tailwind CSS, Node.js (Express), and MySQL (Workbench). Visitors can explore all courses, while logged-in users can enroll by paying online. After enrollment, learners can study via Recording, Live, or Offline sessions with progress tracking.On completion, certificates are auto-generated for download, and Super Admin can manage users/promote Admins with email alerts",
    technology_stack: [
      react,
      node,
      Tailwind,
      mysql,
    ],
    key_features: [
       "Public course browsing without login (UI accessible for all visitors)",
    "User authentication: register/login/logout with secure session handling",
    "Role-based access control (User, Admin, Super Admin)",
    "Course enrollment available only for logged-in users",

    "Course reviews and ratings (only enrolled learners can post)",
"An AI chatbot is available on this site. Users can ask course-related questions, but they can only ask about the courses available on this site",
 
    ],
    benefits: [
        "Keeps course content secure by unlocking only after payment",
    "Supports multiple teaching methods (recording/live/offline) in a single platform",
    "Automates certificates, reducing manual admin work",
    "Improves course administration with a dedicated admin dashboard",
    "Clear role separation (User/Admin/Super Admin) for better control and security",
    "Scalable structure to add more courses, categories, and features later"
    ],
    faq: [
     {
      q: "Can visitors view the courses without logging in?",
      a: "Yes. All users can browse and view course details in the UI, but enrollment and learning access require login."
    },
    {
      q: "When will the course videos/syllabus be unlocked?",
      a: "Only after successful payment confirmation, the enrolled course content will be unlocked for that user."
    },
    {
      q: "What learning modes are supported?",
      a: "Recording Session, Live Session, and Offline Session are available as learning modes based on the course setup."
    },
    {
      q: "How is the certificate generated?",
      a: "After the user completes the course, the system automatically generates a certificate and enables a download option."
    },
    {
      q: "Who can add or manage courses?",
      a: "Admins can add, edit, and delete courses from the admin dashboard."
    },
    {
      q: "Who can make someone an admin?",
      a: "Only the Super Admin can promote a registered user to Admin, and the promoted user will receive an email notification."
    }
  ],
    screenshots: [
 LMS,
 LMS1,
 LMS2,
 LMS3,
 LMS4
    ]
  },
  {
    id: 8,
    title: "Zestaurant – Online Food Ordering & Delivery System",
    image: FOOD2,
    description: "Delicious meals delivered hot and fast to your doorstep.",
    overview: "Zestaurant is a full‑stack online food ordering and restaurant management system built using React.js, Node.js/Express, and MySQL. It allows users to browse restaurants, order food, track delivery, and download invoices. Admins manage menus, orders, offers, and restaurants, while super-admins approve restaurants and oversee platform operations.",
    technology_stack: [
      react,
      node,
      express,
      mysql,
    ],
     key_features: [
      "User registration, login, and secure JWT authentication",
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
    FOOD2,
     FOOD,
     FOOD1,
     FOOD3
    ]
  },
  {
    id: 9,
    title: "Beautician Booking Portal",
    image: beauty8,
  description: "A beauty parlour booking system with service browsing, easy appointments, reminders, and full admin control.",
  overview: "A modern Beauty Parlour Web Application built using React.js, Tailwind CSS, Node.js (Express), and MySQL. The system allows customers to browse all makeup and beauty services category-wise, view pricing, select packages, and book appointments. Automatic reminder emails are sent one day before the appointment, and users receive instant email confirmation after booking. Admin has a powerful dashboard to manage services, packages, bookings, notifications, and customer details.",
    technology_stack: [
      react,
      Tailwind,
      node,
      express,
      mysql,
    
    ],
    key_features: [
       "View all beauty services without login",
    "Category-wise service listing (Makeup, Hairstyle, Mehndi, Nail Art, Packages)",
    "Package booking with price and offer details",
    "Individual service booking (Saree draping / Nail art / Mehendi / Hairstyle etc.)",
    "Admin dashboard to manage services, categories, packages, and pricing",
    "Instant email confirmation for successful booking",
    "Admin notification for every new booking",
   
    ],
    benefits: [
        "Complete automation for a beauty parlour business",
    "Users can book any service instantly without calling",
    "Reduces manual workload with automatic reminders",
    "Admin can manage packages, prices, and bookings easily",
    "Improves customer satisfaction with confirmation & reminder emails",
    "Supports all beauty services category-wise with images & pricing",
    "Easy to expand with more services, packages, and branches"
    ],
    faq: [
       {
      q: "Can users browse the services without login?",
      a: "Yes, anyone can view categories, services, and packages without login. Booking requires login."
    },
    {
      q: "Will users receive booking reminders?",
      a: "Yes. The system automatically sends a reminder email 1 day before the appointment date."
    },
    {
      q: "Can the parlour owner add or edit services?",
      a: "Yes. Admin can add, update, or delete services and packages with price changes anytime."
    },
    {
      q: "Is online payment available?",
      a: "Yes, a payment gateway (dummy or real API) can be integrated for online booking payments."
    },
    {
      q: "What all services can be booked?",
      a: "Users can book Saree Draping, Nail Art, Hairstyle, Mehndi, HD Makeup, Pedicure, Manicure, Bridal Packages, and many more."
    }
    ],
    screenshots: [
      beauty1,
    beauty2,
    beauty3,
    beauty4,
    beauty5,
    beauty6,
    beauty7
    ]
  },
  {
    id: 10,
    title: "Tailoring Mobile App",
    image:Tailoring,
    description: "Your personal tailor in your pocket – stitch, style, and track orders effortlessly.",
    overview: "A tailoring & alterations app to place stitch orders, store measurements, track orders and manage tailors with pickup/delivery options.",
    technology_stack: [
      react,
      php,
      mysql,
     
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
      Tailoring1,
      Tailoring2,
      Tailoring3,
      Tailoring4,
      Tailoring5
    ]
  }
];

export default productsData;

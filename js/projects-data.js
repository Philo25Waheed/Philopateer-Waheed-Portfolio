/**
 * Project Data Store for Philopateer Waheed's Portfolio
 * Contains full details for interactive modals and dynamic project cards.
 */

const projectsData = [
  {
    id: "bible-school-elearning",
    title: "St. Timothy Bible School — Management & E-Learning Platform",
    category: "Full-Stack Web & E-Learning Platform",
    shortDescription: "A comprehensive management and e-learning system designed for a Bible School to organize students, servants, attendance, points, online materials, schedules, and notifications.",
    fullDescription: "St. Timothy Bible School is a full-stack specialized educational management platform engineered to streamline administrative workflows and digital learning. Built with Laravel, PHP, MySQL, and JavaScript, it empowers servants and administrators to manage student attendance, deliver educational content, track progress via an interactive points (Taio) system, broadcast announcements, and coordinate class schedules.",
    image: "img/bibleschool.png",
    technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
    features: [
      "Multi-Role Dashboards (Admin, Servant, Student, Parent)",
      "Role-Based Access Control & Secure Authentication",
      "Automated Attendance Tracking & Absence Alerts",
      "Points / Taio System for Student Rewards",
      "E-Learning Modules & Interactive Q&A System",
      "Class Schedule & Curriculum Management",
      "Real-Time Notifications & Announcements",
      "Detailed Student Progress Tracking & Performance Analytics"
    ],
    github: "https://github.com/Philo25Waheed/St-Timothy-Bible-School",
    demo: null,
    status: "Completed / Production-Ready"
  },
  {
    id: "erp-system",
    title: "Enterprise Resource Planning (ERP) System",
    category: "Full-Stack Enterprise & Web System",
    shortDescription: "A multi-module web ERP application handling business operations, inventory management, transaction histories, and administrative reports.",
    fullDescription: "This Enterprise Resource Planning (ERP) system provides a unified web-based interface to manage essential business operations. Engineered using PHP, Laravel, and MySQL, it integrates core business modules including inventory tracking, transaction logging, administrative reports, robust data validation, automated error handling, and structured database queries for reliable record management.",
    image: "img/ERP-system.png",
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap"],
    features: [
      "Centralized Business Operations & Admin Dashboard",
      "Inventory & Stock Management with Real-Time Balance",
      "Transaction Histories & Financial Audit Logging",
      "Automated Error Handling & Strict Data Validation",
      "Optimized Relational Database Architecture with MySQL",
      "Structured Report Generation & Role-Based Permissions"
    ],
    github: "https://github.com/Philo25Waheed/ERP_System",
    demo: null,
    status: "Active Repository"
  },
  {
    id: "fitzone",
    title: "FitZone — Fitness & Nutrition Management System",
    category: "Full-Stack Health & Fitness Platform",
    shortDescription: "A full-stack health platform allowing users to log customized workout plans, track dietary metrics, and view real-time progress.",
    fullDescription: "FitZone is an engineered full-stack fitness and nutrition platform built with PHP, Laravel, MySQL, JavaScript, and Bootstrap. The application allows users to create and log customized workout routines, track caloric and dietary metrics, and monitor fitness progress in real-time. Built with normalized database tables and optimized complex relational queries to handle user profile data and workout logs efficiently.",
    image: "img/fitzone.png",
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap"],
    features: [
      "Personalized Workout Planning & Exercise Logging",
      "Dietary Metrics, Calorie & Nutrition Progress Tracking",
      "Normalized Relational Database Tables & High-Speed Queries",
      "User Authentication, Profile Management & Secure Sessions",
      "Interactive Progress Charts & Analytics Dashboard",
      "Responsive, Mobile-First User Interface with Bootstrap"
    ],
    github: "https://github.com/Philo25Waheed/fitzone",
    demo: null,
    status: "Active Repository"
  },
  {
    id: "gb-corp-race-game",
    title: "GB-Corp Race Game",
    category: "Game Development & Frontend Engineering",
    shortDescription: "An interactive 2D racing game built from scratch with custom JavaScript physics, collision detection, dynamic controls, and real-time scoring.",
    fullDescription: "A complete front-end racing game designed and developed from scratch, featuring an engaging user interface, dynamic track layout, and smooth interactive gameplay. Powered by custom JavaScript mechanics, the engine handles player movement, responsive controls, bounding-box collision detection, obstacle spawning, live speed/distance telemetry, and state management optimized across desktop and mobile screens.",
    image: "assets/images/project-racegame.svg",
    technologies: ["JavaScript (ES6+)", "HTML5", "CSS3", "Game Physics", "Responsive Design"],
    features: [
      "Custom 60 FPS JavaScript Game Loop & Animation System",
      "Precise Bounding-Box Collision Detection & Physics",
      "Interactive Player Movement & Multi-Key Controls",
      "Real-Time HUD with Speedometer, Distance & High Score",
      "Dynamic Obstacle Generation with Increasing Difficulty",
      "Adaptive Responsive Interface Supporting Touch & Keyboard"
    ],
    github: "https://github.com/Philo25Waheed/GB-Corp_Race_Game",
    demo: null,
    status: "Completed Project"
  },
  {
    id: "pc-builder",
    title: "PC-Builder Web Application",
    category: "Full-Stack Web App & E-Commerce (NTI)",
    shortDescription: "A full-stack PC Builder application developed during the NTI training program for browsing, selecting, and configuring PC hardware components.",
    fullDescription: "Developed as part of the National Telecommunication Institute (NTI) training program, this full-stack web application enables users to browse, select, and configure custom PC components. Features custom MySQL database schemas, robust backend logic for component specifications, category filtering, cart management, and a responsive frontend crafted with Bootstrap.",
    image: "img/pc-builder.png",
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap", "HTML5"],
    features: [
      "Custom PC Component Selector & Real-Time Compatibility Filtering",
      "Relational MySQL Database for Hardware Specifications & Categories",
      "E-Commerce Shopping Cart & Component Configuration Flow",
      "Laravel MVC Architecture & Database Migrations",
      "Secure Server-Side Data Validation & Session Management",
      "Responsive User Interface Styled with Bootstrap"
    ],
    github: "https://github.com/Philo25Waheed/pc-builder",
    demo: null,
    status: "NTI Training Showcase"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = projectsData;
}

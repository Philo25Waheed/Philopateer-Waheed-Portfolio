/**
 * Project Data Store for Philopateer Waheed's Portfolio
 * Contains full details for interactive modals and dynamic project cards.
 */

const projectsData = [
  {
    id: "bible-school-elearning",
    title: "Bible School Management System & E-Learning System",
    category: "Web Application & E-Learning",
    shortDescription: "A comprehensive management and e-learning system designed for a Bible School to organize students, servants, attendance, points, online materials, schedules, and notifications.",
    fullDescription: "The Bible School Management System & E-Learning System is a specialized full-featured platform engineered to streamline administrative workflows and digital learning. Built with a robust PHP & MySQL backend, it empowers servants and administrators to manage student attendance, deliver educational content, track progress via an interactive points (Taio) system, broadcast announcements, and coordinate class schedules.",
    image: "img/bibleschool.png",
    technologies: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
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
    github: "https://github.com/Philo25Waheed/Timothy-Bible-School",
    demo: null,
    status: "Completed / Production-Ready"
  },
  {
    id: "erp-system",
    title: "ERP System",
    category: "Backend & Web System",
    shortDescription: "A web-based ERP project focused on organizing business data, inventory, sales workflows, and management operations.",
    fullDescription: "This Enterprise Resource Planning (ERP) system provides a unified web-based interface to manage essential business operations. Designed to optimize data consistency and administrative efficiency, it integrates core business modules including inventory tracking, transaction logging, sales reports, and user permissions backed by MySQL database management.",
    image: "img/ERP-system.png",
    technologies: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
    features: [
      "Centralized Business Data Dashboard",
      "Inventory & Stock Management",
      "Sales & Transaction Record Logging",
      "Department & Operational Workflow Organization",
      "Relational Database Integration with MySQL",
      "Structured Report Generation"
    ],
    github: "https://github.com/Philo25Waheed/ERP_System",
    demo: null,
    status: "Active Repository"
  },
  {
    id: "fitzone",
    title: "FitZone",
    category: "Health & Fitness",
    shortDescription: "A web application project focused on fitness-related functionality, exercise tracking, and user experience.",
    fullDescription: "FitZone is a web application designed to help users track workout schedules, monitor fitness routines, and maintain healthy habits. Built with clean frontend practices and modular code structure, it features an intuitive user interface tailored for seamless interaction on both desktop and mobile devices.",
    image: "img/fitzone.png",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    features: [
      "Interactive Fitness Routine Catalog",
      "User Progress Tracker Interface",
      "Workout Category Categorization",
      "Responsive & Accessible UI Design",
      "Clean Component Layout"
    ],
    github: "https://github.com/Philo25Waheed/fitzone",
    demo: null,
    status: "Active Repository"
  },
  {
    id: "pc-builder",
    title: "pc-builder",
    category: "Web Application & E-Commerce",
    shortDescription: "A Laravel-based custom PC building and e-commerce web application for hardware customization and online store management.",
    fullDescription: "A full-featured PC builder and e-commerce platform leveraging Laravel's MVC architecture. The system integrates hardware component selection, compatibility checks, shopping cart workflows, database-driven category filtering, and structured request handling to deliver a seamless custom PC building experience.",
    image: "img/pc-builder.png",
    technologies: ["Laravel", "PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
    features: [
      "MVC Architectural Blueprint with Laravel",
      "Custom PC Component Selector & Filtering",
      "Shopping Cart & Checkout Flow",
      "Database Migrations & Eloquent Model Relationships",
      "Clean Blade Layout Components"
    ],
    github: "https://github.com/Philo25Waheed/pc-builder",
    demo: null,
    status: "Active Repository"
  },
  {
    id: "gb-corp-race-game",
    title: "GB Corp Race Game",
    category: "Gamified Corporate Web Platform",
    shortDescription: "An interactive gamified corporate car racing and challenge web application engineered for team competitions, real-time quizzes, and live department leaderboards.",
    fullDescription: "GB Corp Race Game is an end-to-end interactive gamified web platform developed for corporate team engagement and competitions. Built with PHP, MySQL, and modular JavaScript, the platform features a real-time highway racing simulation where company departments advance on a dynamic multi-lane circuit by answering time-sensitive challenges, completing quizzes, and submitting achievements. It includes a high-performance micro-caching engine, anti-cheat mechanisms, an admin control center with bulk Excel data import, and live department podiums with custom liveries.",
    image: "img/gb-race-game.png",
    technologies: ["PHP", "MySQL", "JavaScript ES6+", "HTML5 Canvas", "CSS3 Animations", "Excel Data Import"],
    features: [
      "Dynamic Multi-Lane Highway Racing Engine with Canvas and CSS keyframe animations",
      "Live Department Leaderboards & Podium Rankings with custom car models and liveries",
      "Interactive Quiz & Challenge Engine with instant scoring and anti-cheat validation",
      "High-Performance File & Memory Micro-Caching Architecture (10s TTL) for sub-second responses",
      "Admin Master Dashboard with bulk Excel data import, question management, and approval workflows",
      "Concurrency-Optimized Session Handling (session_write_close) and CSRF Protection",
      "Dual Language Support (Arabic & English) with fully responsive layout"
    ],
    github: "https://github.com/Philo25Waheed/GB-Corp_Race_Game",
    demo: null,
    status: "Completed / Production-Ready"
  },
  {
    id: "deacons-school-system",
    title: "Deacons School Management System",
    category: "Educational & Community Platform",
    shortDescription: "A modern full-stack church school ecosystem with 4 role-based portals, smart camera QR attendance, automated liturgy rosters, and interactive hymns audio library.",
    fullDescription: "The Deacons School Management System is a comprehensive, production-grade educational and community platform engineered with PHP 8 and the Laravel framework. It manages church education, spiritual services, and administrative workflows through 4 distinct role-based portals (Admin, Servant, Student, Parent). The platform features smart camera-based QR code attendance scanning, an intelligent liturgical service distribution engine (Liturgy Roster), an interactive liturgical hymns streaming library with bilingual lyrics, a gamified points-and-rewards store, and WhatsApp notification dispatching.",
    image: "img/deacons-school.png",
    technologies: ["Laravel", "PHP 8", "MySQL", "HTML5 Camera API", "PWA", "JavaScript", "CSS3 Glassmorphism"],
    features: [
      "4 Role-Based Dedicated Portals (Admin Console, Servant Workspace, Student Experience, Parent Portal)",
      "Smart Camera-Based QR Code Attendance Scanner with instantaneous contactless check-in",
      "Bulk Printable QR Identity Badges generation for all students and deacons",
      "Intelligent Liturgical Service Distribution Engine (Liturgy Roster) with schedule export",
      "Comprehensive Assessment Engine supporting 4 question types with automated grading",
      "Interactive Audio Hymns Streaming Library with Coptic & Arabic bilingual lyrics",
      "Gamified Points & Rewards Store for student motivation and spiritual achievement",
      "Parent Tracking Portal and 1-Click WhatsApp notifications for attendance and exam results"
    ],
    github: "https://github.com/Philo25Waheed/Deacons-School-System",
    demo: null,
    status: "Completed / Production-Ready"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = projectsData;
}

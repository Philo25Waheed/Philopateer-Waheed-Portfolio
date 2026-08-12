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
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = projectsData;
}

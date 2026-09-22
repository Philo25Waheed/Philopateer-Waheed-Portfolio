/**
 * PHILOPATEER WAHEED — BILINGUAL PROJECTS DATA STORE
 * Supports both English (en) and Arabic (ar) dynamically for cards and modal popups.
 */

const projectsData = [
  {
    id: "bible-school-elearning",
    title: {
      en: "St. Timothy Bible School — Management & E-Learning Platform",
      ar: "منصة مدرسة القديس تيموثاوس — إدارة التعليم الإلكتروني"
    },
    category: {
      en: "Full-Stack Web & E-Learning Platform",
      ar: "منظومة ويب متكاملة وإدارة التعليم الإلكتروني"
    },
    shortDescription: {
      en: "A comprehensive management and e-learning system designed for a Bible School to organize students, servants, attendance, points (Taio system), online learning materials, schedules, and notifications.",
      ar: "منظومة إدارة تعليمية إلكترونية متكاملة صُممت خصيصاً لمدرسة الكنيسة لتنظيم بيانات الطلاب، الخدام، تسجيل الحضور والغياب، نظام النقاط والمكافآت (تايو)، المقررات الإلكترونية، والجداول."
    },
    fullDescription: {
      en: "St. Timothy Bible School is a specialized full-stack educational management platform engineered to streamline administrative workflows and digital learning. Built with Laravel, PHP, MySQL, and JavaScript, it empowers servants and administrators to manage student attendance, deliver educational content, track progress via an interactive points (Taio) system, broadcast announcements, and coordinate class schedules with rock-solid data integrity.",
      ar: "منصة مدرسة القديس تيموثاوس هي منظومة تعليمية وإدارية متكاملة صُممت لهندسة العمليات الإدارية والتعليم الرقمي بكفاءة عالية. تم بناؤها باستخدام Laravel وPHP وMySQL وJavaScript، لتمكين الخدام والمسؤولين من إدارة حضور وغياب الطلاب، تقديم المناهج التعليمية، متابعة التقدم عبر نظام نقاط تفاعلي (تايو)، وبث الإعلانات والتنبيهات المباشرة مع تكامل محكم للبيانات."
    },
    image: "img/bibleschool.png",
    technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
    features: {
      en: [
        "Multi-Role Dashboards (Admin, Servant, Student, Parent)",
        "Role-Based Access Control & Secure Authentication",
        "Automated Attendance Tracking & Absence Alerts",
        "Points / Taio System for Student Rewards & Motivation",
        "E-Learning Modules & Interactive Q&A System",
        "Class Schedule & Curriculum Management",
        "Real-Time Notifications & Announcements",
        "Detailed Student Progress Tracking & Performance Analytics"
      ],
      ar: [
        "لوحات تحكم مخصصة لكل دور (المسؤول، الخادم، الطالب، ولي الأمر)",
        "نظام تحكم بالصلاحيات مبني على الأدوار (RBAC) ومصادقة مشفرة",
        "تتبع آلي للحضور وإرسال تنبيهات فورية بالغياب",
        "نظام النقاط والمكافآت (تايو) لتشجيع وتحفيز الطلاب",
        "وحدات تعليم إلكتروني ونظام تفاعلي للأسئلة والأجوبة",
        "إدارة الجداول الأسبوعية وتوزيع المناهج الدراسية",
        "بث الإشعارات والتنبيهات العامة لكافة المستخدمين في الوقت الفعلي",
        "تقارير تحليلية ومتابعة بيانية لتقدم الطلاب الدراسي"
      ]
    },
    github: "https://github.com/Philo25Waheed/St-Timothy-Bible-School",
    demo: null,
    status: {
      en: "Production-Ready / Completed",
      ar: "جاهز ومكتمل للاستخدام الفعلي"
    }
  },
  {
    id: "erp-system",
    title: {
      en: "Enterprise Resource Planning (ERP) System",
      ar: "منظومة تخطيط الموارد المؤسسية (ERP)"
    },
    category: {
      en: "Full-Stack Enterprise & Web System",
      ar: "منظومة مؤسسية متكاملة لإدارة الأعمال"
    },
    shortDescription: {
      en: "A multi-module web ERP application handling business operations, inventory management, transaction histories, administrative reports, automated error handling, and structured data validation.",
      ar: "تطبيق ويب متكامل لإدارة موارد المؤسسات (ERP) يغطي العمليات التجارية، إدارة المخزون، سجلات المعاملات المالية، التقارير الإدارية، والتحقق الصارم من صحة البيانات."
    },
    fullDescription: {
      en: "This Enterprise Resource Planning (ERP) system provides a unified web-based interface to manage essential business operations. Engineered using PHP, Laravel, and MySQL, it integrates core business modules including inventory tracking, transaction logging, administrative reports, robust data validation, automated error handling, and structured database queries for reliable record management.",
      ar: "توفر منظومة تخطيط الموارد المؤسسية (ERP) واجهة موحدة لإدارة العمليات التشغيلية والمالية بدقة وموثوقية. تم تطويرها باستخدام PHP وLaravel وMySQL، وتتضمن وحدات متكاملة لإدارة ومراقبة المخزون، تسجيل وتدقيق المعاملات المالية، إصدار التقارير الإدارية، ومعالجة الأخطاء بصورة آلية مع بناء استعلامات قواعد بيانات علائقية سريعة وموثوقة."
    },
    image: "img/ERP-system.png",
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap"],
    features: {
      en: [
        "Centralized Business Operations & Admin Dashboard",
        "Inventory & Stock Management with Real-Time Balance",
        "Transaction Histories & Financial Audit Logging",
        "Automated Error Handling & Strict Data Validation",
        "Optimized Relational Database Architecture with MySQL",
        "Structured Report Generation & Role-Based Permissions"
      ],
      ar: [
        "لوحة تحكم إدارية مركزية لمتابعة كافة العمليات التشغيلية",
        "إدارة المخزون ومراقبة الأرصدة والمشتريات في الوقت الفعلي",
        "سجلات تدقيق مالي شاملة لكافة العمليات والمعاملات",
        "معالجة آلية للأخطاء وتحقق صارم من مدخلات النظام",
        "معمارية قواعد بيانات علائقية متقدمة ومحسنة مع MySQL",
        "توليد تقارير مالية وإدارية مهيكلة ونظام صلاحيات متعدد المستويات"
      ]
    },
    github: "https://github.com/Philo25Waheed/ERP_System",
    demo: null,
    status: {
      en: "Active Engineering Repository",
      ar: "مستودع برمجي نشط"
    }
  },
  {
    id: "fitzone",
    title: {
      en: "FitZone — Fitness & Nutrition Management System",
      ar: "منصة FitZone — إدارة اللياقة والتغذية الصحية"
    },
    category: {
      en: "Full-Stack Health & Fitness Platform",
      ar: "منصة ويب متكاملة للصحة واللياقة البدنية"
    },
    shortDescription: {
      en: "A full-stack health platform allowing users to log customized workout plans, track dietary metrics, and view real-time progress with normalized database tables and optimized relational queries.",
      ar: "منصة صحية متكاملة تتيح للمستخدمين تسجيل خطط التمارين الرياضية، تتبع السعرات والأنظمة الغذائية، ومراقبة التقدم البدني بجداول علائقية معيارية واستعلامات سريعة."
    },
    fullDescription: {
      en: "FitZone is an engineered full-stack fitness and nutrition platform built with PHP, Laravel, MySQL, JavaScript, and Bootstrap. The application allows users to create and log customized workout routines, track caloric and dietary metrics, and monitor fitness progress in real-time. Built with normalized database tables and optimized complex relational queries to handle user profile data and workout logs efficiently.",
      ar: "منصة FitZone هي تطبيق ويب متكامل لإدارة اللياقة البدنية والأنظمة الغذائية تم تطويره باستخدام PHP وLaravel وMySQL وJavaScript وBootstrap. يمكن التطبيق المتدربين من تخطيط التمارين، وحساب القيم الغذائية والسعرات، وتتبع التطور البدني عبر الزمن. يتميز التطبيق بجداول قواعد بيانات منظمة وفق معايير التطبيع (Normalization) لتوفير أعلى سرعة في معالجة السجلات."
    },
    image: "img/fitzone.png",
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap"],
    features: {
      en: [
        "Personalized Workout Planning & Exercise Logging",
        "Dietary Metrics, Calorie & Nutrition Progress Tracking",
        "Normalized Relational Database Tables & High-Speed Queries",
        "User Authentication, Profile Management & Secure Sessions",
        "Interactive Progress Charts & Analytics Dashboard",
        "Responsive, Mobile-First User Interface with Bootstrap"
      ],
      ar: [
        "تخطيط التمارين الرياضية وتسجيل المجموعات والتكرارات",
        "تتبع دقيق للسعرات الحرارية والقيم الغذائية اليومية",
        "جداول بيانات معيارية واستعلامات علائقية فائقة السرعة",
        "نظام توثيق وحماية وإدارة للملف الشخصي وجلسات المستخدم",
        "مخططات ورسوم بيانية تفاعلية لتحليل الأداء والتطور",
        "تصميم واجهات متجاوب كلياً مع الهواتف الذكية والأجهزة اللوحية"
      ]
    },
    github: "https://github.com/Philo25Waheed/fitzone",
    demo: null,
    status: {
      en: "Active Engineering Repository",
      ar: "مستودع برمجي نشط"
    }
  },
  {
    id: "gb-corp-race-game",
    title: {
      en: "GB-Corp Race Game",
      ar: "لعبة سباق السيارات GB-Corp"
    },
    category: {
      en: "Game Development & Frontend Engineering",
      ar: "تطوير الألعاب وهندسة الواجهات التفاعلية"
    },
    shortDescription: {
      en: "An interactive 2D racing game designed from scratch with custom JavaScript physics, collision detection, player movement, controls, dynamic scoring, and responsive gameplay interface.",
      ar: "لعبة سباق ثنائية الأبعاد مبنية بالكامل من الصفر بمحاكاة فيزيائية مخصصة عبر JavaScript، ونظام كشف التصادم، والتحكم السلس في القيادة والنتائج الحية."
    },
    fullDescription: {
      en: "A complete front-end racing game designed and developed from scratch, featuring an engaging user interface, dynamic track layout, and smooth interactive gameplay. Powered by custom JavaScript mechanics, the engine handles player movement, responsive controls, bounding-box collision detection, obstacle spawning, live speed/distance telemetry, and state management optimized across desktop and mobile screens.",
      ar: "لعبة سباق تفاعلية كاملة تم تصميمها وتطويرها من الصفر دون محركات خارجية، معتمدة على كود JavaScript نقي لإدارة حلقة اللعبة (Game Loop) واكتشاف التصادم الدقيق وتوليد الحواجز وعرض مؤشرات السرعة والمسافة في الوقت الفعلي مع توافق متميز عبر مختلف أحجام الشاشات."
    },
    image: "assets/images/project-racegame.svg",
    technologies: ["JavaScript (ES6+)", "HTML5", "CSS3", "Game Physics", "Responsive Design"],
    features: {
      en: [
        "Custom 60 FPS JavaScript Game Loop & Animation System",
        "Precise Bounding-Box Collision Detection & Physics",
        "Interactive Player Movement & Multi-Key Controls",
        "Real-Time HUD with Speedometer, Distance & High Score",
        "Dynamic Obstacle Generation with Increasing Difficulty",
        "Adaptive Responsive Interface Supporting Touch & Keyboard"
      ],
      ar: [
        "حلقة ألعاب برمجية تعمل بمعدل 60 إطاراً في الثانية وسلاسة بصرية",
        "حسابات فيزيائية دقيقة واكتشاف تصادم الصناديق (Bounding Box)",
        "تحكم ديناميكي متعدد الأزرار بحركة المركبة",
        "شاشة معلومات حية (HUD) لعداد السرعة والمسافة والنتائج القياسية",
        "توليد مستمر وعشوائي للحواجز مع تصاعد تدريجي في مستوى التحدي",
        "واجهة متكيفة تدعم التحكم عبر لوحة المفاتيح واللمس على الهواتف"
      ]
    },
    github: "https://github.com/Philo25Waheed/GB-Corp_Race_Game",
    demo: null,
    status: {
      en: "Completed Project",
      ar: "مشروع برمجي مكتمل"
    }
  },
  {
    id: "pc-builder",
    title: {
      en: "PC-Builder Web Application (NTI Capstone)",
      ar: "تطبيق تجميع الحواسيب PC-Builder (مشروع تخرج NTI)"
    },
    category: {
      en: "Full-Stack Web App & E-Commerce",
      ar: "تطبيق ويب متكامل وتجارة إلكترونية"
    },
    shortDescription: {
      en: "A full-stack PC building and e-commerce web application engineered during the NTI training program, enabling users to browse, select, and configure hardware components with database-driven compatibility checks.",
      ar: "تطبيق ويب متكامل لتجميع عتاد الحواسيب والتجارة الإلكترونية تم تطويره ضمن تدريب معهد NTI، يتيح للمستخدمين اختيار وتوافق قطع الهاردوير عبر قواعد البيانات."
    },
    fullDescription: {
      en: "Developed as part of the National Telecommunication Institute (NTI) training program, this full-stack web application enables users to browse, select, and configure custom PC components. Features custom MySQL database schemas, robust backend logic for component specifications, category filtering, cart management, and a responsive frontend crafted with Bootstrap.",
      ar: "تم تطوير هذا التطبيق المتكامل كمشروع تخرج ضمن البرنامج التدريبي المكثف للمعهد القومي للاتصالات (NTI). يمكن النظام المستخدمين من استعراض وتهيئة حواسيبهم الخاصة مع فحص توافق المعالجات واللوحات الأم ومصادر الطاقة، مع سلة شراء متكاملة ونظام إدارة جلسات آمن مبني بمعمارية Laravel MVC."
    },
    image: "img/pc-builder.png",
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap", "HTML5"],
    features: {
      en: [
        "Custom PC Component Selector & Real-Time Compatibility Filtering",
        "Relational MySQL Database for Hardware Specifications & Categories",
        "E-Commerce Shopping Cart & Component Configuration Flow",
        "Laravel MVC Architecture & Database Migrations",
        "Secure Server-Side Data Validation & Session Management",
        "Responsive User Interface Styled with Bootstrap"
      ],
      ar: [
        "منظومة اختيار مكونات العتاد وفحص التوافق الفني في الوقت الفعلي",
        "قاعدة بيانات MySQL لمواصفات وتصنيفات قطع الهاردوير وأسعارها",
        "سلة تسوق إلكترونية ومسار سلس لتهيئة الطلب والمواصفات",
        "تطبيق معمارية Laravel MVC وترحيلات قواعد البيانات المنظمة",
        "تحقق صارم من البيانات على الخادم وتأمين جلسات المستخدمين",
        "تصميم واجهات احترافي وسريع التجاوب مدعوم بـ Bootstrap"
      ]
    },
    github: "https://github.com/Philo25Waheed/pc-builder",
    demo: null,
    status: {
      en: "NTI Training Showcase",
      ar: "مشروع تخرج معتمد ومكتمل"
    }
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = projectsData;
}

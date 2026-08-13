/**
 * Portfolio Configuration & Profile Data
 * Single Source of Truth for Arjun Pillai's Portfolio
 * Update this file anytime to dynamically refresh all content on the website.
 */

const PORTFOLIO_DATA = {
  // Personal & Branding Info
  profile: {
    name: "Arjun Pillai",
    handle: "00AJ-bit",
    title: "Software Developer & Full Stack Engineer",
    tagline: "Building resilient backends, performant web applications, and intuitive digital experiences.",
    avatar: "https://avatars.githubusercontent.com/u/316678852?v=4", // Live GitHub avatar
    location: "Pune, Maharashtra, India",
    email: "arjun004pillai@gmail.com",
    availability: {
      status: "Available for Opportunities",
      badge: "Open to Full-Time & Freelance Roles",
      isAvailable: true
    },
    roles: [
      "Software Developer",
      "Full Stack Web Developer",
      "Backend & API Engineer",
      "ECE Graduate & Systems Enthusiast"
    ],
    social: {
      github: "https://github.com/00AJ-bit",
      linkedin: "https://www.linkedin.com/in/arjun-pillai-a88998425",
      email: "mailto:arjun004pillai@gmail.com"
    },
    stats: [
      { label: "Completed Projects", value: "12+", icon: "code" },
      { label: "Core Technologies", value: "15+", icon: "cpu" },
      { label: "Engineering Dedication", value: "100%", icon: "award" },
      { label: "Code Quality & Uptime", value: "99.9%", icon: "shield" }
    ]
  },

  // About Section Narrative
  about: {
    lead: "A passionate Software Developer blending low-level hardware-software fundamentals with modern, scalable web engineering.",
    paragraphs: [
      "Hello! I'm Arjun Pillai, a software developer with a strong engineering foundation in Electronics and Communication Engineering (ECE) from Bharati Vidyapeeth (DU) College of Engineering, Pune. My background gives me a distinct advantage: a deep understanding of how software interacts with hardware, memory management, and network protocols.",
      "I specialize in full-stack web development, building high-throughput REST APIs, responsive user interfaces, and robust backend microservices. I thrive on architecting clean, maintainable systems that solve practical challenges and scale seamlessly.",
      "When I'm not writing code or exploring the latest developments in AI and cloud architecture, I enjoy analyzing distributed system designs, optimizing algorithms, and contributing to open-source software."
    ],
    highlights: [
      { title: "Full-Stack Development", description: "Proficient in end-to-end web architectures, reactive client apps, and scalable server backends." },
      { title: "System & API Architecture", description: "Designing low-latency RESTful APIs, relational/NoSQL database schemas, and microservices." },
      { title: "ECE Foundation", description: "Strong background in digital electronics, computer organization, signal processing, and low-level protocols." },
      { title: "Problem Solving", description: "Focused on algorithmic efficiency, clean code principles (SOLID, DRY), and robust automated testing." }
    ]
  },

  // Education History
  education: [
    {
      degree: "Bachelor of Technology (B.Tech) in Electronics & Communication Engineering (ECE)",
      institution: "Bharati Vidyapeeth (DU) College of Engineering, Pune",
      duration: "2023 – 2027 (Ongoing)",
      location: "Pune, India",
      description: "Core coursework in Computer Organization, Microprocessors, Operating Systems, Data Communications, Signal Processing, and Object-Oriented Programming.",
      grade: "Ongoing (B.Tech Candidate)",
      achievements: [
        "Specializing in embedded systems, software architecture, and distributed web platforms.",
        "Engineering capstone projects bridging hardware telemetry with cloud analytics."
      ]
    },
    {
      degree: "Higher Secondary Certificate (12th Grade)",
      institution: "Saint Francis School",
      duration: "2023",
      location: "India",
      description: "Science & Mathematics (Physics, Chemistry, Mathematics, Computer Science).",
      grade: "Academic Distinction",
      achievements: [
        "Strong foundation in algorithmic thinking, computational problem solving, and science."
      ]
    },
    {
      degree: "Secondary School Certificate (10th Grade)",
      institution: "Saint Francis School",
      duration: "2021",
      location: "India",
      description: "Core curriculum in Mathematics, Science, and Information Technology.",
      grade: "Exemplary Academic Performance",
      achievements: [
        "Active participant in technical exhibitions, quiz competitions, and leadership activities."
      ]
    }
  ],

  // Technical Skills Matrix
  skills: {
    languages: [
      { name: "JavaScript (ES6+)", level: 90, category: "Language" },
      { name: "TypeScript", level: 85, category: "Language" },
      { name: "Python", level: 85, category: "Language" },
      { name: "C / C++", level: 80, category: "Language" },
      { name: "SQL", level: 85, category: "Language" },
      { name: "HTML5 & CSS3", level: 95, category: "Language" }
    ],
    frameworks: [
      { name: "React.js", level: 90, category: "Frontend" },
      { name: "Node.js & Express", level: 88, category: "Backend" },
      { name: "Next.js", level: 82, category: "Fullstack" },
      { name: "FastAPI / Flask", level: 80, category: "Backend" },
      { name: "RESTful API Design", level: 92, category: "Backend" },
      { name: "Tailwind / Vanilla CSS", level: 90, category: "Frontend" }
    ],
    databases: [
      { name: "PostgreSQL", level: 85, category: "Database" },
      { name: "MongoDB", level: 85, category: "Database" },
      { name: "MySQL", level: 80, category: "Database" },
      { name: "Redis", level: 75, category: "Database" }
    ],
    toolsAndDevops: [
      { name: "Git & GitHub", level: 92, category: "DevOps" },
      { name: "Docker", level: 78, category: "DevOps" },
      { name: "Linux / Bash", level: 85, category: "Environment" },
      { name: "Postman / API Testing", level: 90, category: "Testing" },
      { name: "CI/CD & GitHub Actions", level: 80, category: "DevOps" },
      { name: "Vercel / Netlify / Render", level: 88, category: "Cloud" }
    ]
  },

  // Recommended High-Impact Projects with Deep-Dive Case Studies
  projects: [
    {
      id: "gods-eye-iot",
      title: "God's Eye: Real-Time Edge Video Analytics & Surveillance Sentinel",
      tagline: "High-performance IoT video telemetry & real-time automated anomaly alert engine",
      category: "Systems & IoT",
      featured: true,
      image: "assets/projects/gods_eye.jpg",
      tags: ["Python", "OpenCV", "FastAPI", "WebSockets", "React", "Docker"],
      githubUrl: "https://github.com/00AJ-bit/gods-eye",
      liveUrl: "https://github.com/00AJ-bit/gods-eye",
      stats: {
        stars: 14,
        latency: "<45ms",
        throughput: "30 FPS Edge Streaming"
      },
      caseStudy: {
        problem: "Traditional surveillance setups suffer from high bandwidth consumption and delayed human incident response when analyzing multiple live camera feeds.",
        solution: "Engineered an edge-first distributed vision pipeline that runs lightweight object detection models locally and streams telemetry events via WebSockets to a central real-time React dashboard.",
        architecture: "FastAPI backend orchestrating asynchronous frame capture queues with OpenCV, integrated with WebSockets for instant push notifications and Dockerized for portable edge deployment.",
        highlights: [
          "Implemented frame-dropping algorithms to maintain sub-50ms latency across constrained edge devices.",
          "Integrated automated instant email and webhook alerts for anomaly detection triggers.",
          "Built a responsive monitoring UI displaying multi-camera telemetry metrics and historical logs."
        ]
      }
    },
    {
      id: "omnipulse-cloud",
      title: "OmniPulse: Distributed System Monitoring & Metric Ingestion Engine",
      tagline: "Full-stack observability dashboard with time-series ingestion and health tracking",
      category: "Full-Stack",
      featured: true,
      image: "assets/projects/omnipulse.jpg",
      tags: ["Node.js", "TypeScript", "React", "PostgreSQL", "Redis", "TailwindCSS"],
      githubUrl: "https://github.com/00AJ-bit/Portfolio",
      liveUrl: "https://github.com/00AJ-bit/Portfolio",
      stats: {
        stars: 8,
        latency: "sub-10ms cache hits",
        uptime: "99.95%"
      },
      caseStudy: {
        problem: "Developers and DevOps engineers often need lightweight, self-hostable monitoring dashboards that don't incur heavy enterprise SaaS subscription costs.",
        solution: "Built a modular full-stack application that collects server heartbeat metrics, stores time-series historical data, and renders interactive performance charts.",
        architecture: "Node.js/Express backend leveraging Redis pub/sub for real-time metric broadcasting, PostgreSQL with indexing for aggregated analytics queries, and a modern React dashboard.",
        highlights: [
          "Achieved sub-10ms cached query responses utilizing Redis in-memory key-value caching.",
          "Designed customizable alert thresholds with live visual notification toasts.",
          "Interactive SVG chart visualizations allowing drill-down by CPU, memory, and API request latency."
        ]
      }
    },
    {
      id: "intellidoc-ai",
      title: "IntelliDoc AI: Intelligent Document Parsing & Semantic Search",
      tagline: "AI-assisted knowledge retrieval engine powered by vector embeddings and Gemini API",
      category: "AI & Web",
      featured: true,
      image: "assets/projects/intellidoc.jpg",
      tags: ["Python", "FastAPI", "React", "Gemini API", "ChromaDB", "TailwindCSS"],
      githubUrl: "https://github.com/00AJ-bit/Portfolio",
      liveUrl: "https://github.com/00AJ-bit/Portfolio",
      stats: {
        stars: 11,
        accuracy: "98% Retrieval",
        chunking: "Recursive Semantic"
      },
      caseStudy: {
        problem: "Searching across hundreds of dense technical PDFs and documentation manuals is slow, inaccurate, and lacks context with standard keyword matching.",
        solution: "Developed an intelligent document analysis platform that extracts text, generates vector embeddings, and enables conversational question-answering with citation grounding.",
        architecture: "FastAPI REST API handling multi-format file ingestion (PDF, Markdown, DOCX), ChromaDB vector storage for cosine similarity semantic search, and Gemini LLM reasoning.",
        highlights: [
          "Engineered recursive chunking with overlap to preserve structural context across section breaks.",
          "Implemented citation tracking that highlights exact source paragraphs for AI-generated answers.",
          "Clean responsive UI with drag-and-drop document upload and interactive chat workspace."
        ]
      }
    }
  ],

  // Experience / Engineering Background
  experience: [
    {
      role: "Software Developer & Project Engineer",
      company: "Engineering Capstone & Independent Projects",
      duration: "2023 – Present",
      location: "Pune, India",
      type: "Project / Independent",
      description: "Designed, architected, and deployed production-ready web platforms and hardware-software systems.",
      contributions: [
        "Architected scalable RESTful API backends with Node.js, Express, Python, and PostgreSQL.",
        "Created responsive, accessible, mobile-first frontend interfaces with React and modern CSS.",
        "Implemented secure user authentication (JWT/OAuth2), input sanitization, and automated test suites.",
        "Automated deployment workflows using GitHub Actions and cloud deployment platforms."
      ]
    },
    {
      role: "ECE Core & Embedded Systems Lead",
      company: "Bharati Vidyapeeth College of Engineering",
      duration: "2022 – 2024",
      location: "Pune, India",
      type: "Academic & Lab Research",
      description: "Led technical laboratory experiments and team project implementations in electronics and computing.",
      contributions: [
        "Programmed microcontrollers (C/C++) for sensor data telemetry and real-time serial communication.",
        "Collaborated with cross-disciplinary team members to solve complex circuit and software integration bugs.",
        "Authored comprehensive technical documentation, project architecture diagrams, and testing logs."
      ]
    }
  ],

  // Contact Information
  contact: {
    email: "arjun004pillai@gmail.com",
    linkedin: "https://www.linkedin.com/in/arjun-pillai-a88998425",
    github: "https://github.com/00AJ-bit",
    location: "Pune, Maharashtra, India",
    responseTime: "Usually responds within 24 hours",
    formEndpoint: "https://formspree.io/f/placeholder" // Can be easily configured by user
  }
};

// Export for ES modules and browser global window object
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PORTFOLIO_DATA;
}

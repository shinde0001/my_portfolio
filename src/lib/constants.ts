import {
  Bot,
  Cpu,
  Eye,
  Wrench,
  GitBranch,
  Gauge,
  Monitor,
  type LucideIcon,
} from "lucide-react";

/* ───── Personal Info ───── */
export const SITE_CONFIG = {
  name: "Parth Shinde",
  title: "Robotics & Automation Engineer",
  tagline: "Building intelligent autonomous systems with AI, ROS 2, and computer vision.",
  email: "parthshinde0001@gmail.com",
  phone: "+91 9035532758",
  location: "Karnataka, India",
  linkedin: "https://www.linkedin.com/in/parth-shinde-5b5946203",
  github: "https://github.com/shinde0001",
  resumeUrl: "/Parth_Shinde_Resume.pdf",
} as const;

/* ───── Navigation ───── */
export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
] as const;

/* ───── About / Profile ───── */
export const ABOUT_TEXT = [
  "Robotics and Automation Engineer specializing in building intelligent autonomous systems — from AGVs navigating warehouse floors to humanoid robots learning to walk. I bring together ROS 2, SLAM, AI-driven perception, and real-time control to solve real-world mobility challenges.",
  "I deployed production AGV fleets integrated with Warehouse Management Systems, optimizing goods movement and reducing human intervention across live industrial environments. My work spans the full stack: sensor fusion with LiDAR and cameras, path planning, sim-to-real transfer pipelines.",
  "Beyond industry, I build open-source projects that push boundaries — training humanoid robots with reinforcement learning in MuJoCo, engineering AI-powered stock intelligence systems, and developing RAG-based chatbots, and swarm drone coordination. I'm driven by a simple belief: robots should work alongside humans, not replace them.",
] as const;

/* ───── Skills ───── */
export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: string[];
  colorClass: string;
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming",
    icon: Cpu,
    skills: ["C++", "Python", "C", "Data Structures & Algorithms", "Multithreading"],
    colorClass: "bg-blue-500/10 text-blue-500",
  },
  {
    title: "Robotics",
    icon: Bot,
    skills: ["ROS 2", "Robot Kinematics & Dynamics", "Motion Planning", "Path Planning", "SLAM", "Localization", "Sensor Fusion", "Navigation", "Manipulation"],
    colorClass: "bg-cyan-500/10 text-cyan-500",
  },
  {
    title: "Control Systems",
    icon: Gauge,
    skills: ["PID Control", "State Estimation", "Trajectory Optimization", "Model Predictive Control (MPC)", "Real-Time Control"],
    colorClass: "bg-amber-500/10 text-amber-500",
  },
  {
    title: "AI & Perception",
    icon: Eye,
    skills: ["Computer Vision", "OpenCV", "3D Perception", "Object Detection", "Deep Learning", "PyTorch", "Machine Learning"],
    colorClass: "bg-purple-500/10 text-purple-500",
  },
  {
    title: "Embedded & Hardware",
    icon: Wrench,
    skills: ["Embedded C/C++", "STM32", "Microcontrollers", "Motor Control", "CAN", "UART", "SPI", "I²C", "Ethernet", "IMU", "LiDAR", "RGB/Depth Cameras", "Encoders"],
    colorClass: "bg-emerald-500/10 text-emerald-500",
  },
  {
    title: "Simulation & Deployment",
    icon: Monitor,
    skills: ["Gazebo", "MuJoCo", "MATLAB/Simulink", "NVIDIA Jetson", "CUDA"],
    colorClass: "bg-rose-500/10 text-rose-500",
  },
  {
    title: "Development Tools",
    icon: GitBranch,
    skills: ["Linux", "Git", "GitHub", "Docker", "CMake", "CI/CD"],
    colorClass: "bg-teal-500/10 text-teal-500",
  },
];

/* ───── Experience ───── */
export interface Experience {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    role: "Robotics Engineer",
    company: "Savira Systek, pune",
    period: "Aug 2025 – Jun 2026",
    bullets: [
      "Specialized in AGV systems with a focus on SLAM for autonomous navigation and mapping.",
      "Integrated AGVs with Warehouse Management Systems (WMS), optimizing goods movement and reducing human intervention.",
      "Led site preparation for AGV operations, ensuring proper pathways, charging stations, and operational zones.",
      "Used RoboShopPro for AGV path testing and optimization before deployment.",
      "Conducted on-site testing, troubleshooting, and calibration of sensors (LiDAR, cameras) for precise navigation.",
      "Performed AGV path optimization using RoboShopPro and RDS simulation tools, improving operational efficiency by 20%.",
    ],
  },
  {
    role: "Intern",
    company: "GTTC, Belagavi",
    period: "Jul – Aug 2023",
    bullets: [
      "Programmed FANUC ROBOT M-10iD/12, improving task programming efficiency by 25%.",
      "Collaborated with engineering teams on automation workflows, troubleshooting real-time control issues and enhancing safety protocols.",
    ],
  },
];

/* ───── Projects ───── */
export interface Project {
  title: string;
  description: string;
  highlights?: string[]; // 3-4 bullet points of key achievements
  impact?: string; // Quantitative impact
  previewImage?: string; // Path to screenshot in /public
  previewVideo?: string; // Path to video in /public for inline embed
  tech: string[];
  github?: string;
  video?: string; // External link
  video2?: string; // External link
}

export const PROJECTS: Project[] = [
  {
    title: "Humanoid-Robot-Training",
    description:
      "Developed a professional-grade, deterministically engineered software stack to control a 19-DOF bipedal humanoid robot. Features a Pure Python Hardware Abstraction Layer (HAL) built around MuJoCo for seamless sim-to-real transfer.",
    highlights: [
      "Custom Pure Python HAL around MuJoCo",
      "Seamless sim-to-real transfer pipeline",
      "Real-time 19-DOF bipedal control",
    ],
    previewImage: "/projects/humanoid.png",
    tech: ["Python", "MuJoCo", "FastAPI", "OpenCV"],
    github: "https://github.com/shinde0001/Humanoid-Robot-Training",
  },
  {
    title: "AI Chatbot using RAG",
    description:
      "Built an AI chatbot capable of retrieving domain-specific information using Retrieval-Augmented Generation with LLM-based responses and document retrieval.",
    highlights: [
      "Domain-specific information retrieval",
      "RAG pipeline integration",
      "Vector database for semantic search",
    ],
    previewImage: "/projects/chatbot.png",
    tech: ["Python", "LangChain", "Vector Database"],
    github: "https://github.com/shinde0001/Parth.AI-RAG-System",
  },

  {
    title: "Drone Pipeline & Multi-Agent Mission Generation",
    description:
      "Developed a multi-drone mission planning system for autonomous task execution with swarm coordination strategies for synchronized drone operations.",
    highlights: [
      "LLM-powered natural language mission generation",
      "Swarm coordination via PX4/MAVSDK",
      "Autonomous takeoff-to-landing pipeline",
    ],
    tech: ["Python", "ROS 2", "PX4", "MAVSDK", "LLM APIs", "Llama"],
    github: "https://github.com/shinde0001/Drone-Mission-Pipeline",
    video: "https://drive.google.com/file/d/1RmZlvP2GteiClFOZbtAo6owTs2M_YEa2/view",
    video2: "https://drive.google.com/file/d/1dkg8GLsTuL-XZLLjxr4Lvra4Qp_8j5S1/view",
  },
  {
    title: "Autonomous Vision-Based Drone Follower",
    description:
      "Developed an autonomous drone capable of following a target using computer vision with integrated SLAM for real-time localization and autonomous navigation.",
    highlights: [
      "Integrated SLAM for real-time localization",
      "Autonomous navigation and target following",
      "YOLOv8-based computer vision tracking",
    ],
    tech: ["OpenCV", "Python", "ROS 2", "PX4", "YOLOv8"],
    github: "https://github.com/shinde0001/vision-drone-for-object-detect-and-follow-SLAM-Navigation-",
    video: "https://drive.google.com/file/d/1nrlSeXwTdMn7kNZ85Q1zW7FpX3Wxdg_t/view",
  },

  {
    title: "📈 AI Stock Signal Intelligence System — Indian Markets (NSE)",
    description:
      "Developed a local-first AI stock prediction and intelligence system for Indian markets. Features include an Investment Advisor, Portfolio Simulator, and real-time market prediction architecture.",
    highlights: [
      "Local-first AI prediction architecture",
      "Real-time NSE market intelligence",
      "Portfolio Simulator & Investment Advisor",
    ],
    previewImage: "/projects/stock-ai.png",
    tech: ["Python", "Machine Learning", "Streamlit", "Data Analysis"],
    github: "https://github.com/shinde0001/AI-Stock-Signal-Intelligence-Machine-learning-model",
  },
  {
    title: "AI-Powered Website Security",
    description:
      "Engineered an enterprise-grade reconnaissance engine and security dashboard. Features deep entity investigation, OSINT capabilities, and visual knowledge graphs for digital footprint assessment.",
    highlights: [
      "Enterprise-grade reconnaissance engine",
      "Automated OSINT capabilities",
      "Visual knowledge graphs for threat assessment",
    ],
    previewImage: "/projects/security.png",
    tech: ["Python", "Cybersecurity", "OSINT", "AI"],
    github: "https://github.com/shinde0001/AI-Powered-Website-Security",
  },
  {
    title: "Detection Quality Adapter (DQA)",
    description:
      "Engineered a high-performance, real-time post-processing middleware pipeline to sanitize and refine raw object detection results. Applies geometric, association, and temporal filtering to ensure stable tracking.",
    highlights: [
      "Real-time post-processing middleware",
      "Geometric, association, and temporal filtering",
      "Ensures highly stable tracking under dynamic conditions",
    ],
    tech: ["Python", "Computer Vision", "Real-Time Processing"],
    github: "https://github.com/shinde0001/Detection-Quality-Adapter-DQA-",
  },
  {
    title: "Slotting Machine with Robotic Arm controlled by Raspberry Pi",
    description:
      "Designed and developed a robotic arm-based slotting machine controlled by Raspberry Pi, automating pick-and-place operations using embedded programming.",
    highlights: [
      "Custom robotic arm design",
      "Raspberry Pi embedded control",
      "Automated pick-and-place operations",
    ],
    tech: ["Raspberry Pi", "Python", "Embedded Systems"],
  },
];

/* ───── Education ───── */
export interface Education {
  institution: string;
  degree: string;
  period: string;
  grade?: string;
}

export const EDUCATION: Education[] = [
  {
    institution: "Visvesvaraya Technological University",
    degree: "Bachelor of Technology in Robotics and Automation",
    period: "2021 – 2024",
    grade: "7.3 / 10 CGPA",
  },
  {
    institution: "Motichand Lengade Bhartesh Polytechnic",
    degree: "Diploma in Mechatronics",
    period: "2017 – 2020",
    grade: "72%",
  },
];

/* ───── Languages Known ───── */
export const LANGUAGES = ["English", "Hindi", "Marathi", "Kannada"] as const;

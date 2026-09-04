import {
  Bot,
  Cpu,
  Eye,
  Brain,
  Wrench,
  PenTool,
  GitBranch,
  Globe,
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
  "Robotics and Automation Engineer with hands-on experience in Autonomous Guided Vehicles (AGVs), ROS 2, SLAM, AI-driven perception, and warehouse automation.",
  "Experienced in sensor integration, autonomous navigation, robot deployment, and WMS integration. Passionate about developing intelligent robotic and drone systems using computer vision, machine learning, and autonomous navigation technologies.",
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
    skills: ["Python", "C", "C++", "R", "Bash"],
    colorClass: "bg-blue-500/10 text-blue-500",
  },
  {
    title: "Robotics & Autonomous Systems",
    icon: Bot,
    skills: ["ROS 2", "Gazebo", "RViz2", "SLAM", "Autonomous Navigation", "Path Planning"],
    colorClass: "bg-cyan-500/10 text-cyan-500",
  },
  {
    title: "Drone Technologies",
    icon: Globe,
    skills: ["PX4 Autopilot", "ArduPilot", "MAVLink", "MAVSDK", "Swarm Coordination"],
    colorClass: "bg-amber-500/10 text-amber-500",
  },
  {
    title: "Computer Vision",
    icon: Eye,
    skills: ["OpenCV", "MVS SDK", "YOLOv8"],
    colorClass: "bg-purple-500/10 text-purple-500",
  },
  {
    title: "AI & ML",
    icon: Brain,
    skills: ["Reinforcement Learning", "Deep Learning", "TensorFlow", "Keras", "PyTorch"],
    colorClass: "bg-rose-500/10 text-rose-500",
  },
  {
    title: "Embedded Systems",
    icon: Cpu,
    skills: ["Arduino", "Raspberry Pi", "SRC 2000", "Flight Controllers"],
    colorClass: "bg-emerald-500/10 text-emerald-500",
  },
  {
    title: "Industrial Automation",
    icon: Wrench,
    skills: ["PLC Fundamentals", "Robotics Sensors", "Actuators", "Industrial Protocols"],
    colorClass: "bg-orange-500/10 text-orange-500",
  },
  {
    title: "CAD & Design",
    icon: PenTool,
    skills: ["SolidWorks", "AutoCAD"],
    colorClass: "bg-indigo-500/10 text-indigo-500",
  },
  {
    title: "Dev & Collaboration",
    icon: GitBranch,
    skills: ["GitHub", "VS Code", "Google Colab", "RoboShopPro", "RDS", "WMS"],
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
    company: "Savira Systek",
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
  tech: string[];
  github?: string;
  video?: string;
  video2?: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Humanoid-Robot-Training",
    description:
      "Developed a professional-grade, deterministically engineered software stack to control a 19-DOF bipedal humanoid robot. Features a Pure Python Hardware Abstraction Layer (HAL) built around MuJoCo for seamless sim-to-real transfer.",
    tech: ["Python", "MuJoCo", "FastAPI", "OpenCV"],
    github: "https://github.com/shinde0001/Humanoid-Robot-Training",
  },
  {
    title: "Detection Quality Adapter (DQA)",
    description:
      "Engineered a high-performance, real-time post-processing middleware pipeline to sanitize and refine raw object detection results. Applies geometric, association, and temporal filtering to ensure stable tracking.",
    tech: ["Python", "Computer Vision", "Real-Time Processing"],
    github: "https://github.com/shinde0001/Detection-Quality-Adapter-DQA-",
  },
  {
    title: "Drone Pipeline & Multi-Agent Mission Generation",
    description:
      "Developed a multi-drone mission planning system for autonomous task execution with swarm coordination strategies for synchronized drone operations.",
    tech: ["Python", "ROS 2", "PX4", "MAVSDK", "LLM APIs", "Llama"],
    github: "https://github.com/shinde0001/Drone-Mission-Pipeline",
    video: "https://drive.google.com/file/d/1RmZlvP2GteiClFOZbtAo6owTs2M_YEa2/view",
    video2: "https://drive.google.com/file/d/1dkg8GLsTuL-XZLLjxr4Lvra4Qp_8j5S1/view",
  },
  {
    title: "Autonomous Vision-Based Drone Follower",
    description:
      "Developed an autonomous drone capable of following a target using computer vision with integrated SLAM for real-time localization and autonomous navigation.",
    tech: ["OpenCV", "Python", "ROS 2", "PX4", "YOLOv8"],
    github: "https://github.com/shinde0001/vision-drone-for-object-detect-and-follow-SLAM-Navigation-",
    video: "https://drive.google.com/file/d/1nrlSeXwTdMn7kNZ85Q1zW7FpX3Wxdg_t/view",
  },
  {
    title: "AI Chatbot using RAG",
    description:
      "Built an AI chatbot capable of retrieving domain-specific information using Retrieval-Augmented Generation with LLM-based responses and document retrieval.",
    tech: ["Python", "LangChain", "Vector Database"],
    github: "https://github.com/shinde0001/Parth.AI-RAG-System",
  },
  {
    title: "📈 AI Stock Signal Intelligence System — Indian Markets (NSE)",
    description:
      "Developed a local-first AI stock prediction and intelligence system for Indian markets. Features include an Investment Advisor, Portfolio Simulator, and real-time market prediction architecture.",
    tech: ["Python", "Machine Learning", "Streamlit", "Data Analysis"],
    github: "https://github.com/shinde0001/AI-Stock-Signal-Intelligence-Machine-learning-model",
  },
  {
    title: "AI-Powered Website Security",
    description:
      "Engineered an enterprise-grade reconnaissance engine and security dashboard. Features deep entity investigation, OSINT capabilities, and visual knowledge graphs for digital footprint assessment.",
    tech: ["Python", "Cybersecurity", "OSINT", "AI"],
    github: "https://github.com/shinde0001/AI-Powered-Website-Security",
  },
  {
    title: "Slotting Machine with Robotic Arm controlled by Raspberry Pi",
    description:
      "Designed and developed a robotic arm-based slotting machine controlled by Raspberry Pi, automating pick-and-place operations using embedded programming.",
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

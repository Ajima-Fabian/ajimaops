import {
  Monitor,
  Server,
  Cloud,
  Network,
  Shield,
  Database,
  GitBranch,
  Code2,
  Globe,
  Cpu,
  Terminal,
  Workflow,
  Zap,
  FileCode2,
  Route,
  Radio,
  Container,
  Boxes,
  Send,
  Flame
} from 'lucide-react';

export const skillsData = [
  {
    id: 1,
    category: "Frontend Engineering",
    description: "Building responsive and interactive user interfaces.",
    icon: <Monitor className="w-6 h-6" />,
    skills: [
      {
        name: "HTML5",
        level: "Advanced",
        icon: <Code2 className="text-orange-500" />
      },
      {
        name: "CSS3",
        level: "Advanced",
        icon: <Code2 className="text-blue-500" />
      },
      {
        name: "JavaScript (ES6+)",
        level: "Advanced",
        icon: <Code2 className="text-yellow-400" />
      },
      {
        name: "React.js",
        level: "Advanced",
        icon: <Workflow className="text-cyan-400" />
      },
      {
        name: "Next.js",
        level: "Advanced",
        icon: <Globe className="text-white" />
      },
      {
        name: "Tailwind CSS",
        level: "Advanced",
        icon: <Code2 className="text-cyan-400" />
      },
      {
        name: "Vite",
        level: "Intermediate",
        icon: <Zap className="text-yellow-300" />
      },
      {
        name: "TypeScript",
        level: "Intermediate",
        icon: <FileCode2 className="text-blue-500" />
      }
    ]
  },

  {
    id: 2,
    category: "Backend & API Engineering",
    description: "Designing scalable backend systems and APIs.",
    icon: <Server className="w-6 h-6" />,
    skills: [
      {
        name: "Node.js",
        level: "Advanced",
        icon: <Server className="text-green-500" />
      },
      {
        name: "Express.js",
        level: "Advanced",
        icon: <Route className="text-gray-300" />
      },
      {
        name: "MongoDB",
        level: "Intermediate",
        icon: <Database className="text-green-500" />
      },
      {
        name: "Mongoose",
        level: "Intermediate",
        icon: <Database className="text-red-500" />
      },
      {
        name: "REST APIs",
        level: "Advanced",
        icon: <Network className="text-blue-400" />
      },
      {
        name: "Authentication & JWT",
        level: "Intermediate",
        icon: <Shield className="text-green-400" />
      },
      {
        name: "MySQL",
        level: "Intermediate",
        icon: <Database className="text-blue-500" />
      },
      {
        name: "WebSockets",
        level: "Intermediate",
        icon: <Radio className="text-purple-400" />
      }
    ]
  },

  {
    id: 3,
    category: "DevOps & Infrastructure",
    description: "Containerization, deployment and infrastructure workflows.",
    icon: <Cloud className="w-6 h-6" />,
    skills: [
      {
        name: "Docker",
        level: "Intermediate",
        icon: <Container className="text-blue-400" />
      },
      {
        name: "Kubernetes",
        level: "Intermediate",
        icon: <Boxes className="text-blue-500" />
      },
      {
        name: "GitHub Actions",
        level: "Intermediate",
        icon: <GitBranch className="text-blue-400" />
      },
      {
        name: "Nginx",
        level: "Intermediate",
        icon: <Globe className="text-green-500" />
      },
      {
        name: "Linux Server Environment",
        level: "Intermediate",
        icon: <Terminal className="text-yellow-300" />
      },
      {
        name: "Cloud Deployment",
        level: "Advanced",
        icon: <Cloud className="text-white" />
      }
    ]
  },

  {
    id: 4,
    category: "Networking & Security",
    description: "Networking concepts, system communication and security awareness.",
    icon: <Network className="w-6 h-6" />,
    skills: [
      {
        name: "Computer Networking",
        level: "Intermediate",
        icon: <Network className="text-blue-400" />
      },
      {
        name: "HTTP/HTTPS Protocols",
        level: "Intermediate",
        icon: <Globe className="text-green-400" />
      },
      {
        name: "Firewall & Port Management",
        level: "Intermediate",
        icon: <Shield className="text-red-400" />
      },
      {
        name: "Linux Permissions",
        level: "Intermediate",
        icon: <Terminal className="text-yellow-300" />
      },
      {
        name: "Authentication & Security Basics",
        level: "Intermediate",
        icon: <Shield className="text-cyan-400" />
      }
    ]
  },

  {
    id: 5,
    category: "Computer Science Foundations",
    description: "Core engineering and system fundamentals.",
    icon: <Cpu className="w-6 h-6" />,
    skills: [
      {
        name: "Data Structures & Algorithms",
        level: "Intermediate",
        icon: <Cpu className="text-yellow-400" />
      },
      {
        name: "Database Management Systems",
        level: "Intermediate",
        icon: <Database className="text-blue-400" />
      },
      {
        name: "Operating Systems",
        level: "Intermediate",
        icon: <Terminal className="text-slate-200" />
      },
      {
        name: "Software Architecture",
        level: "Intermediate",
        icon: <Workflow className="text-purple-400" />
      }
    ]
  },

  {
    id: 6,
    category: "Developer Tools & Workflow",
    description: "Development tools and productivity ecosystem.",
    icon: <GitBranch className="w-6 h-6" />,
    skills: [
      {
        name: "Git & GitHub",
        level: "Advanced",
        icon: <GitBranch className="text-orange-500" />
      },
      {
        name: "VS Code",
        level: "Advanced",
        icon: <Code2 className="text-blue-500" />
      },
      {
        name: "Postman",
        level: "Advanced",
        icon: <Send className="text-orange-500" />
      },
      {
        name: "Firebase",
        level: "Intermediate",
        icon: <Flame className="text-yellow-400" />
      }
    ]
  }
];

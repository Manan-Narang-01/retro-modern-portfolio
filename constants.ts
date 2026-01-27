import { PortfolioData } from './types';

export const PORTFOLIO_DATA: PortfolioData = {
  personalInfo: {
    name: "Manan Narang",
    title: "Software Developer",
    tagline: "Frontend & Backend Enthusiast",
    location: "Gujarat, India",
    email: "manannarang27@gmail.com",
    about: [
      "I am a passionate software developer with a keen interest in both frontend and backend development. A fast learner with strong problem-solving and presentation skills, I excel in collaborative environments.",
      "Highly organized and detail-oriented, I am committed to delivering high-quality work within deadlines. My technical toolkit includes a wide array of languages and frameworks, from .NET and Django to Swift and C++."
    ],
    skills: [
      "C++", "Java", "Python", "C#", "PHP", "Swift",
      "MySQL", "HTML/CSS/JS",
      ".NET", "Django", "Git", "Visual Studio"
    ]
  },
  socialLinks: [
    { platform: "GitHub", url: "https://github.com/xDaBix/", iconName: "Github" },
    { platform: "LinkedIn", url: "http://www.linkedin.com/in/manan-narang0106", iconName: "Linkedin" },
    { platform: "Email", url: "mailto:manannarang27@gmail.com", iconName: "Mail" }
  ],
  experience: [
    {
      id: "exp-0",
      role: "Software Engineer Trainee",
      company: "Casepoint",
      duration: "Aug 2025 - Present",
      description: "Contributing to the development of Casepoint's industry-leading legal discovery (eDiscovery) platform. Casepoint provides cloud-based legal technology solutions that empower law firms, corporations, and government agencies to manage large volumes of data efficiently.",
      achievements: [
        "Core Stack: C#, .NET Framework/Core, SQL Server, and enterprise-grade web architectures.",
        "Gaining hands-on experience in building scalable, secure, and performant legal tech modules.",
        "Collaborating with a global team of developers to implement complex data processing workflows."
      ]
    },
    {
      id: "exp-1",
      role: "Head of Technical Committee",
      company: "Student Union, BMIIT, UTU",
      duration: "2024",
      description: "Leadership role within the university student union.",
      achievements: [
        "Managed and coordinated a diverse range of events for the Youth Fest.",
        "Selected to lead the technical committee, demonstrating leadership and teamwork.",
        "Secured 5th position in Tech Fest organized at Charotar University."
      ]
    }
  ],
  projects: [
    {
      id: "proj-0",
      title: "TalentBridgePro",
      description: "A smart recruitment platform bridging the gap between talent and opportunity. Features AI-powered ATS scoring, automated job description generation, and comprehensive dashboards for applicants, recruiters, and administrators.",
      technologies: [".NET MVC", "PostgreSQL", "Redis", "Elasticsearch", "RabbitMQ", "JWT", "AI/ATS"],
      link: "https://github.com/Manan-Narang-01/talentbridgepro",
      featured: true
    },
    {
      id: "proj-1",
      title: "Thread App",
      description: "Developed a Thread clone app in Swift for iOS, implementing real-time messaging, user authentication, and seamless UI/UX design.",
      technologies: ["Swift", "iOS", "Real-time Messaging", "Auth"],
      link: "https://github.com/xDaBix/Thread-App",
      featured: true
    },
    {
      id: "proj-2",
      title: "Immersive Homes",
      description: "An AR/VR based software for building and previewing infrastructure at an early stage. Raised Rs. 2 lakhs funding at SSIP Ideahunt 2024.",
      technologies: ["AR/VR", "MongoDB", "C#"],
      link: "https://github.com/xDaBix/Immersive-Homes",
      featured: true
    },
    {
      id: "proj-3",
      title: "SteamHub",
      description: "A Django-based platform that allows players to buy and download games seamlessly.",
      technologies: ["Django", "Python", "Web Development"],
      link: "https://github.com/xDaBix/SteamHub",
      featured: true
    },
    {
      id: "proj-4",
      title: "Unisex Salon System",
      description: "A user-friendly salon booking platform enabling customers to schedule appointments with preferred stylists.",
      technologies: ["ASP.NET", "SQL Server", "C#"],
      link: "https://github.com/xDaBix/Salon-management-system",
      featured: false
    },
    {
      id: "proj-5",
      title: "Face Recognition",
      description: "Developed a face recognition system using the RetinaFace model for accurate face detection from a single reference image.",
      technologies: ["Python", "RetinaFace", "ML"],
      link: "https://github.com/xDaBix/Face-Recognition",
      featured: false
    },
    {
      id: "proj-6",
      title: "Data Cleaning",
      description: "Worked on an important data cleaning process using MySQL Workbench on a company’s layoffs dataset.",
      technologies: ["MySQL", "Data Analysis"],
      link: "https://github.com/xDaBix/Data-Cleaning",
      featured: false
    }
  ],
  education: [
    {
      id: "edu-1",
      degree: "MSc. (IT)",
      institution: "UKA Tarsadiya University",
      year: "Ongoing",
      coursework: ["8.02 CGPA"]
    },
    {
      id: "edu-2",
      degree: "BSc. (IT)",
      institution: "UKA Tarsadiya University",
      year: "2024",
      coursework: ["7.70 CGPA"]
    },
    {
      id: "edu-3",
      degree: "HSC",
      institution: "SSRVM",
      year: "2021",
      coursework: ["79.00%"]
    },
    {
      id: "edu-4",
      degree: "SSC",
      institution: "SSRVM",
      year: "2019",
      coursework: ["75.00%"]
    }
  ],
  certifications: [
    {
      id: "cert-1",
      title: "SSIP Hackathon 2023",
      organization: "Education Department, Govt of Gujarat",
      year: "2023"
    },
    {
      id: "cert-2",
      title: "Healthy Switching – Tech Event",
      organization: "Charotar University",
      year: "N/A"
    }
  ]
};
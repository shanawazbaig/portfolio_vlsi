export const personalDetails = {
  name: "Shanawaz Baig",
  role: "VLSI & Hardware Design Engineer",
  about: "Passionate about Hardware Design, FPGA, and VLSI. Experienced in Verilog, RTL Design, and Machine Learning applications.",
  social: [
    { name: "GitHub", url: "#", icon: "github" },
    { name: "LinkedIn", url: "#", icon: "linkedin" },
    { name: "Email", url: "mailto:example@email.com", icon: "email" },
  ],
};

export const projects = [
  {
    id: 1,
    title: "Asynchronous FIFO Design",
    category: "Hardware Design",
    description: "Designed and implemented an asynchronous FIFO using Verilog HDL for reliable data transfer between two clock domains. Utilized Gray-coded pointers and 2-FF synchronizers.",
    tech: ["Verilog HDL", "FPGA", "ModelSim", "Intel Quartus Prime"],
    image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=1000&auto=format&fit=crop", // Electronics/Hardware
    links: {
      repo: "#",
      demo: "#",
    },
  },
  {
    id: 2,
    title: "Motion Estimation of Vehicles",
    category: "Machine Learning",
    description: "Real-time vehicle detection and tracking system using YOLOv8 and Deep SORT. Implemented speed estimation and addressed occlusion challenges.",
    tech: ["Python", "YOLOv8", "Deep SORT", "OpenCV", "NumPy"],
    image: "https://images.unsplash.com/photo-1625314868143-20d93ce3abb2?q=80&w=1000&auto=format&fit=crop", // AI/Traffic
    links: {
      repo: "#",
    },
  },
  {
    id: 3,
    title: "College Web App",
    category: "Web Development",
    description: "Full Stack web application for college built using React and Firebase. Enhanced UI using Bootstrap and Materialize CSS.",
    tech: ["React", "Firebase", "Bootstrap"],
    image: "https://images.unsplash.com/photo-1546900703-cf06143d1239?q=80&w=1000&auto=format&fit=crop", // Web App
    links: {
      repo: "#",
    },
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["Verilog", "Javascript", "Python", "C"],
  },
  {
    category: "Tools & Frameworks",
    items: ["RTL Design", "Static Timing Analysis", "Cadence Virtuoso", "LTspice", "Quartus Prime", "Xilinx Vivado", "VS Code", "Git"],
  },
];

export const experience = [
  {
    id: 1,
    role: "Internship Coordinator",
    org: "MTech VLSI",
    date: "Present",
    description: "Currently serving as the Internship Coordinator, managing industry connections and student placements.",
  },
  {
    id: 2,
    role: "Technical Operations Lead",
    org: "College Technical Fest",
    date: "Previous",
    description: "Led the Technical Operations team, organizing and managing technical events.",
  },
];

export const achievements = [
  "Achieved first place in a college-level hackathon competition.",
];

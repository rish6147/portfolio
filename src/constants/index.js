import { image } from "motion/react-m";

export const myProjects = [
  {
    id: 1,
    title: "AI Powered PACS based Cancer detection System",
    description:
      "AI-powered cancer prediction system with integrated PACS-based web platform, enabling real-time medical image analysis and management for improved diagnostics.",
    subDescription: [
      "Developed a scalable web application using Flask and React.js, integrating PACS for seamless medical image storage, retrieval, and management.",
    "Implemented a convolutional neural network (CNN) model achieving 97% accuracy in cancer prediction, enabling AI-driven diagnostic support.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/Pacs.png",
    tags: [
      {
        id: 1,
        name: "CNN",
        path: "/assets/logos/csharp.svg",
      },
      {
        id: 2,
        name: "MONGODB",
        path: "/assets/logos/dotnet.svg",
      },
      {
        id: 3,
        name: "REACT",
        path: "/assets/logos/efcore.png",
      },
      {
        id: 4,
        name: "FLASK",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 2,
    title: "AI Based Automatic Drone Surveillance & alert System",
    description:
      "AI-powered autonomous drone surveillance system for real-time anomaly detection and live monitoring.",
    subDescription: [
       "Developed an autonomous drone integrated with YOLOv5, RGB and thermal cameras, LiDAR, and GPS, using ROS for multi-sensor data fusion and navigation control.",
       "Built a React.js and Node.js dashboard with low-latency video streaming and real-time alerts powered by NVIDIA Jetson Nano and MQTT communication."
    ],
    href: "",
    logo: "",
    image: "/assets/projects/ADR.jpg",
    tags: [
      {
        id: 1,
        name: "AWS",
        path: "/assets/logos/auth0.svg",
      },
      {
        id: 2,
        name: "RPI-4B",
        path: "/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "GPS-GSM",
        path: "/assets/logos/sqlite.svg",
      },
      {
        id: 4,
        name: "MICROCONTROLLER",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 3,
    title: "KHET-SAT",
    description:
      "AI-driven IoT solution for precision agriculture with real-time soil monitoring and intelligent irrigation control.",
    subDescription: [
      "Integrated NPK and moisture sensors with ESP32 microcontrollers to automate irrigation, using Firebase for real-time cloud data storage and a React.js web interface for monitoring.",
      "Implemented AI models to predict crop growth, optimize watering schedules, and recommend fertilizer use, helping farmers increase yield, reduce waste, and improve sustainability.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/KHET-SAT.jpg",
    tags: [
      {
        id: 1,
        name: "NPK Sensor",
        path: "/assets/logos/blazor.svg",
      },
      {
        id: 2,
        name: "MOISTURE Sensor",
        path: "/assets/logos/dotnetcore.svg",
      },
      {
        id: 3,
        name: "AWS",
        path: "/assets/logos/sqlite.svg",
      },
      {
        id: 4,
        name: "MERN",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 4,
    title: "C++ Game Engine",
    description:
      "A lightweight C++ game engine designed for 2D and 3D game development.",
    subDescription: [
      "Built a powerful rendering engine using OpenGL and C++.",
      "Developed a physics engine with collision detection and particle effects.",
      "Implemented a scripting system for easy game customization.",
      "Optimized performance with multi-threading and efficient memory management.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/game-engine.jpg",
    tags: [
      {
        id: 1,
        name: "C++",
        path: "/assets/logos/cplusplus.svg",
      },
      {
        id: 2,
        name: "C#",
        path: "/assets/logos/csharp.svg",
      },
      {
        id: 3,
        name: "Git",
        path: "/assets/logos/git.svg",
      },
      {
        id: 4,
        name: "Microsoft",
        path: "/assets/logos/microsoft.svg",
      },
    ],
  },
  {
    id: 5,
    title: "Accident detection and alert system",
    description:
      "Smart accident detection and rapid alert system with real-time monitoring and autonomous drone deployment.",
    subDescription: [
      "Developed a system using Arduino, Raspberry Pi, and ESP32 microcontrollers integrated with accelerometer, GPS, and gas sensors for immediate accident detection and location tracking.",
      "Implemented HTTP and MQTT protocols to send alerts and trigger autonomous drones equipped with cameras, providing real-time visual feedback from the incident site.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/accident.jpg",
    tags: [
      {
        id: 1,
        name: "ARDUINO",
        path: "/assets/logos/wordpress.svg",
      },
      {
        id: 2,
        name: "ESP32",
        path: "/assets/logos/html5.svg",
      },
      {
        id: 3,
        name: "GAS SENSOR",
        path: "/assets/logos/css3.svg",
      },
      {
        id: 4,
        name: "ACEELEROMETER's",
        path: "/assets/logos/vitejs.svg",
      },
    ],
  },
  {
    id: 6,
    title: " AI Based Plant disease identification system",
    description:
      "AI-powered website and mobile app for plant disease identification and health assessment through image recognition.",
    subDescription: [
      "Developed an intelligent system allowing users to capture or upload plant images, using AI to identify plant species and analyze health conditions.",
      "Provided detailed diagnostics with recommended treatments when diseases are detected, helping users take timely action to protect crops or plants."
    ],
    href: "",
    logo: "",
    image: "/assets/projects/plant.png",
    tags: [
      {
        id: 1,
        name: "YOLOv5",
        path: "/assets/logos/blazor.svg",
      },
      {
        id: 2,
        name: "Azure",
        path: "/assets/logos/azure.svg",
      },
      {
        id: 3,
        name: "MERN",
        path: "/assets/logos/stripe.svg",
      },
      {
        id: 4,
        name: "FLASK",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "9380014104",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/rishabh-singh-09929528a/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ali.sanatidev/reels/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Research Intern",
    job: "STUST, Taiwan",
    date: "AUG'25-Present",
    contents: [
      "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    ],
  },
  {
    title: "AI Research Intern",
    job: "National Chung Cheng University, Taiwan",
    date: "SEPT 24- NOV 2024",
    contents: [
      "Developed and fine-tuned CNN models (ResNet, EfficientNet) and SVM classifiers for cancer prediction, leveraging image preprocessing, data augmentation, and transfer learning with Python, TensorFlow/Keras, and OpenCV.",
      "Performed extensive testing and optimization to improve model accuracy and generalization on a custom medical imaging dataset, ensuring reliable diagnostic predictions.",
      "Built a full-stack web application with React.js, Node.js, and MongoDB, integrating AI models with PACS and providing real-time, seamless access to prediction results through RESTful APIs."
    ],
  },
  {
    title: "AI & DATA SCIENCE INTERN",
    job: " Indian statistical institute, Kolkata, India",
    date: "JUL'24- SEPT'24",
    contents: [
      "Developed and fine-tuned a Generative AI model using Ollama 3.1 with a Python backend, enabling on-device inference for an educational app that works seamlessly offline.",
      "Implemented NLP libraries, local model deployment, and optimized resource management to support internet-independent learning experiences for students.",
      "Performed data preprocessing, exploratory data analysis, and model evaluation to improve performance and reliability of the Generative AI-powered educational platform."
    ],
  },
  {
    title: "WEB DEVELOPER INTERN",
    job: "IASYNT GLOBAL, India",
    date: "OCT'23-JUN'24",
    contents: [
      "Contributed to the development of a responsive flagship website using React.js with Redux for state management and Node.js/Express RESTful APIs for backend integration.",
      "Implemented component reusability, lazy loading, and responsive design techniques to enhance user experience across devices and improve performance.",
      "Worked on CI/CD pipelines and ensured cross-browser compatibility and accessibility compliance to deliver a reliable and user-friendly web application."
      
    ],
    
  },
];
export const reviews = [
  {
    name: "PRAJWALAN 2K24",
    username: "RUNNER-UP's",
    body: "SRKR Engineering College, Bhimavaram,India",
    img: "https://robohash.org/jack",
  },
  {
    name: "SMART INDIA HACKATHON",
    username: "WINNERS",
    body: "PRESIDENCY UNIVERSITY, BENGALURU",
    img: "https://robohash.org/jill",
  },
  {
    name: "SCIMIT 2K24",
    username: "RUNNER-UP's",
    body: "SCIMIT, PUDUCHERRY",
    img: "https://robohash.org/john",
  },
  {
    name: "HACKTONIX 2K24",
    username: "RUNNER-UP's",
    body: "SVIT, Tirupati, India",
    img: "https://robohash.org/alice",
  },
  {
    name: " InnovateX 2K24",
    username: "Most Innovative Idea Award",
    body: "IISC, Bengaluru, India",
    img: "https://robohash.org/bob",
  },
  {
    name: "WEB-HACKATHON",
    username: "ORGANIZER (TEAM LEAD)",
    body: "PRESIDENCY UNIVERSITY, BENGALURU India",
    img: "https://robohash.org/charlie",
  },
  {
    name: "MENTOR",
    username: "ARDUINO PROJECT EXPO.",
    body: "MENTORED 6 TEAMS IN ARDUINO PROJECT EXPO.",
    img: "https://robohash.org/dave",
  },
  {
    name: "MENTOR-SENIOR",
    username: "RASPBERRY PI PROJECT EXPO.",
    body: "MENTORED 8 TEAMS IN ARDUINO PROJECT EXPO.",
    img: "https://robohash.org/eve",
  },
];

import identigo from "../assets/images/Identigo.webp";
import pistis from "../assets/images/pisitis.webp";
import novatus from "../assets/images/novatus.webp";
import jarvis from "../assets/images/jarvis.webp";
import diet from "../assets/images/diet.webp";
import {
  CSSIcon,
  HTMLIcon,
  JavaScriptIcon,
  NextJSIcon,
  ReactIcon,
  ReduxIcon,
  TailwindCSSIcon,
  TypeScriptIcon,
} from "../assets/Svg";

export const projectData = [
  {
    title: "Identigo",
    type: " Human Resources Platform",
    description:
      "A professional background screening and verification company that provides comprehensive background check services to help businesses make informed hiring decisions and mitigate recruitment risks.",
    link: "https://identigo.africa/",
    img: identigo,
  },
  {
    title: "Pistis Tech Hub",
    type: "Educational Platform",
    description:
      "An innovative platform for DevOps training, offering hands-on learning and real-world projects",
    link: "https://learn.pististechub.io/",
    img: pistis,
  },
  {
    title: "Novatus AI",
    type: "AI Security Platform",
    description:
      "An AI-driven security software that augments existing video/CCTV systems with real-time threat detection, incident analysis, and instant alerts for homes and businesses; positioned as Europe’s #1 in its category.",
    link: "https://www.novatus.ai/",
    img: novatus,
  },
  {
    title: "Jarvis",
    type: "Digital Product Studio",
    description:
      "A studio designing and building digital experiences that matter—offering product design, full-stack development, MVP development, and growth marketing to take ideas from 0→1 and beyond.",
    link: "https://jarvis-micheals-projects-7fad2d08.vercel.app/",
    img: jarvis,
  },
  {
    title: "YourDietGame",
    type: "Nutrition Coaching Platform",
    description:
      "A science-based coaching platform by dietitian Stefanos Papanastasiou featuring the ‘Your Diet Game’ method, a Premium 12-week program with full support, and free ebooks plus educational nutrition articles.",
    link: "https://yourdietgame.gr/",
    img: diet,
  },
];

export const experienceData = [
  {
    icon: <ReactIcon />,
    name: "React",
    category: "JavaScript Framework",
  },
  {
    icon: <TypeScriptIcon />,
    name: "TypeScript",
    category: "Programming Language",
  },
  {
    icon: <HTMLIcon />,
    name: "HTML",
    category: "Markup Language",
  },
  {
    icon: <CSSIcon />,
    name: "CSS",
    category: "Style Sheet Language",
  },
  {
    icon: <NextJSIcon />,
    name: "Next.js",
    category: "React Framework",
  },
  {
    icon: <JavaScriptIcon />,
    name: "JavaScript",
    category: "Programming Language",
  },
  {
    icon: <TailwindCSSIcon />,
    name: "Tailwind CSS",
    category: "CSS Framework",
  },
  {
    icon: <ReduxIcon />,
    name: "Redux",
    category: "State Management",
  },
];

export const aboutMeParagraphs = [
  "Hello! my name is Micheal, a Frontend Developer who loves turning designs into websites that people actually enjoy using.",
  "I work primarily with React, Next.js, TypeScript, and Tailwind CSS to build responsive web applications that look great on any device. What I enjoy most about my work is taking a designer's vision from Figma and bringing it to life with clean, efficient code.",
  "Working at Identigo and Fluxit has given me the chance to solve real-world problems through code. I love taking complex data and turning it into something visual that tells a story. Some of my favorite projects involve building interactive dashboards where users can explore information in ways that make sense to them.",
  "I believe great websites come from great teamwork. I enjoy collaborating with designers to understand their vision and backend developers to connect everything together. This collaborative approach helps me create experiences that not only look good but work flawlessly.",
  "Looking ahead, I'm particularly excited about exploring more advanced animation techniques and state management solutions to create even more engaging user experiences. I'm always on the lookout for projects that challenge me to grow as a developer.",
  "I'm open to discussing new opportunities, collaborations, or just chatting about frontend development. Feel free to reach out—I'd love to connect!",
];

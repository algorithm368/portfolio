import * as FaIcons from "react-icons/fa";

export type SkillIcon = keyof typeof FaIcons;

export interface Skill {
  name: string;
  icon: SkillIcon;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "Programming",
    skills: [
      { name: "Python", icon: "FaPython" },
      { name: "Java", icon: "FaJava" },
      { name: "C", icon: "FaCode" },
      { name: "C++", icon: "FaCode" },
      { name: "JavaScript", icon: "FaJs" },
      { name: "TypeScript", icon: "FaJsSquare" },
      { name: "Bash", icon: "FaTerminal" },
    ],
  },
  {
    category: "Frameworks",
    skills: [
      { name: "React", icon: "FaReact" },
      { name: "React Native", icon: "FaReact" },
      { name: "Next.js", icon: "FaReact" },
      { name: "Vue", icon: "FaVuejs" },
      { name: "FastAPI", icon: "FaRocket" },
      { name: "Express", icon: "FaNodeJs" },
      { name: ".NET", icon: "FaWindows" },
    ],
  },
  {
    category: "Infrastructure",
    skills: [
      { name: "MySQL", icon: "FaDatabase" },
      { name: "PostgreSQL", icon: "FaDatabase" },
      { name: "MongoDB", icon: "FaDatabase" },
      { name: "Docker", icon: "FaDocker" },
      { name: "AWS", icon: "FaAws" },
    ],
  },
];

import React, { useEffect, useState } from 'react';
import './Skills.css';
import { getSkills } from '../queries/getSkills';
import { FaReact } from 'react-icons/fa';
import {
  SiFlutter,
  SiSwift,
  SiKotlin,
  SiFirebase,
  SiPostman,
  SiGithubactions,
  SiCplusplus,
  SiTypescript,
  SiAdobexd,
  SiMongodb,
  SiCsharp,
  SiDart,
  SiDocker,
  SiNextdotjs
} from 'react-icons/si';
import { Skill } from '../types';

const iconMap: { [key: string]: JSX.Element } = {
  SiFlutter: <SiFlutter />,
  FaReact: <FaReact />,
  SiSwift: <SiSwift />,
  SiKotlin: <SiKotlin />,
  SiFirebase: <SiFirebase />,
  SiPostman: <SiPostman />,
  FaGitAlt: <FaReact />, // Placeholder for Git icon
  SiGithubactions: <SiGithubactions />,
  SiCplusplus: <SiCplusplus />,
  SiTypescript: <SiTypescript />,
  SiAdobexd: <SiAdobexd />,
  SiClean: <FaReact />, // Placeholder for Clean Architecture icon
  SiMongodb: <SiMongodb />,
  SiCsharp: <SiCsharp />,
  SiDart: <SiDart />,
  SiDocker: <SiDocker />,
  SiNextdotjs: <SiNextdotjs />
};

const Skills: React.FC = () => {

  const [skillsData, setSkillsData] = useState<Skill[]>([]);

  useEffect(() => {
    async function fetchSkills() {
      const data = await getSkills();
      setSkillsData(data);
    }

    fetchSkills()
  }, []);

  if (skillsData.length === 0) return <div>Loading...</div>;

  const skillsByCategory = skillsData.reduce((acc: any, skill: any) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});


  return (
    <div className="skills-container">
      {Object.keys(skillsByCategory).map((category, index) => (
        <div key={index} className="skill-category">
          <h3 className="category-title">{category}</h3>
          <div className="skills-grid">
            {skillsByCategory[category].map((skill: any, idx: number) => (
              <div key={idx} className="skill-card">
                <div className="icon">{iconMap[skill.icon] || <FaReact />}</div>
                <h3 className="skill-name">
                  {skill.name.split('').map((letter: any, i: number) => (
                    <span key={i} className="letter" style={{ animationDelay: `${i * 0.05}s` }}>
                      {letter}
                    </span>
                  ))}
                </h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;

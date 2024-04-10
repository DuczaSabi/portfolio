// SkillsSection.js
import React, { useState } from 'react';
import Skill from '../Skill/Skill';
import './SkillsSection.css';

const skillList = [
    { name: "html5", text: "HTML5" },
    { name: "css", text: "CSS" },
    { name: "js", text: "JavaScript" },
    { name: "bootstrap", text: "Bootstrap" },
    { name: "c-sharp", text: "C#" },
    { name: "git", text: "Git" },
    { name: "github", text: "GitHub" },
    { name: "jira", text: "Jira" },
    { name: "mongo-db", text: "MongoDB" },
    { name: "mysql", text: "MySQL" },
    { name: "npm", text: "npm" },
    { name: "postgresql", text: "PostgreSQL" },
    { name: "postman-api", text: "Postman API" },
    { name: "react", text: "React" },
    { name: "tailwind-css", text: "Tailwind CSS" },
    { name: "typescript", text: "TypeScript" },
];

const imagePaths = {};
skillList.forEach(skill => {
    imagePaths[skill.name] = require(`../../Images/Skills/${skill.name}.png`);
});

let startFadePosition = 0;

window.addEventListener('scroll', function() {
  let scrollTop = window.scrollY;
  let skillsSection = document.querySelector('.skills-section');
  let windowHeight = window.innerHeight;
  startFadePosition = windowHeight * 0.9;

  if (scrollTop > startFadePosition) {
    skillsSection.style.display = "flex";
    let opacity = ((scrollTop - startFadePosition) / (windowHeight * 0.4));
    opacity = Math.min(1, Math.max(0, opacity));
    skillsSection.style.opacity = opacity.toFixed(2);

  } else {
    skillsSection.style.opacity = 0;
    skillsSection.style.display = "none";
  }
});

window.addEventListener('resize', function() {
  let windowHeight = window.innerHeight;
  startFadePosition = windowHeight * 1.6;
});


function SkillsSection({language}) {
    const [hoveredSkill, setHoveredSkill] = useState(null);

    const handleSkillHover = (text) => {
        setHoveredSkill(text);
    };

    const handleSkillLeave = () => {
        setHoveredSkill(null);
    };

    return (
        <div className="skills-section">
        {language === "en" ? 
            <h2>{hoveredSkill ? hoveredSkill : "My Skills"}</h2> :
            <h2>{hoveredSkill ? hoveredSkill : "Képességeim"}</h2> }

            {skillList.map(skill => (
                <Skill 
                    key={skill.name} 
                    title={skill.text} 
                    text={skill.text}
                    imagePath={imagePaths[skill.name]} 
                    onSkillHover={handleSkillHover} 
                    onSkillLeave={handleSkillLeave} 
                />
            ))}
        </div>
    );
}

export default SkillsSection;

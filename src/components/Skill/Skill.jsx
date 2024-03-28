// Skill.js
import React from 'react';
import './Skill.css';

function Skill({ title, imagePath, onSkillHover, onSkillLeave }) {
    const handleHover = () => {
        if (onSkillHover) {
            onSkillHover(title);
        }
    };

    const handleLeave = () => {
        if (onSkillLeave) {
            onSkillLeave();
        }
    };

    return (
        <div className='skill' onMouseEnter={handleHover} onMouseLeave={handleLeave}>
            <img src={imagePath} alt={title} />
        </div>
    );
}

export default Skill;

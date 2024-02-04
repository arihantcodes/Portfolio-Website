import React from 'react';
import './SkillSection.css';
const SkillSection = () => {
  return (
    <div className="skills-section">
      

      {/* Frontend Technologies */}
      <SkillCategory title="Frontend Technologies">
        <Skill name="Languages" details="HTML, CSS, JavaScript (ES6+)" />
        <Skill name="Frameworks" details="React.js" />
        <Skill name="Responsive Design" details="Bootstrap, Tailwind CSS" />
        <Skill name="State Management" details="Redux" />
      </SkillCategory>

      {/* Backend Technologies */}
      <SkillCategory title="Backend Technologies">
        <Skill name="Languages" details="Node.js" />
        <Skill name="Frameworks" details="Express.js" />
        <Skill name="RESTful APIs" details="Graph QL" />
      </SkillCategory>

      {/* Database */}
      <SkillCategory title="Database">
        <Skill name="Databases" details="MongoDB, MySQL" />
        <Skill name="ORM" details="Mongoose" />
      </SkillCategory>

      {/* Version Control */}
      <SkillCategory title="Version Control">
        <Skill name="Git" details="Repository management, branching, merging" />
      </SkillCategory>

      
      
    </div>
  );
};

const SkillCategory = ({ title, children }) => {
  return (
    <div className="skill-category">
      <h3>{title}</h3>
      <ul>{children}</ul>
    </div>
  );
};

const Skill = ({ name, details }) => {
  return (
    <li>
      <strong>{name}:</strong> {details}
    </li>
  );
};

export default SkillSection;

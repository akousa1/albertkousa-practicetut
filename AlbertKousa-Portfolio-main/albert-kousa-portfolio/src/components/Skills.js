import React from 'react';

function Skills() {
  const technicalSkills = [
    { name: "React JS", level: "Experienced" },
    { name: "JavaScript (ES6+)", level: "Experienced" },
    { name: "HTML5", level: "Experienced" },
    { name: "CSS3", level: "Experienced" },
    { name: "Git", level: "Skilful" },
    { name: "Agile", level: "Experienced" }
  ];

  const competencies = [
    "Strong collaboration and teamwork abilities",
    "Excellent time management and organizational skills",
    "Proven ability to perform well under pressure and meet tight deadlines",
    "Self-motivated and proactive in achieving goals",
    "Adaptable to new technologies and changing environments"
  ];

  const languages = [
    { name: "English", level: "Proficient" }
  ];

  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills & Competencies</h2>
      
      <div className="skills-container">
        <div className="technical-skills">
          <h3>Technical Skills</h3>
          <div className="skills-grid">
            {technicalSkills.map((skill, index) => (
              <div className="skill-item" key={index}>
                <span className="skill-name">{skill.name}</span>
                <span className="skill-level">{skill.level}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="other-skills">
          <div className="competencies">
            <h3>Competencies</h3>
            <ul>
              {competencies.map((competency, index) => (
                <li key={index}>{competency}</li>
              ))}
            </ul>
          </div>
          
          <div className="languages">
            <h3>Languages</h3>
            <div className="languages-list">
              {languages.map((language, index) => (
                <div className="language-item" key={index}>
                  <span>{language.name}</span>
                  <span className="language-level">({language.level})</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
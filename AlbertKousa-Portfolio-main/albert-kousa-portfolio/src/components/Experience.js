import React from 'react';

function Experience() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Infosys",
      location: "Sydney",
      period: "March 2023 - May 2025",
      responsibilities: [
        "Define and prioritize tasks with project managers, ensuring timely delivery and high-quality results."
      ]
    },
    {
      title: "Project Contributor (Outsourced by Infosys)",
      company: "Suncorp",
      location: "Sydney",
      period: "Sep 2021 - Jul 2023",
      responsibilities: [
        "Contributed to Suncorp's Insurance Web Application project.",
        "Collaborated with cross-functional teams to build dynamic features.",
        "Used React JS and JavaScript for the development of front-end features.",
        "Applied Agile methodologies to ensure smooth project execution."
      ]
    },
    {
      title: "Project Contributor (Internal Infosys Project)",
      company: "Infosys Springboard",
      location: "Sydney",
      period: "Jul 2023 - April 2025",
      responsibilities: [
        "Worked on the internal Wingspan Springboard Web Application.",
        "Delivered front-end features using HTML, CSS, and JavaScript.",
        "Worked in a team to meet client requirements and maintain project timelines.",
        "Regularly engaged with clients such as Telstra, Tennis Australia, and Young Change Agents to provide progress updates and handle changes."
      ]
    },

    {
      title: "Administration Assistant",
      company: "Megaward Property Group",
      location: "Sydney",
      period: "Sep 2020-Jan 2021",
      responsibilities: [
        "Supported business operations through data entry, record management, and administrative tasks.",
        "Assisted with processing sales agreements and maintaining accurate client information.",
        "Managed and updated property listings and documentation, ensuring accuracy and compliance with company standards."
      ]
    },
    {
      title: "Software Engineer Internship",
      company: "Health Input Generator Project",
      location: "Sydney",
      period: "Jan 2020-Sep 2020",
      responsibilities: [
        "Developed features for a Health Input Generator system using PHP, JavaScript, HTML, and CSS.",
        "Collaborated with cross-functional team members to enhance system functionality and usability.",
        "Created and maintained technical documentation to support future development and system handover."
      ]
    },
    {
      title: "Volunteer",
      company: "Syrian Orthodox Youth Group of Sydney",
      location: "Sydney",
      period: "2014 - Present",
      responsibilities: [
        "Assisted in organizing community events such as picnics, BBQs, and trivia nights.",
        "Facilitated meetings and led activities for the youth group."
      ]
    }
  ];

  return (
    <section id="experience" className="section">
      <h2 className="section-title">Employment History</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div className="experience-item" key={index}>
            <div className="experience-header">
              <h3>{exp.title}</h3>
              <p className="company">{exp.company}, {exp.location}</p>
              <p className="period">{exp.period}</p>
            </div>
            <ul className="responsibilities">
              {exp.responsibilities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
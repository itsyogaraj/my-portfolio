import React from 'react';

const experiences = [
  {
    role: 'Software Engineer',
    company: 'Greet Labs Pvt. Ltd',
    period: '2023 — Present',
    desc: 'Developed and maintained responsive web applications using React.js, JavaScript, HTML5, and CSS3. Collaborated with designers and back-end developers to implement UI/UX and integrate APIs.'
  },
  {
    role: 'Sales Manager',
    company: 'Global Data Cloud Inc',
    period: '2022 — 2023',
    desc: 'Led client acquisition and data solution projects for U.S. clients. Built proposals, managed sales pipelines, and collaborated with technical teams to align solutions with business goals.'
  },
  {
    role: 'Team Leader',
    company: 'GMA Data Solution Inc',
    period: '2020 — 2022',
    desc: 'Managed a team of lead generation executives for B2B/B2C campaigns. Trained staff on CRM tools and ensured quality communication for U.S. clients.'
  },
  {
    role: 'Assistant Team Leader',
    company: 'Cogent E-Service Pvt. Ltd',
    period: '2018 — 2020',
    desc: 'Supervised and supported a team to achieve daily performance targets, prepared performance reports, and ensured quality standards.'
  }
];

function WorkExperience() {
  return (
    <section id="work" className="section container">
      <h2 className="section-title">Work Experience</h2>
      <div className="timeline">
        {experiences.map((exp, i) => (
          <div className="timeline-item" key={i}>
            <div className="timeline-item-head">
              <h3>{exp.role}</h3>
              <span className="muted">{exp.company} • {exp.period}</span>
            </div>
            <p>{exp.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WorkExperience;

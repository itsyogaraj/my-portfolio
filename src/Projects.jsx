import React from 'react';
import yellowClassImg from '../src/assets/project-1.jpg'; 
import blackPepperImg from '../src/assets/project-2.jpg';
import globalExpoImg from '../src/assets/project-3.jpg';



const projects = [
  { title: 'Yellow Class LMS Software', desc: 'An interactive learning platform for kids to join activities, competitions, and programs. Parents can register, enroll, and track progress online.', img: yellowClassImg, link: '#' },
  { title: 'Black Pepper Website', desc: 'A customer innovation portal where ideas are submitted, reviewed, and tracked via unique IDs. Users can log in and follow progress through a secure dashboard.', img: blackPepperImg, link: '#' },
  { title: 'Global Expo DataHub', desc: 'A responsive website for exploring global trade show and expo data with modern UI and smooth navigation.', img: globalExpoImg, link: '#'},

];

function Projects() {
  return (
    <section id="projects" className="section container">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <article className="project-card" key={i}>
            <img src={p.img} alt={p.title} className="project-img" />
            <div className="project-body">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects
import React from 'react';
import profile from '../src/assets/profile.jpg' // replace with your profile image

function Home() {
  return (
    <section id="home" className="hero">
      <div className="hero-left">
        <h1 className="hero-title">Success<br/>Story</h1>
        <p className="hero-sub">Creative Frontend Developer with a strong focus on building user-centric, responsive, and scalable web applications. Skilled in React.js, JavaScript, HTML5, and CSS3, I bring ideas to life with clean code and modern UI/UX practices. I thrive on solving problems, optimizing performance, and delivering seamless digital experiences.
        </p>
        <div className="hero-actions">
          <a className="btn primary" href="#contact">Contact Me</a>
          <a className="btn ghost" href="#projects">View Projects</a>
        </div>
      </div>

      <div className="hero-right">
        <div className="profile-frame">
          <img src={profile} alt="Profile" className="profile-img" />
        </div>
      </div>
    </section>
  );
}

export default Home;
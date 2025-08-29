import React from 'react';
import Home from './home';
import About from './about';
import WorkExperience from './WorkExperience';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import TopNav from './TopNav';

function App() {
  return (
    <>
      <TopNav />
      <main>
        <Home />
        <About />
        <WorkExperience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;

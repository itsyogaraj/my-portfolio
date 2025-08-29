import React from 'react';

function Contact() {
  return (
    <section id="contact" className="section container">
      <h2 className="section-title">Contact</h2>
      <div className="contact-grid">
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="you@example.com" />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" placeholder="How can I help?"></textarea>
          </label>
          <button className="btn primary" type="submit">Send Message</button>
        </form>

        <div className="contact-details">
          <h3>Get in touch</h3>
          <p>Email: <a href="mailto:yogaraj872@gmail.com">yogaraj872@gmail.com</a></p>
          <p>Phone: +91 8123633073</p>
          <p>Location: HSR Layout, Banaglore, Karnataka, 560068.</p>
        </div>
      </div>
    </section>
  );
}

export default Contact
// src/pages/Contact.jsx
import SocialLinks from '../components/SocialLinks';

export default function Contact() {
  return (
    <main className="contact dark-theme">
      <section className="contact-container">
        <h1>Contact Me</h1>
        <p>You can reach out via email or WhatsApp using the buttons below.</p>
        <div className="contact-buttons">
          <a href="mailto:courtashdale@gmail.com" className="contact-btn">
            Email Me
          </a>
          <a href="https://wa.me/971585892057" target="_blank" rel="noopener noreferrer" className="contact-btn">
            WhatsApp Me
          </a>
        </div>
        <SocialLinks />
      </section>
    </main>
  );
}
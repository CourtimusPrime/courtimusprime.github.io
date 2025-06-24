// src/pages/Home.jsx
import GradientBackground from '../components/GradientBackground';
import SocialLinks from '../components/SocialLinks';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <GradientBackground />
      <main className="home">
        <section className="content">
          <h2>Hi, I'm <span>Court</span></h2>
          <h4>Analyst and Developer</h4>
          <p>[Insert brief description about yourself here.]</p>
          <div className="btn-group">
            <Link to="/about">About Me</Link>
            <Link to="/portfolio">See Projects</Link>
          </div>
          <SocialLinks />
        </section>
      </main>
    </>
  );
}
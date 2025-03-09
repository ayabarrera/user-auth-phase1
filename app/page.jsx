import directus from '@/lib/directus';
import { readItems } from '@directus/sdk';
import Navbar from './components/Navbar';
import Link from 'next/link';
import './landingpage.css'; // Import styles

async function getGlobalData() {
  return directus.request(readItems('global'));
}

export default async function LandingPage() {
  const globalData = await getGlobalData();

  return (
    <div className="landing-container">
      <div className="hero-background"></div>

      

      <div className="hero-content">
        {/* Site Title */}
        <h1 className="site-title">Pen & Pixel</h1>

        {/* Dynamic message with Directus (if we want) otherwise just change it to regular header */}
        <h2 className="dynamic-message">
          {globalData.welcome_message || "Stay creative with us!"}
        </h2>

        {/* Static Info/Welcome Message */}
        <p className="static-info">
          Explore the latest articles, insights, and discussions on design, creativity, and digital storytelling.
        </p>

        {/* CTA Button */}
        <Link href="/login">
          <button className="cta-button">Get Started</button>
        </Link>
      </div>
    </div>
  );
}

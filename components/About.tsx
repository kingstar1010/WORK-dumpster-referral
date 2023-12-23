import style from './About.module.scss';

export default function About() {
    return (
      <div className={`${style.about}`}>
          <span className="about-us">
            About this site
          </span>
          <p>
            We're a dedicated team passionate about supporting local contractors and small businesses. Our goal? To help them shine and grow. We love getting to know the wonderful people behind these businesses through friendly interviews. It's all about understanding who they are, the amazing work they do, and the unique ways they operate.
          </p>
          <p>
            We take great joy in creating detailed case studies for different contractors, highlighting their exceptional service to customers and the community. It's out way of showcasing the hard work and dedication that makes our local businesses so special. Join us in celebrating and supporting these pillars of our community!
          </p>
      </div>
    );
}
  
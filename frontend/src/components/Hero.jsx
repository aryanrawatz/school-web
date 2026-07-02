import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero">

      <video autoPlay loop muted playsInline className="hero-video">
        <source src="/videos/school.mp4" type="video/mp4" />
      </video>

      <div className="overlay"></div>

      <div className="hero-content">
        <h1>Building Future Leaders with Excellence</h1>

        <p>
          Smart Classes • Expert Faculty • Holistic Development
        </p>

        <div className="hero-buttons">
          <button className="apply-btn">
            Apply Now
          </button>

          <button className="tour-btn">
            Virtual Tour
          </button>
        </div>
      </div>

    </section>
  );
}

export default Hero;
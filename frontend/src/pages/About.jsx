import "../styles/about.css";

function About() {
  return (
    <div>

      {/* Hero */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>About Aryen Gurukulam Academy</h1>
          <p>
            Building Future Leaders Through Excellence, Innovation and Values.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="story">
        <div className="container">
          <h2>Our Story</h2>
          <p>
            Aryen Gurukulam Academy is committed to providing quality
            education with modern teaching methods and traditional values.
            We aim to nurture students into confident and responsible citizens.
          </p>
        </div>
      </section>

      {/* Mission Vision */}
      <section className="mission-vision">

        <div className="card">
          <h2>Our Mission</h2>
          <p>
            To provide quality education and holistic development.
          </p>
        </div>

        <div className="card">
          <h2>Our Vision</h2>
          <p>
            To create future leaders with knowledge, values and innovation.
          </p>
        </div>

      </section>

      {/* Achievements */}
      <section className="achievement-section">

        <div className="achievement-card">
          <h1>1500+</h1>
          <p>Students</p>
        </div>

        <div className="achievement-card">
          <h1>50+</h1>
          <p>Expert Teachers</p>
        </div>

        <div className="achievement-card">
          <h1>98%</h1>
          <p>Board Results</p>
        </div>

      </section>

      {/* CTA */}
      <section className="about-cta">
        <h1>Join Aryen Gurukulam Academy Today</h1>

        <button>Apply For Admission</button>

      </section>

    </div>
  );
}

export default About;
import CountUp from "react-countup";
import "../styles/stats.css";
function Stats() {
  return (
    <section className="stats">

      <div className="stat-card">
        <h1>
          <CountUp end={1500} duration={3} />+
        </h1>
        <p>Students</p>
      </div>

      <div className="stat-card">
        <h1>
          <CountUp end={50} duration={3} />+
        </h1>
        <p>Expert Teachers</p>
      </div>

      <div className="stat-card">
        <h1>
          <CountUp end={98} duration={3} />%
        </h1>
        <p>Board Results</p>
      </div>

      <div className="stat-card">
        <h1>
          <CountUp end={25} duration={3} />+
        </h1>
        <p>Years Experience</p>
      </div>

    </section>
  );
}

export default Stats;
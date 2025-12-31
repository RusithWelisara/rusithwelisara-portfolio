import SEO from '../components/SEO'
import './About.css'

const About = () => {
  return (
    <div className="about section">
      <SEO
        title="About"
        description="Learn more about Rusith Heshan, a 16-year-old developer focused on AI, robotics, embedded systems, and large-scale platform design. Discover his philosophy and future goals."
        url="/about"
      />
      <div className="container">
        <h2 className="section-title">About</h2>

        <div className="about-content">
          <div className="about-section">
            <h3 className="subsection-title">Who I Am</h3>
            <p className="about-text">
              I'm <span className="highlight-name">Rusith Heshan</span>, a 16-year-old developer focused on AI,
              robotics, embedded systems, and large-scale platform design.
            </p>
            <p className="about-text">
              While most people my age "learn to code", I build production-grade systems—offline AI assistants,
              Bluetooth mesh networks, physical robots, and full software platforms.
            </p>
          </div>

          <div className="about-section">
            <h3 className="subsection-title">What I'm Aiming For</h3>
            <ul className="goals-list">
              <li>
                <span className="bullet">•</span>
                <div>
                  <strong>Short-term:</strong> Build disruptive AI automation systems and win national competitions.
                </div>
              </li>
              <li>
                <span className="bullet">•</span>
                <div>
                  <strong>Mid-term:</strong> Study Aerospace Engineering or Autonomous Systems at MIT/Stanford
                </div>
              </li>
              <li>
                <span className="bullet">•</span>
                <div>
                  <strong>Long-term:</strong> Inspired by NASA, Tesla & Nvidia - build my own frontier-tech company.
                </div>
              </li>
            </ul>
          </div>

          <div className="about-section">
            <h3 className="subsection-title">Core Philosophy</h3>
            <div className="philosophy-box">
              <p className="philosophy-text">
                I work with one principle:
              </p>
              <blockquote className="quote">
                If technology can be built, I'll build it—even if my hardware is trash and the world thinks it's impossible.
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About


import SEO from '../components/SEO'
import './Contact.css'

const Contact = () => {
  const handleCollaborate = () => {
    window.location.href = 'mailto:rusithwelisara@gmail.com?subject=Collaboration Inquiry'
  }

  return (
    <div className="contact section">
      <SEO
        title="Contact"
        description="Get in touch with Rusith Heshan for collaborations in AI, robotics, and platform architecture. Let's build something incredible together."
        url="/contact"
      />
      <div className="container">
        <h2 className="section-title">Contact</h2>

        <div className="contact-content">
          <div className="contact-intro">
            <p className="contact-text">
              Let's build something incredible together. Whether it's AI systems, robotics projects,
              or platform architecture—I'm always open to collaboration and interesting opportunities.
            </p>
          </div>

          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">✉</div>
              <div className="contact-details">
                <h4 className="contact-label">Email</h4>
                <a href="mailto:rusithwelisara@gmail.com" className="contact-link">
                  rusithwelisara@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">💻</div>
              <div className="contact-details">
                <h4 className="contact-label">GitHub</h4>
                <a
                  href="https://github.com/RusithWelisara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  github.com/RusithWelisara
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">💼</div>
              <div className="contact-details">
                <h4 className="contact-label">LinkedIn</h4>
                <span className="contact-link coming-soon">To be added later</span>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📺</div>
              <div className="contact-details">
                <h4 className="contact-label">YouTube</h4>
                <span className="contact-link coming-soon">To be added later</span>
              </div>
            </div>
          </div>

          <div className="contact-action">
            <button className="btn btn-primary collaborate-btn" onClick={handleCollaborate}>
              Work with Me / Collaborate
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact


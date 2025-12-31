  import { useEffect, useRef } from 'react'
  import { Link } from 'react-router-dom'
  import SEO from '../components/SEO'
  import './Home.css'

  const Home = () => {
    const heroRef = useRef(null)
    const particlesRef = useRef(null)

    useEffect(() => {
      // Create holographic particles effect
      const createParticle = () => {
        if (!particlesRef.current) return

        const particle = document.createElement('div')
        particle.className = 'particle'
        particle.style.left = Math.random() * 100 + '%'
        particle.style.animationDuration = (Math.random() * 3 + 2) + 's'
        particle.style.animationDelay = Math.random() * 2 + 's'
        particlesRef.current.appendChild(particle)

        setTimeout(() => {
          particle.remove()
        }, 5000)
      }

      const interval = setInterval(createParticle, 300)

      return () => clearInterval(interval)
    }, [])

    const handleDownloadResume = () => {
      // Placeholder for resume download
      alert('Resume download coming soon!')
    }

    return (
      <div className="home">
        <SEO
          title="Home"
          description="Portfolio of Rusith Heshan, a 16-year-old AI architect & robotics developer from Sri Lanka. Building real products like offline AI assistants and multi-device automation networks."
          url="/"
        />
        <div className="hero" ref={heroRef}>
          <div className="particles-container" ref={particlesRef}></div>

          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                <span className="gradient-text">Building AI Systems, Robots & Platforms</span>
                <br />
                <span className="highlight">that Exceed Human Limits</span>
              </h1>

              <p className="hero-subline">
                16-year-old systems engineer, AI architect & robotics developer from Sri Lanka.
                I build real working products—from offline AI assistants to multi-device automation
                networks to city-scale IoT prototypes.
              </p>

              <div className="hero-buttons">
                <Link to="/projects" className="btn btn-primary">
                  View My Work
                </Link>
                <button
                  className="btn btn-secondary"
                  onClick={handleDownloadResume}
                >
                  Download Resume
                </button>
              </div>
            </div>

            <div className="hero-visual">
              <div className="holographic-grid"></div>
              <div className="glow-orbs">
                <div className="orb orb-1"></div>
                <div className="orb orb-2"></div>
                <div className="orb orb-3"></div>
              </div>
            </div>
          </div>

          <div className="scroll-indicator">
            <div className="mouse"></div>
            <div className="scroll-arrow"></div>
          </div>
        </div>
      </div>
    )
  }

  export default Home


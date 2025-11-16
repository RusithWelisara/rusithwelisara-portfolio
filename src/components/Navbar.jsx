import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path) => location.pathname === path

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-text">RH</span>
        </Link>
        
        <button 
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <li>
            <Link 
              to="/" 
              className={isActive('/') ? 'active' : ''}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={isActive('/about') ? 'active' : ''}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/projects" 
              className={isActive('/projects') ? 'active' : ''}
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link 
              to="/skills" 
              className={isActive('/skills') ? 'active' : ''}
              onClick={() => setMobileMenuOpen(false)}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link 
              to="/goals" 
              className={isActive('/goals') ? 'active' : ''}
              onClick={() => setMobileMenuOpen(false)}
            >
              Goals
            </Link>
          </li>
          <li>
            <Link 
              to="/blog" 
              className={isActive('/blog') ? 'active' : ''}
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={isActive('/contact') ? 'active' : ''}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar


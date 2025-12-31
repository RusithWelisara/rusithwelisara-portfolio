import SEO from '../components/SEO'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: '⚡ Forge — Next-Gen AI-Powered Game Engine',
      period: '2025–present',
      description: 'A high-performance, AI-assisted 2D/2.5D game engine built for creators who want to ship worlds—not files.',
      longDescription: 'We arere designing it to be fast, modular, AI-native, and creator-augmented with a focus on pixel art universes and multiplayer systems.',
      innovations: [
        'AI-Driven Asset Pipeline: Automatic generation + optimization of sprites, maps, animations, and soundscapes.',
        'Procedural World Fabrication: Real-time level generation inspired by stable world-grammar rules.',
        'Creator Agent Tools: Agents that assist with physics tuning, scene logic, gameplay balancing, and performance debugging.',
        'Modular Engine Core: Drag-and-drop modules for rendering, physics, audio, input, and multiplayer—no monolith bloat.',
        'Web-Native Build System: Export games directly to browser with blazing performance using WebAssembly.'
      ],
      why: 'Current engines are bloated dinosaurs or underpowered toys. We are building something that:',
      points: [
        'a student can build a universe with',
        'an indie studio can ship a hit with',
        'an AI can co-develop inside'
      ],
      status: 'Architecture design → prototype runtime → asset pipeline experiments. Production engine will power our JR Arcade pixel worlds and future multiplayer projects.',
      github: {
        url: 'https://github.com/RusithWelisara/forge.git', // Add your GitHub repo URL here when ready
        status: 'public' // 'public' or 'private'
      },
      demo: {
        url: '', // Add your demo URL here when ready
        status: 'in-progress' // 'published' or 'in-progress'
      }
    },
    {
      id: 2,
      title: '⚡ DupliVerse — AI Operating System for Life',
      period: '2024–present',
      description: 'A personal AI OS that integrates identity, productivity, decision-making, automating tasks outside screens, and learning into a single unified platform.',
      features: [
        'Offline-first architecture',
        'Local-only privacy',
        'Agent networks',
        'Multi-domain reasoning',
        'Daily-life automation logic',
        'Real-time sensor decision engine',
        'Acts like a personal co-pilot for reality'
      ],
      status: 'Early concept → MVP drafting',
      github: {
        url: '',
        status: 'private'
      },
      demo: {
        url: '',
        status: 'in-progress'
      }
    },
    {
      id: 3,
      title: '⚡ JARVIS-Style Offline AI Assistant',
      period: '2024–2025',
      description: 'A fully offline, voice + vision + logic AI assistant powered by cutting-edge open-source technologies.',
      tech: [
        'Whisper.cpp (STT)',
        'Piper (TTS)',
        'Ollama (LLMs)',
        'YOLOv8 (vision)',
        'MediaPipe hand tracking',
        'Python core automation engine'
      ],
      note: 'Includes a head-tracked pseudo-holographic display.',
      github: {
        url: '',
        status: 'public' // Example: public repo
      },
      demo: {
        url: '',
        status: 'in-progress'
      }
    },
    {
      id: 4,
      title: '⚡ Offline Multi-PC Bluetooth & Wi-Fi Mesh Chat App',
      period: '2024',
      description: 'Stealth chat system for computer labs using Bluetooth Low Energy.',
      features: [
        'Decentralized, no server',
        'Multi-user discovery',
        'UUID-based messaging',
        'Portable USB version',
        'Real BLE beacons'
      ],
      github: {
        url: 'https://github.com/RusithWelisara/LAN-Projects',
        status: 'public'
      },
      demo: {
        url: '',
        status: 'in-progress'
      }
    },
    {
      id: 5,
      title: '⚡ StarComposer — Constellation Music Generator',
      period: '2024',
      description: 'Made for United Hacks V5. Canvas + Tone.js to convert drawn star constellations into musical compositions.',
      note: 'Frontend-only, optimised, artistic.',
      github: {
        url: '',
        status: 'public'
      },
      demo: {
        url: '',
        status: 'published' // Example: published demo
      }
    },
    {
      id: 6,
      title: '⚡ NeuroBacktrack — AI Clone-as-a-Service Startup',
      period: '2024',
      description: 'Platform that lets clients create AI clones of themselves with custom personalities, memory and workflows.',
      features: [
        'Clone brain prompt system',
        'Demo interface',
        'Early launch landing page'
      ],
      github: {
        url: '',
        status: 'private'
      },
      demo: {
        url: '',
        status: 'in-progress'
      }
    },
    {
      id: 7,
      title: '⚡ Kairo — Pixel Game Studio',
      period: '2024–present',
      description: 'A next-level pixel game studio designing multiplayer worlds and scalable game universes.',
      note: 'Built with 2 friends as co-founders.',
      github: {
        url: 'https://github.com/RusithWelisara/kairo',
        status: 'public'
      },
      demo: {
        url: 'https://kairogames.netlify.app/',
        status: 'published'
      }
    }
  ]

  const handleGitHubClick = (github) => {
    if (github.status === 'public' && github.url) {
      window.open(github.url, '_blank', 'noopener,noreferrer')
    }
  }

  const handleDemoClick = (demo) => {
    if (demo.status === 'published' && demo.url) {
      window.open(demo.url, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <div className="projects section">
      <SEO
        title="Projects"
        description="Explore the engineering projects of Rusith Heshan, including AI engines, offline assistants, IoT systems, and games. Showcasing innovation in robotics and software."
        url="/projects"
      />
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          Following are the major projects I have done so far...
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-period">{project.period}</span>
              </div>

              <p className="project-description">{project.description}</p>

              {project.longDescription && (
                <p className="project-long-description">{project.longDescription}</p>
              )}

              {project.innovations && (
                <div className="project-section">
                  <h4 className="project-subtitle">Core Innovations</h4>
                  <ul className="project-list">
                    {project.innovations.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.why && (
                <div className="project-section">
                  <h4 className="project-subtitle">Why It Exists</h4>
                  <p className="project-text">{project.why}</p>
                  <ul className="project-list">
                    {project.points?.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.features && (
                <div className="project-section">
                  <ul className="project-list">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.tech && (
                <div className="project-section">
                  <h4 className="project-subtitle">Powered By</h4>
                  <ul className="project-list">
                    {project.tech.map((tech, i) => (
                      <li key={i}>{tech}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.note && (
                <p className="project-note">{project.note}</p>
              )}

              {project.status && (
                <div className="project-status">
                  <span className="status-label">Current Status:</span>
                  <span className="status-text">{project.status}</span>
                </div>
              )}

              <div className="project-cta">
                <button
                  className={`cta-btn cta-github ${project.github?.status === 'public' && project.github?.url ? 'active' : 'disabled'}`}
                  onClick={() => handleGitHubClick(project.github || {})}
                  disabled={project.github?.status !== 'public' || !project.github?.url}
                >
                  <span className="cta-icon">🔗</span>
                  <span className="cta-text">
                    {project.github?.status === 'public' && project.github?.url
                      ? 'View GitHub'
                      : 'Private Project'}
                  </span>
                </button>

                <button
                  className={`cta-btn cta-demo ${project.demo?.status === 'published' && project.demo?.url ? 'active' : 'disabled'}`}
                  onClick={() => handleDemoClick(project.demo || {})}
                  disabled={project.demo?.status !== 'published' || !project.demo?.url}
                >
                  <span className="cta-icon">🚀</span>
                  <span className="cta-text">
                    {project.demo?.status === 'published' && project.demo?.url
                      ? 'View Demo'
                      : 'Development in Progress'}
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects


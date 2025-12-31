import SEO from '../components/SEO'
import './Skills.css'

const Skills = () => {
  const technicalSkills = {
    'AI/ML': ['LLMs', 'Whisper', 'TTS systems', 'YOLOv8', 'MediaPipe'],
    'Robotics': ['Arduino', 'actuators', 'motors', 'embedded logic', 'sensor systems'],
    'Software': ['Python', 'JavaScript', 'HTML/CSS', 'Node', 'APIs', 'automation'],
    'Systems & Architecture': ['Offline-first design', 'modular agent systems', 'multi-device networks'],
    'Other': ['Graphic design', 'video editing', 'UI/UX']
  }

  const knownFor = [
    'Building large systems with minimal hardware',
    'Aggressive prototyping',
    'High-level architecture thinking at a young age',
    'Combining robotics + AI + platform design'
  ]

  return (
    <div className="skills section">
      <SEO
        title="Skills"
        description="Technical expertise of Rusith Heshan in AI/ML, Robotics, Software Engineering, and System Architecture. Discover his unique approach to building complex systems."
        url="/skills"
      />
      <div className="container">
        <h2 className="section-title">Skills</h2>

        <div className="skills-content">
          <div className="skills-section">
            <h3 className="subsection-title">Technical Skills</h3>
            <div className="skills-grid">
              {Object.entries(technicalSkills).map(([category, items], index) => (
                <div
                  key={category}
                  className="skill-category"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h4 className="category-title">{category}</h4>
                  <div className="skill-tags">
                    {items.map((skill, i) => (
                      <span key={i} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-section">
            <h3 className="subsection-title">What I'm Known For</h3>
            <div className="known-for-list">
              {knownFor.map((item, index) => (
                <div
                  key={index}
                  className="known-for-item"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="item-icon">▸</div>
                  <p className="item-text">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills


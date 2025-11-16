import './Goals.css'

const Goals = () => {
  const goals2025 = [
    'Launch first working AI automation products',
    'Build 2–3 strong public case studies',
    'Rank top in class for O/L 2025',
    'Build Forge — AI powered "game-changing" game engine'
  ]

  const longTermGoals = [
    'Enter MIT/Stanford for aerospace/autonomous systems',
    'Build a billion-dollar frontier-tech company',
    'Work on planetary-scale systems (AI, robotics, aerospace)'
  ]

  return (
    <div className="goals section">
      <div className="container">
        <h2 className="section-title">Goals</h2>

        <div className="goals-content">
          <div className="goals-section">
            <h3 className="subsection-title">2025 Goals</h3>
            <div className="goals-list">
              {goals2025.map((goal, index) => (
                <div 
                  key={index} 
                  className="goal-item"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="goal-number">{index + 1}</div>
                  <p className="goal-text">{goal}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="goals-section">
            <h3 className="subsection-title">Long-Term</h3>
            <div className="goals-list long-term">
              {longTermGoals.map((goal, index) => (
                <div 
                  key={index} 
                  className="goal-item long-term-item"
                  style={{ animationDelay: `${(goals2025.length + index) * 0.1}s` }}
                >
                  <div className="goal-icon">🚀</div>
                  <p className="goal-text">{goal}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Goals


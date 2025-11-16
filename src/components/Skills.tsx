import { Brain, Cpu, Code, Layers, Palette, Zap } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Brain,
      title: 'AI/ML',
      skills: ['LLMs', 'Whisper', 'TTS systems', 'YOLOv8', 'MediaPipe'],
      color: 'blue'
    },
    {
      icon: Cpu,
      title: 'Robotics',
      skills: ['Arduino', 'Actuators', 'Motors', 'Embedded logic', 'Sensor systems'],
      color: 'cyan'
    },
    {
      icon: Code,
      title: 'Software',
      skills: ['Python', 'JavaScript', 'HTML/CSS', 'Node.js', 'APIs', 'Automation'],
      color: 'green'
    },
    {
      icon: Layers,
      title: 'Systems & Architecture',
      skills: ['Offline-first design', 'Modular agent systems', 'Multi-device networks'],
      color: 'purple'
    },
    {
      icon: Palette,
      title: 'Creative',
      skills: ['Graphic design', 'Video editing', 'UI/UX'],
      color: 'orange'
    }
  ];

  const knownFor = [
    'Building large systems with minimal hardware',
    'Aggressive prototyping',
    'High-level architecture thinking at a young age',
    'Combining robotics + AI + platform design'
  ];

  const colorMap: Record<string, string> = {
    blue: 'from-blue-500 to-blue-600',
    cyan: 'from-cyan-500 to-cyan-600',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600',
    orange: 'from-orange-500 to-orange-600'
  };

  return (
    <section id="skills" className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-16 text-center">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 bg-gradient-to-br ${colorMap[category.color]} rounded-lg`}>
                    <Icon className="text-white" size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-blue-900 to-cyan-900 p-8 rounded-xl border border-blue-700">
          <div className="flex items-center gap-3 mb-6">
            <Zap className="text-yellow-400" size={28} />
            <h3 className="text-2xl font-bold text-white">What I'm Known For</h3>
          </div>
          <ul className="space-y-3">
            {knownFor.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-200">
                <span className="text-yellow-400 font-bold">→</span>
                <span className="text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

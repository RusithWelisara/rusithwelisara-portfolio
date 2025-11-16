import { Gamepad2, Brain, Mic, Radio, Star, Users, Palette } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      icon: Gamepad2,
      title: 'QuantumCanvas',
      subtitle: 'Next-Gen AI-Powered Game Engine',
      period: '2025–present',
      description: 'A high-performance, AI-assisted 2D/2.5D game engine built for creators who want to ship worlds—not files.',
      innovations: [
        'AI-Driven Asset Pipeline: Automatic generation + optimization',
        'Procedural World Fabrication: Real-time level generation',
        'Creator Agent Tools: AI assists with physics, logic, balancing',
        'Modular Engine Core: Drag-and-drop architecture',
        'Web-Native Build System: Export to browser via WebAssembly'
      ],
      status: 'Architecture design → prototype runtime',
      color: 'blue'
    },
    {
      icon: Brain,
      title: 'DupliVerse',
      subtitle: 'AI Operating System for Life',
      period: '2024–present',
      description: 'A personal AI OS that integrates identity, productivity, decision-making, automating tasks outside screens, and learning into a single unified platform.',
      innovations: [
        'Offline-first architecture with local-only privacy',
        'Agent networks for multi-domain reasoning',
        'Daily-life automation logic',
        'Real-time sensor decision engine',
        'Acts like a personal co-pilot for reality'
      ],
      status: 'Early concept → MVP drafting',
      color: 'cyan'
    },
    {
      icon: Mic,
      title: 'JARVIS-Style AI Assistant',
      subtitle: 'Fully Offline Voice + Vision System',
      period: '2024–2025',
      description: 'A fully offline, voice + vision + logic AI assistant with head-tracked pseudo-holographic display.',
      innovations: [
        'Whisper.cpp for speech-to-text',
        'Piper for text-to-speech',
        'Ollama for local LLMs',
        'YOLOv8 for computer vision',
        'MediaPipe hand tracking',
        'Python core automation engine'
      ],
      status: 'Fully functional prototype',
      color: 'purple'
    },
    {
      icon: Radio,
      title: 'Bluetooth Mesh Chat App',
      subtitle: 'Offline Multi-PC Communication',
      period: '2024',
      description: 'Stealth chat system for computer labs using Bluetooth Low Energy.',
      innovations: [
        'Decentralized, no server required',
        'Multi-user discovery',
        'UUID-based messaging',
        'Portable USB version',
        'Real BLE beacons'
      ],
      status: 'Complete & deployed',
      color: 'green'
    },
    {
      icon: Star,
      title: 'StarComposer',
      subtitle: 'Constellation Music Generator',
      period: '2024',
      description: 'Made for United Hacks V5. Canvas + Tone.js to convert drawn star constellations into musical compositions.',
      innovations: [
        'Frontend-only architecture',
        'Real-time audio synthesis',
        'Artistic visualization',
        'Optimized performance'
      ],
      status: 'Hackathon winner',
      color: 'yellow'
    },
    {
      icon: Users,
      title: 'NeuroBacktrack',
      subtitle: 'AI Clone-as-a-Service Startup',
      period: '2024',
      description: 'Platform that lets clients create AI clones of themselves with custom personalities, memory and workflows.',
      innovations: [
        'Clone brain prompt system',
        'Custom personality modeling',
        'Memory and workflow integration',
        'Demo interface built',
        'Early launch landing page'
      ],
      status: 'Early launch phase',
      color: 'red'
    },
    {
      icon: Palette,
      title: 'Kairo',
      subtitle: 'Pixel Game Studio',
      period: '2024–present',
      description: 'A next-level pixel game studio designing multiplayer worlds and scalable game universes.',
      innovations: [
        'Co-founded with 2 friends',
        'Multiplayer world design',
        'Scalable universe architecture',
        'Pixel art focus'
      ],
      status: 'Active development',
      color: 'orange'
    }
  ];

  const colorMap: Record<string, string> = {
    blue: 'from-blue-500 to-blue-600',
    cyan: 'from-cyan-500 to-cyan-600',
    purple: 'from-purple-500 to-purple-600',
    green: 'from-green-500 to-green-600',
    yellow: 'from-yellow-500 to-yellow-600',
    red: 'from-red-500 to-red-600',
    orange: 'from-orange-500 to-orange-600'
  };

  return (
    <section id="projects" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 text-center">
          Featured Projects
        </h2>
        <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
          Production-grade systems that push the boundaries of what's possible
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="bg-gray-800 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 overflow-hidden group hover:shadow-2xl"
              >
                <div className={`h-2 bg-gradient-to-r ${colorMap[project.color]}`}></div>
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 bg-gradient-to-br ${colorMap[project.color]} rounded-lg`}>
                      <Icon className="text-white" size={28} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                      <p className="text-gray-400 text-sm">{project.subtitle}</p>
                      <p className="text-gray-500 text-xs mt-1">{project.period}</p>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-400 mb-2">Core Innovations:</p>
                    <ul className="space-y-1">
                      {project.innovations.map((innovation, i) => (
                        <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          <span>{innovation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-gray-700">
                    <p className="text-sm text-gray-500">
                      <span className="font-semibold text-gray-400">Status:</span> {project.status}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

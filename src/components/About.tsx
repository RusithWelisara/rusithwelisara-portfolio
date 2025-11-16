import { User, Target, Lightbulb } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-16 text-center">
          About Me
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
              <User className="text-white" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Who I Am</h3>
            <p className="text-gray-300 leading-relaxed">
              I'm Rusith Heshan, a 16-year-old developer focused on AI, robotics, embedded systems, and large-scale platform design.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              While most people my age "learn to code", I build production-grade systems—offline AI assistants, Bluetooth mesh networks, physical robots, and full software platforms.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 transform hover:scale-105">
            <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center mb-6">
              <Target className="text-white" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">What I'm Aiming For</h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <p className="font-semibold text-blue-400">Short-term:</p>
                <p>Build disruptive AI automation systems and win national competitions.</p>
              </div>
              <div>
                <p className="font-semibold text-cyan-400">Mid-term:</p>
                <p>Study Aerospace Engineering or Autonomous Systems at MIT/Stanford.</p>
              </div>
              <div>
                <p className="font-semibold text-white">Long-term:</p>
                <p>Inspired by NASA, Tesla & Nvidia—build my own frontier-tech company.</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 hover:border-yellow-500 transition-all duration-300 transform hover:scale-105">
            <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center mb-6">
              <Lightbulb className="text-white" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Core Philosophy</h3>
            <p className="text-gray-300 leading-relaxed">
              I work with one principle:
            </p>
            <p className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mt-4 leading-relaxed">
              If technology can be built, I'll build it—even if my hardware is trash and the world thinks it's impossible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

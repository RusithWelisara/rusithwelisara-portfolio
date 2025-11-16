import { Calendar, Rocket, Building2 } from 'lucide-react';

export default function Goals() {
  return (
    <section id="goals" className="py-24 bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-16 text-center">
          Goals & Vision
        </h2>

        <div className="space-y-8">
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-8 rounded-xl border border-blue-700 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-600 rounded-lg">
                <Calendar className="text-white" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">2025 Goals</h3>
                <ul className="space-y-3 text-gray-200">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold mt-1">•</span>
                    <span>Launch first working AI automation products</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold mt-1">•</span>
                    <span>Build 2–3 strong public case studies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold mt-1">•</span>
                    <span>Rank top in class for O/L 2025</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold mt-1">•</span>
                    <span>Build QuantumCanvas — AI powered game-changing game engine</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-900 to-cyan-800 p-8 rounded-xl border border-cyan-700 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-cyan-600 rounded-lg">
                <Rocket className="text-white" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Long-Term Vision</h3>
                <ul className="space-y-3 text-gray-200">
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 font-bold mt-1">→</span>
                    <span>Enter MIT/Stanford for aerospace/autonomous systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 font-bold mt-1">→</span>
                    <span>Build a billion-dollar frontier-tech company</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 font-bold mt-1">→</span>
                    <span>Work on planetary-scale systems (AI, robotics, aerospace)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900 to-purple-800 p-8 rounded-xl border border-purple-700 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-600 rounded-lg">
                <Building2 className="text-white" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Inspiration</h3>
                <p className="text-gray-200 text-lg leading-relaxed">
                  Inspired by NASA, Tesla & Nvidia — organizations that push the boundaries of what's possible. My goal is to build systems that operate at planetary scale and redefine what technology can achieve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

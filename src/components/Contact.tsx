import { Mail, Github, Linkedin, Youtube, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 text-center">
          Let's Connect
        </h2>
        <p className="text-xl text-gray-400 text-center mb-16">
          Open to collaborations, discussions, and opportunities
        </p>

        <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <a
              href="mailto:rusithwelisara@gmail.com"
              className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 group"
            >
              <div className="p-3 bg-blue-600 rounded-lg group-hover:scale-110 transition-transform">
                <Mail className="text-white" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-white font-semibold">rusithwelisara@gmail.com</p>
              </div>
            </a>

            <a
              href="https://github.com/RusithWelisara"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg border border-gray-700 hover:border-purple-500 transition-all duration-300 group"
            >
              <div className="p-3 bg-purple-600 rounded-lg group-hover:scale-110 transition-transform">
                <Github className="text-white" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-400">GitHub</p>
                <p className="text-white font-semibold">RusithWelisara</p>
              </div>
            </a>

            <a
              href="#"
              className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300 group opacity-50 cursor-not-allowed"
            >
              <div className="p-3 bg-cyan-600 rounded-lg">
                <Linkedin className="text-white" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-400">LinkedIn</p>
                <p className="text-white font-semibold">Coming Soon</p>
              </div>
            </a>

            <a
              href="#"
              className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg border border-gray-700 hover:border-red-500 transition-all duration-300 group opacity-50 cursor-not-allowed"
            >
              <div className="p-3 bg-red-600 rounded-lg">
                <Youtube className="text-white" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-400">YouTube</p>
                <p className="text-white font-semibold">Coming Soon</p>
              </div>
            </a>
          </div>

          <div className="pt-6 border-t border-gray-700 text-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 mx-auto shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/70 transform hover:scale-105">
              <Send size={20} />
              Work with Me / Collaborate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

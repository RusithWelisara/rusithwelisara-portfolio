import { BookOpen, Cpu, Lightbulb, Code, PenTool } from 'lucide-react';

export default function Blog() {
  const categories = [
    {
      icon: Lightbulb,
      title: 'AI Experiments',
      description: 'Deep dives into AI research and practical implementations',
      color: 'yellow'
    },
    {
      icon: Cpu,
      title: 'Robotics Devlogs',
      description: 'Building physical systems and embedded solutions',
      color: 'blue'
    },
    {
      icon: BookOpen,
      title: 'Learning Logs',
      description: 'Documenting my journey and lessons learned',
      color: 'green'
    },
    {
      icon: Code,
      title: 'System Architecture Notes',
      description: 'Thoughts on building scalable, robust systems',
      color: 'purple'
    },
    {
      icon: PenTool,
      title: 'Product Design Philosophy',
      description: 'Principles behind building real products',
      color: 'cyan'
    }
  ];

  const samplePosts = [
    'Building AI With Just an i3 Laptop',
    'Why Offline AI Matters More Than Cloud AI',
    'Early Thoughts on DupliVerse OS',
    'How I Designed My Bluetooth Mesh Network'
  ];

  const colorMap: Record<string, string> = {
    yellow: 'from-yellow-500 to-yellow-600',
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600',
    cyan: 'from-cyan-500 to-cyan-600'
  };

  const borderColorMap: Record<string, string> = {
    yellow: 'border-yellow-500',
    blue: 'border-blue-500',
    green: 'border-green-500',
    purple: 'border-purple-500',
    cyan: 'border-cyan-500'
  };

  return (
    <section id="blog" className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 text-center">
          Blog & Insights
        </h2>
        <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
          Documenting my journey building AI systems, robots, and platforms
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className={`bg-gray-900 p-6 rounded-xl border ${borderColorMap[category.color]} hover:shadow-xl transition-all duration-300`}
              >
                <div className={`p-3 bg-gradient-to-br ${colorMap[category.color]} rounded-lg w-fit mb-4`}>
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                <p className="text-gray-400 text-sm">{category.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gray-900 p-8 rounded-xl border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <BookOpen className="text-blue-400" size={28} />
            Upcoming Posts
          </h3>
          <ul className="space-y-4">
            {samplePosts.map((post, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-gray-300 text-lg hover:text-white transition-colors cursor-pointer"
              >
                <span className="text-blue-400 font-bold mt-1">→</span>
                <span>{post}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 pt-6 border-t border-gray-700">
            <p className="text-gray-400 text-center">More content coming soon...</p>
          </div>
        </div>
      </div>
    </section>
  );
}

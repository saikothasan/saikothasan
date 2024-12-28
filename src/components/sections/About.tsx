import { motion } from 'framer-motion';
import { Code2, Palette, Terminal } from 'lucide-react';

export function About() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="max-w-4xl"
      >
        <h2 className="text-4xl font-bold text-white mb-8 text-center">About Me</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <SkillCard key={skill.title} {...skill} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function SkillCard({ icon: Icon, title, description }: Skill) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gray-800 p-6 rounded-lg"
    >
      <Icon className="w-8 h-8 text-white mb-4" />
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
}

interface Skill {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
}

const skills: Skill[] = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "Building responsive and interactive web applications with modern frameworks"
  },
  {
    icon: Terminal,
    title: "Backend Development",
    description: "Creating robust server-side solutions and APIs"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Designing intuitive and beautiful user interfaces"
  }
];

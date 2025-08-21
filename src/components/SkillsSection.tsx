import { Code, Globe, Wrench, Monitor, Zap, BarChart } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming & Development",
      skills: ["Python", "C", "Data Structures", "Algorithms"]
    },
    {
      icon: Globe,
      title: "Web Development",
      skills: ["HTML", "Streamlit"]
    },
    {
      icon: Wrench,
      title: "Tools & Platforms",
      skills: ["VS Code", "Jupyter Notebook", "GitHub"]
    },
    {
      icon: Monitor,
      title: "Operating Systems",
      skills: ["Windows"]
    },
    {
      icon: Zap,
      title: "Core Strengths",
      skills: ["Problem-Solving", "Performance Optimization"]
    },
    {
      icon: BarChart,
      title: "Data & Analytics",
      skills: ["Data Analysis", "Visualization"]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            A comprehensive set of technical skills and tools that I use to build innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="project-card p-6 group hover:bg-accent/5"
            >
              <div className="flex items-center mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mr-4 group-hover:bg-accent group-hover:text-white transition-smooth">
                  <category.icon size={24} className="text-accent group-hover:text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="skill-tag"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
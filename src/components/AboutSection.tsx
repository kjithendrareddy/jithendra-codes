import { User, Target, Code, Brain } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Brain,
      title: "AI & ML Focus",
      description: "Specializing in Artificial Intelligence and Machine Learning with hands-on experience"
    },
    {
      icon: Code,
      title: "Problem Solver",
      description: "Strong foundation in Data Structures, Algorithms, and efficient coding practices"
    },
    {
      icon: Target,
      title: "Performance Driven",
      description: "Focused on performance optimization and building scalable solutions"
    },
    {
      icon: User,
      title: "Data-Driven",
      description: "Passionate about building data-driven applications and intuitive dashboards"
    }
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-600">
              <p className="text-lg leading-relaxed">
                I am <span className="font-semibold text-primary">Kindinti Jithendra Reddy</span>, 
                a highly motivated engineering student specializing in Artificial Intelligence and 
                Machine Learning with a strong foundation in Data Structures, Algorithms, and Problem-Solving.
              </p>
              <p className="text-lg leading-relaxed">
                I have hands-on experience in Python, C, and Machine Learning, focusing on performance 
                optimization and scalable solutions. My passion lies in building data-driven applications 
                and solving real-world software challenges through efficient coding and intuitive dashboards.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="skill-tag">Python</span>
              <span className="skill-tag">Machine Learning</span>
              <span className="skill-tag">Data Analysis</span>
              <span className="skill-tag">Problem Solving</span>
              <span className="skill-tag">Algorithms</span>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="project-card p-6 text-center group hover:bg-accent/5"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mb-4 group-hover:bg-accent group-hover:text-white transition-smooth">
                  <highlight.icon size={24} className="text-accent group-hover:text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{highlight.title}</h3>
                <p className="text-gray-600 text-sm">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
import { ExternalLink, Github, Calendar, TrendingUp, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Youth League Statistical Tracker",
      period: "May 2024 – Jun 2024",
      description: "Built an interactive IPL Data Analysis Dashboard using Streamlit with comprehensive statistical analysis and visualizations.",
      features: [
        "Integrated multiple IPL seasons' data to analyze team performance",
        "Dynamic viewing of qualified teams, most wins, and top-performing players",
        "Data visualizations with Matplotlib for clear insights",
        "Player stats and points tables analysis"
      ],
      tags: ["Python", "Streamlit", "Data Analysis", "Matplotlib", "Sports Analytics"],
      icon: BarChart3,
      gradient: "from-blue-500 to-teal-500"
    },
    {
      title: "Black Friday Sales Prediction",
      period: "Oct 2024 – Jan 2025",
      description: "Developed a comprehensive Sales Prediction Dashboard with machine learning capabilities for accurate sales forecasting.",
      features: [
        "Implemented RandomForestRegressor for sales forecasting",
        "Provided insights with predicted sales and recommendations",
        "Created seamless and intuitive user dashboard interface",
        "Real-time visualizations and analytics"
      ],
      tags: ["Python", "Machine Learning", "Streamlit", "RandomForest", "Predictive Analytics"],
      icon: TrendingUp,
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            Real-world applications demonstrating my expertise in data analysis, machine learning, and dashboard development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card p-8 group"
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient} text-white mr-4`}>
                    <project.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{project.title}</h3>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Calendar size={16} className="mr-1" />
                      {project.period}
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Project Features */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-gray-600 text-sm">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="skill-tag text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-gray-600 hover:text-accent border-gray-300 hover:border-accent"
                >
                  <Github size={16} className="mr-2" />
                  View Code
                </Button>
                <Button
                  size="sm"
                  className="bg-accent hover:bg-accent/90 text-white"
                >
                  <ExternalLink size={16} className="mr-2" />
                  Live Demo
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Want to see more of my work?</p>
          <Button
            variant="outline"
            className="px-8 py-3 text-primary border-primary hover:bg-primary hover:text-white"
          >
            <Github className="mr-2" size={20} />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
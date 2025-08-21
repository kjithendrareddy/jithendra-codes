import { GraduationCap, MapPin, Calendar, Award, BookOpen, Users } from 'lucide-react';

const EducationSection = () => {
  const achievements = [
    "Built machine learning dashboards for predictive analytics and statistical insights",
    "Strengthened expertise in Data Structures, Algorithms, and coding challenges",
    "Applied data-driven solutions to practical problems"
  ];

  const certifications = [
    {
      title: "Python Programming",
      provider: "EZTS",
      date: "May 2024",
      icon: BookOpen
    },
    {
      title: "Data Structures and Algorithms",
      provider: "Infosys Springboard",
      date: "March 2024",
      icon: BookOpen
    }
  ];

  const activities = [
    {
      title: "Workshop on HTML & CSS",
      location: "Ballari, India",
      date: "Oct 2024",
      skills: ["Web Design", "Responsive Design", "Modern Styling"],
      description: "Gained hands-on experience in web design and styling, learning layout structuring and modern styling techniques."
    }
  ];

  return (
    <section id="education" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Education & Growth</h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <div className="project-card p-8 max-w-4xl mx-auto">
            <div className="flex items-start mb-6">
              <div className="p-3 rounded-lg bg-accent/10 text-accent mr-6">
                <GraduationCap size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Bachelor of Engineering in Artificial Intelligence and Machine Learning
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-600 mb-4">
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-2" />
                    BITM, Ballari
                  </div>
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    2022 – Present
                  </div>
                  <div className="flex items-center">
                    <Award size={16} className="mr-2" />
                    CGPA: 8.10
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Pursuing comprehensive education in AI and ML with focus on practical applications, 
                  algorithm optimization, and real-world problem solving.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Award className="mr-3 text-accent" size={24} />
              Achievements
            </h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-600">{achievement}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <BookOpen className="mr-3 text-accent" size={24} />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="project-card p-4">
                  <div className="flex items-center">
                    <div className="p-2 rounded-lg bg-accent/10 text-accent mr-4">
                      <cert.icon size={20} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{cert.title}</h4>
                      <p className="text-gray-600 text-sm">{cert.provider} • {cert.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Extracurricular Activities */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center justify-center">
            <Users className="mr-3 text-accent" size={24} />
            Extracurricular Activities
          </h3>
          
          {activities.map((activity, index) => (
            <div key={index} className="project-card p-6 max-w-4xl mx-auto">
              <div className="text-center mb-4">
                <h4 className="text-xl font-bold text-gray-900 mb-2">{activity.title}</h4>
                <div className="flex items-center justify-center gap-4 text-gray-600 text-sm mb-4">
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-1" />
                    {activity.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    {activity.date}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{activity.description}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {activity.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
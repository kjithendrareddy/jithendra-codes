import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const handleDownloadResume = () => {
    // Direct download link from Google Drive
    const resumeUrl = 'https://drive.google.com/uc?export=download&id=15s9CITc2zyMa86B0o6jazZR9H5sos87Q';
    window.open(resumeUrl, '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          {/* Main Heading */}
          <div className="fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
              Kindinti Jithendra Reddy
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-teal mb-6">
              AI & ML Enthusiast | Problem Solver | Aspiring Software Engineer
            </h2>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-12 fade-in-delay-1">
              "Transforming ideas into scalable and data-driven solutions"
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 fade-in-delay-2">
            <Button
              onClick={handleDownloadResume}
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg font-medium teal-shadow hover-scale"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-medium transition-smooth"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Connect
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 fade-in-delay-3">
            <a
              href="https://github.com/kjithendrarreddy"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-primary transition-smooth hover-scale"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-primary transition-smooth hover-scale"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:k.jithendra9014@gmail.com"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-primary transition-smooth hover-scale"
              aria-label="Email Contact"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
import React from 'react';
import { Target, Rocket, Cpu, Code, Users, Video, PenTool, DollarSign, Star } from 'lucide-react';
import { Briefcase, Award, Linkedin } from 'lucide-react';
import '/src/fonts/fonts.css';

const About = () => {
  const technicalDomains = [
    { icon: <Target className="h-6 w-6 text-orange-500" />, title: "Aerodynamics", description: "Focuses on the study and optimization of airflow over aircraft structures." },
    { icon: <Rocket className="h-6 w-6 text-orange-500" />, title: "CAD/CAM/CAE", description: "Utilizes advanced software tools for computer-aided design, manufacturing, and engineering analysis." },
    { icon: <Cpu className="h-6 w-6 text-orange-500" />, title: "Avionics (RC + AI/ML)", description: "Developing intelligent control systems and remote-controlled technologies for aerospace applications." },
    { icon: <Code className="h-6 w-6 text-orange-500" />, title: "Web Development", description: "Building and maintaining the club's digital presence through modern web technologies." },
  ];

  const nonTechnicalDomains = [
    { icon: <DollarSign className="h-6 w-6 text-orange-500" />, title: "PR, Management & Finance", description: "Handling public relations, financial planning, and overall management of club activities." },
    { icon: <Video className="h-6 w-6 text-orange-500" />, title: "Graphic Design & Videography", description: "Creating engaging visual content and documenting club activities through media." },
    { icon: <PenTool className="h-6 w-6 text-orange-500" />, title: "Content Writing", description: "Developing technical and promotional content for various club initiatives." },
  ];

  const projects = [
    {
      title: "Autonomous Drone System",
      description: "Developed a fully autonomous drone capable of complex navigation and obstacle avoidance.",
      status: "Completed",
      year: "2023",
      images: [
        "https://images.unsplash.com/photo-1557800636-894a64c1696f",
        "https://images.unsplash.com/photo-1566041510639-8d95a2490bfb"
      ]
    }
  ];
  const facultyadvisor = [
    {
      name: "Anisha Ekka",
      branch: "Assistant Professor",
      image: "/src/images/faculty-advisor.jpg",
      currentRole: "Dept. of Production Engineering",
      contribution: "Guided students in pioneering innovative projects and academic excellence.",
      linkedin: "https://linkedin.com/in/anisha-ekka-28063379"
    
    }
  ]
  return (
    <div className="pt-20 pb-16">
      {/* Mission Statement */}
      <div className="bg-gradient-to-r from-black via-black-900 to-black py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl mokoto-text text-orange-500 mb-8 text-center tracking-[0.15em]">About Aerotech</h1>
          <div className="bg-black/50 p-8 rounded-lg border border-orange-500/20">
            <h2 className="text-2xl font-semibold text-white mb-4">About Us</h2>
            <p className="text-gray-300 leading-relaxed">
            Welcome to AeroTech!  The official aviation club of VSSUT Burla. We are a passionate group of aviation enthusiasts dedicated to the world of UAV and drones. Our club is a place where like-minded individuals can share their innovative ideas and use their theoretical and practical knowledge towards innovation in the field of aviation.
On 3rd November 2021, a group of 11 aviation enthusiasts at VSSUT Burla gathered with a shared vision, and AeroTech was formed. Since its inception our club has participated in numerous competitions across India, delivering outstanding performances against all odds. Now we stand with more than 100 enthusiasts. 
Guided by our motto, "Fly Above and Beyond" AeroTech offers unparalleled opportunities for practical learning, networking, and professional growth in different technical & non-technical fields within the club

            </p>
          </div>
        </div>
      </div>
      {/* Faculty advisor */}
      <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl mokoto-text text-orange-500 mb-12 text-center tracking-[0.15em]">Faculty Advisor</h1>
        
        <div className=" flex justify-center items-center mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 mb-6">
          {facultyadvisor.map((facul, index) => (
            <div key={index} className="bg-black/50 rounded-lg overflow-hidden border border-orange-500/20 hover:border-orange-500/40 transition-all transform hover:-translate-y-1">
              <img 
                src={facul.image} 
                alt={facul.name}
                className="w-full h-80 object-cover rounded"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-white mb-1">{facul.name}</h2>
                
                <p className="text-orange-500 mb-3">{facul.branch}</p>
                
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <Briefcase className="h-4 w-4 text-orange-500 mt-0.5" />
                    <p className="text-gray-300 text-sm">{facul.currentRole}</p>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <Award className="h-4 w-4 text-orange-500 mt-0.5" />
                    <p className="text-gray-300 text-sm">{facul.contribution}</p>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <Linkedin className="h-4 w-4 text-orange-500 mt-0.5" />
                    <a href={facul.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm">LinkedIn Profile</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
      {/* Technical Domains */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl mokoto-text text-orange-500 mb-12 text-center tracking-[0.15em]">Technical Domains</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technicalDomains.map((domain, index) => (
            <div key={index} className="bg-black/50 p-6 rounded-lg border border-orange-500/20 hover:border-orange-500/40 transition-colors">
              <div className="mb-4">{domain.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{domain.title}</h3>
              <p className="text-gray-400">{domain.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Non-Technical Domains */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl mokoto-text text-orange-500 mb-8 text-center tracking-[0.15em]">Non-Technical Domains</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {nonTechnicalDomains.map((domain, index) => (
            <div key={index} className="bg-black/50 p-6 rounded-lg border border-orange-500/20 hover:border-orange-500/40 transition-colors">
              <div className="mb-4">{domain.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{domain.title}</h3>
              <p className="text-gray-400">{domain.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Notable Projects */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl mokoto-text text-orange-500 mb-8 text-center tracking-[0.15em]">Notable Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-black/50 rounded-lg overflow-hidden border border-orange-500/20 hover:border-orange-500/40 transition-all transform hover:-translate-y-1">
              <div className="relative overflow-hidden group h-48">
                <div className="absolute inset-0 flex transition-transform duration-500 ease-in-out group-hover:translate-x-[-100%]">
                  {project.images.map((img, imgIndex) => (
                    <img key={imgIndex} src={img} alt={project.title} className="w-full h-48 object-cover shrink-0" />
                  ))}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <Star className="h-6 w-6 text-orange-500 mr-2" />
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                </div>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-orange-500">{project.status}</span>
                  <span className="text-gray-400">{project.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

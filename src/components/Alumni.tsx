import React from 'react';
import { Briefcase, Award, Linkedin } from 'lucide-react';

const Alumni = () => {
  const alumni = [
    {
      name: "Robert Martinez",
      batch: "2021-2022",
      branch: "Aerospace Engineering",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      currentRole: "Aerospace Engineer at SpaceX",
      contribution: "Led the development of the club's first successful drone project",
      linkedin: "https://linkedin.com/in/robertmartinez"
    },
    {
      name: "Amanda Lee",
      batch: "2021-2022",
      branch: "Mechanical Engineering",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      currentRole: "Research Scientist at NASA",
      contribution: "Established the club's research division and mentorship program",
      linkedin: "https://linkedin.com/in/amandalee"
    },
    {
      name: "Chris Thompson",
      batch: "2021-2022",
      branch: "Electrical Engineering",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      currentRole: "Senior Design Engineer at Boeing",
      contribution: "Initiated the annual technical symposium",
      linkedin: "https://linkedin.com/in/christhompson"
    },
    {
      name: "Jessica Wang",
      batch: "2020-2021",
      branch: "Computer Science",
      image: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8",
      currentRole: "Software Engineer at Google",
      contribution: "Developed the club’s first AI-powered simulation software",
      linkedin: "https://linkedin.com/in/jessicawang"
    },
    {
      name: "Michael Brown",
      batch: "2019-2020",
      branch: "Civil Engineering",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      currentRole: "Project Manager at Tesla",
      contribution: "Designed sustainable infrastructure projects for the club",
      linkedin: "https://linkedin.com/in/michaelbrown"
    }
  ];

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl mokoto-text text-orange-500 mb-12 text-center tracking-[0.15em]">Notable Alumni</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {alumni.map((alum, index) => (
            <div key={index} className="bg-black/50 rounded-lg overflow-hidden border border-orange-500/20 hover:border-orange-500/40 transition-all transform hover:-translate-y-1">
              <img 
                src={alum.image} 
                alt={alum.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-white mb-1">{alum.name}</h2>
                <p className="text-orange-500 mb-1">{alum.batch}</p>
                <p className="text-gray-300 mb-3">{alum.branch}</p>
                
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <Briefcase className="h-4 w-4 text-orange-500 mt-0.5" />
                    <p className="text-gray-300 text-sm">{alum.currentRole}</p>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <Award className="h-4 w-4 text-orange-500 mt-0.5" />
                    <p className="text-gray-300 text-sm">{alum.contribution}</p>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <Linkedin className="h-4 w-4 text-orange-500 mt-0.5" />
                    <a href={alum.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm">LinkedIn Profile</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Alumni;

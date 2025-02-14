import React from 'react';
import { Book, ClipboardList, FileText, Trophy } from 'lucide-react';

const Induction = () => {
  const resources = [
    {
      title: "Registration for Induction",
      icon: <ClipboardList className="h-6 w-6 text-orange-500" />, 
      description: "Register for the induction process.",
      action: () => window.location.href = "https://admin-provided-link.com"
    },
    {
      title: "Study Materials",
      icon: <Book className="h-6 w-6 text-orange-500" />, 
      description: "Access curated learning resources and practice materials.",
      action: () => window.location.href = "https://drive.google.com/example-link"
    },
    {
      title: "Online Test",
      icon: <FileText className="h-6 w-6 text-orange-500" />, 
      description: "Access the online test portal.",
      action: () => window.location.href = "https://admin-provided-link.com"
    },
    {
      title: "Results of Induction'25",
      icon: <Trophy className="h-6 w-6 text-orange-500" />, 
      description: "View the results of the induction process.",
      action: () => window.location.href = "https://admin-provided-link.com/results"
    }
  ];

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl mokoto-text text-orange-500 text-center mb-6 tracking-[0.15em]">Induction Portal</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {resources.map((resource, index) => (
            <div 
              key={index}
              className="bg-black/50 p-6 rounded-lg border border-orange-500/20 hover:border-orange-500/40 transition-all cursor-pointer"
              onClick={resource.action}
            >
              <div className="mb-4">{resource.icon}</div>
              <h3 className="text-xl mokoto-text text-white mb-2 tracking-[0.15em]">{resource.title}</h3>
              <p className="text-gray-400">{resource.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Induction;

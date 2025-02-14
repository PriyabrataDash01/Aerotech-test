import React from 'react';

const Members = () => {
  const coordinators = [
    {
      
      leads: [
        { name: "ANJANEYA DAS", designation: "Coordinator", branch: "Mechanical Engineering", batch: "2026", image: "/src/images/boy-coordinator.jpg" },
        { name: "SMRITI MISHRA", designation: "Coordinator", branch: "Chemical Engineering", batch: "2026", image: "/src/images/girl-coordinator.jpg" }
      ]
    }
  ];
  const asstcoordinators = [
    {
      
      leads: [
        { name: "OMM PRAKASH SAHOO", designation: "Asst. Coordinator", branch: "Metallurgical & Materials Engineering", batch: "2027", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9" },
        { name: "STITI PRANGYA PARIDA", designation: "Asst. Coordinator", branch: "Electrical Engineering", batch: "2027", image: "https://images.unsplash.com/photo-1463453091185-61582044d556" }
      ]
    }
  ];
  const technicalDomains = [
    {
      domain: "Aerodynamics",
      leads: [
        { name: "Emily Brown", designation: "Domain Lead", branch: "Aerospace", batch: "2024", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9" },
        { name: "David Wilson", designation: "Co-Lead", branch: "Mechanical", batch: "2025", image: "https://images.unsplash.com/photo-1463453091185-61582044d556" }
      ],
      members: [
        { name: "Alice Brown", branch: "Mechanical", batch: "2026", image: "https://via.placeholder.com/150" },
        { name: "Bob White", branch: "Mechanical", batch: "2026", image: "https://via.placeholder.com/150" }
      ]
    },
    {
      domain: "CAD/CAM/CAE",
      leads: [
        { name: "Lisa Anderson", designation: "Domain Lead", branch: "Aerospace", batch: "2024", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6" },
        { name: "James Taylor", designation: "Co-Lead", branch: "Mechanical", batch: "2025", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" }
      ],
      members: [
        { name: "Alice Brown", branch: "Mechanical", batch: "2026", image: "https://via.placeholder.com/150" },
        { name: "Bob White", branch: "Mechanical", batch: "2026", image: "https://via.placeholder.com/150" }
      ]
    }
  ];

  const nonTechnicalDomains = [
    {
      domain: "PR Management & Finance",
      leads: [
        { name: "Sophia Lee", designation: "Domain Lead", branch: "Management", batch: "2024", image: "https://via.placeholder.com/150" },
        { name: "Ethan Harris", designation: "Co-Lead", branch: "Commerce", batch: "2025", image: "https://via.placeholder.com/150" }
      ],
      members: [
        { name: "Alice Brown", branch: "Mechanical", batch: "2026", image: "https://via.placeholder.com/150" },
        { name: "Bob White", branch: "Mechanical", batch: "2026", image: "https://via.placeholder.com/150" }
      ]
    },
    {
      domain: "Content Writing",
      leads: [
        { name: "Olivia Martinez", designation: "Domain Lead", branch: "English", batch: "2024", image: "https://via.placeholder.com/150" },
        { name: "Liam Johnson", designation: "Co-Lead", branch: "Journalism", batch: "2025", image: "https://via.placeholder.com/150" }
      ],
      members: [
        { name: "Alice Brown", branch: "Mechanical", batch: "2026", image: "https://via.placeholder.com/150" },
        { name: "Bob White", branch: "Mechanical", batch: "2026", image: "https://via.placeholder.com/150" }
      ]
    }
  ];

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl mokoto-text text-orange-500 mb-12 text-center tracking-[0.15em]">Our Team</h1>
        <h2 className="text-3xl mokoto-text text-white mb-8 text-center tracking-[0.15em]">Club Coordinators</h2>
        
        <div className="flex flex-wrap justify-center gap-16">
          <div>
            <h3 className="text-2xl mokoto-text text-orange-500 mb-6 text-center tracking-[0.15em]">Coordinators</h3>
            <div className="flex justify-center gap-6">
              {coordinators[0].leads.map((lead, index) => (
                <div key={index} className="bg-black/50 rounded-lg overflow-hidden border border-orange-500/20 p-6 w-48 md:w-56 text-center">
                  <img src={lead.image} alt={lead.name} className="w-full h-48 object-cover rounded" />
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold text-white">{lead.name}</h4>
                    <p className="text-orange-500 text-sm">{lead.designation}</p>
                    <p className="text-orange-500 text-sm">{lead.branch}</p>
                    <p className="text-gray-400 text-sm">Batch {lead.batch}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl mokoto-text text-orange-500 mb-6 text-center tracking-[0.15em]">Assistant Coordinators</h3>
            <div className="flex justify-center gap-6">
              {asstcoordinators[0].leads.map((lead, index) => (
                <div key={index} className="bg-black/50 rounded-lg overflow-hidden border border-orange-500/20 p-6 w-48 md:w-56 text-center">
                  <img src={lead.image} alt={lead.name} className="w-full h-48 object-cover rounded" />
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold text-white">{lead.name}</h4>
                    <p className="text-orange-500 text-sm">{lead.designation}</p>
                    <p className="text-orange-500 text-sm">{lead.branch}</p>
                    <p className="text-gray-400 text-sm">Batch {lead.batch}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <h2 className="text-3xl mokoto-text text-white mb-8 text-center mt-8 tracking-[0.15em]">Technical Domains</h2>
        {technicalDomains.map((domain, index) => (
          <div key={index} className="mb-12">
            <h3 className="text-2xl mokoto-text text-orange-500 mb-6 text-center tracking-[0.15em]">{domain.domain}</h3>
            
            <div className="flex justify-center gap-6 mb-6">
              {domain.leads.map((lead, leadIndex) => (
                <div key={leadIndex} className="bg-black/50 rounded-lg overflow-hidden border border-orange-500/20 p-6 w-48 md:w-56 text-center">
                  <img src={lead.image} alt={lead.name} className="w-full h-48 object-cover rounded" />
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold text-white">{lead.name}</h4>
                    <p className="text-orange-500 text-sm">{lead.designation}</p>
                    <p className="text-orange-500 text-sm">{lead.branch}</p>
                    <p className="text-gray-400 text-sm">Batch {lead.batch}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {domain.members.map((member, memberIndex) => (
                <div key={memberIndex} className="bg-black/50 rounded-lg overflow-hidden border border-orange-500/20 p-4 w-40 md:w-44">
                  <img src={member.image} alt={member.name} className="w-full h-32 object-cover rounded" />
                  <div className="text-center mt-3">
                    <h4 className="text-sm font-semibold text-white">{member.name}</h4>
                    <p className="text-orange-500 text-xs">{member.branch}</p>
                    <p className="text-gray-400 text-xs">Batch {member.batch}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <h2 className="text-3xl mokoto-text text-white mb-8 text-center tracking-[0.15em]">Non-Technical Domains</h2>
        {nonTechnicalDomains.map((domain, index) => (
          <div key={index} className="mb-12">
            <h3 className="text-2xl mokoto-text text-orange-500 mb-6 text-center tracking-[0.15em]">{domain.domain}</h3>
            
            <div className="flex justify-center gap-6 mb-6">
              {domain.leads.map((lead, leadIndex) => (
                <div key={leadIndex} className="bg-black/50 rounded-lg overflow-hidden border border-orange-500/20 p-6 w-48 md:w-56 text-center">
                  <img src={lead.image} alt={lead.name} className="w-full h-48 object-cover rounded" />
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold text-white">{lead.name}</h4>
                    <p className="text-orange-500 text-sm">{lead.designation}</p>
                    <p className="text-orange-500 text-sm">{lead.branch}</p>
                    <p className="text-gray-400 text-sm">Batch {lead.batch}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {domain.members.map((member, memberIndex) => (
                <div key={memberIndex} className="bg-black/50 rounded-lg overflow-hidden border border-orange-500/20 p-4 w-40 md:w-44">
                  <img src={member.image} alt={member.name} className="w-full h-32 object-cover rounded" />
                  <div className="text-center mt-3">
                    <h4 className="text-sm font-semibold text-white">{member.name}</h4>
                    <p className="text-orange-500 text-xs">{member.branch}</p>
                    <p className="text-gray-400 text-xs">Batch {member.batch}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Members;

//Acheivements
import React, { useState } from 'react';
import { Trophy } from 'lucide-react';

const Achievements = () => {
  const competitions = [
    {
      title: "SAE Aero Design Competition 2023",
      position: "1st Place",
      description: "Won first place in the Advanced Class category with our innovative micro-class aircraft design.",
      images: [
        "https://images.unsplash.com/photo-1557800636-894a64c1696f",
        "https://images.unsplash.com/photo-1559067515-bf7d799b6d4d"
      ]
    },
    {
      title: "Boeing Innovation Challenge",
      position: "2nd Place",
      description: "Recognized for our revolutionary drone delivery system concept.",
      images: [
        "https://images.unsplash.com/photo-1559067515-bf7d799b6d4d",
        "https://images.unsplash.com/photo-1566041510639-8d95a2490bfb"
      ]
    }
  ];

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl mokoto-text text-orange-500 mb-12 text-center tracking-[0.15em]">Our Achievements</h1>

        {/* Competition Achievements */}
        <section className="mb-16">
          <h2 className="text-3xl mokoto-text text-white mb-8 text-center tracking-[0.15em]">Competition Victories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {competitions.map((competition, index) => (
              <div key={index} className="bg-black/50 rounded-lg overflow-hidden border border-orange-500/20 hover:border-orange-500/40 transition-all transform hover:-translate-y-1">
                <div className="relative overflow-hidden group h-48">
                  <div className="absolute inset-0 flex transition-transform duration-500 ease-in-out group-hover:translate-x-[-100%]">
                    {competition.images.map((img, imgIndex) => (
                      <img key={imgIndex} src={img} alt={competition.title} className="w-full h-48 object-cover shrink-0" />
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <Trophy className="h-6 w-6 text-orange-500 mr-2" />
                    <h3 className="text-xl font-semibold text-white">{competition.title}</h3>
                  </div>
                  <p className="text-orange-500 mb-3">{competition.position}</p>
                  <p className="text-gray-400">{competition.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Achievements;

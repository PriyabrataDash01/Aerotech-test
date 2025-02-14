import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const UPDATES = [
  { id: "update1", title: 'Project Launch', image: 'https://images.unsplash.com/photo-1666919643134-d97687c1826c?w=200&h=200&fit=crop' },
  { id: "update2", title: 'Team Growth', image: 'https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=200&h=200&fit=crop' },
  { id: "update3", title: 'New Features', image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=200&h=200&fit=crop' },
  { id: "update4", title: 'Achievements', image: 'https://images.unsplash.com/photo-1517245386807-9b4911624009?w=200&h=200&fit=crop' },
  { id: "update5", title: 'Community', image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=200&h=200&fit=crop' },
  { id: "update6", title: 'Innovation', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=200&h=200&fit=crop' },
  { id: "update7", title: 'Milestones', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=200&fit=crop' },
  { id: "update8", title: 'Future Vision', image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=200&h=200&fit=crop' }
];

const Update = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroll = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 1;
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
          scrollRef.current.scrollLeft = 0;
        }
      }
    };
    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  const handleUpdateClick = (updateId: string) => {
    setIsHovered(updateId);
    setTimeout(() => navigate(`/updatedetails/${updateId}`), 300);
  };

  return (
    <div className="relative w-full overflow-hidden bg-black">
      <div className="container mx-auto px-4 py-8">
        <div className="overflow-hidden relative">
          <div ref={scrollRef} className="flex gap-4 py-4 px-2 whitespace-nowrap overflow-x-auto scrolling">
            {[...UPDATES, ...UPDATES].map((update, index) => (
              <div
                key={index}
                className={`w-48 sm:w-64 flex-none transform transition-all duration-300 cursor-pointer ${isHovered === update.id ? 'scale-95 opacity-80' : 'hover:scale-105'}`}
                onClick={() => handleUpdateClick(update.id)}
                onMouseEnter={() => setIsHovered(update.id)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <div className="relative w-full h-40 sm:h-48 rounded-xl overflow-hidden group">
                  <img
                    src={update.image}
                    alt={update.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm sm:text-lg font-bold text-white">{update.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>
        {`
          .scrolling::-webkit-scrollbar {
            display: none;
          }
          @media (max-width: 640px) {
            .group-hover\:scale-110 {
              transition: none;
            }
            .group-hover\:opacity-100 {
              transition: none;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Update;

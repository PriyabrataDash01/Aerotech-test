import React, { useState, useEffect } from 'react';
import { Plane, Users, Trophy, GraduationCap } from 'lucide-react';
import Update from './Update';
const Home = () => {
  const [counts, setCounts] = useState({ projects: 0, members: 0, awards: 0, alumni: 0 });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const heroMedia = [
    'src/videos/hero_video_1.mp4',
    'https://www.w3schools.com/html/movie.mp4',
    'https://images.unsplash.com/photo-1561559067515-bf7d799b6d4d',
    'https://images.unsplash.com/photo-1562559067515-bf7d799b6d4d'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentSlide((prev) => (prev + 1) % heroMedia.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) => ({
        projects: Math.min(prev.projects + 1, 10),
        members: Math.min(prev.members + 2, 50),
        awards: Math.min(prev.awards + 1, 15),
        alumni: Math.min(prev.alumni + 5, 100),
      }));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          {heroMedia[currentSlide].includes('mp4') ? (
            <video src={heroMedia[currentSlide]} autoPlay loop muted className="w-full h-full object-cover" />
          ) : (
            <img src={heroMedia[currentSlide]} alt="Hero" className="w-full h-full object-cover" />
          )}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col items-center justify-center">
          <button onClick={() => setIsPaused(!isPaused)} className="absolute top-4 right-4 bg-orange-500 p-2 rounded-md text-white">
            {isPaused ? 'Play' : 'Pause'}
          </button>
          <h1 className="text-4xl md:text-6xl mokoto-text text-orange-500 tracking-[0.12em]">FLY ABOVE AND BEYOND</h1>
          <p className="text-lg mokoto-text text-white mt-4 text-center max-w-2xl tracking-[0.15em]">
            The Official Aviation Club of VSSUT, Burla
          </p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-black/95 py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <Plane className="h-12 w-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">{counts.projects}+</h3>
            <p className="text-gray-400">Projects Completed</p>
          </div>
          <div className="text-center">
            <Users className="h-12 w-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">{counts.members}+</h3>
            <p className="text-gray-400">Active Members</p>
          </div>
          <div className="text-center">
            <Trophy className="h-12 w-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">{counts.awards}+</h3>
            <p className="text-gray-400">Awards Won</p>
          </div>
          <div className="text-center">
            <GraduationCap className="h-12 w-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">{counts.alumni}+</h3>
            <p className="text-gray-400">Alumni Network</p>
          </div>
        </div>
      </div>

      {/* Latest Updates Section */}
      <div className="py-16 bg-gradient-to-b from-black to-black-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl mokoto-text text-orange-500 mb-8 text-center tracking-[0.15em]">Latest Updates</h2>
          <Update />
        </div>
      </div>
    </div>
  );
};

export default Home;

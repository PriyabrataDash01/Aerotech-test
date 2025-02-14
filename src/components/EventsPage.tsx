import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

interface Event {
  id: string;
  name: string;
  date: string;
  time: string;
  location: string;
  status: 'upcoming' | 'completed';
  description: string;
  image: string;
  attendees: number;
}

const events: Event[] = [
  {
    id: "aerotech-symposium-2025",
    name: "AeroTech Symposium 2025",
    date: "March 15, 2025",
    time: "10:00 AM",
    location: "VSSUT Auditorium",
    status: "upcoming",
    description: "A technical symposium featuring aerospace innovations and research presentations.",
    image: "https://source.unsplash.com/400x300/?aerospace,symposium",
    attendees: 250
  },
  {
    id: "drone-racing-championship",
    name: "Drone Racing Championship",
    date: "January 20, 2025",
    time: "2:00 PM",
    location: "Main Ground",
    status: "completed",
    description: "A high-speed drone racing event showcasing agility and technology.",
    image: "https://source.unsplash.com/400x300/?drone,race",
    attendees: 100
  },
  {
    id: "ai-in-aviation-webinar",
    name: "AI in Aviation Webinar",
    date: "April 10, 2025",
    time: "5:00 PM",
    location: "Online",
    status: "upcoming",
    description: "An online webinar discussing the role of AI in modern aviation.",
    image: "https://source.unsplash.com/400x300/?ai,aviation",
    attendees: 300
  },
];

const EventCard: React.FC<{ event: Event }> = ({ event }) => (
  <Link to={`/events/${event.id}`} className="block bg-black-800 rounded-lg overflow-hidden border border-orange-500/20 hover:border-orange-500/40 transition-all transform hover:-translate-y-1">
    <img src={event.image} alt={event.name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h2 className="text-lg font-semibold text-white mb-1">{event.name}</h2>
      <p className="text-orange-500 mb-1">{event.date} | {event.time}</p>
      <p className="text-gray-400 mb-1">{event.location}</p>
      <p className="text-gray-300 text-sm mb-2">{event.description}</p>
      <div className="flex items-center text-gray-400">
        <Users className="h-4 w-4 text-orange-500 mr-2" />
        <span>{event.attendees} Attendees</span>
      </div>
    </div>
  </Link>
);

const Events: React.FC = () => {
  return (
    <div className="pt-20 pb-16 bg-black-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl mokoto-text tracking-[0.15em] text-orange-500 mb-12 text-center">Events</h1>
        
        <h2 className="text-3xl mokoto-text tracking-[0.15em] text-center mb-6">Upcoming Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {events.filter(e => e.status === "upcoming").map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        <h2 className="text-3xl mokoto-text tracking-[0.15em] text-center font-bold mb-6">Completed Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.filter(e => e.status === "completed").map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;

import React from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, Clock, MapPin, Users, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface EventDetail {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  type: 'upcoming' | 'completed';
  thumbnail: string;
  attendees: number;
  description: string;
  schedule: Array<{
    time: string;
    activity: string;
  }>;
  gallery: string[];
  videoUrl?: string;
  registrationLink?: string;
}

const eventDetails: Record<string, EventDetail> = {
  'ai-in-aviation-webinar': {
    id: 'aerotech-symposium-2024',
    title: 'AeroTech Symposium 2024',
    date: 'March 25, 2024',
    time: '10:00 AM',
    location: 'VSSUT Auditorium',
    type: 'upcoming',
    thumbnail: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87',
    attendees: 200,
    description: `Join us for the annual AeroTech Symposium 2024, where industry leaders and academic experts come together to discuss the latest developments in aerospace technology. This year's symposium will feature keynote speakers from leading aerospace companies, technical paper presentations, and interactive panel discussions.

The event will cover topics including:
• Advanced propulsion systems
• Urban air mobility
• Sustainable aviation
• Space exploration technologies`,
    schedule: [
      { time: '10:00 AM', activity: 'Opening Ceremony' },
      { time: '10:30 AM', activity: 'Keynote Speech' },
      { time: '11:30 AM', activity: 'Technical Sessions' },
      { time: '1:00 PM', activity: 'Lunch Break' },
      { time: '2:00 PM', activity: 'Panel Discussion' },
      { time: '4:00 PM', activity: 'Closing Ceremony' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1517976547714-720226b864c1',
      'https://images.unsplash.com/photo-1517976384346-3136801d605d',
      'https://images.unsplash.com/photo-1527239441953-caffd968d952'
    ],
    videoUrl: 'https://www.youtube.com/embed/your-video-id',
    registrationLink: 'https://forms.example.com/register'
  },
  // Add more event details as needed
};

const EventDetails = () => {
  const { id } = useParams<{ id: string }>();
  const event = id ? eventDetails[id] : null;

  if (!event) {
    return (
      <div className="pt-20 pb-16 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-orange-500 mb-4">Event Not Found</h1>
          <Link to="/events" className="text-white hover:text-orange-500">
            Return to Events
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Back Button */}
        <Link 
          to="/events"
          className="inline-flex items-center text-orange-500 hover:text-orange-400 mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Events
        </Link>

        {/* Hero Section */}
        <div className="relative h-96 rounded-lg overflow-hidden mb-12">
          <img 
            src={event.thumbnail}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <h1 className="text-4xl font-bold text-white mb-4">{event.title}</h1>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center text-white">
                <Calendar className="h-5 w-5 text-orange-500 mr-2" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center text-white">
                <Clock className="h-5 w-5 text-orange-500 mr-2" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center text-white">
                <MapPin className="h-5 w-5 text-orange-500 mr-2" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center text-white">
                <Users className="h-5 w-5 text-orange-500 mr-2" />
                <span>{event.attendees} Attendees</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-2">
            {/* Description */}
            <div className="bg-black/50 rounded-lg p-8 border border-orange-500/20 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">About the Event</h2>
              <div className="text-gray-300 whitespace-pre-line">
                {event.description}
              </div>
            </div>

            {/* Gallery */}
            <div className="bg-black/50 rounded-lg p-8 border border-orange-500/20 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {event.gallery.map((image, index) => (
                  <img 
                    key={index}
                    src={image}
                    alt={`Event ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                ))}
              </div>
            </div>

            {/* Video */}
            {event.videoUrl && (
              <div className="bg-black/50 rounded-lg p-8 border border-orange-500/20">
                <h2 className="text-2xl font-bold text-white mb-4">Event Video</h2>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src={event.videoUrl}
                    title="Event Video"
                    className="w-full h-96 rounded-lg"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}
          </div>

          {/* Right Column */}
          <div className="lg:col-span-1">
            {/* Schedule */}
            <div className="bg-black/50 rounded-lg p-8 border border-orange-500/20 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Schedule</h2>
              <div className="space-y-4">
                {event.schedule.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-orange-500/10 rounded px-3 py-1 text-orange-500 font-medium min-w-[100px]">
                      {item.time}
                    </div>
                    <div className="ml-4 text-gray-300">
                      {item.activity}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Registration Button */}
            {event.type === 'upcoming' && event.registrationLink && (
              <a
                href={event.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-orange-500 text-white text-center py-3 rounded-lg hover:bg-orange-600 transition-colors"
              >
                Register Now
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
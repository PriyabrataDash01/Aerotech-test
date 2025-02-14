import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const UPDATES = [
  {
    id: "update1",
    title: 'Project Launch',
    description: "Exciting milestone as we launch our innovative project, bringing new possibilities to our users.",
    image: 'https://images.unsplash.com/photo-1666919643134-d97687c1826c?w=400&h=400&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1517976547714-720226b864c1?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1517976384346-3136801d605d?w=400&h=300&fit=crop'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  }
];

const UpdateDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const update = UPDATES.find((item) => item.id === id);

  if (!update) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-500 mb-4">Update Not Found</h1>
          <button
            onClick={() => {
              navigate("/");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-orange-500 hover:text-orange-400 transition-colors duration-200 flex items-center gap-2"
          >
            <ArrowLeft size={20} />
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white pt-20 px-4">
      <div className="max-w-4xl mx-auto py-12">
        {/* Back to Home Button */}
        <button
          onClick={() => {
            navigate("/");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-orange-500 hover:text-orange-400  mokoto-text tracking-[0.1em] transition-colors duration-200 flex items-center gap-2 mb-8"
        >
          <ArrowLeft size={20} />
          Back to Home
        </button>

        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl mokoto-text mb-4 tracking-[0.15em]">{update.title}</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">{update.description}</p>
        </div>

        {/* Main Image */}
        <div className="relative aspect-video rounded-xl overflow-hidden">
          <img
            src={update.image}
            alt={update.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Gallery Section */}
        {update.gallery.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-6">Gallery</h2>
            <div className="grid grid-cols-2 gap-4">
              {update.gallery.map((img, index) => (
                <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
                  <img
                    src={img}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Video Section */}
        {update.videoUrl && (
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-6">Featured Video</h2>
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <iframe
                src={update.videoUrl}
                title="Update Video"
                className="absolute inset-0 w-full h-full"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UpdateDetails;

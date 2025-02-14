import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl mokoto-text text-orange-500 mb-12 text-center tracking-[0.15em]">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-black/50 p-8 rounded-lg border border-orange-500/20">
            <h2 className="text-2xl mokoto-text text-white mb-6 tracking-[0.15em]">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-orange-500 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Address</h3>
                  <p className="text-gray-400">
                    VSSUT, Burla<br />
                    Sambalpur, Odisha<br />
                    PIN - 768018
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-orange-500 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                  <p className="text-gray-400">aerotech@vssut.ac.in</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-orange-500 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                  <p className="text-gray-400">+91 1234567890</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="bg-black/50 p-8 rounded-lg border border-orange-500/20">
            <h2 className="text-2xl mokoto-text text-white mb-6 tracking-[0.15em]">Our Location</h2>
            <div className="h-64 w-full rounded-lg overflow-hidden">
              <iframe
                title="VSSUT Location"
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.114298217432!2d83.89669401485623!3d21.49766418573739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a20ff13d5b6a4a1%3A0x4a2bdc5b0ebedb5!2sVeer%20Surendra%20Sai%20University%20of%20Technology!5e0!3m2!1sen!2sin!4v1618235399377!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

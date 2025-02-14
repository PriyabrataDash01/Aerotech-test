import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, Instagram, Linkedin, Mail, Twitter } from 'lucide-react';
import logo from '/src/images/logo.jpg';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'Members', path: '/members' },
    { name: 'Alumni', path: '/alumni' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Induction', path: '/induction' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { icon: <Twitter className="h-5 w-5" />, url: '#', label: 'X' },
    { icon: <Instagram className="h-5 w-5" />, url: '#', label: 'Instagram' },
    { icon: <Linkedin className="h-5 w-5" />, url: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-black/95 border-t border-orange-500/20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <img src={logo} alt="AeroTech Logo" className="h-10 w-10" />
              <span className="text-3xl mokoto-text text-orange-500 text-center tracking-[0.15em]">AEROTECH</span>
            </Link>
            <p className="text-gray-400 mb-4">
              A Team to excel in the field of Aviation and UAVs🛩️
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-white mokoto-text mb-4 tracking-[0.15em]">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-white mokoto-text mb-4 tracking-[0.15em]">Contact Us</h3>
            <div className="space-y-2 text-gray-400">
              <p>VSSUT, Burla</p>
              <p>Sambalpur, Odisha</p>
              <p>PIN - 768018</p>
              <div className="flex items-center space-x-2 mt-4">
                <Mail className="h-5 w-5 text-orange-500" />
                <a href="mailto:aerotech@vssut.ac.in" className="hover:text-orange-500 transition-colors">
                  aerotech@vssut.ac.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-orange-500/20 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Aerotech VSSUT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

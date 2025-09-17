"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowUp,
  Facebook,
  Heart,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Twitter,
} from "lucide-react";
import Image from "next/image";

const navigation = {
  main: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Features", href: "#features" },
    { name: "Contact", href: "#contact" },
  ],
  services: [
    { name: "Ayurvedic Treatment", href: "#" },
    { name: "Panchakarma Therapy", href: "#" },
    { name: "Health Camps", href: "#" },
    { name: "Consultation", href: "#" },
  ],
  support: [
    { name: "Patient Support", href: "#" },
    { name: "Insurance Help", href: "#" },
    { name: "EMI Options", href: "#" },
    { name: "Find Hospital", href: "#" },
  ],
};

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1MbWHTp7D8/",
    icon: Facebook,
    color: "hover:text-blue-600",
  },
  {
    name: "Twitter",
    href: "https://x.com/Krishna08241873/status/1968224814684049541",
    icon: Twitter,
    color: "hover:text-blue-400",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ayu_rakshak3?igsh=MXB2YXhkejU3Zm85NQ==",
    icon: Instagram,
    color: "hover:text-pink-600",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ayu-rakshak-0b9a91384?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    icon: Linkedin,
    color: "hover:text-blue-700",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/919259651812",
    icon: MessageCircle,
    color: "hover:text-green-600",
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute -top-6 right-8 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition-colors duration-300"
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-3 mb-6"
            >
              <Image
                src="/AyurRakshakImageLogo.jpeg"
                alt="Ayurakshak Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <h3 className="text-xl font-bold text-orange-600">
                  AYURAKSHAK
                </h3>
                <p className="text-gray-400 text-sm">
                  Care • Restore • Protect
                </p>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-400 mb-6 leading-relaxed"
            >
              Dedicated to reviving ancient healing wisdom through accessible
              Ayurveda health camps, medicinal plant gardens, and holistic
              education.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-3"
            >
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-4 h-4" />
                <span className="text-sm">ayurakshak2@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91 92596 51812</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-400">
                <MapPin className="w-4 h-4 mt-1" />
                <span className="text-sm">
                  H no -1202 NIRMALA A, RADHA VALLEY,
                  <br />
                  MATHURA, UP, India
                </span>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h4 className="text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-3 mb-6">
              {navigation.support.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Emergency Contact */}
            <div className="bg-green-600 rounded-lg p-4">
              <h5 className="font-semibold mb-2">Emergency Contact</h5>
              <p className="text-sm text-green-100 mb-3">
                24/7 Medical Support Available
              </p>
              <Button
                size="sm"
                variant="secondary"
                className="w-full bg-white text-green-600 hover:bg-gray-100"
                onClick={() => window.open("tel:+919259651812", "_self")}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-gray-800 pt-8 mb-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`text-gray-400 ${social.color} transition-colors duration-300`}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm mb-2">
                Registered NGO • 80G Tax Deductible
              </p>
              <p className="text-gray-400 text-sm">
                Government Certified • Transparent Operations
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 text-gray-400 text-sm mb-4 md:mb-0">
            <div className="flex items-center space-x-2">
              <span>© 2025 Ayurakshak. All rights reserved.</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>Made with care for your wellness</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>•</span>
              <span>Developed by</span>
              <a
                href="https://kush-personal-portfolio-my-portfolio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors duration-300 font-medium"
              >
                Kush Vardhan
              </a>
            </div>
          </div>

          <div className="flex space-x-6 text-gray-400 text-sm">
            <a
              href="#"
              className="hover:text-green-400 transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-green-400 transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-green-400 transition-colors duration-300"
            >
              Disclaimer
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Mail, Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const navigation = [
  { name: "Home", href: "#home" },
  {
    name: "Services",
    href: "#services",
    dropdown: [
      { name: "Ayurvedic Treatment", href: "#ayurvedic-treatment" },
      { name: "Panchakarma Therapy", href: "#panchakarma" },
      { name: "Natural Healing", href: "#natural-healing" },
    ],
  },
  {
    name: "Diseases",
    href: "#diseases",
    dropdown: [
      { name: "Kidney Disease", href: "#kidney-disease" },
      { name: "Liver Disease", href: "#liver-disease" },
      { name: "Cancer", href: "#cancer" },
      { name: "Heart Disease", href: "#heart-disease" },
      { name: "Diabetes", href: "#diabetes" },
      { name: "Blood Pressure", href: "#blood-pressure" },
    ],
  },
  { name: "About Ayurakshak", href: "#about" },
  { name: "Contact Us", href: "#contact" },
  {
    name: "Patient Stories",
    href: "#patient-stories",
    dropdown: [
      { name: "Patient Testimonials", href: "#testimonials" },
      { name: "Case Studies", href: "#case-studies" },
    ],
  },
  { name: "Camps", href: "#camps" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-effect shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <Image
              src="/AyurRakshakImageLogo.jpeg"
              alt="Ayurakshak Logo"
              width={60}
              height={60}
              className="rounded-full w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16"
            />
            <div className="block">
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-green-600">
                Ayurakshak
              </h1>
              <p className="text-xs sm:text-sm text-gray-600 hidden sm:block">
                Care • Restore • Protect
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <motion.a
                  href={item.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 flex items-center space-x-1"
                >
                  <span>{item.name}</span>
                  {item.dropdown && (
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  )}
                </motion.a>

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="py-2">
                      {item.dropdown.map((dropdownItem) => (
                        <a
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
                        >
                          {dropdownItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="w-4 h-4" />
              <span>+91 92596 51812</span>
            </div>
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              Get Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass-effect border-t border-white/20"
          >
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ x: 10 }}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-700 hover:text-orange-600 font-medium py-2 transition-colors duration-200"
                >
                  {item.name}
                </motion.a>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-3">
                  <Phone className="w-4 h-4" />
                  <span>+91 92596 51812</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
                  <Mail className="w-4 h-4" />
                  <span>ayurakshak2@gmail.com</span>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  Get Consultation
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

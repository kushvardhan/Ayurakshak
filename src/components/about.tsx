"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Heart, Users, Award, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const trustBadges = [
  {
    icon: Award,
    title: "Registered NGO",
    subtitle: "Government Certified",
    color: "text-green-600"
  },
  {
    icon: Shield,
    title: "80G Certified",
    subtitle: "Tax Deductible",
    color: "text-blue-600"
  },
  {
    icon: Users,
    title: "Community Driven",
    subtitle: "Local Partnerships",
    color: "text-purple-600"
  },
  {
    icon: Heart,
    title: "100% Transparent",
    subtitle: "Audited Financials",
    color: "text-red-600"
  }
];

const stats = [
  { number: "30,000+", label: "Patients Treated", suffix: "" },
  { number: "55+", label: "Hospital Network", suffix: "" },
  { number: "900+", label: "Ayurveda Doctors", suffix: "" },
  { number: "100%", label: "Natural Treatment", suffix: "" }
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">About Ayurakshak</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Reviving ancient healing wisdom through accessible Ayurveda health camps, 
            medicinal plant gardens, holistic education and natural disaster relief.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/TeamPicture.jpeg"
                alt="Ayurakshak Team"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 border border-green-100"
            >
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">2025</div>
                <div className="text-sm text-gray-600">Years of Service</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Dedicated to Reviving Ancient Healing Wisdom
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Ayurakshak is a registered naturopathy NGO in India dedicated to making 
              traditional Ayurvedic healing accessible to all. We partner with local 
              healers and communities to provide holistic healthcare solutions.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our comprehensive approach includes health camps, medicinal plant gardens, 
              educational programs, and emergency relief efforts. We believe in the power 
              of nature to heal and restore balance to both individuals and communities.
            </p>
            
            {/* Key Points */}
            <div className="space-y-4">
              {[
                "100% Natural Ayurvedic treatments with zero side effects",
                "Network of 55+ hospitals and 70+ clinics across India",
                "900+ certified Ayurveda doctors and Panchakarma therapists",
                "Success in treating kidney failure, liver failure, and heart diseases"
              ].map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700">{point}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {trustBadges.map((badge, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="text-center p-6 border-2 hover:border-green-200 transition-all duration-300">
                <CardContent className="p-0">
                  <badge.icon className={`w-12 h-12 mx-auto mb-4 ${badge.color}`} />
                  <h4 className="font-semibold text-gray-900 mb-1">{badge.title}</h4>
                  <p className="text-sm text-gray-600">{badge.subtitle}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

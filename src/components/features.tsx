"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import {
    Award,
    Clock,
    Heart,
    Home,
    Leaf,
    MapPin,
    Phone,
    Shield,
    Stethoscope,
    Users,
} from "lucide-react";
import { useRef } from "react";

const features = [
  {
    icon: Heart,
    title: "100% Natural Treatment",
    description:
      "Zero side effects with authentic Ayurvedic medicines and therapies",
    color: "text-red-500",
    bgColor: "bg-red-50",
  },
  {
    icon: Shield,
    title: "Cashless & Reimbursement",
    description: "100% cashless facility with insurance reimbursement support",
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "900+ certified Ayurveda doctors and Panchakarma therapists",
    color: "text-purple-500",
    bgColor: "bg-purple-50",
  },
  {
    icon: MapPin,
    title: "Pan India Network",
    description: "55+ hospitals and 70+ clinics across India for easy access",
    color: "text-green-500",
    bgColor: "bg-green-50",
  },
  {
    icon: Award,
    title: "Proven Success",
    description:
      "Success in kidney failure, liver failure, and heart disease reversal",
    color: "text-yellow-500",
    bgColor: "bg-yellow-50",
  },
  {
    icon: Clock,
    title: "Easy EMI Options",
    description:
      "Pay in EMI with 0% interest facility for affordable treatment",
    color: "text-indigo-500",
    bgColor: "bg-indigo-50",
  },
];

const treatments = [
  {
    icon: Stethoscope,
    title: "Ayurveda",
    description: "Traditional Ayurvedic medicines and treatments",
  },
  {
    icon: Leaf,
    title: "Panchakarma Therapies",
    description: "Detoxification and rejuvenation treatments",
  },
  {
    icon: Heart,
    title: "Diet & Lifestyle",
    description: "Personalized nutrition and lifestyle guidance",
  },
  {
    icon: Home,
    title: "Naturopathy",
    description: "Natural healing methods and therapies",
  },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-12 md:py-16 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
            Why Choose <span className="gradient-text">Ayurakshak</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Experience the best of traditional Ayurveda with modern healthcare
            facilities and comprehensive support for your wellness journey.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="h-full border-2 border-transparent hover:border-green-200 transition-all duration-300 shadow-lg hover:shadow-2xl">
                <CardContent className="p-4 md:p-6 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className={`w-12 h-12 md:w-14 md:h-14 mx-auto mb-3 md:mb-4 rounded-full ${feature.bgColor} flex items-center justify-center`}
                  >
                    <feature.icon className={`w-6 h-6 md:w-7 md:h-7 ${feature.color}`} />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Treatment Methods */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              How We <span className="gradient-text">Treat Diseases</span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our holistic approach combines multiple traditional healing
              methods for comprehensive treatment and lasting wellness.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {treatments.map((treatment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center"
                >
                  <treatment.icon className="w-6 h-6 text-green-600" />
                </motion.div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  {treatment.title}
                </h4>
                <p className="text-sm text-gray-600">{treatment.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Healing Journey?
            </h3>
            <p className="text-green-100 mb-8 max-w-2xl mx-auto">
              Join thousands of patients who have experienced the power of
              authentic Ayurvedic treatment with our expert team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="tel:+919000000000"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold flex items-center space-x-2 hover:bg-gray-100 transition-colors duration-300"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now: +91 90000 00000</span>
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-all duration-300"
              >
                Book Consultation
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

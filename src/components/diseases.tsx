"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { Activity, Droplets, Heart, Shield, Zap } from "lucide-react";
import { useRef } from "react";

const diseases = [
  {
    id: 1,
    icon: Activity,
    title: "Kidney Disease",
    description: "If left Untreated, it can lead to kidney failure.",
    fullDescription:
      "Our Ayurvedic approach to kidney disease focuses on natural detoxification and restoration of kidney function through herbal medicines and Panchakarma therapies.",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  {
    id: 2,
    icon: Shield,
    title: "Liver Disease",
    description: "Catching it early can prevent liver damage.",
    fullDescription:
      "Comprehensive liver care using traditional Ayurvedic treatments that help regenerate liver cells and improve overall liver function naturally.",
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
  },
  {
    id: 3,
    icon: Heart,
    title: "Cancer",
    description: "Early management can reverse cancer.",
    fullDescription:
      "Holistic cancer care combining Ayurvedic medicines with lifestyle modifications to support the body's natural healing mechanisms.",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
  },
  {
    id: 4,
    icon: Heart,
    title: "Heart Disease",
    description: "Manage your heart health to avoid failure.",
    fullDescription:
      "Natural heart care through Ayurvedic treatments that strengthen the cardiovascular system and improve heart function without side effects.",
    color: "text-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
  },
  {
    id: 5,
    icon: Droplets,
    title: "Blood Pressure",
    description: "Reverse BP & protect your self.",
    fullDescription:
      "Effective blood pressure management using natural Ayurvedic remedies that address the root cause and provide long-term relief.",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
  },
  {
    id: 6,
    icon: Zap,
    title: "Diabetes",
    description: "Reverse diabetes to avoid serious problems.",
    fullDescription:
      "Comprehensive diabetes management through Ayurvedic medicines and dietary modifications that help regulate blood sugar naturally.",
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200",
  },
];

export default function Diseases() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="diseases" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Diseases and Conditions{" "}
            <span className="text-orange-600">We Treat</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our expert Ayurvedic doctors provide natural, effective treatments
            for various chronic and acute health conditions with proven results.
          </p>
        </motion.div>

        {/* Diseases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {diseases.map((disease, index) => (
            <motion.div
              key={disease.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card
                className={`h-full border-2 ${disease.borderColor} hover:shadow-xl transition-all duration-300 warm-shadow`}
              >
                <CardContent className="p-4 md:p-6 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className={`w-12 h-12 md:w-14 md:h-14 mx-auto mb-3 md:mb-4 rounded-full ${disease.bgColor} flex items-center justify-center`}
                  >
                    <disease.icon
                      className={`w-6 h-6 md:w-7 md:h-7 ${disease.color}`}
                    />
                  </motion.div>

                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                    {disease.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4 leading-relaxed">
                    {disease.description}
                  </p>
                  <p className="text-xs md:text-sm text-gray-500 mb-4 md:mb-5 line-clamp-2">
                    {disease.fullDescription}
                  </p>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="sm"
                      className={`w-full bg-green-600 hover:bg-green-700 text-white text-sm`}
                      onClick={() => window.open("tel:+919259651812", "_self")}
                    >
                      Get Treatment
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="warm-gradient-bg rounded-2xl p-8 md:p-12 border border-orange-200">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Don't See Your Condition Listed?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              We treat many other conditions with our comprehensive Ayurvedic
              approach. Contact our experts for a personalized consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full"
                  onClick={() => window.open("tel:+919259651812", "_self")}
                >
                  Call Now: +91 92596 51812
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-3 rounded-full"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Book Consultation
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

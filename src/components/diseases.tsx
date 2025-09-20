"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import {
  Shield,
  Heart,
  ActivitySquare,
  Bone,
  Stethoscope,
  Droplets,
  Brain,
  FlaskRound,
  Flame,
  Pill,
  Microscope,
  AlertTriangle,
  Thermometer,
  Moon,
  HeartPulse,
  Eye,
  Mars,
} from "lucide-react";
import { useRef,useState } from "react";

const diseases = [
  {
    id: 1,
    icon: Shield,
    title: "Liver Disease",
    description: "Catching it early can prevent liver damage.",
    fullDescription:
      "Comprehensive liver care using traditional Naturopathy & Ayurvedic treatments that help regenerate liver cells and improve overall liver function naturally.",
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
  },
  {
    id: 2,
    icon: Heart,
    title: "Osteoporosis",
    description: "Weak bones increase fracture risk.",
    fullDescription:
      "Naturopathy & Ayurvedic treatments for osteoporosis focus on balancing calcium metabolism, strengthening bones with herbal formulations, and dietary guidance.",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
  },
  {
    id: 3,
    icon: ActivitySquare,
    title: "Osteoarthritis",
    description: "Joint pain worsens with age and wear.",
    fullDescription:
      "Therapies aim to reduce inflammation, lubricate joints, and restore mobility using Naturopathy & Ayurvedic treatments, massage, and herbal medicines.",
    color: "text-pink-600",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-200",
  },
  {
    id: 4,
    icon: Bone,
    title: "Rheumatoid Arthritis",
    description: "An autoimmune condition causing painful joints.",
    fullDescription:
      "Our holistic Naturopathy & Ayurvedic care reduces inflammation, boosts immunity, and restores mobility naturally for rheumatoid arthritis patients.",
    color: "text-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
  },
  {
    id: 5,
    icon: Flame,
    title: "Liver Psoriasis",
    description: "Inflammation can damage liver tissue severely.",
    fullDescription:
      "Naturopathy & Ayurvedic treatments help manage liver psoriasis by detoxifying the liver, reducing inflammation, and restoring healthy liver function.",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
  },
  {
    id: 6,
    icon: FlaskRound,
    title: "Fatty Liver",
    description: "Too much fat in the liver can cause long-term damage.",
    fullDescription:
      "We use herbal medicines, dietary corrections, and Naturopathy & Ayurvedic treatments to reverse fatty liver and improve metabolism.",
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200",
  },
  {
    id: 7,
    icon: AlertTriangle,
    title: "Portal Hypertension",
    description: "Increased blood pressure in the liver’s veins.",
    fullDescription:
      "Naturopathy & Ayurvedic treatments focus on balancing blood pressure in liver channels, preventing complications, and strengthening digestion.",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-200",
  },
  {
    id: 8,
    icon: Droplets,
    title: "Oedema",
    description: "Swelling due to fluid retention.",
    fullDescription:
      "Our treatments aim at improving kidney and liver function to remove excess fluid naturally and reduce swelling.",
    color: "text-teal-600",
    bgColor: "bg-teal-50",
    borderColor: "border-teal-200",
  },
  {
    id: 9,
    icon: Flame,
    title: "Pancreatitis",
    description: "Inflammation of the pancreas causes severe pain.",
    fullDescription:
      "Naturopathy & Ayurvedic treatments support pancreatic health with herbal medicines, detox therapies, and dietary modifications.",
    color: "text-rose-600",
    bgColor: "bg-rose-50",
    borderColor: "border-rose-200",
  },
  {
    id: 10,
    icon: Pill,
    title: "Kidney Stones",
    description: "Crystals in kidneys cause pain and blockages.",
    fullDescription:
      "Herbal medicines dissolve stones naturally and prevent recurrence with Naturopathy & Ayurvedic treatments and lifestyle guidance.",
    color: "text-cyan-600",
    bgColor: "bg-cyan-50",
    borderColor: "border-cyan-200",
  },
  {
    id: 11,
    icon: Brain,
    title: "Stress",
    description: "Chronic stress affects body and mind.",
    fullDescription:
      "Naturopathy & Ayurvedic treatments use meditation, herbs, and therapies like Shirodhara to calm the mind and balance stress hormones.",
    color: "text-gray-700",
    bgColor: "bg-gray-100",
    borderColor: "border-gray-300",
  },
  {
    id: 12,
    icon: Mars,
    title: "Infertility",
    description: "Difficulty in conceiving naturally.",
    fullDescription:
      "Naturopathy & Ayurvedic treatments balance hormones, improve reproductive health, and enhance fertility in men and women.",
    color: "text-lime-600",
    bgColor: "bg-lime-50",
    borderColor: "border-lime-200",
  },
  {
    id: 13,
    icon: HeartPulse,
    title: "Hypoactive Sexual Desire Disorder",
    description: "Low sexual desire affecting relationships.",
    fullDescription:
      "Naturopathy & Ayurvedic herbs and therapies restore vitality, improve circulation, and enhance natural desire.",
    color: "text-fuchsia-600",
    bgColor: "bg-fuchsia-50",
    borderColor: "border-fuchsia-200",
  },
  {
    id: 14,
    icon: Microscope,
    title: "Diabetes Mellitus",
    description: "Chronic condition of high blood sugar.",
    fullDescription:
      "Naturopathy & Ayurvedic treatments help control diabetes with herbal medicines, lifestyle correction, and Panchakarma therapies.",
    color: "text-sky-600",
    bgColor: "bg-sky-50",
    borderColor: "border-sky-200",
  },
  {
    id: 15,
    icon: Moon,
    title: "Insomnia",
    description: "Difficulty in falling or staying asleep.",
    fullDescription:
      "Therapies like Abhyanga and Shirodhara with calming herbs promote natural, restful sleep.",
    color: "text-violet-600",
    bgColor: "bg-violet-50",
    borderColor: "border-violet-200",
  },
  {
    id: 16,
    icon: Stethoscope,
    title: "Cancer",
    description: "Uncontrolled cell growth damaging the body.",
    fullDescription:
      "Naturopathy & Ayurvedic treatments focus on immunity, detoxification, and symptom relief alongside conventional treatments.",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
  },
  {
    id: 17,
    icon: Heart,
    title: "Heart Disease",
    description: "Affects heart’s function and circulation.",
    fullDescription:
      "Naturopathy & Ayurvedic treatments balances cholesterol, improves blood flow, and strengthens the heart naturally with herbs and therapies.",
    color: "text-red-700",
    bgColor: "bg-red-100",
    borderColor: "border-red-300",
  },
  {
    id: 18,
    icon: Thermometer,
    title: "Blood Pressure",
    description: "High or low blood pressure impacts health.",
    fullDescription:
      "Naturopathy & Ayurvedic treatments regulate blood pressure by balancing doshas and improving circulation naturally.",
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
  },
  {
    id: 19,
    icon: Eye,
    title: "Diabetes",
    description: "A common lifestyle disease with rising cases.",
    fullDescription:
      "Specialized Naturopathy & Ayurvedic treatments aim to regulate blood sugar, prevent complications, and improve energy.",
    color: "text-green-700",
    bgColor: "bg-green-100",
    borderColor: "border-green-300",
  },
];

export default function Diseases() {
  const [visibleCount, setVisibleCount] = useState(6);
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
            Our expert Naturopathy & Ayurvedic doctors provide natural, effective treatments
            for various chronic and acute health conditions with proven results.
          </p>
        </motion.div>

        {/* Diseases Grid */}
         <div className="mb-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {diseases.slice(0, visibleCount).map((disease, index) => (
          <motion.div
            key={disease.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group"
          >
            <Card className={`h-full border-2 ${disease.borderColor} hover:shadow-xl transition-all duration-300 warm-shadow`}>
              <CardContent className="p-4 md:p-6 text-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className={`w-12 h-12 md:w-14 md:h-14 mx-auto mb-3 md:mb-4 rounded-full ${disease.bgColor} flex items-center justify-center`}
                >
                  <disease.icon className={`w-6 h-6 md:w-7 md:h-7 ${disease.color}`} />
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

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="sm"
                    className="w-full bg-green-600 hover:bg-green-700 text-white text-sm"
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

      {visibleCount < diseases.length && (
        <div className="flex justify-center mt-6">
<Button
  className="relative bg-gray-100 text-gray-700 hover:bg-gray-200 px-6 py-2 rounded-md overflow-hidden"
  onClick={() => setVisibleCount((prev) => prev + 6)}
>
  Show More
</Button>
  </div>
      )}
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
              Don&apos;t See Your Condition Listed?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              We treat many other conditions with our comprehensive Naturopathy & Ayurvedic
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
